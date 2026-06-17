from __future__ import annotations

import html
import json
import os
import re
import zipfile
from collections import OrderedDict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
DOWNLOADS = Path(r"C:\Users\jared\Downloads")
SOURCE_DATA = Path(os.environ["TEMP"]) / "pdc-source-data.json"


def normalize_space(text: str | None) -> str:
    return re.sub(r"\s+", " ", (text or "").replace("\u00a0", " ")).strip()


def clean_note_text(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = text.replace("\u00a0", " ").replace("\x0b", " ")
    text = re.sub(r"<!--\s*Slide number:\s*\d+\s*-->", "", text, flags=re.I)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "[image omitted from source notes]", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def extract_docx_text(path: Path) -> str:
    with zipfile.ZipFile(path) as archive:
        xml = archive.read("word/document.xml").decode("utf-8")

    paragraphs: list[str] = []
    for paragraph_xml in re.findall(r"<w:p[\s\S]*?</w:p>", xml):
        pieces: list[str] = []
        tokens = re.finditer(
            r"<w:t(?:\s+[^>]*)?>(.*?)</w:t>|<w:tab\b[^>]*/>|<w:br\b[^>]*/>",
            paragraph_xml,
            re.S,
        )
        for token in tokens:
            raw = token.group(0)
            if raw.startswith("<w:t"):
                pieces.append(html.unescape(re.sub(r"<[^>]+>", "", token.group(1))))
            elif raw.startswith("<w:tab"):
                pieces.append("\t")
            else:
                pieces.append("\n")
        paragraph = "".join(pieces).strip()
        if paragraph:
            paragraphs.append(paragraph)

    return clean_note_text("\n\n".join(paragraphs))


def normalize_prelim(item: dict, set_name: str, index: int) -> dict:
    options = list(item["opts"])
    answer_index = item["ans"]
    return {
        "id": f"prelim-{set_name.lower()}-{index}",
        "source": "Prelim Exam",
        "set": set_name,
        "tag": item.get("source", "Prelim"),
        "prompt": normalize_space(item["text"]),
        "answer": normalize_space(options[answer_index]),
        "wrong": [normalize_space(option) for i, option in enumerate(options) if i != answer_index],
        "explanation": normalize_space(item.get("why", "")),
    }


def normalize_week3(item: dict, index: int) -> dict:
    options = list(item["opts"])
    answer_index = item["ans"]
    return {
        "id": f"week3-{index}",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": item.get("source", "Week 3"),
        "prompt": normalize_space(item["text"]),
        "answer": normalize_space(options[answer_index]),
        "wrong": [normalize_space(option) for i, option in enumerate(options) if i != answer_index],
        "explanation": normalize_space(item.get("why", "")),
    }


def normalize_final_module(item: dict, set_name: str, index: int) -> dict:
    return {
        "id": f"module-final-{set_name.lower()}-{index}",
        "source": "PaD Module Finals",
        "set": set_name,
        "tag": normalize_space(item.get("tag", "Module Finals")),
        "prompt": normalize_space(item["prompt"]),
        "answer": normalize_space(item["answer"]),
        "wrong": [normalize_space(option) for option in item.get("wrong", [])],
        "explanation": normalize_space(item.get("explanation", "")),
    }


def split_answer_key_option(text: str) -> tuple[str, str]:
    parts = re.split(r"\s+—\s+", text.strip(), maxsplit=1)
    option = parts[0].strip()
    explanation = parts[1].strip() if len(parts) > 1 else ""
    return option, explanation


def parse_answer_key(path: Path) -> list[dict]:
    lines = path.read_text(encoding="utf-8").splitlines()
    questions: list[dict] = []
    current: dict | None = None
    section = "Final Quiz"

    def flush() -> None:
        nonlocal current
        if not current:
            return
        if current["correct_index"] is None and current["options"]:
            current["correct_index"] = 0
        if current["correct_index"] is None:
            current = None
            return

        correct = current["options"][current["correct_index"]]
        number = current["number"]
        questions.append(
            {
                "id": f"quiz-{'a' if number <= 25 else 'b'}-{number}",
                "number": number,
                "source": "Recent Final Quiz",
                "set": "A" if number <= 25 else "B",
                "tag": current["section"],
                "prompt": normalize_space(current["prompt"]),
                "answer": normalize_space(correct["text"]),
                "wrong": [
                    normalize_space(option["text"])
                    for i, option in enumerate(current["options"])
                    if i != current["correct_index"]
                ],
                "explanation": normalize_space(correct["explanation"] or correct["text"]),
            }
        )
        current = None

    for line in lines:
        section_match = re.match(r"^##\s+Section\s+\d+:\s*(.+?)\s*\(Q", line)
        if section_match:
            section = normalize_space(section_match.group(1))
            continue

        question_match = re.match(r"^\*\*(\d+)\.\s*(.+?)\*\*\s*$", line)
        if question_match:
            flush()
            current = {
                "number": int(question_match.group(1)),
                "prompt": question_match.group(2),
                "section": section,
                "options": [],
                "correct_index": None,
            }
            continue

        if current and line.strip().startswith("- "):
            raw = line.strip()[2:].strip()
            is_correct = "✅" in raw
            raw = raw.replace("✅", "").strip()
            option_match = re.match(r"^[A-D]\.\s*(.+)$", raw)
            if option_match:
                option_text, explanation = split_answer_key_option(option_match.group(1))
                if is_correct:
                    current["correct_index"] = len(current["options"])
                current["options"].append({"text": option_text, "explanation": explanation})

    flush()
    return questions


def build_study_sections(main: dict) -> list[dict]:
    sections = [
        {
            "id": section["key"],
            "group": "Prelim Foundations",
            "title": section["title"],
            "summary": section["body"],
            "points": section["points"],
        }
        for section in main["studySections"]
    ]

    sections.extend(
        [
            {
                "id": "parallel-programming-models",
                "group": "Finals Module",
                "title": "Parallel Programming Models",
                "summary": "A programming model explains how parallel work is expressed: what is shared, how communication happens, and how correctness is protected.",
                "points": [
                    "Shared-memory programming uses threads or processes that read and write a common memory space.",
                    "Message-passing programming uses independent processes with separate memory spaces and explicit send/receive communication.",
                    "Data parallelism repeats the same operation over partitions of a dataset; task parallelism runs different independent tasks concurrently.",
                    "The right model depends on memory layout, communication cost, scalability requirements, and how independent the work units are.",
                ],
            },
            {
                "id": "message-passing-final",
                "group": "Finals Module",
                "title": "Message Passing and MPI",
                "summary": "Message passing is the final-topic model for distributed-memory systems and clusters where nodes coordinate through explicit messages.",
                "points": [
                    "Point-to-point communication sends one message from one process to one addressed receiver.",
                    "Collective communication coordinates a group through operations such as broadcast, reduce, gather, and scatter.",
                    "Synchronous communication waits for coordination; asynchronous or non-blocking communication lets work continue while messages are in progress.",
                    "MPI is the standard interface used in many HPC systems for distributed-memory parallel programs.",
                    "Deadlock can happen when processes wait forever for sends or receives that never match.",
                ],
            },
            {
                "id": "algorithm-design",
                "group": "Algorithms",
                "title": "Parallel Algorithm Design Techniques",
                "summary": "Technique questions are usually keyword-recognition questions disguised as scenarios.",
                "points": [
                    "Divide and conquer: divide, solve recursively, then combine; examples include binary search and merge sort.",
                    "Greedy method: choose the locally best option and do not revisit it.",
                    "Dynamic programming: store subproblem results to avoid repeated work.",
                    "Backtracking: explore a candidate, retreat when it fails constraints, then try another path.",
                    "Branch and bound: prune search paths that cannot beat the current best solution.",
                    "Linear programming: optimize a linear objective under linear constraints.",
                ],
            },
            {
                "id": "complexity-analysis",
                "group": "Algorithms",
                "title": "Complexity Analysis",
                "summary": "Complexity describes how time or memory grows when input size grows.",
                "points": [
                    "Big-O is an upper bound, commonly used as a worst-case ceiling.",
                    "Big-Omega is a lower bound, commonly used as a best-case floor.",
                    "Big-Theta is a tight bound when upper and lower growth match.",
                    "Common patterns: direct access O(1), halving O(log n), one pass O(n), efficient sorting O(n log n), nested pair loops O(n^2).",
                    "Space complexity measures memory growth, such as O(1), O(n), and O(n^2).",
                ],
            },
            {
                "id": "distributed-systems-final",
                "group": "Distributed Systems",
                "title": "Distributed Systems Final Topic",
                "summary": "Distributed systems use multiple interconnected nodes that cooperate so the whole system behaves like one service or computation.",
                "points": [
                    "Core traits: scalability, concurrency, availability, fault tolerance, heterogeneity, replication, and transparency.",
                    "Examples include telecom networks, reservation systems, video conferencing, cryptocurrency, peer-to-peer systems, multiplayer games, and global supply chains.",
                    "Common patterns include client-server, peer-to-peer, cloud instances, distributed databases, distributed file systems, and MapReduce.",
                    "Main risks include partial failures, synchronization without a global clock, imperfect scalability, security exposure, governance, and cost control.",
                    "Distributed tracing helps observe requests as they pass through many services or nodes.",
                ],
            },
            {
                "id": "middleware-applications",
                "group": "Distributed Systems",
                "title": "Distributed System Middleware Applications",
                "summary": "Middleware hides low-level network and platform differences while helping distributed components communicate and coordinate.",
                "points": [
                    "Important concepts: transparency, interoperability, scalability, and fault tolerance.",
                    "Middleware simplifies development by abstracting communication, coordination, and infrastructure details.",
                    "Useful technologies include message brokers, service meshes, monitoring stacks, and middleware frameworks.",
                    "Best practices include modular design, robust security, open standards, thorough testing, monitoring, and regular maintenance.",
                    "Future trends include AI-driven middleware, edge computing support, blockchain integration, stronger security, and broader interoperability.",
                ],
            },
        ]
    )
    return sections


def build_source_notes() -> list[dict]:
    source_notes: list[dict] = []
    combined_text = (DOWNLOADS / "combinedPDC.md").read_text(encoding="utf-8", errors="replace")
    combined_text = clean_note_text(combined_text)
    headings = list(re.finditer(r"(?m)^#\s+(.+)$", combined_text))
    for index, heading in enumerate(headings):
        start = heading.end()
        end = headings[index + 1].start() if index + 1 < len(headings) else len(combined_text)
        title = normalize_space(heading.group(1))
        body = clean_note_text(combined_text[start:end])
        if body:
            source_notes.append({"id": f"md-{index + 1}", "source": "combinedPDC.md", "title": title, "body": body})

    doc_paths = [
        DOWNLOADS / "What are distributed systems.docx",
        DOWNLOADS / "Distributed system middleware applications (1).docx",
    ]
    for index, path in enumerate(doc_paths, 1):
        if path.exists():
            source_notes.append({"id": f"docx-{index}", "source": path.name, "title": path.stem, "body": extract_docx_text(path)})

    return source_notes


def build_glossary(main: dict, finals: dict) -> list[dict]:
    terms: OrderedDict[str, dict] = OrderedDict()

    def add_term(term: str, definition: str, tags: list[str] | str) -> None:
        key = normalize_space(term).lower()
        tag_list = tags if isinstance(tags, list) else [tags]
        tag_list = [normalize_space(tag) for tag in tag_list if normalize_space(tag)]
        if key in terms:
            terms[key]["tags"] = sorted(set(terms[key]["tags"] + tag_list))
        else:
            terms[key] = {"term": normalize_space(term), "definition": normalize_space(definition), "tags": tag_list}

    for term, definition, tags in main["glossary"]:
        add_term(term, definition, tags)
    for term, definition, tag in finals["glossaryTerms"]:
        add_term(term, definition, tag)

    for item in [
        ("Middleware", "Software layer that helps distributed components communicate, coordinate, and hide low-level network or platform details.", ["distributed", "middleware"]),
        ("Transparency", "A property that hides distribution details such as location, access method, or replication from users and applications.", ["distributed", "middleware"]),
        ("Interoperability", "The ability of heterogeneous systems, platforms, and services to communicate and work together.", ["distributed", "middleware"]),
        ("Distributed Tracing", "Observability technique that follows a request or transaction as it moves across services in a distributed system.", ["distributed", "observability"]),
        ("Service Mesh", "Infrastructure layer that manages service-to-service communication, security, and observability in microservice systems.", ["middleware"]),
        ("Message Broker", "Middleware that routes, buffers, or delivers messages between producers and consumers.", ["middleware", "message passing"]),
        ("CQRS", "Command and Query Responsibility Segregation; a pattern that separates write operations from read operations.", ["distributed", "patterns"]),
        ("Two-Phase Commit", "A distributed transaction protocol where participants first prepare, then commit only if all can proceed.", ["distributed", "patterns"]),
    ]:
        add_term(*item)

    return list(terms.values())


def main() -> None:
    if not SOURCE_DATA.exists():
        raise FileNotFoundError(f"Missing extracted live-page data: {SOURCE_DATA}")

    extracted = json.loads(SOURCE_DATA.read_text(encoding="utf-8"))
    main_data = extracted["mainData"]
    finals_data = extracted["finalsData"]

    prelim_a = [normalize_prelim(item, "A", index) for index, item in enumerate(main_data["setA"], 1)]
    prelim_b = [normalize_prelim(item, "B", index) for index, item in enumerate(main_data["setB"], 1)]
    week3 = [normalize_week3(item, index) for index, item in enumerate(main_data["week3"], 1)]

    module_finals = []
    for set_name in ["A", "B", "C"]:
      for index, item in enumerate(finals_data["sets"][set_name], 1):
          module_finals.append(normalize_final_module(item, set_name, index))

    recent_all = parse_answer_key(DOWNLOADS / "ParallelComputing_Quiz_AnswerKey.md")
    recent_a = [question for question in recent_all if question["set"] == "A"]
    recent_b = [question for question in recent_all if question["set"] == "B"]

    combined_prelim = prelim_a + prelim_b
    combined_quiz = recent_a + recent_b
    combined_prelim_quiz = combined_prelim + combined_quiz
    all_everything = prelim_a + prelim_b + week3 + module_finals + recent_a + recent_b
    study_sections = build_study_sections(main_data)

    reviewer_data = {
        "generatedAt": "2026-06-17",
        "title": "Final Exam Reviewer",
        "sources": [
            {"label": "PaD Prelim Exam live page", "url": "https://jrd017.github.io/parallel-distributed-computing-reviewer/"},
            {"label": "PaD Module Finals live page", "url": "https://jrd017.github.io/parallel-distributed-computing-reviewer/parallel-programming-models-reviewer/"},
            {"label": "combinedPDC.md", "url": "local upload"},
            {"label": "ParallelComputing_Quiz_AnswerKey.md", "url": "local upload"},
            {"label": "What are distributed systems.docx", "url": "local upload"},
            {"label": "Distributed system middleware applications (1).docx", "url": "local upload"},
        ],
        "studySections": study_sections,
        "comparisonTables": [
            {
                "title": "Parallel vs Distributed Computing",
                "columns": ["Aspect", "Parallel Computing", "Distributed Computing"],
                "rows": [
                    ["Basic idea", "Multiple resources execute parts of one task simultaneously.", "Independent networked computers cooperate through communication."],
                    ["Memory", "Often shared memory or tightly coordinated local memory.", "Each node usually has its own memory."],
                    ["Goal", "Reduce execution time for compute-heavy work.", "Scale capacity, availability, storage, and services."],
                    ["Risk", "Race conditions, contention, synchronization overhead.", "Latency, node failure, consistency, governance, security."],
                ],
            },
            {
                "title": "Shared Memory vs Message Passing",
                "columns": ["Aspect", "Shared Memory", "Message Passing"],
                "rows": [
                    ["Communication", "Read/write common variables or data structures.", "Send and receive explicit messages."],
                    ["Address space", "Shared logical memory space.", "Separate address spaces."],
                    ["Best fit", "One machine or tightly coupled multi-core systems.", "Clusters and distributed-memory systems."],
                    ["Developer concern", "Protect shared data with locks, semaphores, barriers.", "Match sends/receives, avoid deadlock, manage message order."],
                ],
            },
            {
                "title": "Data Parallelism vs Task Parallelism",
                "columns": ["Aspect", "Data Parallelism", "Task Parallelism"],
                "rows": [
                    ["Core clue", "Same operation over many data chunks.", "Different independent tasks run together."],
                    ["Examples", "Image pixels, matrices, ML batches, signal chunks.", "Web requests, recursive branches, background jobs."],
                    ["Load balancing", "Partition data evenly.", "Schedule tasks dynamically when work sizes vary."],
                ],
            },
        ],
        "algorithmTechniques": [{"name": item[0], "rule": item[1], "clue": item[2]} for item in finals_data["algorithms"]],
        "architectureCards": [{"tag": card["tag"], "title": card["title"], "body": card["body"]} for card in main_data["architectureCards"]],
        "diagrams": [{"title": item[0], "subtitle": item[1], "root": item[2], "steps": item[3]} for item in finals_data["diagrams"]],
        "sourceNotes": build_source_notes(),
        "glossary": build_glossary(main_data, finals_data),
        "quizBanks": {
            "prelimA": prelim_a,
            "prelimB": prelim_b,
            "combinedPrelim": combined_prelim,
            "quizA": recent_a,
            "quizB": recent_b,
            "combinedQuiz": combined_quiz,
            "combinedPrelimQuiz": combined_prelim_quiz,
            "week3": week3,
            "moduleFinals": module_finals,
            "everything": all_everything,
        },
        "quizCounts": {
            "prelimA": len(prelim_a),
            "prelimB": len(prelim_b),
            "quizA": len(recent_a),
            "quizB": len(recent_b),
            "combinedPrelim": len(combined_prelim),
            "combinedQuiz": len(combined_quiz),
            "combinedPrelimQuiz": len(combined_prelim_quiz),
            "everything": len(all_everything),
            "moduleFinalsIncluded": len(module_finals),
            "week3Included": len(week3),
        },
    }

    ASSETS.mkdir(exist_ok=True)
    (ASSETS / "data.js").write_text(
        "window.REVIEWER_DATA = " + json.dumps(reviewer_data, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    (ROOT / ".nojekyll").write_text("", encoding="utf-8")
    (ROOT / "README.md").write_text(
        "# Final Exam Reviewer\n\n"
        "Static GitHub Pages reviewer for Parallel and Distributed Computing.\n\n"
        "## Contents\n\n"
        "- Prelim Exam Set A and Set B from the existing live reviewer\n"
        "- Recent 50-question final quiz split into Quiz Set A and Quiz Set B\n"
        "- Combined Prelim Exam mode\n"
        "- Combined Quiz mode\n"
        "- Combined Prelim Exam and Quiz mode\n"
        "- Combined Everything Including the Modules mode with prelim, quiz, Week 3, and module-final banks\n"
        "- Study guide, full notes explorer, glossary, and comparison tables\n\n"
        "This site is designed to be served directly from the repository root with GitHub Pages. "
        "No build step or GitHub Actions workflow is required.\n",
        encoding="utf-8",
    )

    print(json.dumps({
        "quizCounts": reviewer_data["quizCounts"],
        "studySections": len(reviewer_data["studySections"]),
        "sourceNotes": len(reviewer_data["sourceNotes"]),
        "glossary": len(reviewer_data["glossary"]),
    }, indent=2))


if __name__ == "__main__":
    main()
