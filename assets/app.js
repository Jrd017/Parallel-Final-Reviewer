const REVIEWER_DATA = window.REVIEWER_DATA;

const state = {
  view: "overview",
  studyFilter: "All",
  noteFilter: "All",
  activeNoteId: null,
  glossaryFilter: "All",
  quiz: null,
};

const banks = REVIEWER_DATA.quizBanks;
const combinedPrelimQuestions = banks.combinedPrelim || [...banks.prelimA, ...banks.prelimB];
const combinedQuizQuestions = banks.combinedQuiz || [...banks.quizA, ...banks.quizB];
const newQuizQuestions = banks.newQuiz || [];
const combinedPrelimQuizQuestions = banks.combinedPrelimQuiz || [
  ...banks.prelimA,
  ...banks.prelimB,
  ...banks.quizA,
  ...banks.quizB,
];
const combinedPrelimQuizNewQuestions = banks.combinedPrelimQuizNew || [
  ...combinedPrelimQuizQuestions,
  ...newQuizQuestions,
];
const everythingQuestions = banks.everything || [
  ...banks.prelimA,
  ...banks.prelimB,
  ...banks.week3,
  ...banks.moduleFinals,
  ...banks.quizA,
  ...banks.quizB,
  ...newQuizQuestions,
];

const quizModes = [
  { id: "prelimA", title: "Prelim Exam Set A", detail: "Original prelim bank from the live reviewer.", questions: banks.prelimA },
  { id: "prelimB", title: "Prelim Exam Set B", detail: "Second original prelim bank from the live reviewer.", questions: banks.prelimB },
  { id: "quizA", title: "Quiz Set A", detail: "Recent final quiz split from Q1 to Q25.", questions: banks.quizA },
  { id: "quizB", title: "Quiz Set B", detail: "Recent final quiz split from Q26 to Q50.", questions: banks.quizB },
  { id: "newQuiz", title: "New Quiz", detail: "Focused on distributed systems and middleware DOCX files.", questions: newQuizQuestions },
  { id: "combinedPrelim", title: "Combined Prelim Exam", detail: "Prelim Exam Set A and Set B together.", questions: combinedPrelimQuestions },
  { id: "combinedQuiz", title: "Combined Quiz", detail: "Quiz Set A and Quiz Set B together.", questions: combinedQuizQuestions },
  { id: "combinedPrelimQuiz", title: "Combined Prelim Exam and Quiz", detail: "Prelim Exam Set A/B plus Quiz Set A/B.", questions: combinedPrelimQuizQuestions },
  { id: "combinedPrelimQuizNew", title: "Combined Prelim Exam, Quiz, and New Quiz", detail: "Prelim Exam Set A/B, Quiz Set A/B, and the new DOCX quiz.", questions: combinedPrelimQuizNewQuestions },
  { id: "everything", title: "Combined Everything Including the Modules", detail: "Prelim, quiz, new quiz, Week 3, and module-final banks together.", questions: everythingQuestions },
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdownLite(value) {
  const lines = String(value || "").split("\n");
  const output = [];
  let listOpen = false;
  let codeOpen = false;

  function closeList() {
    if (listOpen) {
      output.push("</ul>");
      listOpen = false;
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.trim().startsWith("```")) {
      closeList();
      if (codeOpen) {
        output.push("</code></pre>");
        codeOpen = false;
      } else {
        output.push("<pre><code>");
        codeOpen = true;
      }
      continue;
    }

    if (codeOpen) {
      output.push(escapeHtml(rawLine) + "\n");
      continue;
    }

    if (!line.trim()) {
      closeList();
      continue;
    }

    const heading = line.match(/^(#{2,6})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = Math.min(4, Math.max(3, heading[1].length));
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const bullet = line.match(/^[-*]\s+(.+)$/);
    if (bullet) {
      if (!listOpen) {
        output.push("<ul>");
        listOpen = true;
      }
      output.push(`<li>${inlineMarkdown(bullet[1])}</li>`);
      continue;
    }

    const numbered = line.match(/^\d+[.)]\s+(.+)$/);
    if (numbered) {
      if (!listOpen) {
        output.push("<ul>");
        listOpen = true;
      }
      output.push(`<li>${inlineMarkdown(numbered[1])}</li>`);
      continue;
    }

    closeList();
    output.push(`<p>${inlineMarkdown(line.trim())}</p>`);
  }

  closeList();
  if (codeOpen) output.push("</code></pre>");
  return output.join("");
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".view").forEach(section => section.classList.toggle("active", section.id === `view-${view}`));
  document.querySelectorAll(".nav-button").forEach(button => button.classList.toggle("active", button.dataset.view === view));
}

function renderSources() {
  const count = REVIEWER_DATA.sources.length;
  const noteCount = REVIEWER_DATA.sourceNotes.length;
  document.getElementById("source-summary").innerHTML = `${count} sources<br>${noteCount} note sections<br>${REVIEWER_DATA.glossary.length} glossary terms`;
}

function renderOverview() {
  const stats = [
    ["Prelim modes", REVIEWER_DATA.quizCounts.combinedPrelim],
    ["Recent quiz", REVIEWER_DATA.quizCounts.quizA + REVIEWER_DATA.quizCounts.quizB],
    ["New quiz", REVIEWER_DATA.quizCounts.newQuiz || 0],
    ["Everything bank", REVIEWER_DATA.quizCounts.everything],
  ];

  document.getElementById("overview-stats").innerHTML = stats.map(([label, value]) => `
    <article class="stat-card"><div class="stat-label">${escapeHtml(label)}</div><div class="stat-value">${escapeHtml(value)}</div></article>
  `).join("");

  const coverage = [
    ["Prelim exam", "Parallel vs distributed, architectures, taxonomy, IPC, synchronization, performance."],
    ["Module finals", "Shared memory, message passing, data/task parallelism, algorithm design, complexity."],
    ["Final topic DOCX", "Distributed systems, middleware applications, tracing, access control, deployment risks."],
    ["New quiz", "Focused DOCX quiz for distributed-system characteristics, risks, tracing, ABAC, middleware concepts, tools, and best practices."],
    ["Recent quiz", "50 final-style questions split into Set A and Set B, plus combined everything practice."],
  ];

  document.getElementById("coverage-panel").innerHTML = `
    <h3>Included Coverage</h3>
    <div class="coverage-list">${coverage.map(([title, body]) => `<div class="coverage-item"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></div>`).join("")}</div>
  `;

  document.getElementById("comparison-panel").innerHTML = REVIEWER_DATA.comparisonTables.map(table => `
    <h3>${escapeHtml(table.title)}</h3>
    <div class="table-wrap">
      <table class="compare-table">
        <thead><tr>${table.columns.map(col => `<th>${escapeHtml(col)}</th>`).join("")}</tr></thead>
        <tbody>${table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `).join("");
}

function renderStudyFilters() {
  const groups = ["All", ...Array.from(new Set(REVIEWER_DATA.studySections.map(section => section.group)))];
  document.getElementById("study-filters").innerHTML = groups.map(group => `
    <button class="chip ${state.studyFilter === group ? "active" : ""}" data-study-filter="${escapeHtml(group)}">${escapeHtml(group)}</button>
  `).join("");
}

function renderStudy() {
  renderStudyFilters();
  const sections = REVIEWER_DATA.studySections.filter(section => state.studyFilter === "All" || section.group === state.studyFilter);
  document.getElementById("study-grid").innerHTML = sections.map(section => `
    <article class="study-card">
      <div class="group-label">${escapeHtml(section.group)}</div>
      <h3>${escapeHtml(section.title)}</h3>
      <p>${escapeHtml(section.summary)}</p>
      <ul>${section.points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    </article>
  `).join("");

  document.getElementById("algorithm-panel").innerHTML = `
    <h3>Algorithm Technique Clues</h3>
    <div class="algorithm-grid">
      ${REVIEWER_DATA.algorithmTechniques.map(item => `<div class="algorithm-item"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.rule)}</span><p>${escapeHtml(item.clue)}</p></div>`).join("")}
    </div>
  `;
}

function noteMatches(note, query, source) {
  const sourceOk = source === "All" || note.source === source;
  const text = `${note.title} ${note.source} ${note.body}`.toLowerCase();
  return sourceOk && (!query || text.includes(query.toLowerCase()));
}

function filteredNotes() {
  const query = document.getElementById("notes-search")?.value.trim() || "";
  const source = document.getElementById("notes-source")?.value || "All";
  return REVIEWER_DATA.sourceNotes.filter(note => noteMatches(note, query, source));
}

function renderNoteFilters() {
  const sources = ["All", ...Array.from(new Set(REVIEWER_DATA.sourceNotes.map(note => note.source)))];
  document.getElementById("notes-source").innerHTML = sources.map(source => `<option value="${escapeHtml(source)}">${escapeHtml(source)}</option>`).join("");
}

function renderNotes() {
  const notes = filteredNotes();
  if (!notes.some(note => note.id === state.activeNoteId)) {
    state.activeNoteId = notes[0]?.id || null;
  }

  document.getElementById("notes-list").innerHTML = notes.map(note => `
    <button class="note-button ${note.id === state.activeNoteId ? "active" : ""}" data-note-id="${escapeHtml(note.id)}">
      <strong>${escapeHtml(note.title)}</strong><span>${escapeHtml(note.source)}</span>
    </button>
  `).join("") || "<p>No matching notes.</p>";

  const active = REVIEWER_DATA.sourceNotes.find(note => note.id === state.activeNoteId);
  document.getElementById("note-reader").innerHTML = active
    ? `<div class="group-label">${escapeHtml(active.source)}</div><h3>${escapeHtml(active.title)}</h3>${renderMarkdownLite(active.body)}`
    : "<h3>No note selected</h3>";
}

function renderGlossaryFilters() {
  const tags = ["All", ...Array.from(new Set(REVIEWER_DATA.glossary.flatMap(term => term.tags))).sort()];
  document.getElementById("glossary-filters").innerHTML = tags.map(tag => `
    <button class="chip ${state.glossaryFilter === tag ? "active" : ""}" data-glossary-filter="${escapeHtml(tag)}">${escapeHtml(tag)}</button>
  `).join("");
}

function renderGlossary() {
  renderGlossaryFilters();
  const query = document.getElementById("glossary-search")?.value.trim().toLowerCase() || "";
  const filtered = REVIEWER_DATA.glossary.filter(item => {
    const tagOk = state.glossaryFilter === "All" || item.tags.includes(state.glossaryFilter);
    const haystack = `${item.term} ${item.definition} ${item.tags.join(" ")}`.toLowerCase();
    return tagOk && (!query || haystack.includes(query));
  });

  document.getElementById("term-grid").innerHTML = filtered.map(item => `
    <article class="term-card">
      <h3>${escapeHtml(item.term)}</h3>
      <p>${escapeHtml(item.definition)}</p>
      <div class="term-tags">${item.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `).join("") || "<p>No terms match.</p>";
}

function renderQuizModes() {
  document.getElementById("quiz-modes").innerHTML = quizModes.map(mode => `
    <button class="quiz-mode-card" data-quiz-mode="${escapeHtml(mode.id)}">
      <h3>${escapeHtml(mode.title)}</h3>
      <p>${escapeHtml(mode.detail)}</p>
      <div class="count">${mode.questions.length} questions</div>
    </button>
  `).join("");
}

function prepareQuestion(question) {
  const options = shuffle([question.answer, ...question.wrong]).map(text => ({ text, correct: text === question.answer }));
  return { ...question, options };
}

function startQuiz(modeId) {
  const mode = quizModes.find(item => item.id === modeId);
  if (!mode) return;

  state.quiz = {
    mode,
    questions: shuffle(mode.questions).map(prepareQuestion),
    index: 0,
    score: 0,
    answered: false,
    misses: [],
  };

  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-runner").style.display = "block";
  renderQuestion();
}

function renderQuestion() {
  const quiz = state.quiz;
  if (!quiz) return;
  if (quiz.index >= quiz.questions.length) {
    finishQuiz();
    return;
  }

  const question = quiz.questions[quiz.index];
  const progress = Math.round((quiz.index / quiz.questions.length) * 100);
  document.getElementById("quiz-progress").style.width = `${progress}%`;
  document.getElementById("quiz-meta").textContent = `${quiz.mode.title} | Question ${quiz.index + 1} of ${quiz.questions.length}`;
  document.getElementById("quiz-tag").textContent = `${question.source} | ${question.tag}`;
  document.getElementById("quiz-question").textContent = question.prompt;
  document.getElementById("quiz-feedback").style.display = "none";
  document.getElementById("quiz-feedback").className = "feedback";
  document.getElementById("quiz-feedback").innerHTML = "";
  document.getElementById("quiz-score").textContent = `Score: ${quiz.score}`;
  document.getElementById("quiz-next").textContent = "Next";
  document.getElementById("quiz-next").disabled = true;
  quiz.answered = false;
  document.getElementById("quiz-options").innerHTML = question.options.map((option, index) => `
    <button class="option-button" data-option-index="${index}">${escapeHtml(option.text)}</button>
  `).join("");
}

function chooseAnswer(index) {
  const quiz = state.quiz;
  if (!quiz || quiz.answered) return;

  const question = quiz.questions[quiz.index];
  const chosen = question.options[index];
  const correct = Boolean(chosen?.correct);
  quiz.answered = true;

  if (correct) {
    quiz.score += 1;
  } else {
    quiz.misses.push({ question: question.prompt, chosen: chosen?.text || "", answer: question.answer, explanation: question.explanation });
  }

  document.querySelectorAll(".option-button").forEach((button, buttonIndex) => {
    const option = question.options[buttonIndex];
    button.disabled = true;
    if (option.correct) button.classList.add("correct");
    if (buttonIndex === index && !option.correct) button.classList.add("wrong");
  });

  const feedback = document.getElementById("quiz-feedback");
  feedback.className = `feedback ${correct ? "" : "wrong"}`;
  feedback.style.display = "block";
  const explanation = (question.explanation || "").trim();
  const repeatAnswer = explanation.toLowerCase() === String(question.answer || "").trim().toLowerCase();
  const explanationHtml = explanation && !repeatAnswer ? `<p>${escapeHtml(explanation)}</p>` : "";
  feedback.innerHTML = `<strong>${correct ? "Correct" : "Correct answer: " + escapeHtml(question.answer)}</strong>${explanationHtml}`;
  document.getElementById("quiz-score").textContent = `Score: ${quiz.score}`;
  const next = document.getElementById("quiz-next");
  next.disabled = false;
  next.textContent = quiz.index === quiz.questions.length - 1 ? "Finish" : "Next";
}

function nextQuestion() {
  const quiz = state.quiz;
  if (!quiz || !quiz.answered) return;
  quiz.index += 1;
  renderQuestion();
}

function finishQuiz() {
  const quiz = state.quiz;
  const total = quiz.questions.length;
  const pct = Math.round((quiz.score / total) * 100);
  document.getElementById("quiz-progress").style.width = "100%";
  document.getElementById("quiz-runner").style.display = "none";
  const result = document.getElementById("quiz-result");
  result.style.display = "block";
  const message = pct >= 90 ? "Ready level" : pct >= 75 ? "Strong, with a few weak spots" : "Review misses, then retake";
  result.innerHTML = `
    <h3>${escapeHtml(message)}</h3>
    <p>${escapeHtml(quiz.mode.title)} score: <strong>${quiz.score}/${total}</strong> (${pct}%).</p>
    <button class="primary-button" data-retake="${escapeHtml(quiz.mode.id)}">Retake ${escapeHtml(quiz.mode.title)}</button>
    ${quiz.misses.length ? `<div class="miss-list">${quiz.misses.slice(0, 12).map(miss => `<div class="miss-item"><strong>${escapeHtml(miss.question)}</strong><p>Your answer: ${escapeHtml(miss.chosen)}</p><p>Correct: ${escapeHtml(miss.answer)}</p><p>${escapeHtml(miss.explanation)}</p></div>`).join("")}</div>` : ""}
  `;
}

function bindEvents() {
  document.querySelectorAll(".nav-button").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));

  document.addEventListener("click", event => {
    const studyFilter = event.target.closest("[data-study-filter]");
    if (studyFilter) {
      state.studyFilter = studyFilter.dataset.studyFilter;
      renderStudy();
      return;
    }

    const noteButton = event.target.closest("[data-note-id]");
    if (noteButton) {
      state.activeNoteId = noteButton.dataset.noteId;
      renderNotes();
      return;
    }

    const glossaryFilter = event.target.closest("[data-glossary-filter]");
    if (glossaryFilter) {
      state.glossaryFilter = glossaryFilter.dataset.glossaryFilter;
      renderGlossary();
      return;
    }

    const quizMode = event.target.closest("[data-quiz-mode]");
    if (quizMode) {
      startQuiz(quizMode.dataset.quizMode);
      return;
    }

    const option = event.target.closest("[data-option-index]");
    if (option) {
      chooseAnswer(Number(option.dataset.optionIndex));
      return;
    }

    const retake = event.target.closest("[data-retake]");
    if (retake) {
      startQuiz(retake.dataset.retake);
    }
  });

  document.getElementById("notes-search").addEventListener("input", renderNotes);
  document.getElementById("notes-source").addEventListener("change", renderNotes);
  document.getElementById("glossary-search").addEventListener("input", renderGlossary);
  document.getElementById("quiz-next").addEventListener("click", nextQuestion);
}

function init() {
  renderSources();
  renderOverview();
  renderStudy();
  renderNoteFilters();
  renderNotes();
  renderGlossary();
  renderQuizModes();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);
