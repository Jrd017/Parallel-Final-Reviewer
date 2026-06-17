window.REVIEWER_DATA = {
  "generatedAt": "2026-06-17",
  "title": "Final Exam Reviewer",
  "sources": [
    {
      "label": "PaD Prelim Exam live page",
      "url": "https://jrd017.github.io/parallel-distributed-computing-reviewer/"
    },
    {
      "label": "PaD Module Finals live page",
      "url": "https://jrd017.github.io/parallel-distributed-computing-reviewer/parallel-programming-models-reviewer/"
    },
    {
      "label": "combinedPDC.md",
      "url": "local upload"
    },
    {
      "label": "ParallelComputing_Quiz_AnswerKey.md",
      "url": "local upload"
    },
    {
      "label": "What are distributed systems.docx",
      "url": "local upload"
    },
    {
      "label": "Distributed system middleware applications (1).docx",
      "url": "local upload"
    }
  ],
  "studySections": [
    {
      "id": "foundations",
      "group": "Prelim Foundations",
      "title": "Foundations: serial, parallel, and distributed",
      "summary": "Serial computing executes instructions one after another on a single processor. Parallel computing splits a problem into parts that can run simultaneously. Distributed computing uses independent networked computers that coordinate through communication.",
      "points": [
        "Parallel computing is mainly about doing work faster by using multiple compute resources.",
        "Distributed computing is mainly about collaboration across nodes, scalability, availability, and large-scale data or services.",
        "A problem is a good candidate for parallelism when it can be broken into independent or coordinated pieces that complete faster together than alone."
      ]
    },
    {
      "id": "processes",
      "group": "Prelim Foundations",
      "title": "Week 3: processes, threads, concurrency, and parallelism",
      "summary": "A process is a running program with its own memory space. A thread is the smallest execution unit inside a process and shares that process memory. Concurrency manages many tasks at once; parallelism actually runs tasks at the same time.",
      "points": [
        "Processes are isolated and stable but have higher context-switching overhead.",
        "Threads are lighter and communicate easily through shared memory, but they require synchronization.",
        "Concurrency can be achieved with multitasking, event loops, asynchronous I/O, or scheduling even on one core.",
        "Parallelism requires multiple cores, processors, GPUs, or machines for true simultaneous execution."
      ]
    },
    {
      "id": "ipc",
      "group": "Prelim Foundations",
      "title": "IPC and communication models",
      "summary": "Inter-process communication lets processes or threads exchange data and coordinate actions. Shared memory and message passing are the two central models in your notes.",
      "points": [
        "Shared memory is fast because processes communicate through a common region after it is established.",
        "Message passing uses send and receive operations; it is common in distributed systems and safer for separate address spaces.",
        "Message passing can use fixed-size messages, which are easier for the system but harder for the programmer, or variable-size messages, which are more complex for the system but easier for programming.",
        "Messages often contain a header identifying sender and receiver, a block of data, and process control information."
      ]
    },
    {
      "id": "primitives",
      "group": "Prelim Foundations",
      "title": "Week 3: synchronization and communication primitives",
      "summary": "Synchronization primitives protect shared resources and coordinate timing. Communication primitives move information between threads, processes, or machines.",
      "points": [
        "Locks and mutexes provide exclusive access so only one thread can use a resource at a time.",
        "Semaphores use a counter to manage a limited number of resources.",
        "Condition variables let threads wait until a specific condition becomes true.",
        "Monitors wrap shared data and operations into a controlled synchronization abstraction.",
        "Channels, message queues, shared memory, I/O primitives, and RPC are common communication primitives."
      ]
    },
    {
      "id": "memory",
      "group": "Prelim Foundations",
      "title": "Memory architectures",
      "summary": "Memory architecture determines how processors access data and how much communication is required.",
      "points": [
        "Shared memory gives a global address space, simpler data sharing, and fast local communication, but may not scale because memory traffic and cache coherency traffic increase.",
        "Distributed memory scales memory with the number of processors and avoids global cache coherency, but the programmer must explicitly define communication.",
        "UMA means all processors have roughly equal access time to memory.",
        "NUMA means access time depends on whether memory is local or remote to the processor.",
        "Hybrid distributed-shared memory uses shared memory inside nodes and network communication between nodes."
      ]
    },
    {
      "id": "taxonomy",
      "group": "Prelim Foundations",
      "title": "Flynn taxonomy",
      "summary": "Flynn's taxonomy classifies computer architectures by instruction streams and data streams.",
      "points": [
        "SISD: single instruction, single data. This is classic serial computing.",
        "SIMD: single instruction, multiple data. The same operation is applied to many data elements, like GPUs processing pixels.",
        "MISD: multiple instruction, single data. Rare, but possible in pipelines such as multiple filters over one signal.",
        "MIMD: multiple instruction, multiple data. Common in multicore systems, clusters, grids, and modern supercomputers."
      ]
    },
    {
      "id": "performance",
      "group": "Prelim Foundations",
      "title": "Performance terms: speedup, efficiency, overhead, granularity",
      "summary": "Performance questions usually ask why adding processors helps, why it stops helping, or how communication affects speed.",
      "points": [
        "Observed speedup compares serial wall-clock time to parallel wall-clock time.",
        "Efficiency measures how well processors are used: speedup divided by the number of processors.",
        "Parallel overhead is time spent starting tasks, synchronizing, communicating, waiting, or terminating instead of doing useful computation.",
        "Granularity is the ratio of computation to communication. Coarse-grained work has more computation between communication events; fine-grained work communicates frequently.",
        "Latency is the delay to start communication. Bandwidth is the amount of data that can move per unit time."
      ]
    },
    {
      "id": "distributed",
      "group": "Prelim Foundations",
      "title": "Distributed architectures",
      "summary": "Distributed systems use networked nodes to provide services, storage, computation, and resilience.",
      "points": [
        "Client-server centralizes service logic in a server that responds to client requests.",
        "Peer-to-peer systems allow every node to act as both client and server.",
        "MapReduce splits input into chunks, maps them in parallel, and reduces intermediate results into a final output.",
        "Distributed databases partition, replicate, and manage consistency across nodes.",
        "Distributed file systems like GFS and HDFS store data across nodes for reliability and throughput.",
        "Cloud computing abstracts data center hardware and lets users scale virtualized resources on demand."
      ]
    },
    {
      "id": "models",
      "group": "Prelim Foundations",
      "title": "Programming models and tools",
      "summary": "Programming models abstract the hardware and define how programmers express parallelism.",
      "points": [
        "Threads are a shared-memory model where one process has multiple lightweight execution paths.",
        "Pthreads are a POSIX thread API; OpenMP uses compiler directives for shared-memory parallelism.",
        "MPI is the de facto standard for message passing in distributed-memory systems.",
        "Data parallel models apply the same operation across different partitions of a data structure.",
        "Hybrid models often combine MPI between nodes with OpenMP threads or GPU kernels inside each node.",
        "SPMD means all tasks run the same program on different data. MPMD means tasks may run different programs on different data."
      ]
    },
    {
      "id": "pitfalls",
      "group": "Prelim Foundations",
      "title": "Pitfalls: race conditions, deadlocks, data dependencies, load balance",
      "summary": "Correctness and performance depend on coordination, especially when tasks share data or must wait for one another.",
      "points": [
        "A race condition happens when timing affects results, often because multiple threads access shared data without synchronization.",
        "A deadlock occurs when tasks wait forever for each other to release resources.",
        "A livelock occurs when tasks keep reacting to each other but make no progress.",
        "Data dependencies exist when the order of statements affects program results, making parallelization harder.",
        "Load balancing distributes work evenly so processors do not sit idle while one slow task controls the total runtime."
      ]
    },
    {
      "id": "exam",
      "group": "Prelim Foundations",
      "title": "Likely exam prompts",
      "summary": "Practice explaining not just the term, but the reason behind the choice.",
      "points": [
        "Compare shared memory and message passing. When is each appropriate?",
        "Explain SMP, UMA, NUMA, distributed memory, and hybrid memory architectures.",
        "Classify systems using Flynn taxonomy and give examples of SISD, SIMD, MISD, and MIMD.",
        "Explain MapReduce using Map and Reduce phases.",
        "Describe why fine-grained tasks can suffer from communication overhead.",
        "Explain how locks, semaphores, barriers, condition variables, channels, queues, and RPC support concurrency or distributed communication."
      ]
    },
    {
      "id": "parallel-programming-models",
      "group": "Finals Module",
      "title": "Parallel Programming Models",
      "summary": "A programming model explains how parallel work is expressed: what is shared, how communication happens, and how correctness is protected.",
      "points": [
        "Shared-memory programming uses threads or processes that read and write a common memory space.",
        "Message-passing programming uses independent processes with separate memory spaces and explicit send/receive communication.",
        "Data parallelism repeats the same operation over partitions of a dataset; task parallelism runs different independent tasks concurrently.",
        "The right model depends on memory layout, communication cost, scalability requirements, and how independent the work units are."
      ]
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
        "Deadlock can happen when processes wait forever for sends or receives that never match."
      ]
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
        "Linear programming: optimize a linear objective under linear constraints."
      ]
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
        "Space complexity measures memory growth, such as O(1), O(n), and O(n^2)."
      ]
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
        "Distributed tracing helps observe requests as they pass through many services or nodes."
      ]
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
        "Future trends include AI-driven middleware, edge computing support, blockchain integration, stronger security, and broader interoperability."
      ]
    }
  ],
  "comparisonTables": [
    {
      "title": "Parallel vs Distributed Computing",
      "columns": [
        "Aspect",
        "Parallel Computing",
        "Distributed Computing"
      ],
      "rows": [
        [
          "Basic idea",
          "Multiple resources execute parts of one task simultaneously.",
          "Independent networked computers cooperate through communication."
        ],
        [
          "Memory",
          "Often shared memory or tightly coordinated local memory.",
          "Each node usually has its own memory."
        ],
        [
          "Goal",
          "Reduce execution time for compute-heavy work.",
          "Scale capacity, availability, storage, and services."
        ],
        [
          "Risk",
          "Race conditions, contention, synchronization overhead.",
          "Latency, node failure, consistency, governance, security."
        ]
      ]
    },
    {
      "title": "Shared Memory vs Message Passing",
      "columns": [
        "Aspect",
        "Shared Memory",
        "Message Passing"
      ],
      "rows": [
        [
          "Communication",
          "Read/write common variables or data structures.",
          "Send and receive explicit messages."
        ],
        [
          "Address space",
          "Shared logical memory space.",
          "Separate address spaces."
        ],
        [
          "Best fit",
          "One machine or tightly coupled multi-core systems.",
          "Clusters and distributed-memory systems."
        ],
        [
          "Developer concern",
          "Protect shared data with locks, semaphores, barriers.",
          "Match sends/receives, avoid deadlock, manage message order."
        ]
      ]
    },
    {
      "title": "Data Parallelism vs Task Parallelism",
      "columns": [
        "Aspect",
        "Data Parallelism",
        "Task Parallelism"
      ],
      "rows": [
        [
          "Core clue",
          "Same operation over many data chunks.",
          "Different independent tasks run together."
        ],
        [
          "Examples",
          "Image pixels, matrices, ML batches, signal chunks.",
          "Web requests, recursive branches, background jobs."
        ],
        [
          "Load balancing",
          "Partition data evenly.",
          "Schedule tasks dynamically when work sizes vary."
        ]
      ]
    }
  ],
  "algorithmTechniques": [
    {
      "name": "Divide and Conquer",
      "rule": "Divide -> Conquer -> Combine. Break the original problem into subproblems, solve recursively, then combine solutions.",
      "clue": "Binary search, quick sort, merge sort, integer multiplication, matrix inversion, matrix multiplication."
    },
    {
      "name": "Greedy Method",
      "rule": "Choose the best-looking option at the current moment and do not reconsider the same choice later.",
      "clue": "Useful for optimization when local choices lead to acceptable or optimal solutions."
    },
    {
      "name": "Dynamic Programming",
      "rule": "Split into smaller subproblems, solve them, store/reuse results, then combine into the final solution.",
      "clue": "Fibonacci is a common example because repeated subproblems can be reused."
    },
    {
      "name": "Backtracking",
      "rule": "Start with a possible solution, move forward, and return one level back when the path fails.",
      "clue": "Eight queens, Sudoku, and maze traversal."
    },
    {
      "name": "Branch and Bound",
      "rule": "Search the solution space for the optimal solution while using bounds to prune paths that cannot beat the current best.",
      "clue": "Maintains the lowest-cost path to a target and can improve a found solution."
    },
    {
      "name": "Linear Programming",
      "rule": "Optimize a linear objective function under linear constraints.",
      "clue": "Used for maximum profit, shortest path, or lowest cost style problems."
    }
  ],
  "architectureCards": [
    {
      "tag": "Shared Memory",
      "title": "SMP, UMA, NUMA",
      "body": "Processors access a common memory space. SMP gives equal access to resources; UMA gives uniform memory access time; NUMA access time varies by memory location."
    },
    {
      "tag": "Distributed Memory",
      "title": "Clusters and grids",
      "body": "Each node has local memory and communicates over a network. Cluster systems are tightly connected; grid systems span wider locations or organizations."
    },
    {
      "tag": "Hybrid",
      "title": "Distributed-shared memory",
      "body": "Combines local shared-memory machines with networked nodes. DSM physically distributes memory but provides the illusion of a shared address space."
    },
    {
      "tag": "Big Data",
      "title": "MapReduce and Hadoop",
      "body": "The Map phase processes chunks in parallel. The Reduce phase combines intermediate results. HDFS stores large datasets across distributed nodes."
    },
    {
      "tag": "Distributed Services",
      "title": "Client-server and cloud",
      "body": "Clients request services from servers. Cloud computing provides elastic, on-demand resources using distributed data centers."
    },
    {
      "tag": "Decentralized",
      "title": "Peer-to-peer",
      "body": "Every node can act as both client and server. There is no central authority controlling all communication."
    }
  ],
  "diagrams": [
    {
      "title": "Shared-Memory Communication",
      "subtitle": "How threads communicate and why synchronization matters.",
      "root": "Shared Data Structure",
      "steps": [
        "Thread A reads shared variable",
        "Thread B writes shared variable",
        "Synchronization protects access",
        "Consistent result"
      ]
    },
    {
      "title": "Message-Passing Communication",
      "subtitle": "How separate processes coordinate without shared memory.",
      "root": "Explicit Messages",
      "steps": [
        "Process 1 sends message",
        "Communication link carries data",
        "Process 2 receives message",
        "Process 2 processes data"
      ]
    },
    {
      "title": "Data Parallel Flow",
      "subtitle": "Same operation over different partitions.",
      "root": "SIMD pattern",
      "steps": [
        "Split dataset",
        "Assign partitions",
        "Run same operation",
        "Combine output if needed"
      ]
    },
    {
      "title": "Task Parallel Flow",
      "subtitle": "Different independent tasks run together.",
      "root": "Independent work",
      "steps": [
        "Identify tasks",
        "Schedule tasks dynamically",
        "Synchronize dependencies",
        "Collect results"
      ]
    },
    {
      "title": "Divide and Conquer",
      "subtitle": "The classic recursive design flow.",
      "root": "algorithm",
      "steps": [
        "Divide",
        "Conquer",
        "Combine"
      ]
    },
    {
      "title": "Backtracking",
      "subtitle": "Try, fail, and retreat to a previous decision point.",
      "root": "algorithm",
      "steps": [
        "Try candidate",
        "Check constraints",
        "Move forward if valid",
        "Backtrack if invalid"
      ]
    },
    {
      "title": "Branch and Bound",
      "subtitle": "Optimization by exploring and pruning.",
      "root": "algorithm",
      "steps": [
        "Branch possible solutions",
        "Compute bound",
        "Prune weak paths",
        "Keep best solution"
      ]
    },
    {
      "title": "Complexity Recognition",
      "subtitle": "Fast pattern matching for quiz questions.",
      "root": "Big O",
      "steps": [
        "Direct access O(1)",
        "Halving O(log n)",
        "One pass O(n)",
        "Sorting O(n log n)",
        "Nested pairs O(n^2)"
      ]
    }
  ],
  "sourceNotes": [
    {
      "id": "md-1",
      "source": "combinedPDC.md",
      "title": "2-Shared-Memory.pptx",
      "body": "Parallel Programming Paradigms and Models\n\n[image omitted from source notes]\nBy : Prof. Eduardo S. Rodrigo\n\nIntended Learning Outcomes\nAt the end of the Lesson Students will be able to :\n1) Describe and differentiate between various parallel programming models;\n2) Evaluate the advantages and disadvantages of each parallel programming model; and\n 3) Apply the most appropriate parallel programming model to specific problem       scenarios, justifying their choice based on the characteristics and requirements of the       problem.\n\nWhat is Parallel Programming Models ?\nParallel Programming models are frameworks or paradigms used to enable the execution of processes simultaneously on multiple computing resources.\nThese models are essential in high-performance computing (HPC), enabling more efficient processing by dividing tasks into smaller subtasks that can be executed concurrently.\n\n[image omitted from source notes]\n\nSome Parallel Programming Models :\n1) Shared Memory Model\nIn this model, multiple processors share a common memory space and communicate by reading and writing to this shared memory.\n\nAdvantages: Simple to implement for small-scale parallelism, easy to understand and program.\n\nDisadvantages: Scalability issues due to memory contention and synchronization overhead.\n\n[image omitted from source notes]\n\nExample of a Shared Memory Model Program.\n\nThis example demonstrates how to compute the sum of an array of integers in parallel by dividing the task among multiple threads.\npublic class SharedMemorySum {\n    private static final int NUM_THREADS = 4; // Number of threads\n    private static final int ARRAY_SIZE = 1000; // Size of the array\n    private static int[] array = new int[ARRAY_SIZE]; // Array to sum\n    private static int sum = 0; // Shared sum variable\n\n    // Thread class for parallel sum computation\n    static class SumThread extends Thread {\n        private int start;\n        private int end;\n\n        public SumThread(int start, int end) {\n            this.start = start;\n            this.end = end;\n        }\n\n        @Override\n        public void run() {\n            int localSum = 0;\n            for (int i = start; i < end; i++) {\n                localSum += array[i];\n            }\n            addToSum(localSum);\n        }\n\n        // Synchronized method to safely add to the shared sum variable\n\n        private synchronized void addToSum(int value) {\n            sum += value;\n        }\n    }\n\npublic static void main(String[] args) {\n        // Initialize the array with values 1 to 1000\n        for (int i = 0; i < ARRAY_SIZE; i++) {\n            array[i] = i + 1;\n        }\n\n        // Create and start threads\n        SumThread[] threads = new SumThread[NUM_THREADS];\n        int chunkSize = ARRAY_SIZE / NUM_THREADS;\n        for (int i = 0; i < NUM_THREADS; i++) {\n            int start = i * chunkSize;\n            int end = (i == NUM_THREADS - 1) ? ARRAY_SIZE : start + chunkSize;\n            threads[i] = new SumThread(start, end);\n            threads[i].start();\n        }\n\n        // Wait for all threads to complete\n        for (int i = 0; i < NUM_THREADS; i++) {\n            try {\n                threads[i].join();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n\n        // Print the result\n        System.out.println(\"Sum of array elements: \" + sum);\n    }\n}\n\nExplanation\n\nSharedMemorySum Class :\nThis class contains a static array array and a static shared variable sum for storing the sum of the array elements.\n\nThe NUM_THREADS constant defines the number of threads to be used for parallel computation.\n\nThe ARRAY_SIZE constant defines the size of the array.\n\n2) SumThread Class:\nThis inner class extends Thread and represents a thread that computes the sum of a portion of the array.\n\nThe constructor takes start and end indices to define the portion of the array this thread will process.\n\nThe run method computes the local sum of the assigned portion of the array.\n\nThe addToSum method is synchronized to ensure that updates to the shared variable sum are thread-safe.\n\n3) Main Method\n Initializes the array with values from 1 to 1000.\n\n Creates and starts NUM_THREADS threads, each responsible for     summing a portion of the array.\n\n Waits for all threads to complete using join.\n\n Prints the final result of the sum.\n\n---"
    },
    {
      "id": "md-2",
      "source": "combinedPDC.md",
      "title": "Benefits and Challenges of Parallel and Distributed Computing_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:54 AM\n\nBenefits and Challenges of Parallel and Distributed Computing: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nBenefits and Challenges of Parallel and\n\nDistributed Computing\n\nBenefits of Parallel and Distributed Computing :\n\n1. Improved Performance:\n\nThe most significant advantage of parallel and distributed computing is the potential\n\nfor significant performance improvements. By dividing the workload among multiple\n\nprocessing units or computers, tasks can be completed much faster than on a\n\nsingle processor.\n\n2. Scalability:\n\nBoth parallel and distributed computing architectures can scale to handle large-\n\nscale computations and data processing. Adding more processors or nodes to the\n\nsystem allows it to handle increasingly complex tasks and larger datasets.\n\n3. Fault Tolerance:\n\nDistributed computing architectures inherently provide fault tolerance. If one node\n\nfails or becomes unavailable, the system can continue to operate with the\n\nremaining nodes, ensuring high availability and reliability.\n\n4. Cost-Effectiveness:\n\nParallel computing can offer cost savings by utilizing existing multi-core processors\n\nor specialized hardware like GPUs, allowing efficient use of resources and reducing\n\nthe need for additional hardware investments.\n\n5. Flexibility:\n\nDistributed computing architectures, such as cloud computing, offer flexibility in\n\nresource allocation. Users can dynamically scale resources up or down based on\n\ntheir specific requirements, optimizing resource utilization and cost.\n\n6. Handling Big Data:\n\nParallel and distributed computing are essential for processing and analyzing big\n\ndata. They enable the processing of vast amounts of data in parallel, allowing\n\nbusinesses and researchers to gain valuable insights from their data.\n\nhttps://tip.instructure.com/courses/77180/pages/benefits-and-challenges-of-parallel-and-distributed-computing?module_item_id=8964230\n\n1/3\n\n\f6/15/26, 9:54 AM\n\nBenefits and Challenges of Parallel and Distributed Computing: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nChallenges of Parallel and Distributed Computing:\n\n1. Complexity:\n\nDesigning and developing parallel and distributed computing systems can be\n\nsignificantly more complex than single-processor systems. Developers need to\n\nhandle data partitioning, synchronization, communication, and load balancing,\n\nwhich can lead to challenging programming and debugging.\n\n2. Communication Overhead:\n\nIn distributed computing, communication between nodes introduces overhead. Data\n\nmust be exchanged between nodes, and excessive communication can negate the\n\nperformance gains achieved through parallelism.\n\n3. Synchronization and Coordination:\n\nProper synchronization and coordination among processing units are essential in\n\nparallel computing to avoid race conditions and data inconsistencies. This can be\n\nchallenging to achieve, and inefficient synchronization can lead to performance\n\nbottlenecks.\n\n4. Load Balancing:\n\nIn both parallel and distributed computing, load balancing is crucial to ensure that\n\ntasks are evenly distributed among processing units or nodes. Load imbalances\n\ncan lead to underutilization of resources or increased execution times.\n\n5. Distributed Data Management:\n\nIn distributed computing, managing data across multiple nodes can be complex.\n\nEnsuring data consistency, availability, and fault tolerance across the distributed\n\nsystem requires careful design and implementation.\n\n6. Communication Latency:\n\nIn distributed computing, the physical distance between nodes can introduce\n\ncommunication latency. Minimizing latency is crucial for maintaining performance in\n\ngeographically distributed systems.\n\n7. Fault Management:\n\nWhile distributed computing architectures offer fault tolerance, managing and\n\ndiagnosing faults in large-scale distributed systems can be challenging.\n\nhttps://tip.instructure.com/courses/77180/pages/benefits-and-challenges-of-parallel-and-distributed-computing?module_item_id=8964230\n\n2/3\n\n\f6/15/26, 9:54 AM\n\nBenefits and Challenges of Parallel and Distributed Computing: CCS 309-CS33S1 - Parallel and Distributed Computing\n\n8. Scalability Challenges:\n\nScaling parallel and distributed computing systems to handle ever-increasing\n\ncomputational demands may require overcoming bottlenecks in communication,\n\nmemory access, and other hardware limitations.\n\nhttps://tip.instructure.com/courses/77180/pages/benefits-and-challenges-of-parallel-and-distributed-computing?module_item_id=8964230\n\n3/3\n\n---"
    },
    {
      "id": "md-3",
      "source": "combinedPDC.md",
      "title": "Complexity Analysis in Data Structures and Algorithms_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:54 AM\n\nComplexity Analysis in Data Structures and Algorithms: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nComplexity Analysis in Data Structures\n\nand Algorithms\n\nWhat is Complexity Analysis?\n\nComplexity analysis helps us understand how much time or space an algorithm will need as the size\n\nof the input grows. The input is our data, and the algorithms are the steps we take to process that\n\ndata. We estimate the time required to solve a problem or the amount of memory necessary based\n\non our approach.\n\nAsymptotic Notations\n\nThere are several types of asymptotic notations, including Big O, Big Omega, and Big Theta. Each\n\nnotation provides a different perspective on the growth rate of a function.\n\n1. Big-Oh (O) Notation: It represents the maximum amount of time or space required by an\n\nalgorithm considering all input values. It represents the upper limit of an algorithm’s execution\ntime or space, offering insight into its worst-case complexity.\n\n2. Big-Omega (Ω) notation: It represents the minimum amount of time or space required by an\n\nalgorithm considering all input values.\n\n3. Big-Theta (Θ) notation: It represents the upper and the lower bound of the running time of an\n\nalgorithm, it is used for analyzing the average-case complexity of an algorithm.\n\nhttps://tip.instructure.com/courses/77180/pages/complexity-analysis-in-data-structures-and-algorithms?module_item_id=8964258\n\n1/5\n\n\f6/15/26, 9:54 AM\n\nComplexity Analysis in Data Structures and Algorithms: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nTime Complexity?\n\nTime complexity measures the amount of time an algorithm takes to run as a function of\n\nthe input size.\n\nAlgorithms with lower time complexity are generally more desirable as they can handle larger input\n\nsizes with reasonable runtimes. Let’s understand the common time complexities with Java code\n\nexamples\n\n1. Constant Time: O(1)\n\nThe execution time does not depend on the size of the input. No matter how large the input is, the\n\nalgorithm takes the same amount of time to complete.\n\npublic class ConstantTimeExample {\n    public static void printFirstElement(int[] array) {\n        if (array.length > 0) {\n            System.out.println(array[0]);\n        }\n    }\n}\n\n2. Logarithmic Time: O(log n)\n\nThe execution time grows logarithmically with the input size.\n\npublic class LogarithmicTimeExample {\n    public static boolean binarySearch(int[] array, int target) {\n        int left = 0;\n        int right = array.length - 1;\n\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n\n            if (array[mid] == target) {\n                return true;\n            }\n            if (array[mid] < target) {\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n        return false;\n    }\n}\n\n3. Linear Time: O(n)\n\nThe execution time grows linearly with the input size. For each additional element in the input, the\nalgorithm requires a proportional amount of time to process it.\n\nhttps://tip.instructure.com/courses/77180/pages/complexity-analysis-in-data-structures-and-algorithms?module_item_id=8964258\n\n2/5\n\n\f6/15/26, 9:54 AM\n\nComplexity Analysis in Data Structures and Algorithms: CCS 309-CS33S1 - Parallel and Distributed Computing\n\npublic class LinearTimeExample {\n    public static void printAllElements(int[] array) {\n        for (int i = 0; i < array.length; i++) {\n            System.out.println(array[i]);\n        }\n    }\n}\n\n4. Linearithmic Time: O(n log n)\n\nThe algorithm’s runtime grows in proportion to the size of the input multiplied by the logarithm of the\n\ninput size. Many efficient sorting algorithms, like Merge Sort and Quick Sort, have linearithmic time\n\ncomplexity.\n\nimport java.util.Arrays;\n\npublic class LinearithmicTimeExample {\n    public static void main(String[] args) {\n        int[] array = {5, 3, 8, 1, 2};\n        Arrays.sort(array); // O(n log n)\n        System.out.println(Arrays.toString(array));\n    }\n}\n\nArrays.sort uses two sorting algorithms. One is a modification of Quicksort named dual-pivot\nquicksort, and the other is an adaptation of MergeSort named Timsort. Both have a time complexity\nof O(n log n), where n is the total number of items in the array.\n\n5. Quadratic Time: O(n²)\n\nThe execution time grows quadratically with the input size. This is typical of algorithms with nested\nloops.\n\npublic class QuadraticTimeExample {\n    public static void printAllPairs(int[] array) {\n        for (int i = 0; i < array.length; i++) {\n            for (int j = 0; j < array.length; j++) {\n                System.out.println(\"(\" + array[i] + \", \" + array[j] + \")\");\n            }\n        }\n    }\n}\n\nThese are the most frequently encountered time complexities. If you’re curious, Please feel free to\nexplore these — Cubic Time (O(n³)), Exponential Time (O(2^n)), and Factorial Time (O(n!)).\n\nSpace Complexity?\n\nSpace complexity is pretty much a measurement of the total amount of memory that\n\nalgorithms or operations need to run according to their input size.\n\nhttps://tip.instructure.com/courses/77180/pages/complexity-analysis-in-data-structures-and-algorithms?module_item_id=8964258\n\n3/5\n\n\f6/15/26, 9:54 AM\n\nComplexity Analysis in Data Structures and Algorithms: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nAlgorithms with lower space complexity are preferred as they optimize memory usage, especially in\nenvironments with limited resources. Let’s go through some common space complexities with Java\n\ncode examples\n\n1. Constant Space: O(1)\n\nThe space usage does not depend on the input size.\n\npublic class ConstantSpaceExample {\n    public static void printSum(int a, int b) {\n        int sum = a + b; // Constant space\n        System.out.println(sum);\n    }\n}\n\n2. Linear Space: O(n)\n\nThe space usage grows linearly with the input size.\n\npublic class LinearSpaceExample {\n    public static void createArray(int size) {\n        int[] array = new int[size]; // Linear space\n        for (int i = 0; i < size; i++) {\n            array[i] = i;\n        }\n    }\n}\n\n3. Quadratic Space: O(n²)\n\npublic class QuadraticSpaceExample {\n    public static void createMatrix(int size) {\n        int[][] matrix = new int[size][size]; // Quadratic space\n        for (int i = 0; i < size; i++) {\n            for (int j = 0; j < size; j++) {\n                matrix[i][j] = i * j;\n            }\n        }\n    }\n}\n\nSummary\n\nAlgorithms with time complexity types such as constant, logarithmic, linear, and linearithmic are\n\ntypically regarded as the optimal choices for efficient and scalable solutions. Nonetheless, the\n\nselection of the most suitable time complexity type varies depending on the specific requirements\nand constraints of the problem being addressed.\n\nComplexity analysis is a crucial concept for any software developer working with data structures and\n\nalgorithms. Understanding the complexity of algorithms is crucial for optimizing code and ensuring its\n\nhttps://tip.instructure.com/courses/77180/pages/complexity-analysis-in-data-structures-and-algorithms?module_item_id=8964258\n\n4/5\n\n\f6/15/26, 9:54 AM\n\nComplexity Analysis in Data Structures and Algorithms: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nefficiency.\n\nhttps://tip.instructure.com/courses/77180/pages/complexity-analysis-in-data-structures-and-algorithms?module_item_id=8964258\n\n5/5\n\n---"
    },
    {
      "id": "md-4",
      "source": "combinedPDC.md",
      "title": "Data Parallelism_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:55 AM\n\nData Parallelism: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nData Parallelism\n\nWhat is Data Parallelism ?\n\nData parallelism is a parallel computing technique that involves dividing a large\n\ndataset into smaller partitions and processing those partitions simultaneously using\n\nmultiple processing units or threads. Each processing unit independently performs the\n\nsame operation on its assigned portion of the data. The goal of data parallelism is to\n\nexploit parallelism in applications that can be decomposed into independent, identical\n\noperations on separate pieces of data.\n\nKey Characteristics of Data Parallelism:\n\n1. Independent Processing: In data parallelism, each processing unit operates\n\nindependently and performs the same computation on its assigned data partition.\n\nThere is no dependency between different partitions of the data, which allows for\n\nstraightforward parallel execution.\n\n2. Single Instruction, Multiple Data (SIMD): Data parallelism is often associated with\n\nSIMD execution, where a single instruction is applied to multiple data elements\n\nsimultaneously. This allows for efficient vectorized processing, especially in\n\narchitectures like GPUs that are optimized for SIMD operations.\n\n3. Load Balancing: An essential consideration in data parallelism is load balancing,\n\nwhich involves evenly distributing the workload among processing units to ensure\n\nefficient use of all available resources.\n\n4. Communication: Communication between processing units is minimal or\n\nunnecessary in data parallelism, as each unit operates independently on its\n\npartition of the data.\n\nData parallelism is commonly used in a variety of applications, especially in tasks that\n\ninvolve processing large datasets or performing repetitive computations on massive\n\namounts of data.\n\nhttps://tip.instructure.com/courses/77180/pages/data-parallelism?module_item_id=8964252\n\n1/2\n\n\f6/15/26, 9:55 AM\n\nData Parallelism: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nSome examples of data parallelism applications include:\n\nImage and Video Processing: Manipulating pixels in an image or frames in a\n\nvideo can be done in parallel, with each processing unit handling different portions\n\nof the image or video.\n\nNumerical Computing: Performing mathematical operations on arrays or matrices\n\ncan be highly parallelizable, making data parallelism a suitable approach for tasks\n\nlike matrix multiplication, element-wise operations, and scientific simulations.\n\nMachine Learning and Data Analytics: Many machine learning algorithms, such\n\nas deep learning neural networks, can be efficiently executed using data\n\nparallelism. Training and inference involve similar computations on different subsets\n\nof the data, making it an ideal fit for parallel processing.\n\nSignal Processing: Processing audio signals, video signals, or any time-series\n\ndata can be parallelized effectively using data parallelism.\n\nImplementing data parallelism often requires parallel programming techniques and\n\nframeworks that can divide the data into partitions, distribute the work among\n\nprocessing units, and manage the parallel execution efficiently. Examples of\n\nframeworks that support data parallelism include OpenMP for shared-memory systems\n\nand libraries like TensorFlow and PyTorch for distributed memory systems and GPUs.\n\nhttps://tip.instructure.com/courses/77180/pages/data-parallelism?module_item_id=8964252\n\n2/2\n\n---"
    },
    {
      "id": "md-5",
      "source": "combinedPDC.md",
      "title": "Definition of Parallel and Distributed Computing_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:54 AM\n\nDefinition of Parallel and Distributed Computing: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nDefinition of Parallel and Distributed\n\nComputing\n\nWhat is Parallel and Distributed Computing ?\n\nParallel and Distributed Computing are two related but distinct concepts in the field of\n\ncomputer science that deal with solving large computational problems by dividing the\n\nworkload across multiple processing units or computers. Let's explore each term\n\nindividually:\n\n1. Parallel Computing refers to the simultaneous execution of multiple tasks or parts\n\nof a task using multiple processors (cores) within a single computer. In other words,\n\nit involves breaking down a complex problem into smaller sub-problems that can be\n\nsolved concurrently, with each processor handling a portion of the overall\n\ncomputation. The main goal of parallel computing is to improve performance by\n\nreducing the execution time of a computation.\n\nKey Characteristics of Parallel Computing:\n\nShared Memory: In some parallel computing architectures, multiple processors\n\nshare a common memory, which allows them to exchange data and communicate\n\nmore easily.\n\nExplicit Coordination: The developer is responsible for explicitly dividing the\n\nproblem into smaller tasks and managing the communication and synchronization\n\nbetween processors.\n\nExamples: Multi-core processors in modern desktops and laptops, Graphics\n\nProcessing Units (GPUs) used in parallel computing for certain types of tasks, like\n\nmachine learning, scientific simulations, and video processing.\n\n2. Distributed Computing, on the other hand, involves multiple computers (nodes)\n\nworking together to solve a larger problem by sharing the workload and data across\n\nhttps://tip.instructure.com/courses/77180/pages/definition-of-parallel-and-distributed-computing?module_item_id=8964215\n\n1/2\n\n\f6/15/26, 9:54 AM\n\nDefinition of Parallel and Distributed Computing: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nthe network. Each computer operates independently and has its own memory, and\n\nthey communicate with each other through messages or remote procedure calls.\n\nKey characteristics of distributed computing:\n\nDistributed Memory: Each node in the system has its own memory, and data must\n\nbe explicitly exchanged between nodes when needed.\n\nHigh Scalability: Distributed computing can easily scale by adding more nodes to\n\nthe system, making it suitable for handling large-scale computations.\n\nFault Tolerance: Since distributed systems involve multiple nodes, they can\n\ncontinue to operate even if some nodes fail or become unavailable.\n\nExamples: Clusters of computers used for scientific research, cloud computing\n\nenvironments, distributed databases, and distributed web applications.\n\nhttps://tip.instructure.com/courses/77180/pages/definition-of-parallel-and-distributed-computing?module_item_id=8964215\n\n2/2\n\n---"
    },
    {
      "id": "md-6",
      "source": "combinedPDC.md",
      "title": "Distributed Computing Architectures_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:54 AM\n\nDistributed Computing Architectures: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nDistributed Computing Architectures\n\nDistributed Computing Architecture refers to the design and configuration of\n\nhardware and software that enable multiple computers (nodes) to work together as a\n\nunified system to solve computational problems.\n\nThe primary goal of distributed computing is to distribute the workload across multiple\n\nnodes, allowing the system to handle larger and more complex tasks than a single\n\ncomputer could handle alone. Distributed computing architectures are commonly used\n\nin various applications, including cloud computing, large-scale data processing, and\n\ndistributed web services.\n\nHere are some common examples of distributed computing architectures:\n\n1. Client-Server Architecture:\n\nThe client-server architecture is one of the most fundamental forms of distributed\n\ncomputing. In this model, there are two main components:\n\nClients: These are the end-user devices or applications that request services from\n\nthe server.\n\nServer: The server is a powerful computer or a cluster of computers that provide\n\nservices or resources to the clients.\n\nClients send requests to the server, which processes these requests and sends back\n\nthe results. This architecture is widely used in web applications, where web browsers\n\nact as clients and web servers provide the requested web pages and services.\n\n2. Peer-to-Peer (P2P) Architecture:\n\nIn a peer-to-peer architecture, each node can act both as a client and a server, and\n\nthere is no centralized server controlling the network. Nodes communicate directly\n\nwith each other to share resources, data, or processing tasks.\n\nP2P architectures are often used for file sharing, distributed storage, and\n\ndecentralized communication systems.\n\n3. MapReduce: MapReduce is a programming model and distributed computing\n\narchitecture used for processing and generating large datasets in parallel. It was\n\nhttps://tip.instructure.com/courses/77180/pages/distributed-computing-architectures?module_item_id=8964216\n\n1/2\n\n\f6/15/26, 9:54 AM\n\nDistributed Computing Architectures: CCS 309-CS33S1 - Parallel and Distributed Computing\n\npopularized by Google for big data processing. The MapReduce model divides a\n\ntask into two phases:\n\nMap Phase: The input data is divided into smaller chunks, and each chunk is\n\nprocessed independently by multiple nodes in parallel.\n\nReduce Phase: The intermediate results from the Map phase are combined, and\n\nthe final result is generated.\n\nMapReduce is commonly used in big data processing frameworks like Apache\n\nHadoop.\n\n4. Distributed Databases: Distributed database architectures distribute data across\n\nmultiple nodes to enable efficient data storage, retrieval, and processing. Each\n\nnode typically stores a partition of the data, and the system manages data\n\ndistribution, replication, and consistency. Distributed databases are essential in\n\nlarge-scale web applications and enterprise systems to handle massive amounts of\n\ndata.\n\n5. Cloud Computing: Cloud computing is a distributed computing model that\n\nprovides on-demand access to computing resources and services over the internet.\n\nIt abstracts the underlying hardware infrastructure, allowing users to scale\n\nresources as needed. Cloud computing is based on data centers with a vast\n\nnumber of servers working together to deliver various services, such as virtual\n\nmachines, storage, and applications.\n\n6. Distributed File Systems: Distributed file systems are designed to store and\n\nmanage data across multiple servers or nodes. They provide a unified view of the\n\nfile system to clients and enable efficient data replication and distribution for\n\nreliability and performance. Examples of distributed file systems include Google File\n\nSystem (GFS) and Hadoop Distributed File System (HDFS).\n\nhttps://tip.instructure.com/courses/77180/pages/distributed-computing-architectures?module_item_id=8964216\n\n2/2\n\n---"
    },
    {
      "id": "md-7",
      "source": "combinedPDC.md",
      "title": "Distributed system middleware applications.docx",
      "body": "**Understanding the basics of distributed system middleware applications**\n\n**Key Concepts in Distributed System Middleware Applications**\n\nMiddleware serves as the glue that binds distributed systems together, enabling communication and coordination between disparate components. It abstracts the complexities of the underlying hardware and network, providing a unified interface for developers. Key concepts include:\n\n* **Transparency**: Middleware ensures location, access, and replication transparency, allowing users to interact with the system without worrying about its distributed nature.\n* **Interoperability**: Middleware facilitates communication between heterogeneous systems, enabling seamless integration of different platforms and technologies.\n* **Scalability**: Middleware supports the addition of new nodes or resources without significant reconfiguration.\n* **Fault Tolerance**: Middleware ensures system reliability by handling failures gracefully, often through redundancy and failover mechanisms.\n\n**Importance of Distributed System Middleware Applications in Modern Systems**\n\nMiddleware is indispensable in modern distributed systems for several reasons:\n\n* **Simplified Development**: Middleware abstracts low-level complexities, allowing developers to focus on application logic rather than infrastructure.\n* **Enhanced Performance**: Middleware optimizes resource allocation and communication, ensuring efficient system operation.\n* **Improved Security**: Middleware often includes built-in security features like encryption and authentication, safeguarding data and communication.\n* **Support for Emerging Technologies**: Middleware is critical for integrating advanced technologies like AI, IoT, and blockchain into distributed systems.\n\n**Challenges in implementing distributed system middleware applications**\n\n**Common Pitfalls to Avoid**\n\nImplementing middleware in distributed systems is fraught with challenges. Common pitfalls include:\n\n* **Over-Engineering**: Adding unnecessary features can complicate the middleware, making it harder to maintain and scale.\n* **Poor Scalability**: Middleware that cannot handle increased loads or additional nodes can become a bottleneck.\n* **Inadequate Security**: Failing to address security concerns can expose the system to vulnerabilities.\n* **Lack of Standardization**: Using proprietary solutions can lead to compatibility issues and vendor lock-in.\n\n**Solutions to Overcome Challenges**\n\nTo address these challenges, consider the following strategies:\n\n* **Adopt Modular Design**: Build middleware with a modular architecture to simplify updates and scalability.\n* **Implement Robust Security Measures**: Use encryption, authentication, and regular security audits to protect the system.\n* **Leverage Open Standards**: Opt for middleware solutions that adhere to industry standards to ensure compatibility and flexibility.\n* **Conduct Thorough Testing**: Regularly test the middleware under various conditions to identify and resolve potential issues.\n\n**Best practices for distributed system middleware applications**\n\n**Industry Standards and Guidelines**\n\nAdhering to industry standards ensures that your middleware is robust, secure, and compatible. Key guidelines include:\n\n* **Follow the OSI Model**: Design middleware that aligns with the Open Systems Interconnection (OSI) model for better interoperability.\n* **Use Established Protocols**: Employ widely accepted communication protocols like HTTP, MQTT, or gRPC.\n* **Prioritize Security**: Implement best practices like secure coding, regular updates, and compliance with regulations like GDPR or HIPAA.\n\n**Tools and Technologies for Optimization**\n\nSeveral tools and technologies can enhance the performance and reliability of middleware:\n\n* **Message Brokers**: Tools like Apache Kafka and RabbitMQ facilitate efficient message passing between components.\n* **Service Meshes**: Solutions like Istio and Linkerd manage service-to-service communication in microservices architectures.\n* **Monitoring Tools**: Platforms like Prometheus and Grafana provide real-time insights into system performance.\n* **Middleware Frameworks**: Frameworks like CORBA, JBoss, and Spring Boot simplify middleware development.\n\n**Case studies: successful applications of distributed system middleware**\n\n**Real-World Examples**\n\n1. **Netflix**: Netflix uses middleware to manage its microservices architecture, ensuring seamless streaming for millions of users worldwide.\n2. **Amazon Web Services (AWS)**: AWS employs middleware to provide scalable and reliable cloud services, supporting businesses of all sizes.\n3. **Smart Cities**: Middleware enables IoT devices in smart cities to communicate and share data, improving urban planning and resource management.\n\n**Lessons Learned from Implementation**\n\n* **Scalability is Key**: Systems must be designed to handle growth without compromising performance.\n* **Focus on User Experience**: Middleware should enhance, not hinder, the end-user experience.\n* **Continuous Improvement**: Regular updates and optimizations are essential to keep middleware relevant and effective.\n\n**Future trends in distributed system middleware applications**\n\n**Emerging Technologies**\n\n* **AI-Driven Middleware**: Artificial intelligence is being integrated into middleware to enable predictive analytics and automated decision-making.\n* **Edge Computing**: Middleware is evolving to support edge computing, bringing computation closer to data sources.\n* **Blockchain Integration**: Middleware is being developed to facilitate secure and transparent transactions in blockchain networks.\n\n**Predictions for the Next Decade**\n\n* **Increased Automation**: Middleware will become more autonomous, reducing the need for manual intervention.\n* **Enhanced Security**: Future middleware will incorporate advanced security features to counter emerging threats.\n* **Greater Interoperability**: Middleware will support a wider range of platforms and technologies, fostering innovation and collaboration.\n\n**Step-by-step guide to implementing distributed system middleware applications**\n\n1. **Define Requirements**: Identify the specific needs and goals of your distributed system.\n2. **Choose the Right Middleware**: Select a middleware solution that aligns with your requirements and budget.\n3. **Design the Architecture**: Plan the system architecture, including communication protocols and data flow.\n4. **Develop and Test**: Build the middleware and conduct thorough testing to ensure reliability and performance.\n5. **Deploy and Monitor**: Roll out the middleware and use monitoring tools to track its performance and address issues.\n6. **Tips for do's and don'ts**\n\n| **Do's** | **Don'ts** |\n| --- | --- |\n| Use modular and scalable designs | Overcomplicate the middleware architecture |\n| Prioritize security and compliance | Ignore potential vulnerabilities |\n| Regularly update and maintain the middleware | Rely on outdated or unsupported solutions |\n| Conduct thorough testing before deployment | Skip testing to save time |\n| Leverage industry standards and best practices | Use proprietary solutions without flexibility |\n\n---"
    },
    {
      "id": "md-8",
      "source": "combinedPDC.md",
      "title": "Introduction-to-Parallel-Programming-Languages.pptx",
      "body": "[image omitted from source notes]\nIntroduction to Parallel Programming Languages\nAs data sizes and computational demands grow, traditional sequential programming approaches often reach their limits. Parallel programming languages offer a solution by enabling us to harness the power of multiple processors simultaneously, significantly accelerating computations.\n\n### Notes:\n\nSequential vs. Parallel Programming\nSequential Programming\nParallel Programming\nThe traditional approach where instructions are executed one after another on a single processor. Imagine a single chef preparing a dish, completing each step in a sequence.\nThe problem is divided into smaller, independent tasks that can be executed concurrently on multiple processors. Think of a team of chefs working together, each handling a specific aspect of the dish simultaneously. This significantly reduces overall execution time.\n\n[image omitted from source notes]\n\n[image omitted from source notes]\n\n### Notes:\n\n[image omitted from source notes]\nShared-Memory Model\nIn the shared-memory model, processors share a global memory space, allowing them to access and modify the same data concurrently. This approach requires careful synchronization mechanisms to avoid data races and ensure program correctness.\n\n[image omitted from source notes]\nGlobal Memory\nAll processors access a single, shared memory space.\n\n[image omitted from source notes]\nSynchronization\nCrucial for preventing data conflicts and ensuring correctness.\n\n[image omitted from source notes]\nLanguages\nUtilized by languages like OpenMP and Cilk Plus.\n\n### Notes:\n\n[image omitted from source notes]\nMessage-Passing Model (MPI)\nIn the message-passing model, processors have private memories and communicate by exchanging messages. This model is well-suited for distributed memory systems where processors don't directly access each other's memory.\n\n[image omitted from source notes]\nMessage Exchange\nProcessors communicate by sending and receiving explicit messages.\n\n[image omitted from source notes]\nPrivate Memory\nEach processor maintains its own isolated memory space.\n\n[image omitted from source notes]\nDistributed Systems\nIdeal for systems where processors are physically separated.\n\n### Notes:\n\n[image omitted from source notes]\nTask-Based Parallelism\nTask-based parallelism breaks down a program into independent tasks that can be scheduled and executed on available processors. This approach offers flexibility in managing workload distribution.\n\n[image omitted from source notes]\nDecomposition\nProgram is divided into smaller, independent tasks.\n\n[image omitted from source notes]\nScheduling\nTasks are dynamically assigned to available processors.\n\n[image omitted from source notes]\nExecution\nTasks run concurrently on multiple processors.\n\n### Notes:\n\nKey Concepts in Parallel Programming Languages: Mastering the Tools\n\n[image omitted from source notes]\n\n[image omitted from source notes]\nThreads and Processes\nUnderstanding the distinction between threads and processes is fundamental to parallel programming. They represent different levels of execution granularity.\n\nThreads\nLightweight units of execution within a process that share the same memory space. Multiple threads can run concurrently within a single processor, improving utilization.\n\nProcesses\nIndependent programs with their own private memory space. Communication between processes (often on separate machines) typically happens through message passing or shared memory mechanisms.\n\n### Notes:\n\nSynchronization Techniques\nSynchronization is critical in parallel programming to ensure data consistency and prevent race conditions when multiple threads or processes access shared resources concurrently.\n\nLocks\n\n[image omitted from source notes]\nExclusive access to a resource, preventing simultaneous modification.\n\nMutexes\n\n[image omitted from source notes]\nMutual exclusion objects for protecting shared data.\n\nSemaphores\n\n[image omitted from source notes]\nControl access to a common resource by multiple processes.\n\n### Notes:\n\nCommunication in Parallel Systems\nEffective communication mechanisms are crucial for exchanging data between processes and threads, especially for coordinating tasks and sharing results in the message-passing model.\n\n[image omitted from source notes]\n\n[image omitted from source notes]\n\n[image omitted from source notes]\n\n[image omitted from source notes]\nReceive\nSend\n\n[image omitted from source notes]\nAccepting data at the destination process.\nInitiating data transfer from one process.\n\n[image omitted from source notes]\nCollective\nBarrier\n\n[image omitted from source notes]\nOperations involving groups of processes (e.g., broadcast).\nEnsuring all processes reach a point before proceeding.\n\n[image omitted from source notes]\n\n### Notes:\n\n[image omitted from source notes]\nLoad Balancing for Optimal Performance\nLoad balancing is essential for distributing workload evenly across available processors. This maximizes resource utilization and minimizes idle time, leading to significant performance gains in parallel applications.\n100%\n0%\n2X\nResource Utilization\nIdle Time\nPerformance Boost\nAchieving full use of all available processors.\nMinimizing periods where processors are inactive.\nPotential speedup with effective load balancing.\n\n### Notes:\n\nPopular Parallel Programming Languages: Exploring the Options\n\n[image omitted from source notes]\n\n[image omitted from source notes]\nKey Takeaways and Future Outlook\nParallel programming is vital for tackling complex computational challenges. By understanding its models and concepts, we can unlock the full potential of modern hardware.\n\n1\nEmbrace Parallelism\n\nEssential for handling large datasets and complex problems.\n\n2\nChoose the Right Model\n\nSelect shared-memory or message-passing based on system architecture.\n\n3\nMaster Synchronization\n\nCrucial for data integrity and preventing race conditions.\n\n4\nOptimize Load Balancing\n\nEnsure efficient resource utilization for maximum performance.\n\n### Notes:\n\n---"
    },
    {
      "id": "md-9",
      "source": "combinedPDC.md",
      "title": "MESSAGE-PASSING.pptx",
      "body": "[image omitted from source notes]\nMessage-passing Programming\nBy : Prof. Eduardo Rodrigo\n\nIntended Learning Outcomes\nAt the end of the Lesson Students will be able to :\n1)\nDefine what message-passing programming is;\n2) Describe some real-world example of message-passing programming; and\n3) Demonstrate a working example of a message-passing system.\n\nWhat is Message-passing Programming?\n\nMessage-passing programming is a parallel programming paradigm in which multiple independent processes or threads communicate and synchronize with each other by exchanging messages.\n\nIn this model, processes do not share a common memory space like in shared-memory programming; instead, they run in separate memory spaces and communicate explicitly by sending and receiving messages.\n\n[image omitted from source notes]\n\nReal-world example of  Message-passing Programming\n1) Scientific Simulations Weather Forecasting:\n\nModels for predicting weather involve massive computations that simulate atmospheric conditions. These models are typically run on supercomputers using MPI to distribute computations across thousands of processors.\n\n[image omitted from source notes]\n\nReal-world example of  Message-passing Programming\n2) Big Data Analytics\n\nMapReduce Frameworks:\nTools like Apache Hadoop and Apache Spark use a form of message-passing where data is split across nodes and intermediate results are communicated between nodes to aggregate final results.\n\nDistributed Databases:\nSystems like Apache Cassandra and Amazon DynamoDB distribute data across multiple nodes and use message-passing to ensure consistency and availability.\n\n[image omitted from source notes]\n\nReal-world example of  Message-passing Programming\nTelecommunications\n\nNetwork Routers and Switches:\nThese devices use message-passing to handle the routing of data packets efficiently across networks, ensuring data reaches its destination promptly.\n\nReal-Time Communication Systems:\nApplications like VoIP (Voice over Internet Protocol) and online gaming rely on message-passing to handle the real-time exchange of data between users.\n\n[image omitted from source notes]\n\nReal-world example of  Message-passing Programming\n4) Internet of Things (IoT)\n\nSmart Grids:\nEnergy management systems use message-passing to communicate between sensors, devices, and control centers to manage energy distribution efficiently.\n\nHome Automation:\nDevices in smart homes (e.g., thermostats, security cameras) use message-passing to communicate status updates and control commands.\n\n[image omitted from source notes]\n\nKey Concepts of  Message-passing Programming\nMessage Passing:\n\nCommunication in message-passing programming is achieved through message passing, where processes send messages containing data or commands to other processes. Messages are received and processed by the target processes.\n\n[image omitted from source notes]\n\nKey Concepts of  Message-passing Programming\n2) Asynchronous Communication:\n\nMessage passing typically follows an asynchronous communication model, meaning that processes can continue their execution while waiting for messages. When a message arrives, the receiving process can process it at its convenience.\n\n[image omitted from source notes]\n\nKey Concepts of  Message-passing Programming\n3) Explicit Synchronization:\n\nIn message-passing programming, synchronization between processes is explicit. Processes explicitly wait for messages or synchronize their activities based on message receipt.\n\nKey Concepts of  Message-passing Programming\n4) Point-to-Point Communication:\n\nMessage passing supports point-to-point communication, where a process sends a message to a specific target process. This allows for direct and targeted communication.\n\n[image omitted from source notes]\n\nKey Concepts of  Message-passing Programming\n5) Collective Communication:\n\nMessage-passing systems also support collective communication operations, where a group of processes exchange data with specific patterns, such as broadcasting a message to all processes, reducing data across processes, or gathering data from multiple processes.\n\n[image omitted from source notes]\n\n[image omitted from source notes]\n6) Programming Models and Libraries:\n\nMessage-passing programming can be implemented using various programming models and libraries, such as the Message Passing Interface (MPI), which is a widely used standard for high-performance computing and distributed memory systems. Other message-passing libraries and frameworks include Open MPI and Microsoft's MPI implementation.\n\n[image omitted from source notes]\n\nJava program that implements message-passing using the Java Message Service (JMS) and Apache ActiveMQ as the message broker. This program includes both a message producer (sender) and a message consumer (receiver).\nPrerequisites:\n\nInstall Apache ActiveMQ\n\nRun ActiveMQ: Start the ActiveMQ server by navigating to the bin directory of your ActiveMQ installation and executing ./activemq start.\n<dependencies>\n    <dependency>\n        <groupId>javax.jms</groupId>\n        <artifactId>javax.jms-api</artifactId>\n        <version>2.0.1</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.activemq</groupId>\n        <artifactId>activemq-client</artifactId>\n        <version>5.16.3</version>\n    </dependency>\n</dependencies>\n3) Add the following dependencies to your pom.xml       file to include JMS and ActiveMQ libraries.\n\nProducer (Sender) Code :\nCreate a class Producer.java to send a message to the JMS queue:\nimport javax.jms.Connection;\nimport javax.jms.ConnectionFactory;\nimport javax.jms.JMSException;\nimport javax.jms.MessageProducer;\nimport javax.jms.Queue;\nimport javax.jms.Session;\nimport javax.jms.TextMessage;\nimport org.apache.activemq.ActiveMQConnectionFactory;\n\npublic class Producer {\n    private static String brokerURL = \"tcp://localhost:61616\";\n\n    public static void main(String[] args) {\n        ConnectionFactory connectionFactory = new ActiveMQConnectionFactory(brokerURL);\n        try (Connection connection = connectionFactory.createConnection()) {\n            connection.start();\n\nSession session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);\n            Queue queue = session.createQueue(\"exampleQueue\");\n            MessageProducer producer = session.createProducer(queue);\n\n            TextMessage message = session.createTextMessage(\"Hello, World!\");\n            producer.send(message);\n\n            System.out.println(\"Message sent: \" + message.getText());\n        } catch (JMSException e) {\n            e.printStackTrace();\n        }\n    }\n}\n\nConsumer (Receiver) Code : Create a class Consumer.java to receive messages from the JMS queue:\nimport javax.jms.Connection;\nimport javax.jms.ConnectionFactory;\nimport javax.jms.JMSException;\nimport javax.jms.MessageConsumer;\nimport javax.jms.Queue;\nimport javax.jms.Session;\nimport javax.jms.TextMessage;\nimport org.apache.activemq.ActiveMQConnectionFactory;\n\npublic class Consumer {\n    private static String brokerURL = \"tcp://localhost:61616\";\n\n    public static void main(String[] args) {\n        ConnectionFactory connectionFactory = new ActiveMQConnectionFactory(brokerURL);\n        try (Connection connection = connectionFactory.createConnection()) {\n            connection.start();\n\nSession session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);\n            Queue queue = session.createQueue(\"exampleQueue\");\n            MessageConsumer consumer = session.createConsumer(queue);\n\n            TextMessage message = (TextMessage) consumer.receive();\n            System.out.println(\"Message received: \" + message.getText());\n        } catch (JMSException e) {\n            e.printStackTrace();\n        }\n    }\n}\n\nHow to Run the Program :\n\nStart ActiveMQ: Make sure your ActiveMQ server is running by executing ./activemq start in the bin directory of your ActiveMQ installation.\n\nRun the Producer: Compile and run the Producer class. It will send a message to the queue named exampleQueue.\n\nRun the Consumer: Compile and run the Consumer class. It will receive and print the message from the exampleQueue.\n\nExplanation :\n\nProducer:\nConnects to the ActiveMQ broker at tcp://localhost:61616.\nCreates a session and a queue named exampleQueue.\nSends a text message \"Hello, World!\" to the queue.\n\n2) Consumer:\nConnects to the ActiveMQ broker at tcp://localhost:61616.\nCreates a session and a consumer for the exampleQueue.\nReceives and prints the message from the queue.\n\n---"
    },
    {
      "id": "md-10",
      "source": "combinedPDC.md",
      "title": "Message-passing Programming_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:55 AM\n\nMessage-passing Programming: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nMessage-passing Programming\n\nWhat is Message-passing Programming?\n\nMessage-passing programming is a parallel programming paradigm in which\n\nmultiple independent processes or threads communicate and synchronize with each\n\nother by exchanging messages. In this model, processes do not share a common\n\nmemory space like in shared-memory programming; instead, they run in separate\n\nmemory spaces and communicate explicitly by sending and receiving messages.\n\nKey concepts and characteristics of message-passing programming:\n\n1. Message Passing: Communication in message-passing programming is achieved\n\nthrough message passing, where processes send messages containing data or\n\ncommands to other processes. Messages are received and processed by the target\n\nprocesses.\n\n2. Asynchronous Communication: Message passing typically follows an\n\nasynchronous communication model, meaning that processes can continue their\n\nexecution while waiting for messages. When a message arrives, the receiving\n\nprocess can process it at its convenience.\n\n3. Explicit Synchronization: In message-passing programming, synchronization\n\nbetween processes is explicit. Processes explicitly wait for messages or\n\nsynchronize their activities based on message receipt.\n\n4. Point-to-Point Communication: Message passing supports point-to-point\n\ncommunication, where a process sends a message to a specific target process.\n\nThis allows for direct and targeted communication.\n\n5. Collective Communication: Message-passing systems also support collective\n\ncommunication operations, where a group of processes exchange data with specific\n\npatterns, such as broadcasting a message to all processes, reducing data across\n\nprocesses, or gathering data from multiple processes.\n\n6. Programming Models and Libraries: Message-passing programming can be\n\nimplemented using various programming models and libraries, such as the\n\nMessage Passing Interface (MPI), which is a widely used standard for high-\n\nhttps://tip.instructure.com/courses/77180/pages/message-passing-programming?module_item_id=8964248\n\n1/2\n\n\f6/15/26, 9:55 AM\n\nMessage-passing Programming: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nperformance computing and distributed memory systems. Other message-passing\n\nlibraries and frameworks include Open MPI and Microsoft's MPI implementation.\n\nAdvantages of Message-passing Programming:\n\nScalability: Message passing is inherently scalable since it does not rely on shared\n\nmemory and can handle large-scale parallel processing, making it suitable for\n\ndistributed memory systems and clusters.\n\nExplicit Control: Message passing provides explicit control over communication and\n\nsynchronization, allowing developers to finely tune the program's behavior.\n\nFault Tolerance: In distributed systems, message passing can facilitate fault\n\ntolerance mechanisms by enabling processes to recover from failures and continue\n\ncommunication with surviving processes.\n\nChallenges of Message-passing Programming:\n\nComplex Communication Patterns: Designing and managing communication\n\npatterns between processes can be challenging, especially in large-scale\n\napplications with complex communication requirements.\n\nOverhead: Message passing introduces communication overhead, and excessive\n\ncommunication can potentially impact performance.\n\nDebugging: Debugging message-passing programs can be more challenging\n\ncompared to shared-memory programs due to potential message deadlocks,\n\nunexpected message order, and other communication-related issues.\n\nhttps://tip.instructure.com/courses/77180/pages/message-passing-programming?module_item_id=8964248\n\n2/2\n\n---"
    },
    {
      "id": "md-11",
      "source": "combinedPDC.md",
      "title": "Parallel Algorithm - Design Techniques_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:54 AM\n\nParallel Algorithm - Design Techniques: CCS 309-CS33S1 - Parallel and Distributed Computing\n\n\n\nParallel Algorithm - Design Techniques\n\nSelecting a proper designing technique for a parallel algorithm is the most difficult and important task\n\nMost of the parallel programming problems may have more than one solution. In this chapter, we will\n\ndiscuss the following designing techniques for parallel algorithms −\n\nDivide and conquer\n\nGreedy Method\n\nDynamic Programming\n\nBacktracking\n\nBranch & Bound\n\nLinear Programming\n\nDivide and Conquer Method\n\nIn the divide and conquer approach, the problem is divided into several small sub-problems. Then the\n\nsub-problems are solved recursively and combined to get the solution of the original problem.\n\nThe divide and conquer approach involves the following steps at each level −\n\nDivide − The original problem is divided into sub-problems.\n\nConquer − The sub-problems are solved recursively.\n\nCombine − The solutions of the sub-problems are combined together to get the solution of the\noriginal problem.\n\nThe divide and conquer approach is applied in the following algorithms −\n\nBinary search\n\nQuick sort\n\nMerge sort\nInteger multiplication\nMatrix inversion\nMatrix multiplication\n\nGreedy Method\n\nIn greedy algorithm of optimizing solution, the best solution is chosen at any moment. A greedy\nalgorithm is very easy to apply to complex problems. It decides which step will provide the most\n\naccurate solution in the next step.\n\nThis algorithm is a called greedy because when the optimal solution to the smaller instance is\nprovided, the algorithm does not consider the total program as a whole. Once a solution is\n\nhttps://tip.instructure.com/courses/77180/pages/parallel-algorithm-design-techniques?module_item_id=8964259\n\n1/3\n\n\f6/15/26, 9:54 AM\n\nParallel Algorithm - Design Techniques: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nconsidered, the greedy algorithm never considers the same solution again.\n\n\n\nA greedy algorithm works recursively creating a group of objects from the smallest possible\n\ncomponent parts. Recursion is a procedure to solve a problem in which the solution to a specific\n\nproblem is dependent on the solution of the smaller instance of that problem.\n\nDynamic Programming\n\nDynamic programming is an optimization technique, which divides the problem into smaller sub-\n\nproblems and after solving each sub-problem, dynamic programming combines all the solutions to\n\nget ultimate solution. Unlike divide and conquer method, dynamic programming reuses the solution to\n\nthe sub-problems many times.\n\nRecursive algorithm for Fibonacci Series is an example of dynamic programming.\n\nBacktracking Algorithm\n\nBacktracking is an optimization technique to solve combinational problems. It is applied to both\nprogrammatic and real-life problems. Eight queen problem, Sudoku puzzle and going through a maze\nare popular examples where backtracking algorithm is used.\n\nIn backtracking, we start with a possible solution, which satisfies all the required conditions. Then we\n\nmove to the next level and if that level does not produce a satisfactory solution, we return one level\nback and start with a new option.\n\nBranch and Bound\n\nA branch and bound algorithm is an optimization technique to get an optimal solution to the problem.\n\nIt looks for the best solution for a given problem in the entire space of the solution. The bounds in the\nfunction to be optimized are merged with the value of the latest best solution. It allows the algorithm\n\nto find parts of the solution space completely.\n\nThe purpose of a branch and bound search is to maintain the lowest-cost path to a target. Once a\nsolution is found, it can keep improving the solution. Branch and bound search is implemented in\n\ndepth-bounded search and depth first search.\n\nLinear Programming\n\nLinear programming describes a wide class of optimization job where both the optimization criterion\nand the constraints are linear functions. It is a technique to get the best outcome like maximum profit\nshortest path, or lowest cost.\n\nIn this programming, we have a set of variables and we have to assign absolute values to them to\nsatisfy a set of linear equations and to maximize or minimize a given linear objective function.\n\nhttps://tip.instructure.com/courses/77180/pages/parallel-algorithm-design-techniques?module_item_id=8964259\n\n2/3\n\n\f6/15/26, 9:54 AM\n\nParallel Algorithm - Design Techniques: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nhttps://tip.instructure.com/courses/77180/pages/parallel-algorithm-design-techniques?module_item_id=8964259\n\n3/3\n\n---"
    },
    {
      "id": "md-12",
      "source": "combinedPDC.md",
      "title": "Parallel Computing Architecture Additional Topic_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:55 AM\n\nParallel Computing Architecture Additional Topic: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nParallel Computing Architecture\n\nAdditional Topic\n\nParallel Computing Architectures refer to the different designs and configurations of\n\nhardware and software that enable parallel processing within a single computer or\n\nacross multiple computers in a distributed system. These architectures are designed to\n\nefficiently execute concurrent tasks, divide workloads, and coordinate communication\n\nbetween processing units.\n\nBelow are some Common Parallel Computing Architectures :\n\n1. Shared Memory Architecture :\n\nIn a shared memory architecture, multiple processors (cores) within a single\n\ncomputer share a common memory space. This design allows all processors to\n\naccess the same data directly, which simplifies communication and data sharing\n\nbetween them. However, it also requires careful synchronization to avoid conflicts\n\nwhen multiple processors try to access the same memory location simultaneously.\n\nCommon shared memory architectures include:\n\nSymmetric Multiprocessors (SMP): In an SMP system, all processors have equal\n\naccess to memory and I/O devices. It is commonly used in multi-core processors\n\nfound in most modern computers.\n\nUniform Memory Access (UMA): In UMA systems, the access time to any location in\n\nmemory is roughly the same for all processors.\n\nNon-Uniform Memory Access (NUMA): NUMA systems divide memory into several\n\nbanks, and access time may vary depending on the processor's proximity to the\n\nmemory bank.\n\n2. Distributed Memory Architecture :\n\nDistributed memory architecture involves multiple computers (nodes) connected\n\nthrough a network, with each node having its own memory. This approach allows\n\nhttps://tip.instructure.com/courses/77180/pages/parallel-computing-architecture-additional-topic?module_item_id=9015103\n\n1/2\n\n\f6/15/26, 9:55 AM\n\nParallel Computing Architecture Additional Topic: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nfor easy scalability as more nodes can be added to the system, and it provides fault\n\ntolerance since a failure in one node does not affect the entire system.\n\nCommon distributed memory architectures include:\n\nCluster Computing: A cluster is a group of interconnected computers that work\n\ntogether as a single system. Cluster computing is widely used in high-performance\n\ncomputing (HPC) environments to solve complex scientific and engineering\n\nproblems.\n\nGrid Computing: Grid computing extends the concept of clusters to a larger scale,\n\noften spanning multiple organizations and locations. It enables resource sharing\n\nand collaboration over a wide area network.\n\n3. Hybrid Architectures :\n\nHybrid architectures combine both shared memory and distributed memory models\n\nto take advantage of their respective strengths. Such systems are designed to work\n\nefficiently with both multi-core processors and distributed nodes.\n\nOne popular example of a hybrid architecture is a distributed shared memory\n\n(DSM) system. In DSM, the physical memory of individual nodes is distributed, but\n\nthe software provides an illusion of shared memory, allowing processes to access\n\nmemory on remote nodes transparently.\n\nhttps://tip.instructure.com/courses/77180/pages/parallel-computing-architecture-additional-topic?module_item_id=9015103\n\n2/2\n\n---"
    },
    {
      "id": "md-13",
      "source": "combinedPDC.md",
      "title": "Parallel Computing Architecture.docx",
      "body": "CCS 309-PARALLEL COMPUTING\n\n## What is Parallel Computing?\n\n### Serial Computing\n\nTraditionally, software has been written for ***serial*** computation:\n\n* A problem is broken into a discrete series of instructions\n* Instructions are executed sequentially one after another\n* Executed on a single processor\n* Only one instruction may execute at any moment in time\n\n[image omitted from source notes]\n\n**For example:**\n\n**[image omitted from source notes]**\n\n### Parallel Computing\n\nIn the simplest sense, ***parallel computing*** is the simultaneous use of multiple compute resources to solve a computational problem:\n\n* A problem is broken into discrete parts that can be solved concurrently\n* Each part is further broken down to a series of instructions\n* Instructions from each part execute simultaneously on different processors\n* An overall control/coordination mechanism is employed\n\n[image omitted from source notes]\n\nFor example:\n\n**[image omitted from source notes]**\n\n* The computational problem should be able to:\n  + Be broken apart into discrete pieces of work that can be solved simultaneously;\n  + Execute multiple program instructions at any moment in time;\n  + Be solved in less time with multiple compute resources than with a single compute resource.\n* The compute resources are typically:\n  + A single computer with multiple processors/cores\n  + An arbitrary number of such computers connected by a network\n\n### Parallel Computers\n\n* Virtually all stand-alone computers today are parallel from a hardware perspective:\n  + Multiple functional units (L1 cache, L2 cache, branch, prefetch, decode, floating- point, graphics processing (GPU), integer, etc.)\n  + Multiple execution units/cores\n  + Multiple hardware threads\n\n[image omitted from source notes]\n\n###### IBM BG/Q COMPUTE CHIP WITH 18 CORES (PU) AND 16 L2 CACHE UNITS (L2)\n\n* + Networks connect multiple stand-alone computers (nodes) to make larger parallel computer clusters.\n\n[image omitted from source notes]\n\n* For example, the schematic below shows a typical LLNL parallel computer cluster:\n  + Each compute node is a multi-processor parallel computer in itself\n  + Multiple compute nodes are networked together with an Infiniband network\n  + Special purpose nodes, also multi-processor, are used for other purposes\n\n[image omitted from source notes]\n\n* The majority of the world's large parallel computers (supercomputers) are clusters of hardware produced by a handful of (mostly) well known vendors.\n\n[image omitted from source notes]\n\n*Source:* [***Top500.org***](https://www.top500.org/)\n\n## Why Use Parallel Computing?\n\n### The Real World is Massively Parallel\n\n* In the natural world, many complex, interrelated events are happening at the same time, yet within a temporal sequence.\n* Compared to serial computing, parallel computing is much better suited for modelling, simulating and understanding complex, real world phenomena.\n\n### Main Reasons\n\n#### SAVE TIME AND/OR MONEY\n\n* In theory, throwing more resources at a task will shorten its time to completion, with potential cost savings.\n* Parallel computers can be built from cheap, commodity components.\n* Many problems are so large and/or complex that it is impractical or impossible to solve them using a serial program, especially given limited computer memory.\n* Example: \"Grand Challenge Problems\" ([**en.wikipedia.org/wiki/Grand\\_Challenge**](https://en.wikipedia.org/wiki/Grand_Challenges)) requiring petaflops and petabytes of computing resources.\n* Example: Web search engines/databases processing millions of transactions every second\n* A single compute resource can only do one thing at a time. Multiple compute resources can do many things simultaneously.\n* Example: Collaborative Networks provide a global venue where people from around the world can meet and conduct work \"virtually\".\n* Using compute resources on a wide area network, or even the Internet when local compute resources are scarce or insufficient.\n* Example: **SETI@home** [(**setiathome.berkeley.edu**](http://setiathome.berkeley.edu/)) has over 1.7 million users in nearly every country in the world. (May, 2018).\n* Example: **Folding@home** [(**folding.stanford.edu**](http://folding.stanford.edu/)) over 1.8 million contributors globally (May, 2018)\n* Modern computers, even laptops, are parallel in architecture with multiple processors/cores.\n* Parallel software is specifically intended for parallel hardware with multiple cores, threads, etc.\n* In most cases, serial programs run on modern computers \"waste\" potential computing power.\n\n[image omitted from source notes]\n\n### The Future\n\n* During the past 20+ years, the trends indicated by ever faster networks, distributed systems, and multi-processor computer architectures (even at the desktop level) clearly show that ***parallelism is the future of computing***.\n* In this same time period, there has been a greater than **500,000x** increase in supercomputer performance, with no end currently in sight.\n* ***The race is already on for Exascale Computing!***\n  + Exaflop = 1018 calculations per second\n\n## Who is Using Parallel Computing?\n\n### Science and Engineering\n\n* Historically, parallel computing has been considered to be \"the high end of computing\", and has been used to model difficult problems in many areas of science and engineering:\n* Atmosphere, Earth, Environment\n* Physics - applied, nuclear, particle, condensed matter, high pressure, fusion, photonics\n* Bioscience, Biotechnology, Genetics\n* Chemistry, Molecular Sciences\n* Geology, Seismology\n* Mechanical Engineering - from prosthetics to spacecraft\n* Electrical Engineering, Circuit Design, Microelectronics\n* Computer Science, Mathematics\n* Defense, Weapons\n* Today, commercial applications provide an equal or greater driving force in the development of faster computers. These applications require the processing of large amounts of data in sophisticated ways. For example:\n* \"Big Data\", databases, data mining\n* Artificial Intelligence (AI)\n* Oil exploration\n* Web search engines, web-based business services\n* Medical imaging and diagnosis\n* Pharmaceutical design\n* Financial and economic modelling\n* Management of national and multi-national corporations\n* Advanced graphics and virtual reality, particularly in the entertainment industry\n* Networked video and multi-media technologies\n* Collaborative work environments"
    },
    {
      "id": "md-14",
      "source": "combinedPDC.md",
      "title": "Concepts and Terminology",
      "body": "## von Neumann Architecture\n\n[image omitted from source notes]\n\n###### JOHN VON NEUMANN CIRCA 1940S (SOURCE: LANL ARCHIVES)\n\n* Named after the Hungarian mathematician John von Neumann who first authored the general requirements for an electronic computer in his 1945 papers.\n* Also known as \"stored-program computer\" - both program instructions and data are kept in electronic memory. Differs from earlier computers which were programmed through \"hard wiring\".\n* Since then, virtually all computers have followed this basic design:\n\n[image omitted from source notes]\n\n* Comprised of four main components:\n  + Memory\n  + Control Unit\n  + Arithmetic Logic Unit\n  + Input/Output\n* Read/write, random access memory is used to store both program instructions and data\n  + Program instructions are coded data which tell the computer to do something\n  + Data is simply information to be used by the program\n* Control unit fetches instructions/data from memory, decodes the instructions and then ***sequentially*** coordinates operations to accomplish the programmed task.\n* Arithmetic Unit performs basic arithmetic operations\n* Input/Output is the interface to the human operator\n* More info on his other remarkable accomplishments:\n\n[**http://en.wikipedia.org/wiki/John\\_von\\_Neumann**](http://en.wikipedia.org/wiki/John_von_Neumann)\n\n* So what? Who cares?\n  + Well, parallel computers still follow this basic design, just multiplied in units. The basic, fundamental architecture remains the same.\n\n## Flynn's Classical Taxonomy\n\n* There are different ways to classify parallel computers. Examples are available in the references[**.**](https://hpc.llnl.gov/sites/default/files/parallelClassifications_0.pdf)\n* One of the more widely used classifications, in use since 1966, is called Flynn's Taxonomy.\n* Flynn's taxonomy distinguishes multi-processor computer architectures according to how they can be classified along the two independent dimensions of ***Instruction Stream*** and ***Data Stream***. Each of these dimensions can have only one of two possible states: ***Single*** or ***Multiple***.\n* The matrix below defines the 4 possible classifications according to Flynn:\n\n[image omitted from source notes]\n\n### Single Instruction, Single Data (SISD)\n\n* A serial (non-parallel) computer\n* **Single Instruction:** Only one instruction stream is being acted on by the CPU during any one clock cycle\n* **Single Data:** Only one data stream is being used as input during any one clock cycle\n\nDeterministic execution\n\n* This is the oldest type of computer\n* Examples: older generation mainframes, minicomputers, workstations and single processor/core PCs.\n\n|  |  |\n| --- | --- |\n| [image omitted from source notes] | [image omitted from source notes] |\n\n### Single Instruction, Multiple Data (SIMD)\n\n* A type of parallel computer\n* **Single Instruction:** All processing units execute the same instruction at any given clock cycle\n* **Multiple Data:** Each processing unit can operate on a different data element\n* Best suited for specialized problems characterized by a high degree of regularity, such as graphics/image processing.\n* Synchronous (lockstep) and deterministic execution\n* Two varieties: Processor Arrays and Vector Pipelines\n* Examples:\n  + Processor Arrays: Thinking Machines CM-2, MasPar MP-1 & MP-2, ILLIAC IV\n  + Vector Pipelines: IBM 9000, Cray X-MP, Y-MP & C90, Fujitsu VP, NEC SX-2, Hitachi S820, ETA10\n* Most modern computers, particularly those with graphics processor units (GPUs) employ SIMD instructions and execution units.\n\n|  |  |\n| --- | --- |\n| [image omitted from source notes] | [image omitted from source notes] |\n\n#### Multiple Instruction, Single Data (MISD)\n\n* A type of parallel computer\n* **Multiple Instruction:** Each processing unit operates on the data independently via separate instruction streams.\n* **Single Data:** A single data stream is fed into multiple processing units.\n* Few (if any) actual examples of this class of parallel computer have ever existed.\n* Some conceivable uses might be:\n  + multiple frequency filters operating on a single signal stream\n  + multiple cryptography algorithms attempting to crack a single coded message.\n\n|  |  |\n| --- | --- |\n| [image omitted from source notes] | [image omitted from source notes] |\n\n### Multiple Instruction, Multiple Data (MIMD)\n\n* A type of parallel computer\n* **Multiple Instruction:** Every processor may be executing a different instruction stream\n* **Multiple Data:** Every processor may be working with a different data stream\n* Execution can be synchronous or asynchronous, deterministic or non-deterministic\n* Currently, the most common type of parallel computer - most modern supercomputers fall into this category.\n* Examples: most current supercomputers, networked parallel computer clusters and \"grids\", multi-processor SMP computers, multi-core PCs.\n* **Note** many MIMD architectures also include SIMD execution sub-components\n\n|  |  |\n| --- | --- |\n| [image omitted from source notes] | [image omitted from source notes] |\n\n## Some General Parallel Terminology\n\n* Like everything else, parallel computing has its own \"jargon\". Some of the more commonly used terms associated with parallel computing are listed below.\n* Most of these will be discussed in more detail later.\n\n#### Supercomputing / High Performance Computing (HPC)\n\nUsing the world's fastest and largest computers to solve large problems.\n\n#### Node\n\nA standalone \"computer in a box\". Usually comprised of multiple CPUs/processors/cores, memory, network interfaces, etc. Nodes are networked together to comprise a supercomputer.\n\n#### CPU / Socket / Processor / Core\n\nThis varies, depending upon who you talk to. In the past, a CPU (Central Processing Unit) was a singular execution component for a computer. Then, multiple CPUs were incorporated into a node. Then, individual CPUs were subdivided into multiple \"cores\", each being a unique execution unit. CPUs with multiple cores are sometimes called \"sockets\" - vendor dependent. The result is a node with multiple CPUs, each containing multiple cores.\n\n#### Task\n\nA logically discrete section of computational work. A task is typically a program or program-like set of instructions that is executed by a processor. A parallel program consists of multiple tasks running on multiple processors.\n\n#### Pipelining\n\nBreaking a task into steps performed by different processor units, with inputs streaming through, much like an assembly line; a type of parallel computing.\n\n#### Shared Memory\n\nFrom a strictly hardware point of view, describes a computer architecture where all processors have direct (usually bus based) access to common physical memory. In a programming sense, it describes a model where parallel tasks all have the same \"picture\" of memory and can directly address and access the same logical memory locations regardless of where the physical memory actually exists.\n\n#### Symmetric Multi-Processor (SMP)\n\nShared memory hardware architecture where multiple processors share a single address space and have equal access to all resources.\n\n#### Distributed Memory\n\nIn hardware, refers to network-based memory access for physical memory that is not common. As a programming model, tasks can only logically \"see\" local machine memory and must use communications to access memory on other machines where other tasks are executing.\n\n#### Communications\n\nParallel tasks typically need to exchange data. There are several ways this can be accomplished, such as through a shared memory bus or over a network, however the actual event of data exchange is commonly referred to as communications regardless of the method employed.\n\n#### Synchronization\n\nThe coordination of parallel tasks in real time, very often associated with communications. Often implemented by establishing a synchronization point within an application where a task may not proceed further until another task(s) reaches the same or logically equivalent point.\n\nSynchronization usually involves waiting by at least one task, and can therefore cause a parallel application's wall clock execution time to increase.\n\n#### Granularity\n\nIn parallel computing, granularity is a qualitative measure of the ratio of computation to communication.\n\n* ***Coarse:*** relatively large amounts of computational work are done between communication events\n* ***Fine:*** relatively small amounts of computational work are done between communication events\n\n#### Observed Speedup\n\nObserved speedup of a code which has been parallelized, defined as:\n\nwall-clock time of serial execution\n\nwall-clock time of parallel execution\n\nOne of the simplest and most widely used indicators for a parallel program's performance.\n\n#### Parallel Overhead\n\nThe amount of time required to coordinate parallel tasks, as opposed to doing useful work. Parallel overhead can include factors such as:\n\n* Task start-up time\n* Synchronizations\n* Data communications\n* Software overhead imposed by parallel languages, libraries, operating system, etc.\n* Task termination time\n\n#### Massively Parallel\n\nRefers to the hardware that comprises a given parallel system - having many processing elements. The meaning of \"many\" keeps increasing, but currently, the largest parallel computers are comprised of processing elements numbering in the hundreds of thousands to millions.\n\n#### Embarrassingly Parallel\n\nSolving many similar, but independent tasks simultaneously; little to no need for coordination between the tasks.\n\n#### Scalability\n\nRefers to a parallel system's (hardware and/or software) ability to demonstrate a proportionate increase in parallel speedup with the addition of more resources. Factors that contribute to scalability include:\n\n* Hardware - particularly memory-cpu bandwidths and network communication properties\n* Application algorithm\n* Parallel overhead related\n* Characteristics of your specific application\n\n### Complexity\n\n* In general, parallel applications are much more complex than corresponding serial applications, perhaps an order of magnitude. Not only do you have multiple instruction streams executing at the same time, but you also have data flowing between them.\n* The costs of complexity are measured in programmer time in virtually every aspect of the software development cycle:\n  + Design\n  + Coding\n  + Debugging\n  + Tuning\n  + Maintenance\n* Adhering to \"good\" software development practices is essential when working with parallel applications - especially if somebody besides you will have to work with the software.\n\n### Portability\n\n* Thanks to standardization in several APIs, such as MPI, POSIX threads, and OpenMP, portability issues with parallel programs are not as serious as in years past. However...\n* All of the usual portability issues associated with serial programs apply to parallel programs. For example, if you use vendor \"enhancements\" to Fortran, C or C++, portability will be a problem.\n* Even though standards exist for several APIs, implementations will differ in a number of details, sometimes to the point of requiring code modifications in order to effect portability.\n* Operating systems can play a key role in code portability issues.\n* Hardware architectures are characteristically highly variable and can affect portability.\n\n### Resource Requirements\n\n* The primary intent of parallel programming is to decrease execution wall clock time, however in order to accomplish this, more CPU time is required. For example, a parallel code that runs in 1 hour on 8 processors actually uses 8 hours of CPU time.\n* The amount of memory required can be greater for parallel codes than serial codes, due to the need to replicate data and for overheads associated with parallel support libraries and subsystems.\n* For short running parallel programs, there can actually be a decrease in performance compared to a similar serial implementation. The overhead costs associated with setting up the parallel environment, task creation, communications and task termination can comprise a significant portion of the total execution time for short runs."
    },
    {
      "id": "md-15",
      "source": "combinedPDC.md",
      "title": "Parallel Computer Memory Architectures",
      "body": "## Shared Memory\n\n### General Characteristics\n\n* Shared memory parallel computers vary widely, but generally have in common the ability for all processors to access all memory as global address space.\n* Multiple processors can operate independently but share the same memory resources.\n* Changes in a memory location effected by one processor are visible to all other processors.\n* Historically, shared memory machines have been classified as ***UMA*** and ***NUMA***, based upon memory access times.\n\n### Uniform Memory Access (UMA)\n\n* Most commonly represented today by ***Symmetric Multiprocessor (SMP)*** machines\n* Identical processors\n* Equal access and access times to memory\n* Sometimes called CC-UMA - Cache Coherent UMA. Cache coherent means if one processor updates a location in shared memory, all the other processors know about the update. Cache coherency is accomplished at the hardware level.\n\n[image omitted from source notes]\n\n### Non-Uniform Memory Access (NUMA)\n\n* Often made by physically linking two or more SMPs\n* One SMP can directly access memory of another SMP\n* Not all processors have equal access time to all memories\n* Memory access across link is slower\n* If cache coherency is maintained, then may also be called CC-NUMA - Cache Coherent NUMA\n\n[image omitted from source notes]\n\n### Advantages\n\n* Global address space provides a user-friendly programming perspective to memory\n* Data sharing between tasks is both fast and uniform due to the proximity of memory to CPUs\n\n### Disadvantages\n\n* Primary disadvantage is the lack of scalability between memory and CPUs. Adding more CPUs can geometrically increases traffic on the shared memory-CPU path, and for cache coherent systems, geometrically increase traffic associated with cache/memory management.\n* Programmer responsibility for synchronization constructs that ensure \"correct\" access of global memory.\n\n## Distributed Memory\n\n### General Characteristics\n\n* Like shared memory systems, distributed memory systems vary widely but share a common characteristic. Distributed memory systems require a communication network to connect inter-processor memory.\n* Processors have their own local memory. Memory addresses in one processor do not map to another processor, so there is no concept of global address space across all processors.\n* Because each processor has its own local memory, it operates independently. Changes it makes to its local memory have no effect on the memory of other processors. Hence, the concept of cache coherency does not apply.\n* When a processor needs access to data in another processor, it is usually the task of the programmer to explicitly define how and when data is communicated. Synchronization between tasks is likewise the programmer's responsibility.\n* The network \"fabric\" used for data transfer varies widely, though it can be as simple as Ethernet.\n\n[image omitted from source notes]\n\n### Advantages\n\n* Memory is scalable with the number of processors. Increase the number of processors and the size of memory increases proportionately.\n* Each processor can rapidly access its own memory without interference and without the overhead incurred with trying to maintain global cache coherency.\n* Cost effectiveness: can use commodity, off-the-shelf processors and networking.\n\n### Disadvantages\n\n* The programmer is responsible for many of the details associated with data communication between processors.\n* It may be difficult to map existing data structures, based on global memory, to this memory organization.\n* Non-uniform memory access times - data residing on a remote node takes longer to access than node local data.\n\n## Hybrid Distributed-Shared Memory\n\n### General Characteristics\n\n* The largest and fastest computers in the world today employ both shared and distributed memory architectures.\n\n|  |  |\n| --- | --- |\n| [image omitted from source notes] | [image omitted from source notes] |\n\n* The shared memory component can be a shared memory machine and/or graphics processing units (GPU).\n* The distributed memory component is the networking of multiple shared memory/GPU machines, which know only about their own memory - not the memory on another machine. Therefore, network communications are required to move data from one machine to another.\n* Current trends seem to indicate that this type of memory architecture will continue to prevail and increase at the high end of computing for the foreseeable future.\n\n### Advantages and Disadvantages\n\n* Whatever is common to both shared and distributed memory architectures.\n* Increased scalability is an important advantage\n* Increased programmer complexity is an important disadvantage"
    },
    {
      "id": "md-16",
      "source": "combinedPDC.md",
      "title": "Parallel Programming Models",
      "body": "## Overview\n\n* There are several parallel programming models in common use:\n  + Shared Memory (without threads)\n  + Threads\n  + Distributed Memory / Message Passing\n  + Data Parallel\n  + Hybrid\n  + Single Program Multiple Data (SPMD)\n  + Multiple Program Multiple Data (MPMD)\n* Parallel programming models exist as an abstraction above hardware and memory architectures.\n* Although it might not seem apparent, these models are **NOT** specific to a particular type of machine or memory architecture. In fact, any of these models can (theoretically) be implemented on any underlying hardware. Two examples from the past are discussed below.\n\n#### SHARED memory model on a DISTRIBUTED memory machine\n\nKendall Square Research (KSR) ALLCACHE approach. Machine memory was physically distributed across networked machines, but appeared to the user as a single shared memory global address space. Generically, this approach is referred to as \"virtual shared memory\".\n\n[image omitted from source notes]\n\n##### DISTRIBUTED MEMORY MODEL ON A SHARED MEMORY MACHINE\n\nMessage Passing Interface (MPI) on SGI Origin 2000. The SGI Origin 2000 employed the CC-NUMA type of shared memory architecture, where every task has direct access to global address space spread across all machines. However, the ability to send and receive messages using MPI, as is commonly done over a network of distributed memory machines, was implemented and commonly used.\n\n[image omitted from source notes]\n\n* **Which model to use?** This is often a combination of what is available and personal choice. There is no \"best\" model, although there certainly are better implementations of some models over others.\n* The following sections describe each of the models mentioned above, and also discuss some of their actual implementations.\n\n### Shared Memory Model (without threads)\n\n[image omitted from source notes]\n\n* In this programming model, processes/tasks share a common address space, which they read and write to asynchronously.\n* Various mechanisms such as locks / semaphores are used to control access to the shared memory, resolve contentions and to prevent race conditions and deadlocks.\n* This is perhaps the simplest parallel programming model.\n* An advantage of this model from the programmer's point of view is that the notion of data \"ownership\" is lacking, so there is no need to specify explicitly the communication of data between tasks. All processes see and have equal access to shared memory. Program development can often be simplified.\n* An important disadvantage in terms of performance is that it becomes more difficult to understand and manage ***data locality***:\n  + Keeping data local to the process that works on it conserves memory accesses, cache refreshes and bus traffic that occurs when multiple processes use the same data.\n  + Unfortunately, controlling data locality is hard to understand and may be beyond the control of the average user.\n\nImplementations:\n\n* On stand-alone shared memory machines, native operating systems, compilers and/or hardware provide support for shared memory programming. For example, the POSIX standard provides an API for using shared memory, and UNIX provides shared memory segments (shmget, shmat, shmctl, etc).\n* On distributed memory machines, memory is physically distributed across a network of machines, but made global through specialized hardware and software.\n\n### Threads Model\n\n[image omitted from source notes]\n\n* This programming model is a type of shared memory programming.\n* In the threads model of parallel programming, a single \"heavy weight\" process can have multiple \"light weight\", concurrent execution paths.\n* For example:\n  + The main program **a.out** is scheduled to run by the native operating system. **a.out** loads and acquires all of the necessary system and user resources to run. This is the \"heavy weight\" process.\n  + **a.out** performs some serial work, and then creates a number of tasks (threads) that can be scheduled and run by the operating system concurrently.\n  + Each thread has local data, but also, shares the entire resources of **a.out**. This saves the overhead associated with replicating a program's resources for each thread (\"light weight\"). Each thread also benefits from a global memory view because it shares the memory space of **a.out**.\n  + A thread's work may best be described as a subroutine within the main program. Any thread can execute any subroutine at the same time as other threads.\n  + Threads communicate with each other through global memory (updating address locations). This requires synchronization constructs to ensure that more than one thread is not updating the same global address at any time.\n  + Threads can come and go, but **a.out** remains present to provide the necessary shared resources until the application has completed.\n\nImplementations:\n\n* From a programming perspective, threads implementations commonly comprise:\n  + A library of subroutines that are called from within parallel source code\n  + A set of compiler directives imbedded in either serial or parallel source code\n\nIn both cases, the programmer is responsible for determining the parallelism (although compilers can sometimes help).\n\n* Threaded implementations are not new in computing. Historically, hardware vendors have implemented their own proprietary versions of threads. These implementations differed substantially from each other making it difficult for programmers to develop portable threaded applications.\n* Unrelated standardization efforts have resulted in two very different implementations of threads: ***POSIX Threads*** and ***OpenMP.***\n\n##### POSIX THREADS\n\n* Specified by the IEEE POSIX 1003.1c standard (1995). C Language only.\n* Part of Unix/Linux operating systems\n* Library based\n* Commonly referred to as Pthreads.\n* Very explicit parallelism; requires significant programmer attention to detail.\n\n##### OPENMP\n\n* Industry standard, jointly defined and endorsed by a group of major computer hardware and software vendors, organizations and individuals.\n* Compiler directive based\n* Portable / multi-platform, including Unix and Windows platforms\n* Available in C/C++ and Fortran implementations\n* Can be very easy and simple to use - provides for \"incremental parallelism\". Can begin with serial code.\n* Other threaded implementations are common, but not discussed here:\n  + Microsoft threads\n  + Java, Python threads\n  + CUDA threads for GPUs\n\n#### More Information\n\n* POSIX Threads tutorial: [**computing.llnl.gov/tutorials/pthreads**](https://computing.llnl.gov/tutorials/pthreads/)\n* OpenMP tutorial: [**computing.llnl.gov/tutorials/openMP**](https://computing.llnl.gov/tutorials/openMP/)\n\n### Distributed Memory / Message Passing Model\n\n[image omitted from source notes]\n\n* This model demonstrates the following characteristics:\n  + A set of tasks that use their own local memory during computation. Multiple tasks can reside on the same physical machine and/or across an arbitrary number of machines.\n  + Tasks exchange data through communications by sending and receiving messages.\n  + Data transfer usually requires cooperative operations to be performed by each process. For example, a send operation must have a matching receive operation.\n\nImplementations:\n\n* From a programming perspective, message passing implementations usually comprise a library of subroutines. Calls to these subroutines are imbedded in source code. The programmer is responsible for determining all parallelism.\n* Historically, a variety of message passing libraries have been available since the 1980s. These implementations differed substantially from each other making it difficult for programmers to develop portable applications.\n* In 1992, the MPI Forum was formed with the primary goal of establishing a standard interface for message passing implementations\n* Part 1 of the **Message Passing Interface (MPI)** was released in 1994. Part 2 (MPI-2) was released in 1996 and MPI-3 in 2012. All MPI specifications are available on the web at [**http://www.mpi-forum.org/docs/**.](http://www.mpi-forum.org/docs/)\n* MPI is the \"de facto\" industry standard for message passing, replacing virtually all other message passing implementations used for production work. MPI implementations exist for virtually all popular parallel computing platforms. Not all implementations include everything in MPI-1, MPI-2 or MPI-3.\n\n### Data Parallel Model\n\n[image omitted from source notes]\n\n* May also be referred to as the **Partitioned Global Address Space (PGAS)** model.\n* The data parallel model demonstrates the following characteristics:\n  + Address space is treated globally\n  + Most of the parallel work focuses on performing operations on a data set. The data set is typically organized into a common structure, such as an array or cube.\n  + A set of tasks work collectively on the same data structure, however, each task works on a different partition of the same data structure.\n  + Tasks perform the same operation on their partition of work, for example, \"add 4 to every array element\".\n* On shared memory architectures, all tasks may have access to the data structure through global memory.\n* On distributed memory architectures, the global data structure can be split up logically and/or physically across tasks.\n\nImplementations:\n\n* Currently, there are several relatively popular, and sometimes developmental, parallel programming implementations based on the Data Parallel / PGAS model.\n* **Coarray Fortran:** a small set of extensions to Fortran 95 for SPMD parallel programming. Compiler dependent. More information: [**https://en.wikipedia.org/wiki/Coarray\\_Fortran**](https://en.wikipedia.org/wiki/Coarray_Fortran)\n* **Unified Parallel C (UPC):** an extension to the C programming language for SPMD parallel programming. Compiler dependent. More information: [**https://upc.lbl.gov/**](https://upc.lbl.gov/)\n* **Global Arrays:** provides a shared memory style programming environment in the context of distributed array data structures. Public domain library with C and Fortran77 bindings. More information: [**https://en.wikipedia.org/wiki/Global\\_Arrays**](https://en.wikipedia.org/wiki/Global_Arrays)\n* **X10: a PGAS** based parallel programming language being developed by IBM at the Thomas J. Watson Research Center. More information: [**http://x10-lang.org/**](http://x10-lang.org/)\n* **Chapel:** an open source parallel programming language project being led by Cray. More information: [**http://chapel.cray.com/**](http://chapel.cray.com/)\n\n### Hybrid Model\n\n[image omitted from source notes]\n\n[image omitted from source notes]\n\n* A hybrid model combines more than one of the previously described programming models.\n* Currently, a common example of a hybrid model is the combination of the message passing model (MPI) with the threads model (OpenMP).\n  + Threads perform computationally intensive kernels using local, on-node data\n  + Communications between processes on different nodes occurs over the network using MPI\n* This hybrid model lends itself well to the most popular (currently) hardware environment of clustered multi/many-core machines.\n* Another similar and increasingly popular example of a hybrid model is using MPI with CPU-GPU (Graphics Processing Unit) programming.\n  + MPI tasks run on CPUs using local memory and communicating with each other over a network.\n  + Computationally intensive kernels are off-loaded to GPUs on-node.\n  + Data exchange between node-local memory and GPUs uses CUDA (or something equivalent).\n* Other hybrid models are common:\n  + MPI with Pthreads\n  + MPI with non-GPU accelerators\n  + ...\n\n### SPMD and MPMD\n\n#### Single Program Multiple Data (SPMD)\n\n[image omitted from source notes]\n\n* SPMD is actually a \"high level\" programming model that can be built upon any combination of the previously mentioned parallel programming models.\n* SINGLE PROGRAM: All tasks execute their copy of the same program simultaneously. This program can be threads, message passing, data parallel or hybrid.\n* MULTIPLE DATA: All tasks may use different data\n* SPMD programs usually have the necessary logic programmed into them to allow different tasks to branch or conditionally execute only those parts of the program they are designed to execute. That is, tasks do not necessarily have to execute the entire program - perhaps only a portion of it.\n* The SPMD model, using message passing or hybrid programming, is probably the most commonly used parallel programming model for multi-node clusters.\n\n#### Multiple Program Multiple Data (MPMD)\n\n[image omitted from source notes]\n\n* Like SPMD, MPMD is actually a \"high level\" programming model that can be built upon any combination of the previously mentioned parallel programming models.\n* MULTIPLE PROGRAM: Tasks may execute different programs simultaneously. The programs can be threads, message passing, data parallel or hybrid.\n* MULTIPLE DATA: All tasks may use different data\n* MPMD applications are not as common as SPMD applications, but may be better suited for certain types of problems, particularly those that lend themselves better to functional decomposition than domain decomposition (discussed later under Partitioning).\n\nDesigning Parallel Programs\n\n### Automatic vs. Manual Parallelization\n\n* Designing and developing parallel programs has characteristically been a very manual process. The programmer is typically responsible for both identifying and actually implementing parallelism.\n* Very often, manually developing parallel codes is a time consuming, complex, error- prone and iterative process.\n* For a number of years now, various tools have been available to assist the programmer with converting serial programs into parallel programs. The most common type of tool used to automatically parallelize a serial program is a parallelizing compiler or pre-processor.\n* A parallelizing compiler generally works in two different ways:\n\n##### FULLY AUTOMATIC\n\n* The compiler analyzes the source code and identifies opportunities for parallelism.\n* The analysis includes identifying inhibitors to parallelism and possibly a cost weighting on whether or not the parallelism would actually improve performance.\n* Loops (do, for) are the most frequent target for automatic parallelization.\n\n##### PROGRAMMER DIRECTED\n\n* Using \"compiler directives\" or possibly compiler flags, the programmer explicitly tells the compiler how to parallelize the code.\n* May be able to be used in conjunction with some degree of automatic parallelization also.\n* The most common compiler generated parallelization is done using on-node shared memory and threads (such as OpenMP).\n* If you are beginning with an existing serial code and have time or budget constraints, then automatic parallelization may be the answer. However, there are several important caveats that apply to automatic parallelization:\n  + Wrong results may be produced\n  + Performance may actually degrade\n  + Much less flexible than manual parallelization\n  + Limited to a subset (mostly loops) of code\n  + May actually not parallelize code if the compiler analysis suggests there are inhibitors or the code is too complex\n* The remainder of this section applies to the manual method of developing parallel codes.\n\n### Communications\n\n#### Who Needs Communications?\n\n* The need for communications between tasks depends upon your problem:\n\n##### YOU DON'T NEED COMMUNICATIONS\n\n* Some types of problems can be decomposed and executed in parallel with virtually no need for tasks to share data. These types of problems are often called ***embarrassingly parallel*** - little or no communications are required.\n* For example, imagine an image processing operation where every pixel in a black and white image needs to have its color reversed. The image data can easily be distributed to multiple tasks that then act independently of each other to do their portion of the work.\n\n##### YOU DO NEED COMMUNICATIONS\n\n* Most parallel applications are not quite so simple, and do require tasks to share data with each other.\n* For example, a 2-D heat diffusion problem requires a task to know the temperatures calculated by the tasks that have neighboring data. Changes to neighboring data has a direct effect on that task's data.\n\n#### Factors to Consider\n\nThere are a number of important factors to consider when designing your program's inter-task communications:\n\n##### COMMUNICATION OVERHEAD\n\n* Inter-task communication virtually always implies overhead.\n* Machine cycles and resources that could be used for computation are instead used to package and transmit data.\n* Communications frequently require some type of synchronization between tasks, which can result in tasks spending time \"waiting\" instead of doing work.\n* Competing communication traffic can saturate the available network bandwidth, further aggravating performance problems.\n\n##### LATENCY VS. BANDWIDTH\n\n* ***Latency*** is the time it takes to send a minimal (0 byte) message from point A to point\n\nB. Commonly expressed as microseconds.\n\n* ***Bandwidth*** is the amount of data that can be communicated per unit of time. Commonly expressed as megabytes/sec or gigabytes/sec.\n* Sending many small messages can cause latency to dominate communication overheads. Often it is more efficient to package small messages into a larger message, thus increasing the effective communications bandwidth.\n\n##### VISIBILITY OF COMMUNICATIONS\n\n* With the Message Passing Model, communications are explicit and generally quite visible and under the control of the programmer.\n* With the Data Parallel Model, communications often occur transparently to the programmer, particularly on distributed memory architectures. The programmer may not even be able to know exactly how inter-task communications are being accomplished.\n\n##### SYNCHRONOUS VS. ASYNCHRONOUS COMMUNICATIONS\n\n* Synchronous communications require some type of \"handshaking\" between tasks that are sharing data. This can be explicitly structured in code by the programmer, or it may happen at a lower level unknown to the programmer.\n* Synchronous communications are often referred to as ***blocking*** communications since other work must wait until the communications have completed.\n* Asynchronous communications allow tasks to transfer data independently from one another. For example, task 1 can prepare and send a message to task 2, and then immediately begin doing other work. When task 2 actually receives the data doesn't matter.\n* Asynchronous communications are often referred to as ***non-blocking*** communications since other work can be done while the communications are taking place.\n* Interleaving computation with communication is the single greatest benefit for using asynchronous communications.\n\n##### SCOPE OF COMMUNICATIONS\n\n* Knowing which tasks must communicate with each other is critical during the design stage of a parallel code. Both of the two scopings described below can be implemented synchronously or asynchronously.\n* ***Point-to-point*** - involves two tasks with one task acting as the sender/producer of\n\ndata, and the other acting as the receiver/consumer.\n\n* + ***Collective*** - involves data sharing between more than two tasks, which are often specified as being members in a common group, or collective. Efficiency of communications\n* Oftentimes, the programmer has choices that can affect communications performance. Only a few are mentioned here.\n* Which implementation for a given model should be used? Using the Message Passing Model as an example, one MPI implementation may be faster on a given hardware platform than another.\n* What type of communication operations should be used? As mentioned previously, asynchronous communication operations can improve overall program performance.\n* Network fabric—different platforms use different networks. Some networks perform better than others. Choosing a platform with a faster network may be an option.\n\n##### OVERHEAD AND COMPLEXITY\n\n* Finally, realize that this is only a partial list of things to consider!\n\n### Synchronization\n\n* Managing the sequence of work and the tasks performing it is a critical design consideration for most parallel programs.\n* Can be a significant factor in program performance (or lack of it)\n* Often requires \"serialization\" of segments of the program.\n\n#### Types of Synchronization\n\n##### BARRIER\n\n* Usually implies that all tasks are involved\n* Each task performs its work until it reaches the barrier. It then stops, or \"blocks\".\n* When the last task reaches the barrier, all tasks are synchronized.\n* What happens from here varies. Often, a serial section of work must be done. In other cases, the tasks are automatically released to continue their work.\n\n##### LOCK / SEMAPHORE\n\n* Can involve any number of tasks\n* Typically used to serialize (protect) access to global data or a section of code. Only one task at a time may use (own) the lock / semaphore / flag.\n* The first task to acquire the lock \"sets\" it. This task can then safely (serially) access the protected data or code.\n* Other tasks can attempt to acquire the lock but must wait until the task that owns the lock releases it.\n* Can be blocking or non-blocking.\n\n##### SYNCHRONOUS COMMUNICATION OPERATIONS\n\n* Involves only those tasks executing a communication operation.\n* When a task performs a communication operation, some form of coordination is required with the other task(s) participating in the communication. For example, before a task can perform a send operation, it must first receive an acknowledgment from the receiving task that it is OK to send.\n* Discussed previously in the Communications section.\n\n### Data Dependencies\n\n#### Definition\n\n* A ***dependence*** exists between program statements when the order of statement execution affects the results of the program.\n* A ***data dependence*** results from multiple use of the same location(s) in storage by different tasks.\n* Dependencies are important to parallel programming because they are one of the primary inhibitors to parallelism.\n\n#### How to Handle Data Dependencies\n\n* Distributed memory architectures - communicate required data at synchronization points.\n* Shared memory architectures -synchronize read/write operations between tasks.\n\n### Load Balancing\n\n* Load balancing refers to the practice of distributing approximately equal amounts of work among tasks so that all tasks are kept busy all of the time. It can be considered a minimization of task idle time.\n* Load balancing is important to parallel programs for performance reasons. For example, if all tasks are subject to a barrier synchronization point, the slowest task will determine the overall performance.\n\n---"
    },
    {
      "id": "md-17",
      "source": "combinedPDC.md",
      "title": "Shared memory vs. message passing models_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:54 AM\n\nShared memory vs. message passing models: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nShared memory vs. message passing\n\nmodels\n\nThe Shared Memory and Message Passing Models of\nInterprocess Communication\n\nShared memory system is the fundamental model of inter process communication. In a shared\n\nmemory system, in the address space region the cooperating communicate with each other by\nestablishing the shared memory region.\n\nShared memory concept works on fastest inter process communication.\n\nIf the process wants to initiate the communication and it has some data to share, then establish the\nshared memory region in its address space.\n\nAfter that, another process wants to communicate and tries to read the shared data, and must attach\nitself to the initiating process’s shared address space.\n\nMessage Passing provides a mechanism to allow processes to communicate and to synchronize\n\ntheir actions without sharing the same address space.\n\nFor example − Chat program on the World Wide Web.\n\nMessage passing provides two operations which are as follows −\n\nSend message\n\nReceive message\n\nMessages sent by a process can be either fixed or variable size.\n\nFor fixed size messages the system level implementation is straight forward. It makes the task of\nprogramming more difficult.\n\nThe variable sized messages require a more system level implementation but the programming task\n\nbecomes simpler.\n\nIf process P1 and P2 want to communicate they need to send a message to and receive a message\nfrom each other that means here a communication link exists between them.\n\nDifferences\n\nhttps://tip.instructure.com/courses/77180/pages/shared-memory-vs-message-passing-models?module_item_id=8964217\n\n1/4\n\n\f6/15/26, 9:54 AM\n\nShared memory vs. message passing models: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nThe major differences between shared memory and message passing model −\n\nShared Memory\n\nMessage Passing\n\nIt is one of the region for data communication\n\nIt is used for communication between single\nprocessor and multiprocessor systems where the\nprocesses that are to be communicated present on\nthe same machine and they are sharing common\naddress space.\n\nThe shared memory code that has to be read or\nwrite the data that should be written explicitly by the\napplication programmer.\n\nIt is going to provide a maximum speed of\ncomputations because the communication is done\nwith the help of shared memory so system calls are\nused to establish the shared memory.\n\nIn shared memory make sure that the processes\nare not writing to the same location simultaneously.\n\nIt follows a faster communication strategy when\ncompared to message passing technique.\n\nMainly the message passing is used for\ncommunication.\n\nIt is used in distributed environments where the\ncommunicating processes are present on\nremote machines which are connected with the\nhelp of a network.\n\nHere no code is required because the message\npassing facility provides a mechanism for\ncommunication and synchronization of actions\nthat are performed by the communicating\nprocesses.\n\nMessage passing is a time consuming process\nbecause it is implemented through kernel\n(system calls).\n\nMessage passing is useful for sharing small\namounts of data so that conflicts need not\noccur.\n\nIn message passing the communication is\nslower when compared to shared memory\ntechnique.\n\nGiven below is the structure of shared memory\nsystem −\n\nGiven below is the structure of message\npassing system −\n\nhttps://tip.instructure.com/courses/77180/pages/shared-memory-vs-message-passing-models?module_item_id=8964217\n\n2/4\n\n\f6/15/26, 9:54 AM\n\nShared memory vs. message passing models: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nShared Memory\n\nMessage Passing\n\nThe Shared Memory Model\n\nIn this model stored information in a shared region of memory is processed, possibly under the\ncontrol of a supervisor process.\n\nAn example might be a single node with\n\nmultiple cores\nshare a global memory space\ncores can efficiently exchange/share data\n\nThe Message Passing Model\n\nIn this model, data is shared by sending and receiving messages between co-operating processes,\n\nusing system calls . Message Passing is particularly useful in a distributed environment where the\ncommunicating processes may reside on different, network connected, systems. Message passing\n\narchitectures are usually easier to implement but are also usually slower than shared memory\narchitectures.\n\nAn example might be a networked cluster of nodes\n\nnodes are networked together.\n\nhttps://tip.instructure.com/courses/77180/pages/shared-memory-vs-message-passing-models?module_item_id=8964217\n\n3/4\n\n\f6/15/26, 9:54 AM\n\nShared memory vs. message passing models: CCS 309-CS33S1 - Parallel and Distributed Computing\n\neach with multiple cores.\neach node using its own local memory. /li>\n\ncommunicate between nodes and cores via messages.\n\nA message might contain:\n\n1. Header of message that identifies the sending and receiving processes\n2. A block of data\n\n3. Process control information\n\nTypically Inter-Process Communication is built on two operations, send() and receive() involving\ncommunication links created between co-operating processes.\n\nhttps://tip.instructure.com/courses/77180/pages/shared-memory-vs-message-passing-models?module_item_id=8964217\n\n4/4\n\n---"
    },
    {
      "id": "md-18",
      "source": "combinedPDC.md",
      "title": "Shared-memory Programming_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:55 AM\n\nShared-memory Programming: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nShared-memory Programming\n\nIntroduction :\n\nParallel programming models are frameworks or paradigms used to enable the\n\nexecution of processes simultaneously on multiple computing resources. These\n\nmodels are essential in high-performance computing (HPC), enabling more\n\nefficient processing by dividing tasks into smaller subtasks that can be\n\nexecuted concurrently.\n\nParallel Programming Models:\n\n1) Shared-memory programming is a parallel programming paradigm that involves\n\nmultiple threads or processes running on a multi-core processor or a multi-processor\n\nsystem, where all threads have access to a shared memory space. In this\n\nprogramming model, threads can communicate and synchronize with each other by\n\nreading and writing data to the shared memory, which allows for easy exchange of\n\ninformation between threads.\n\nKey concepts and characteristics of shared-memory programming:\n\n1. Shared Memory: All threads in the shared-memory programming model can\n\naccess the same memory addresses. This shared memory is typically represented\n\nas a large array or data structure that all threads can read from and write to. Access\n\nto shared memory is generally faster than communication between distributed\n\nnodes in other parallel programming models.\n\n2. Communication: Threads communicate with each other by reading and writing to\n\nshared variables in memory. Changes made to a shared variable by one thread can\n\nbe immediately visible to other threads that access the same variable, allowing for\n\nsimple communication and data sharing.\n\n3. Synchronization: Since threads share the same memory space, it is essential to\n\nsynchronize their access to shared variables to avoid race conditions and data\n\nhttps://tip.instructure.com/courses/77180/pages/shared-memory-programming?module_item_id=8964247\n\n1/3\n\n\f6/15/26, 9:55 AM\n\nShared-memory Programming: CCS 309-CS33S1 - Parallel and Distributed Computing\n\ninconsistencies. Various synchronization mechanisms, such as locks, semaphores,\n\nand barriers, are used to coordinate the activities of threads and prevent conflicting\n\nupdates to shared data.\n\n4. Multithreading vs. Multiprocessing: Shared-memory programming can be\n\nimplemented using either multithreading or multiprocessing. In multithreading,\n\nmultiple threads are created within a single process, while multiprocessing involves\n\nrunning multiple independent processes that share the same memory space. Both\n\napproaches have their advantages and trade-offs.\n\n5. Programming Models: Shared-memory programming can be implemented using\n\ndifferent programming models, including thread-based programming with languages\n\nlike C, C++, Java, and Python (using threading libraries), or using parallel\n\nprocessing frameworks like OpenMP or Intel's Threading Building Blocks (TBB) for\n\nmulti-core systems.\n\nAdvantages of Shared-memory Programming:\n\nSimplified Communication: Shared-memory programming simplifies\n\ncommunication between threads since they can directly read and write to shared\n\ndata structures.\n\nResource Utilization: It efficiently utilizes the resources of multi-core processors,\n\nmaking it suitable for tasks with data-level parallelism.\n\nFamiliar Programming Paradigm: Shared-memory programming is often more\n\nintuitive for programmers familiar with sequential programming, as they only need\n\nto consider concurrency and synchronization.\n\nChallenges of Shared-memory Programming:\n\nSynchronization Overhead: Proper synchronization is critical to avoid race\n\nconditions and data corruption, but excessive synchronization can introduce\n\noverhead and potentially reduce performance gains.\n\nScalability: As the number of threads increases, shared-memory programming may\n\nface scalability challenges due to increased contention for shared resources.\n\nhttps://tip.instructure.com/courses/77180/pages/shared-memory-programming?module_item_id=8964247\n\n2/3\n\n\f6/15/26, 9:55 AM\n\nShared-memory Programming: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nData Inconsistency: Concurrent updates to shared data can lead to data\n\ninconsistencies if not managed properly.\n\nDifficulty in Debugging: Shared-memory programming can be prone to hard-to-\n\ndetect bugs, such as race conditions, which can make debugging more challenging.\n\nhttps://tip.instructure.com/courses/77180/pages/shared-memory-programming?module_item_id=8964247\n\n3/3\n\n---"
    },
    {
      "id": "md-19",
      "source": "combinedPDC.md",
      "title": "Synchronization and Communication Primitives_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:55 AM\n\nSynchronization and Communication Primitives: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nSynchronization and Communication\n\nPrimitives\n\nSynchronization and communication primitives are fundamental tools in concurrent programming that\n\nenable multiple threads or processes to safely and efficiently share resources and interact with each\n\nother. Synchronization ensures that concurrent activities are coordinated to prevent conflicts and\n\nmaintain data consistency, while communication facilitates the exchange of information between\n\nthem.\n\nSynchronization Primitives:\n\nLocks (Mutexes):\n\nLocks provide exclusive access to a shared resource. Only one thread can hold a lock at a time,\n\npreventing other threads from accessing the resource until the lock is released.\nSemaphores:\n\nSemaphores control access to a limited number of resources. They maintain a counter that\nindicates the number of available resources. Threads can wait for the counter to increment before\nacquiring a resource, and they decrement the counter after using the resource.\n\nCondition Variables:\nCondition variables are used in conjunction with locks. They allow threads to wait for a specific\n\ncondition to be true, and they can be signaled by other threads to indicate that the condition has\nchanged.\n\nMonitors:\nMonitors provide a higher-level abstraction for synchronization. They encapsulate shared data\n\nand the procedures that operate on it, allowing for controlled access to the data and the\nprocedures, according to a post on LinkedIn\n\n (https://www.linkedin.com/advice/0/what-best-\n\npractices-using-synchronization-primitives) .\nEvent Wait Handles:\n\nEvent wait handles, such as AutoResetEvent and ManualResetEvent, are used for signaling\nbetween threads. A thread can wait on an event, and another thread can signal the event to notify\nit that a certain condition has been met.\n\nCommunication Primitives:\n\nChannels:\nChannels are used for passing messages between threads or processes. They can be used to\n\nsend data, request service, or signal events.\nMessage Queues:\nMessage queues allow threads or processes to send messages asynchronously, ensuring that\nmessages are delivered in the correct order.\n\nShared Memory:\n\nhttps://tip.instructure.com/courses/77180/pages/synchronization-and-communication-primitives?module_item_id=8964238\n\n1/2\n\n\f6/15/26, 9:55 AM\n\nSynchronization and Communication Primitives: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nShared memory allows threads or processes to directly access and modify the same memory\n\nlocation, enabling efficient data sharing.\n\nInput/Output Primitives:\n\nInput and output primitives (e.g., send, receive) are used for communication between processes\n\nor threads within a system.\n\nRemote Procedure Calls (RPC):\n\nRPC allows threads or processes to execute procedures on another machine, enabling\n\ndistributed communication and execution.\n\nhttps://tip.instructure.com/courses/77180/pages/synchronization-and-communication-primitives?module_item_id=8964238\n\n2/2\n\n---"
    },
    {
      "id": "md-20",
      "source": "combinedPDC.md",
      "title": "Task Parallelism_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:54 AM\n\nTask Parallelism: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nTask Parallelism\n\nWhat is Task Parallelism?\n\nTask Parallelism is a parallel computing paradigm where multiple independent tasks\n\nor operations are executed simultaneously by dividing them among multiple\n\nprocessing units or threads. Unlike data parallelism, which focuses on processing\n\ndifferent portions of a dataset simultaneously, task parallelism involves executing\n\ndistinct tasks concurrently to exploit parallelism in a program.\n\nKey Characteristics of Task Parallelism:\n\n1. Independent Tasks: In task parallelism, the tasks are independent and can be\n\nexecuted separately from each other. Each task performs a specific operation or\n\ncomputation, and there is no inherent dependency between the tasks.\n\n2. Dynamic Load Balancing: Task parallelism often requires dynamic load balancing\n\nto ensure that each processing unit has sufficient work to keep it busy. Load\n\nbalancing may involve distributing tasks dynamically based on their complexity or\n\nexecution time.\n\n3. Synchronization: Task parallelism may require synchronization between tasks in\n\nsome cases. For example, if one task depends on the results of another task,\n\nsynchronization mechanisms need to be employed to coordinate their execution.\n\n4. Scalability: Task parallelism can scale well for applications with a high number of\n\nindependent tasks. As the number of tasks increases, the workload can be evenly\n\ndistributed among processing units, leveraging the available resources effectively.\n\nTask parallelism is commonly used in various types of applications, including:\n\n1. Task-Based Parallelism: Many parallel programming frameworks, such as Intel's\n\nThreading Building Blocks (TBB) and C++17's Parallelism TS, support task-based\n\nparallelism. These frameworks allow developers to express parallelism at a higher\n\nhttps://tip.instructure.com/courses/77180/pages/task-parallelism?module_item_id=8964257\n\n1/2\n\n\f6/15/26, 9:54 AM\n\nTask Parallelism: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nlevel by defining tasks and their dependencies, and the framework handles the\n\ndetails of task scheduling and load balancing.\n\n2. Parallel Loops: Task parallelism can be applied to parallelize loop iterations, where\n\neach iteration represents an independent task. This approach is suitable for\n\napplications where loop iterations can be executed concurrently.\n\n3. Parallel Recursive Algorithms: Task parallelism is useful for recursive algorithms\n\nwhere each recursive call can be considered an independent task that can be\n\nexecuted in parallel.\n\n4. Dynamic Workloads: In applications where the workload is dynamic and not\n\nknown in advance, task parallelism can be more flexible in adapting to changing\n\ncomputational demands.\n\nhttps://tip.instructure.com/courses/77180/pages/task-parallelism?module_item_id=8964257\n\n2/2\n\n---"
    },
    {
      "id": "md-21",
      "source": "combinedPDC.md",
      "title": "Understanding Processes, Threads, Parallelism, and Concurrency_ CCS 309-CS33S1 - Parallel and Distributed Computing.pdf",
      "body": "6/15/26, 9:55 AM\n\nUnderstanding Processes, Threads, Parallelism, and Concurrency: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nUnderstanding Processes, Threads,\n\nParallelism, and Concurrency\n\nIn modern computing, understanding the concepts of processes, threads, parallelism, and\n\nconcurrency is crucial for optimizing performance and writing efficient code. Let’s dive into these\n\nconcepts, starting with the basics and gradually moving towards a deeper understanding.\n\nProcesses\n\nA process is an instance of a program that is running on a computer. It is an independent entity, with\n\nits own memory space, code, data, and system resources. When you open a program like a web\nbrowser, an operating system (OS) creates a process for it.\n\nEach process operates in its own memory space, meaning that one process cannot directly access\n\nthe memory of another process. This isolation ensures security and stability, but it also means that\ninter-process communication (IPC) is necessary when processes need to share data or coordinate\nwith each other.\n\nKey Characteristics:\n\nIndependent execution.\nOwn memory space.\nHigh overhead for context switching between processes.\nCommunicate via IPC mechanisms like pipes, sockets, or shared memory.\n\nhttps://tip.instructure.com/courses/77180/pages/understanding-processes-threads-parallelism-and-concurrency?module_item_id=8964239\n\n1/3\n\n\f6/15/26, 9:55 AM\n\nUnderstanding Processes, Threads, Parallelism, and Concurrency: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nThreads\n\nA thread is the smallest unit of execution within a process. Threads within the same process share\n\nthe same memory space, which allows them to easily communicate and share data. However, this\n\nshared memory space also means that threads need to be carefully synchronized to avoid conflicts\n\nand ensure data integrity.\n\nThreads are lighter than processes, and creating a new thread within a process is more efficient than\n\ncreating a new process. Threads are commonly used to perform tasks like handling user inputs,\n\nperforming background computations, or managing I/O operations simultaneously.\n\nKey Characteristics:\n\nShare the same memory space within a process.\n\nLower overhead compared to processes.\n\nRequire synchronization mechanisms like mutexes and semaphores.\nFaster context switching than processes.\n\nConcurrency vs. Parallelism\n\nThe terms concurrency and parallelism are often used interchangeably, but they have distinct\nmeanings.\n\nConcurrency refers to the ability of a system to manage multiple tasks at the same time. These\ntasks may not necessarily run simultaneously; instead, the system switches between tasks to give\nthe illusion of simultaneous execution. Concurrency is about dealing with lots of things at once.\n\nParallelism, on the other hand, refers to the actual simultaneous execution of tasks. This requires\nmultiple processors or cores, where different tasks are executed at the exact same time. Parallelism\nis about doing lots of things at once.\n\nConcurrency in Practice\n\nImagine you are cooking a meal. You might chop vegetables while waiting for water to boil. This is\nconcurrency—you are switching between tasks based on what can be done at the moment.\n\nIn programming, concurrency is often managed using techniques like multitasking, non-blocking I/O,\nand event loops. Languages like Go provide built-in support for concurrency with goroutines, while\nlanguages like Python use constructs like asyncio.\n\nParallelism in Practice\n\nParallelism would be like having a team of cooks, each handling a different part of the meal at the\nsame time. This requires coordination and resources, but it allows you to complete the meal faster.\n\nhttps://tip.instructure.com/courses/77180/pages/understanding-processes-threads-parallelism-and-concurrency?module_item_id=8964239\n\n2/3\n\n\f6/15/26, 9:55 AM\n\nUnderstanding Processes, Threads, Parallelism, and Concurrency: CCS 309-CS33S1 - Parallel and Distributed Computing\n\nIn programming, parallelism can be achieved using multi-threading, multi-processing, or distributed\n\ncomputing. Languages like C++ and Java provide libraries and frameworks for parallel processing,\n\nwhile tools like Apache Spark enable parallelism on large data sets across distributed systems.\n\nDeep Dive: Synchronization and Coordination\n\nWhen dealing with threads and concurrency, synchronization is crucial. Since threads share the\n\nsame memory space, improper handling can lead to race conditions, where the outcome depends on\n\nthe sequence of thread execution.\n\nMutexes, semaphores, and locks are common synchronization tools that help manage access to\n\nshared resources. These mechanisms ensure that only one thread can access a resource at a time,\n\npreventing data corruption and inconsistencies.\n\nDeadlocks and livelocks are potential pitfalls in concurrent programming. A deadlock occurs when\n\ntwo or more threads are blocked forever, waiting for each other to release resources. A livelock\nhappens when threads are not blocked but are unable to make progress because they keep reacting\nto each other in a way that prevents completion of tasks.\n\nPractical Applications\n\nWeb Servers: Handle multiple client requests concurrently using threads or asynchronous I/O.\nData Processing: Use parallelism to process large datasets across multiple cores or machines.\nGaming: Leverage concurrency to handle game logic, rendering, and user input simultaneously.\n\nConclusion\n\nUnderstanding processes, threads, parallelism, and concurrency is essential for writing efficient,\nscalable, and high-performance applications. Processes offer isolation and stability, while threads\nprovide lightweight parallelism within a process. Concurrency allows you to manage multiple tasks\neffectively, while parallelism enables you to execute tasks simultaneously. Mastering these concepts\nwill enable you to tackle complex problems and optimize your code for modern multi-core processors.\n\nhttps://tip.instructure.com/courses/77180/pages/understanding-processes-threads-parallelism-and-concurrency?module_item_id=8964239\n\n3/3\n\n---"
    },
    {
      "id": "md-22",
      "source": "combinedPDC.md",
      "title": "What are distributed systems.docx",
      "body": "**What are distributed systems?**\n\nDistributed systems generally consist of multiple interconnected devices or computers that work together to perform a task that is beyond the capacity of a single system. These systems work by collaborating, sharing resources and coordinating processes to handle complex workloads. (Distributed systems are the entire basis of the internet, after all.) Distributed systems are essential in situations when the workload is subject to change, such as:\n\n* E-commerce traffic on Cyber Monday\n* A sudden wave of web traffic in response to news about your organization\n\nHistorically, distributed computing was expensive, complex to configure, and difficult to manage. Thanks to SaaS, Paas, and Iaas solutions, however, distributed computing has become more streamlined and affordable for businesses of all stripes and sizes.\n\nToday, all types of computing jobs — from database management to video games — use distributed computing. In fact, many types of software, such as cryptocurrency systems, scientific simulations, blockchain technologies and AI platforms, wouldn’t be possible at all without these platforms.\n\n**Features of distributed systems**\n\nBecause they draw on the capabilities of other computing devices and processes, distributed systems can offer features that would be difficult or impossible to develop on a single system.\n\nThis includes things like performing an off-site server and application backup — if the master catalog doesn’t see the segment bits it needs for a restore, it can ask the other off-site node or nodes to send the segments. Virtually everything you do now with a computing device takes advantage of the power of distributed systems, whether that’s sending an email, playing a game or reading this article on the web.\n\n**Examples of distributed systems**\n\nHere are some very common examples of distributed systems:\n\n* Telecommunications networks that support mobile and internet networks\n* Graphical and video-rendering systems\n* Scientific computing, such as protein folding and genetic research\n* Airline and hotel reservation systems\n* Multiuser video conferencing systems\n* Cryptocurrency processing systems (e.g. Bitcoin)\n* Peer-to-peer file-sharing systems\n* Distributed community computing systems\n* Multiplayer video games\n* Global, distributed retailers and supply chain management\n\n**How distributed systems work**\n\nA distributed system begins with a task. Let’s pretend you need to render a video to create a finished product.\n\nThe application (really, the distributed applications) managing this task — like a video editor on a client computer — splits the job into pieces. In this simple example, the algorithm gives one frame of the video to each of a dozen different computers (or nodes) to complete the rendering. Once the frame is complete, the managing application gives the node a new frame to work on. This process continues until the video is finished and all the pieces are put back together.\n\nA system like this doesn’t have to stop at just 12 nodes: the job may be distributed among hundreds or thousands of nodes, turning a task that might have taken days for a single computer to complete into one that is finished in a matter of minutes.\n\n[image omitted from source notes]\n\nWhen thinking about the challenges of a distributed computing platform, the trick is to break it down into a series of interconnected patterns. Simplifying the system into smaller, more manageable and more easily understood components helps abstract a complicated architecture. Patterns are commonly used to describe distributed systems, such as:\n\n* Command and query responsibility segregation (CQRS)\n* Two-phase commit (2PC)\n\nDifferent combinations of patterns are used to design distributed systems, and each approach has unique benefits and drawbacks.\n\n**Types of distributed systems**\n\nThere are many models and architectures of distributed systems in use today.\n\n* **Client-server systems**, the most traditional and simple type of distributed system, involve a multitude of networked computers that interact with a central server for data storage, data processing, or other common goal.\n* **Peer-to-peer networks** distribute workloads among hundreds or thousands of computers all running the same software.\n* **Cell phone networks** are an advanced distributed system, sharing workloads among handsets, switching systems and internet-based devices.\n\nAt this point, you might realize this: The most common forms of distributed systems today operate over the internet, handing off workloads to dozens of cloud-based virtual server instances that are created as needed, then terminated when the task is complete.\n\n**Key characteristics of a distributed system**\n\nSo now that we “get” what distributed systems are, we can start to assign key features to them. Here’s what good distributed systems have in common:\n\n* **Scalability.** The ability to grow as the size of the workload increases is an essential feature of distributed systems, accomplished by adding additional processing units or nodes to the network as needed.\n* **Concurrency.** Distributed system components run simultaneously. They’re also characterized by the lack of a “global clock,” when tasks occur out of sequence and at different rates.\n* **Availability** **and** **fault tolerance**. If one node fails, the remaining nodes can continue to operate without disrupting the overall computation.\n* **Heterogeneity.** In most distributed systems, the nodes and components are often asynchronous, with different hardware, middleware, software and operating systems. This allows the distributed systems to be extended with the addition of new components.\n* **Replication.** Distributed systems enable shared information and messaging, ensuring consistency between redundant resources, such as software or hardware components, thus improving fault tolerance, reliability, and accessibility.\n* **Transparency.** The end user sees a distributed system as a single computational unit (a single app) rather than as its underlying parts, allowing users to interact with a single logical device rather than being concerned with the system’s architecture.\n\n**Benefits, challenges & risks of distributed systems**\n\nBefore moving on further, let's discuss the advantages, risks and challenges of distributed systems.\n\n**Benefits of distributed systems**\n\nDistributed systems offer a number of advantages over monolithic, or single, systems:\n\n* **Scalability & flexibility.** It is easier to add computing power as the need for services grows. In most cases today, you can spin up servers to a distributed system on the fly, increasing performance and further reducing time to completion.\n* **Fault tolerance.** Distributed systems reduce the risks involved with having a single point of failure, bolstering reliability and fault tolerance.\n* **Reliability.** A well-designed distributed system can withstand failures in one or more of its nodes without severely impacting performance. In a monolithic system, the entire application goes down if the server goes down.\n* **Speed.** Heavy traffic can bog down single servers when traffic gets heavy, impacting performance for everyone. The scalability of distributed databases and other distributed systems makes them easier to maintain and also sustain high-performance levels.\n* **Geo-distribution.** Distributed content delivery is both intuitive for any internet user, and vital for global organizations.\n\n[image omitted from source notes]\n\n**Challenges of distributed systems**\n\nDistributed systems are considerably more complex than monolithic computing environments, and raise a number of challenges around design, operations and maintenance. These include:\n\n* **More opportunities for failure.** The more systems added to a computing environment, the more opportunity there is for failure. If a system is not carefully designed and a single node crashes, the entire system can go down. While distributed systems are designed to be fault tolerant, that fault tolerance is neither automatic nor foolproof.\n* **Synchronization process challenges.** Distributed systems work without a global clock, requiring careful programming to ensure that processes are properly synchronized to avoid transmission delays that result in errors and data corruption. In a complex system — such as a multiplayer video game — synchronization can be challenging, especially on a public network that carries data traffic.\n* **Imperfect scalability.** Doubling the number of nodes in a distributed system doesn’t necessarily double performance. Architecting an effective distributed system that maximizes scalability is a complex undertaking that needs to take into account load balancing, bandwidth management, and other issues.\n* **More complex security.** Managing a large number of nodes in a heterogeneous or globally distributed environment creates numerous security challenges. A single weak link in a file system or larger distributed system network can expose the entire system to attack.\n* **Increased complexity:** Distributed systems are more complex to design, manage and understand than traditional computing environments.\n\nWith connected devices, IoT sensors, and remote endpoints, distributed visibility now includes the quality of the underlying ISP connection. Incorporating ISP monitoring ensures that latency, packet loss, and jitter affecting remote users or AI-powered workloads are detected in real time, enabling faster troubleshooting and better user experience.\n\n**Risks of distributed systems**\n\nThe challenges of distributed systems create a number of correlating risks.\n\n* **Security.** Distributed systems are as vulnerable to attack as any other system, but their distributed nature creates a much larger attack surface that exposes organizations to threats.\n* **Risk of network failure.** Distributed systems are beholden to public networks to transmit and receive data. If one segment of the internet becomes unavailable or overloaded, distributed system performance may decline.\n* **Governance and control issues.** Distributed systems lack the governability of monolithic, single-server-based systems, creating auditing and adherence issues around data privacy laws. Globally distributed environments are challenging when it comes to providing certain levels of assurance and understanding exactly where data resides.\n* **Cost control.** Unlike centralized systems, the scalability of distributed systems allows administrators to easily add additional capacity as needed, which can also increase costs. Pricing for cloud-based distributed computing systems are based on usage (such as the number of memory resources and CPU power consumed over time). If demand suddenly spikes, you might face a massive bill.\n\n**Real-world guidance: How to set up a distributed system**\n\nDistributed deployments can range from tiny, single department deployments on local area networks to large-scale, global deployments. In addition to their size and overall complexity, organizations can consider deployments based on:\n\n* The size and capacity of their computer network\n* The amount of data they’ll consume\n* How frequently they run processes and whether they'll be scheduled or ad hoc\n* The number of users accessing the system\n* Capacity of their data center\n* The necessary data fidelity and availability requirements\n\nThe management of distributed systems is simplified by deploying:\n\n* **Container orchestraters** (Kubernetes is the prime example) that offer automated scaling, deployment, and operation of containers across the cluster of hosts.\n* **Databases** that provide a consistent data layer, at the same time ensuring that all the nodes in the system can access the same data while supporting data replication for fault tolerance.\n\nDistributed deployments are categorized as departmental, small enterprise, medium enterprise, or large enterprise. By no means formal, these categories are a starting point for planning the needed resources to implement a distributed computing system. Importantly, expect distributed systems to evolve over time, transitioning from departmental to small enterprise as the enterprise grows and expands.\n\n**Tracking what goes on in distributed systems**\n\nWe know clearly that, for all their benefits, distributed systems are complicated. Knowing what goes on within — the observability of that system — is a distinct advantage. Luckily, it’s one you can achieve with distributed tracing.\n\nWithout distributed tracing, a globally distributed system environment would be impossible to monitor effectively.\n\nDistributed tracing, sometimes called distributed request tracing, is a method for monitoring applications — typically those built on a microservices architecture — which are commonly deployed on distributed systems. Distributed tracing is essentially a form of distributed computing in that it’s commonly used to monitor the operations of applications running on distributed systems.\n\nIn software development and operations, tracing is used to follow the course of a transaction as it travels through an application. An online credit card transaction as it winds its way from a customer’s initial purchase to the verification and approval process to the completion of the transaction, for example. A tracing system monitors this process step by step, helping a developer to uncover bugs, bottlenecks, latency issues, or other problems with the application.\n\nDistributed tracing is necessary because of the considerable complexity of modern software architectures. A distributed tracing system is designed to operate on a distributed services infrastructure, where it can track multiple applications and processes simultaneously across numerous concurrent nodes and computing environments.\n\n**Applying access control in distributed systems**\n\nAdministrators use a variety of approaches to manage access control in distributed computing environments. The approaches range from traditional access control lists (ACLs) to role-based access control (RBAC).\n\nOne of the most promising access control mechanisms for distributed systems is attribute-based access control (ABAC), which controls access to objects and processes using rules that include information about the user, the action requested, and the environment of that request. Administrators can also refine these types of roles to restrict access to certain times of day or certain locations.\n\n**Distributed systems vs. microservices: what's the difference?**\n\nAlthough there are some similarities between microservices and distributed systems, they are not the same.\n\n* Microservices are an approach to design where an application is broken into multiple smaller services that can be deployed independently.\n* Distributed systems consist of multiple computers that work together to perform a single task.\n\nThe main difference is that microservices focus on flexibility and making the system modular. On the other hand, distributed systems focus on resource sharing and making the system scalable.\n\nOn the contrary, an SOA (Service oriented architecture) is a broader design approach where multiple services communicate over a network. We can consider microservices to be a well-refined version of SOA, with more focus on independent deployment and lightweight communication.\n\n**Distributed systems aren’t going away**\n\nDistributed systems are well-positioned to dominate computing as we know it for the foreseeable future, and almost any type of application or service will incorporate some form of distributed computing. The need for always-on, available-anywhere computing isn’t disappearing anytime soon.\n\n---"
    },
    {
      "id": "docx-1",
      "source": "What are distributed systems.docx",
      "title": "What are distributed systems",
      "body": "What are distributed systems?\n\nDistributed systems generally consist of multiple interconnected devices or computers that work together to perform a task that is beyond the capacity of a single system. These systems work by collaborating, sharing resources and coordinating processes to handle complex workloads. (Distributed systems are the entire basis of the internet, after all.) Distributed systems are essential in situations when the workload is subject to change, such as:\n\nE-commerce traffic on Cyber Monday\n\nA sudden wave of web traffic in response to news about your organization\n\nHistorically, distributed computing was expensive, complex to configure, and difficult to manage. Thanks to SaaS, Paas, and Iaas solutions, however, distributed computing has become more streamlined and affordable for businesses of all stripes and sizes.\n\nToday, all types of computing jobs — from database management to video games — use distributed computing. In fact, many types of software, such as cryptocurrency systems, scientific simulations, blockchain technologies and AI platforms, wouldn’t be possible at all without these platforms.\n\nFeatures of distributed systems\n\nBecause they draw on the capabilities of other computing devices and processes, distributed systems can offer features that would be difficult or impossible to develop on a single system.\n\nThis includes things like performing an off-site server and application backup — if the master catalog doesn’t see the segment bits it needs for a restore, it can ask the other off-site node or nodes to send the segments. Virtually everything you do now with a computing device takes advantage of the power of distributed systems, whether that’s sending an email, playing a game or reading this article on the web.\n\nExamples of distributed systems\n\nHere are some very common examples of distributed systems:\n\nTelecommunications networks that support mobile and internet networks\n\nGraphical and video-rendering systems\n\nScientific computing, such as protein folding and genetic research\n\nAirline and hotel reservation systems\n\nMultiuser video conferencing systems\n\nCryptocurrency processing systems (e.g. Bitcoin)\n\nPeer-to-peer file-sharing systems\n\nDistributed community computing systems\n\nMultiplayer video games\n\nGlobal, distributed retailers and supply chain management\n\nHow distributed systems work\n\nA distributed system begins with a task. Let’s pretend you need to render a video to create a finished product.\n\nThe application (really, the distributed applications) managing this task — like a video editor on a client computer — splits the job into pieces. In this simple example, the algorithm gives one frame of the video to each of a dozen different computers (or nodes) to complete the rendering. Once the frame is complete, the managing application gives the node a new frame to work on. This process continues until the video is finished and all the pieces are put back together.\n\nA system like this doesn’t have to stop at just 12 nodes: the job may be distributed among hundreds or thousands of nodes, turning a task that might have taken days for a single computer to complete into one that is finished in a matter of minutes.\n\nWhen thinking about the challenges of a distributed computing platform, the trick is to break it down into a series of interconnected patterns. Simplifying the system into smaller, more manageable and more easily understood components helps abstract a complicated architecture. Patterns are commonly used to describe distributed systems, such as:\n\nCommand and query responsibility segregation (CQRS)\n\nTwo-phase commit (2PC)\n\nDifferent combinations of patterns are used to design distributed systems, and each approach has unique benefits and drawbacks.\n\nTypes of distributed systems\n\nThere are many models and architectures of distributed systems in use today.\n\nClient-server systems, the most traditional and simple type of distributed system, involve a multitude of networked computers that interact with a central server for data storage, data processing, or other common goal.\n\nPeer-to-peer networks distribute workloads among hundreds or thousands of computers all running the same software.\n\nCell phone networks are an advanced distributed system, sharing workloads among handsets, switching systems and internet-based devices.\n\nAt this point, you might realize this: The most common forms of distributed systems today operate over the internet, handing off workloads to dozens of cloud-based virtual server instances that are created as needed, then terminated when the task is complete.\n\nKey characteristics of a distributed system\n\nSo now that we “get” what distributed systems are, we can start to assign key features to them. Here’s what good distributed systems have in common:\n\nScalability. The ability to grow as the size of the workload increases is an essential feature of distributed systems, accomplished by adding additional processing units or nodes to the network as needed.\n\nConcurrency. Distributed system components run simultaneously. They’re also characterized by the lack of a “global clock,” when tasks occur out of sequence and at different rates.\n\nAvailability and fault tolerance. If one node fails, the remaining nodes can continue to operate without disrupting the overall computation.\n\nHeterogeneity. In most distributed systems, the nodes and components are often asynchronous, with different hardware, middleware, software and operating systems. This allows the distributed systems to be extended with the addition of new components.\n\nReplication. Distributed systems enable shared information and messaging, ensuring consistency between redundant resources, such as software or hardware components, thus improving fault tolerance, reliability, and accessibility.\n\nTransparency. The end user sees a distributed system as a single computational unit (a single app) rather than as its underlying parts, allowing users to interact with a single logical device rather than being concerned with the system’s architecture.\n\nBenefits, challenges & risks of distributed systems\n\nBefore moving on further, let's discuss the advantages, risks and challenges of distributed systems.\n\nBenefits of distributed systems\n\nDistributed systems offer a number of advantages over monolithic, or single, systems:\n\nScalability & flexibility. It is easier to add computing power as the need for services grows. In most cases today, you can spin up servers to a distributed system on the fly, increasing performance and further reducing time to completion.\n\nFault tolerance. Distributed systems reduce the risks involved with having a single point of failure, bolstering reliability and fault tolerance.\n\nReliability. A well-designed distributed system can withstand failures in one or more of its nodes without severely impacting performance. In a monolithic system, the entire application goes down if the server goes down.\n\nSpeed. Heavy traffic can bog down single servers when traffic gets heavy, impacting performance for everyone. The scalability of distributed databases and other distributed systems makes them easier to maintain and also sustain high-performance levels.\n\nGeo-distribution. Distributed content delivery is both intuitive for any internet user, and vital for global organizations.\n\nChallenges of distributed systems\n\nDistributed systems are considerably more complex than monolithic computing environments, and raise a number of challenges around design, operations and maintenance. These include:\n\nMore opportunities for failure. The more systems added to a computing environment, the more opportunity there is for failure. If a system is not carefully designed and a single node crashes, the entire system can go down. While distributed systems are designed to be fault tolerant, that fault tolerance is neither automatic nor foolproof.\n\nSynchronization process challenges. Distributed systems work without a global clock, requiring careful programming to ensure that processes are properly synchronized to avoid transmission delays that result in errors and data corruption. In a complex system — such as a multiplayer video game — synchronization can be challenging, especially on a public network that carries data traffic.\n\nImperfect scalability. Doubling the number of nodes in a distributed system doesn’t necessarily double performance. Architecting an effective distributed system that maximizes scalability is a complex undertaking that needs to take into account load balancing, bandwidth management, and other issues.\n\nMore complex security. Managing a large number of nodes in a heterogeneous or globally distributed environment creates numerous security challenges. A single weak link in a file system or larger distributed system network can expose the entire system to attack.\n\nIncreased complexity: Distributed systems are more complex to design, manage and understand than traditional computing environments.\n\nWith connected devices, IoT sensors, and remote endpoints, distributed visibility now includes the quality of the underlying ISP connection. Incorporating ISP monitoring ensures that latency, packet loss, and jitter affecting remote users or AI-powered workloads are detected in real time, enabling faster troubleshooting and better user experience.\n\nRisks of distributed systems\n\nThe challenges of distributed systems create a number of correlating risks.\n\nSecurity. Distributed systems are as vulnerable to attack as any other system, but their distributed nature creates a much larger attack surface that exposes organizations to threats.\n\nRisk of network failure. Distributed systems are beholden to public networks to transmit and receive data. If one segment of the internet becomes unavailable or overloaded, distributed system performance may decline.\n\nGovernance and control issues. Distributed systems lack the governability of monolithic, single-server-based systems, creating auditing and adherence issues around data privacy laws. Globally distributed environments are challenging when it comes to providing certain levels of assurance and understanding exactly where data resides.\n\nCost control. Unlike centralized systems, the scalability of distributed systems allows administrators to easily add additional capacity as needed, which can also increase costs. Pricing for cloud-based distributed computing systems are based on usage (such as the number of memory resources and CPU power consumed over time). If demand suddenly spikes, you might face a massive bill.\n\nReal-world guidance: How to set up a distributed system\n\nDistributed deployments can range from tiny, single department deployments on local area networks to large-scale, global deployments. In addition to their size and overall complexity, organizations can consider deployments based on:\n\nThe size and capacity of their computer network\n\nThe amount of data they’ll consume\n\nHow frequently they run processes and whether they'll be scheduled or ad hoc\n\nThe number of users accessing the system\n\nCapacity of their data center\n\nThe necessary data fidelity and availability requirements\n\nThe management of distributed systems is simplified by deploying:\n\nContainer orchestraters (Kubernetes is the prime example) that offer automated scaling, deployment, and operation of containers across the cluster of hosts.\n\nDatabases that provide a consistent data layer, at the same time ensuring that all the nodes in the system can access the same data while supporting data replication for fault tolerance.\n\nDistributed deployments are categorized as departmental, small enterprise, medium enterprise, or large enterprise. By no means formal, these categories are a starting point for planning the needed resources to implement a distributed computing system. Importantly, expect distributed systems to evolve over time, transitioning from departmental to small enterprise as the enterprise grows and expands.\n\nTracking what goes on in distributed systems\n\nWe know clearly that, for all their benefits, distributed systems are complicated. Knowing what goes on within — the observability of that system — is a distinct advantage. Luckily, it’s one you can achieve with distributed tracing.\n\nWithout distributed tracing, a globally distributed system environment would be impossible to monitor effectively.\n\nDistributed tracing, sometimes called distributed request tracing, is a method for monitoring applications — typically those built on a microservices architecture — which are commonly deployed on distributed systems. Distributed tracing is essentially a form of distributed computing in that it’s commonly used to monitor the operations of applications running on distributed systems.\n\nIn software development and operations, tracing is used to follow the course of a transaction as it travels through an application. An online credit card transaction as it winds its way from a customer’s initial purchase to the verification and approval process to the completion of the transaction, for example. A tracing system monitors this process step by step, helping a developer to uncover bugs, bottlenecks, latency issues, or other problems with the application.\n\nDistributed tracing is necessary because of the considerable complexity of modern software architectures. A distributed tracing system is designed to operate on a distributed services infrastructure, where it can track multiple applications and processes simultaneously across numerous concurrent nodes and computing environments.\n\nApplying access control in distributed systems\n\nAdministrators use a variety of approaches to manage access control in distributed computing environments. The approaches range from traditional access control lists (ACLs) to role-based access control (RBAC).\n\nOne of the most promising access control mechanisms for distributed systems is attribute-based access control (ABAC), which controls access to objects and processes using rules that include information about the user, the action requested, and the environment of that request. Administrators can also refine these types of roles to restrict access to certain times of day or certain locations.\n\nDistributed systems vs. microservices: what's the difference?\n\nAlthough there are some similarities between microservices and distributed systems, they are not the same.\n\nMicroservices are an approach to design where an application is broken into multiple smaller services that can be deployed independently.\n\nDistributed systems consist of multiple computers that work together to perform a single task.\n\nThe main difference is that microservices focus on flexibility and making the system modular. On the other hand, distributed systems focus on resource sharing and making the system scalable.\n\nOn the contrary, an SOA (Service oriented architecture) is a broader design approach where multiple services communicate over a network. We can consider microservices to be a well-refined version of SOA, with more focus on independent deployment and lightweight communication.\n\nDistributed systems aren’t going away\n\nDistributed systems are well-positioned to dominate computing as we know it for the foreseeable future, and almost any type of application or service will incorporate some form of distributed computing. The need for always-on, available-anywhere computing isn’t disappearing anytime soon."
    },
    {
      "id": "docx-2",
      "source": "Distributed system middleware applications (1).docx",
      "title": "Distributed system middleware applications (1)",
      "body": "Understanding the basics of distributed system middleware applications\n\nKey Concepts in Distributed System Middleware Applications\n\nMiddleware serves as the glue that binds distributed systems together, enabling communication and coordination between disparate components. It abstracts the complexities of the underlying hardware and network, providing a unified interface for developers. Key concepts include:\n\nTransparency: Middleware ensures location, access, and replication transparency, allowing users to interact with the system without worrying about its distributed nature.\n\nInteroperability: Middleware facilitates communication between heterogeneous systems, enabling seamless integration of different platforms and technologies.\n\nScalability: Middleware supports the addition of new nodes or resources without significant reconfiguration.\n\nFault Tolerance: Middleware ensures system reliability by handling failures gracefully, often through redundancy and failover mechanisms.\n\nImportance of Distributed System Middleware Applications in Modern Systems\n\nMiddleware is indispensable in modern distributed systems for several reasons:\n\nSimplified Development: Middleware abstracts low-level complexities, allowing developers to focus on application logic rather than infrastructure.\n\nEnhanced Performance: Middleware optimizes resource allocation and communication, ensuring efficient system operation.\n\nImproved Security: Middleware often includes built-in security features like encryption and authentication, safeguarding data and communication.\n\nSupport for Emerging Technologies: Middleware is critical for integrating advanced technologies like AI, IoT, and blockchain into distributed systems.\n\nChallenges in implementing distributed system middleware applications\n\nCommon Pitfalls to Avoid\n\nImplementing middleware in distributed systems is fraught with challenges. Common pitfalls include:\n\nOver-Engineering: Adding unnecessary features can complicate the middleware, making it harder to maintain and scale.\n\nPoor Scalability: Middleware that cannot handle increased loads or additional nodes can become a bottleneck.\n\nInadequate Security: Failing to address security concerns can expose the system to vulnerabilities.\n\nLack of Standardization: Using proprietary solutions can lead to compatibility issues and vendor lock-in.\n\nSolutions to Overcome Challenges\n\nTo address these challenges, consider the following strategies:\n\nAdopt Modular Design: Build middleware with a modular architecture to simplify updates and scalability.\n\nImplement Robust Security Measures: Use encryption, authentication, and regular security audits to protect the system.\n\nLeverage Open Standards: Opt for middleware solutions that adhere to industry standards to ensure compatibility and flexibility.\n\nConduct Thorough Testing: Regularly test the middleware under various conditions to identify and resolve potential issues.\n\nBest practices for distributed system middleware applications\n\nIndustry Standards and Guidelines\n\nAdhering to industry standards ensures that your middleware is robust, secure, and compatible. Key guidelines include:\n\nFollow the OSI Model: Design middleware that aligns with the Open Systems Interconnection (OSI) model for better interoperability.\n\nUse Established Protocols: Employ widely accepted communication protocols like HTTP, MQTT, or gRPC.\n\nPrioritize Security: Implement best practices like secure coding, regular updates, and compliance with regulations like GDPR or HIPAA.\n\nTools and Technologies for Optimization\n\nSeveral tools and technologies can enhance the performance and reliability of middleware:\n\nMessage Brokers: Tools like Apache Kafka and RabbitMQ facilitate efficient message passing between components.\n\nService Meshes: Solutions like Istio and Linkerd manage service-to-service communication in microservices architectures.\n\nMonitoring Tools: Platforms like Prometheus and Grafana provide real-time insights into system performance.\n\nMiddleware Frameworks: Frameworks like CORBA, JBoss, and Spring Boot simplify middleware development.\n\nCase studies: successful applications of distributed system middleware\n\nReal-World Examples\n\nNetflix: Netflix uses middleware to manage its microservices architecture, ensuring seamless streaming for millions of users worldwide.\n\nAmazon Web Services (AWS): AWS employs middleware to provide scalable and reliable cloud services, supporting businesses of all sizes.\n\nSmart Cities: Middleware enables IoT devices in smart cities to communicate and share data, improving urban planning and resource management.\n\nLessons Learned from Implementation\n\nScalability is Key: Systems must be designed to handle growth without compromising performance.\n\nFocus on User Experience: Middleware should enhance, not hinder, the end-user experience.\n\nContinuous Improvement: Regular updates and optimizations are essential to keep middleware relevant and effective.\n\nFuture trends in distributed system middleware applications\n\nEmerging Technologies\n\nAI-Driven Middleware: Artificial intelligence is being integrated into middleware to enable predictive analytics and automated decision-making.\n\nEdge Computing: Middleware is evolving to support edge computing, bringing computation closer to data sources.\n\nBlockchain Integration: Middleware is being developed to facilitate secure and transparent transactions in blockchain networks.\n\nPredictions for the Next Decade\n\nIncreased Automation: Middleware will become more autonomous, reducing the need for manual intervention.\n\nEnhanced Security: Future middleware will incorporate advanced security features to counter emerging threats.\n\nGreater Interoperability: Middleware will support a wider range of platforms and technologies, fostering innovation and collaboration.\n\nStep-by-step guide to implementing distributed system middleware applications\n\nDefine Requirements: Identify the specific needs and goals of your distributed system.\n\nChoose the Right Middleware: Select a middleware solution that aligns with your requirements and budget.\n\nDesign the Architecture: Plan the system architecture, including communication protocols and data flow.\n\nDevelop and Test: Build the middleware and conduct thorough testing to ensure reliability and performance.\n\nDeploy and Monitor: Roll out the middleware and use monitoring tools to track its performance and address issues.\n\nTips for do's and don'ts\n\nDo's\n\nDon'ts\n\nUse modular and scalable designs\n\nOvercomplicate the middleware architecture\n\nPrioritize security and compliance\n\nIgnore potential vulnerabilities\n\nRegularly update and maintain the middleware\n\nRely on outdated or unsupported solutions\n\nConduct thorough testing before deployment\n\nSkip testing to save time\n\nLeverage industry standards and best practices\n\nUse proprietary solutions without flexibility"
    }
  ],
  "glossary": [
    {
      "term": "Parallel Computing",
      "definition": "The simultaneous use of multiple compute resources to solve a computational problem faster by dividing it into parts that can run concurrently.",
      "tags": [
        "core"
      ]
    },
    {
      "term": "Distributed Computing",
      "definition": "A model where independent computers or nodes collaborate over a network, each with its own memory, to solve tasks or provide services.",
      "tags": [
        "core",
        "architecture"
      ]
    },
    {
      "term": "Serial Computing",
      "definition": "Traditional execution where instructions run sequentially on a single processor and only one instruction executes at a given moment.",
      "tags": [
        "core"
      ]
    },
    {
      "term": "Concurrency",
      "definition": "The ability to manage multiple tasks during the same time period, often by switching between them or using non-blocking execution.",
      "tags": [
        "week3",
        "core"
      ]
    },
    {
      "term": "Parallelism",
      "definition": "The actual simultaneous execution of tasks using multiple cores, processors, GPUs, or machines.",
      "tags": [
        "week3",
        "core"
      ]
    },
    {
      "term": "Process",
      "definition": "An instance of a running program with its own memory space, code, data, and system resources.",
      "tags": [
        "model",
        "week3"
      ]
    },
    {
      "term": "Thread",
      "definition": "The smallest unit of execution inside a process. Threads share the process memory and are lighter than separate processes.",
      "tags": [
        "model",
        "week3"
      ]
    },
    {
      "term": "Context Switching",
      "definition": "The operating system action of saving one execution context and loading another. It is usually heavier for processes than threads.",
      "tags": [
        "week3",
        "performance"
      ]
    },
    {
      "term": "Inter-Process Communication (IPC)",
      "definition": "Mechanisms that let processes communicate and synchronize, including pipes, sockets, shared memory, message queues, and message passing.",
      "tags": [
        "ipc",
        "week3"
      ]
    },
    {
      "term": "Shared Memory",
      "definition": "An IPC model and memory architecture where tasks communicate by reading and writing a common memory region or shared logical address space.",
      "tags": [
        "architecture",
        "ipc",
        "model"
      ]
    },
    {
      "term": "Message Passing",
      "definition": "A communication model where processes exchange messages using operations such as send and receive without sharing an address space.",
      "tags": [
        "architecture",
        "ipc",
        "model"
      ]
    },
    {
      "term": "send() and receive()",
      "definition": "The basic operations of message passing: one process transmits data and another process receives it through a communication link.",
      "tags": [
        "ipc"
      ]
    },
    {
      "term": "Fixed-Size Message",
      "definition": "A message format with a fixed length. It is easier for system-level implementation but can make programming less flexible.",
      "tags": [
        "ipc"
      ]
    },
    {
      "term": "Variable-Size Message",
      "definition": "A message format whose length can vary. It requires more system-level implementation but can simplify programming.",
      "tags": [
        "ipc"
      ]
    },
    {
      "term": "Synchronization",
      "definition": "Coordination of tasks so shared resources are accessed safely and tasks reach required ordering points.",
      "tags": [
        "ipc",
        "performance",
        "sync",
        "week3"
      ]
    },
    {
      "term": "Race Condition",
      "definition": "A bug where the result depends on timing, often because multiple threads or processors access shared data without proper synchronization.",
      "tags": [
        "ipc",
        "sync",
        "week3"
      ]
    },
    {
      "term": "Deadlock",
      "definition": "A situation where two or more tasks are blocked forever waiting for resources held by each other.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Livelock",
      "definition": "A situation where tasks are not blocked but keep responding to each other and fail to make progress.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Lock / Mutex",
      "definition": "A synchronization primitive that allows only one thread or process to access a protected resource at a time.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Semaphore",
      "definition": "A synchronization primitive with a counter that controls access to a limited number of resources.",
      "tags": [
        "ipc",
        "sync",
        "week3"
      ]
    },
    {
      "term": "Condition Variable",
      "definition": "A synchronization primitive that lets threads wait until a condition becomes true and another thread signals it.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Monitor",
      "definition": "A higher-level synchronization abstraction that encapsulates shared data and the procedures that operate on it.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Event Wait Handle",
      "definition": "A signaling primitive where one thread waits for an event and another thread signals when a condition is met.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Channel",
      "definition": "A communication primitive used to pass messages between threads or processes.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Message Queue",
      "definition": "A communication primitive that lets processes or threads send messages asynchronously while preserving delivery order.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Remote Procedure Call (RPC)",
      "definition": "A communication technique that lets a process invoke a procedure on another machine as if it were local.",
      "tags": [
        "week3",
        "ipc",
        "architecture"
      ]
    },
    {
      "term": "Input / Output Primitives",
      "definition": "Operations such as send and receive used for communication between processes or threads.",
      "tags": [
        "week3",
        "ipc"
      ]
    },
    {
      "term": "Shared Memory Architecture",
      "definition": "A hardware architecture where processors have access to common physical or logical memory.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Distributed Memory Architecture",
      "definition": "A system where each processor or node has its own local memory and must communicate explicitly to access remote data.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Hybrid Distributed-Shared Memory",
      "definition": "An architecture combining shared-memory nodes with distributed-memory communication between nodes.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Distributed Shared Memory (DSM)",
      "definition": "A hybrid approach where memory is physically distributed, but software provides the illusion of a shared memory space.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Symmetric Multiprocessing (SMP)",
      "definition": "A shared-memory architecture where multiple processors share one address space and have equal access to resources.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Uniform Memory Access (UMA)",
      "definition": "A shared-memory design where all processors have roughly equal access time to any memory location.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Cache-Coherent UMA (CC-UMA)",
      "definition": "A UMA system where hardware keeps processor caches consistent when shared memory is updated.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Non-Uniform Memory Access (NUMA)",
      "definition": "A memory architecture where access time varies depending on whether memory is local or remote to the processor.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Cache-Coherent NUMA (CC-NUMA)",
      "definition": "A NUMA system that maintains cache coherency even though memory access times are non-uniform.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Cluster Computing",
      "definition": "A group of interconnected computers that work together as a single system, often for high-performance computing.",
      "tags": [
        "architecture",
        "distributed"
      ]
    },
    {
      "term": "Grid Computing",
      "definition": "A distributed architecture that extends clusters across wider areas, locations, or organizations for resource sharing.",
      "tags": [
        "architecture",
        "distributed"
      ]
    },
    {
      "term": "Client-Server Architecture",
      "definition": "A distributed model where clients request services and a centralized server or server cluster responds.",
      "tags": [
        "architecture",
        "distributed"
      ]
    },
    {
      "term": "Peer-to-Peer (P2P)",
      "definition": "A decentralized model where each node can act as both client and server without a central controller.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "MapReduce",
      "definition": "A distributed programming model where Map processes input chunks in parallel and Reduce combines intermediate results.",
      "tags": [
        "architecture",
        "distributed"
      ]
    },
    {
      "term": "Hadoop",
      "definition": "A big data ecosystem strongly associated with MapReduce and HDFS for distributed storage and processing.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "HDFS",
      "definition": "Hadoop Distributed File System, which stores large files across multiple nodes for reliability and throughput.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "GFS",
      "definition": "Google File System, a distributed file system designed for reliable storage across many commodity machines.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Distributed Database",
      "definition": "A database whose data is partitioned, replicated, and managed across multiple nodes.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Cloud Computing",
      "definition": "On-demand access to virtualized computing resources over the internet, built on distributed data centers.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "von Neumann Architecture",
      "definition": "The stored-program computer model with memory, control unit, arithmetic logic unit, and input/output.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Flynn Taxonomy",
      "definition": "A classification of architectures based on whether instruction streams and data streams are single or multiple.",
      "tags": [
        "taxonomy"
      ]
    },
    {
      "term": "SISD",
      "definition": "Single Instruction, Single Data. A serial, non-parallel computer executing one instruction stream on one data stream.",
      "tags": [
        "taxonomy"
      ]
    },
    {
      "term": "SIMD",
      "definition": "Single Instruction, Multiple Data. One operation is applied simultaneously to multiple data elements, common in GPUs.",
      "tags": [
        "parallelism",
        "taxonomy"
      ]
    },
    {
      "term": "MISD",
      "definition": "Multiple Instruction, Single Data. Multiple instruction streams operate on one data stream; rare in real systems.",
      "tags": [
        "taxonomy"
      ]
    },
    {
      "term": "MIMD",
      "definition": "Multiple Instruction, Multiple Data. Multiple processors execute different instructions on different data; common in modern parallel systems.",
      "tags": [
        "taxonomy"
      ]
    },
    {
      "term": "Node",
      "definition": "A standalone computer in a cluster, usually containing processors, memory, network interfaces, and local resources.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "CPU / Processor / Core",
      "definition": "Execution resources inside a computer. Modern processors often contain multiple cores, and nodes may contain multiple CPUs.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Task",
      "definition": "A logically discrete section of computational work executed by a processor or thread.",
      "tags": [
        "core"
      ]
    },
    {
      "term": "Pipelining",
      "definition": "A parallel technique that breaks a task into stages, with different processing units handling different stages like an assembly line.",
      "tags": [
        "architecture",
        "taxonomy"
      ]
    },
    {
      "term": "High Performance Computing (HPC)",
      "definition": "Use of very fast and large computers to solve computationally demanding problems.",
      "tags": [
        "architecture",
        "performance"
      ]
    },
    {
      "term": "Supercomputer",
      "definition": "A very high-performance computer, often built from many parallel nodes and used for large scientific or commercial workloads.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Massively Parallel",
      "definition": "A system with a very large number of processing elements, often hundreds of thousands or millions.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Embarrassingly Parallel",
      "definition": "A workload made of many independent tasks that require little or no communication between tasks.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Scalability",
      "definition": "The ability of hardware or software to gain proportionate capacity or speedup as resources are added.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Speedup",
      "definition": "The performance improvement from parallelization, often serial wall-clock time divided by parallel wall-clock time.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Efficiency",
      "definition": "How well processors are used, commonly calculated as speedup divided by the number of processors.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Parallel Overhead",
      "definition": "Time spent on coordination rather than useful work, including task startup, communication, synchronization, software overhead, and termination.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Communication Overhead",
      "definition": "Extra cost from packaging, transmitting, waiting for, or coordinating data exchange between tasks.",
      "tags": [
        "performance",
        "ipc"
      ]
    },
    {
      "term": "Communication Latency",
      "definition": "Delay before or during communication, especially important when nodes are geographically or network-separated.",
      "tags": [
        "performance",
        "ipc"
      ]
    },
    {
      "term": "Bandwidth",
      "definition": "The amount of data that can be communicated per unit of time.",
      "tags": [
        "performance",
        "ipc"
      ]
    },
    {
      "term": "Granularity",
      "definition": "The ratio of computation to communication in parallel work.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Fine-Grained Parallelism",
      "definition": "Parallel work with small computation chunks and frequent communication, which can increase overhead.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Coarse-Grained Parallelism",
      "definition": "Parallel work with larger computation chunks and less frequent communication, often better for independent large tasks.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Load Balancing",
      "definition": "Distributing work evenly across processors or nodes to minimize idle time and bottlenecks.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Fault Tolerance",
      "definition": "The ability of a system to continue operating correctly even when some components fail.",
      "tags": [
        "architecture",
        "distributed",
        "performance"
      ]
    },
    {
      "term": "Data Dependency",
      "definition": "A relationship where execution order affects program results, making parallel execution harder.",
      "tags": [
        "performance",
        "ipc"
      ]
    },
    {
      "term": "Barrier",
      "definition": "A synchronization point where tasks wait until all required tasks arrive before continuing.",
      "tags": [
        "ipc",
        "performance",
        "sync"
      ]
    },
    {
      "term": "Blocking Communication",
      "definition": "Communication where a task must wait until the operation completes before continuing.",
      "tags": [
        "ipc",
        "performance"
      ]
    },
    {
      "term": "Non-Blocking Communication",
      "definition": "Communication that lets a task continue doing useful work while data transfer proceeds.",
      "tags": [
        "ipc",
        "performance"
      ]
    },
    {
      "term": "Point-to-Point Communication",
      "definition": "Communication involving one sender and one receiver.",
      "tags": [
        "ipc",
        "model"
      ]
    },
    {
      "term": "Collective Communication",
      "definition": "Communication involving a group of tasks, such as broadcast, gather, scatter, or reduce.",
      "tags": [
        "ipc",
        "model"
      ]
    },
    {
      "term": "MPI",
      "definition": "Message Passing Interface, the de facto standard API for message passing in distributed-memory parallel programming.",
      "tags": [
        "architecture",
        "ipc",
        "tool"
      ]
    },
    {
      "term": "OpenMP",
      "definition": "A directive-based programming model commonly used for shared-memory parallelism in C, C++, and Fortran.",
      "tags": [
        "architecture",
        "ipc",
        "tool"
      ]
    },
    {
      "term": "Pthreads",
      "definition": "POSIX Threads, a library-based thread API for explicit shared-memory parallel programming.",
      "tags": [
        "architecture",
        "week3"
      ]
    },
    {
      "term": "Data Parallel Model",
      "definition": "A model where tasks perform the same operation on different partitions of a shared or logically global data structure.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Hybrid Programming Model",
      "definition": "A model combining more than one approach, such as MPI between nodes and OpenMP threads within nodes.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "SPMD",
      "definition": "Single Program, Multiple Data. All tasks run copies of the same program but may work on different data or branch into different roles.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "MPMD",
      "definition": "Multiple Program, Multiple Data. Different tasks may run different programs on different data.",
      "tags": [
        "architecture"
      ]
    },
    {
      "term": "Parallel Programming Model",
      "definition": "A framework or paradigm for executing processes simultaneously across multiple computing resources.",
      "tags": [
        "core"
      ]
    },
    {
      "term": "High-Performance Computing (HPC)",
      "definition": "Computing that uses powerful or parallel resources to process large workloads efficiently.",
      "tags": [
        "core"
      ]
    },
    {
      "term": "Shared-Memory Programming",
      "definition": "A parallel model where multiple threads or processes access a common memory space.",
      "tags": [
        "model"
      ]
    },
    {
      "term": "Multithreading",
      "definition": "Using multiple threads within one process, commonly sharing the same memory space.",
      "tags": [
        "model"
      ]
    },
    {
      "term": "Multiprocessing",
      "definition": "Running multiple independent processes; in this lesson, it may still be discussed with shared memory when processes share a memory region.",
      "tags": [
        "model"
      ]
    },
    {
      "term": "Lock",
      "definition": "A synchronization mechanism that allows only one thread to access a protected section at a time.",
      "tags": [
        "sync"
      ]
    },
    {
      "term": "Data Inconsistency",
      "definition": "Incorrect or conflicting data caused by unmanaged concurrent updates.",
      "tags": [
        "sync"
      ]
    },
    {
      "term": "Synchronization Overhead",
      "definition": "Extra cost introduced by coordinating threads or processes.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Contention",
      "definition": "Competition among threads or processes for the same shared resource.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Message-Passing Programming",
      "definition": "A parallel model where independent processes communicate by explicitly sending and receiving messages.",
      "tags": [
        "model"
      ]
    },
    {
      "term": "Asynchronous Communication",
      "definition": "Communication where a process may continue execution while waiting for a message.",
      "tags": [
        "model"
      ]
    },
    {
      "term": "Explicit Synchronization",
      "definition": "Synchronization that the programmer directly expresses, such as waiting for a message.",
      "tags": [
        "sync"
      ]
    },
    {
      "term": "Broadcast",
      "definition": "A collective operation where one process sends data to all participating processes.",
      "tags": [
        "model"
      ]
    },
    {
      "term": "Reduce",
      "definition": "A collective operation that combines values from many processes into a result.",
      "tags": [
        "model"
      ]
    },
    {
      "term": "Gather",
      "definition": "A collective operation that collects data from multiple processes.",
      "tags": [
        "model"
      ]
    },
    {
      "term": "Open MPI",
      "definition": "An implementation of MPI used for message-passing programs.",
      "tags": [
        "tool"
      ]
    },
    {
      "term": "Intel TBB",
      "definition": "Intel Threading Building Blocks, a C++ library for task-based parallelism.",
      "tags": [
        "tool"
      ]
    },
    {
      "term": "Data Parallelism",
      "definition": "A technique where the same operation is applied to different partitions of a dataset at the same time.",
      "tags": [
        "parallelism"
      ]
    },
    {
      "term": "Task Parallelism",
      "definition": "A technique where different independent tasks execute concurrently.",
      "tags": [
        "parallelism"
      ]
    },
    {
      "term": "Dynamic Load Balancing",
      "definition": "Adjusting task distribution at runtime when tasks have different durations or complexity.",
      "tags": [
        "performance"
      ]
    },
    {
      "term": "Task-Based Parallelism",
      "definition": "A style where developers define tasks and dependencies while the framework schedules execution.",
      "tags": [
        "parallelism"
      ]
    },
    {
      "term": "Parallel Loops",
      "definition": "Loop iterations executed concurrently when iterations are independent.",
      "tags": [
        "parallelism"
      ]
    },
    {
      "term": "Parallel Recursive Algorithm",
      "definition": "A recursive algorithm where recursive calls may be executed as parallel tasks.",
      "tags": [
        "parallelism"
      ]
    },
    {
      "term": "Divide and Conquer",
      "definition": "A design technique using Divide -> Conquer -> Combine.",
      "tags": [
        "algorithm"
      ]
    },
    {
      "term": "Greedy Method",
      "definition": "An optimization method that chooses the best-looking current option and does not reconsider it.",
      "tags": [
        "algorithm"
      ]
    },
    {
      "term": "Dynamic Programming",
      "definition": "An optimization method that solves subproblems and reuses stored results.",
      "tags": [
        "algorithm"
      ]
    },
    {
      "term": "Backtracking",
      "definition": "A technique that tries a candidate solution and retreats when the path fails constraints.",
      "tags": [
        "algorithm"
      ]
    },
    {
      "term": "Branch and Bound",
      "definition": "An optimization technique that searches solution space and prunes paths using bounds.",
      "tags": [
        "algorithm"
      ]
    },
    {
      "term": "Linear Programming",
      "definition": "Optimization with a linear objective function and linear constraints.",
      "tags": [
        "algorithm"
      ]
    },
    {
      "term": "Time Complexity",
      "definition": "A measure of how runtime grows as input size grows.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "Space Complexity",
      "definition": "A measure of how memory use grows as input size grows.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "Big-O",
      "definition": "An upper-bound notation often used for worst-case-style growth.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "Big-Omega",
      "definition": "A lower-bound notation for minimum growth.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "Big-Theta",
      "definition": "A tight-bound notation that gives both upper and lower bounds.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "O(1)",
      "definition": "Constant complexity; work or memory does not grow with input size.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "O(log n)",
      "definition": "Logarithmic complexity; often caused by repeatedly halving the problem.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "O(n)",
      "definition": "Linear complexity; one pass or proportional growth with input size.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "O(n log n)",
      "definition": "Log-linear complexity; common in efficient sorting algorithms.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "O(n^2)",
      "definition": "Quadratic complexity; common with nested loops over pairs.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "O(n^3)",
      "definition": "Cubic complexity; common with three nested loops over input.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "O(2^n)",
      "definition": "Exponential complexity; common when exploring subsets or binary choices.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "O(n!)",
      "definition": "Factorial complexity; common when exploring permutations.",
      "tags": [
        "complexity"
      ]
    },
    {
      "term": "Peer-to-Peer Architecture",
      "definition": "A model where each node can act as both client and server.",
      "tags": [
        "distributed"
      ]
    },
    {
      "term": "Map Phase",
      "definition": "The MapReduce phase that splits and processes data chunks in parallel.",
      "tags": [
        "distributed"
      ]
    },
    {
      "term": "Reduce Phase",
      "definition": "The MapReduce phase that combines or aggregates intermediate results.",
      "tags": [
        "distributed"
      ]
    },
    {
      "term": "Middleware",
      "definition": "Software layer that helps distributed components communicate, coordinate, and hide low-level network or platform details.",
      "tags": [
        "distributed",
        "middleware"
      ]
    },
    {
      "term": "Transparency",
      "definition": "A property that hides distribution details such as location, access method, or replication from users and applications.",
      "tags": [
        "distributed",
        "middleware"
      ]
    },
    {
      "term": "Interoperability",
      "definition": "The ability of heterogeneous systems, platforms, and services to communicate and work together.",
      "tags": [
        "distributed",
        "middleware"
      ]
    },
    {
      "term": "Distributed Tracing",
      "definition": "Observability technique that follows a request or transaction as it moves across services in a distributed system.",
      "tags": [
        "distributed",
        "observability"
      ]
    },
    {
      "term": "Service Mesh",
      "definition": "Infrastructure layer that manages service-to-service communication, security, and observability in microservice systems.",
      "tags": [
        "middleware"
      ]
    },
    {
      "term": "Message Broker",
      "definition": "Middleware that routes, buffers, or delivers messages between producers and consumers.",
      "tags": [
        "middleware",
        "message passing"
      ]
    },
    {
      "term": "CQRS",
      "definition": "Command and Query Responsibility Segregation; a pattern that separates write operations from read operations.",
      "tags": [
        "distributed",
        "patterns"
      ]
    },
    {
      "term": "Two-Phase Commit",
      "definition": "A distributed transaction protocol where participants first prepare, then commit only if all can proceed.",
      "tags": [
        "distributed",
        "patterns"
      ]
    }
  ],
  "quizBanks": {
    "prelimA": [
      {
        "id": "prelim-a-1",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the primary objective of parallel computing systems?",
        "answer": "Reducing program execution time through simultaneous processing",
        "wrong": [
          "Improving reliability by duplicating hardware resources",
          "Organizing large databases across independent machines",
          "Expanding network connectivity between computer systems"
        ],
        "explanation": "Parallel computing uses simultaneous processing to reduce wall-clock execution time."
      },
      {
        "id": "prelim-a-2",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "In shared memory programming, what is a major responsibility of the developer?",
        "answer": "Coordinating synchronization to prevent race conditions",
        "wrong": [
          "Managing distributed file replication across clusters",
          "Configuring communication protocols between remote nodes",
          "Creating routing policies for message transmission systems"
        ],
        "explanation": "Shared memory is fast, but the developer must protect shared data with synchronization."
      },
      {
        "id": "prelim-a-3",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which option best represents distributed computing?",
        "answer": "A Hadoop cluster analyzing massive datasets collaboratively",
        "wrong": [
          "A graphics card rendering frames for a video game",
          "A desktop processor running several browser applications",
          "A laptop processor executing spreadsheet calculations locally"
        ],
        "explanation": "A Hadoop cluster is made of multiple computers collaborating across a network."
      },
      {
        "id": "prelim-a-4",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the main function of the Map phase in MapReduce?",
        "answer": "Splitting data into segments for simultaneous computation",
        "wrong": [
          "Saving generated outputs within distributed storage systems",
          "Directing communication requests among participating servers",
          "Combining processed results into a completed final output"
        ],
        "explanation": "The Map phase splits and processes chunks in parallel. Reduce combines the intermediate results."
      },
      {
        "id": "prelim-a-5",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture provides each processor with independent local memory?",
        "answer": "An architecture using separate local memory per processor",
        "wrong": [
          "A multiprocessing model built around centralized memory access",
          "A design where memory latency varies between processors",
          "A memory structure where all processors share equal access"
        ],
        "explanation": "Distributed memory gives processors or nodes their own local memory."
      },
      {
        "id": "prelim-a-6",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which pair of operations forms the basis of message passing systems?",
        "answer": "Sending information packets and receiving transmitted data",
        "wrong": [
          "Reading information and writing information to storage",
          "Allocating memory blocks and releasing unused resources",
          "Encoding communication streams and decoding transferred signals"
        ],
        "explanation": "Message passing is built on send and receive operations."
      },
      {
        "id": "prelim-a-7",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture allows every node to function as both client and server?",
        "answer": "A decentralized model where nodes share equal responsibilities",
        "wrong": [
          "A processing framework based on mapping and reducing tasks",
          "A cloud platform distributing applications through virtual servers",
          "A centralized system controlled by dedicated server machines"
        ],
        "explanation": "Peer-to-peer architecture gives each node both client and server roles."
      },
      {
        "id": "prelim-a-8",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Flynn's taxonomy categorizes parallel systems according to what criteria?",
        "answer": "The arrangement of instruction streams and data streams",
        "wrong": [
          "The operating systems and processor manufacturing designs",
          "The communication speed and network transmission capacity",
          "The quantity of processors and available memory resources"
        ],
        "explanation": "Flynn's taxonomy uses instruction streams and data streams."
      },
      {
        "id": "prelim-a-9",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A computer executing one instruction stream on one data stream belongs to which category?",
        "answer": "A system processing one instruction and one data stream",
        "wrong": [
          "A model supporting multiple instructions on shared datasets",
          "A configuration applying varied operations to identical inputs",
          "A structure executing many tasks across separate processors"
        ],
        "explanation": "Single Instruction, Single Data is SISD, the classic serial category."
      },
      {
        "id": "prelim-a-10",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which term describes the relationship between computation and communication in parallel systems?",
        "answer": "The balance between computational work and communication",
        "wrong": [
          "The quantity of completed operations within a time period",
          "The delay experienced during data transfer between systems",
          "The capability of a system to increase processing capacity"
        ],
        "explanation": "Granularity describes the ratio or balance between computation and communication."
      },
      {
        "id": "prelim-a-11",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A hospital system must analyze millions of patient records for an AI diagnosis platform. Their current single-server setup requires 72 hours to finish processing. Which approach is most appropriate?",
        "answer": "Using parallel processing across multiple processing cores",
        "wrong": [
          "Migrating services toward a decentralized peer network design",
          "Replacing the current processor with a higher clock-speed model",
          "Implementing a traditional client-server communication structure"
        ],
        "explanation": "Large analysis workloads can be split and processed in parallel to reduce completion time."
      },
      {
        "id": "prelim-a-12",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "An online shopping platform experiences severe slowdowns during holiday traffic spikes. The company wants to increase server capacity without redesigning the application. Which distributed computing characteristic best solves this issue?",
        "answer": "The ability to scale resources efficiently as demand grows",
        "wrong": [
          "A single instruction single data processing organization",
          "Uniform processor access to centrally managed memory blocks",
          "A memory-sharing structure across connected processing units"
        ],
        "explanation": "Scalability lets a distributed or cloud system add resources as demand grows."
      },
      {
        "id": "prelim-a-13",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "During a climate simulation, one node in a computing cluster unexpectedly crashes. The simulation continues operating successfully without losing results. Which distributed computing feature enabled this?",
        "answer": "Maintaining operation despite hardware or software failures",
        "wrong": [
          "Exchanging information continuously between independent processes",
          "Executing instructions sequentially through staged processing units",
          "Automatically distributing workloads across active processors evenly"
        ],
        "explanation": "Fault tolerance means the system can keep operating despite component failures."
      },
      {
        "id": "prelim-a-14",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A rendering studio divides a 4K movie into thousands of independent frames processed simultaneously across 200 computers. Which concept best describes this situation?",
        "answer": "Large processing tasks divided into loosely connected workloads",
        "wrong": [
          "Multiple instruction streams operating on identical data values",
          "A memory-sharing approach spanning several distributed systems",
          "Highly independent tasks executed simultaneously without interaction"
        ],
        "explanation": "This is coarse-grained or embarrassingly parallel work: large tasks split into mostly independent units."
      },
      {
        "id": "prelim-a-15",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Two processors running on the same machine frequently exchange extremely large datasets. Performance speed is the highest priority. Which communication method is most suitable?",
        "answer": "Shared memory because it minimizes communication overhead costs",
        "wrong": [
          "Shared memory because synchronization is completely unnecessary",
          "Message passing because operating system calls improve protection",
          "Message passing because it supports communication across networks"
        ],
        "explanation": "Shared memory is usually faster for large same-machine data exchange because it avoids per-message overhead."
      },
      {
        "id": "prelim-a-16",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A startup rapidly increases from 5 to 50 virtual machines during a product launch, then reduces usage afterward. Which computing model makes this possible?",
        "answer": "An elastic infrastructure delivered through cloud platforms",
        "wrong": [
          "A tightly coupled cluster operating within one local network",
          "A decentralized network without dedicated control mechanisms",
          "A grid-based environment connecting geographically separated systems"
        ],
        "explanation": "Cloud computing provides elastic, on-demand resources."
      },
      {
        "id": "prelim-a-17",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A graphics processor applies the same blur operation simultaneously across thousands of image pixels. Which Flynn taxonomy category best represents this process?",
        "answer": "A single operation applied simultaneously to multiple datasets",
        "wrong": [
          "One instruction stream operating on one sequence of data",
          "Multiple operations performed on one shared stream of data",
          "Different instructions executing independently across many datasets"
        ],
        "explanation": "SIMD applies a single instruction or operation across many data elements."
      },
      {
        "id": "prelim-a-18",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Engineers design a fraud-detection system where several processors perform different analyses on the same transaction stream. Which Flynn classification matches this setup?",
        "answer": "Multiple instruction streams analyzing the same incoming dataset",
        "wrong": [
          "A single processor executing sequential instructions on data",
          "One instruction stream simultaneously handling many data values",
          "Independent processors executing separate tasks on unique data"
        ],
        "explanation": "Multiple instructions acting on a single data stream is MISD."
      },
      {
        "id": "prelim-a-19",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel program finishes in 2 hours using 16 processors, while the serial version requires 20 hours. A colleague claims the parallel version is always more efficient. Which response is most accurate?",
        "answer": "Coordination overhead can reduce benefits for smaller workloads",
        "wrong": [
          "Parallel systems waste processing resources because of idle time",
          "Additional processors consistently improve efficiency for all workloads",
          "Parallel execution always decreases total processor utilization time"
        ],
        "explanation": "This key was corrected: more processors do not always improve efficiency because overhead can dominate."
      },
      {
        "id": "prelim-a-20",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A developer notices performance decreases after adding more processors because processors spend excessive time exchanging information. Which overhead factor is the likely cause?",
        "answer": "The communication costs associated with transferring shared data",
        "wrong": [
          "The delay occurring when tasks complete and release resources",
          "The licensing restrictions imposed by distributed software vendors",
          "The initialization time required before parallel tasks can begin"
        ],
        "explanation": "Communication overhead can erase the benefits of adding processors."
      },
      {
        "id": "prelim-a-21",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A NUMA architecture links two SMP systems. Processor A accesses local memory in 50ns but remote memory in 150ns. Which statement is most accurate?",
        "answer": "Memory access latency differs between regions in NUMA systems",
        "wrong": [
          "The system qualifies as UMA because processors remain identical",
          "Separate SMP systems require exclusive use of message passing",
          "Cache coherency cannot function correctly in NUMA architectures"
        ],
        "explanation": "NUMA means memory access time is non-uniform and depends on memory location."
      },
      {
        "id": "prelim-a-22",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Why does increasing CPUs in a shared memory system not always improve performance proportionally?",
        "answer": "Traffic contention creates bottlenecks on memory communication paths",
        "wrong": [
          "Shared memory systems cannot expand storage capacity efficiently",
          "Distributed memory becomes mandatory after adding several processors",
          "Shared memory processors cannot execute tasks independently"
        ],
        "explanation": "More CPUs can increase traffic and contention on shared memory paths."
      },
      {
        "id": "prelim-a-23",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel application uses fine-grained granularity. What consequence is most likely?",
        "answer": "Communication overhead becomes larger relative to computation",
        "wrong": [
          "Execution becomes slower because fewer tasks are generated",
          "Distributed architectures become unnecessary for coordination",
          "Communication demands decrease as processor counts increase"
        ],
        "explanation": "Fine-grained tasks communicate frequently, so overhead can become large."
      },
      {
        "id": "prelim-a-24",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What distinguishes distributed shared memory systems from pure distributed memory systems?",
        "answer": "Software creates a shared-memory illusion across distributed nodes",
        "wrong": [
          "Every processor physically accesses one universal memory structure",
          "Communication between machines becomes completely unnecessary",
          "All processors execute identical instructions on identical datasets"
        ],
        "explanation": "DSM hides physical distribution and presents an illusion of shared memory."
      },
      {
        "id": "prelim-a-25",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A MIMD computer may execute tasks non-deterministically. What does this imply for developers?",
        "answer": "Synchronization mechanisms are required to ensure correctness",
        "wrong": [
          "Scientific applications cannot operate reliably on MIMD systems",
          "Deterministic execution is unnecessary in parallel applications",
          "SIMD systems experience more synchronization concerns than MIMD"
        ],
        "explanation": "Non-deterministic execution means synchronization is needed to keep shared results correct."
      }
    ],
    "prelimB": [
      {
        "id": "prelim-b-1",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What distinguishes distributed computing from parallel computing?",
        "answer": "Distributed computing uses multiple networked computers with independent memory spaces",
        "wrong": [
          "Parallel computing depends entirely on wide-area communication architecture systems",
          "Distributed computing always requires identical processors within shared architectures",
          "Parallel computing eliminates coordination between processors during task execution"
        ],
        "explanation": "Distributed computing uses independent networked machines, while parallel computing often focuses on simultaneous execution using multiple processors or cores."
      },
      {
        "id": "prelim-b-2",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which of the following is a key advantage of distributed memory architecture over shared memory?",
        "answer": "Higher scalability through independent nodes added across environments",
        "wrong": [
          "Faster synchronization between tightly coupled computational workloads",
          "Simplified address spaces allowing transparent memory access globally",
          "Lower communication overhead during real-time synchronization across processor groups"
        ],
        "explanation": "Distributed memory can scale by adding independent nodes, each with its own memory."
      },
      {
        "id": "prelim-b-3",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In the von Neumann architecture, what is stored in electronic memory?",
        "answer": "Program instructions together with data required for execution processes",
        "wrong": [
          "Operating system services and communication protocols",
          "Arithmetic processing rules controlling processor execution stages",
          "Hardware interrupt signals coordinating communication between connected input devices"
        ],
        "explanation": "The von Neumann model stores both program instructions and data in memory."
      },
      {
        "id": "prelim-b-4",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the Reduce phase responsible for in MapReduce?",
        "answer": "Combining intermediate outputs into summarized results for final processing stages",
        "wrong": [
          "Splitting data before assigning tasks across processing nodes",
          "Replicating distributed data across clusters for system fault tolerance",
          "Scheduling worker processes during parallel execution of distributed jobs"
        ],
        "explanation": "Reduce combines intermediate Map outputs into final summarized results."
      },
      {
        "id": "prelim-b-5",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which parallel computing resource is specifically mentioned as suitable for machine learning and scientific simulations?",
        "answer": "Graphics processing units (GPUs) enabling repetitive mathematical operations efficiently simultaneously",
        "wrong": [
          "Distributed storage platforms coordinating replicated blocks across computing environments",
          "Symmetric multiprocessing architectures supporting coordinated memory sharing operations globally",
          "Cluster middleware frameworks balancing workloads among geographically separated processors"
        ],
        "explanation": "GPUs are well suited for repetitive parallel mathematical operations used in machine learning and simulations."
      },
      {
        "id": "prelim-b-6",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is a node in the context of parallel computing clusters?",
        "answer": "Independent computers containing processors, memory and networking communication interfaces together",
        "wrong": [
          "Routing hardware connecting distributed systems across communication infrastructure environments",
          "Virtualized services executing distributed applications within cloud infrastructures remotely",
          "Shared processor cores executing synchronized instructions within multiprocessor architectures"
        ],
        "explanation": "A cluster node is a standalone computer with processors, memory, and network interfaces."
      },
      {
        "id": "prelim-b-7",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which statement correctly describes the shared memory inter-process communication model?",
        "answer": "Processes access and coordinate through spaces and regions containing shared information together",
        "wrong": [
          "Processes exchange information exclusively through synchronized message queue communication mechanisms",
          "Processes communicate indirectly using distributed packet switching across network infrastructures",
          "Processes isolate execution environments while communicating through independent storage replication systems"
        ],
        "explanation": "Shared memory IPC lets processes communicate by reading and writing a shared memory region."
      },
      {
        "id": "prelim-b-8",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the primary purpose of synchronization in parallel applications?",
        "answer": "Coordinating concurrent tasks while preventing inconsistent shared data modifications simultaneously",
        "wrong": [
          "Increasing processor speed during independent execution of distributed computational workloads",
          "Minimizing memory allocation requirements across geographically distributed processing environments globally",
          "Reducing network latency between geographically distributed computational resource infrastructures entirely"
        ],
        "explanation": "Synchronization coordinates concurrent work and protects shared data from inconsistent updates."
      },
      {
        "id": "prelim-b-9",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An SMP (Symmetric Multi-Processor) system is characterized by:",
        "answer": "Processors sharing equal access to memory and computing resources together",
        "wrong": [
          "Processors connected geographically using distributed communication infrastructures and middleware frameworks",
          "Nodes maintaining isolated memory spaces without coordinated synchronization mechanisms",
          "Nonuniform memory access architectures requiring specialized optimization and coordination strategies"
        ],
        "explanation": "In SMP, processors share memory and resources with equal access."
      },
      {
        "id": "prelim-b-10",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is message passing described as both useful and slower compared to shared memory communication?",
        "answer": "Message passing requires physical data transfers through operating system communication services",
        "wrong": [
          "Shared memory communication depends entirely upon geographically distributed network infrastructures globally",
          "Variable-length communication reduces synchronization requirements between processing components completely",
          "Message passing architectures require fewer processing distributed computational coordination tasks"
        ],
        "explanation": "Message passing is useful across separate address spaces, but it is slower because data transfer is mediated by the OS or network services."
      },
      {
        "id": "prelim-b-11",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer converts a serial program to run on 16 processors. Total CPU time increases from 4 hours to 48 hours while wall-clock time decreases slightly. What conclusion is most accurate?",
        "answer": "Parallel overhead may reduce overall efficiency when workload distribution across processors consumes resources",
        "wrong": [
          "Additional processors automatically guarantee greater processing resources",
          "Serial execution remains best because synchronization always reduces performance substantially",
          "Processor utilization increases substantially despite application executed across clustered infrastructures"
        ],
        "explanation": "The program may use more total CPU time because overhead, communication, and coordination reduce efficiency."
      },
      {
        "id": "prelim-b-12",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In P2P architecture, each node is both client and server. What makes this fundamentally different from client-server regarding fault tolerance?",
        "answer": "Distributed peer participation removes central dependency while improving system resilience significantly",
        "wrong": [
          "Centralized coordination improves replicated communication routing infrastructures globally",
          "Dedicated servers eliminate synchronization problems during workload distribution between participating systems",
          "Peer architectures depend entirely upon specialized hardware supporting coordinated resource allocation mechanisms"
        ],
        "explanation": "P2P removes a central server dependency, improving resilience compared with a single central server design."
      },
      {
        "id": "prelim-b-13",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A SIMD architecture processes the same data stream for fraud detection, where multiple independent cryptographic algorithms simultaneously analyze the same data stream. Which Flynn classification applies and why?",
        "answer": "MISD because multiple instructions analyze one shared transaction data stream",
        "wrong": [
          "SIMD because identical instructions operate across multiple independent transaction datasets simultaneously",
          "MIMD because processors execute unrelated algorithms using independent transaction processing streams",
          "SISD because transaction processing occurs sequentially through centralized computing architecture exclusively"
        ],
        "explanation": "Multiple instruction streams analyzing the same data stream corresponds to MISD."
      },
      {
        "id": "prelim-b-14",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A grid computing system spans multiple organizations globally. Compare this to cluster computing regarding governance, resource ownership, and scale.",
        "answer": "Grid systems involve distributed governance and heterogeneous resources across organizations globally",
        "wrong": [
          "Cluster systems depend entirely upon geographically separated organizations coordinating shared control",
          "Grid architectures operate exclusively within homogeneous environments managed through centralized administration systems",
          "Cluster infrastructures require distributed governance supporting independently managed computational resource networks worldwide"
        ],
        "explanation": "Grid computing often spans organizations and heterogeneous resources, while clusters are usually more tightly managed."
      },
      {
        "id": "prelim-b-15",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is complexity listed as both a challenge and cost multiplier in parallel software development?",
        "answer": "Concurrent execution coordination increases effort across design, debugging, tuning, and maintenance phases",
        "wrong": [
          "Specialized hardware infrastructures dramatically eliminate software licensing and deployment requirements globally",
          "Parallel programming languages restrict interoperability between distributed applications and operating systems entirely",
          "Proprietary debugging frameworks eliminate open-source development support for distributed computing projects globally"
        ],
        "explanation": "Parallel software adds coordination complexity throughout design, coding, debugging, tuning, and maintenance."
      },
      {
        "id": "prelim-b-16",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A weather forecasting agency must process satellite data from 50 regions simultaneously and independently. What is the most appropriate computing model?",
        "answer": "Embarrassingly parallel distribution supporting independent regional processing tasks simultaneously efficiently",
        "wrong": [
          "Client-server architecture coordinating centralized processing through dedicated communication infrastructures globally",
          "SISD processing executing sequential instructions through synchronized processor architectures exclusively",
          "High-speed serial processing environments minimizing synchronization across distributed computational infrastructures entirely"
        ],
        "explanation": "Independent regional workloads are a good fit for embarrassingly parallel processing."
      },
      {
        "id": "prelim-b-17",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A logistics company stores shipment records across geographically separate data centers. A query must search all locations simultaneously. Which component addresses this?",
        "answer": "Distributed file systems enabling coordinated access across geographically separated storage infrastructures",
        "wrong": [
          "Shared memory architectures supporting centralized synchronization between geographically separated processors globally",
          "Vector processing pipelines accelerating repetitive instructions during sequential database search operations",
          "Symmetric multiprocessing systems coordinating shared memory access between distributed processing systems"
        ],
        "explanation": "Distributed file systems coordinate access to data stored across geographically separated locations."
      },
      {
        "id": "prelim-b-18",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Two processes on different machines connected by a network need to share computation results. Shared memory is unavailable. Which IPC mechanism must they use?",
        "answer": "Message passing through send and receive communication operations across network infrastructures",
        "wrong": [
          "Direct cache coherency mechanisms coordinating memory synchronization between distributed processors continuously",
          "Shared address spaces supporting transparent remote memory access across geographically separated processing systems globally",
          "Uniform memory architectures coordinating synchronized processor access within shared computing environments together"
        ],
        "explanation": "Processes on different machines without shared memory communicate through message passing."
      },
      {
        "id": "prelim-b-19",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A machine learning model trains by splitting datasets into batches processed by GPU cores applying identical operations. Which Flynn taxonomy class describes this?",
        "answer": "SIMD because processing occurs through synchronized instruction execution across processor architectures",
        "wrong": [
          "SISD because processing occurs sequentially through synchronized processor architecture globally",
          "MIMD because processors execute unrelated instructions across multiple independent computational data streams independently",
          "MISD because multiple instruction streams coordinate processing across centralized communication environments globally"
        ],
        "explanation": "GPU cores applying the same operation to many data items are an example of SIMD."
      },
      {
        "id": "prelim-b-20",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An online multiplayer game server crashes but users reconnect seamlessly to a backup server without data loss. Which distributed characteristic enabled this?",
        "answer": "Fault tolerance maintaining service continuity despite failures within distributed computing environments effectively",
        "wrong": [
          "Load balancing distributing computational requests across synchronized server communication infrastructures globally",
          "Scalability mechanisms supporting increased processor coordination during high-demand computational workloads simultaneously",
          "Parallel decomposition separating independent tasks during coordinated distributed application processing operations globally"
        ],
        "explanation": "Fault tolerance allows service continuity when a server fails."
      },
      {
        "id": "prelim-b-21",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A university shares CPU cycles from multiple countries to simulate protein folding. Which distributed architecture best fits?",
        "answer": "Grid computing integrating heterogeneous resources from geographically distributed organizations collaboratively worldwide",
        "wrong": [
          "Cluster computing supporting homogeneous systems managed through centralized administrative infrastructures together",
          "Peer-to-peer architectures coordinating decentralized file exchanges between participating computational environments globally",
          "Client-server computing centralizing resource allocation through dedicated administrative infrastructure globally"
        ],
        "explanation": "Grid computing fits geographically distributed, heterogeneous resources across organizations."
      },
      {
        "id": "prelim-b-22",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel program splits work into microtasks constantly exchanging small updates. Performance becomes worse than the serial version. What is the most likely cause?",
        "answer": "Excessive communication overhead caused by extremely fine-grained task decomposition strategies continuously",
        "wrong": [
          "Coarse-grained decomposition reducing synchronization requirements across distributed processing environments entirely globally",
          "Distributed memory architectures providing synchronized communication between computational microtasks completely",
          "Processor underutilization resulting from insufficient workload distribution across available computing infrastructures globally"
        ],
        "explanation": "Fine-grained work can communicate so frequently that overhead outweighs parallel speedup."
      },
      {
        "id": "prelim-b-23",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A social media recommendation engine processes different users with different algorithms simultaneously across thousands of servers. Which Flynn classification applies?",
        "answer": "MIMD because independent instructions process separate datasets across distributed processors concurrently",
        "wrong": [
          "SIMD because identical operations process recommendation datasets simultaneously together",
          "SISD because execution remains sequential through centralized algorithmic processing architectures exclusively",
          "MISD because multiple algorithms analyze synchronized datasets through coordinated instruction execution simultaneously"
        ],
        "explanation": "Different algorithms on separate user datasets across many servers is MIMD."
      },
      {
        "id": "prelim-b-24",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer prioritizes simpler programming over system-level efficiency when choosing between fixed-size and variable-size messages. Which should they choose?",
        "answer": "Variable-size messages simplifying application programming despite increased implementation complexity internally globally",
        "wrong": [
          "Fixed-size messages because implementation through predictable communication packet structures globally",
          "Fixed-size communication structures automatically supporting flexible distributed application requirements completely",
          "Variable-length communication packets consistently reducing transmission overhead across distributed infrastructures worldwide"
        ],
        "explanation": "Variable-size messages require more system-level implementation but make the programming task simpler."
      },
      {
        "id": "prelim-b-25",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel scientific simulation runs correctly on 8 processors but produces inconsistent results on 32 processors. What is the most likely cause?",
        "answer": "Improper synchronization causing race conditions during larger-scale parallel execution environments simultaneously",
        "wrong": [
          "Network communication bandwidth preventing synchronization between distributed processing environments effectively globally",
          "NUMA architectures introducing incompatible processor communication patterns during synchronized computational execution processes",
          "Insufficient memory allocation preventing processor coordination across distributed computational workloads successfully"
        ],
        "explanation": "Inconsistent results at larger scale often point to race conditions from improper synchronization."
      }
    ],
    "combinedPrelim": [
      {
        "id": "prelim-a-1",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the primary objective of parallel computing systems?",
        "answer": "Reducing program execution time through simultaneous processing",
        "wrong": [
          "Improving reliability by duplicating hardware resources",
          "Organizing large databases across independent machines",
          "Expanding network connectivity between computer systems"
        ],
        "explanation": "Parallel computing uses simultaneous processing to reduce wall-clock execution time."
      },
      {
        "id": "prelim-a-2",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "In shared memory programming, what is a major responsibility of the developer?",
        "answer": "Coordinating synchronization to prevent race conditions",
        "wrong": [
          "Managing distributed file replication across clusters",
          "Configuring communication protocols between remote nodes",
          "Creating routing policies for message transmission systems"
        ],
        "explanation": "Shared memory is fast, but the developer must protect shared data with synchronization."
      },
      {
        "id": "prelim-a-3",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which option best represents distributed computing?",
        "answer": "A Hadoop cluster analyzing massive datasets collaboratively",
        "wrong": [
          "A graphics card rendering frames for a video game",
          "A desktop processor running several browser applications",
          "A laptop processor executing spreadsheet calculations locally"
        ],
        "explanation": "A Hadoop cluster is made of multiple computers collaborating across a network."
      },
      {
        "id": "prelim-a-4",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the main function of the Map phase in MapReduce?",
        "answer": "Splitting data into segments for simultaneous computation",
        "wrong": [
          "Saving generated outputs within distributed storage systems",
          "Directing communication requests among participating servers",
          "Combining processed results into a completed final output"
        ],
        "explanation": "The Map phase splits and processes chunks in parallel. Reduce combines the intermediate results."
      },
      {
        "id": "prelim-a-5",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture provides each processor with independent local memory?",
        "answer": "An architecture using separate local memory per processor",
        "wrong": [
          "A multiprocessing model built around centralized memory access",
          "A design where memory latency varies between processors",
          "A memory structure where all processors share equal access"
        ],
        "explanation": "Distributed memory gives processors or nodes their own local memory."
      },
      {
        "id": "prelim-a-6",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which pair of operations forms the basis of message passing systems?",
        "answer": "Sending information packets and receiving transmitted data",
        "wrong": [
          "Reading information and writing information to storage",
          "Allocating memory blocks and releasing unused resources",
          "Encoding communication streams and decoding transferred signals"
        ],
        "explanation": "Message passing is built on send and receive operations."
      },
      {
        "id": "prelim-a-7",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture allows every node to function as both client and server?",
        "answer": "A decentralized model where nodes share equal responsibilities",
        "wrong": [
          "A processing framework based on mapping and reducing tasks",
          "A cloud platform distributing applications through virtual servers",
          "A centralized system controlled by dedicated server machines"
        ],
        "explanation": "Peer-to-peer architecture gives each node both client and server roles."
      },
      {
        "id": "prelim-a-8",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Flynn's taxonomy categorizes parallel systems according to what criteria?",
        "answer": "The arrangement of instruction streams and data streams",
        "wrong": [
          "The operating systems and processor manufacturing designs",
          "The communication speed and network transmission capacity",
          "The quantity of processors and available memory resources"
        ],
        "explanation": "Flynn's taxonomy uses instruction streams and data streams."
      },
      {
        "id": "prelim-a-9",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A computer executing one instruction stream on one data stream belongs to which category?",
        "answer": "A system processing one instruction and one data stream",
        "wrong": [
          "A model supporting multiple instructions on shared datasets",
          "A configuration applying varied operations to identical inputs",
          "A structure executing many tasks across separate processors"
        ],
        "explanation": "Single Instruction, Single Data is SISD, the classic serial category."
      },
      {
        "id": "prelim-a-10",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which term describes the relationship between computation and communication in parallel systems?",
        "answer": "The balance between computational work and communication",
        "wrong": [
          "The quantity of completed operations within a time period",
          "The delay experienced during data transfer between systems",
          "The capability of a system to increase processing capacity"
        ],
        "explanation": "Granularity describes the ratio or balance between computation and communication."
      },
      {
        "id": "prelim-a-11",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A hospital system must analyze millions of patient records for an AI diagnosis platform. Their current single-server setup requires 72 hours to finish processing. Which approach is most appropriate?",
        "answer": "Using parallel processing across multiple processing cores",
        "wrong": [
          "Migrating services toward a decentralized peer network design",
          "Replacing the current processor with a higher clock-speed model",
          "Implementing a traditional client-server communication structure"
        ],
        "explanation": "Large analysis workloads can be split and processed in parallel to reduce completion time."
      },
      {
        "id": "prelim-a-12",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "An online shopping platform experiences severe slowdowns during holiday traffic spikes. The company wants to increase server capacity without redesigning the application. Which distributed computing characteristic best solves this issue?",
        "answer": "The ability to scale resources efficiently as demand grows",
        "wrong": [
          "A single instruction single data processing organization",
          "Uniform processor access to centrally managed memory blocks",
          "A memory-sharing structure across connected processing units"
        ],
        "explanation": "Scalability lets a distributed or cloud system add resources as demand grows."
      },
      {
        "id": "prelim-a-13",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "During a climate simulation, one node in a computing cluster unexpectedly crashes. The simulation continues operating successfully without losing results. Which distributed computing feature enabled this?",
        "answer": "Maintaining operation despite hardware or software failures",
        "wrong": [
          "Exchanging information continuously between independent processes",
          "Executing instructions sequentially through staged processing units",
          "Automatically distributing workloads across active processors evenly"
        ],
        "explanation": "Fault tolerance means the system can keep operating despite component failures."
      },
      {
        "id": "prelim-a-14",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A rendering studio divides a 4K movie into thousands of independent frames processed simultaneously across 200 computers. Which concept best describes this situation?",
        "answer": "Large processing tasks divided into loosely connected workloads",
        "wrong": [
          "Multiple instruction streams operating on identical data values",
          "A memory-sharing approach spanning several distributed systems",
          "Highly independent tasks executed simultaneously without interaction"
        ],
        "explanation": "This is coarse-grained or embarrassingly parallel work: large tasks split into mostly independent units."
      },
      {
        "id": "prelim-a-15",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Two processors running on the same machine frequently exchange extremely large datasets. Performance speed is the highest priority. Which communication method is most suitable?",
        "answer": "Shared memory because it minimizes communication overhead costs",
        "wrong": [
          "Shared memory because synchronization is completely unnecessary",
          "Message passing because operating system calls improve protection",
          "Message passing because it supports communication across networks"
        ],
        "explanation": "Shared memory is usually faster for large same-machine data exchange because it avoids per-message overhead."
      },
      {
        "id": "prelim-a-16",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A startup rapidly increases from 5 to 50 virtual machines during a product launch, then reduces usage afterward. Which computing model makes this possible?",
        "answer": "An elastic infrastructure delivered through cloud platforms",
        "wrong": [
          "A tightly coupled cluster operating within one local network",
          "A decentralized network without dedicated control mechanisms",
          "A grid-based environment connecting geographically separated systems"
        ],
        "explanation": "Cloud computing provides elastic, on-demand resources."
      },
      {
        "id": "prelim-a-17",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A graphics processor applies the same blur operation simultaneously across thousands of image pixels. Which Flynn taxonomy category best represents this process?",
        "answer": "A single operation applied simultaneously to multiple datasets",
        "wrong": [
          "One instruction stream operating on one sequence of data",
          "Multiple operations performed on one shared stream of data",
          "Different instructions executing independently across many datasets"
        ],
        "explanation": "SIMD applies a single instruction or operation across many data elements."
      },
      {
        "id": "prelim-a-18",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Engineers design a fraud-detection system where several processors perform different analyses on the same transaction stream. Which Flynn classification matches this setup?",
        "answer": "Multiple instruction streams analyzing the same incoming dataset",
        "wrong": [
          "A single processor executing sequential instructions on data",
          "One instruction stream simultaneously handling many data values",
          "Independent processors executing separate tasks on unique data"
        ],
        "explanation": "Multiple instructions acting on a single data stream is MISD."
      },
      {
        "id": "prelim-a-19",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel program finishes in 2 hours using 16 processors, while the serial version requires 20 hours. A colleague claims the parallel version is always more efficient. Which response is most accurate?",
        "answer": "Coordination overhead can reduce benefits for smaller workloads",
        "wrong": [
          "Parallel systems waste processing resources because of idle time",
          "Additional processors consistently improve efficiency for all workloads",
          "Parallel execution always decreases total processor utilization time"
        ],
        "explanation": "This key was corrected: more processors do not always improve efficiency because overhead can dominate."
      },
      {
        "id": "prelim-a-20",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A developer notices performance decreases after adding more processors because processors spend excessive time exchanging information. Which overhead factor is the likely cause?",
        "answer": "The communication costs associated with transferring shared data",
        "wrong": [
          "The delay occurring when tasks complete and release resources",
          "The licensing restrictions imposed by distributed software vendors",
          "The initialization time required before parallel tasks can begin"
        ],
        "explanation": "Communication overhead can erase the benefits of adding processors."
      },
      {
        "id": "prelim-a-21",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A NUMA architecture links two SMP systems. Processor A accesses local memory in 50ns but remote memory in 150ns. Which statement is most accurate?",
        "answer": "Memory access latency differs between regions in NUMA systems",
        "wrong": [
          "The system qualifies as UMA because processors remain identical",
          "Separate SMP systems require exclusive use of message passing",
          "Cache coherency cannot function correctly in NUMA architectures"
        ],
        "explanation": "NUMA means memory access time is non-uniform and depends on memory location."
      },
      {
        "id": "prelim-a-22",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Why does increasing CPUs in a shared memory system not always improve performance proportionally?",
        "answer": "Traffic contention creates bottlenecks on memory communication paths",
        "wrong": [
          "Shared memory systems cannot expand storage capacity efficiently",
          "Distributed memory becomes mandatory after adding several processors",
          "Shared memory processors cannot execute tasks independently"
        ],
        "explanation": "More CPUs can increase traffic and contention on shared memory paths."
      },
      {
        "id": "prelim-a-23",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel application uses fine-grained granularity. What consequence is most likely?",
        "answer": "Communication overhead becomes larger relative to computation",
        "wrong": [
          "Execution becomes slower because fewer tasks are generated",
          "Distributed architectures become unnecessary for coordination",
          "Communication demands decrease as processor counts increase"
        ],
        "explanation": "Fine-grained tasks communicate frequently, so overhead can become large."
      },
      {
        "id": "prelim-a-24",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What distinguishes distributed shared memory systems from pure distributed memory systems?",
        "answer": "Software creates a shared-memory illusion across distributed nodes",
        "wrong": [
          "Every processor physically accesses one universal memory structure",
          "Communication between machines becomes completely unnecessary",
          "All processors execute identical instructions on identical datasets"
        ],
        "explanation": "DSM hides physical distribution and presents an illusion of shared memory."
      },
      {
        "id": "prelim-a-25",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A MIMD computer may execute tasks non-deterministically. What does this imply for developers?",
        "answer": "Synchronization mechanisms are required to ensure correctness",
        "wrong": [
          "Scientific applications cannot operate reliably on MIMD systems",
          "Deterministic execution is unnecessary in parallel applications",
          "SIMD systems experience more synchronization concerns than MIMD"
        ],
        "explanation": "Non-deterministic execution means synchronization is needed to keep shared results correct."
      },
      {
        "id": "prelim-b-1",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What distinguishes distributed computing from parallel computing?",
        "answer": "Distributed computing uses multiple networked computers with independent memory spaces",
        "wrong": [
          "Parallel computing depends entirely on wide-area communication architecture systems",
          "Distributed computing always requires identical processors within shared architectures",
          "Parallel computing eliminates coordination between processors during task execution"
        ],
        "explanation": "Distributed computing uses independent networked machines, while parallel computing often focuses on simultaneous execution using multiple processors or cores."
      },
      {
        "id": "prelim-b-2",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which of the following is a key advantage of distributed memory architecture over shared memory?",
        "answer": "Higher scalability through independent nodes added across environments",
        "wrong": [
          "Faster synchronization between tightly coupled computational workloads",
          "Simplified address spaces allowing transparent memory access globally",
          "Lower communication overhead during real-time synchronization across processor groups"
        ],
        "explanation": "Distributed memory can scale by adding independent nodes, each with its own memory."
      },
      {
        "id": "prelim-b-3",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In the von Neumann architecture, what is stored in electronic memory?",
        "answer": "Program instructions together with data required for execution processes",
        "wrong": [
          "Operating system services and communication protocols",
          "Arithmetic processing rules controlling processor execution stages",
          "Hardware interrupt signals coordinating communication between connected input devices"
        ],
        "explanation": "The von Neumann model stores both program instructions and data in memory."
      },
      {
        "id": "prelim-b-4",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the Reduce phase responsible for in MapReduce?",
        "answer": "Combining intermediate outputs into summarized results for final processing stages",
        "wrong": [
          "Splitting data before assigning tasks across processing nodes",
          "Replicating distributed data across clusters for system fault tolerance",
          "Scheduling worker processes during parallel execution of distributed jobs"
        ],
        "explanation": "Reduce combines intermediate Map outputs into final summarized results."
      },
      {
        "id": "prelim-b-5",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which parallel computing resource is specifically mentioned as suitable for machine learning and scientific simulations?",
        "answer": "Graphics processing units (GPUs) enabling repetitive mathematical operations efficiently simultaneously",
        "wrong": [
          "Distributed storage platforms coordinating replicated blocks across computing environments",
          "Symmetric multiprocessing architectures supporting coordinated memory sharing operations globally",
          "Cluster middleware frameworks balancing workloads among geographically separated processors"
        ],
        "explanation": "GPUs are well suited for repetitive parallel mathematical operations used in machine learning and simulations."
      },
      {
        "id": "prelim-b-6",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is a node in the context of parallel computing clusters?",
        "answer": "Independent computers containing processors, memory and networking communication interfaces together",
        "wrong": [
          "Routing hardware connecting distributed systems across communication infrastructure environments",
          "Virtualized services executing distributed applications within cloud infrastructures remotely",
          "Shared processor cores executing synchronized instructions within multiprocessor architectures"
        ],
        "explanation": "A cluster node is a standalone computer with processors, memory, and network interfaces."
      },
      {
        "id": "prelim-b-7",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which statement correctly describes the shared memory inter-process communication model?",
        "answer": "Processes access and coordinate through spaces and regions containing shared information together",
        "wrong": [
          "Processes exchange information exclusively through synchronized message queue communication mechanisms",
          "Processes communicate indirectly using distributed packet switching across network infrastructures",
          "Processes isolate execution environments while communicating through independent storage replication systems"
        ],
        "explanation": "Shared memory IPC lets processes communicate by reading and writing a shared memory region."
      },
      {
        "id": "prelim-b-8",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the primary purpose of synchronization in parallel applications?",
        "answer": "Coordinating concurrent tasks while preventing inconsistent shared data modifications simultaneously",
        "wrong": [
          "Increasing processor speed during independent execution of distributed computational workloads",
          "Minimizing memory allocation requirements across geographically distributed processing environments globally",
          "Reducing network latency between geographically distributed computational resource infrastructures entirely"
        ],
        "explanation": "Synchronization coordinates concurrent work and protects shared data from inconsistent updates."
      },
      {
        "id": "prelim-b-9",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An SMP (Symmetric Multi-Processor) system is characterized by:",
        "answer": "Processors sharing equal access to memory and computing resources together",
        "wrong": [
          "Processors connected geographically using distributed communication infrastructures and middleware frameworks",
          "Nodes maintaining isolated memory spaces without coordinated synchronization mechanisms",
          "Nonuniform memory access architectures requiring specialized optimization and coordination strategies"
        ],
        "explanation": "In SMP, processors share memory and resources with equal access."
      },
      {
        "id": "prelim-b-10",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is message passing described as both useful and slower compared to shared memory communication?",
        "answer": "Message passing requires physical data transfers through operating system communication services",
        "wrong": [
          "Shared memory communication depends entirely upon geographically distributed network infrastructures globally",
          "Variable-length communication reduces synchronization requirements between processing components completely",
          "Message passing architectures require fewer processing distributed computational coordination tasks"
        ],
        "explanation": "Message passing is useful across separate address spaces, but it is slower because data transfer is mediated by the OS or network services."
      },
      {
        "id": "prelim-b-11",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer converts a serial program to run on 16 processors. Total CPU time increases from 4 hours to 48 hours while wall-clock time decreases slightly. What conclusion is most accurate?",
        "answer": "Parallel overhead may reduce overall efficiency when workload distribution across processors consumes resources",
        "wrong": [
          "Additional processors automatically guarantee greater processing resources",
          "Serial execution remains best because synchronization always reduces performance substantially",
          "Processor utilization increases substantially despite application executed across clustered infrastructures"
        ],
        "explanation": "The program may use more total CPU time because overhead, communication, and coordination reduce efficiency."
      },
      {
        "id": "prelim-b-12",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In P2P architecture, each node is both client and server. What makes this fundamentally different from client-server regarding fault tolerance?",
        "answer": "Distributed peer participation removes central dependency while improving system resilience significantly",
        "wrong": [
          "Centralized coordination improves replicated communication routing infrastructures globally",
          "Dedicated servers eliminate synchronization problems during workload distribution between participating systems",
          "Peer architectures depend entirely upon specialized hardware supporting coordinated resource allocation mechanisms"
        ],
        "explanation": "P2P removes a central server dependency, improving resilience compared with a single central server design."
      },
      {
        "id": "prelim-b-13",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A SIMD architecture processes the same data stream for fraud detection, where multiple independent cryptographic algorithms simultaneously analyze the same data stream. Which Flynn classification applies and why?",
        "answer": "MISD because multiple instructions analyze one shared transaction data stream",
        "wrong": [
          "SIMD because identical instructions operate across multiple independent transaction datasets simultaneously",
          "MIMD because processors execute unrelated algorithms using independent transaction processing streams",
          "SISD because transaction processing occurs sequentially through centralized computing architecture exclusively"
        ],
        "explanation": "Multiple instruction streams analyzing the same data stream corresponds to MISD."
      },
      {
        "id": "prelim-b-14",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A grid computing system spans multiple organizations globally. Compare this to cluster computing regarding governance, resource ownership, and scale.",
        "answer": "Grid systems involve distributed governance and heterogeneous resources across organizations globally",
        "wrong": [
          "Cluster systems depend entirely upon geographically separated organizations coordinating shared control",
          "Grid architectures operate exclusively within homogeneous environments managed through centralized administration systems",
          "Cluster infrastructures require distributed governance supporting independently managed computational resource networks worldwide"
        ],
        "explanation": "Grid computing often spans organizations and heterogeneous resources, while clusters are usually more tightly managed."
      },
      {
        "id": "prelim-b-15",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is complexity listed as both a challenge and cost multiplier in parallel software development?",
        "answer": "Concurrent execution coordination increases effort across design, debugging, tuning, and maintenance phases",
        "wrong": [
          "Specialized hardware infrastructures dramatically eliminate software licensing and deployment requirements globally",
          "Parallel programming languages restrict interoperability between distributed applications and operating systems entirely",
          "Proprietary debugging frameworks eliminate open-source development support for distributed computing projects globally"
        ],
        "explanation": "Parallel software adds coordination complexity throughout design, coding, debugging, tuning, and maintenance."
      },
      {
        "id": "prelim-b-16",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A weather forecasting agency must process satellite data from 50 regions simultaneously and independently. What is the most appropriate computing model?",
        "answer": "Embarrassingly parallel distribution supporting independent regional processing tasks simultaneously efficiently",
        "wrong": [
          "Client-server architecture coordinating centralized processing through dedicated communication infrastructures globally",
          "SISD processing executing sequential instructions through synchronized processor architectures exclusively",
          "High-speed serial processing environments minimizing synchronization across distributed computational infrastructures entirely"
        ],
        "explanation": "Independent regional workloads are a good fit for embarrassingly parallel processing."
      },
      {
        "id": "prelim-b-17",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A logistics company stores shipment records across geographically separate data centers. A query must search all locations simultaneously. Which component addresses this?",
        "answer": "Distributed file systems enabling coordinated access across geographically separated storage infrastructures",
        "wrong": [
          "Shared memory architectures supporting centralized synchronization between geographically separated processors globally",
          "Vector processing pipelines accelerating repetitive instructions during sequential database search operations",
          "Symmetric multiprocessing systems coordinating shared memory access between distributed processing systems"
        ],
        "explanation": "Distributed file systems coordinate access to data stored across geographically separated locations."
      },
      {
        "id": "prelim-b-18",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Two processes on different machines connected by a network need to share computation results. Shared memory is unavailable. Which IPC mechanism must they use?",
        "answer": "Message passing through send and receive communication operations across network infrastructures",
        "wrong": [
          "Direct cache coherency mechanisms coordinating memory synchronization between distributed processors continuously",
          "Shared address spaces supporting transparent remote memory access across geographically separated processing systems globally",
          "Uniform memory architectures coordinating synchronized processor access within shared computing environments together"
        ],
        "explanation": "Processes on different machines without shared memory communicate through message passing."
      },
      {
        "id": "prelim-b-19",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A machine learning model trains by splitting datasets into batches processed by GPU cores applying identical operations. Which Flynn taxonomy class describes this?",
        "answer": "SIMD because processing occurs through synchronized instruction execution across processor architectures",
        "wrong": [
          "SISD because processing occurs sequentially through synchronized processor architecture globally",
          "MIMD because processors execute unrelated instructions across multiple independent computational data streams independently",
          "MISD because multiple instruction streams coordinate processing across centralized communication environments globally"
        ],
        "explanation": "GPU cores applying the same operation to many data items are an example of SIMD."
      },
      {
        "id": "prelim-b-20",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An online multiplayer game server crashes but users reconnect seamlessly to a backup server without data loss. Which distributed characteristic enabled this?",
        "answer": "Fault tolerance maintaining service continuity despite failures within distributed computing environments effectively",
        "wrong": [
          "Load balancing distributing computational requests across synchronized server communication infrastructures globally",
          "Scalability mechanisms supporting increased processor coordination during high-demand computational workloads simultaneously",
          "Parallel decomposition separating independent tasks during coordinated distributed application processing operations globally"
        ],
        "explanation": "Fault tolerance allows service continuity when a server fails."
      },
      {
        "id": "prelim-b-21",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A university shares CPU cycles from multiple countries to simulate protein folding. Which distributed architecture best fits?",
        "answer": "Grid computing integrating heterogeneous resources from geographically distributed organizations collaboratively worldwide",
        "wrong": [
          "Cluster computing supporting homogeneous systems managed through centralized administrative infrastructures together",
          "Peer-to-peer architectures coordinating decentralized file exchanges between participating computational environments globally",
          "Client-server computing centralizing resource allocation through dedicated administrative infrastructure globally"
        ],
        "explanation": "Grid computing fits geographically distributed, heterogeneous resources across organizations."
      },
      {
        "id": "prelim-b-22",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel program splits work into microtasks constantly exchanging small updates. Performance becomes worse than the serial version. What is the most likely cause?",
        "answer": "Excessive communication overhead caused by extremely fine-grained task decomposition strategies continuously",
        "wrong": [
          "Coarse-grained decomposition reducing synchronization requirements across distributed processing environments entirely globally",
          "Distributed memory architectures providing synchronized communication between computational microtasks completely",
          "Processor underutilization resulting from insufficient workload distribution across available computing infrastructures globally"
        ],
        "explanation": "Fine-grained work can communicate so frequently that overhead outweighs parallel speedup."
      },
      {
        "id": "prelim-b-23",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A social media recommendation engine processes different users with different algorithms simultaneously across thousands of servers. Which Flynn classification applies?",
        "answer": "MIMD because independent instructions process separate datasets across distributed processors concurrently",
        "wrong": [
          "SIMD because identical operations process recommendation datasets simultaneously together",
          "SISD because execution remains sequential through centralized algorithmic processing architectures exclusively",
          "MISD because multiple algorithms analyze synchronized datasets through coordinated instruction execution simultaneously"
        ],
        "explanation": "Different algorithms on separate user datasets across many servers is MIMD."
      },
      {
        "id": "prelim-b-24",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer prioritizes simpler programming over system-level efficiency when choosing between fixed-size and variable-size messages. Which should they choose?",
        "answer": "Variable-size messages simplifying application programming despite increased implementation complexity internally globally",
        "wrong": [
          "Fixed-size messages because implementation through predictable communication packet structures globally",
          "Fixed-size communication structures automatically supporting flexible distributed application requirements completely",
          "Variable-length communication packets consistently reducing transmission overhead across distributed infrastructures worldwide"
        ],
        "explanation": "Variable-size messages require more system-level implementation but make the programming task simpler."
      },
      {
        "id": "prelim-b-25",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel scientific simulation runs correctly on 8 processors but produces inconsistent results on 32 processors. What is the most likely cause?",
        "answer": "Improper synchronization causing race conditions during larger-scale parallel execution environments simultaneously",
        "wrong": [
          "Network communication bandwidth preventing synchronization between distributed processing environments effectively globally",
          "NUMA architectures introducing incompatible processor communication patterns during synchronized computational execution processes",
          "Insufficient memory allocation preventing processor coordination across distributed computational workloads successfully"
        ],
        "explanation": "Inconsistent results at larger scale often point to race conditions from improper synchronization."
      }
    ],
    "combinedPrelimA": [
      {
        "id": "prelim-a-1",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the primary objective of parallel computing systems?",
        "answer": "Reducing program execution time through simultaneous processing",
        "wrong": [
          "Improving reliability by duplicating hardware resources",
          "Organizing large databases across independent machines",
          "Expanding network connectivity between computer systems"
        ],
        "explanation": "Parallel computing uses simultaneous processing to reduce wall-clock execution time."
      },
      {
        "id": "prelim-a-2",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "In shared memory programming, what is a major responsibility of the developer?",
        "answer": "Coordinating synchronization to prevent race conditions",
        "wrong": [
          "Managing distributed file replication across clusters",
          "Configuring communication protocols between remote nodes",
          "Creating routing policies for message transmission systems"
        ],
        "explanation": "Shared memory is fast, but the developer must protect shared data with synchronization."
      },
      {
        "id": "prelim-a-3",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which option best represents distributed computing?",
        "answer": "A Hadoop cluster analyzing massive datasets collaboratively",
        "wrong": [
          "A graphics card rendering frames for a video game",
          "A desktop processor running several browser applications",
          "A laptop processor executing spreadsheet calculations locally"
        ],
        "explanation": "A Hadoop cluster is made of multiple computers collaborating across a network."
      },
      {
        "id": "prelim-a-4",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the main function of the Map phase in MapReduce?",
        "answer": "Splitting data into segments for simultaneous computation",
        "wrong": [
          "Saving generated outputs within distributed storage systems",
          "Directing communication requests among participating servers",
          "Combining processed results into a completed final output"
        ],
        "explanation": "The Map phase splits and processes chunks in parallel. Reduce combines the intermediate results."
      },
      {
        "id": "prelim-a-5",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture provides each processor with independent local memory?",
        "answer": "An architecture using separate local memory per processor",
        "wrong": [
          "A multiprocessing model built around centralized memory access",
          "A design where memory latency varies between processors",
          "A memory structure where all processors share equal access"
        ],
        "explanation": "Distributed memory gives processors or nodes their own local memory."
      },
      {
        "id": "prelim-a-6",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which pair of operations forms the basis of message passing systems?",
        "answer": "Sending information packets and receiving transmitted data",
        "wrong": [
          "Reading information and writing information to storage",
          "Allocating memory blocks and releasing unused resources",
          "Encoding communication streams and decoding transferred signals"
        ],
        "explanation": "Message passing is built on send and receive operations."
      },
      {
        "id": "prelim-a-7",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture allows every node to function as both client and server?",
        "answer": "A decentralized model where nodes share equal responsibilities",
        "wrong": [
          "A processing framework based on mapping and reducing tasks",
          "A cloud platform distributing applications through virtual servers",
          "A centralized system controlled by dedicated server machines"
        ],
        "explanation": "Peer-to-peer architecture gives each node both client and server roles."
      },
      {
        "id": "prelim-a-8",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Flynn's taxonomy categorizes parallel systems according to what criteria?",
        "answer": "The arrangement of instruction streams and data streams",
        "wrong": [
          "The operating systems and processor manufacturing designs",
          "The communication speed and network transmission capacity",
          "The quantity of processors and available memory resources"
        ],
        "explanation": "Flynn's taxonomy uses instruction streams and data streams."
      },
      {
        "id": "prelim-a-9",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A computer executing one instruction stream on one data stream belongs to which category?",
        "answer": "A system processing one instruction and one data stream",
        "wrong": [
          "A model supporting multiple instructions on shared datasets",
          "A configuration applying varied operations to identical inputs",
          "A structure executing many tasks across separate processors"
        ],
        "explanation": "Single Instruction, Single Data is SISD, the classic serial category."
      },
      {
        "id": "prelim-a-10",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which term describes the relationship between computation and communication in parallel systems?",
        "answer": "The balance between computational work and communication",
        "wrong": [
          "The quantity of completed operations within a time period",
          "The delay experienced during data transfer between systems",
          "The capability of a system to increase processing capacity"
        ],
        "explanation": "Granularity describes the ratio or balance between computation and communication."
      },
      {
        "id": "prelim-a-11",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A hospital system must analyze millions of patient records for an AI diagnosis platform. Their current single-server setup requires 72 hours to finish processing. Which approach is most appropriate?",
        "answer": "Using parallel processing across multiple processing cores",
        "wrong": [
          "Migrating services toward a decentralized peer network design",
          "Replacing the current processor with a higher clock-speed model",
          "Implementing a traditional client-server communication structure"
        ],
        "explanation": "Large analysis workloads can be split and processed in parallel to reduce completion time."
      },
      {
        "id": "prelim-a-12",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "An online shopping platform experiences severe slowdowns during holiday traffic spikes. The company wants to increase server capacity without redesigning the application. Which distributed computing characteristic best solves this issue?",
        "answer": "The ability to scale resources efficiently as demand grows",
        "wrong": [
          "A single instruction single data processing organization",
          "Uniform processor access to centrally managed memory blocks",
          "A memory-sharing structure across connected processing units"
        ],
        "explanation": "Scalability lets a distributed or cloud system add resources as demand grows."
      },
      {
        "id": "prelim-a-13",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "During a climate simulation, one node in a computing cluster unexpectedly crashes. The simulation continues operating successfully without losing results. Which distributed computing feature enabled this?",
        "answer": "Maintaining operation despite hardware or software failures",
        "wrong": [
          "Exchanging information continuously between independent processes",
          "Executing instructions sequentially through staged processing units",
          "Automatically distributing workloads across active processors evenly"
        ],
        "explanation": "Fault tolerance means the system can keep operating despite component failures."
      },
      {
        "id": "prelim-a-14",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A rendering studio divides a 4K movie into thousands of independent frames processed simultaneously across 200 computers. Which concept best describes this situation?",
        "answer": "Large processing tasks divided into loosely connected workloads",
        "wrong": [
          "Multiple instruction streams operating on identical data values",
          "A memory-sharing approach spanning several distributed systems",
          "Highly independent tasks executed simultaneously without interaction"
        ],
        "explanation": "This is coarse-grained or embarrassingly parallel work: large tasks split into mostly independent units."
      },
      {
        "id": "prelim-a-15",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Two processors running on the same machine frequently exchange extremely large datasets. Performance speed is the highest priority. Which communication method is most suitable?",
        "answer": "Shared memory because it minimizes communication overhead costs",
        "wrong": [
          "Shared memory because synchronization is completely unnecessary",
          "Message passing because operating system calls improve protection",
          "Message passing because it supports communication across networks"
        ],
        "explanation": "Shared memory is usually faster for large same-machine data exchange because it avoids per-message overhead."
      },
      {
        "id": "prelim-a-16",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A startup rapidly increases from 5 to 50 virtual machines during a product launch, then reduces usage afterward. Which computing model makes this possible?",
        "answer": "An elastic infrastructure delivered through cloud platforms",
        "wrong": [
          "A tightly coupled cluster operating within one local network",
          "A decentralized network without dedicated control mechanisms",
          "A grid-based environment connecting geographically separated systems"
        ],
        "explanation": "Cloud computing provides elastic, on-demand resources."
      },
      {
        "id": "prelim-a-17",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A graphics processor applies the same blur operation simultaneously across thousands of image pixels. Which Flynn taxonomy category best represents this process?",
        "answer": "A single operation applied simultaneously to multiple datasets",
        "wrong": [
          "One instruction stream operating on one sequence of data",
          "Multiple operations performed on one shared stream of data",
          "Different instructions executing independently across many datasets"
        ],
        "explanation": "SIMD applies a single instruction or operation across many data elements."
      },
      {
        "id": "prelim-a-18",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Engineers design a fraud-detection system where several processors perform different analyses on the same transaction stream. Which Flynn classification matches this setup?",
        "answer": "Multiple instruction streams analyzing the same incoming dataset",
        "wrong": [
          "A single processor executing sequential instructions on data",
          "One instruction stream simultaneously handling many data values",
          "Independent processors executing separate tasks on unique data"
        ],
        "explanation": "Multiple instructions acting on a single data stream is MISD."
      },
      {
        "id": "prelim-a-19",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel program finishes in 2 hours using 16 processors, while the serial version requires 20 hours. A colleague claims the parallel version is always more efficient. Which response is most accurate?",
        "answer": "Coordination overhead can reduce benefits for smaller workloads",
        "wrong": [
          "Parallel systems waste processing resources because of idle time",
          "Additional processors consistently improve efficiency for all workloads",
          "Parallel execution always decreases total processor utilization time"
        ],
        "explanation": "This key was corrected: more processors do not always improve efficiency because overhead can dominate."
      },
      {
        "id": "prelim-a-20",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A developer notices performance decreases after adding more processors because processors spend excessive time exchanging information. Which overhead factor is the likely cause?",
        "answer": "The communication costs associated with transferring shared data",
        "wrong": [
          "The delay occurring when tasks complete and release resources",
          "The licensing restrictions imposed by distributed software vendors",
          "The initialization time required before parallel tasks can begin"
        ],
        "explanation": "Communication overhead can erase the benefits of adding processors."
      },
      {
        "id": "prelim-a-21",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A NUMA architecture links two SMP systems. Processor A accesses local memory in 50ns but remote memory in 150ns. Which statement is most accurate?",
        "answer": "Memory access latency differs between regions in NUMA systems",
        "wrong": [
          "The system qualifies as UMA because processors remain identical",
          "Separate SMP systems require exclusive use of message passing",
          "Cache coherency cannot function correctly in NUMA architectures"
        ],
        "explanation": "NUMA means memory access time is non-uniform and depends on memory location."
      },
      {
        "id": "prelim-a-22",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Why does increasing CPUs in a shared memory system not always improve performance proportionally?",
        "answer": "Traffic contention creates bottlenecks on memory communication paths",
        "wrong": [
          "Shared memory systems cannot expand storage capacity efficiently",
          "Distributed memory becomes mandatory after adding several processors",
          "Shared memory processors cannot execute tasks independently"
        ],
        "explanation": "More CPUs can increase traffic and contention on shared memory paths."
      },
      {
        "id": "prelim-a-23",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel application uses fine-grained granularity. What consequence is most likely?",
        "answer": "Communication overhead becomes larger relative to computation",
        "wrong": [
          "Execution becomes slower because fewer tasks are generated",
          "Distributed architectures become unnecessary for coordination",
          "Communication demands decrease as processor counts increase"
        ],
        "explanation": "Fine-grained tasks communicate frequently, so overhead can become large."
      },
      {
        "id": "prelim-a-24",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What distinguishes distributed shared memory systems from pure distributed memory systems?",
        "answer": "Software creates a shared-memory illusion across distributed nodes",
        "wrong": [
          "Every processor physically accesses one universal memory structure",
          "Communication between machines becomes completely unnecessary",
          "All processors execute identical instructions on identical datasets"
        ],
        "explanation": "DSM hides physical distribution and presents an illusion of shared memory."
      },
      {
        "id": "prelim-a-25",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A MIMD computer may execute tasks non-deterministically. What does this imply for developers?",
        "answer": "Synchronization mechanisms are required to ensure correctness",
        "wrong": [
          "Scientific applications cannot operate reliably on MIMD systems",
          "Deterministic execution is unnecessary in parallel applications",
          "SIMD systems experience more synchronization concerns than MIMD"
        ],
        "explanation": "Non-deterministic execution means synchronization is needed to keep shared results correct."
      }
    ],
    "combinedPrelimB": [
      {
        "id": "prelim-b-1",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What distinguishes distributed computing from parallel computing?",
        "answer": "Distributed computing uses multiple networked computers with independent memory spaces",
        "wrong": [
          "Parallel computing depends entirely on wide-area communication architecture systems",
          "Distributed computing always requires identical processors within shared architectures",
          "Parallel computing eliminates coordination between processors during task execution"
        ],
        "explanation": "Distributed computing uses independent networked machines, while parallel computing often focuses on simultaneous execution using multiple processors or cores."
      },
      {
        "id": "prelim-b-2",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which of the following is a key advantage of distributed memory architecture over shared memory?",
        "answer": "Higher scalability through independent nodes added across environments",
        "wrong": [
          "Faster synchronization between tightly coupled computational workloads",
          "Simplified address spaces allowing transparent memory access globally",
          "Lower communication overhead during real-time synchronization across processor groups"
        ],
        "explanation": "Distributed memory can scale by adding independent nodes, each with its own memory."
      },
      {
        "id": "prelim-b-3",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In the von Neumann architecture, what is stored in electronic memory?",
        "answer": "Program instructions together with data required for execution processes",
        "wrong": [
          "Operating system services and communication protocols",
          "Arithmetic processing rules controlling processor execution stages",
          "Hardware interrupt signals coordinating communication between connected input devices"
        ],
        "explanation": "The von Neumann model stores both program instructions and data in memory."
      },
      {
        "id": "prelim-b-4",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the Reduce phase responsible for in MapReduce?",
        "answer": "Combining intermediate outputs into summarized results for final processing stages",
        "wrong": [
          "Splitting data before assigning tasks across processing nodes",
          "Replicating distributed data across clusters for system fault tolerance",
          "Scheduling worker processes during parallel execution of distributed jobs"
        ],
        "explanation": "Reduce combines intermediate Map outputs into final summarized results."
      },
      {
        "id": "prelim-b-5",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which parallel computing resource is specifically mentioned as suitable for machine learning and scientific simulations?",
        "answer": "Graphics processing units (GPUs) enabling repetitive mathematical operations efficiently simultaneously",
        "wrong": [
          "Distributed storage platforms coordinating replicated blocks across computing environments",
          "Symmetric multiprocessing architectures supporting coordinated memory sharing operations globally",
          "Cluster middleware frameworks balancing workloads among geographically separated processors"
        ],
        "explanation": "GPUs are well suited for repetitive parallel mathematical operations used in machine learning and simulations."
      },
      {
        "id": "prelim-b-6",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is a node in the context of parallel computing clusters?",
        "answer": "Independent computers containing processors, memory and networking communication interfaces together",
        "wrong": [
          "Routing hardware connecting distributed systems across communication infrastructure environments",
          "Virtualized services executing distributed applications within cloud infrastructures remotely",
          "Shared processor cores executing synchronized instructions within multiprocessor architectures"
        ],
        "explanation": "A cluster node is a standalone computer with processors, memory, and network interfaces."
      },
      {
        "id": "prelim-b-7",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which statement correctly describes the shared memory inter-process communication model?",
        "answer": "Processes access and coordinate through spaces and regions containing shared information together",
        "wrong": [
          "Processes exchange information exclusively through synchronized message queue communication mechanisms",
          "Processes communicate indirectly using distributed packet switching across network infrastructures",
          "Processes isolate execution environments while communicating through independent storage replication systems"
        ],
        "explanation": "Shared memory IPC lets processes communicate by reading and writing a shared memory region."
      },
      {
        "id": "prelim-b-8",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the primary purpose of synchronization in parallel applications?",
        "answer": "Coordinating concurrent tasks while preventing inconsistent shared data modifications simultaneously",
        "wrong": [
          "Increasing processor speed during independent execution of distributed computational workloads",
          "Minimizing memory allocation requirements across geographically distributed processing environments globally",
          "Reducing network latency between geographically distributed computational resource infrastructures entirely"
        ],
        "explanation": "Synchronization coordinates concurrent work and protects shared data from inconsistent updates."
      },
      {
        "id": "prelim-b-9",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An SMP (Symmetric Multi-Processor) system is characterized by:",
        "answer": "Processors sharing equal access to memory and computing resources together",
        "wrong": [
          "Processors connected geographically using distributed communication infrastructures and middleware frameworks",
          "Nodes maintaining isolated memory spaces without coordinated synchronization mechanisms",
          "Nonuniform memory access architectures requiring specialized optimization and coordination strategies"
        ],
        "explanation": "In SMP, processors share memory and resources with equal access."
      },
      {
        "id": "prelim-b-10",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is message passing described as both useful and slower compared to shared memory communication?",
        "answer": "Message passing requires physical data transfers through operating system communication services",
        "wrong": [
          "Shared memory communication depends entirely upon geographically distributed network infrastructures globally",
          "Variable-length communication reduces synchronization requirements between processing components completely",
          "Message passing architectures require fewer processing distributed computational coordination tasks"
        ],
        "explanation": "Message passing is useful across separate address spaces, but it is slower because data transfer is mediated by the OS or network services."
      },
      {
        "id": "prelim-b-11",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer converts a serial program to run on 16 processors. Total CPU time increases from 4 hours to 48 hours while wall-clock time decreases slightly. What conclusion is most accurate?",
        "answer": "Parallel overhead may reduce overall efficiency when workload distribution across processors consumes resources",
        "wrong": [
          "Additional processors automatically guarantee greater processing resources",
          "Serial execution remains best because synchronization always reduces performance substantially",
          "Processor utilization increases substantially despite application executed across clustered infrastructures"
        ],
        "explanation": "The program may use more total CPU time because overhead, communication, and coordination reduce efficiency."
      },
      {
        "id": "prelim-b-12",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In P2P architecture, each node is both client and server. What makes this fundamentally different from client-server regarding fault tolerance?",
        "answer": "Distributed peer participation removes central dependency while improving system resilience significantly",
        "wrong": [
          "Centralized coordination improves replicated communication routing infrastructures globally",
          "Dedicated servers eliminate synchronization problems during workload distribution between participating systems",
          "Peer architectures depend entirely upon specialized hardware supporting coordinated resource allocation mechanisms"
        ],
        "explanation": "P2P removes a central server dependency, improving resilience compared with a single central server design."
      },
      {
        "id": "prelim-b-13",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A SIMD architecture processes the same data stream for fraud detection, where multiple independent cryptographic algorithms simultaneously analyze the same data stream. Which Flynn classification applies and why?",
        "answer": "MISD because multiple instructions analyze one shared transaction data stream",
        "wrong": [
          "SIMD because identical instructions operate across multiple independent transaction datasets simultaneously",
          "MIMD because processors execute unrelated algorithms using independent transaction processing streams",
          "SISD because transaction processing occurs sequentially through centralized computing architecture exclusively"
        ],
        "explanation": "Multiple instruction streams analyzing the same data stream corresponds to MISD."
      },
      {
        "id": "prelim-b-14",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A grid computing system spans multiple organizations globally. Compare this to cluster computing regarding governance, resource ownership, and scale.",
        "answer": "Grid systems involve distributed governance and heterogeneous resources across organizations globally",
        "wrong": [
          "Cluster systems depend entirely upon geographically separated organizations coordinating shared control",
          "Grid architectures operate exclusively within homogeneous environments managed through centralized administration systems",
          "Cluster infrastructures require distributed governance supporting independently managed computational resource networks worldwide"
        ],
        "explanation": "Grid computing often spans organizations and heterogeneous resources, while clusters are usually more tightly managed."
      },
      {
        "id": "prelim-b-15",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is complexity listed as both a challenge and cost multiplier in parallel software development?",
        "answer": "Concurrent execution coordination increases effort across design, debugging, tuning, and maintenance phases",
        "wrong": [
          "Specialized hardware infrastructures dramatically eliminate software licensing and deployment requirements globally",
          "Parallel programming languages restrict interoperability between distributed applications and operating systems entirely",
          "Proprietary debugging frameworks eliminate open-source development support for distributed computing projects globally"
        ],
        "explanation": "Parallel software adds coordination complexity throughout design, coding, debugging, tuning, and maintenance."
      },
      {
        "id": "prelim-b-16",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A weather forecasting agency must process satellite data from 50 regions simultaneously and independently. What is the most appropriate computing model?",
        "answer": "Embarrassingly parallel distribution supporting independent regional processing tasks simultaneously efficiently",
        "wrong": [
          "Client-server architecture coordinating centralized processing through dedicated communication infrastructures globally",
          "SISD processing executing sequential instructions through synchronized processor architectures exclusively",
          "High-speed serial processing environments minimizing synchronization across distributed computational infrastructures entirely"
        ],
        "explanation": "Independent regional workloads are a good fit for embarrassingly parallel processing."
      },
      {
        "id": "prelim-b-17",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A logistics company stores shipment records across geographically separate data centers. A query must search all locations simultaneously. Which component addresses this?",
        "answer": "Distributed file systems enabling coordinated access across geographically separated storage infrastructures",
        "wrong": [
          "Shared memory architectures supporting centralized synchronization between geographically separated processors globally",
          "Vector processing pipelines accelerating repetitive instructions during sequential database search operations",
          "Symmetric multiprocessing systems coordinating shared memory access between distributed processing systems"
        ],
        "explanation": "Distributed file systems coordinate access to data stored across geographically separated locations."
      },
      {
        "id": "prelim-b-18",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Two processes on different machines connected by a network need to share computation results. Shared memory is unavailable. Which IPC mechanism must they use?",
        "answer": "Message passing through send and receive communication operations across network infrastructures",
        "wrong": [
          "Direct cache coherency mechanisms coordinating memory synchronization between distributed processors continuously",
          "Shared address spaces supporting transparent remote memory access across geographically separated processing systems globally",
          "Uniform memory architectures coordinating synchronized processor access within shared computing environments together"
        ],
        "explanation": "Processes on different machines without shared memory communicate through message passing."
      },
      {
        "id": "prelim-b-19",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A machine learning model trains by splitting datasets into batches processed by GPU cores applying identical operations. Which Flynn taxonomy class describes this?",
        "answer": "SIMD because processing occurs through synchronized instruction execution across processor architectures",
        "wrong": [
          "SISD because processing occurs sequentially through synchronized processor architecture globally",
          "MIMD because processors execute unrelated instructions across multiple independent computational data streams independently",
          "MISD because multiple instruction streams coordinate processing across centralized communication environments globally"
        ],
        "explanation": "GPU cores applying the same operation to many data items are an example of SIMD."
      },
      {
        "id": "prelim-b-20",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An online multiplayer game server crashes but users reconnect seamlessly to a backup server without data loss. Which distributed characteristic enabled this?",
        "answer": "Fault tolerance maintaining service continuity despite failures within distributed computing environments effectively",
        "wrong": [
          "Load balancing distributing computational requests across synchronized server communication infrastructures globally",
          "Scalability mechanisms supporting increased processor coordination during high-demand computational workloads simultaneously",
          "Parallel decomposition separating independent tasks during coordinated distributed application processing operations globally"
        ],
        "explanation": "Fault tolerance allows service continuity when a server fails."
      },
      {
        "id": "prelim-b-21",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A university shares CPU cycles from multiple countries to simulate protein folding. Which distributed architecture best fits?",
        "answer": "Grid computing integrating heterogeneous resources from geographically distributed organizations collaboratively worldwide",
        "wrong": [
          "Cluster computing supporting homogeneous systems managed through centralized administrative infrastructures together",
          "Peer-to-peer architectures coordinating decentralized file exchanges between participating computational environments globally",
          "Client-server computing centralizing resource allocation through dedicated administrative infrastructure globally"
        ],
        "explanation": "Grid computing fits geographically distributed, heterogeneous resources across organizations."
      },
      {
        "id": "prelim-b-22",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel program splits work into microtasks constantly exchanging small updates. Performance becomes worse than the serial version. What is the most likely cause?",
        "answer": "Excessive communication overhead caused by extremely fine-grained task decomposition strategies continuously",
        "wrong": [
          "Coarse-grained decomposition reducing synchronization requirements across distributed processing environments entirely globally",
          "Distributed memory architectures providing synchronized communication between computational microtasks completely",
          "Processor underutilization resulting from insufficient workload distribution across available computing infrastructures globally"
        ],
        "explanation": "Fine-grained work can communicate so frequently that overhead outweighs parallel speedup."
      },
      {
        "id": "prelim-b-23",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A social media recommendation engine processes different users with different algorithms simultaneously across thousands of servers. Which Flynn classification applies?",
        "answer": "MIMD because independent instructions process separate datasets across distributed processors concurrently",
        "wrong": [
          "SIMD because identical operations process recommendation datasets simultaneously together",
          "SISD because execution remains sequential through centralized algorithmic processing architectures exclusively",
          "MISD because multiple algorithms analyze synchronized datasets through coordinated instruction execution simultaneously"
        ],
        "explanation": "Different algorithms on separate user datasets across many servers is MIMD."
      },
      {
        "id": "prelim-b-24",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer prioritizes simpler programming over system-level efficiency when choosing between fixed-size and variable-size messages. Which should they choose?",
        "answer": "Variable-size messages simplifying application programming despite increased implementation complexity internally globally",
        "wrong": [
          "Fixed-size messages because implementation through predictable communication packet structures globally",
          "Fixed-size communication structures automatically supporting flexible distributed application requirements completely",
          "Variable-length communication packets consistently reducing transmission overhead across distributed infrastructures worldwide"
        ],
        "explanation": "Variable-size messages require more system-level implementation but make the programming task simpler."
      },
      {
        "id": "prelim-b-25",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel scientific simulation runs correctly on 8 processors but produces inconsistent results on 32 processors. What is the most likely cause?",
        "answer": "Improper synchronization causing race conditions during larger-scale parallel execution environments simultaneously",
        "wrong": [
          "Network communication bandwidth preventing synchronization between distributed processing environments effectively globally",
          "NUMA architectures introducing incompatible processor communication patterns during synchronized computational execution processes",
          "Insufficient memory allocation preventing processor coordination across distributed computational workloads successfully"
        ],
        "explanation": "Inconsistent results at larger scale often point to race conditions from improper synchronization."
      }
    ],
    "quizA": [
      {
        "id": "quiz-a-1",
        "number": 1,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is the primary characteristic that defines message-passing programming as distinct from shared-memory programming?",
        "answer": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other.",
        "wrong": [
          "Processes share a distributed cache layer that all nodes can read from and write to simultaneously.",
          "Processes communicate through a central coordinator node that manages all data transfers between workers.",
          "Processes share a single common memory space and communicate by reading and writing the same variables directly."
        ],
        "explanation": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other."
      },
      {
        "id": "quiz-a-2",
        "number": 2,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement best describes asynchronous communication in a message-passing program?",
        "answer": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it.",
        "wrong": [
          "A sending process suspends all computation and remains idle until the receiving process explicitly confirms the message arrived.",
          "All participating processes coordinate to send and receive messages at a pre-agreed synchronized time checkpoint.",
          "The operating system buffers all messages and delivers them in the exact sequence they were originally transmitted."
        ],
        "explanation": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it."
      },
      {
        "id": "quiz-a-3",
        "number": 3,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "In message-passing programming, what accurately describes point-to-point communication?",
        "answer": "One process sends a message to one specific, individually addressed target process for direct exchange.",
        "wrong": [
          "Every process in the group sends its local data to every other process simultaneously in a ring pattern.",
          "A group of processes collectively computes a result and delivers it to all members of the communicator.",
          "One root process distributes identical copies of a message to every other process in the communicator group."
        ],
        "explanation": "One process sends a message to one specific, individually addressed target process for direct exchange."
      },
      {
        "id": "quiz-a-4",
        "number": 4,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What does the acronym MPI stand for in high-performance parallel computing?",
        "answer": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming.",
        "wrong": [
          "Memory Partitioned Interface, the specification for dividing RAM equally among parallel worker threads.",
          "Modular Parallel Implementation, a framework for automatically decomposing sequential programs into tasks.",
          "Multi-Process Integration, the standard protocol for combining results across multi-core processors."
        ],
        "explanation": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming."
      },
      {
        "id": "quiz-a-5",
        "number": 5,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A 500-node cluster runs a weather simulation where each node independently processes one geographic region and exchanges boundary values only with adjacent nodes. Which parallel paradigm fits best?",
        "answer": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls.",
        "wrong": [
          "Shared-memory using Intel TBB, because the threading library efficiently manages work queues across all cluster nodes.",
          "Shared-memory using POSIX threads, because pthreads allow fine-grained control over each node's regional data buffer.",
          "Shared-memory using OpenMP, because compiler directives automatically distribute the regional computation across all 500 nodes."
        ],
        "explanation": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls."
      },
      {
        "id": "quiz-a-6",
        "number": 6,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly describes a key scalability advantage of message-passing programming over shared-memory programming?",
        "answer": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly.",
        "wrong": [
          "Message-passing programs use a global shared bus so that adding more nodes directly increases available memory bandwidth.",
          "Message-passing programs depend on a shared heap segment that grows proportionally as more compute nodes join the cluster.",
          "Message-passing programs run on a single machine with shared RAM and scale well because the OS manages lock contention automatically."
        ],
        "explanation": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly."
      },
      {
        "id": "quiz-a-7",
        "number": 7,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is collective communication in message-passing systems and which operation is an example of it?",
        "answer": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process.",
        "wrong": [
          "Collective communication describes the technique of buffering multiple point-to-point messages to reduce individual transmission overhead.",
          "Collective communication describes a fault-tolerance protocol where surviving processes redistribute work from a failed process automatically.",
          "Collective communication describes one process sending a private message to one specific partner, as in a standard MPI_Send call."
        ],
        "explanation": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process."
      },
      {
        "id": "quiz-a-8",
        "number": 8,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Two MPI processes — P0 and P1 — each call a blocking MPI_Send to the other before calling MPI_Recv. Neither process ever proceeds past its send call and the program freezes permanently. What condition has occurred and how is it resolved?",
        "answer": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend.",
        "wrong": [
          "A scheduling conflict has occurred; the fix is to assign each process to a dedicated CPU core using processor affinity settings.",
          "A collective communication mismatch has occurred; the fix is to replace MPI_Send with MPI_Bcast so both processes receive the message.",
          "A memory overflow has occurred because each blocking send allocated a buffer larger than the available RAM on each node."
        ],
        "explanation": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend."
      },
      {
        "id": "quiz-a-9",
        "number": 9,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A financial HPC cluster shows no speedup gain after 150 nodes even when 50 more nodes are added. The computation per node remains constant but inter-node messaging has grown. What does this indicate about the message-passing workload?",
        "answer": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide.",
        "wrong": [
          "The financial dataset is too small for the cluster size, so each extra node receives zero work items and sits idle during the run.",
          "The network switch is running at capacity so the OS automatically throttles new nodes to prevent packet loss on the interconnect.",
          "The MPI library reached its maximum registered process count of 150 and stopped accepting new worker registrations."
        ],
        "explanation": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide."
      },
      {
        "id": "quiz-a-10",
        "number": 10,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly identifies a significant debugging challenge that is specific to message-passing programs?",
        "answer": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently.",
        "wrong": [
          "Message-passing programs share a global heap, so memory corruption in one process is immediately visible and easy to isolate.",
          "Message-passing programs always execute sequentially on one core, so the debugger can single-step through every instruction in order.",
          "Message-passing programs store all communication logs in a shared database, giving the developer a complete audit trail of every exchange."
        ],
        "explanation": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently."
      },
      {
        "id": "quiz-a-11",
        "number": 11,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "How is synchronization between processes handled in the message-passing programming model?",
        "answer": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes.",
        "wrong": [
          "Synchronization is fully automatic; the MPI runtime inserts barriers between every communication call without developer intervention.",
          "Synchronization is unnecessary because each process runs in complete isolation and never needs to coordinate timing with any peer.",
          "Synchronization is handled by a dedicated master process that polls all workers and issues clock signals at fixed time intervals."
        ],
        "explanation": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes."
      },
      {
        "id": "quiz-a-12",
        "number": 12,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A physics simulation on 1,000 nodes produces partial results on each node. At the end, all partial sums must be totaled into a single global result held on Node 0. Which MPI collective operation is the correct and most efficient choice?",
        "answer": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result.",
        "wrong": [
          "MPI_Bcast, where Node 0 transmits its partial result to all other nodes so every process holds the same starting value.",
          "MPI_Scatter, where Node 0 breaks a large dataset into chunks and distributes one unique chunk to each of the 1,000 nodes.",
          "MPI_Alltoall, where every node exchanges its partial result with every other node so all nodes hold all partial sums."
        ],
        "explanation": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result."
      },
      {
        "id": "quiz-a-13",
        "number": 13,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What are the three sequential steps that the Divide and Conquer algorithm technique performs at each level of recursion?",
        "answer": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer.",
        "wrong": [
          "Initialize the data structure, process each element sequentially, then output the final combined result to storage.",
          "Partition the input data evenly, sort each partition with an insertion pass, then merge adjacent sorted partitions repeatedly.",
          "Select the optimal sub-problem to solve first, execute it greedily, then propagate the result to dependent sub-problems."
        ],
        "explanation": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer."
      },
      {
        "id": "quiz-a-14",
        "number": 14,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which algorithm design technique makes the locally optimal choice at each decision step and never revisits a previous decision?",
        "answer": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices.",
        "wrong": [
          "Dynamic Programming, which stores every sub-problem solution in a table and reuses those stored answers in future computations.",
          "Backtracking, which explores each candidate solution fully and retreats to the previous checkpoint when a dead end is encountered.",
          "Branch and Bound, which maintains a priority queue of partial solutions ranked by their lower-bound cost estimate."
        ],
        "explanation": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices."
      },
      {
        "id": "quiz-a-15",
        "number": 15,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What is the key distinguishing difference between Dynamic Programming and the Divide and Conquer technique?",
        "answer": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently.",
        "wrong": [
          "Divide and Conquer stores solutions to sub-problems in a lookup table while Dynamic Programming always recomputes them from scratch.",
          "Dynamic Programming works only on graph problems while Divide and Conquer applies only to array and sorting problems.",
          "Divide and Conquer requires distributed memory clusters while Dynamic Programming runs only on shared-memory multi-core systems."
        ],
        "explanation": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently."
      },
      {
        "id": "quiz-a-16",
        "number": 16,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which description most accurately defines how the Backtracking algorithm works?",
        "answer": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails.",
        "wrong": [
          "The algorithm builds a priority queue of candidate solutions ranked by their estimated cost and processes the cheapest candidate first.",
          "The algorithm expresses the problem as a set of linear constraints and finds the assignment of variables that satisfies all constraints optimally.",
          "The algorithm divides the solution space into two halves repeatedly and processes each half on a separate processor simultaneously."
        ],
        "explanation": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails."
      },
      {
        "id": "quiz-a-17",
        "number": 17,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which real-world combinatorial puzzle is the most classically cited example of the Backtracking algorithm in computer science textbooks?",
        "answer": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen.",
        "wrong": [
          "The Fibonacci Series problem, where each term depends on the sum of the two immediately preceding terms in the sequence.",
          "The Travelling Salesman Problem, where the total distance of a route connecting all cities must be minimized globally.",
          "The Shortest Path Problem, where the minimum-cost route between two nodes in a weighted graph must be identified."
        ],
        "explanation": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen."
      },
      {
        "id": "quiz-a-18",
        "number": 18,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A delivery company must find the minimum-distance route visiting 12 cities. The solution space is enormous. Which design technique intelligently prunes unpromising routes without evaluating every possibility?",
        "answer": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found.",
        "wrong": [
          "The Greedy Method, which builds the route one city at a time by always traveling to the nearest unvisited city from the current location.",
          "Dynamic Programming, which breaks the route into overlapping city-pair sub-problems and stores the shortest sub-route for each pair.",
          "Linear Programming, which models the routing decision as a set of linear equations and solves for the assignment that minimizes total distance."
        ],
        "explanation": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found."
      },
      {
        "id": "quiz-a-19",
        "number": 19,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "The Fibonacci algorithm (Fib(n) = Fib(n-1) + Fib(n-2)) implemented with a lookup table to avoid repeated computation is a classic example of which technique?",
        "answer": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls.",
        "wrong": [
          "Backtracking, because the recursion explores multiple candidate values before settling on the correct Fibonacci term at depth n.",
          "Branch and Bound, because the recursion tree branches into two sub-calls and prunes branches where Fib values are already known.",
          "Divide and Conquer, because the problem is split into two independent halves that are solved separately and their results summed."
        ],
        "explanation": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls."
      },
      {
        "id": "quiz-a-20",
        "number": 20,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Both Binary Search and Merge Sort are textbook examples of which parallel algorithm design technique?",
        "answer": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results.",
        "wrong": [
          "Greedy Method, because both algorithms commit to a locally optimal decision at each step without reconsidering prior choices.",
          "Dynamic Programming, because both algorithms store results from smaller input sizes to avoid re-scanning previously processed data.",
          "Branch and Bound, because both algorithms prune sections of the input that cannot possibly contribute to the final answer."
        ],
        "explanation": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results."
      },
      {
        "id": "quiz-a-21",
        "number": 21,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A logistics firm assigns delivery drivers to routes to maximize total deliveries in an 8-hour shift. Driver assignment, shift-hour limits, and vehicle capacity all have linear relationships. Which design technique directly models and solves this optimization problem?",
        "answer": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically.",
        "wrong": [
          "Branch and Bound, which generates a tree of partial assignments and prunes branches where estimated deliveries fall below the current best.",
          "Greedy Method, which assigns the driver with the greatest remaining shift time to the longest available route at each decision step.",
          "Backtracking, which tries every possible driver-to-route assignment and retreats whenever a shift-hour or capacity constraint is violated."
        ],
        "explanation": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically."
      },
      {
        "id": "quiz-a-22",
        "number": 22,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A game developer builds a maze solver that explores a path step by step, and when it hits a dead end, it reverses to the last junction and tries a different direction. This continues until the exit is found. Which design technique is being implemented?",
        "answer": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered.",
        "wrong": [
          "Greedy Method, because at each junction the solver picks the corridor that appears to lead most directly toward the exit position.",
          "Branch and Bound, because at each junction the solver calculates the minimum remaining distance and prunes corridors that exceed the limit.",
          "Divide and Conquer, because the maze is split into quadrants and each quadrant is solved independently by a recursive sub-call."
        ],
        "explanation": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered."
      },
      {
        "id": "quiz-a-23",
        "number": 23,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "What is the defining characteristic of the shared-memory parallel programming model?",
        "answer": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables.",
        "wrong": [
          "Threads are assigned to separate physical servers and synchronize by exchanging data packets over a high-speed network interconnect.",
          "Each thread operates on an independent memory bank that is readable by the CPU but not directly accessible by any other thread.",
          "Each thread holds a private copy of all program variables and must explicitly send updates to other threads through a message queue."
        ],
        "explanation": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables."
      },
      {
        "id": "quiz-a-24",
        "number": 24,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Two threads simultaneously read a shared counter, each adds one to it, and each writes back the result. The counter increments by one instead of two. What is this concurrency problem called?",
        "answer": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost.",
        "wrong": [
          "A memory leak, where each thread allocates a new buffer for the counter value but never frees the old buffer after writing.",
          "A stack overflow, where the counter variable exceeds the maximum integer range supported by the thread's private call stack memory.",
          "A deadlock, where both threads are blocked waiting for a resource that the other thread currently holds and refuses to release."
        ],
        "explanation": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost."
      },
      {
        "id": "quiz-a-25",
        "number": 25,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Which synchronization mechanism in shared-memory programming ensures that only one thread at a time can execute a critical section of code?",
        "answer": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time.",
        "wrong": [
          "A network socket, which provides a reliable byte-stream channel between two threads running on different CPU cores.",
          "A memory-mapped file, which maps shared data to a file on disk so multiple threads can access it through the file system.",
          "A message queue, which buffers outgoing data from one thread and delivers it to another thread in the order it was enqueued."
        ],
        "explanation": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time."
      }
    ],
    "quizB": [
      {
        "id": "quiz-b-26",
        "number": 26,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "In shared-memory programming, what is the key difference between multithreading and multiprocessing?",
        "answer": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory.",
        "wrong": [
          "Multithreading allocates a separate CPU socket to each thread while multiprocessing runs all tasks on a single CPU core in rotation.",
          "Multithreading is exclusively used for input/output tasks while multiprocessing handles all mathematical and computational operations.",
          "Multithreading requires a special OS kernel module while multiprocessing runs on any standard operating system without modification."
        ],
        "explanation": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory."
      },
      {
        "id": "quiz-b-27",
        "number": 27,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which parallel processing framework uses pragma compiler directives to parallelize loops and is specifically designed for shared-memory multi-core systems?",
        "answer": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code.",
        "wrong": [
          "CUDA (Compute Unified Device Architecture), which offloads massively parallel computations to GPU streaming multiprocessors.",
          "MPI (Message Passing Interface), which uses explicit send/receive calls to coordinate work across distributed-memory compute nodes.",
          "Hadoop MapReduce, which distributes large dataset processing across a cluster of commodity servers using a key-value paradigm."
        ],
        "explanation": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code."
      },
      {
        "id": "quiz-b-28",
        "number": 28,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Thread A and Thread B both execute 'counter++' on a shared variable 1,000 times each without any synchronization. The final value is 1,743 instead of 2,000. What caused the discrepancy of 257?",
        "answer": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost.",
        "wrong": [
          "The operating system's thread scheduler assigned both threads to the same CPU core, causing them to alternate too slowly to complete all increments.",
          "The threads consumed excessive CPU cache capacity causing some increment operations to be silently discarded by the cache coherence protocol.",
          "The compiler optimized away 257 redundant increment operations because it detected that both threads were modifying the same variable."
        ],
        "explanation": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost."
      },
      {
        "id": "quiz-b-29",
        "number": 29,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "As the number of threads in a shared-memory program increases to very large numbers, what performance limitation typically emerges?",
        "answer": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains.",
        "wrong": [
          "The operating system automatically converts the shared-memory program to a message-passing program to handle the extra threads efficiently.",
          "Memory usage drops to zero because the threads share so much data that very little unique information needs to be stored per thread.",
          "The compiler automatically inserts additional mutex locks that protect all shared variables so thread safety improves as thread count grows."
        ],
        "explanation": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains."
      },
      {
        "id": "quiz-b-30",
        "number": 30,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "An online exam system on a 32-core server handles 5,000 simultaneous student registrations. Each registration decrements a shared 'seats_remaining' counter. Which approach correctly prevents registration count errors in shared-memory programming?",
        "answer": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates.",
        "wrong": [
          "Allow all 5,000 threads to update the counter simultaneously and rely on the CPU's out-of-order execution to merge the updates correctly.",
          "Run each student's session on a separate virtual machine so that each VM maintains its own independent copy of the counter value.",
          "Use file locking to write the counter to disk before each decrement so the persistent file serves as the authoritative shared state."
        ],
        "explanation": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates."
      },
      {
        "id": "quiz-b-31",
        "number": 31,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Two Java threads process bank account transactions on the same account object. Both read a balance of PHP 10,000, each deducts PHP 8,000, and both write PHP 2,000 back — leaving PHP 2,000 instead of detecting an overdraft. Which concurrency problem caused this and what is the correct fix?",
        "answer": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time.",
        "wrong": [
          "A deadlock caused both threads to block waiting for the account object lock; adding a second lock object on the transaction class resolves it.",
          "A memory leak caused transaction objects to pile up; calling System.gc() after each transaction frees the excess objects and corrects the balance.",
          "A stack overflow in the transaction recursion caused the balance to be partially written; increasing the JVM thread stack size resolves the issue."
        ],
        "explanation": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time."
      },
      {
        "id": "quiz-b-32",
        "number": 32,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which statement accurately describes the communication advantage of shared-memory programming over message-passing for tasks on a single machine?",
        "answer": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead.",
        "wrong": [
          "Shared-memory programs automatically distribute their computations across multiple physical servers with no network configuration needed.",
          "Shared-memory programs prevent all race conditions by default because the compiler inserts atomic operations around every memory access.",
          "Shared-memory programs scale to unlimited thread counts because lock contention decreases automatically as more cores are added to the system."
        ],
        "explanation": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead."
      },
      {
        "id": "quiz-b-33",
        "number": 33,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does complexity analysis measure about a computer program or algorithm?",
        "answer": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows.",
        "wrong": [
          "Complexity analysis counts the total number of lines of source code and evaluates how readable the code is for future developers.",
          "Complexity analysis evaluates the quality of a program's user interface and measures user interaction response times under load.",
          "Complexity analysis audits the number of external library dependencies and scores how maintainable the program is over time."
        ],
        "explanation": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows."
      },
      {
        "id": "quiz-b-34",
        "number": 34,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big O notation (O) specifically represent when describing algorithm complexity?",
        "answer": "Big O represents the worst-case upper bound",
        "wrong": [
          "Big O represents the best-case minimum number of steps the algorithm will perform when given the most favorable possible input.",
          "Big O represents the average-case expected performance across all typical real-world inputs for the algorithm.",
          "Big O represents the exact number of operations the algorithm performs for every specific input of a given size n."
        ],
        "explanation": "the maximum growth rate the algorithm's resource usage will ever reach."
      },
      {
        "id": "quiz-b-35",
        "number": 35,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big Omega notation (Ω) represent in algorithm complexity analysis?",
        "answer": "Big Omega represents the best-case lower bound",
        "wrong": [
          "Big Omega represents the worst-case upper bound",
          "Big Omega represents the average-case expected growth rate when inputs are drawn uniformly at random from all possible values.",
          "Big Omega represents the memory complexity of the algorithm expressed in terms of the number of recursive function call frames."
        ],
        "explanation": "the minimum number of steps the algorithm will ever need on any input."
      },
      {
        "id": "quiz-b-36",
        "number": 36,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm performs exactly 7 operations whether the input list has 10 items or 10,000,000 items. What time complexity class does this represent?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "constant complexity, because the number of operations never changes regardless of how large the input becomes."
      },
      {
        "id": "quiz-b-37",
        "number": 37,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search on a sorted array of 1,024 elements finds the target in at most 10 steps. On 1,048,576 elements it finds it in at most 20 steps. What time complexity does this pattern represent?",
        "answer": "O(log n)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(1)"
        ],
        "explanation": "logarithmic complexity, where each step eliminates half the remaining candidates so steps grow very slowly with array size."
      },
      {
        "id": "quiz-b-38",
        "number": 38,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A loop visits every element in an array of n items exactly once and performs one operation on each. What is the time complexity of this loop?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "linear complexity, because the total number of operations grows in direct proportion to the number of items in the array."
      },
      {
        "id": "quiz-b-39",
        "number": 39,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm contains an outer loop running n times and an inner loop that also runs n times for each outer iteration. What is the time complexity?",
        "answer": "O(n²)",
        "wrong": [
          "O(n)",
          "O(n log n)",
          "O(2n)"
        ],
        "explanation": "quadratic, because the inner loop executes n times for each of the n outer iterations giving n multiplied by n total steps."
      },
      {
        "id": "quiz-b-40",
        "number": 40,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A hospital's patient lookup system uses linear search on 1,000,000 unsorted records. In the worst case, approximately how many record comparisons are made and what is the Big O complexity?",
        "answer": "Up to 1,000,000 comparisons",
        "wrong": [
          "About 20 comparisons",
          "Exactly 1 comparison",
          "Up to 1,000,000,000,000 comparisons"
        ],
        "explanation": "O(n), because linear search checks every record until a match is found or the list is exhausted."
      },
      {
        "id": "quiz-b-41",
        "number": 41,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Sorting 1,000 student scores with Merge Sort takes roughly 10,000 operations. Using the same O(n log n) relationship, approximately how many operations does sorting 1,000,000 scores require?",
        "answer": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000.",
        "wrong": [
          "About 20,000,000,000 operations, because the sort switches to O(n²) behavior once the input exceeds one million elements.",
          "About 1,000,000 operations, because O(n log n) scales at the same rate as O(n) when the logarithmic factor remains near constant.",
          "About 1,000 operations, because the logarithmic factor reduces the linear component proportionally."
        ],
        "explanation": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000."
      },
      {
        "id": "quiz-b-42",
        "number": 42,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A cashier program sums all item prices in a shopping cart using one variable: 'int sum = 0; for(item: cart) sum += item.price;'. What is the space complexity of this algorithm?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "constant space, because only one variable (sum) is ever allocated regardless of how many items appear in the cart."
      },
      {
        "id": "quiz-b-43",
        "number": 43,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search runs in O(log n) time. What critical requirement must the data meet BEFORE Binary Search can be applied correctly?",
        "answer": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard.",
        "wrong": [
          "The data must be stored in a hash table so that each element can be located by computing its position from its key value directly.",
          "The data must be stored in a linked list so that Binary Search can traverse forward and backward from a given starting element.",
          "The data must fit entirely within the CPU's L1 cache so that each Binary Search probe accesses an element in a single clock cycle."
        ],
        "explanation": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard."
      },
      {
        "id": "quiz-b-44",
        "number": 44,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An app runs in 0.1 seconds for 500 users. After going viral with 500,000 users (a 1,000× growth), response time is 100,000 seconds. A developer suspects a quadratic algorithm. Is O(n²) consistent with this observation?",
        "answer": "Yes",
        "wrong": [
          "No",
          "No",
          "Yes"
        ],
        "explanation": "under O(n²), a 1,000× user increase causes a 1,000²=1,000,000× time increase: 0.1s × 1,000,000 = 100,000s, which matches exactly."
      },
      {
        "id": "quiz-b-45",
        "number": 45,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An e-commerce platform with 10 million products evaluates two search algorithms. Algorithm X completes in 23 fixed operations regardless of product count. Algorithm Y takes up to 10,000,000 operations. What are their complexities and which should power the product search?",
        "answer": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion.",
        "wrong": [
          "Both are O(n); Algorithm X should be chosen because 23 operations is numerically smaller than 10,000,000 for this specific dataset.",
          "Algorithm X is O(log n); Algorithm Y is O(n²). Algorithm X is better because logarithmic growth is slower than quadratic growth at all sizes.",
          "Both are O(log n); Algorithm X is preferred because its constant factor of 23 is smaller than Algorithm Y's constant factor at this dataset size."
        ],
        "explanation": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion."
      },
      {
        "id": "quiz-b-46",
        "number": 46,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A mobile app loads all contacts into memory so users can scroll through them. A user with 50 contacts uses 50 memory slots; a user with 5,000 contacts uses 5,000 slots. What is the space complexity and is it appropriate?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "linear space; memory grows proportionally with contact count, which is expected and acceptable for a contact list application."
      },
      {
        "id": "quiz-b-47",
        "number": 47,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "When Ω (best case) = Θ (average case) = O (worst case) for an algorithm, what does this equal relationship mean for the algorithm's behavior?",
        "answer": "The algorithm has tight complexity",
        "wrong": [
          "The algorithm is asymptotically unstable and produces widely varying step counts on different inputs even of the same size n.",
          "The algorithm uses exponential memory in all three cases, making it impractical for any input size larger than a few dozen elements.",
          "The algorithm degenerates to sequential execution when best and worst cases match, losing all parallel performance benefits."
        ],
        "explanation": "it performs the same number of steps on every input of size n, making its behavior perfectly predictable."
      },
      {
        "id": "quiz-b-48",
        "number": 48,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A naive duplicate file detector compares every file to every other file. With 10,000 files, how many comparisons are made, what is the complexity, and what smarter approach reduces it?",
        "answer": "100,000,000 comparisons",
        "wrong": [
          "10,000 comparisons",
          "20,000 comparisons",
          "10,000,000,000,000 comparisons"
        ],
        "explanation": "O(n²); computing a hash for each file and comparing hashes instead of file contents reduces this to O(n)."
      },
      {
        "id": "quiz-b-49",
        "number": 49,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A government portal expects 50 million citizen logins. System A stores usernames in an unsorted list and checks them sequentially. System B uses a hash table. What are their Big O worst-case complexities and which must be chosen?",
        "answer": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant.",
        "wrong": [
          "System A is O(log n); System B is O(n²). System A is the better choice because logarithmic growth is manageable at 50 million users.",
          "Both systems are O(1) in the worst case; System B should be chosen because hash tables have a smaller constant factor than linear search.",
          "System A is O(n log n); System B is O(n). System B is better because linear growth is slower than linearithmic growth for large user counts."
        ],
        "explanation": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant."
      },
      {
        "id": "quiz-b-50",
        "number": 50,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A teacher asks students to rank these five algorithms from MOST efficient to LEAST efficient for very large inputs: (I) O(n) Linear Search, (II) O(1) Hash Lookup, (III) O(n log n) Merge Sort, (IV) O(n²) Bubble Sort, (V) O(log n) Binary Search. What is the correct ranking?",
        "answer": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
        "wrong": [
          "O(n) Linear Search → O(1) Hash Lookup → O(log n) Binary Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(log n) Binary Search → O(n) Linear Search → O(1) Hash Lookup → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(1) Hash Lookup → O(n) Linear Search → O(n²) Bubble Sort → O(log n) Binary Search → O(n log n) Merge Sort"
        ],
        "explanation": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort"
      }
    ],
    "combinedQuiz": [
      {
        "id": "quiz-a-1",
        "number": 1,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is the primary characteristic that defines message-passing programming as distinct from shared-memory programming?",
        "answer": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other.",
        "wrong": [
          "Processes share a distributed cache layer that all nodes can read from and write to simultaneously.",
          "Processes communicate through a central coordinator node that manages all data transfers between workers.",
          "Processes share a single common memory space and communicate by reading and writing the same variables directly."
        ],
        "explanation": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other."
      },
      {
        "id": "quiz-a-2",
        "number": 2,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement best describes asynchronous communication in a message-passing program?",
        "answer": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it.",
        "wrong": [
          "A sending process suspends all computation and remains idle until the receiving process explicitly confirms the message arrived.",
          "All participating processes coordinate to send and receive messages at a pre-agreed synchronized time checkpoint.",
          "The operating system buffers all messages and delivers them in the exact sequence they were originally transmitted."
        ],
        "explanation": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it."
      },
      {
        "id": "quiz-a-3",
        "number": 3,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "In message-passing programming, what accurately describes point-to-point communication?",
        "answer": "One process sends a message to one specific, individually addressed target process for direct exchange.",
        "wrong": [
          "Every process in the group sends its local data to every other process simultaneously in a ring pattern.",
          "A group of processes collectively computes a result and delivers it to all members of the communicator.",
          "One root process distributes identical copies of a message to every other process in the communicator group."
        ],
        "explanation": "One process sends a message to one specific, individually addressed target process for direct exchange."
      },
      {
        "id": "quiz-a-4",
        "number": 4,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What does the acronym MPI stand for in high-performance parallel computing?",
        "answer": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming.",
        "wrong": [
          "Memory Partitioned Interface, the specification for dividing RAM equally among parallel worker threads.",
          "Modular Parallel Implementation, a framework for automatically decomposing sequential programs into tasks.",
          "Multi-Process Integration, the standard protocol for combining results across multi-core processors."
        ],
        "explanation": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming."
      },
      {
        "id": "quiz-a-5",
        "number": 5,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A 500-node cluster runs a weather simulation where each node independently processes one geographic region and exchanges boundary values only with adjacent nodes. Which parallel paradigm fits best?",
        "answer": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls.",
        "wrong": [
          "Shared-memory using Intel TBB, because the threading library efficiently manages work queues across all cluster nodes.",
          "Shared-memory using POSIX threads, because pthreads allow fine-grained control over each node's regional data buffer.",
          "Shared-memory using OpenMP, because compiler directives automatically distribute the regional computation across all 500 nodes."
        ],
        "explanation": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls."
      },
      {
        "id": "quiz-a-6",
        "number": 6,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly describes a key scalability advantage of message-passing programming over shared-memory programming?",
        "answer": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly.",
        "wrong": [
          "Message-passing programs use a global shared bus so that adding more nodes directly increases available memory bandwidth.",
          "Message-passing programs depend on a shared heap segment that grows proportionally as more compute nodes join the cluster.",
          "Message-passing programs run on a single machine with shared RAM and scale well because the OS manages lock contention automatically."
        ],
        "explanation": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly."
      },
      {
        "id": "quiz-a-7",
        "number": 7,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is collective communication in message-passing systems and which operation is an example of it?",
        "answer": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process.",
        "wrong": [
          "Collective communication describes the technique of buffering multiple point-to-point messages to reduce individual transmission overhead.",
          "Collective communication describes a fault-tolerance protocol where surviving processes redistribute work from a failed process automatically.",
          "Collective communication describes one process sending a private message to one specific partner, as in a standard MPI_Send call."
        ],
        "explanation": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process."
      },
      {
        "id": "quiz-a-8",
        "number": 8,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Two MPI processes — P0 and P1 — each call a blocking MPI_Send to the other before calling MPI_Recv. Neither process ever proceeds past its send call and the program freezes permanently. What condition has occurred and how is it resolved?",
        "answer": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend.",
        "wrong": [
          "A scheduling conflict has occurred; the fix is to assign each process to a dedicated CPU core using processor affinity settings.",
          "A collective communication mismatch has occurred; the fix is to replace MPI_Send with MPI_Bcast so both processes receive the message.",
          "A memory overflow has occurred because each blocking send allocated a buffer larger than the available RAM on each node."
        ],
        "explanation": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend."
      },
      {
        "id": "quiz-a-9",
        "number": 9,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A financial HPC cluster shows no speedup gain after 150 nodes even when 50 more nodes are added. The computation per node remains constant but inter-node messaging has grown. What does this indicate about the message-passing workload?",
        "answer": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide.",
        "wrong": [
          "The financial dataset is too small for the cluster size, so each extra node receives zero work items and sits idle during the run.",
          "The network switch is running at capacity so the OS automatically throttles new nodes to prevent packet loss on the interconnect.",
          "The MPI library reached its maximum registered process count of 150 and stopped accepting new worker registrations."
        ],
        "explanation": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide."
      },
      {
        "id": "quiz-a-10",
        "number": 10,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly identifies a significant debugging challenge that is specific to message-passing programs?",
        "answer": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently.",
        "wrong": [
          "Message-passing programs share a global heap, so memory corruption in one process is immediately visible and easy to isolate.",
          "Message-passing programs always execute sequentially on one core, so the debugger can single-step through every instruction in order.",
          "Message-passing programs store all communication logs in a shared database, giving the developer a complete audit trail of every exchange."
        ],
        "explanation": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently."
      },
      {
        "id": "quiz-a-11",
        "number": 11,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "How is synchronization between processes handled in the message-passing programming model?",
        "answer": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes.",
        "wrong": [
          "Synchronization is fully automatic; the MPI runtime inserts barriers between every communication call without developer intervention.",
          "Synchronization is unnecessary because each process runs in complete isolation and never needs to coordinate timing with any peer.",
          "Synchronization is handled by a dedicated master process that polls all workers and issues clock signals at fixed time intervals."
        ],
        "explanation": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes."
      },
      {
        "id": "quiz-a-12",
        "number": 12,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A physics simulation on 1,000 nodes produces partial results on each node. At the end, all partial sums must be totaled into a single global result held on Node 0. Which MPI collective operation is the correct and most efficient choice?",
        "answer": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result.",
        "wrong": [
          "MPI_Bcast, where Node 0 transmits its partial result to all other nodes so every process holds the same starting value.",
          "MPI_Scatter, where Node 0 breaks a large dataset into chunks and distributes one unique chunk to each of the 1,000 nodes.",
          "MPI_Alltoall, where every node exchanges its partial result with every other node so all nodes hold all partial sums."
        ],
        "explanation": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result."
      },
      {
        "id": "quiz-a-13",
        "number": 13,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What are the three sequential steps that the Divide and Conquer algorithm technique performs at each level of recursion?",
        "answer": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer.",
        "wrong": [
          "Initialize the data structure, process each element sequentially, then output the final combined result to storage.",
          "Partition the input data evenly, sort each partition with an insertion pass, then merge adjacent sorted partitions repeatedly.",
          "Select the optimal sub-problem to solve first, execute it greedily, then propagate the result to dependent sub-problems."
        ],
        "explanation": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer."
      },
      {
        "id": "quiz-a-14",
        "number": 14,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which algorithm design technique makes the locally optimal choice at each decision step and never revisits a previous decision?",
        "answer": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices.",
        "wrong": [
          "Dynamic Programming, which stores every sub-problem solution in a table and reuses those stored answers in future computations.",
          "Backtracking, which explores each candidate solution fully and retreats to the previous checkpoint when a dead end is encountered.",
          "Branch and Bound, which maintains a priority queue of partial solutions ranked by their lower-bound cost estimate."
        ],
        "explanation": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices."
      },
      {
        "id": "quiz-a-15",
        "number": 15,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What is the key distinguishing difference between Dynamic Programming and the Divide and Conquer technique?",
        "answer": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently.",
        "wrong": [
          "Divide and Conquer stores solutions to sub-problems in a lookup table while Dynamic Programming always recomputes them from scratch.",
          "Dynamic Programming works only on graph problems while Divide and Conquer applies only to array and sorting problems.",
          "Divide and Conquer requires distributed memory clusters while Dynamic Programming runs only on shared-memory multi-core systems."
        ],
        "explanation": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently."
      },
      {
        "id": "quiz-a-16",
        "number": 16,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which description most accurately defines how the Backtracking algorithm works?",
        "answer": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails.",
        "wrong": [
          "The algorithm builds a priority queue of candidate solutions ranked by their estimated cost and processes the cheapest candidate first.",
          "The algorithm expresses the problem as a set of linear constraints and finds the assignment of variables that satisfies all constraints optimally.",
          "The algorithm divides the solution space into two halves repeatedly and processes each half on a separate processor simultaneously."
        ],
        "explanation": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails."
      },
      {
        "id": "quiz-a-17",
        "number": 17,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which real-world combinatorial puzzle is the most classically cited example of the Backtracking algorithm in computer science textbooks?",
        "answer": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen.",
        "wrong": [
          "The Fibonacci Series problem, where each term depends on the sum of the two immediately preceding terms in the sequence.",
          "The Travelling Salesman Problem, where the total distance of a route connecting all cities must be minimized globally.",
          "The Shortest Path Problem, where the minimum-cost route between two nodes in a weighted graph must be identified."
        ],
        "explanation": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen."
      },
      {
        "id": "quiz-a-18",
        "number": 18,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A delivery company must find the minimum-distance route visiting 12 cities. The solution space is enormous. Which design technique intelligently prunes unpromising routes without evaluating every possibility?",
        "answer": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found.",
        "wrong": [
          "The Greedy Method, which builds the route one city at a time by always traveling to the nearest unvisited city from the current location.",
          "Dynamic Programming, which breaks the route into overlapping city-pair sub-problems and stores the shortest sub-route for each pair.",
          "Linear Programming, which models the routing decision as a set of linear equations and solves for the assignment that minimizes total distance."
        ],
        "explanation": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found."
      },
      {
        "id": "quiz-a-19",
        "number": 19,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "The Fibonacci algorithm (Fib(n) = Fib(n-1) + Fib(n-2)) implemented with a lookup table to avoid repeated computation is a classic example of which technique?",
        "answer": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls.",
        "wrong": [
          "Backtracking, because the recursion explores multiple candidate values before settling on the correct Fibonacci term at depth n.",
          "Branch and Bound, because the recursion tree branches into two sub-calls and prunes branches where Fib values are already known.",
          "Divide and Conquer, because the problem is split into two independent halves that are solved separately and their results summed."
        ],
        "explanation": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls."
      },
      {
        "id": "quiz-a-20",
        "number": 20,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Both Binary Search and Merge Sort are textbook examples of which parallel algorithm design technique?",
        "answer": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results.",
        "wrong": [
          "Greedy Method, because both algorithms commit to a locally optimal decision at each step without reconsidering prior choices.",
          "Dynamic Programming, because both algorithms store results from smaller input sizes to avoid re-scanning previously processed data.",
          "Branch and Bound, because both algorithms prune sections of the input that cannot possibly contribute to the final answer."
        ],
        "explanation": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results."
      },
      {
        "id": "quiz-a-21",
        "number": 21,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A logistics firm assigns delivery drivers to routes to maximize total deliveries in an 8-hour shift. Driver assignment, shift-hour limits, and vehicle capacity all have linear relationships. Which design technique directly models and solves this optimization problem?",
        "answer": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically.",
        "wrong": [
          "Branch and Bound, which generates a tree of partial assignments and prunes branches where estimated deliveries fall below the current best.",
          "Greedy Method, which assigns the driver with the greatest remaining shift time to the longest available route at each decision step.",
          "Backtracking, which tries every possible driver-to-route assignment and retreats whenever a shift-hour or capacity constraint is violated."
        ],
        "explanation": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically."
      },
      {
        "id": "quiz-a-22",
        "number": 22,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A game developer builds a maze solver that explores a path step by step, and when it hits a dead end, it reverses to the last junction and tries a different direction. This continues until the exit is found. Which design technique is being implemented?",
        "answer": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered.",
        "wrong": [
          "Greedy Method, because at each junction the solver picks the corridor that appears to lead most directly toward the exit position.",
          "Branch and Bound, because at each junction the solver calculates the minimum remaining distance and prunes corridors that exceed the limit.",
          "Divide and Conquer, because the maze is split into quadrants and each quadrant is solved independently by a recursive sub-call."
        ],
        "explanation": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered."
      },
      {
        "id": "quiz-a-23",
        "number": 23,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "What is the defining characteristic of the shared-memory parallel programming model?",
        "answer": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables.",
        "wrong": [
          "Threads are assigned to separate physical servers and synchronize by exchanging data packets over a high-speed network interconnect.",
          "Each thread operates on an independent memory bank that is readable by the CPU but not directly accessible by any other thread.",
          "Each thread holds a private copy of all program variables and must explicitly send updates to other threads through a message queue."
        ],
        "explanation": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables."
      },
      {
        "id": "quiz-a-24",
        "number": 24,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Two threads simultaneously read a shared counter, each adds one to it, and each writes back the result. The counter increments by one instead of two. What is this concurrency problem called?",
        "answer": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost.",
        "wrong": [
          "A memory leak, where each thread allocates a new buffer for the counter value but never frees the old buffer after writing.",
          "A stack overflow, where the counter variable exceeds the maximum integer range supported by the thread's private call stack memory.",
          "A deadlock, where both threads are blocked waiting for a resource that the other thread currently holds and refuses to release."
        ],
        "explanation": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost."
      },
      {
        "id": "quiz-a-25",
        "number": 25,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Which synchronization mechanism in shared-memory programming ensures that only one thread at a time can execute a critical section of code?",
        "answer": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time.",
        "wrong": [
          "A network socket, which provides a reliable byte-stream channel between two threads running on different CPU cores.",
          "A memory-mapped file, which maps shared data to a file on disk so multiple threads can access it through the file system.",
          "A message queue, which buffers outgoing data from one thread and delivers it to another thread in the order it was enqueued."
        ],
        "explanation": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time."
      },
      {
        "id": "quiz-b-26",
        "number": 26,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "In shared-memory programming, what is the key difference between multithreading and multiprocessing?",
        "answer": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory.",
        "wrong": [
          "Multithreading allocates a separate CPU socket to each thread while multiprocessing runs all tasks on a single CPU core in rotation.",
          "Multithreading is exclusively used for input/output tasks while multiprocessing handles all mathematical and computational operations.",
          "Multithreading requires a special OS kernel module while multiprocessing runs on any standard operating system without modification."
        ],
        "explanation": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory."
      },
      {
        "id": "quiz-b-27",
        "number": 27,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which parallel processing framework uses pragma compiler directives to parallelize loops and is specifically designed for shared-memory multi-core systems?",
        "answer": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code.",
        "wrong": [
          "CUDA (Compute Unified Device Architecture), which offloads massively parallel computations to GPU streaming multiprocessors.",
          "MPI (Message Passing Interface), which uses explicit send/receive calls to coordinate work across distributed-memory compute nodes.",
          "Hadoop MapReduce, which distributes large dataset processing across a cluster of commodity servers using a key-value paradigm."
        ],
        "explanation": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code."
      },
      {
        "id": "quiz-b-28",
        "number": 28,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Thread A and Thread B both execute 'counter++' on a shared variable 1,000 times each without any synchronization. The final value is 1,743 instead of 2,000. What caused the discrepancy of 257?",
        "answer": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost.",
        "wrong": [
          "The operating system's thread scheduler assigned both threads to the same CPU core, causing them to alternate too slowly to complete all increments.",
          "The threads consumed excessive CPU cache capacity causing some increment operations to be silently discarded by the cache coherence protocol.",
          "The compiler optimized away 257 redundant increment operations because it detected that both threads were modifying the same variable."
        ],
        "explanation": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost."
      },
      {
        "id": "quiz-b-29",
        "number": 29,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "As the number of threads in a shared-memory program increases to very large numbers, what performance limitation typically emerges?",
        "answer": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains.",
        "wrong": [
          "The operating system automatically converts the shared-memory program to a message-passing program to handle the extra threads efficiently.",
          "Memory usage drops to zero because the threads share so much data that very little unique information needs to be stored per thread.",
          "The compiler automatically inserts additional mutex locks that protect all shared variables so thread safety improves as thread count grows."
        ],
        "explanation": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains."
      },
      {
        "id": "quiz-b-30",
        "number": 30,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "An online exam system on a 32-core server handles 5,000 simultaneous student registrations. Each registration decrements a shared 'seats_remaining' counter. Which approach correctly prevents registration count errors in shared-memory programming?",
        "answer": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates.",
        "wrong": [
          "Allow all 5,000 threads to update the counter simultaneously and rely on the CPU's out-of-order execution to merge the updates correctly.",
          "Run each student's session on a separate virtual machine so that each VM maintains its own independent copy of the counter value.",
          "Use file locking to write the counter to disk before each decrement so the persistent file serves as the authoritative shared state."
        ],
        "explanation": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates."
      },
      {
        "id": "quiz-b-31",
        "number": 31,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Two Java threads process bank account transactions on the same account object. Both read a balance of PHP 10,000, each deducts PHP 8,000, and both write PHP 2,000 back — leaving PHP 2,000 instead of detecting an overdraft. Which concurrency problem caused this and what is the correct fix?",
        "answer": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time.",
        "wrong": [
          "A deadlock caused both threads to block waiting for the account object lock; adding a second lock object on the transaction class resolves it.",
          "A memory leak caused transaction objects to pile up; calling System.gc() after each transaction frees the excess objects and corrects the balance.",
          "A stack overflow in the transaction recursion caused the balance to be partially written; increasing the JVM thread stack size resolves the issue."
        ],
        "explanation": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time."
      },
      {
        "id": "quiz-b-32",
        "number": 32,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which statement accurately describes the communication advantage of shared-memory programming over message-passing for tasks on a single machine?",
        "answer": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead.",
        "wrong": [
          "Shared-memory programs automatically distribute their computations across multiple physical servers with no network configuration needed.",
          "Shared-memory programs prevent all race conditions by default because the compiler inserts atomic operations around every memory access.",
          "Shared-memory programs scale to unlimited thread counts because lock contention decreases automatically as more cores are added to the system."
        ],
        "explanation": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead."
      },
      {
        "id": "quiz-b-33",
        "number": 33,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does complexity analysis measure about a computer program or algorithm?",
        "answer": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows.",
        "wrong": [
          "Complexity analysis counts the total number of lines of source code and evaluates how readable the code is for future developers.",
          "Complexity analysis evaluates the quality of a program's user interface and measures user interaction response times under load.",
          "Complexity analysis audits the number of external library dependencies and scores how maintainable the program is over time."
        ],
        "explanation": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows."
      },
      {
        "id": "quiz-b-34",
        "number": 34,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big O notation (O) specifically represent when describing algorithm complexity?",
        "answer": "Big O represents the worst-case upper bound",
        "wrong": [
          "Big O represents the best-case minimum number of steps the algorithm will perform when given the most favorable possible input.",
          "Big O represents the average-case expected performance across all typical real-world inputs for the algorithm.",
          "Big O represents the exact number of operations the algorithm performs for every specific input of a given size n."
        ],
        "explanation": "the maximum growth rate the algorithm's resource usage will ever reach."
      },
      {
        "id": "quiz-b-35",
        "number": 35,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big Omega notation (Ω) represent in algorithm complexity analysis?",
        "answer": "Big Omega represents the best-case lower bound",
        "wrong": [
          "Big Omega represents the worst-case upper bound",
          "Big Omega represents the average-case expected growth rate when inputs are drawn uniformly at random from all possible values.",
          "Big Omega represents the memory complexity of the algorithm expressed in terms of the number of recursive function call frames."
        ],
        "explanation": "the minimum number of steps the algorithm will ever need on any input."
      },
      {
        "id": "quiz-b-36",
        "number": 36,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm performs exactly 7 operations whether the input list has 10 items or 10,000,000 items. What time complexity class does this represent?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "constant complexity, because the number of operations never changes regardless of how large the input becomes."
      },
      {
        "id": "quiz-b-37",
        "number": 37,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search on a sorted array of 1,024 elements finds the target in at most 10 steps. On 1,048,576 elements it finds it in at most 20 steps. What time complexity does this pattern represent?",
        "answer": "O(log n)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(1)"
        ],
        "explanation": "logarithmic complexity, where each step eliminates half the remaining candidates so steps grow very slowly with array size."
      },
      {
        "id": "quiz-b-38",
        "number": 38,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A loop visits every element in an array of n items exactly once and performs one operation on each. What is the time complexity of this loop?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "linear complexity, because the total number of operations grows in direct proportion to the number of items in the array."
      },
      {
        "id": "quiz-b-39",
        "number": 39,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm contains an outer loop running n times and an inner loop that also runs n times for each outer iteration. What is the time complexity?",
        "answer": "O(n²)",
        "wrong": [
          "O(n)",
          "O(n log n)",
          "O(2n)"
        ],
        "explanation": "quadratic, because the inner loop executes n times for each of the n outer iterations giving n multiplied by n total steps."
      },
      {
        "id": "quiz-b-40",
        "number": 40,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A hospital's patient lookup system uses linear search on 1,000,000 unsorted records. In the worst case, approximately how many record comparisons are made and what is the Big O complexity?",
        "answer": "Up to 1,000,000 comparisons",
        "wrong": [
          "About 20 comparisons",
          "Exactly 1 comparison",
          "Up to 1,000,000,000,000 comparisons"
        ],
        "explanation": "O(n), because linear search checks every record until a match is found or the list is exhausted."
      },
      {
        "id": "quiz-b-41",
        "number": 41,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Sorting 1,000 student scores with Merge Sort takes roughly 10,000 operations. Using the same O(n log n) relationship, approximately how many operations does sorting 1,000,000 scores require?",
        "answer": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000.",
        "wrong": [
          "About 20,000,000,000 operations, because the sort switches to O(n²) behavior once the input exceeds one million elements.",
          "About 1,000,000 operations, because O(n log n) scales at the same rate as O(n) when the logarithmic factor remains near constant.",
          "About 1,000 operations, because the logarithmic factor reduces the linear component proportionally."
        ],
        "explanation": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000."
      },
      {
        "id": "quiz-b-42",
        "number": 42,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A cashier program sums all item prices in a shopping cart using one variable: 'int sum = 0; for(item: cart) sum += item.price;'. What is the space complexity of this algorithm?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "constant space, because only one variable (sum) is ever allocated regardless of how many items appear in the cart."
      },
      {
        "id": "quiz-b-43",
        "number": 43,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search runs in O(log n) time. What critical requirement must the data meet BEFORE Binary Search can be applied correctly?",
        "answer": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard.",
        "wrong": [
          "The data must be stored in a hash table so that each element can be located by computing its position from its key value directly.",
          "The data must be stored in a linked list so that Binary Search can traverse forward and backward from a given starting element.",
          "The data must fit entirely within the CPU's L1 cache so that each Binary Search probe accesses an element in a single clock cycle."
        ],
        "explanation": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard."
      },
      {
        "id": "quiz-b-44",
        "number": 44,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An app runs in 0.1 seconds for 500 users. After going viral with 500,000 users (a 1,000× growth), response time is 100,000 seconds. A developer suspects a quadratic algorithm. Is O(n²) consistent with this observation?",
        "answer": "Yes",
        "wrong": [
          "No",
          "No",
          "Yes"
        ],
        "explanation": "under O(n²), a 1,000× user increase causes a 1,000²=1,000,000× time increase: 0.1s × 1,000,000 = 100,000s, which matches exactly."
      },
      {
        "id": "quiz-b-45",
        "number": 45,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An e-commerce platform with 10 million products evaluates two search algorithms. Algorithm X completes in 23 fixed operations regardless of product count. Algorithm Y takes up to 10,000,000 operations. What are their complexities and which should power the product search?",
        "answer": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion.",
        "wrong": [
          "Both are O(n); Algorithm X should be chosen because 23 operations is numerically smaller than 10,000,000 for this specific dataset.",
          "Algorithm X is O(log n); Algorithm Y is O(n²). Algorithm X is better because logarithmic growth is slower than quadratic growth at all sizes.",
          "Both are O(log n); Algorithm X is preferred because its constant factor of 23 is smaller than Algorithm Y's constant factor at this dataset size."
        ],
        "explanation": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion."
      },
      {
        "id": "quiz-b-46",
        "number": 46,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A mobile app loads all contacts into memory so users can scroll through them. A user with 50 contacts uses 50 memory slots; a user with 5,000 contacts uses 5,000 slots. What is the space complexity and is it appropriate?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "linear space; memory grows proportionally with contact count, which is expected and acceptable for a contact list application."
      },
      {
        "id": "quiz-b-47",
        "number": 47,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "When Ω (best case) = Θ (average case) = O (worst case) for an algorithm, what does this equal relationship mean for the algorithm's behavior?",
        "answer": "The algorithm has tight complexity",
        "wrong": [
          "The algorithm is asymptotically unstable and produces widely varying step counts on different inputs even of the same size n.",
          "The algorithm uses exponential memory in all three cases, making it impractical for any input size larger than a few dozen elements.",
          "The algorithm degenerates to sequential execution when best and worst cases match, losing all parallel performance benefits."
        ],
        "explanation": "it performs the same number of steps on every input of size n, making its behavior perfectly predictable."
      },
      {
        "id": "quiz-b-48",
        "number": 48,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A naive duplicate file detector compares every file to every other file. With 10,000 files, how many comparisons are made, what is the complexity, and what smarter approach reduces it?",
        "answer": "100,000,000 comparisons",
        "wrong": [
          "10,000 comparisons",
          "20,000 comparisons",
          "10,000,000,000,000 comparisons"
        ],
        "explanation": "O(n²); computing a hash for each file and comparing hashes instead of file contents reduces this to O(n)."
      },
      {
        "id": "quiz-b-49",
        "number": 49,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A government portal expects 50 million citizen logins. System A stores usernames in an unsorted list and checks them sequentially. System B uses a hash table. What are their Big O worst-case complexities and which must be chosen?",
        "answer": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant.",
        "wrong": [
          "System A is O(log n); System B is O(n²). System A is the better choice because logarithmic growth is manageable at 50 million users.",
          "Both systems are O(1) in the worst case; System B should be chosen because hash tables have a smaller constant factor than linear search.",
          "System A is O(n log n); System B is O(n). System B is better because linear growth is slower than linearithmic growth for large user counts."
        ],
        "explanation": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant."
      },
      {
        "id": "quiz-b-50",
        "number": 50,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A teacher asks students to rank these five algorithms from MOST efficient to LEAST efficient for very large inputs: (I) O(n) Linear Search, (II) O(1) Hash Lookup, (III) O(n log n) Merge Sort, (IV) O(n²) Bubble Sort, (V) O(log n) Binary Search. What is the correct ranking?",
        "answer": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
        "wrong": [
          "O(n) Linear Search → O(1) Hash Lookup → O(log n) Binary Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(log n) Binary Search → O(n) Linear Search → O(1) Hash Lookup → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(1) Hash Lookup → O(n) Linear Search → O(n²) Bubble Sort → O(log n) Binary Search → O(n log n) Merge Sort"
        ],
        "explanation": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort"
      }
    ],
    "combinedQuizA": [
      {
        "id": "quiz-a-1",
        "number": 1,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is the primary characteristic that defines message-passing programming as distinct from shared-memory programming?",
        "answer": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other.",
        "wrong": [
          "Processes share a distributed cache layer that all nodes can read from and write to simultaneously.",
          "Processes communicate through a central coordinator node that manages all data transfers between workers.",
          "Processes share a single common memory space and communicate by reading and writing the same variables directly."
        ],
        "explanation": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other."
      },
      {
        "id": "quiz-a-2",
        "number": 2,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement best describes asynchronous communication in a message-passing program?",
        "answer": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it.",
        "wrong": [
          "A sending process suspends all computation and remains idle until the receiving process explicitly confirms the message arrived.",
          "All participating processes coordinate to send and receive messages at a pre-agreed synchronized time checkpoint.",
          "The operating system buffers all messages and delivers them in the exact sequence they were originally transmitted."
        ],
        "explanation": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it."
      },
      {
        "id": "quiz-a-3",
        "number": 3,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "In message-passing programming, what accurately describes point-to-point communication?",
        "answer": "One process sends a message to one specific, individually addressed target process for direct exchange.",
        "wrong": [
          "Every process in the group sends its local data to every other process simultaneously in a ring pattern.",
          "A group of processes collectively computes a result and delivers it to all members of the communicator.",
          "One root process distributes identical copies of a message to every other process in the communicator group."
        ],
        "explanation": "One process sends a message to one specific, individually addressed target process for direct exchange."
      },
      {
        "id": "quiz-a-4",
        "number": 4,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What does the acronym MPI stand for in high-performance parallel computing?",
        "answer": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming.",
        "wrong": [
          "Memory Partitioned Interface, the specification for dividing RAM equally among parallel worker threads.",
          "Modular Parallel Implementation, a framework for automatically decomposing sequential programs into tasks.",
          "Multi-Process Integration, the standard protocol for combining results across multi-core processors."
        ],
        "explanation": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming."
      },
      {
        "id": "quiz-a-5",
        "number": 5,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A 500-node cluster runs a weather simulation where each node independently processes one geographic region and exchanges boundary values only with adjacent nodes. Which parallel paradigm fits best?",
        "answer": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls.",
        "wrong": [
          "Shared-memory using Intel TBB, because the threading library efficiently manages work queues across all cluster nodes.",
          "Shared-memory using POSIX threads, because pthreads allow fine-grained control over each node's regional data buffer.",
          "Shared-memory using OpenMP, because compiler directives automatically distribute the regional computation across all 500 nodes."
        ],
        "explanation": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls."
      },
      {
        "id": "quiz-a-6",
        "number": 6,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly describes a key scalability advantage of message-passing programming over shared-memory programming?",
        "answer": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly.",
        "wrong": [
          "Message-passing programs use a global shared bus so that adding more nodes directly increases available memory bandwidth.",
          "Message-passing programs depend on a shared heap segment that grows proportionally as more compute nodes join the cluster.",
          "Message-passing programs run on a single machine with shared RAM and scale well because the OS manages lock contention automatically."
        ],
        "explanation": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly."
      },
      {
        "id": "quiz-a-7",
        "number": 7,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is collective communication in message-passing systems and which operation is an example of it?",
        "answer": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process.",
        "wrong": [
          "Collective communication describes the technique of buffering multiple point-to-point messages to reduce individual transmission overhead.",
          "Collective communication describes a fault-tolerance protocol where surviving processes redistribute work from a failed process automatically.",
          "Collective communication describes one process sending a private message to one specific partner, as in a standard MPI_Send call."
        ],
        "explanation": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process."
      },
      {
        "id": "quiz-a-8",
        "number": 8,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Two MPI processes — P0 and P1 — each call a blocking MPI_Send to the other before calling MPI_Recv. Neither process ever proceeds past its send call and the program freezes permanently. What condition has occurred and how is it resolved?",
        "answer": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend.",
        "wrong": [
          "A scheduling conflict has occurred; the fix is to assign each process to a dedicated CPU core using processor affinity settings.",
          "A collective communication mismatch has occurred; the fix is to replace MPI_Send with MPI_Bcast so both processes receive the message.",
          "A memory overflow has occurred because each blocking send allocated a buffer larger than the available RAM on each node."
        ],
        "explanation": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend."
      },
      {
        "id": "quiz-a-9",
        "number": 9,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A financial HPC cluster shows no speedup gain after 150 nodes even when 50 more nodes are added. The computation per node remains constant but inter-node messaging has grown. What does this indicate about the message-passing workload?",
        "answer": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide.",
        "wrong": [
          "The financial dataset is too small for the cluster size, so each extra node receives zero work items and sits idle during the run.",
          "The network switch is running at capacity so the OS automatically throttles new nodes to prevent packet loss on the interconnect.",
          "The MPI library reached its maximum registered process count of 150 and stopped accepting new worker registrations."
        ],
        "explanation": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide."
      },
      {
        "id": "quiz-a-10",
        "number": 10,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly identifies a significant debugging challenge that is specific to message-passing programs?",
        "answer": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently.",
        "wrong": [
          "Message-passing programs share a global heap, so memory corruption in one process is immediately visible and easy to isolate.",
          "Message-passing programs always execute sequentially on one core, so the debugger can single-step through every instruction in order.",
          "Message-passing programs store all communication logs in a shared database, giving the developer a complete audit trail of every exchange."
        ],
        "explanation": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently."
      },
      {
        "id": "quiz-a-11",
        "number": 11,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "How is synchronization between processes handled in the message-passing programming model?",
        "answer": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes.",
        "wrong": [
          "Synchronization is fully automatic; the MPI runtime inserts barriers between every communication call without developer intervention.",
          "Synchronization is unnecessary because each process runs in complete isolation and never needs to coordinate timing with any peer.",
          "Synchronization is handled by a dedicated master process that polls all workers and issues clock signals at fixed time intervals."
        ],
        "explanation": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes."
      },
      {
        "id": "quiz-a-12",
        "number": 12,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A physics simulation on 1,000 nodes produces partial results on each node. At the end, all partial sums must be totaled into a single global result held on Node 0. Which MPI collective operation is the correct and most efficient choice?",
        "answer": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result.",
        "wrong": [
          "MPI_Bcast, where Node 0 transmits its partial result to all other nodes so every process holds the same starting value.",
          "MPI_Scatter, where Node 0 breaks a large dataset into chunks and distributes one unique chunk to each of the 1,000 nodes.",
          "MPI_Alltoall, where every node exchanges its partial result with every other node so all nodes hold all partial sums."
        ],
        "explanation": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result."
      },
      {
        "id": "quiz-a-13",
        "number": 13,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What are the three sequential steps that the Divide and Conquer algorithm technique performs at each level of recursion?",
        "answer": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer.",
        "wrong": [
          "Initialize the data structure, process each element sequentially, then output the final combined result to storage.",
          "Partition the input data evenly, sort each partition with an insertion pass, then merge adjacent sorted partitions repeatedly.",
          "Select the optimal sub-problem to solve first, execute it greedily, then propagate the result to dependent sub-problems."
        ],
        "explanation": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer."
      },
      {
        "id": "quiz-a-14",
        "number": 14,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which algorithm design technique makes the locally optimal choice at each decision step and never revisits a previous decision?",
        "answer": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices.",
        "wrong": [
          "Dynamic Programming, which stores every sub-problem solution in a table and reuses those stored answers in future computations.",
          "Backtracking, which explores each candidate solution fully and retreats to the previous checkpoint when a dead end is encountered.",
          "Branch and Bound, which maintains a priority queue of partial solutions ranked by their lower-bound cost estimate."
        ],
        "explanation": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices."
      },
      {
        "id": "quiz-a-15",
        "number": 15,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What is the key distinguishing difference between Dynamic Programming and the Divide and Conquer technique?",
        "answer": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently.",
        "wrong": [
          "Divide and Conquer stores solutions to sub-problems in a lookup table while Dynamic Programming always recomputes them from scratch.",
          "Dynamic Programming works only on graph problems while Divide and Conquer applies only to array and sorting problems.",
          "Divide and Conquer requires distributed memory clusters while Dynamic Programming runs only on shared-memory multi-core systems."
        ],
        "explanation": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently."
      },
      {
        "id": "quiz-a-16",
        "number": 16,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which description most accurately defines how the Backtracking algorithm works?",
        "answer": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails.",
        "wrong": [
          "The algorithm builds a priority queue of candidate solutions ranked by their estimated cost and processes the cheapest candidate first.",
          "The algorithm expresses the problem as a set of linear constraints and finds the assignment of variables that satisfies all constraints optimally.",
          "The algorithm divides the solution space into two halves repeatedly and processes each half on a separate processor simultaneously."
        ],
        "explanation": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails."
      },
      {
        "id": "quiz-a-17",
        "number": 17,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which real-world combinatorial puzzle is the most classically cited example of the Backtracking algorithm in computer science textbooks?",
        "answer": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen.",
        "wrong": [
          "The Fibonacci Series problem, where each term depends on the sum of the two immediately preceding terms in the sequence.",
          "The Travelling Salesman Problem, where the total distance of a route connecting all cities must be minimized globally.",
          "The Shortest Path Problem, where the minimum-cost route between two nodes in a weighted graph must be identified."
        ],
        "explanation": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen."
      },
      {
        "id": "quiz-a-18",
        "number": 18,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A delivery company must find the minimum-distance route visiting 12 cities. The solution space is enormous. Which design technique intelligently prunes unpromising routes without evaluating every possibility?",
        "answer": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found.",
        "wrong": [
          "The Greedy Method, which builds the route one city at a time by always traveling to the nearest unvisited city from the current location.",
          "Dynamic Programming, which breaks the route into overlapping city-pair sub-problems and stores the shortest sub-route for each pair.",
          "Linear Programming, which models the routing decision as a set of linear equations and solves for the assignment that minimizes total distance."
        ],
        "explanation": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found."
      },
      {
        "id": "quiz-a-19",
        "number": 19,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "The Fibonacci algorithm (Fib(n) = Fib(n-1) + Fib(n-2)) implemented with a lookup table to avoid repeated computation is a classic example of which technique?",
        "answer": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls.",
        "wrong": [
          "Backtracking, because the recursion explores multiple candidate values before settling on the correct Fibonacci term at depth n.",
          "Branch and Bound, because the recursion tree branches into two sub-calls and prunes branches where Fib values are already known.",
          "Divide and Conquer, because the problem is split into two independent halves that are solved separately and their results summed."
        ],
        "explanation": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls."
      },
      {
        "id": "quiz-a-20",
        "number": 20,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Both Binary Search and Merge Sort are textbook examples of which parallel algorithm design technique?",
        "answer": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results.",
        "wrong": [
          "Greedy Method, because both algorithms commit to a locally optimal decision at each step without reconsidering prior choices.",
          "Dynamic Programming, because both algorithms store results from smaller input sizes to avoid re-scanning previously processed data.",
          "Branch and Bound, because both algorithms prune sections of the input that cannot possibly contribute to the final answer."
        ],
        "explanation": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results."
      },
      {
        "id": "quiz-a-21",
        "number": 21,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A logistics firm assigns delivery drivers to routes to maximize total deliveries in an 8-hour shift. Driver assignment, shift-hour limits, and vehicle capacity all have linear relationships. Which design technique directly models and solves this optimization problem?",
        "answer": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically.",
        "wrong": [
          "Branch and Bound, which generates a tree of partial assignments and prunes branches where estimated deliveries fall below the current best.",
          "Greedy Method, which assigns the driver with the greatest remaining shift time to the longest available route at each decision step.",
          "Backtracking, which tries every possible driver-to-route assignment and retreats whenever a shift-hour or capacity constraint is violated."
        ],
        "explanation": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically."
      },
      {
        "id": "quiz-a-22",
        "number": 22,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A game developer builds a maze solver that explores a path step by step, and when it hits a dead end, it reverses to the last junction and tries a different direction. This continues until the exit is found. Which design technique is being implemented?",
        "answer": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered.",
        "wrong": [
          "Greedy Method, because at each junction the solver picks the corridor that appears to lead most directly toward the exit position.",
          "Branch and Bound, because at each junction the solver calculates the minimum remaining distance and prunes corridors that exceed the limit.",
          "Divide and Conquer, because the maze is split into quadrants and each quadrant is solved independently by a recursive sub-call."
        ],
        "explanation": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered."
      },
      {
        "id": "quiz-a-23",
        "number": 23,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "What is the defining characteristic of the shared-memory parallel programming model?",
        "answer": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables.",
        "wrong": [
          "Threads are assigned to separate physical servers and synchronize by exchanging data packets over a high-speed network interconnect.",
          "Each thread operates on an independent memory bank that is readable by the CPU but not directly accessible by any other thread.",
          "Each thread holds a private copy of all program variables and must explicitly send updates to other threads through a message queue."
        ],
        "explanation": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables."
      },
      {
        "id": "quiz-a-24",
        "number": 24,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Two threads simultaneously read a shared counter, each adds one to it, and each writes back the result. The counter increments by one instead of two. What is this concurrency problem called?",
        "answer": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost.",
        "wrong": [
          "A memory leak, where each thread allocates a new buffer for the counter value but never frees the old buffer after writing.",
          "A stack overflow, where the counter variable exceeds the maximum integer range supported by the thread's private call stack memory.",
          "A deadlock, where both threads are blocked waiting for a resource that the other thread currently holds and refuses to release."
        ],
        "explanation": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost."
      },
      {
        "id": "quiz-a-25",
        "number": 25,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Which synchronization mechanism in shared-memory programming ensures that only one thread at a time can execute a critical section of code?",
        "answer": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time.",
        "wrong": [
          "A network socket, which provides a reliable byte-stream channel between two threads running on different CPU cores.",
          "A memory-mapped file, which maps shared data to a file on disk so multiple threads can access it through the file system.",
          "A message queue, which buffers outgoing data from one thread and delivers it to another thread in the order it was enqueued."
        ],
        "explanation": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time."
      }
    ],
    "combinedQuizB": [
      {
        "id": "quiz-b-26",
        "number": 26,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "In shared-memory programming, what is the key difference between multithreading and multiprocessing?",
        "answer": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory.",
        "wrong": [
          "Multithreading allocates a separate CPU socket to each thread while multiprocessing runs all tasks on a single CPU core in rotation.",
          "Multithreading is exclusively used for input/output tasks while multiprocessing handles all mathematical and computational operations.",
          "Multithreading requires a special OS kernel module while multiprocessing runs on any standard operating system without modification."
        ],
        "explanation": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory."
      },
      {
        "id": "quiz-b-27",
        "number": 27,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which parallel processing framework uses pragma compiler directives to parallelize loops and is specifically designed for shared-memory multi-core systems?",
        "answer": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code.",
        "wrong": [
          "CUDA (Compute Unified Device Architecture), which offloads massively parallel computations to GPU streaming multiprocessors.",
          "MPI (Message Passing Interface), which uses explicit send/receive calls to coordinate work across distributed-memory compute nodes.",
          "Hadoop MapReduce, which distributes large dataset processing across a cluster of commodity servers using a key-value paradigm."
        ],
        "explanation": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code."
      },
      {
        "id": "quiz-b-28",
        "number": 28,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Thread A and Thread B both execute 'counter++' on a shared variable 1,000 times each without any synchronization. The final value is 1,743 instead of 2,000. What caused the discrepancy of 257?",
        "answer": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost.",
        "wrong": [
          "The operating system's thread scheduler assigned both threads to the same CPU core, causing them to alternate too slowly to complete all increments.",
          "The threads consumed excessive CPU cache capacity causing some increment operations to be silently discarded by the cache coherence protocol.",
          "The compiler optimized away 257 redundant increment operations because it detected that both threads were modifying the same variable."
        ],
        "explanation": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost."
      },
      {
        "id": "quiz-b-29",
        "number": 29,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "As the number of threads in a shared-memory program increases to very large numbers, what performance limitation typically emerges?",
        "answer": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains.",
        "wrong": [
          "The operating system automatically converts the shared-memory program to a message-passing program to handle the extra threads efficiently.",
          "Memory usage drops to zero because the threads share so much data that very little unique information needs to be stored per thread.",
          "The compiler automatically inserts additional mutex locks that protect all shared variables so thread safety improves as thread count grows."
        ],
        "explanation": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains."
      },
      {
        "id": "quiz-b-30",
        "number": 30,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "An online exam system on a 32-core server handles 5,000 simultaneous student registrations. Each registration decrements a shared 'seats_remaining' counter. Which approach correctly prevents registration count errors in shared-memory programming?",
        "answer": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates.",
        "wrong": [
          "Allow all 5,000 threads to update the counter simultaneously and rely on the CPU's out-of-order execution to merge the updates correctly.",
          "Run each student's session on a separate virtual machine so that each VM maintains its own independent copy of the counter value.",
          "Use file locking to write the counter to disk before each decrement so the persistent file serves as the authoritative shared state."
        ],
        "explanation": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates."
      },
      {
        "id": "quiz-b-31",
        "number": 31,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Two Java threads process bank account transactions on the same account object. Both read a balance of PHP 10,000, each deducts PHP 8,000, and both write PHP 2,000 back — leaving PHP 2,000 instead of detecting an overdraft. Which concurrency problem caused this and what is the correct fix?",
        "answer": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time.",
        "wrong": [
          "A deadlock caused both threads to block waiting for the account object lock; adding a second lock object on the transaction class resolves it.",
          "A memory leak caused transaction objects to pile up; calling System.gc() after each transaction frees the excess objects and corrects the balance.",
          "A stack overflow in the transaction recursion caused the balance to be partially written; increasing the JVM thread stack size resolves the issue."
        ],
        "explanation": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time."
      },
      {
        "id": "quiz-b-32",
        "number": 32,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which statement accurately describes the communication advantage of shared-memory programming over message-passing for tasks on a single machine?",
        "answer": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead.",
        "wrong": [
          "Shared-memory programs automatically distribute their computations across multiple physical servers with no network configuration needed.",
          "Shared-memory programs prevent all race conditions by default because the compiler inserts atomic operations around every memory access.",
          "Shared-memory programs scale to unlimited thread counts because lock contention decreases automatically as more cores are added to the system."
        ],
        "explanation": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead."
      },
      {
        "id": "quiz-b-33",
        "number": 33,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does complexity analysis measure about a computer program or algorithm?",
        "answer": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows.",
        "wrong": [
          "Complexity analysis counts the total number of lines of source code and evaluates how readable the code is for future developers.",
          "Complexity analysis evaluates the quality of a program's user interface and measures user interaction response times under load.",
          "Complexity analysis audits the number of external library dependencies and scores how maintainable the program is over time."
        ],
        "explanation": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows."
      },
      {
        "id": "quiz-b-34",
        "number": 34,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big O notation (O) specifically represent when describing algorithm complexity?",
        "answer": "Big O represents the worst-case upper bound",
        "wrong": [
          "Big O represents the best-case minimum number of steps the algorithm will perform when given the most favorable possible input.",
          "Big O represents the average-case expected performance across all typical real-world inputs for the algorithm.",
          "Big O represents the exact number of operations the algorithm performs for every specific input of a given size n."
        ],
        "explanation": "the maximum growth rate the algorithm's resource usage will ever reach."
      },
      {
        "id": "quiz-b-35",
        "number": 35,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big Omega notation (Ω) represent in algorithm complexity analysis?",
        "answer": "Big Omega represents the best-case lower bound",
        "wrong": [
          "Big Omega represents the worst-case upper bound",
          "Big Omega represents the average-case expected growth rate when inputs are drawn uniformly at random from all possible values.",
          "Big Omega represents the memory complexity of the algorithm expressed in terms of the number of recursive function call frames."
        ],
        "explanation": "the minimum number of steps the algorithm will ever need on any input."
      },
      {
        "id": "quiz-b-36",
        "number": 36,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm performs exactly 7 operations whether the input list has 10 items or 10,000,000 items. What time complexity class does this represent?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "constant complexity, because the number of operations never changes regardless of how large the input becomes."
      },
      {
        "id": "quiz-b-37",
        "number": 37,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search on a sorted array of 1,024 elements finds the target in at most 10 steps. On 1,048,576 elements it finds it in at most 20 steps. What time complexity does this pattern represent?",
        "answer": "O(log n)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(1)"
        ],
        "explanation": "logarithmic complexity, where each step eliminates half the remaining candidates so steps grow very slowly with array size."
      },
      {
        "id": "quiz-b-38",
        "number": 38,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A loop visits every element in an array of n items exactly once and performs one operation on each. What is the time complexity of this loop?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "linear complexity, because the total number of operations grows in direct proportion to the number of items in the array."
      },
      {
        "id": "quiz-b-39",
        "number": 39,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm contains an outer loop running n times and an inner loop that also runs n times for each outer iteration. What is the time complexity?",
        "answer": "O(n²)",
        "wrong": [
          "O(n)",
          "O(n log n)",
          "O(2n)"
        ],
        "explanation": "quadratic, because the inner loop executes n times for each of the n outer iterations giving n multiplied by n total steps."
      },
      {
        "id": "quiz-b-40",
        "number": 40,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A hospital's patient lookup system uses linear search on 1,000,000 unsorted records. In the worst case, approximately how many record comparisons are made and what is the Big O complexity?",
        "answer": "Up to 1,000,000 comparisons",
        "wrong": [
          "About 20 comparisons",
          "Exactly 1 comparison",
          "Up to 1,000,000,000,000 comparisons"
        ],
        "explanation": "O(n), because linear search checks every record until a match is found or the list is exhausted."
      },
      {
        "id": "quiz-b-41",
        "number": 41,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Sorting 1,000 student scores with Merge Sort takes roughly 10,000 operations. Using the same O(n log n) relationship, approximately how many operations does sorting 1,000,000 scores require?",
        "answer": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000.",
        "wrong": [
          "About 20,000,000,000 operations, because the sort switches to O(n²) behavior once the input exceeds one million elements.",
          "About 1,000,000 operations, because O(n log n) scales at the same rate as O(n) when the logarithmic factor remains near constant.",
          "About 1,000 operations, because the logarithmic factor reduces the linear component proportionally."
        ],
        "explanation": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000."
      },
      {
        "id": "quiz-b-42",
        "number": 42,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A cashier program sums all item prices in a shopping cart using one variable: 'int sum = 0; for(item: cart) sum += item.price;'. What is the space complexity of this algorithm?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "constant space, because only one variable (sum) is ever allocated regardless of how many items appear in the cart."
      },
      {
        "id": "quiz-b-43",
        "number": 43,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search runs in O(log n) time. What critical requirement must the data meet BEFORE Binary Search can be applied correctly?",
        "answer": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard.",
        "wrong": [
          "The data must be stored in a hash table so that each element can be located by computing its position from its key value directly.",
          "The data must be stored in a linked list so that Binary Search can traverse forward and backward from a given starting element.",
          "The data must fit entirely within the CPU's L1 cache so that each Binary Search probe accesses an element in a single clock cycle."
        ],
        "explanation": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard."
      },
      {
        "id": "quiz-b-44",
        "number": 44,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An app runs in 0.1 seconds for 500 users. After going viral with 500,000 users (a 1,000× growth), response time is 100,000 seconds. A developer suspects a quadratic algorithm. Is O(n²) consistent with this observation?",
        "answer": "Yes",
        "wrong": [
          "No",
          "No",
          "Yes"
        ],
        "explanation": "under O(n²), a 1,000× user increase causes a 1,000²=1,000,000× time increase: 0.1s × 1,000,000 = 100,000s, which matches exactly."
      },
      {
        "id": "quiz-b-45",
        "number": 45,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An e-commerce platform with 10 million products evaluates two search algorithms. Algorithm X completes in 23 fixed operations regardless of product count. Algorithm Y takes up to 10,000,000 operations. What are their complexities and which should power the product search?",
        "answer": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion.",
        "wrong": [
          "Both are O(n); Algorithm X should be chosen because 23 operations is numerically smaller than 10,000,000 for this specific dataset.",
          "Algorithm X is O(log n); Algorithm Y is O(n²). Algorithm X is better because logarithmic growth is slower than quadratic growth at all sizes.",
          "Both are O(log n); Algorithm X is preferred because its constant factor of 23 is smaller than Algorithm Y's constant factor at this dataset size."
        ],
        "explanation": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion."
      },
      {
        "id": "quiz-b-46",
        "number": 46,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A mobile app loads all contacts into memory so users can scroll through them. A user with 50 contacts uses 50 memory slots; a user with 5,000 contacts uses 5,000 slots. What is the space complexity and is it appropriate?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "linear space; memory grows proportionally with contact count, which is expected and acceptable for a contact list application."
      },
      {
        "id": "quiz-b-47",
        "number": 47,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "When Ω (best case) = Θ (average case) = O (worst case) for an algorithm, what does this equal relationship mean for the algorithm's behavior?",
        "answer": "The algorithm has tight complexity",
        "wrong": [
          "The algorithm is asymptotically unstable and produces widely varying step counts on different inputs even of the same size n.",
          "The algorithm uses exponential memory in all three cases, making it impractical for any input size larger than a few dozen elements.",
          "The algorithm degenerates to sequential execution when best and worst cases match, losing all parallel performance benefits."
        ],
        "explanation": "it performs the same number of steps on every input of size n, making its behavior perfectly predictable."
      },
      {
        "id": "quiz-b-48",
        "number": 48,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A naive duplicate file detector compares every file to every other file. With 10,000 files, how many comparisons are made, what is the complexity, and what smarter approach reduces it?",
        "answer": "100,000,000 comparisons",
        "wrong": [
          "10,000 comparisons",
          "20,000 comparisons",
          "10,000,000,000,000 comparisons"
        ],
        "explanation": "O(n²); computing a hash for each file and comparing hashes instead of file contents reduces this to O(n)."
      },
      {
        "id": "quiz-b-49",
        "number": 49,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A government portal expects 50 million citizen logins. System A stores usernames in an unsorted list and checks them sequentially. System B uses a hash table. What are their Big O worst-case complexities and which must be chosen?",
        "answer": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant.",
        "wrong": [
          "System A is O(log n); System B is O(n²). System A is the better choice because logarithmic growth is manageable at 50 million users.",
          "Both systems are O(1) in the worst case; System B should be chosen because hash tables have a smaller constant factor than linear search.",
          "System A is O(n log n); System B is O(n). System B is better because linear growth is slower than linearithmic growth for large user counts."
        ],
        "explanation": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant."
      },
      {
        "id": "quiz-b-50",
        "number": 50,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A teacher asks students to rank these five algorithms from MOST efficient to LEAST efficient for very large inputs: (I) O(n) Linear Search, (II) O(1) Hash Lookup, (III) O(n log n) Merge Sort, (IV) O(n²) Bubble Sort, (V) O(log n) Binary Search. What is the correct ranking?",
        "answer": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
        "wrong": [
          "O(n) Linear Search → O(1) Hash Lookup → O(log n) Binary Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(log n) Binary Search → O(n) Linear Search → O(1) Hash Lookup → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(1) Hash Lookup → O(n) Linear Search → O(n²) Bubble Sort → O(log n) Binary Search → O(n log n) Merge Sort"
        ],
        "explanation": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort"
      }
    ],
    "week3": [
      {
        "id": "week3-1",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What best describes a process?",
        "answer": "A running program with its own memory space and resources",
        "wrong": [
          "A single variable stored inside shared memory",
          "A hardware-only instruction decoder",
          "A message header used in distributed systems"
        ],
        "explanation": "A process is an independent running program with its own memory space."
      },
      {
        "id": "week3-2",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What best describes a thread?",
        "answer": "A lightweight execution unit inside a process",
        "wrong": [
          "A separate physical computer in a cluster",
          "A storage partition in HDFS",
          "A network protocol for RPC"
        ],
        "explanation": "A thread is the smallest execution unit inside a process and shares process memory."
      },
      {
        "id": "week3-3",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is the key distinction between concurrency and parallelism?",
        "answer": "Concurrency manages multiple tasks; parallelism executes tasks simultaneously",
        "wrong": [
          "Concurrency requires multiple machines; parallelism requires only one core",
          "Concurrency is slower storage; parallelism is faster storage",
          "Concurrency means no synchronization is required"
        ],
        "explanation": "Concurrency is about dealing with multiple tasks; parallelism is about doing them at the same time."
      },
      {
        "id": "week3-4",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Why do threads require synchronization?",
        "answer": "They share memory within a process",
        "wrong": [
          "They cannot communicate with each other",
          "They always run on separate networks",
          "They only execute serial instructions"
        ],
        "explanation": "Threads share memory, so access to shared data must be coordinated."
      },
      {
        "id": "week3-5",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which primitive provides exclusive access to a shared resource?",
        "answer": "Mutex or lock",
        "wrong": [
          "Map phase",
          "HDFS block",
          "Client request"
        ],
        "explanation": "A lock or mutex allows only one thread or process to enter a protected section at a time."
      },
      {
        "id": "week3-6",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which synchronization primitive uses a counter for limited resources?",
        "answer": "Semaphore",
        "wrong": [
          "Condition variable",
          "RPC",
          "Pipeline"
        ],
        "explanation": "A semaphore tracks available resource count."
      },
      {
        "id": "week3-7",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a condition variable used for?",
        "answer": "Waiting until a specific condition becomes true",
        "wrong": [
          "Classifying instruction streams",
          "Storing files across Hadoop nodes",
          "Dividing a program into Map and Reduce"
        ],
        "explanation": "Condition variables let threads wait and be signaled when a condition changes."
      },
      {
        "id": "week3-8",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a monitor?",
        "answer": "An abstraction that encapsulates shared data and controlled access procedures",
        "wrong": [
          "A screen that displays processor temperature",
          "A network cable for clusters",
          "A serial-only execution unit"
        ],
        "explanation": "A monitor bundles shared data with synchronized procedures."
      },
      {
        "id": "week3-9",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which communication primitive supports asynchronous ordered messages?",
        "answer": "Message queue",
        "wrong": [
          "Mutex",
          "Barrier",
          "SMP"
        ],
        "explanation": "Message queues let tasks send asynchronous messages while preserving order."
      },
      {
        "id": "week3-10",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which primitive is used to execute a procedure on another machine?",
        "answer": "RPC",
        "wrong": [
          "UMA",
          "SIMD",
          "Pthreads"
        ],
        "explanation": "Remote Procedure Call invokes a remote procedure as if it were local."
      },
      {
        "id": "week3-11",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a deadlock?",
        "answer": "Tasks wait forever for each other to release resources",
        "wrong": [
          "Tasks execute the same instruction on many data values",
          "A cluster scales down after demand falls",
          "A program completes with perfect speedup"
        ],
        "explanation": "Deadlock is permanent waiting caused by circular resource dependencies."
      },
      {
        "id": "week3-12",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a livelock?",
        "answer": "Tasks keep reacting to each other but fail to make progress",
        "wrong": [
          "A single instruction operates on one data stream",
          "A file is replicated across nodes",
          "A GPU applies one operation to pixels"
        ],
        "explanation": "In livelock, tasks are active but still make no progress."
      },
      {
        "id": "week3-13",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which technique lets a web server handle many client requests concurrently without one request blocking all others?",
        "answer": "Threads or asynchronous I/O",
        "wrong": [
          "Only SISD execution",
          "Turning off IPC",
          "Using no synchronization primitives"
        ],
        "explanation": "Web servers commonly use threads, async I/O, or event loops to handle concurrent requests."
      },
      {
        "id": "week3-14",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Why are processes more isolated than threads?",
        "answer": "Each process has its own memory space",
        "wrong": [
          "Each process always runs on a different physical country",
          "Processes cannot use operating system resources",
          "Threads never share memory"
        ],
        "explanation": "Process memory isolation improves stability and security."
      },
      {
        "id": "week3-15",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which is an example of communication rather than synchronization?",
        "answer": "Channel",
        "wrong": [
          "Mutex",
          "Semaphore",
          "Barrier"
        ],
        "explanation": "Channels pass messages. Mutexes, semaphores, and barriers primarily coordinate access or timing."
      }
    ],
    "moduleFinals": [
      {
        "id": "module-final-a-1",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "A program creates several threads inside one process, and each thread reads and writes the same array. Which model is being used?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message-passing programming",
          "Linear programming",
          "Branch and bound"
        ],
        "explanation": "Shared-memory programming uses a common memory space that all threads can access."
      },
      {
        "id": "module-final-a-2",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Which statement best describes shared memory?",
        "answer": "All threads can access the same memory addresses",
        "wrong": [
          "Every process must use separate private memory",
          "Data is exchanged only through network packets",
          "Only one processor can read memory at a time"
        ],
        "explanation": "The key clue is common memory addresses accessible by multiple threads or processes."
      },
      {
        "id": "module-final-a-3",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "In shared-memory programming, how do threads usually communicate?",
        "answer": "By reading and writing shared variables",
        "wrong": [
          "By sending emails between processes",
          "By compiling separate programs",
          "By using only linear constraints"
        ],
        "explanation": "Shared variables are the communication channel in a shared-memory model."
      },
      {
        "id": "module-final-a-4",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "Two threads update the same counter at the same time and the final value is wrong. What is the most likely issue?",
        "answer": "Race condition",
        "wrong": [
          "Point-to-point communication",
          "Linearithmic runtime",
          "Greedy selection"
        ],
        "explanation": "Race conditions happen when concurrent access to shared data is not properly synchronized."
      },
      {
        "id": "module-final-a-5",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "Which mechanism is used to coordinate access to shared variables?",
        "answer": "Locks, semaphores, and barriers",
        "wrong": [
          "Only binary search",
          "Only message broadcasting",
          "Only matrix multiplication"
        ],
        "explanation": "Locks, semaphores, and barriers prevent conflicting updates in shared memory."
      },
      {
        "id": "module-final-a-6",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "What is the key difference between multithreading and multiprocessing in the shared-memory discussion?",
        "answer": "Multithreading creates multiple threads within one process, while multiprocessing uses independent processes",
        "wrong": [
          "Multithreading always uses networks, while multiprocessing never uses memory",
          "Multiprocessing is another name for binary search",
          "Multithreading cannot run in parallel"
        ],
        "explanation": "The distinction is thread units inside a process versus independent processes."
      },
      {
        "id": "module-final-a-7",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Why is shared-memory communication often fast?",
        "answer": "Threads can directly access shared data structures",
        "wrong": [
          "Every message must cross a wide-area network",
          "It always avoids all synchronization",
          "It uses factorial-time scheduling"
        ],
        "explanation": "Direct memory access is usually faster than communication between distributed nodes."
      },
      {
        "id": "module-final-a-8",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Which is a real challenge of shared-memory programming?",
        "answer": "Synchronization overhead",
        "wrong": [
          "No possibility of data sharing",
          "No need for debugging",
          "Automatic perfect scalability"
        ],
        "explanation": "Correct synchronization is necessary, but too much synchronization can reduce performance."
      },
      {
        "id": "module-final-a-9",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Scalability",
        "prompt": "As the number of shared-memory threads increases, performance may stop improving because of what?",
        "answer": "Contention for shared resources",
        "wrong": [
          "Lack of any common address space",
          "Guaranteed message ordering",
          "Fewer variables in memory"
        ],
        "explanation": "More threads can fight over shared data, locks, cache lines, or memory bandwidth."
      },
      {
        "id": "module-final-a-10",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "A developer says shared memory is easy because threads can share variables. What important warning should you add?",
        "answer": "Shared variables must be synchronized to avoid inconsistent data",
        "wrong": [
          "Shared variables remove all debugging problems",
          "Shared memory cannot create race conditions",
          "Threads are never allowed to write shared data"
        ],
        "explanation": "The convenience of shared variables is exactly why synchronization is important."
      },
      {
        "id": "module-final-a-11",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which programming paradigm uses independent processes that exchange explicit messages?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming",
          "Dynamic programming",
          "Constant-space programming"
        ],
        "explanation": "Message passing uses send/receive communication instead of a common memory space."
      },
      {
        "id": "module-final-a-12",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "In message-passing programming, what is usually true about memory?",
        "answer": "Processes run in separate memory spaces",
        "wrong": [
          "All processes share one global address space",
          "Only GPU memory can be used",
          "Memory is replaced by linear equations"
        ],
        "explanation": "The model communicates by explicit messages because memory is not shared."
      },
      {
        "id": "module-final-a-13",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which pair best represents the basic operations of message passing?",
        "answer": "Send and receive",
        "wrong": [
          "Divide and combine",
          "Lock and unlock only",
          "Push and pop only"
        ],
        "explanation": "Message-passing programs coordinate by sending and receiving messages."
      },
      {
        "id": "module-final-a-14",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "What does asynchronous communication mean in message passing?",
        "answer": "A process can continue execution while waiting for a message",
        "wrong": [
          "All processes must stop until every message arrives",
          "Messages are impossible to receive out of order",
          "Only one process may exist"
        ],
        "explanation": "Asynchronous communication lets execution continue instead of always blocking immediately."
      },
      {
        "id": "module-final-a-15",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "What makes synchronization explicit in message passing?",
        "answer": "Processes intentionally wait for or react to message receipt",
        "wrong": [
          "The operating system hides all communication decisions",
          "Shared variables are automatically protected",
          "The compiler removes all messages"
        ],
        "explanation": "The program explicitly coordinates around messages."
      },
      {
        "id": "module-final-a-16",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "A process sends a message directly to one specific target process. What communication pattern is this?",
        "answer": "Point-to-point communication",
        "wrong": [
          "Collective communication",
          "Dynamic programming",
          "Quadratic space"
        ],
        "explanation": "Point-to-point means one sender targets one receiver."
      },
      {
        "id": "module-final-a-17",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Broadcasting a value from one process to all processes is what kind of message-passing operation?",
        "answer": "Collective communication",
        "wrong": [
          "Constant-time access",
          "Backtracking",
          "Shared variable assignment"
        ],
        "explanation": "Collective communication involves a group of processes exchanging data by a pattern like broadcast, reduce, or gather."
      },
      {
        "id": "module-final-a-18",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which standard is widely used for high-performance message passing?",
        "answer": "MPI",
        "wrong": [
          "HTML",
          "CSS",
          "SQL injection"
        ],
        "explanation": "MPI stands for Message Passing Interface and is widely used in HPC and distributed memory systems."
      },
      {
        "id": "module-final-a-19",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Scalability",
        "prompt": "Why does message passing scale well for clusters?",
        "answer": "It does not depend on a single shared memory space",
        "wrong": [
          "It never communicates",
          "It removes all overhead",
          "It requires one processor only"
        ],
        "explanation": "Separate processes can run across many machines and communicate through messages."
      },
      {
        "id": "module-final-a-20",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Debugging",
        "prompt": "Which is a common debugging issue in message-passing programs?",
        "answer": "Message deadlock or unexpected message order",
        "wrong": [
          "No communication pattern exists",
          "All variables are shared by default",
          "There are no synchronization concerns"
        ],
        "explanation": "Message-passing bugs often involve blocking messages, unexpected order, or deadlocks."
      },
      {
        "id": "module-final-a-21",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Which statement best defines data parallelism?",
        "answer": "The same operation is applied to different partitions of a dataset",
        "wrong": [
          "Different unrelated tasks are always executed one after another",
          "All processes use one lock",
          "One message is broadcast to all users"
        ],
        "explanation": "Data parallelism is about splitting data and repeating the same computation."
      },
      {
        "id": "module-final-a-22",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Data parallelism is often associated with which execution style?",
        "answer": "SIMD",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "Non-repudiation"
        ],
        "explanation": "SIMD means Single Instruction, Multiple Data, matching the same operation over many data elements."
      },
      {
        "id": "module-final-a-23",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Load Balancing",
        "prompt": "Why is load balancing important in data parallelism?",
        "answer": "It keeps processing units from receiving uneven amounts of work",
        "wrong": [
          "It prevents all communication from existing",
          "It forces all data into one partition",
          "It converts O(n) into O(1)"
        ],
        "explanation": "Uneven partitions cause some processors to finish early while others continue working."
      },
      {
        "id": "module-final-a-24",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Which statement is usually true for ideal data parallelism?",
        "answer": "Communication between processing units is minimal or unnecessary",
        "wrong": [
          "Every task must exchange messages every step",
          "Each unit performs a different algorithm",
          "All work must run on one core"
        ],
        "explanation": "Independent partitions allow parallel work with little coordination."
      },
      {
        "id": "module-final-a-25",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Applying the same brightness adjustment to every pixel of a large image is an example of what?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Branch and bound",
          "Linear programming"
        ],
        "explanation": "The same operation is applied to many independent pixel values."
      },
      {
        "id": "module-final-a-26",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Which statement best defines task parallelism?",
        "answer": "Different independent tasks are executed concurrently",
        "wrong": [
          "The same instruction must run on all data elements",
          "All processors share one variable only",
          "Every task must wait for a network message"
        ],
        "explanation": "Task parallelism focuses on separate tasks, not just separate data chunks."
      },
      {
        "id": "module-final-a-27",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Which situation most clearly uses task parallelism?",
        "answer": "A program searches files, downloads data, and compresses output at the same time",
        "wrong": [
          "A GPU applies one blur operation to every pixel",
          "A loop prints each element sequentially",
          "A binary search halves a sorted array"
        ],
        "explanation": "The tasks are distinct operations executing concurrently."
      },
      {
        "id": "module-final-a-28",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Why does task parallelism often need dynamic load balancing?",
        "answer": "Tasks may have different execution times or complexity",
        "wrong": [
          "All tasks are guaranteed identical",
          "Data partitions are always the same size",
          "Messages cannot be sent"
        ],
        "explanation": "Dynamic scheduling keeps units busy when tasks vary."
      },
      {
        "id": "module-final-a-29",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "When one task depends on another task's result, task parallelism may require what?",
        "answer": "Synchronization",
        "wrong": [
          "Factorial growth",
          "No coordination",
          "Only greedy selection"
        ],
        "explanation": "Dependencies require coordination so tasks use correct results."
      },
      {
        "id": "module-final-a-30",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Parallel recursive algorithms often fit task parallelism because what can become independent work?",
        "answer": "Recursive calls",
        "wrong": [
          "Only one global variable",
          "The final print statement",
          "All memory addresses"
        ],
        "explanation": "Each recursive branch can sometimes be treated as an independent task."
      },
      {
        "id": "module-final-a-31",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Parallel loop iterations are task-parallel only when what is true?",
        "answer": "Iterations can execute independently",
        "wrong": [
          "Every iteration writes the same shared variable without locks",
          "The loop must be O(n!)",
          "Only one iteration exists"
        ],
        "explanation": "Independent iterations can be treated as separate tasks."
      },
      {
        "id": "module-final-a-32",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Parallelism Types",
        "prompt": "Which clue separates data parallelism from task parallelism?",
        "answer": "Same operation on data chunks versus different operations as tasks",
        "wrong": [
          "Both require no processors",
          "Data parallelism cannot use datasets",
          "Task parallelism always means one task"
        ],
        "explanation": "This is the central distinction the exam often tests."
      },
      {
        "id": "module-final-a-33",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "OpenMP is most commonly associated with what environment?",
        "answer": "Shared-memory multi-core programming",
        "wrong": [
          "Only wide-area message passing",
          "Only database normalization",
          "Only cryptography"
        ],
        "explanation": "OpenMP is commonly used to express parallelism in shared-memory systems."
      },
      {
        "id": "module-final-a-34",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Divide and conquer has which core sequence?",
        "answer": "Divide -> Conquer -> Combine",
        "wrong": [
          "Send -> Receive -> Broadcast",
          "Lock -> Sleep -> Ignore",
          "Guess -> Encrypt -> Delete"
        ],
        "explanation": "The method divides the problem, solves subproblems recursively, and combines results."
      },
      {
        "id": "module-final-a-35",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which algorithm is a classic divide-and-conquer example?",
        "answer": "Merge sort",
        "wrong": [
          "Sudoku backtracking as the only answer",
          "A password policy",
          "Linear objective optimization"
        ],
        "explanation": "Merge sort divides, recursively sorts, and merges the subresults."
      },
      {
        "id": "module-final-a-36",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique chooses the best-looking option at the current step?",
        "answer": "Greedy method",
        "wrong": [
          "Backtracking",
          "Message passing",
          "Quadratic space"
        ],
        "explanation": "Greedy algorithms make local choices and typically do not reconsider them."
      },
      {
        "id": "module-final-a-37",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Why is the greedy method considered risky on some problems?",
        "answer": "A local best choice may not produce the global best result",
        "wrong": [
          "It always checks all permutations",
          "It is impossible to implement",
          "It requires shared memory"
        ],
        "explanation": "Greedy choices are simple, but local optimality is not always enough."
      },
      {
        "id": "module-final-a-38",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique solves subproblems and reuses their stored answers?",
        "answer": "Dynamic programming",
        "wrong": [
          "Message passing",
          "Constant space only",
          "Point-to-point communication"
        ],
        "explanation": "Dynamic programming avoids repeated work by reusing subproblem solutions."
      },
      {
        "id": "module-final-a-39",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Why is Fibonacci often used to explain dynamic programming?",
        "answer": "It has repeated overlapping subproblems",
        "wrong": [
          "It requires no memory at all",
          "It is only a message-passing protocol",
          "It always uses linear constraints"
        ],
        "explanation": "Naive Fibonacci recomputes many values; DP stores and reuses them."
      },
      {
        "id": "module-final-a-40",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "A Sudoku solver tries a number, fails later, and returns to choose a different number. Which technique is this?",
        "answer": "Backtracking",
        "wrong": [
          "Data parallelism",
          "Linear programming",
          "Constant time"
        ],
        "explanation": "Backtracking tries a candidate and retreats when the path becomes invalid."
      },
      {
        "id": "module-final-a-41",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which problem is commonly linked to backtracking?",
        "answer": "Eight queen problem",
        "wrong": [
          "Direct array access",
          "Simple variable assignment",
          "Point-to-point send only"
        ],
        "explanation": "Eight queens, Sudoku, and maze traversal are classic backtracking examples."
      },
      {
        "id": "module-final-a-42",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique keeps a current best solution and prunes paths that cannot beat it?",
        "answer": "Branch and bound",
        "wrong": [
          "Greedy method only",
          "Shared variable communication",
          "Big-Omega notation"
        ],
        "explanation": "Branch and bound uses bounds to remove weak parts of the solution space."
      },
      {
        "id": "module-final-a-43",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "What is a key purpose of branch and bound search?",
        "answer": "Maintain or improve the lowest-cost path to a target",
        "wrong": [
          "Avoid optimization entirely",
          "Force every process to share memory",
          "Make all loops nested"
        ],
        "explanation": "The method searches for an optimal solution while pruning."
      },
      {
        "id": "module-final-a-44",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Linear programming is used when the objective and constraints are what?",
        "answer": "Linear functions",
        "wrong": [
          "Random message orders",
          "Only recursive calls",
          "Only shared variables"
        ],
        "explanation": "Linear programming optimizes a linear objective subject to linear constraints."
      },
      {
        "id": "module-final-a-45",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which is a typical linear programming goal?",
        "answer": "Maximize profit or minimize cost",
        "wrong": [
          "Create a race condition",
          "Broadcast every pixel",
          "Ignore all constraints"
        ],
        "explanation": "The source lists maximum profit, shortest path, and lowest cost style outcomes."
      },
      {
        "id": "module-final-a-46",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "What does time complexity measure?",
        "answer": "How runtime grows as input size grows",
        "wrong": [
          "Only the color of a chart",
          "Only the number of processors",
          "Only the size of source code comments"
        ],
        "explanation": "Time complexity is runtime as a function of input size."
      },
      {
        "id": "module-final-a-47",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Directly printing the first array element is usually what time complexity?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n^2)",
          "O(n!)"
        ],
        "explanation": "The work does not depend on how many elements the array contains."
      },
      {
        "id": "module-final-a-48",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Binary search on a sorted array is usually what time complexity?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(n!)",
          "O(1) for all cases"
        ],
        "explanation": "Binary search repeatedly halves the search range."
      },
      {
        "id": "module-final-a-49",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Two nested loops that print every ordered pair from an array usually have what time complexity?",
        "answer": "O(n^2)",
        "wrong": [
          "O(log n)",
          "O(1)",
          "O(n log n) always"
        ],
        "explanation": "A loop inside another loop over n elements creates n times n work."
      },
      {
        "id": "module-final-a-50",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Which growth order is generally best among these for large input?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(2^n)",
          "O(n!)"
        ],
        "explanation": "Logarithmic growth increases very slowly compared with polynomial, exponential, and factorial growth."
      },
      {
        "id": "module-final-b-1",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A hospital AI system splits millions of records into equal chunks and runs the same risk-scoring formula on each chunk. Which model is the best fit?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Backtracking",
          "Linear programming"
        ],
        "explanation": "The same computation is applied to independent data partitions."
      },
      {
        "id": "module-final-b-2",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A video editor applies the same filter to every frame block on a GPU. What is the best classification?",
        "answer": "Data parallelism using SIMD-style work",
        "wrong": [
          "Message passing with no data partitioning",
          "Greedy local selection",
          "Branch and bound search"
        ],
        "explanation": "The same operation is repeated over many independent data elements."
      },
      {
        "id": "module-final-b-3",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A web server handles login, payment, and notification jobs at the same time, and each job uses different logic. What is the best fit?",
        "answer": "Task parallelism",
        "wrong": [
          "Pure data parallelism",
          "O(1) direct access",
          "Linear programming"
        ],
        "explanation": "Different independent operations executing concurrently point to task parallelism."
      },
      {
        "id": "module-final-b-4",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A cluster has 200 nodes, each with its own memory, and nodes exchange work updates through MPI. Which model is this?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming",
          "Constant-space programming",
          "Greedy method"
        ],
        "explanation": "Separate memory spaces plus MPI are message-passing clues."
      },
      {
        "id": "module-final-b-5",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Four threads in one process update a shared transaction balance. What must be added to avoid inconsistent balances?",
        "answer": "Synchronization such as a lock",
        "wrong": [
          "More unsynchronized writes",
          "A factorial algorithm",
          "A public broadcast only"
        ],
        "explanation": "Shared updates need controlled access to avoid race conditions."
      },
      {
        "id": "module-final-b-6",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "An image-processing job has 1,000 chunks, but some chunks are much harder than others. What problem should the developer watch?",
        "answer": "Load imbalance",
        "wrong": [
          "No possible parallelism",
          "Big-Omega notation",
          "Only greedy recursion"
        ],
        "explanation": "Uneven work makes some processors idle while others keep running."
      },
      {
        "id": "module-final-b-7",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A process waits forever for a message that another process never sends. What kind of issue is most likely?",
        "answer": "Message deadlock",
        "wrong": [
          "Cache-friendly shared memory",
          "Constant time success",
          "Linear objective optimization"
        ],
        "explanation": "Message-passing programs can deadlock when waiting conditions are not satisfied."
      },
      {
        "id": "module-final-b-8",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A programmer wants to send one configuration value from a root process to all worker processes. Which operation type fits?",
        "answer": "Collective communication",
        "wrong": [
          "Point-to-point only",
          "Backtracking",
          "Quadratic space"
        ],
        "explanation": "Broadcasting to a group is collective communication."
      },
      {
        "id": "module-final-b-9",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A worker sends a result only to process 7. Which message-passing communication type is this?",
        "answer": "Point-to-point communication",
        "wrong": [
          "Collective communication",
          "Shared variable access",
          "Branch and bound"
        ],
        "explanation": "A specific sender-to-target pattern is point-to-point."
      },
      {
        "id": "module-final-b-10",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A shared-memory app becomes slower after adding more threads because they all compete for one lock. What is the best explanation?",
        "answer": "Synchronization contention reduces scalability",
        "wrong": [
          "Message passing removed all overhead",
          "Binary search became O(n!)",
          "The program stopped using memory"
        ],
        "explanation": "Too much lock contention can erase parallel speedup."
      },
      {
        "id": "module-final-b-11",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A program divides a large search tree into branches, but some branches depend on earlier choices and invalid paths must be abandoned. Which algorithm style fits?",
        "answer": "Backtracking",
        "wrong": [
          "Data parallelism only",
          "O(1) direct access",
          "Message broadcast"
        ],
        "explanation": "Trying a path and retreating when it fails is backtracking."
      },
      {
        "id": "module-final-b-12",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A delivery company wants the cheapest route and prunes any path already more expensive than the best current route. Which technique is being used?",
        "answer": "Branch and bound",
        "wrong": [
          "Shared memory only",
          "Greedy with no pruning",
          "Constant-space array creation"
        ],
        "explanation": "The bound lets the algorithm eliminate paths that cannot beat the current best."
      },
      {
        "id": "module-final-b-13",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A scheduling problem has a linear cost equation and linear resource constraints. What technique is most appropriate?",
        "answer": "Linear programming",
        "wrong": [
          "Backtracking only",
          "Message passing only",
          "Dynamic work stealing"
        ],
        "explanation": "Linear programming optimizes a linear objective under linear constraints."
      },
      {
        "id": "module-final-b-14",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A recursive Fibonacci implementation keeps recomputing the same values. Which technique is designed to fix that?",
        "answer": "Dynamic programming",
        "wrong": [
          "Greedy method",
          "Message deadlock",
          "O(n!) sorting"
        ],
        "explanation": "Dynamic programming stores and reuses overlapping subproblem results."
      },
      {
        "id": "module-final-b-15",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A sorting method splits an array, sorts the halves, then merges the halves. Which design technique is this?",
        "answer": "Divide and conquer",
        "wrong": [
          "Linear programming",
          "Point-to-point messaging",
          "Race condition"
        ],
        "explanation": "Split, recursively solve, and combine is divide and conquer."
      },
      {
        "id": "module-final-b-16",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A navigation app always chooses the currently closest next stop without reconsidering previous choices. Which method is this closest to?",
        "answer": "Greedy method",
        "wrong": [
          "Dynamic programming",
          "Backtracking",
          "Message passing"
        ],
        "explanation": "Greedy chooses the best immediate option and typically does not reconsider."
      },
      {
        "id": "module-final-b-17",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A classmate says greedy always gives the globally optimal answer. What is the best correction?",
        "answer": "Greedy can fail when the local best choice is not globally best",
        "wrong": [
          "Greedy always checks every possible solution",
          "Greedy is only for shared memory",
          "Greedy never makes choices"
        ],
        "explanation": "Greedy is efficient and simple, but it needs problem conditions that make local choices safe."
      },
      {
        "id": "module-final-b-18",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A security scan checks every pair of modules for compatibility using two nested loops. What time complexity should you expect?",
        "answer": "O(n^2)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Checking all pairs creates quadratic growth."
      },
      {
        "id": "module-final-b-19",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A monitoring tool reads only the first log entry no matter how many logs exist. What time complexity is this action?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n log n)",
          "O(2^n)"
        ],
        "explanation": "The number of operations is fixed and does not grow with input size."
      },
      {
        "id": "module-final-b-20",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A sorted database repeatedly halves the remaining search range while looking for an ID. What time complexity is this?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(n!)",
          "O(n^3)"
        ],
        "explanation": "Halving the search space is the signature of logarithmic time."
      },
      {
        "id": "module-final-b-21",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A program prints every item in a list once. What time complexity is most likely?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(n^2)",
          "O(2^n)"
        ],
        "explanation": "One pass through n items gives linear time."
      },
      {
        "id": "module-final-b-22",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A merge-sort style algorithm divides data and combines sorted results. What typical complexity appears in many efficient sorting algorithms?",
        "answer": "O(n log n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Efficient comparison sorting is commonly O(n log n)."
      },
      {
        "id": "module-final-b-23",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A program creates an array of size n before processing. What space complexity is introduced by that array?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Memory grows in direct proportion to n."
      },
      {
        "id": "module-final-b-24",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A program creates an n by n table for dynamic programming. What space complexity is likely?",
        "answer": "O(n^2)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n) only"
        ],
        "explanation": "An n by n matrix contains n squared cells."
      },
      {
        "id": "module-final-b-25",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A function only stores three integer variables regardless of input size. What space complexity is likely?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "explanation": "A fixed number of variables is constant space."
      },
      {
        "id": "module-final-b-26",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes an upper bound or worst-case-style ceiling?",
        "answer": "Big-O",
        "wrong": [
          "Big-Omega",
          "Big-Theta only",
          "SIMD"
        ],
        "explanation": "Big-O gives an upper bound on growth."
      },
      {
        "id": "module-final-b-27",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes a lower bound or minimum growth guarantee?",
        "answer": "Big-Omega",
        "wrong": [
          "Big-O",
          "Big-Theta only",
          "MPI"
        ],
        "explanation": "Big-Omega gives a lower bound."
      },
      {
        "id": "module-final-b-28",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes a tight bound with both upper and lower limits?",
        "answer": "Big-Theta",
        "wrong": [
          "Big-O only",
          "Big-Omega only",
          "OpenMP"
        ],
        "explanation": "Big-Theta is used when the growth is bounded above and below by the same class."
      },
      {
        "id": "module-final-b-29",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A team uses OpenMP pragmas to parallelize loops on a multi-core machine with shared RAM. Which model is most likely?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message-passing programming",
          "Blockchain consensus",
          "Linear programming"
        ],
        "explanation": "OpenMP is commonly used for shared-memory multi-core parallelism."
      },
      {
        "id": "module-final-b-30",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A team uses MPI to coordinate jobs across machines with separate memory. Which model is most likely?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming only",
          "Backtracking only",
          "O(1) space only"
        ],
        "explanation": "MPI is the standard clue for message passing."
      },
      {
        "id": "module-final-b-31",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Message Passing",
        "prompt": "A developer says asynchronous message passing means no synchronization is ever needed. What is the best response?",
        "answer": "Processes still need explicit coordination around message receipt",
        "wrong": [
          "Asynchronous means all processes share memory",
          "Asynchronous means no messages are sent",
          "Asynchronous converts all code to O(1)"
        ],
        "explanation": "Asynchronous communication can reduce waiting, but coordination is still explicit."
      },
      {
        "id": "module-final-b-32",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Shared Memory",
        "prompt": "A shared array is updated by many threads, but each thread writes to a separate index and no thread reads incomplete results. What is the likely benefit?",
        "answer": "Reduced synchronization need compared with shared writes to one location",
        "wrong": [
          "Guaranteed factorial complexity",
          "Mandatory message deadlock",
          "No memory access"
        ],
        "explanation": "Independent partitions reduce conflicts, though final coordination may still be needed."
      },
      {
        "id": "module-final-b-33",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "A GPU applies one instruction to thousands of pixels at the same time. Which taxonomy idea matches this?",
        "answer": "SIMD",
        "wrong": [
          "MIMD only",
          "SISD only",
          "Branch and bound"
        ],
        "explanation": "Single Instruction, Multiple Data fits the GPU pixel example."
      },
      {
        "id": "module-final-b-34",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "A normal single-core program executes one instruction stream over one data stream. Which Flynn category is closest?",
        "answer": "SISD",
        "wrong": [
          "SIMD",
          "MISD",
          "MIMD"
        ],
        "explanation": "SISD means Single Instruction, Single Data."
      },
      {
        "id": "module-final-b-35",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "Different processors run different tasks on different data at the same time. Which Flynn category is closest?",
        "answer": "MIMD",
        "wrong": [
          "SISD",
          "SIMD",
          "Constant space"
        ],
        "explanation": "MIMD means Multiple Instruction, Multiple Data."
      },
      {
        "id": "module-final-b-36",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "Different processors run different analyses on the same sensor stream. Which Flynn category is closest?",
        "answer": "MISD",
        "wrong": [
          "SISD",
          "SIMD",
          "O(n log n)"
        ],
        "explanation": "MISD means Multiple Instruction, Single Data, a rare but testable category."
      },
      {
        "id": "module-final-b-37",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Granularity",
        "prompt": "A task-parallel program has many small tasks, and scheduling overhead becomes large compared with useful computation. What issue is this?",
        "answer": "Too fine-grained task decomposition",
        "wrong": [
          "Perfect load balancing",
          "Constant-time execution",
          "No synchronization"
        ],
        "explanation": "Very fine-grained tasks can spend too much time on overhead."
      },
      {
        "id": "module-final-b-38",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "A distributed program sends huge messages every millisecond and spends more time communicating than computing. What factor is hurting performance?",
        "answer": "Communication overhead",
        "wrong": [
          "Greedy optimality",
          "O(1) direct access",
          "Backtracking success"
        ],
        "explanation": "Excessive data transfer can dominate runtime."
      },
      {
        "id": "module-final-b-39",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "A program gets faster when processors are added, but not proportionally. Which explanation is most realistic?",
        "answer": "Coordination, communication, and synchronization overhead reduce ideal speedup",
        "wrong": [
          "Parallelism always gives perfect speedup",
          "More processors remove all memory limits",
          "The program becomes serial by definition"
        ],
        "explanation": "Parallel systems often have overhead and non-parallel portions."
      },
      {
        "id": "module-final-b-40",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "Which metric describes how effectively processors are used in a parallel system?",
        "answer": "Efficiency",
        "wrong": [
          "Voltage",
          "Screen resolution",
          "Database color"
        ],
        "explanation": "Efficiency compares useful speedup with processor resources used."
      },
      {
        "id": "module-final-b-41",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Granularity",
        "prompt": "A program divides a 4K video into independent frames processed by many computers. What phrase best fits?",
        "answer": "Coarse-grained parallel workload",
        "wrong": [
          "One shared lock workload",
          "O(1) direct access only",
          "No parallelism"
        ],
        "explanation": "Independent large tasks are coarse-grained and suited to distributed processing."
      },
      {
        "id": "module-final-b-42",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Data Parallelism",
        "prompt": "A data-parallel workload needs almost no communication. What is the performance advantage?",
        "answer": "Less communication overhead",
        "wrong": [
          "More message deadlocks",
          "More lock contention",
          "Factorial growth"
        ],
        "explanation": "Minimal communication helps preserve speedup."
      },
      {
        "id": "module-final-b-43",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Task Parallelism",
        "prompt": "A task-parallel system has tasks whose durations are unknown until runtime. Which scheduling idea helps most?",
        "answer": "Dynamic load balancing",
        "wrong": [
          "Fixed one-time partitioning only",
          "No scheduling",
          "Only linear programming"
        ],
        "explanation": "Dynamic balancing adapts as tasks vary."
      },
      {
        "id": "module-final-b-44",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Message Passing",
        "prompt": "Which option is the clearest example of collective communication?",
        "answer": "Reducing partial sums from all workers into one total",
        "wrong": [
          "Thread A writes x = 5",
          "A single direct array lookup",
          "A Sudoku solver backtracks"
        ],
        "explanation": "Reduce gathers and combines data from many processes."
      },
      {
        "id": "module-final-b-45",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A programmer moves a program from one multi-core server to a cluster of independent machines. Which shift is most likely needed?",
        "answer": "From shared-memory assumptions to message-passing communication",
        "wrong": [
          "From O(n) to O(1) automatically",
          "From data structures to no data",
          "From messages to one global variable"
        ],
        "explanation": "Clusters usually do not share one address space across machines."
      },
      {
        "id": "module-final-b-46",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Which model is best if all worker units must frequently update one shared object with low-latency access?",
        "answer": "Shared-memory programming with careful synchronization",
        "wrong": [
          "Message passing with no communication",
          "Linear programming only",
          "Backtracking only"
        ],
        "explanation": "Low-latency shared access fits shared memory, but synchronization remains necessary."
      },
      {
        "id": "module-final-b-47",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Which model is best if workers are on different networked machines and memory is not shared?",
        "answer": "Message-passing programming",
        "wrong": [
          "Pure shared memory",
          "O(1) constant space only",
          "Single-threaded SISD only"
        ],
        "explanation": "Separate networked nodes usually coordinate by messages."
      },
      {
        "id": "module-final-b-48",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Concurrency Trap",
        "prompt": "What is the most likely bug if two tasks keep responding to each other but never make progress?",
        "answer": "Livelock",
        "wrong": [
          "Linear time",
          "Direct access",
          "Perfect scalability"
        ],
        "explanation": "Livelock means activity continues but no useful progress is made."
      },
      {
        "id": "module-final-b-49",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Concurrency Trap",
        "prompt": "What is the most likely bug if two threads each hold one lock and wait forever for the other lock?",
        "answer": "Deadlock",
        "wrong": [
          "SIMD",
          "O(n log n)",
          "Greedy choice"
        ],
        "explanation": "Deadlock occurs when each side waits for resources held by the other."
      },
      {
        "id": "module-final-b-50",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A cloud analytics job partitions data by user ID and runs the same aggregation on every partition. Which concept is strongest?",
        "answer": "Data parallelism",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "SISD"
        ],
        "explanation": "Partitioned data with identical aggregation is data parallel."
      },
      {
        "id": "module-final-c-1",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which answer is most accurate: shared-memory programming simplifies communication because...",
        "answer": "Threads can directly read and write shared data structures",
        "wrong": [
          "It removes the need for synchronization",
          "It works only across remote clusters",
          "It forbids shared variables"
        ],
        "explanation": "Shared memory simplifies data exchange, but it does not remove synchronization needs."
      },
      {
        "id": "module-final-c-2",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which statement is false about message-passing programming?",
        "answer": "Processes must share the same address space",
        "wrong": [
          "Processes exchange messages",
          "Synchronization is explicit",
          "MPI is a common standard"
        ],
        "explanation": "Message passing is defined by separate memory spaces, not a shared address space."
      },
      {
        "id": "module-final-c-3",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "A question says 'same operation, many data items.' Which answer should you suspect first?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Branch and bound",
          "Linear programming"
        ],
        "explanation": "That phrase is the exam shortcut for data parallelism."
      },
      {
        "id": "module-final-c-4",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "A question says 'many independent operations, different work.' Which answer should you suspect first?",
        "answer": "Task parallelism",
        "wrong": [
          "Data parallelism",
          "SIMD only",
          "O(log n)"
        ],
        "explanation": "Distinct independent work points to task parallelism."
      },
      {
        "id": "module-final-c-5",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which item is not a shared-memory synchronization mechanism from the lesson?",
        "answer": "Broadcast",
        "wrong": [
          "Lock",
          "Semaphore",
          "Barrier"
        ],
        "explanation": "Broadcast is a collective message-passing operation; locks, semaphores, and barriers coordinate shared memory."
      },
      {
        "id": "module-final-c-6",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which item is not a message-passing library or standard listed in the lesson?",
        "answer": "OpenMP",
        "wrong": [
          "MPI",
          "Open MPI",
          "Microsoft MPI"
        ],
        "explanation": "OpenMP is usually associated with shared-memory parallel programming, not message passing."
      },
      {
        "id": "module-final-c-7",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Debugging",
        "prompt": "Which choice best describes why shared-memory debugging can be difficult?",
        "answer": "Race conditions may be hard to reproduce",
        "wrong": [
          "There are no shared variables",
          "Messages always arrive in perfect order",
          "No concurrency is possible"
        ],
        "explanation": "Timing-dependent race conditions can appear inconsistently."
      },
      {
        "id": "module-final-c-8",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Debugging",
        "prompt": "Which choice best describes why message-passing debugging can be difficult?",
        "answer": "Message order and waiting behavior can create subtle failures",
        "wrong": [
          "All data is automatically consistent",
          "Only one process is allowed",
          "It never uses communication"
        ],
        "explanation": "Deadlocks and unexpected message ordering are common message-passing debugging traps."
      },
      {
        "id": "module-final-c-9",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "A problem can be split into subproblems, but the same subproblem appears many times. Which technique usually beats plain divide and conquer?",
        "answer": "Dynamic programming",
        "wrong": [
          "Greedy method",
          "Point-to-point messaging",
          "Constant time"
        ],
        "explanation": "Dynamic programming stores repeated subproblem results."
      },
      {
        "id": "module-final-c-10",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for backtracking?",
        "answer": "Try a candidate, retreat when constraints fail",
        "wrong": [
          "Choose local best and never reconsider",
          "Apply same operation to pixels",
          "Send a message to process 3"
        ],
        "explanation": "Backtracking moves forward and returns when a path cannot lead to a valid solution."
      },
      {
        "id": "module-final-c-11",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for branch and bound?",
        "answer": "Prune solution paths using a bound and current best answer",
        "wrong": [
          "Split only into equal data partitions",
          "Read the first array item",
          "Broadcast to all workers"
        ],
        "explanation": "Bounds eliminate parts of the search space that cannot improve the solution."
      },
      {
        "id": "module-final-c-12",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for linear programming?",
        "answer": "Linear objective and linear constraints",
        "wrong": [
          "Many shared variables",
          "Unexpected message order",
          "Nested loops only"
        ],
        "explanation": "Linear programming is defined by linear objective and constraint functions."
      },
      {
        "id": "module-final-c-13",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "A classmate says divide and conquer and dynamic programming are identical because both use subproblems. What is the best distinction?",
        "answer": "Dynamic programming reuses overlapping subproblem solutions",
        "wrong": [
          "Divide and conquer never uses recursion",
          "Dynamic programming is only for networks",
          "Divide and conquer always uses locks"
        ],
        "explanation": "DP is distinguished by storing/reusing repeated subproblems."
      },
      {
        "id": "module-final-c-14",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for binary search?",
        "answer": "Divide and conquer",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "Message passing"
        ],
        "explanation": "Binary search repeatedly divides the search interval."
      },
      {
        "id": "module-final-c-15",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for Sudoku?",
        "answer": "Backtracking",
        "wrong": [
          "Greedy method only",
          "Data parallelism only",
          "O(1) direct access"
        ],
        "explanation": "Sudoku solvers often try candidates and backtrack when constraints fail."
      },
      {
        "id": "module-final-c-16",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely when choosing the best current component and never reconsidering it?",
        "answer": "Greedy method",
        "wrong": [
          "Dynamic programming",
          "Branch and bound",
          "Shared memory"
        ],
        "explanation": "The defining clue is choosing the current best-looking option."
      },
      {
        "id": "module-final-c-17",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for optimizing maximum profit with linear restrictions?",
        "answer": "Linear programming",
        "wrong": [
          "Message passing",
          "Backtracking only",
          "SIMD"
        ],
        "explanation": "Maximum profit under linear constraints is a linear programming scenario."
      },
      {
        "id": "module-final-c-18",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which technique searches the entire solution space more intelligently by eliminating impossible or weak areas?",
        "answer": "Branch and bound",
        "wrong": [
          "Constant time",
          "Point-to-point communication",
          "Direct array lookup"
        ],
        "explanation": "Branch and bound explores possible solutions while pruning using bounds."
      },
      {
        "id": "module-final-c-19",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which complexity class grows slowest among the options?",
        "answer": "O(1)",
        "wrong": [
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "explanation": "Constant time does not grow with input size."
      },
      {
        "id": "module-final-c-20",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which complexity class grows fastest among the options?",
        "answer": "O(n!)",
        "wrong": [
          "O(n^2)",
          "O(n log n)",
          "O(log n)"
        ],
        "explanation": "Factorial time grows extremely fast and is worse than the listed polynomial/logarithmic classes."
      },
      {
        "id": "module-final-c-21",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which pair is in correct increasing growth order?",
        "answer": "O(1), O(log n), O(n), O(n log n)",
        "wrong": [
          "O(n^2), O(n), O(log n), O(1)",
          "O(n!), O(2^n), O(n), O(1)",
          "O(log n), O(1), O(n^2), O(n)"
        ],
        "explanation": "The usual order is constant, logarithmic, linear, log-linear."
      },
      {
        "id": "module-final-c-22",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "A loop inside a loop inside a loop over n items is most likely what?",
        "answer": "O(n^3)",
        "wrong": [
          "O(log n)",
          "O(1)",
          "O(n log n)"
        ],
        "explanation": "Three nested n-sized loops imply cubic time."
      },
      {
        "id": "module-final-c-23",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Trying every subset of n items is commonly associated with what growth?",
        "answer": "O(2^n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n)"
        ],
        "explanation": "Each item often creates an include/exclude choice, producing exponential growth."
      },
      {
        "id": "module-final-c-24",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Trying every ordering of n items is commonly associated with what growth?",
        "answer": "O(n!)",
        "wrong": [
          "O(n)",
          "O(log n)",
          "O(n log n)"
        ],
        "explanation": "Every permutation of n items produces factorial growth."
      },
      {
        "id": "module-final-c-25",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation is the tightest statement when an algorithm is both O(n log n) and Omega(n log n)?",
        "answer": "Theta(n log n)",
        "wrong": [
          "O(1)",
          "Omega(1) only",
          "SIMD"
        ],
        "explanation": "Matching upper and lower bounds give a Theta bound."
      },
      {
        "id": "module-final-c-26",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Asymptotic Notation",
        "prompt": "If an algorithm has worst-case O(n^2), what does that most directly tell you?",
        "answer": "Its runtime is bounded above by a quadratic function for large input",
        "wrong": [
          "It always runs exactly n^2 steps",
          "It has no lower bound",
          "It must use message passing"
        ],
        "explanation": "Big-O is an upper bound, not necessarily an exact count."
      },
      {
        "id": "module-final-c-27",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(n) time?",
        "answer": "Scanning every item once",
        "wrong": [
          "Directly reading array[0]",
          "Binary searching sorted data",
          "Trying every permutation"
        ],
        "explanation": "A single pass through all items is linear."
      },
      {
        "id": "module-final-c-28",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(log n) time?",
        "answer": "Binary search",
        "wrong": [
          "Printing all pairs",
          "Creating an n by n matrix",
          "Trying all subsets"
        ],
        "explanation": "Binary search repeatedly halves the possible range."
      },
      {
        "id": "module-final-c-29",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(n log n) time?",
        "answer": "Efficient comparison sorting such as merge sort",
        "wrong": [
          "Direct access",
          "Two nested loops over all pairs",
          "Trying every permutation"
        ],
        "explanation": "Merge sort and many efficient sorts are O(n log n)."
      },
      {
        "id": "module-final-c-30",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Space Complexity",
        "prompt": "Which is the best example of O(n^2) space?",
        "answer": "Creating a square matrix of size n by n",
        "wrong": [
          "Using one sum variable",
          "Reading only the first element",
          "Sending one direct message"
        ],
        "explanation": "An n by n matrix stores n squared cells."
      },
      {
        "id": "module-final-c-31",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "What is the main difference between time and space complexity?",
        "answer": "Time measures runtime growth; space measures memory growth",
        "wrong": [
          "Time measures colors; space measures processors",
          "Both only mean Big-Omega",
          "Space complexity ignores input size"
        ],
        "explanation": "Time and space analyze different resource growth."
      },
      {
        "id": "module-final-c-32",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "A program is fast on small input but explodes as n grows because it checks permutations. What is the likely problem?",
        "answer": "Factorial growth",
        "wrong": [
          "Constant time",
          "No synchronization",
          "SIMD efficiency"
        ],
        "explanation": "Permutation-based search often has O(n!) behavior."
      },
      {
        "id": "module-final-c-33",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A distributed cluster processes work successfully even when one node fails and others continue. Which distributed-systems property is this?",
        "answer": "Fault tolerance",
        "wrong": [
          "Race condition",
          "Linear programming",
          "Constant space"
        ],
        "explanation": "Fault tolerance means the system continues despite component failures."
      },
      {
        "id": "module-final-c-34",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A tightly connected group of computers works as a single system for HPC. What is this called?",
        "answer": "Cluster computing",
        "wrong": [
          "Greedy method",
          "Direct array access",
          "Single-core SISD"
        ],
        "explanation": "Cluster computing uses interconnected computers as one system, often for HPC."
      },
      {
        "id": "module-final-c-35",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A large resource-sharing system spans multiple organizations and locations. What is this called?",
        "answer": "Grid computing",
        "wrong": [
          "Shared local variable",
          "Constant-time lookup",
          "Backtracking only"
        ],
        "explanation": "Grid computing extends resource sharing across wide areas and organizations."
      },
      {
        "id": "module-final-c-36",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "Which architecture has every node act as both client and server?",
        "answer": "Peer-to-peer architecture",
        "wrong": [
          "Client-server only",
          "SISD",
          "Linear programming"
        ],
        "explanation": "P2P nodes can serve and request resources without a central server."
      },
      {
        "id": "module-final-c-37",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "Which architecture relies on centralized services responding to client requests?",
        "answer": "Client-server architecture",
        "wrong": [
          "Peer-to-peer only",
          "Backtracking",
          "SIMD"
        ],
        "explanation": "Client-server has clients requesting services from a server."
      },
      {
        "id": "module-final-c-38",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "MapReduce's Map phase primarily does what?",
        "answer": "Processes split data chunks in parallel",
        "wrong": [
          "Combines all final results only",
          "Locks one shared variable",
          "Chooses a local greedy option"
        ],
        "explanation": "Map splits work into chunks processed in parallel."
      },
      {
        "id": "module-final-c-39",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "MapReduce's Reduce phase primarily does what?",
        "answer": "Aggregates intermediate results",
        "wrong": [
          "Applies a pixel filter to one image only",
          "Creates locks",
          "Runs binary search"
        ],
        "explanation": "Reduce combines mapped outputs into final results."
      },
      {
        "id": "module-final-c-40",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Model Comparison",
        "prompt": "Which statement about shared memory vs message passing is most accurate?",
        "answer": "Shared memory can be faster locally, while message passing fits distributed nodes",
        "wrong": [
          "Message passing always shares one address space",
          "Shared memory never needs synchronization",
          "Both are exactly the same"
        ],
        "explanation": "This captures the key tradeoff between speed and distributed scalability."
      },
      {
        "id": "module-final-c-41",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Model Comparison",
        "prompt": "Which statement about data and task parallelism is most accurate?",
        "answer": "Data parallelism repeats one operation over data; task parallelism runs distinct tasks",
        "wrong": [
          "They are identical terms",
          "Data parallelism means no data exists",
          "Task parallelism means only one task runs"
        ],
        "explanation": "This is the cleanest distinction."
      },
      {
        "id": "module-final-c-42",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Synchronization",
        "prompt": "Which choice is most likely to create a race condition?",
        "answer": "Two threads writing the same shared variable without synchronization",
        "wrong": [
          "Binary search on a read-only sorted array",
          "A process receiving a message",
          "A linear objective function"
        ],
        "explanation": "Concurrent unsynchronized shared writes are the classic race-condition setup."
      },
      {
        "id": "module-final-c-43",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Performance",
        "prompt": "Which choice is most likely to create communication overhead?",
        "answer": "Processes frequently exchange large messages across a network",
        "wrong": [
          "A thread reads a local variable once",
          "An algorithm uses O(1) space",
          "A direct array access"
        ],
        "explanation": "Network message exchange costs time."
      },
      {
        "id": "module-final-c-44",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Performance",
        "prompt": "Which choice best explains why increasing processors may not improve performance proportionally?",
        "answer": "Some work is serial and coordination adds overhead",
        "wrong": [
          "All parallel programs are automatically perfect",
          "Big-O always becomes O(1)",
          "Memory disappears"
        ],
        "explanation": "Real speedup is limited by serial portions and overhead."
      },
      {
        "id": "module-final-c-45",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Granularity",
        "prompt": "A program divides tasks into extremely small pieces, causing scheduling and communication to dominate. What is the issue?",
        "answer": "Fine-grained overhead",
        "wrong": [
          "Perfect coarse-grained balance",
          "No parallelism possible",
          "Big-Theta notation"
        ],
        "explanation": "Too-small work units can cost more to manage than execute."
      },
      {
        "id": "module-final-c-46",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Granularity",
        "prompt": "A program divides work into large independent frames for rendering. What granularity is this?",
        "answer": "Coarse-grained",
        "wrong": [
          "Fine-grained every instruction",
          "Constant-space only",
          "No workload"
        ],
        "explanation": "Large independent chunks are coarse-grained."
      },
      {
        "id": "module-final-c-47",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Shared Memory",
        "prompt": "Which model fits a multi-core CPU where threads share a global memory space?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message passing across clusters only",
          "Grid computing only",
          "Linear programming"
        ],
        "explanation": "One machine with shared memory and multiple cores is the shared-memory setting."
      },
      {
        "id": "module-final-c-48",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Message Passing",
        "prompt": "Which model fits a networked cluster where each node has its own local memory?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory only",
          "O(1) only",
          "Greedy method only"
        ],
        "explanation": "Separate local memories and network communication point to message passing."
      },
      {
        "id": "module-final-c-49",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Taxonomy",
        "prompt": "Which phrase is the clearest sign of SIMD?",
        "answer": "One instruction applied to many data values",
        "wrong": [
          "Many instructions on no data",
          "One thread waits for one lock",
          "A linear constraint is optimized"
        ],
        "explanation": "SIMD expands to Single Instruction, Multiple Data."
      },
      {
        "id": "module-final-c-50",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Taxonomy",
        "prompt": "Which phrase is the clearest sign of MIMD?",
        "answer": "Different instructions operating on different data streams",
        "wrong": [
          "One instruction and one data stream",
          "A single direct array access",
          "A square matrix allocation"
        ],
        "explanation": "MIMD expands to Multiple Instruction, Multiple Data."
      }
    ],
    "everything": [
      {
        "id": "prelim-a-1",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the primary objective of parallel computing systems?",
        "answer": "Reducing program execution time through simultaneous processing",
        "wrong": [
          "Improving reliability by duplicating hardware resources",
          "Organizing large databases across independent machines",
          "Expanding network connectivity between computer systems"
        ],
        "explanation": "Parallel computing uses simultaneous processing to reduce wall-clock execution time."
      },
      {
        "id": "prelim-a-2",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "In shared memory programming, what is a major responsibility of the developer?",
        "answer": "Coordinating synchronization to prevent race conditions",
        "wrong": [
          "Managing distributed file replication across clusters",
          "Configuring communication protocols between remote nodes",
          "Creating routing policies for message transmission systems"
        ],
        "explanation": "Shared memory is fast, but the developer must protect shared data with synchronization."
      },
      {
        "id": "prelim-a-3",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which option best represents distributed computing?",
        "answer": "A Hadoop cluster analyzing massive datasets collaboratively",
        "wrong": [
          "A graphics card rendering frames for a video game",
          "A desktop processor running several browser applications",
          "A laptop processor executing spreadsheet calculations locally"
        ],
        "explanation": "A Hadoop cluster is made of multiple computers collaborating across a network."
      },
      {
        "id": "prelim-a-4",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the main function of the Map phase in MapReduce?",
        "answer": "Splitting data into segments for simultaneous computation",
        "wrong": [
          "Saving generated outputs within distributed storage systems",
          "Directing communication requests among participating servers",
          "Combining processed results into a completed final output"
        ],
        "explanation": "The Map phase splits and processes chunks in parallel. Reduce combines the intermediate results."
      },
      {
        "id": "prelim-a-5",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture provides each processor with independent local memory?",
        "answer": "An architecture using separate local memory per processor",
        "wrong": [
          "A multiprocessing model built around centralized memory access",
          "A design where memory latency varies between processors",
          "A memory structure where all processors share equal access"
        ],
        "explanation": "Distributed memory gives processors or nodes their own local memory."
      },
      {
        "id": "prelim-a-6",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which pair of operations forms the basis of message passing systems?",
        "answer": "Sending information packets and receiving transmitted data",
        "wrong": [
          "Reading information and writing information to storage",
          "Allocating memory blocks and releasing unused resources",
          "Encoding communication streams and decoding transferred signals"
        ],
        "explanation": "Message passing is built on send and receive operations."
      },
      {
        "id": "prelim-a-7",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture allows every node to function as both client and server?",
        "answer": "A decentralized model where nodes share equal responsibilities",
        "wrong": [
          "A processing framework based on mapping and reducing tasks",
          "A cloud platform distributing applications through virtual servers",
          "A centralized system controlled by dedicated server machines"
        ],
        "explanation": "Peer-to-peer architecture gives each node both client and server roles."
      },
      {
        "id": "prelim-a-8",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Flynn's taxonomy categorizes parallel systems according to what criteria?",
        "answer": "The arrangement of instruction streams and data streams",
        "wrong": [
          "The operating systems and processor manufacturing designs",
          "The communication speed and network transmission capacity",
          "The quantity of processors and available memory resources"
        ],
        "explanation": "Flynn's taxonomy uses instruction streams and data streams."
      },
      {
        "id": "prelim-a-9",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A computer executing one instruction stream on one data stream belongs to which category?",
        "answer": "A system processing one instruction and one data stream",
        "wrong": [
          "A model supporting multiple instructions on shared datasets",
          "A configuration applying varied operations to identical inputs",
          "A structure executing many tasks across separate processors"
        ],
        "explanation": "Single Instruction, Single Data is SISD, the classic serial category."
      },
      {
        "id": "prelim-a-10",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which term describes the relationship between computation and communication in parallel systems?",
        "answer": "The balance between computational work and communication",
        "wrong": [
          "The quantity of completed operations within a time period",
          "The delay experienced during data transfer between systems",
          "The capability of a system to increase processing capacity"
        ],
        "explanation": "Granularity describes the ratio or balance between computation and communication."
      },
      {
        "id": "prelim-a-11",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A hospital system must analyze millions of patient records for an AI diagnosis platform. Their current single-server setup requires 72 hours to finish processing. Which approach is most appropriate?",
        "answer": "Using parallel processing across multiple processing cores",
        "wrong": [
          "Migrating services toward a decentralized peer network design",
          "Replacing the current processor with a higher clock-speed model",
          "Implementing a traditional client-server communication structure"
        ],
        "explanation": "Large analysis workloads can be split and processed in parallel to reduce completion time."
      },
      {
        "id": "prelim-a-12",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "An online shopping platform experiences severe slowdowns during holiday traffic spikes. The company wants to increase server capacity without redesigning the application. Which distributed computing characteristic best solves this issue?",
        "answer": "The ability to scale resources efficiently as demand grows",
        "wrong": [
          "A single instruction single data processing organization",
          "Uniform processor access to centrally managed memory blocks",
          "A memory-sharing structure across connected processing units"
        ],
        "explanation": "Scalability lets a distributed or cloud system add resources as demand grows."
      },
      {
        "id": "prelim-a-13",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "During a climate simulation, one node in a computing cluster unexpectedly crashes. The simulation continues operating successfully without losing results. Which distributed computing feature enabled this?",
        "answer": "Maintaining operation despite hardware or software failures",
        "wrong": [
          "Exchanging information continuously between independent processes",
          "Executing instructions sequentially through staged processing units",
          "Automatically distributing workloads across active processors evenly"
        ],
        "explanation": "Fault tolerance means the system can keep operating despite component failures."
      },
      {
        "id": "prelim-a-14",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A rendering studio divides a 4K movie into thousands of independent frames processed simultaneously across 200 computers. Which concept best describes this situation?",
        "answer": "Large processing tasks divided into loosely connected workloads",
        "wrong": [
          "Multiple instruction streams operating on identical data values",
          "A memory-sharing approach spanning several distributed systems",
          "Highly independent tasks executed simultaneously without interaction"
        ],
        "explanation": "This is coarse-grained or embarrassingly parallel work: large tasks split into mostly independent units."
      },
      {
        "id": "prelim-a-15",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Two processors running on the same machine frequently exchange extremely large datasets. Performance speed is the highest priority. Which communication method is most suitable?",
        "answer": "Shared memory because it minimizes communication overhead costs",
        "wrong": [
          "Shared memory because synchronization is completely unnecessary",
          "Message passing because operating system calls improve protection",
          "Message passing because it supports communication across networks"
        ],
        "explanation": "Shared memory is usually faster for large same-machine data exchange because it avoids per-message overhead."
      },
      {
        "id": "prelim-a-16",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A startup rapidly increases from 5 to 50 virtual machines during a product launch, then reduces usage afterward. Which computing model makes this possible?",
        "answer": "An elastic infrastructure delivered through cloud platforms",
        "wrong": [
          "A tightly coupled cluster operating within one local network",
          "A decentralized network without dedicated control mechanisms",
          "A grid-based environment connecting geographically separated systems"
        ],
        "explanation": "Cloud computing provides elastic, on-demand resources."
      },
      {
        "id": "prelim-a-17",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A graphics processor applies the same blur operation simultaneously across thousands of image pixels. Which Flynn taxonomy category best represents this process?",
        "answer": "A single operation applied simultaneously to multiple datasets",
        "wrong": [
          "One instruction stream operating on one sequence of data",
          "Multiple operations performed on one shared stream of data",
          "Different instructions executing independently across many datasets"
        ],
        "explanation": "SIMD applies a single instruction or operation across many data elements."
      },
      {
        "id": "prelim-a-18",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Engineers design a fraud-detection system where several processors perform different analyses on the same transaction stream. Which Flynn classification matches this setup?",
        "answer": "Multiple instruction streams analyzing the same incoming dataset",
        "wrong": [
          "A single processor executing sequential instructions on data",
          "One instruction stream simultaneously handling many data values",
          "Independent processors executing separate tasks on unique data"
        ],
        "explanation": "Multiple instructions acting on a single data stream is MISD."
      },
      {
        "id": "prelim-a-19",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel program finishes in 2 hours using 16 processors, while the serial version requires 20 hours. A colleague claims the parallel version is always more efficient. Which response is most accurate?",
        "answer": "Coordination overhead can reduce benefits for smaller workloads",
        "wrong": [
          "Parallel systems waste processing resources because of idle time",
          "Additional processors consistently improve efficiency for all workloads",
          "Parallel execution always decreases total processor utilization time"
        ],
        "explanation": "This key was corrected: more processors do not always improve efficiency because overhead can dominate."
      },
      {
        "id": "prelim-a-20",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A developer notices performance decreases after adding more processors because processors spend excessive time exchanging information. Which overhead factor is the likely cause?",
        "answer": "The communication costs associated with transferring shared data",
        "wrong": [
          "The delay occurring when tasks complete and release resources",
          "The licensing restrictions imposed by distributed software vendors",
          "The initialization time required before parallel tasks can begin"
        ],
        "explanation": "Communication overhead can erase the benefits of adding processors."
      },
      {
        "id": "prelim-a-21",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A NUMA architecture links two SMP systems. Processor A accesses local memory in 50ns but remote memory in 150ns. Which statement is most accurate?",
        "answer": "Memory access latency differs between regions in NUMA systems",
        "wrong": [
          "The system qualifies as UMA because processors remain identical",
          "Separate SMP systems require exclusive use of message passing",
          "Cache coherency cannot function correctly in NUMA architectures"
        ],
        "explanation": "NUMA means memory access time is non-uniform and depends on memory location."
      },
      {
        "id": "prelim-a-22",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Why does increasing CPUs in a shared memory system not always improve performance proportionally?",
        "answer": "Traffic contention creates bottlenecks on memory communication paths",
        "wrong": [
          "Shared memory systems cannot expand storage capacity efficiently",
          "Distributed memory becomes mandatory after adding several processors",
          "Shared memory processors cannot execute tasks independently"
        ],
        "explanation": "More CPUs can increase traffic and contention on shared memory paths."
      },
      {
        "id": "prelim-a-23",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel application uses fine-grained granularity. What consequence is most likely?",
        "answer": "Communication overhead becomes larger relative to computation",
        "wrong": [
          "Execution becomes slower because fewer tasks are generated",
          "Distributed architectures become unnecessary for coordination",
          "Communication demands decrease as processor counts increase"
        ],
        "explanation": "Fine-grained tasks communicate frequently, so overhead can become large."
      },
      {
        "id": "prelim-a-24",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What distinguishes distributed shared memory systems from pure distributed memory systems?",
        "answer": "Software creates a shared-memory illusion across distributed nodes",
        "wrong": [
          "Every processor physically accesses one universal memory structure",
          "Communication between machines becomes completely unnecessary",
          "All processors execute identical instructions on identical datasets"
        ],
        "explanation": "DSM hides physical distribution and presents an illusion of shared memory."
      },
      {
        "id": "prelim-a-25",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A MIMD computer may execute tasks non-deterministically. What does this imply for developers?",
        "answer": "Synchronization mechanisms are required to ensure correctness",
        "wrong": [
          "Scientific applications cannot operate reliably on MIMD systems",
          "Deterministic execution is unnecessary in parallel applications",
          "SIMD systems experience more synchronization concerns than MIMD"
        ],
        "explanation": "Non-deterministic execution means synchronization is needed to keep shared results correct."
      },
      {
        "id": "prelim-b-1",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What distinguishes distributed computing from parallel computing?",
        "answer": "Distributed computing uses multiple networked computers with independent memory spaces",
        "wrong": [
          "Parallel computing depends entirely on wide-area communication architecture systems",
          "Distributed computing always requires identical processors within shared architectures",
          "Parallel computing eliminates coordination between processors during task execution"
        ],
        "explanation": "Distributed computing uses independent networked machines, while parallel computing often focuses on simultaneous execution using multiple processors or cores."
      },
      {
        "id": "prelim-b-2",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which of the following is a key advantage of distributed memory architecture over shared memory?",
        "answer": "Higher scalability through independent nodes added across environments",
        "wrong": [
          "Faster synchronization between tightly coupled computational workloads",
          "Simplified address spaces allowing transparent memory access globally",
          "Lower communication overhead during real-time synchronization across processor groups"
        ],
        "explanation": "Distributed memory can scale by adding independent nodes, each with its own memory."
      },
      {
        "id": "prelim-b-3",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In the von Neumann architecture, what is stored in electronic memory?",
        "answer": "Program instructions together with data required for execution processes",
        "wrong": [
          "Operating system services and communication protocols",
          "Arithmetic processing rules controlling processor execution stages",
          "Hardware interrupt signals coordinating communication between connected input devices"
        ],
        "explanation": "The von Neumann model stores both program instructions and data in memory."
      },
      {
        "id": "prelim-b-4",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the Reduce phase responsible for in MapReduce?",
        "answer": "Combining intermediate outputs into summarized results for final processing stages",
        "wrong": [
          "Splitting data before assigning tasks across processing nodes",
          "Replicating distributed data across clusters for system fault tolerance",
          "Scheduling worker processes during parallel execution of distributed jobs"
        ],
        "explanation": "Reduce combines intermediate Map outputs into final summarized results."
      },
      {
        "id": "prelim-b-5",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which parallel computing resource is specifically mentioned as suitable for machine learning and scientific simulations?",
        "answer": "Graphics processing units (GPUs) enabling repetitive mathematical operations efficiently simultaneously",
        "wrong": [
          "Distributed storage platforms coordinating replicated blocks across computing environments",
          "Symmetric multiprocessing architectures supporting coordinated memory sharing operations globally",
          "Cluster middleware frameworks balancing workloads among geographically separated processors"
        ],
        "explanation": "GPUs are well suited for repetitive parallel mathematical operations used in machine learning and simulations."
      },
      {
        "id": "prelim-b-6",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is a node in the context of parallel computing clusters?",
        "answer": "Independent computers containing processors, memory and networking communication interfaces together",
        "wrong": [
          "Routing hardware connecting distributed systems across communication infrastructure environments",
          "Virtualized services executing distributed applications within cloud infrastructures remotely",
          "Shared processor cores executing synchronized instructions within multiprocessor architectures"
        ],
        "explanation": "A cluster node is a standalone computer with processors, memory, and network interfaces."
      },
      {
        "id": "prelim-b-7",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which statement correctly describes the shared memory inter-process communication model?",
        "answer": "Processes access and coordinate through spaces and regions containing shared information together",
        "wrong": [
          "Processes exchange information exclusively through synchronized message queue communication mechanisms",
          "Processes communicate indirectly using distributed packet switching across network infrastructures",
          "Processes isolate execution environments while communicating through independent storage replication systems"
        ],
        "explanation": "Shared memory IPC lets processes communicate by reading and writing a shared memory region."
      },
      {
        "id": "prelim-b-8",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the primary purpose of synchronization in parallel applications?",
        "answer": "Coordinating concurrent tasks while preventing inconsistent shared data modifications simultaneously",
        "wrong": [
          "Increasing processor speed during independent execution of distributed computational workloads",
          "Minimizing memory allocation requirements across geographically distributed processing environments globally",
          "Reducing network latency between geographically distributed computational resource infrastructures entirely"
        ],
        "explanation": "Synchronization coordinates concurrent work and protects shared data from inconsistent updates."
      },
      {
        "id": "prelim-b-9",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An SMP (Symmetric Multi-Processor) system is characterized by:",
        "answer": "Processors sharing equal access to memory and computing resources together",
        "wrong": [
          "Processors connected geographically using distributed communication infrastructures and middleware frameworks",
          "Nodes maintaining isolated memory spaces without coordinated synchronization mechanisms",
          "Nonuniform memory access architectures requiring specialized optimization and coordination strategies"
        ],
        "explanation": "In SMP, processors share memory and resources with equal access."
      },
      {
        "id": "prelim-b-10",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is message passing described as both useful and slower compared to shared memory communication?",
        "answer": "Message passing requires physical data transfers through operating system communication services",
        "wrong": [
          "Shared memory communication depends entirely upon geographically distributed network infrastructures globally",
          "Variable-length communication reduces synchronization requirements between processing components completely",
          "Message passing architectures require fewer processing distributed computational coordination tasks"
        ],
        "explanation": "Message passing is useful across separate address spaces, but it is slower because data transfer is mediated by the OS or network services."
      },
      {
        "id": "prelim-b-11",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer converts a serial program to run on 16 processors. Total CPU time increases from 4 hours to 48 hours while wall-clock time decreases slightly. What conclusion is most accurate?",
        "answer": "Parallel overhead may reduce overall efficiency when workload distribution across processors consumes resources",
        "wrong": [
          "Additional processors automatically guarantee greater processing resources",
          "Serial execution remains best because synchronization always reduces performance substantially",
          "Processor utilization increases substantially despite application executed across clustered infrastructures"
        ],
        "explanation": "The program may use more total CPU time because overhead, communication, and coordination reduce efficiency."
      },
      {
        "id": "prelim-b-12",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In P2P architecture, each node is both client and server. What makes this fundamentally different from client-server regarding fault tolerance?",
        "answer": "Distributed peer participation removes central dependency while improving system resilience significantly",
        "wrong": [
          "Centralized coordination improves replicated communication routing infrastructures globally",
          "Dedicated servers eliminate synchronization problems during workload distribution between participating systems",
          "Peer architectures depend entirely upon specialized hardware supporting coordinated resource allocation mechanisms"
        ],
        "explanation": "P2P removes a central server dependency, improving resilience compared with a single central server design."
      },
      {
        "id": "prelim-b-13",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A SIMD architecture processes the same data stream for fraud detection, where multiple independent cryptographic algorithms simultaneously analyze the same data stream. Which Flynn classification applies and why?",
        "answer": "MISD because multiple instructions analyze one shared transaction data stream",
        "wrong": [
          "SIMD because identical instructions operate across multiple independent transaction datasets simultaneously",
          "MIMD because processors execute unrelated algorithms using independent transaction processing streams",
          "SISD because transaction processing occurs sequentially through centralized computing architecture exclusively"
        ],
        "explanation": "Multiple instruction streams analyzing the same data stream corresponds to MISD."
      },
      {
        "id": "prelim-b-14",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A grid computing system spans multiple organizations globally. Compare this to cluster computing regarding governance, resource ownership, and scale.",
        "answer": "Grid systems involve distributed governance and heterogeneous resources across organizations globally",
        "wrong": [
          "Cluster systems depend entirely upon geographically separated organizations coordinating shared control",
          "Grid architectures operate exclusively within homogeneous environments managed through centralized administration systems",
          "Cluster infrastructures require distributed governance supporting independently managed computational resource networks worldwide"
        ],
        "explanation": "Grid computing often spans organizations and heterogeneous resources, while clusters are usually more tightly managed."
      },
      {
        "id": "prelim-b-15",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is complexity listed as both a challenge and cost multiplier in parallel software development?",
        "answer": "Concurrent execution coordination increases effort across design, debugging, tuning, and maintenance phases",
        "wrong": [
          "Specialized hardware infrastructures dramatically eliminate software licensing and deployment requirements globally",
          "Parallel programming languages restrict interoperability between distributed applications and operating systems entirely",
          "Proprietary debugging frameworks eliminate open-source development support for distributed computing projects globally"
        ],
        "explanation": "Parallel software adds coordination complexity throughout design, coding, debugging, tuning, and maintenance."
      },
      {
        "id": "prelim-b-16",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A weather forecasting agency must process satellite data from 50 regions simultaneously and independently. What is the most appropriate computing model?",
        "answer": "Embarrassingly parallel distribution supporting independent regional processing tasks simultaneously efficiently",
        "wrong": [
          "Client-server architecture coordinating centralized processing through dedicated communication infrastructures globally",
          "SISD processing executing sequential instructions through synchronized processor architectures exclusively",
          "High-speed serial processing environments minimizing synchronization across distributed computational infrastructures entirely"
        ],
        "explanation": "Independent regional workloads are a good fit for embarrassingly parallel processing."
      },
      {
        "id": "prelim-b-17",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A logistics company stores shipment records across geographically separate data centers. A query must search all locations simultaneously. Which component addresses this?",
        "answer": "Distributed file systems enabling coordinated access across geographically separated storage infrastructures",
        "wrong": [
          "Shared memory architectures supporting centralized synchronization between geographically separated processors globally",
          "Vector processing pipelines accelerating repetitive instructions during sequential database search operations",
          "Symmetric multiprocessing systems coordinating shared memory access between distributed processing systems"
        ],
        "explanation": "Distributed file systems coordinate access to data stored across geographically separated locations."
      },
      {
        "id": "prelim-b-18",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Two processes on different machines connected by a network need to share computation results. Shared memory is unavailable. Which IPC mechanism must they use?",
        "answer": "Message passing through send and receive communication operations across network infrastructures",
        "wrong": [
          "Direct cache coherency mechanisms coordinating memory synchronization between distributed processors continuously",
          "Shared address spaces supporting transparent remote memory access across geographically separated processing systems globally",
          "Uniform memory architectures coordinating synchronized processor access within shared computing environments together"
        ],
        "explanation": "Processes on different machines without shared memory communicate through message passing."
      },
      {
        "id": "prelim-b-19",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A machine learning model trains by splitting datasets into batches processed by GPU cores applying identical operations. Which Flynn taxonomy class describes this?",
        "answer": "SIMD because processing occurs through synchronized instruction execution across processor architectures",
        "wrong": [
          "SISD because processing occurs sequentially through synchronized processor architecture globally",
          "MIMD because processors execute unrelated instructions across multiple independent computational data streams independently",
          "MISD because multiple instruction streams coordinate processing across centralized communication environments globally"
        ],
        "explanation": "GPU cores applying the same operation to many data items are an example of SIMD."
      },
      {
        "id": "prelim-b-20",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An online multiplayer game server crashes but users reconnect seamlessly to a backup server without data loss. Which distributed characteristic enabled this?",
        "answer": "Fault tolerance maintaining service continuity despite failures within distributed computing environments effectively",
        "wrong": [
          "Load balancing distributing computational requests across synchronized server communication infrastructures globally",
          "Scalability mechanisms supporting increased processor coordination during high-demand computational workloads simultaneously",
          "Parallel decomposition separating independent tasks during coordinated distributed application processing operations globally"
        ],
        "explanation": "Fault tolerance allows service continuity when a server fails."
      },
      {
        "id": "prelim-b-21",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A university shares CPU cycles from multiple countries to simulate protein folding. Which distributed architecture best fits?",
        "answer": "Grid computing integrating heterogeneous resources from geographically distributed organizations collaboratively worldwide",
        "wrong": [
          "Cluster computing supporting homogeneous systems managed through centralized administrative infrastructures together",
          "Peer-to-peer architectures coordinating decentralized file exchanges between participating computational environments globally",
          "Client-server computing centralizing resource allocation through dedicated administrative infrastructure globally"
        ],
        "explanation": "Grid computing fits geographically distributed, heterogeneous resources across organizations."
      },
      {
        "id": "prelim-b-22",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel program splits work into microtasks constantly exchanging small updates. Performance becomes worse than the serial version. What is the most likely cause?",
        "answer": "Excessive communication overhead caused by extremely fine-grained task decomposition strategies continuously",
        "wrong": [
          "Coarse-grained decomposition reducing synchronization requirements across distributed processing environments entirely globally",
          "Distributed memory architectures providing synchronized communication between computational microtasks completely",
          "Processor underutilization resulting from insufficient workload distribution across available computing infrastructures globally"
        ],
        "explanation": "Fine-grained work can communicate so frequently that overhead outweighs parallel speedup."
      },
      {
        "id": "prelim-b-23",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A social media recommendation engine processes different users with different algorithms simultaneously across thousands of servers. Which Flynn classification applies?",
        "answer": "MIMD because independent instructions process separate datasets across distributed processors concurrently",
        "wrong": [
          "SIMD because identical operations process recommendation datasets simultaneously together",
          "SISD because execution remains sequential through centralized algorithmic processing architectures exclusively",
          "MISD because multiple algorithms analyze synchronized datasets through coordinated instruction execution simultaneously"
        ],
        "explanation": "Different algorithms on separate user datasets across many servers is MIMD."
      },
      {
        "id": "prelim-b-24",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer prioritizes simpler programming over system-level efficiency when choosing between fixed-size and variable-size messages. Which should they choose?",
        "answer": "Variable-size messages simplifying application programming despite increased implementation complexity internally globally",
        "wrong": [
          "Fixed-size messages because implementation through predictable communication packet structures globally",
          "Fixed-size communication structures automatically supporting flexible distributed application requirements completely",
          "Variable-length communication packets consistently reducing transmission overhead across distributed infrastructures worldwide"
        ],
        "explanation": "Variable-size messages require more system-level implementation but make the programming task simpler."
      },
      {
        "id": "prelim-b-25",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel scientific simulation runs correctly on 8 processors but produces inconsistent results on 32 processors. What is the most likely cause?",
        "answer": "Improper synchronization causing race conditions during larger-scale parallel execution environments simultaneously",
        "wrong": [
          "Network communication bandwidth preventing synchronization between distributed processing environments effectively globally",
          "NUMA architectures introducing incompatible processor communication patterns during synchronized computational execution processes",
          "Insufficient memory allocation preventing processor coordination across distributed computational workloads successfully"
        ],
        "explanation": "Inconsistent results at larger scale often point to race conditions from improper synchronization."
      },
      {
        "id": "week3-1",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What best describes a process?",
        "answer": "A running program with its own memory space and resources",
        "wrong": [
          "A single variable stored inside shared memory",
          "A hardware-only instruction decoder",
          "A message header used in distributed systems"
        ],
        "explanation": "A process is an independent running program with its own memory space."
      },
      {
        "id": "week3-2",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What best describes a thread?",
        "answer": "A lightweight execution unit inside a process",
        "wrong": [
          "A separate physical computer in a cluster",
          "A storage partition in HDFS",
          "A network protocol for RPC"
        ],
        "explanation": "A thread is the smallest execution unit inside a process and shares process memory."
      },
      {
        "id": "week3-3",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is the key distinction between concurrency and parallelism?",
        "answer": "Concurrency manages multiple tasks; parallelism executes tasks simultaneously",
        "wrong": [
          "Concurrency requires multiple machines; parallelism requires only one core",
          "Concurrency is slower storage; parallelism is faster storage",
          "Concurrency means no synchronization is required"
        ],
        "explanation": "Concurrency is about dealing with multiple tasks; parallelism is about doing them at the same time."
      },
      {
        "id": "week3-4",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Why do threads require synchronization?",
        "answer": "They share memory within a process",
        "wrong": [
          "They cannot communicate with each other",
          "They always run on separate networks",
          "They only execute serial instructions"
        ],
        "explanation": "Threads share memory, so access to shared data must be coordinated."
      },
      {
        "id": "week3-5",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which primitive provides exclusive access to a shared resource?",
        "answer": "Mutex or lock",
        "wrong": [
          "Map phase",
          "HDFS block",
          "Client request"
        ],
        "explanation": "A lock or mutex allows only one thread or process to enter a protected section at a time."
      },
      {
        "id": "week3-6",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which synchronization primitive uses a counter for limited resources?",
        "answer": "Semaphore",
        "wrong": [
          "Condition variable",
          "RPC",
          "Pipeline"
        ],
        "explanation": "A semaphore tracks available resource count."
      },
      {
        "id": "week3-7",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a condition variable used for?",
        "answer": "Waiting until a specific condition becomes true",
        "wrong": [
          "Classifying instruction streams",
          "Storing files across Hadoop nodes",
          "Dividing a program into Map and Reduce"
        ],
        "explanation": "Condition variables let threads wait and be signaled when a condition changes."
      },
      {
        "id": "week3-8",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a monitor?",
        "answer": "An abstraction that encapsulates shared data and controlled access procedures",
        "wrong": [
          "A screen that displays processor temperature",
          "A network cable for clusters",
          "A serial-only execution unit"
        ],
        "explanation": "A monitor bundles shared data with synchronized procedures."
      },
      {
        "id": "week3-9",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which communication primitive supports asynchronous ordered messages?",
        "answer": "Message queue",
        "wrong": [
          "Mutex",
          "Barrier",
          "SMP"
        ],
        "explanation": "Message queues let tasks send asynchronous messages while preserving order."
      },
      {
        "id": "week3-10",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which primitive is used to execute a procedure on another machine?",
        "answer": "RPC",
        "wrong": [
          "UMA",
          "SIMD",
          "Pthreads"
        ],
        "explanation": "Remote Procedure Call invokes a remote procedure as if it were local."
      },
      {
        "id": "week3-11",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a deadlock?",
        "answer": "Tasks wait forever for each other to release resources",
        "wrong": [
          "Tasks execute the same instruction on many data values",
          "A cluster scales down after demand falls",
          "A program completes with perfect speedup"
        ],
        "explanation": "Deadlock is permanent waiting caused by circular resource dependencies."
      },
      {
        "id": "week3-12",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a livelock?",
        "answer": "Tasks keep reacting to each other but fail to make progress",
        "wrong": [
          "A single instruction operates on one data stream",
          "A file is replicated across nodes",
          "A GPU applies one operation to pixels"
        ],
        "explanation": "In livelock, tasks are active but still make no progress."
      },
      {
        "id": "week3-13",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which technique lets a web server handle many client requests concurrently without one request blocking all others?",
        "answer": "Threads or asynchronous I/O",
        "wrong": [
          "Only SISD execution",
          "Turning off IPC",
          "Using no synchronization primitives"
        ],
        "explanation": "Web servers commonly use threads, async I/O, or event loops to handle concurrent requests."
      },
      {
        "id": "week3-14",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Why are processes more isolated than threads?",
        "answer": "Each process has its own memory space",
        "wrong": [
          "Each process always runs on a different physical country",
          "Processes cannot use operating system resources",
          "Threads never share memory"
        ],
        "explanation": "Process memory isolation improves stability and security."
      },
      {
        "id": "week3-15",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which is an example of communication rather than synchronization?",
        "answer": "Channel",
        "wrong": [
          "Mutex",
          "Semaphore",
          "Barrier"
        ],
        "explanation": "Channels pass messages. Mutexes, semaphores, and barriers primarily coordinate access or timing."
      },
      {
        "id": "module-final-a-1",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "A program creates several threads inside one process, and each thread reads and writes the same array. Which model is being used?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message-passing programming",
          "Linear programming",
          "Branch and bound"
        ],
        "explanation": "Shared-memory programming uses a common memory space that all threads can access."
      },
      {
        "id": "module-final-a-2",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Which statement best describes shared memory?",
        "answer": "All threads can access the same memory addresses",
        "wrong": [
          "Every process must use separate private memory",
          "Data is exchanged only through network packets",
          "Only one processor can read memory at a time"
        ],
        "explanation": "The key clue is common memory addresses accessible by multiple threads or processes."
      },
      {
        "id": "module-final-a-3",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "In shared-memory programming, how do threads usually communicate?",
        "answer": "By reading and writing shared variables",
        "wrong": [
          "By sending emails between processes",
          "By compiling separate programs",
          "By using only linear constraints"
        ],
        "explanation": "Shared variables are the communication channel in a shared-memory model."
      },
      {
        "id": "module-final-a-4",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "Two threads update the same counter at the same time and the final value is wrong. What is the most likely issue?",
        "answer": "Race condition",
        "wrong": [
          "Point-to-point communication",
          "Linearithmic runtime",
          "Greedy selection"
        ],
        "explanation": "Race conditions happen when concurrent access to shared data is not properly synchronized."
      },
      {
        "id": "module-final-a-5",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "Which mechanism is used to coordinate access to shared variables?",
        "answer": "Locks, semaphores, and barriers",
        "wrong": [
          "Only binary search",
          "Only message broadcasting",
          "Only matrix multiplication"
        ],
        "explanation": "Locks, semaphores, and barriers prevent conflicting updates in shared memory."
      },
      {
        "id": "module-final-a-6",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "What is the key difference between multithreading and multiprocessing in the shared-memory discussion?",
        "answer": "Multithreading creates multiple threads within one process, while multiprocessing uses independent processes",
        "wrong": [
          "Multithreading always uses networks, while multiprocessing never uses memory",
          "Multiprocessing is another name for binary search",
          "Multithreading cannot run in parallel"
        ],
        "explanation": "The distinction is thread units inside a process versus independent processes."
      },
      {
        "id": "module-final-a-7",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Why is shared-memory communication often fast?",
        "answer": "Threads can directly access shared data structures",
        "wrong": [
          "Every message must cross a wide-area network",
          "It always avoids all synchronization",
          "It uses factorial-time scheduling"
        ],
        "explanation": "Direct memory access is usually faster than communication between distributed nodes."
      },
      {
        "id": "module-final-a-8",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Which is a real challenge of shared-memory programming?",
        "answer": "Synchronization overhead",
        "wrong": [
          "No possibility of data sharing",
          "No need for debugging",
          "Automatic perfect scalability"
        ],
        "explanation": "Correct synchronization is necessary, but too much synchronization can reduce performance."
      },
      {
        "id": "module-final-a-9",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Scalability",
        "prompt": "As the number of shared-memory threads increases, performance may stop improving because of what?",
        "answer": "Contention for shared resources",
        "wrong": [
          "Lack of any common address space",
          "Guaranteed message ordering",
          "Fewer variables in memory"
        ],
        "explanation": "More threads can fight over shared data, locks, cache lines, or memory bandwidth."
      },
      {
        "id": "module-final-a-10",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "A developer says shared memory is easy because threads can share variables. What important warning should you add?",
        "answer": "Shared variables must be synchronized to avoid inconsistent data",
        "wrong": [
          "Shared variables remove all debugging problems",
          "Shared memory cannot create race conditions",
          "Threads are never allowed to write shared data"
        ],
        "explanation": "The convenience of shared variables is exactly why synchronization is important."
      },
      {
        "id": "module-final-a-11",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which programming paradigm uses independent processes that exchange explicit messages?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming",
          "Dynamic programming",
          "Constant-space programming"
        ],
        "explanation": "Message passing uses send/receive communication instead of a common memory space."
      },
      {
        "id": "module-final-a-12",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "In message-passing programming, what is usually true about memory?",
        "answer": "Processes run in separate memory spaces",
        "wrong": [
          "All processes share one global address space",
          "Only GPU memory can be used",
          "Memory is replaced by linear equations"
        ],
        "explanation": "The model communicates by explicit messages because memory is not shared."
      },
      {
        "id": "module-final-a-13",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which pair best represents the basic operations of message passing?",
        "answer": "Send and receive",
        "wrong": [
          "Divide and combine",
          "Lock and unlock only",
          "Push and pop only"
        ],
        "explanation": "Message-passing programs coordinate by sending and receiving messages."
      },
      {
        "id": "module-final-a-14",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "What does asynchronous communication mean in message passing?",
        "answer": "A process can continue execution while waiting for a message",
        "wrong": [
          "All processes must stop until every message arrives",
          "Messages are impossible to receive out of order",
          "Only one process may exist"
        ],
        "explanation": "Asynchronous communication lets execution continue instead of always blocking immediately."
      },
      {
        "id": "module-final-a-15",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "What makes synchronization explicit in message passing?",
        "answer": "Processes intentionally wait for or react to message receipt",
        "wrong": [
          "The operating system hides all communication decisions",
          "Shared variables are automatically protected",
          "The compiler removes all messages"
        ],
        "explanation": "The program explicitly coordinates around messages."
      },
      {
        "id": "module-final-a-16",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "A process sends a message directly to one specific target process. What communication pattern is this?",
        "answer": "Point-to-point communication",
        "wrong": [
          "Collective communication",
          "Dynamic programming",
          "Quadratic space"
        ],
        "explanation": "Point-to-point means one sender targets one receiver."
      },
      {
        "id": "module-final-a-17",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Broadcasting a value from one process to all processes is what kind of message-passing operation?",
        "answer": "Collective communication",
        "wrong": [
          "Constant-time access",
          "Backtracking",
          "Shared variable assignment"
        ],
        "explanation": "Collective communication involves a group of processes exchanging data by a pattern like broadcast, reduce, or gather."
      },
      {
        "id": "module-final-a-18",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which standard is widely used for high-performance message passing?",
        "answer": "MPI",
        "wrong": [
          "HTML",
          "CSS",
          "SQL injection"
        ],
        "explanation": "MPI stands for Message Passing Interface and is widely used in HPC and distributed memory systems."
      },
      {
        "id": "module-final-a-19",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Scalability",
        "prompt": "Why does message passing scale well for clusters?",
        "answer": "It does not depend on a single shared memory space",
        "wrong": [
          "It never communicates",
          "It removes all overhead",
          "It requires one processor only"
        ],
        "explanation": "Separate processes can run across many machines and communicate through messages."
      },
      {
        "id": "module-final-a-20",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Debugging",
        "prompt": "Which is a common debugging issue in message-passing programs?",
        "answer": "Message deadlock or unexpected message order",
        "wrong": [
          "No communication pattern exists",
          "All variables are shared by default",
          "There are no synchronization concerns"
        ],
        "explanation": "Message-passing bugs often involve blocking messages, unexpected order, or deadlocks."
      },
      {
        "id": "module-final-a-21",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Which statement best defines data parallelism?",
        "answer": "The same operation is applied to different partitions of a dataset",
        "wrong": [
          "Different unrelated tasks are always executed one after another",
          "All processes use one lock",
          "One message is broadcast to all users"
        ],
        "explanation": "Data parallelism is about splitting data and repeating the same computation."
      },
      {
        "id": "module-final-a-22",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Data parallelism is often associated with which execution style?",
        "answer": "SIMD",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "Non-repudiation"
        ],
        "explanation": "SIMD means Single Instruction, Multiple Data, matching the same operation over many data elements."
      },
      {
        "id": "module-final-a-23",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Load Balancing",
        "prompt": "Why is load balancing important in data parallelism?",
        "answer": "It keeps processing units from receiving uneven amounts of work",
        "wrong": [
          "It prevents all communication from existing",
          "It forces all data into one partition",
          "It converts O(n) into O(1)"
        ],
        "explanation": "Uneven partitions cause some processors to finish early while others continue working."
      },
      {
        "id": "module-final-a-24",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Which statement is usually true for ideal data parallelism?",
        "answer": "Communication between processing units is minimal or unnecessary",
        "wrong": [
          "Every task must exchange messages every step",
          "Each unit performs a different algorithm",
          "All work must run on one core"
        ],
        "explanation": "Independent partitions allow parallel work with little coordination."
      },
      {
        "id": "module-final-a-25",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Applying the same brightness adjustment to every pixel of a large image is an example of what?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Branch and bound",
          "Linear programming"
        ],
        "explanation": "The same operation is applied to many independent pixel values."
      },
      {
        "id": "module-final-a-26",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Which statement best defines task parallelism?",
        "answer": "Different independent tasks are executed concurrently",
        "wrong": [
          "The same instruction must run on all data elements",
          "All processors share one variable only",
          "Every task must wait for a network message"
        ],
        "explanation": "Task parallelism focuses on separate tasks, not just separate data chunks."
      },
      {
        "id": "module-final-a-27",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Which situation most clearly uses task parallelism?",
        "answer": "A program searches files, downloads data, and compresses output at the same time",
        "wrong": [
          "A GPU applies one blur operation to every pixel",
          "A loop prints each element sequentially",
          "A binary search halves a sorted array"
        ],
        "explanation": "The tasks are distinct operations executing concurrently."
      },
      {
        "id": "module-final-a-28",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Why does task parallelism often need dynamic load balancing?",
        "answer": "Tasks may have different execution times or complexity",
        "wrong": [
          "All tasks are guaranteed identical",
          "Data partitions are always the same size",
          "Messages cannot be sent"
        ],
        "explanation": "Dynamic scheduling keeps units busy when tasks vary."
      },
      {
        "id": "module-final-a-29",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "When one task depends on another task's result, task parallelism may require what?",
        "answer": "Synchronization",
        "wrong": [
          "Factorial growth",
          "No coordination",
          "Only greedy selection"
        ],
        "explanation": "Dependencies require coordination so tasks use correct results."
      },
      {
        "id": "module-final-a-30",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Parallel recursive algorithms often fit task parallelism because what can become independent work?",
        "answer": "Recursive calls",
        "wrong": [
          "Only one global variable",
          "The final print statement",
          "All memory addresses"
        ],
        "explanation": "Each recursive branch can sometimes be treated as an independent task."
      },
      {
        "id": "module-final-a-31",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Parallel loop iterations are task-parallel only when what is true?",
        "answer": "Iterations can execute independently",
        "wrong": [
          "Every iteration writes the same shared variable without locks",
          "The loop must be O(n!)",
          "Only one iteration exists"
        ],
        "explanation": "Independent iterations can be treated as separate tasks."
      },
      {
        "id": "module-final-a-32",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Parallelism Types",
        "prompt": "Which clue separates data parallelism from task parallelism?",
        "answer": "Same operation on data chunks versus different operations as tasks",
        "wrong": [
          "Both require no processors",
          "Data parallelism cannot use datasets",
          "Task parallelism always means one task"
        ],
        "explanation": "This is the central distinction the exam often tests."
      },
      {
        "id": "module-final-a-33",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "OpenMP is most commonly associated with what environment?",
        "answer": "Shared-memory multi-core programming",
        "wrong": [
          "Only wide-area message passing",
          "Only database normalization",
          "Only cryptography"
        ],
        "explanation": "OpenMP is commonly used to express parallelism in shared-memory systems."
      },
      {
        "id": "module-final-a-34",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Divide and conquer has which core sequence?",
        "answer": "Divide -> Conquer -> Combine",
        "wrong": [
          "Send -> Receive -> Broadcast",
          "Lock -> Sleep -> Ignore",
          "Guess -> Encrypt -> Delete"
        ],
        "explanation": "The method divides the problem, solves subproblems recursively, and combines results."
      },
      {
        "id": "module-final-a-35",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which algorithm is a classic divide-and-conquer example?",
        "answer": "Merge sort",
        "wrong": [
          "Sudoku backtracking as the only answer",
          "A password policy",
          "Linear objective optimization"
        ],
        "explanation": "Merge sort divides, recursively sorts, and merges the subresults."
      },
      {
        "id": "module-final-a-36",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique chooses the best-looking option at the current step?",
        "answer": "Greedy method",
        "wrong": [
          "Backtracking",
          "Message passing",
          "Quadratic space"
        ],
        "explanation": "Greedy algorithms make local choices and typically do not reconsider them."
      },
      {
        "id": "module-final-a-37",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Why is the greedy method considered risky on some problems?",
        "answer": "A local best choice may not produce the global best result",
        "wrong": [
          "It always checks all permutations",
          "It is impossible to implement",
          "It requires shared memory"
        ],
        "explanation": "Greedy choices are simple, but local optimality is not always enough."
      },
      {
        "id": "module-final-a-38",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique solves subproblems and reuses their stored answers?",
        "answer": "Dynamic programming",
        "wrong": [
          "Message passing",
          "Constant space only",
          "Point-to-point communication"
        ],
        "explanation": "Dynamic programming avoids repeated work by reusing subproblem solutions."
      },
      {
        "id": "module-final-a-39",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Why is Fibonacci often used to explain dynamic programming?",
        "answer": "It has repeated overlapping subproblems",
        "wrong": [
          "It requires no memory at all",
          "It is only a message-passing protocol",
          "It always uses linear constraints"
        ],
        "explanation": "Naive Fibonacci recomputes many values; DP stores and reuses them."
      },
      {
        "id": "module-final-a-40",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "A Sudoku solver tries a number, fails later, and returns to choose a different number. Which technique is this?",
        "answer": "Backtracking",
        "wrong": [
          "Data parallelism",
          "Linear programming",
          "Constant time"
        ],
        "explanation": "Backtracking tries a candidate and retreats when the path becomes invalid."
      },
      {
        "id": "module-final-a-41",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which problem is commonly linked to backtracking?",
        "answer": "Eight queen problem",
        "wrong": [
          "Direct array access",
          "Simple variable assignment",
          "Point-to-point send only"
        ],
        "explanation": "Eight queens, Sudoku, and maze traversal are classic backtracking examples."
      },
      {
        "id": "module-final-a-42",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique keeps a current best solution and prunes paths that cannot beat it?",
        "answer": "Branch and bound",
        "wrong": [
          "Greedy method only",
          "Shared variable communication",
          "Big-Omega notation"
        ],
        "explanation": "Branch and bound uses bounds to remove weak parts of the solution space."
      },
      {
        "id": "module-final-a-43",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "What is a key purpose of branch and bound search?",
        "answer": "Maintain or improve the lowest-cost path to a target",
        "wrong": [
          "Avoid optimization entirely",
          "Force every process to share memory",
          "Make all loops nested"
        ],
        "explanation": "The method searches for an optimal solution while pruning."
      },
      {
        "id": "module-final-a-44",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Linear programming is used when the objective and constraints are what?",
        "answer": "Linear functions",
        "wrong": [
          "Random message orders",
          "Only recursive calls",
          "Only shared variables"
        ],
        "explanation": "Linear programming optimizes a linear objective subject to linear constraints."
      },
      {
        "id": "module-final-a-45",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which is a typical linear programming goal?",
        "answer": "Maximize profit or minimize cost",
        "wrong": [
          "Create a race condition",
          "Broadcast every pixel",
          "Ignore all constraints"
        ],
        "explanation": "The source lists maximum profit, shortest path, and lowest cost style outcomes."
      },
      {
        "id": "module-final-a-46",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "What does time complexity measure?",
        "answer": "How runtime grows as input size grows",
        "wrong": [
          "Only the color of a chart",
          "Only the number of processors",
          "Only the size of source code comments"
        ],
        "explanation": "Time complexity is runtime as a function of input size."
      },
      {
        "id": "module-final-a-47",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Directly printing the first array element is usually what time complexity?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n^2)",
          "O(n!)"
        ],
        "explanation": "The work does not depend on how many elements the array contains."
      },
      {
        "id": "module-final-a-48",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Binary search on a sorted array is usually what time complexity?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(n!)",
          "O(1) for all cases"
        ],
        "explanation": "Binary search repeatedly halves the search range."
      },
      {
        "id": "module-final-a-49",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Two nested loops that print every ordered pair from an array usually have what time complexity?",
        "answer": "O(n^2)",
        "wrong": [
          "O(log n)",
          "O(1)",
          "O(n log n) always"
        ],
        "explanation": "A loop inside another loop over n elements creates n times n work."
      },
      {
        "id": "module-final-a-50",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Which growth order is generally best among these for large input?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(2^n)",
          "O(n!)"
        ],
        "explanation": "Logarithmic growth increases very slowly compared with polynomial, exponential, and factorial growth."
      },
      {
        "id": "module-final-b-1",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A hospital AI system splits millions of records into equal chunks and runs the same risk-scoring formula on each chunk. Which model is the best fit?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Backtracking",
          "Linear programming"
        ],
        "explanation": "The same computation is applied to independent data partitions."
      },
      {
        "id": "module-final-b-2",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A video editor applies the same filter to every frame block on a GPU. What is the best classification?",
        "answer": "Data parallelism using SIMD-style work",
        "wrong": [
          "Message passing with no data partitioning",
          "Greedy local selection",
          "Branch and bound search"
        ],
        "explanation": "The same operation is repeated over many independent data elements."
      },
      {
        "id": "module-final-b-3",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A web server handles login, payment, and notification jobs at the same time, and each job uses different logic. What is the best fit?",
        "answer": "Task parallelism",
        "wrong": [
          "Pure data parallelism",
          "O(1) direct access",
          "Linear programming"
        ],
        "explanation": "Different independent operations executing concurrently point to task parallelism."
      },
      {
        "id": "module-final-b-4",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A cluster has 200 nodes, each with its own memory, and nodes exchange work updates through MPI. Which model is this?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming",
          "Constant-space programming",
          "Greedy method"
        ],
        "explanation": "Separate memory spaces plus MPI are message-passing clues."
      },
      {
        "id": "module-final-b-5",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Four threads in one process update a shared transaction balance. What must be added to avoid inconsistent balances?",
        "answer": "Synchronization such as a lock",
        "wrong": [
          "More unsynchronized writes",
          "A factorial algorithm",
          "A public broadcast only"
        ],
        "explanation": "Shared updates need controlled access to avoid race conditions."
      },
      {
        "id": "module-final-b-6",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "An image-processing job has 1,000 chunks, but some chunks are much harder than others. What problem should the developer watch?",
        "answer": "Load imbalance",
        "wrong": [
          "No possible parallelism",
          "Big-Omega notation",
          "Only greedy recursion"
        ],
        "explanation": "Uneven work makes some processors idle while others keep running."
      },
      {
        "id": "module-final-b-7",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A process waits forever for a message that another process never sends. What kind of issue is most likely?",
        "answer": "Message deadlock",
        "wrong": [
          "Cache-friendly shared memory",
          "Constant time success",
          "Linear objective optimization"
        ],
        "explanation": "Message-passing programs can deadlock when waiting conditions are not satisfied."
      },
      {
        "id": "module-final-b-8",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A programmer wants to send one configuration value from a root process to all worker processes. Which operation type fits?",
        "answer": "Collective communication",
        "wrong": [
          "Point-to-point only",
          "Backtracking",
          "Quadratic space"
        ],
        "explanation": "Broadcasting to a group is collective communication."
      },
      {
        "id": "module-final-b-9",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A worker sends a result only to process 7. Which message-passing communication type is this?",
        "answer": "Point-to-point communication",
        "wrong": [
          "Collective communication",
          "Shared variable access",
          "Branch and bound"
        ],
        "explanation": "A specific sender-to-target pattern is point-to-point."
      },
      {
        "id": "module-final-b-10",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A shared-memory app becomes slower after adding more threads because they all compete for one lock. What is the best explanation?",
        "answer": "Synchronization contention reduces scalability",
        "wrong": [
          "Message passing removed all overhead",
          "Binary search became O(n!)",
          "The program stopped using memory"
        ],
        "explanation": "Too much lock contention can erase parallel speedup."
      },
      {
        "id": "module-final-b-11",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A program divides a large search tree into branches, but some branches depend on earlier choices and invalid paths must be abandoned. Which algorithm style fits?",
        "answer": "Backtracking",
        "wrong": [
          "Data parallelism only",
          "O(1) direct access",
          "Message broadcast"
        ],
        "explanation": "Trying a path and retreating when it fails is backtracking."
      },
      {
        "id": "module-final-b-12",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A delivery company wants the cheapest route and prunes any path already more expensive than the best current route. Which technique is being used?",
        "answer": "Branch and bound",
        "wrong": [
          "Shared memory only",
          "Greedy with no pruning",
          "Constant-space array creation"
        ],
        "explanation": "The bound lets the algorithm eliminate paths that cannot beat the current best."
      },
      {
        "id": "module-final-b-13",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A scheduling problem has a linear cost equation and linear resource constraints. What technique is most appropriate?",
        "answer": "Linear programming",
        "wrong": [
          "Backtracking only",
          "Message passing only",
          "Dynamic work stealing"
        ],
        "explanation": "Linear programming optimizes a linear objective under linear constraints."
      },
      {
        "id": "module-final-b-14",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A recursive Fibonacci implementation keeps recomputing the same values. Which technique is designed to fix that?",
        "answer": "Dynamic programming",
        "wrong": [
          "Greedy method",
          "Message deadlock",
          "O(n!) sorting"
        ],
        "explanation": "Dynamic programming stores and reuses overlapping subproblem results."
      },
      {
        "id": "module-final-b-15",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A sorting method splits an array, sorts the halves, then merges the halves. Which design technique is this?",
        "answer": "Divide and conquer",
        "wrong": [
          "Linear programming",
          "Point-to-point messaging",
          "Race condition"
        ],
        "explanation": "Split, recursively solve, and combine is divide and conquer."
      },
      {
        "id": "module-final-b-16",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A navigation app always chooses the currently closest next stop without reconsidering previous choices. Which method is this closest to?",
        "answer": "Greedy method",
        "wrong": [
          "Dynamic programming",
          "Backtracking",
          "Message passing"
        ],
        "explanation": "Greedy chooses the best immediate option and typically does not reconsider."
      },
      {
        "id": "module-final-b-17",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A classmate says greedy always gives the globally optimal answer. What is the best correction?",
        "answer": "Greedy can fail when the local best choice is not globally best",
        "wrong": [
          "Greedy always checks every possible solution",
          "Greedy is only for shared memory",
          "Greedy never makes choices"
        ],
        "explanation": "Greedy is efficient and simple, but it needs problem conditions that make local choices safe."
      },
      {
        "id": "module-final-b-18",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A security scan checks every pair of modules for compatibility using two nested loops. What time complexity should you expect?",
        "answer": "O(n^2)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Checking all pairs creates quadratic growth."
      },
      {
        "id": "module-final-b-19",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A monitoring tool reads only the first log entry no matter how many logs exist. What time complexity is this action?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n log n)",
          "O(2^n)"
        ],
        "explanation": "The number of operations is fixed and does not grow with input size."
      },
      {
        "id": "module-final-b-20",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A sorted database repeatedly halves the remaining search range while looking for an ID. What time complexity is this?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(n!)",
          "O(n^3)"
        ],
        "explanation": "Halving the search space is the signature of logarithmic time."
      },
      {
        "id": "module-final-b-21",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A program prints every item in a list once. What time complexity is most likely?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(n^2)",
          "O(2^n)"
        ],
        "explanation": "One pass through n items gives linear time."
      },
      {
        "id": "module-final-b-22",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A merge-sort style algorithm divides data and combines sorted results. What typical complexity appears in many efficient sorting algorithms?",
        "answer": "O(n log n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Efficient comparison sorting is commonly O(n log n)."
      },
      {
        "id": "module-final-b-23",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A program creates an array of size n before processing. What space complexity is introduced by that array?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Memory grows in direct proportion to n."
      },
      {
        "id": "module-final-b-24",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A program creates an n by n table for dynamic programming. What space complexity is likely?",
        "answer": "O(n^2)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n) only"
        ],
        "explanation": "An n by n matrix contains n squared cells."
      },
      {
        "id": "module-final-b-25",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A function only stores three integer variables regardless of input size. What space complexity is likely?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "explanation": "A fixed number of variables is constant space."
      },
      {
        "id": "module-final-b-26",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes an upper bound or worst-case-style ceiling?",
        "answer": "Big-O",
        "wrong": [
          "Big-Omega",
          "Big-Theta only",
          "SIMD"
        ],
        "explanation": "Big-O gives an upper bound on growth."
      },
      {
        "id": "module-final-b-27",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes a lower bound or minimum growth guarantee?",
        "answer": "Big-Omega",
        "wrong": [
          "Big-O",
          "Big-Theta only",
          "MPI"
        ],
        "explanation": "Big-Omega gives a lower bound."
      },
      {
        "id": "module-final-b-28",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes a tight bound with both upper and lower limits?",
        "answer": "Big-Theta",
        "wrong": [
          "Big-O only",
          "Big-Omega only",
          "OpenMP"
        ],
        "explanation": "Big-Theta is used when the growth is bounded above and below by the same class."
      },
      {
        "id": "module-final-b-29",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A team uses OpenMP pragmas to parallelize loops on a multi-core machine with shared RAM. Which model is most likely?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message-passing programming",
          "Blockchain consensus",
          "Linear programming"
        ],
        "explanation": "OpenMP is commonly used for shared-memory multi-core parallelism."
      },
      {
        "id": "module-final-b-30",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A team uses MPI to coordinate jobs across machines with separate memory. Which model is most likely?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming only",
          "Backtracking only",
          "O(1) space only"
        ],
        "explanation": "MPI is the standard clue for message passing."
      },
      {
        "id": "module-final-b-31",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Message Passing",
        "prompt": "A developer says asynchronous message passing means no synchronization is ever needed. What is the best response?",
        "answer": "Processes still need explicit coordination around message receipt",
        "wrong": [
          "Asynchronous means all processes share memory",
          "Asynchronous means no messages are sent",
          "Asynchronous converts all code to O(1)"
        ],
        "explanation": "Asynchronous communication can reduce waiting, but coordination is still explicit."
      },
      {
        "id": "module-final-b-32",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Shared Memory",
        "prompt": "A shared array is updated by many threads, but each thread writes to a separate index and no thread reads incomplete results. What is the likely benefit?",
        "answer": "Reduced synchronization need compared with shared writes to one location",
        "wrong": [
          "Guaranteed factorial complexity",
          "Mandatory message deadlock",
          "No memory access"
        ],
        "explanation": "Independent partitions reduce conflicts, though final coordination may still be needed."
      },
      {
        "id": "module-final-b-33",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "A GPU applies one instruction to thousands of pixels at the same time. Which taxonomy idea matches this?",
        "answer": "SIMD",
        "wrong": [
          "MIMD only",
          "SISD only",
          "Branch and bound"
        ],
        "explanation": "Single Instruction, Multiple Data fits the GPU pixel example."
      },
      {
        "id": "module-final-b-34",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "A normal single-core program executes one instruction stream over one data stream. Which Flynn category is closest?",
        "answer": "SISD",
        "wrong": [
          "SIMD",
          "MISD",
          "MIMD"
        ],
        "explanation": "SISD means Single Instruction, Single Data."
      },
      {
        "id": "module-final-b-35",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "Different processors run different tasks on different data at the same time. Which Flynn category is closest?",
        "answer": "MIMD",
        "wrong": [
          "SISD",
          "SIMD",
          "Constant space"
        ],
        "explanation": "MIMD means Multiple Instruction, Multiple Data."
      },
      {
        "id": "module-final-b-36",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "Different processors run different analyses on the same sensor stream. Which Flynn category is closest?",
        "answer": "MISD",
        "wrong": [
          "SISD",
          "SIMD",
          "O(n log n)"
        ],
        "explanation": "MISD means Multiple Instruction, Single Data, a rare but testable category."
      },
      {
        "id": "module-final-b-37",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Granularity",
        "prompt": "A task-parallel program has many small tasks, and scheduling overhead becomes large compared with useful computation. What issue is this?",
        "answer": "Too fine-grained task decomposition",
        "wrong": [
          "Perfect load balancing",
          "Constant-time execution",
          "No synchronization"
        ],
        "explanation": "Very fine-grained tasks can spend too much time on overhead."
      },
      {
        "id": "module-final-b-38",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "A distributed program sends huge messages every millisecond and spends more time communicating than computing. What factor is hurting performance?",
        "answer": "Communication overhead",
        "wrong": [
          "Greedy optimality",
          "O(1) direct access",
          "Backtracking success"
        ],
        "explanation": "Excessive data transfer can dominate runtime."
      },
      {
        "id": "module-final-b-39",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "A program gets faster when processors are added, but not proportionally. Which explanation is most realistic?",
        "answer": "Coordination, communication, and synchronization overhead reduce ideal speedup",
        "wrong": [
          "Parallelism always gives perfect speedup",
          "More processors remove all memory limits",
          "The program becomes serial by definition"
        ],
        "explanation": "Parallel systems often have overhead and non-parallel portions."
      },
      {
        "id": "module-final-b-40",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "Which metric describes how effectively processors are used in a parallel system?",
        "answer": "Efficiency",
        "wrong": [
          "Voltage",
          "Screen resolution",
          "Database color"
        ],
        "explanation": "Efficiency compares useful speedup with processor resources used."
      },
      {
        "id": "module-final-b-41",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Granularity",
        "prompt": "A program divides a 4K video into independent frames processed by many computers. What phrase best fits?",
        "answer": "Coarse-grained parallel workload",
        "wrong": [
          "One shared lock workload",
          "O(1) direct access only",
          "No parallelism"
        ],
        "explanation": "Independent large tasks are coarse-grained and suited to distributed processing."
      },
      {
        "id": "module-final-b-42",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Data Parallelism",
        "prompt": "A data-parallel workload needs almost no communication. What is the performance advantage?",
        "answer": "Less communication overhead",
        "wrong": [
          "More message deadlocks",
          "More lock contention",
          "Factorial growth"
        ],
        "explanation": "Minimal communication helps preserve speedup."
      },
      {
        "id": "module-final-b-43",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Task Parallelism",
        "prompt": "A task-parallel system has tasks whose durations are unknown until runtime. Which scheduling idea helps most?",
        "answer": "Dynamic load balancing",
        "wrong": [
          "Fixed one-time partitioning only",
          "No scheduling",
          "Only linear programming"
        ],
        "explanation": "Dynamic balancing adapts as tasks vary."
      },
      {
        "id": "module-final-b-44",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Message Passing",
        "prompt": "Which option is the clearest example of collective communication?",
        "answer": "Reducing partial sums from all workers into one total",
        "wrong": [
          "Thread A writes x = 5",
          "A single direct array lookup",
          "A Sudoku solver backtracks"
        ],
        "explanation": "Reduce gathers and combines data from many processes."
      },
      {
        "id": "module-final-b-45",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A programmer moves a program from one multi-core server to a cluster of independent machines. Which shift is most likely needed?",
        "answer": "From shared-memory assumptions to message-passing communication",
        "wrong": [
          "From O(n) to O(1) automatically",
          "From data structures to no data",
          "From messages to one global variable"
        ],
        "explanation": "Clusters usually do not share one address space across machines."
      },
      {
        "id": "module-final-b-46",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Which model is best if all worker units must frequently update one shared object with low-latency access?",
        "answer": "Shared-memory programming with careful synchronization",
        "wrong": [
          "Message passing with no communication",
          "Linear programming only",
          "Backtracking only"
        ],
        "explanation": "Low-latency shared access fits shared memory, but synchronization remains necessary."
      },
      {
        "id": "module-final-b-47",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Which model is best if workers are on different networked machines and memory is not shared?",
        "answer": "Message-passing programming",
        "wrong": [
          "Pure shared memory",
          "O(1) constant space only",
          "Single-threaded SISD only"
        ],
        "explanation": "Separate networked nodes usually coordinate by messages."
      },
      {
        "id": "module-final-b-48",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Concurrency Trap",
        "prompt": "What is the most likely bug if two tasks keep responding to each other but never make progress?",
        "answer": "Livelock",
        "wrong": [
          "Linear time",
          "Direct access",
          "Perfect scalability"
        ],
        "explanation": "Livelock means activity continues but no useful progress is made."
      },
      {
        "id": "module-final-b-49",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Concurrency Trap",
        "prompt": "What is the most likely bug if two threads each hold one lock and wait forever for the other lock?",
        "answer": "Deadlock",
        "wrong": [
          "SIMD",
          "O(n log n)",
          "Greedy choice"
        ],
        "explanation": "Deadlock occurs when each side waits for resources held by the other."
      },
      {
        "id": "module-final-b-50",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A cloud analytics job partitions data by user ID and runs the same aggregation on every partition. Which concept is strongest?",
        "answer": "Data parallelism",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "SISD"
        ],
        "explanation": "Partitioned data with identical aggregation is data parallel."
      },
      {
        "id": "module-final-c-1",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which answer is most accurate: shared-memory programming simplifies communication because...",
        "answer": "Threads can directly read and write shared data structures",
        "wrong": [
          "It removes the need for synchronization",
          "It works only across remote clusters",
          "It forbids shared variables"
        ],
        "explanation": "Shared memory simplifies data exchange, but it does not remove synchronization needs."
      },
      {
        "id": "module-final-c-2",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which statement is false about message-passing programming?",
        "answer": "Processes must share the same address space",
        "wrong": [
          "Processes exchange messages",
          "Synchronization is explicit",
          "MPI is a common standard"
        ],
        "explanation": "Message passing is defined by separate memory spaces, not a shared address space."
      },
      {
        "id": "module-final-c-3",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "A question says 'same operation, many data items.' Which answer should you suspect first?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Branch and bound",
          "Linear programming"
        ],
        "explanation": "That phrase is the exam shortcut for data parallelism."
      },
      {
        "id": "module-final-c-4",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "A question says 'many independent operations, different work.' Which answer should you suspect first?",
        "answer": "Task parallelism",
        "wrong": [
          "Data parallelism",
          "SIMD only",
          "O(log n)"
        ],
        "explanation": "Distinct independent work points to task parallelism."
      },
      {
        "id": "module-final-c-5",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which item is not a shared-memory synchronization mechanism from the lesson?",
        "answer": "Broadcast",
        "wrong": [
          "Lock",
          "Semaphore",
          "Barrier"
        ],
        "explanation": "Broadcast is a collective message-passing operation; locks, semaphores, and barriers coordinate shared memory."
      },
      {
        "id": "module-final-c-6",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which item is not a message-passing library or standard listed in the lesson?",
        "answer": "OpenMP",
        "wrong": [
          "MPI",
          "Open MPI",
          "Microsoft MPI"
        ],
        "explanation": "OpenMP is usually associated with shared-memory parallel programming, not message passing."
      },
      {
        "id": "module-final-c-7",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Debugging",
        "prompt": "Which choice best describes why shared-memory debugging can be difficult?",
        "answer": "Race conditions may be hard to reproduce",
        "wrong": [
          "There are no shared variables",
          "Messages always arrive in perfect order",
          "No concurrency is possible"
        ],
        "explanation": "Timing-dependent race conditions can appear inconsistently."
      },
      {
        "id": "module-final-c-8",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Debugging",
        "prompt": "Which choice best describes why message-passing debugging can be difficult?",
        "answer": "Message order and waiting behavior can create subtle failures",
        "wrong": [
          "All data is automatically consistent",
          "Only one process is allowed",
          "It never uses communication"
        ],
        "explanation": "Deadlocks and unexpected message ordering are common message-passing debugging traps."
      },
      {
        "id": "module-final-c-9",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "A problem can be split into subproblems, but the same subproblem appears many times. Which technique usually beats plain divide and conquer?",
        "answer": "Dynamic programming",
        "wrong": [
          "Greedy method",
          "Point-to-point messaging",
          "Constant time"
        ],
        "explanation": "Dynamic programming stores repeated subproblem results."
      },
      {
        "id": "module-final-c-10",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for backtracking?",
        "answer": "Try a candidate, retreat when constraints fail",
        "wrong": [
          "Choose local best and never reconsider",
          "Apply same operation to pixels",
          "Send a message to process 3"
        ],
        "explanation": "Backtracking moves forward and returns when a path cannot lead to a valid solution."
      },
      {
        "id": "module-final-c-11",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for branch and bound?",
        "answer": "Prune solution paths using a bound and current best answer",
        "wrong": [
          "Split only into equal data partitions",
          "Read the first array item",
          "Broadcast to all workers"
        ],
        "explanation": "Bounds eliminate parts of the search space that cannot improve the solution."
      },
      {
        "id": "module-final-c-12",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for linear programming?",
        "answer": "Linear objective and linear constraints",
        "wrong": [
          "Many shared variables",
          "Unexpected message order",
          "Nested loops only"
        ],
        "explanation": "Linear programming is defined by linear objective and constraint functions."
      },
      {
        "id": "module-final-c-13",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "A classmate says divide and conquer and dynamic programming are identical because both use subproblems. What is the best distinction?",
        "answer": "Dynamic programming reuses overlapping subproblem solutions",
        "wrong": [
          "Divide and conquer never uses recursion",
          "Dynamic programming is only for networks",
          "Divide and conquer always uses locks"
        ],
        "explanation": "DP is distinguished by storing/reusing repeated subproblems."
      },
      {
        "id": "module-final-c-14",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for binary search?",
        "answer": "Divide and conquer",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "Message passing"
        ],
        "explanation": "Binary search repeatedly divides the search interval."
      },
      {
        "id": "module-final-c-15",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for Sudoku?",
        "answer": "Backtracking",
        "wrong": [
          "Greedy method only",
          "Data parallelism only",
          "O(1) direct access"
        ],
        "explanation": "Sudoku solvers often try candidates and backtrack when constraints fail."
      },
      {
        "id": "module-final-c-16",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely when choosing the best current component and never reconsidering it?",
        "answer": "Greedy method",
        "wrong": [
          "Dynamic programming",
          "Branch and bound",
          "Shared memory"
        ],
        "explanation": "The defining clue is choosing the current best-looking option."
      },
      {
        "id": "module-final-c-17",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for optimizing maximum profit with linear restrictions?",
        "answer": "Linear programming",
        "wrong": [
          "Message passing",
          "Backtracking only",
          "SIMD"
        ],
        "explanation": "Maximum profit under linear constraints is a linear programming scenario."
      },
      {
        "id": "module-final-c-18",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which technique searches the entire solution space more intelligently by eliminating impossible or weak areas?",
        "answer": "Branch and bound",
        "wrong": [
          "Constant time",
          "Point-to-point communication",
          "Direct array lookup"
        ],
        "explanation": "Branch and bound explores possible solutions while pruning using bounds."
      },
      {
        "id": "module-final-c-19",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which complexity class grows slowest among the options?",
        "answer": "O(1)",
        "wrong": [
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "explanation": "Constant time does not grow with input size."
      },
      {
        "id": "module-final-c-20",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which complexity class grows fastest among the options?",
        "answer": "O(n!)",
        "wrong": [
          "O(n^2)",
          "O(n log n)",
          "O(log n)"
        ],
        "explanation": "Factorial time grows extremely fast and is worse than the listed polynomial/logarithmic classes."
      },
      {
        "id": "module-final-c-21",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which pair is in correct increasing growth order?",
        "answer": "O(1), O(log n), O(n), O(n log n)",
        "wrong": [
          "O(n^2), O(n), O(log n), O(1)",
          "O(n!), O(2^n), O(n), O(1)",
          "O(log n), O(1), O(n^2), O(n)"
        ],
        "explanation": "The usual order is constant, logarithmic, linear, log-linear."
      },
      {
        "id": "module-final-c-22",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "A loop inside a loop inside a loop over n items is most likely what?",
        "answer": "O(n^3)",
        "wrong": [
          "O(log n)",
          "O(1)",
          "O(n log n)"
        ],
        "explanation": "Three nested n-sized loops imply cubic time."
      },
      {
        "id": "module-final-c-23",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Trying every subset of n items is commonly associated with what growth?",
        "answer": "O(2^n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n)"
        ],
        "explanation": "Each item often creates an include/exclude choice, producing exponential growth."
      },
      {
        "id": "module-final-c-24",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Trying every ordering of n items is commonly associated with what growth?",
        "answer": "O(n!)",
        "wrong": [
          "O(n)",
          "O(log n)",
          "O(n log n)"
        ],
        "explanation": "Every permutation of n items produces factorial growth."
      },
      {
        "id": "module-final-c-25",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation is the tightest statement when an algorithm is both O(n log n) and Omega(n log n)?",
        "answer": "Theta(n log n)",
        "wrong": [
          "O(1)",
          "Omega(1) only",
          "SIMD"
        ],
        "explanation": "Matching upper and lower bounds give a Theta bound."
      },
      {
        "id": "module-final-c-26",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Asymptotic Notation",
        "prompt": "If an algorithm has worst-case O(n^2), what does that most directly tell you?",
        "answer": "Its runtime is bounded above by a quadratic function for large input",
        "wrong": [
          "It always runs exactly n^2 steps",
          "It has no lower bound",
          "It must use message passing"
        ],
        "explanation": "Big-O is an upper bound, not necessarily an exact count."
      },
      {
        "id": "module-final-c-27",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(n) time?",
        "answer": "Scanning every item once",
        "wrong": [
          "Directly reading array[0]",
          "Binary searching sorted data",
          "Trying every permutation"
        ],
        "explanation": "A single pass through all items is linear."
      },
      {
        "id": "module-final-c-28",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(log n) time?",
        "answer": "Binary search",
        "wrong": [
          "Printing all pairs",
          "Creating an n by n matrix",
          "Trying all subsets"
        ],
        "explanation": "Binary search repeatedly halves the possible range."
      },
      {
        "id": "module-final-c-29",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(n log n) time?",
        "answer": "Efficient comparison sorting such as merge sort",
        "wrong": [
          "Direct access",
          "Two nested loops over all pairs",
          "Trying every permutation"
        ],
        "explanation": "Merge sort and many efficient sorts are O(n log n)."
      },
      {
        "id": "module-final-c-30",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Space Complexity",
        "prompt": "Which is the best example of O(n^2) space?",
        "answer": "Creating a square matrix of size n by n",
        "wrong": [
          "Using one sum variable",
          "Reading only the first element",
          "Sending one direct message"
        ],
        "explanation": "An n by n matrix stores n squared cells."
      },
      {
        "id": "module-final-c-31",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "What is the main difference between time and space complexity?",
        "answer": "Time measures runtime growth; space measures memory growth",
        "wrong": [
          "Time measures colors; space measures processors",
          "Both only mean Big-Omega",
          "Space complexity ignores input size"
        ],
        "explanation": "Time and space analyze different resource growth."
      },
      {
        "id": "module-final-c-32",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "A program is fast on small input but explodes as n grows because it checks permutations. What is the likely problem?",
        "answer": "Factorial growth",
        "wrong": [
          "Constant time",
          "No synchronization",
          "SIMD efficiency"
        ],
        "explanation": "Permutation-based search often has O(n!) behavior."
      },
      {
        "id": "module-final-c-33",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A distributed cluster processes work successfully even when one node fails and others continue. Which distributed-systems property is this?",
        "answer": "Fault tolerance",
        "wrong": [
          "Race condition",
          "Linear programming",
          "Constant space"
        ],
        "explanation": "Fault tolerance means the system continues despite component failures."
      },
      {
        "id": "module-final-c-34",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A tightly connected group of computers works as a single system for HPC. What is this called?",
        "answer": "Cluster computing",
        "wrong": [
          "Greedy method",
          "Direct array access",
          "Single-core SISD"
        ],
        "explanation": "Cluster computing uses interconnected computers as one system, often for HPC."
      },
      {
        "id": "module-final-c-35",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A large resource-sharing system spans multiple organizations and locations. What is this called?",
        "answer": "Grid computing",
        "wrong": [
          "Shared local variable",
          "Constant-time lookup",
          "Backtracking only"
        ],
        "explanation": "Grid computing extends resource sharing across wide areas and organizations."
      },
      {
        "id": "module-final-c-36",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "Which architecture has every node act as both client and server?",
        "answer": "Peer-to-peer architecture",
        "wrong": [
          "Client-server only",
          "SISD",
          "Linear programming"
        ],
        "explanation": "P2P nodes can serve and request resources without a central server."
      },
      {
        "id": "module-final-c-37",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "Which architecture relies on centralized services responding to client requests?",
        "answer": "Client-server architecture",
        "wrong": [
          "Peer-to-peer only",
          "Backtracking",
          "SIMD"
        ],
        "explanation": "Client-server has clients requesting services from a server."
      },
      {
        "id": "module-final-c-38",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "MapReduce's Map phase primarily does what?",
        "answer": "Processes split data chunks in parallel",
        "wrong": [
          "Combines all final results only",
          "Locks one shared variable",
          "Chooses a local greedy option"
        ],
        "explanation": "Map splits work into chunks processed in parallel."
      },
      {
        "id": "module-final-c-39",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "MapReduce's Reduce phase primarily does what?",
        "answer": "Aggregates intermediate results",
        "wrong": [
          "Applies a pixel filter to one image only",
          "Creates locks",
          "Runs binary search"
        ],
        "explanation": "Reduce combines mapped outputs into final results."
      },
      {
        "id": "module-final-c-40",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Model Comparison",
        "prompt": "Which statement about shared memory vs message passing is most accurate?",
        "answer": "Shared memory can be faster locally, while message passing fits distributed nodes",
        "wrong": [
          "Message passing always shares one address space",
          "Shared memory never needs synchronization",
          "Both are exactly the same"
        ],
        "explanation": "This captures the key tradeoff between speed and distributed scalability."
      },
      {
        "id": "module-final-c-41",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Model Comparison",
        "prompt": "Which statement about data and task parallelism is most accurate?",
        "answer": "Data parallelism repeats one operation over data; task parallelism runs distinct tasks",
        "wrong": [
          "They are identical terms",
          "Data parallelism means no data exists",
          "Task parallelism means only one task runs"
        ],
        "explanation": "This is the cleanest distinction."
      },
      {
        "id": "module-final-c-42",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Synchronization",
        "prompt": "Which choice is most likely to create a race condition?",
        "answer": "Two threads writing the same shared variable without synchronization",
        "wrong": [
          "Binary search on a read-only sorted array",
          "A process receiving a message",
          "A linear objective function"
        ],
        "explanation": "Concurrent unsynchronized shared writes are the classic race-condition setup."
      },
      {
        "id": "module-final-c-43",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Performance",
        "prompt": "Which choice is most likely to create communication overhead?",
        "answer": "Processes frequently exchange large messages across a network",
        "wrong": [
          "A thread reads a local variable once",
          "An algorithm uses O(1) space",
          "A direct array access"
        ],
        "explanation": "Network message exchange costs time."
      },
      {
        "id": "module-final-c-44",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Performance",
        "prompt": "Which choice best explains why increasing processors may not improve performance proportionally?",
        "answer": "Some work is serial and coordination adds overhead",
        "wrong": [
          "All parallel programs are automatically perfect",
          "Big-O always becomes O(1)",
          "Memory disappears"
        ],
        "explanation": "Real speedup is limited by serial portions and overhead."
      },
      {
        "id": "module-final-c-45",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Granularity",
        "prompt": "A program divides tasks into extremely small pieces, causing scheduling and communication to dominate. What is the issue?",
        "answer": "Fine-grained overhead",
        "wrong": [
          "Perfect coarse-grained balance",
          "No parallelism possible",
          "Big-Theta notation"
        ],
        "explanation": "Too-small work units can cost more to manage than execute."
      },
      {
        "id": "module-final-c-46",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Granularity",
        "prompt": "A program divides work into large independent frames for rendering. What granularity is this?",
        "answer": "Coarse-grained",
        "wrong": [
          "Fine-grained every instruction",
          "Constant-space only",
          "No workload"
        ],
        "explanation": "Large independent chunks are coarse-grained."
      },
      {
        "id": "module-final-c-47",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Shared Memory",
        "prompt": "Which model fits a multi-core CPU where threads share a global memory space?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message passing across clusters only",
          "Grid computing only",
          "Linear programming"
        ],
        "explanation": "One machine with shared memory and multiple cores is the shared-memory setting."
      },
      {
        "id": "module-final-c-48",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Message Passing",
        "prompt": "Which model fits a networked cluster where each node has its own local memory?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory only",
          "O(1) only",
          "Greedy method only"
        ],
        "explanation": "Separate local memories and network communication point to message passing."
      },
      {
        "id": "module-final-c-49",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Taxonomy",
        "prompt": "Which phrase is the clearest sign of SIMD?",
        "answer": "One instruction applied to many data values",
        "wrong": [
          "Many instructions on no data",
          "One thread waits for one lock",
          "A linear constraint is optimized"
        ],
        "explanation": "SIMD expands to Single Instruction, Multiple Data."
      },
      {
        "id": "module-final-c-50",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Taxonomy",
        "prompt": "Which phrase is the clearest sign of MIMD?",
        "answer": "Different instructions operating on different data streams",
        "wrong": [
          "One instruction and one data stream",
          "A single direct array access",
          "A square matrix allocation"
        ],
        "explanation": "MIMD expands to Multiple Instruction, Multiple Data."
      },
      {
        "id": "quiz-a-1",
        "number": 1,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is the primary characteristic that defines message-passing programming as distinct from shared-memory programming?",
        "answer": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other.",
        "wrong": [
          "Processes share a distributed cache layer that all nodes can read from and write to simultaneously.",
          "Processes communicate through a central coordinator node that manages all data transfers between workers.",
          "Processes share a single common memory space and communicate by reading and writing the same variables directly."
        ],
        "explanation": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other."
      },
      {
        "id": "quiz-a-2",
        "number": 2,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement best describes asynchronous communication in a message-passing program?",
        "answer": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it.",
        "wrong": [
          "A sending process suspends all computation and remains idle until the receiving process explicitly confirms the message arrived.",
          "All participating processes coordinate to send and receive messages at a pre-agreed synchronized time checkpoint.",
          "The operating system buffers all messages and delivers them in the exact sequence they were originally transmitted."
        ],
        "explanation": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it."
      },
      {
        "id": "quiz-a-3",
        "number": 3,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "In message-passing programming, what accurately describes point-to-point communication?",
        "answer": "One process sends a message to one specific, individually addressed target process for direct exchange.",
        "wrong": [
          "Every process in the group sends its local data to every other process simultaneously in a ring pattern.",
          "A group of processes collectively computes a result and delivers it to all members of the communicator.",
          "One root process distributes identical copies of a message to every other process in the communicator group."
        ],
        "explanation": "One process sends a message to one specific, individually addressed target process for direct exchange."
      },
      {
        "id": "quiz-a-4",
        "number": 4,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What does the acronym MPI stand for in high-performance parallel computing?",
        "answer": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming.",
        "wrong": [
          "Memory Partitioned Interface, the specification for dividing RAM equally among parallel worker threads.",
          "Modular Parallel Implementation, a framework for automatically decomposing sequential programs into tasks.",
          "Multi-Process Integration, the standard protocol for combining results across multi-core processors."
        ],
        "explanation": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming."
      },
      {
        "id": "quiz-a-5",
        "number": 5,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A 500-node cluster runs a weather simulation where each node independently processes one geographic region and exchanges boundary values only with adjacent nodes. Which parallel paradigm fits best?",
        "answer": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls.",
        "wrong": [
          "Shared-memory using Intel TBB, because the threading library efficiently manages work queues across all cluster nodes.",
          "Shared-memory using POSIX threads, because pthreads allow fine-grained control over each node's regional data buffer.",
          "Shared-memory using OpenMP, because compiler directives automatically distribute the regional computation across all 500 nodes."
        ],
        "explanation": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls."
      },
      {
        "id": "quiz-a-6",
        "number": 6,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly describes a key scalability advantage of message-passing programming over shared-memory programming?",
        "answer": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly.",
        "wrong": [
          "Message-passing programs use a global shared bus so that adding more nodes directly increases available memory bandwidth.",
          "Message-passing programs depend on a shared heap segment that grows proportionally as more compute nodes join the cluster.",
          "Message-passing programs run on a single machine with shared RAM and scale well because the OS manages lock contention automatically."
        ],
        "explanation": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly."
      },
      {
        "id": "quiz-a-7",
        "number": 7,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is collective communication in message-passing systems and which operation is an example of it?",
        "answer": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process.",
        "wrong": [
          "Collective communication describes the technique of buffering multiple point-to-point messages to reduce individual transmission overhead.",
          "Collective communication describes a fault-tolerance protocol where surviving processes redistribute work from a failed process automatically.",
          "Collective communication describes one process sending a private message to one specific partner, as in a standard MPI_Send call."
        ],
        "explanation": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process."
      },
      {
        "id": "quiz-a-8",
        "number": 8,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Two MPI processes — P0 and P1 — each call a blocking MPI_Send to the other before calling MPI_Recv. Neither process ever proceeds past its send call and the program freezes permanently. What condition has occurred and how is it resolved?",
        "answer": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend.",
        "wrong": [
          "A scheduling conflict has occurred; the fix is to assign each process to a dedicated CPU core using processor affinity settings.",
          "A collective communication mismatch has occurred; the fix is to replace MPI_Send with MPI_Bcast so both processes receive the message.",
          "A memory overflow has occurred because each blocking send allocated a buffer larger than the available RAM on each node."
        ],
        "explanation": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend."
      },
      {
        "id": "quiz-a-9",
        "number": 9,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A financial HPC cluster shows no speedup gain after 150 nodes even when 50 more nodes are added. The computation per node remains constant but inter-node messaging has grown. What does this indicate about the message-passing workload?",
        "answer": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide.",
        "wrong": [
          "The financial dataset is too small for the cluster size, so each extra node receives zero work items and sits idle during the run.",
          "The network switch is running at capacity so the OS automatically throttles new nodes to prevent packet loss on the interconnect.",
          "The MPI library reached its maximum registered process count of 150 and stopped accepting new worker registrations."
        ],
        "explanation": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide."
      },
      {
        "id": "quiz-a-10",
        "number": 10,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly identifies a significant debugging challenge that is specific to message-passing programs?",
        "answer": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently.",
        "wrong": [
          "Message-passing programs share a global heap, so memory corruption in one process is immediately visible and easy to isolate.",
          "Message-passing programs always execute sequentially on one core, so the debugger can single-step through every instruction in order.",
          "Message-passing programs store all communication logs in a shared database, giving the developer a complete audit trail of every exchange."
        ],
        "explanation": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently."
      },
      {
        "id": "quiz-a-11",
        "number": 11,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "How is synchronization between processes handled in the message-passing programming model?",
        "answer": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes.",
        "wrong": [
          "Synchronization is fully automatic; the MPI runtime inserts barriers between every communication call without developer intervention.",
          "Synchronization is unnecessary because each process runs in complete isolation and never needs to coordinate timing with any peer.",
          "Synchronization is handled by a dedicated master process that polls all workers and issues clock signals at fixed time intervals."
        ],
        "explanation": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes."
      },
      {
        "id": "quiz-a-12",
        "number": 12,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A physics simulation on 1,000 nodes produces partial results on each node. At the end, all partial sums must be totaled into a single global result held on Node 0. Which MPI collective operation is the correct and most efficient choice?",
        "answer": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result.",
        "wrong": [
          "MPI_Bcast, where Node 0 transmits its partial result to all other nodes so every process holds the same starting value.",
          "MPI_Scatter, where Node 0 breaks a large dataset into chunks and distributes one unique chunk to each of the 1,000 nodes.",
          "MPI_Alltoall, where every node exchanges its partial result with every other node so all nodes hold all partial sums."
        ],
        "explanation": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result."
      },
      {
        "id": "quiz-a-13",
        "number": 13,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What are the three sequential steps that the Divide and Conquer algorithm technique performs at each level of recursion?",
        "answer": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer.",
        "wrong": [
          "Initialize the data structure, process each element sequentially, then output the final combined result to storage.",
          "Partition the input data evenly, sort each partition with an insertion pass, then merge adjacent sorted partitions repeatedly.",
          "Select the optimal sub-problem to solve first, execute it greedily, then propagate the result to dependent sub-problems."
        ],
        "explanation": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer."
      },
      {
        "id": "quiz-a-14",
        "number": 14,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which algorithm design technique makes the locally optimal choice at each decision step and never revisits a previous decision?",
        "answer": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices.",
        "wrong": [
          "Dynamic Programming, which stores every sub-problem solution in a table and reuses those stored answers in future computations.",
          "Backtracking, which explores each candidate solution fully and retreats to the previous checkpoint when a dead end is encountered.",
          "Branch and Bound, which maintains a priority queue of partial solutions ranked by their lower-bound cost estimate."
        ],
        "explanation": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices."
      },
      {
        "id": "quiz-a-15",
        "number": 15,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What is the key distinguishing difference between Dynamic Programming and the Divide and Conquer technique?",
        "answer": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently.",
        "wrong": [
          "Divide and Conquer stores solutions to sub-problems in a lookup table while Dynamic Programming always recomputes them from scratch.",
          "Dynamic Programming works only on graph problems while Divide and Conquer applies only to array and sorting problems.",
          "Divide and Conquer requires distributed memory clusters while Dynamic Programming runs only on shared-memory multi-core systems."
        ],
        "explanation": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently."
      },
      {
        "id": "quiz-a-16",
        "number": 16,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which description most accurately defines how the Backtracking algorithm works?",
        "answer": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails.",
        "wrong": [
          "The algorithm builds a priority queue of candidate solutions ranked by their estimated cost and processes the cheapest candidate first.",
          "The algorithm expresses the problem as a set of linear constraints and finds the assignment of variables that satisfies all constraints optimally.",
          "The algorithm divides the solution space into two halves repeatedly and processes each half on a separate processor simultaneously."
        ],
        "explanation": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails."
      },
      {
        "id": "quiz-a-17",
        "number": 17,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which real-world combinatorial puzzle is the most classically cited example of the Backtracking algorithm in computer science textbooks?",
        "answer": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen.",
        "wrong": [
          "The Fibonacci Series problem, where each term depends on the sum of the two immediately preceding terms in the sequence.",
          "The Travelling Salesman Problem, where the total distance of a route connecting all cities must be minimized globally.",
          "The Shortest Path Problem, where the minimum-cost route between two nodes in a weighted graph must be identified."
        ],
        "explanation": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen."
      },
      {
        "id": "quiz-a-18",
        "number": 18,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A delivery company must find the minimum-distance route visiting 12 cities. The solution space is enormous. Which design technique intelligently prunes unpromising routes without evaluating every possibility?",
        "answer": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found.",
        "wrong": [
          "The Greedy Method, which builds the route one city at a time by always traveling to the nearest unvisited city from the current location.",
          "Dynamic Programming, which breaks the route into overlapping city-pair sub-problems and stores the shortest sub-route for each pair.",
          "Linear Programming, which models the routing decision as a set of linear equations and solves for the assignment that minimizes total distance."
        ],
        "explanation": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found."
      },
      {
        "id": "quiz-a-19",
        "number": 19,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "The Fibonacci algorithm (Fib(n) = Fib(n-1) + Fib(n-2)) implemented with a lookup table to avoid repeated computation is a classic example of which technique?",
        "answer": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls.",
        "wrong": [
          "Backtracking, because the recursion explores multiple candidate values before settling on the correct Fibonacci term at depth n.",
          "Branch and Bound, because the recursion tree branches into two sub-calls and prunes branches where Fib values are already known.",
          "Divide and Conquer, because the problem is split into two independent halves that are solved separately and their results summed."
        ],
        "explanation": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls."
      },
      {
        "id": "quiz-a-20",
        "number": 20,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Both Binary Search and Merge Sort are textbook examples of which parallel algorithm design technique?",
        "answer": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results.",
        "wrong": [
          "Greedy Method, because both algorithms commit to a locally optimal decision at each step without reconsidering prior choices.",
          "Dynamic Programming, because both algorithms store results from smaller input sizes to avoid re-scanning previously processed data.",
          "Branch and Bound, because both algorithms prune sections of the input that cannot possibly contribute to the final answer."
        ],
        "explanation": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results."
      },
      {
        "id": "quiz-a-21",
        "number": 21,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A logistics firm assigns delivery drivers to routes to maximize total deliveries in an 8-hour shift. Driver assignment, shift-hour limits, and vehicle capacity all have linear relationships. Which design technique directly models and solves this optimization problem?",
        "answer": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically.",
        "wrong": [
          "Branch and Bound, which generates a tree of partial assignments and prunes branches where estimated deliveries fall below the current best.",
          "Greedy Method, which assigns the driver with the greatest remaining shift time to the longest available route at each decision step.",
          "Backtracking, which tries every possible driver-to-route assignment and retreats whenever a shift-hour or capacity constraint is violated."
        ],
        "explanation": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically."
      },
      {
        "id": "quiz-a-22",
        "number": 22,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A game developer builds a maze solver that explores a path step by step, and when it hits a dead end, it reverses to the last junction and tries a different direction. This continues until the exit is found. Which design technique is being implemented?",
        "answer": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered.",
        "wrong": [
          "Greedy Method, because at each junction the solver picks the corridor that appears to lead most directly toward the exit position.",
          "Branch and Bound, because at each junction the solver calculates the minimum remaining distance and prunes corridors that exceed the limit.",
          "Divide and Conquer, because the maze is split into quadrants and each quadrant is solved independently by a recursive sub-call."
        ],
        "explanation": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered."
      },
      {
        "id": "quiz-a-23",
        "number": 23,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "What is the defining characteristic of the shared-memory parallel programming model?",
        "answer": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables.",
        "wrong": [
          "Threads are assigned to separate physical servers and synchronize by exchanging data packets over a high-speed network interconnect.",
          "Each thread operates on an independent memory bank that is readable by the CPU but not directly accessible by any other thread.",
          "Each thread holds a private copy of all program variables and must explicitly send updates to other threads through a message queue."
        ],
        "explanation": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables."
      },
      {
        "id": "quiz-a-24",
        "number": 24,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Two threads simultaneously read a shared counter, each adds one to it, and each writes back the result. The counter increments by one instead of two. What is this concurrency problem called?",
        "answer": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost.",
        "wrong": [
          "A memory leak, where each thread allocates a new buffer for the counter value but never frees the old buffer after writing.",
          "A stack overflow, where the counter variable exceeds the maximum integer range supported by the thread's private call stack memory.",
          "A deadlock, where both threads are blocked waiting for a resource that the other thread currently holds and refuses to release."
        ],
        "explanation": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost."
      },
      {
        "id": "quiz-a-25",
        "number": 25,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Which synchronization mechanism in shared-memory programming ensures that only one thread at a time can execute a critical section of code?",
        "answer": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time.",
        "wrong": [
          "A network socket, which provides a reliable byte-stream channel between two threads running on different CPU cores.",
          "A memory-mapped file, which maps shared data to a file on disk so multiple threads can access it through the file system.",
          "A message queue, which buffers outgoing data from one thread and delivers it to another thread in the order it was enqueued."
        ],
        "explanation": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time."
      },
      {
        "id": "quiz-b-26",
        "number": 26,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "In shared-memory programming, what is the key difference between multithreading and multiprocessing?",
        "answer": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory.",
        "wrong": [
          "Multithreading allocates a separate CPU socket to each thread while multiprocessing runs all tasks on a single CPU core in rotation.",
          "Multithreading is exclusively used for input/output tasks while multiprocessing handles all mathematical and computational operations.",
          "Multithreading requires a special OS kernel module while multiprocessing runs on any standard operating system without modification."
        ],
        "explanation": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory."
      },
      {
        "id": "quiz-b-27",
        "number": 27,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which parallel processing framework uses pragma compiler directives to parallelize loops and is specifically designed for shared-memory multi-core systems?",
        "answer": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code.",
        "wrong": [
          "CUDA (Compute Unified Device Architecture), which offloads massively parallel computations to GPU streaming multiprocessors.",
          "MPI (Message Passing Interface), which uses explicit send/receive calls to coordinate work across distributed-memory compute nodes.",
          "Hadoop MapReduce, which distributes large dataset processing across a cluster of commodity servers using a key-value paradigm."
        ],
        "explanation": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code."
      },
      {
        "id": "quiz-b-28",
        "number": 28,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Thread A and Thread B both execute 'counter++' on a shared variable 1,000 times each without any synchronization. The final value is 1,743 instead of 2,000. What caused the discrepancy of 257?",
        "answer": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost.",
        "wrong": [
          "The operating system's thread scheduler assigned both threads to the same CPU core, causing them to alternate too slowly to complete all increments.",
          "The threads consumed excessive CPU cache capacity causing some increment operations to be silently discarded by the cache coherence protocol.",
          "The compiler optimized away 257 redundant increment operations because it detected that both threads were modifying the same variable."
        ],
        "explanation": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost."
      },
      {
        "id": "quiz-b-29",
        "number": 29,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "As the number of threads in a shared-memory program increases to very large numbers, what performance limitation typically emerges?",
        "answer": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains.",
        "wrong": [
          "The operating system automatically converts the shared-memory program to a message-passing program to handle the extra threads efficiently.",
          "Memory usage drops to zero because the threads share so much data that very little unique information needs to be stored per thread.",
          "The compiler automatically inserts additional mutex locks that protect all shared variables so thread safety improves as thread count grows."
        ],
        "explanation": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains."
      },
      {
        "id": "quiz-b-30",
        "number": 30,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "An online exam system on a 32-core server handles 5,000 simultaneous student registrations. Each registration decrements a shared 'seats_remaining' counter. Which approach correctly prevents registration count errors in shared-memory programming?",
        "answer": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates.",
        "wrong": [
          "Allow all 5,000 threads to update the counter simultaneously and rely on the CPU's out-of-order execution to merge the updates correctly.",
          "Run each student's session on a separate virtual machine so that each VM maintains its own independent copy of the counter value.",
          "Use file locking to write the counter to disk before each decrement so the persistent file serves as the authoritative shared state."
        ],
        "explanation": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates."
      },
      {
        "id": "quiz-b-31",
        "number": 31,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Two Java threads process bank account transactions on the same account object. Both read a balance of PHP 10,000, each deducts PHP 8,000, and both write PHP 2,000 back — leaving PHP 2,000 instead of detecting an overdraft. Which concurrency problem caused this and what is the correct fix?",
        "answer": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time.",
        "wrong": [
          "A deadlock caused both threads to block waiting for the account object lock; adding a second lock object on the transaction class resolves it.",
          "A memory leak caused transaction objects to pile up; calling System.gc() after each transaction frees the excess objects and corrects the balance.",
          "A stack overflow in the transaction recursion caused the balance to be partially written; increasing the JVM thread stack size resolves the issue."
        ],
        "explanation": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time."
      },
      {
        "id": "quiz-b-32",
        "number": 32,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which statement accurately describes the communication advantage of shared-memory programming over message-passing for tasks on a single machine?",
        "answer": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead.",
        "wrong": [
          "Shared-memory programs automatically distribute their computations across multiple physical servers with no network configuration needed.",
          "Shared-memory programs prevent all race conditions by default because the compiler inserts atomic operations around every memory access.",
          "Shared-memory programs scale to unlimited thread counts because lock contention decreases automatically as more cores are added to the system."
        ],
        "explanation": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead."
      },
      {
        "id": "quiz-b-33",
        "number": 33,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does complexity analysis measure about a computer program or algorithm?",
        "answer": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows.",
        "wrong": [
          "Complexity analysis counts the total number of lines of source code and evaluates how readable the code is for future developers.",
          "Complexity analysis evaluates the quality of a program's user interface and measures user interaction response times under load.",
          "Complexity analysis audits the number of external library dependencies and scores how maintainable the program is over time."
        ],
        "explanation": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows."
      },
      {
        "id": "quiz-b-34",
        "number": 34,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big O notation (O) specifically represent when describing algorithm complexity?",
        "answer": "Big O represents the worst-case upper bound",
        "wrong": [
          "Big O represents the best-case minimum number of steps the algorithm will perform when given the most favorable possible input.",
          "Big O represents the average-case expected performance across all typical real-world inputs for the algorithm.",
          "Big O represents the exact number of operations the algorithm performs for every specific input of a given size n."
        ],
        "explanation": "the maximum growth rate the algorithm's resource usage will ever reach."
      },
      {
        "id": "quiz-b-35",
        "number": 35,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big Omega notation (Ω) represent in algorithm complexity analysis?",
        "answer": "Big Omega represents the best-case lower bound",
        "wrong": [
          "Big Omega represents the worst-case upper bound",
          "Big Omega represents the average-case expected growth rate when inputs are drawn uniformly at random from all possible values.",
          "Big Omega represents the memory complexity of the algorithm expressed in terms of the number of recursive function call frames."
        ],
        "explanation": "the minimum number of steps the algorithm will ever need on any input."
      },
      {
        "id": "quiz-b-36",
        "number": 36,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm performs exactly 7 operations whether the input list has 10 items or 10,000,000 items. What time complexity class does this represent?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "constant complexity, because the number of operations never changes regardless of how large the input becomes."
      },
      {
        "id": "quiz-b-37",
        "number": 37,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search on a sorted array of 1,024 elements finds the target in at most 10 steps. On 1,048,576 elements it finds it in at most 20 steps. What time complexity does this pattern represent?",
        "answer": "O(log n)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(1)"
        ],
        "explanation": "logarithmic complexity, where each step eliminates half the remaining candidates so steps grow very slowly with array size."
      },
      {
        "id": "quiz-b-38",
        "number": 38,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A loop visits every element in an array of n items exactly once and performs one operation on each. What is the time complexity of this loop?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "linear complexity, because the total number of operations grows in direct proportion to the number of items in the array."
      },
      {
        "id": "quiz-b-39",
        "number": 39,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm contains an outer loop running n times and an inner loop that also runs n times for each outer iteration. What is the time complexity?",
        "answer": "O(n²)",
        "wrong": [
          "O(n)",
          "O(n log n)",
          "O(2n)"
        ],
        "explanation": "quadratic, because the inner loop executes n times for each of the n outer iterations giving n multiplied by n total steps."
      },
      {
        "id": "quiz-b-40",
        "number": 40,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A hospital's patient lookup system uses linear search on 1,000,000 unsorted records. In the worst case, approximately how many record comparisons are made and what is the Big O complexity?",
        "answer": "Up to 1,000,000 comparisons",
        "wrong": [
          "About 20 comparisons",
          "Exactly 1 comparison",
          "Up to 1,000,000,000,000 comparisons"
        ],
        "explanation": "O(n), because linear search checks every record until a match is found or the list is exhausted."
      },
      {
        "id": "quiz-b-41",
        "number": 41,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Sorting 1,000 student scores with Merge Sort takes roughly 10,000 operations. Using the same O(n log n) relationship, approximately how many operations does sorting 1,000,000 scores require?",
        "answer": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000.",
        "wrong": [
          "About 20,000,000,000 operations, because the sort switches to O(n²) behavior once the input exceeds one million elements.",
          "About 1,000,000 operations, because O(n log n) scales at the same rate as O(n) when the logarithmic factor remains near constant.",
          "About 1,000 operations, because the logarithmic factor reduces the linear component proportionally."
        ],
        "explanation": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000."
      },
      {
        "id": "quiz-b-42",
        "number": 42,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A cashier program sums all item prices in a shopping cart using one variable: 'int sum = 0; for(item: cart) sum += item.price;'. What is the space complexity of this algorithm?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "constant space, because only one variable (sum) is ever allocated regardless of how many items appear in the cart."
      },
      {
        "id": "quiz-b-43",
        "number": 43,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search runs in O(log n) time. What critical requirement must the data meet BEFORE Binary Search can be applied correctly?",
        "answer": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard.",
        "wrong": [
          "The data must be stored in a hash table so that each element can be located by computing its position from its key value directly.",
          "The data must be stored in a linked list so that Binary Search can traverse forward and backward from a given starting element.",
          "The data must fit entirely within the CPU's L1 cache so that each Binary Search probe accesses an element in a single clock cycle."
        ],
        "explanation": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard."
      },
      {
        "id": "quiz-b-44",
        "number": 44,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An app runs in 0.1 seconds for 500 users. After going viral with 500,000 users (a 1,000× growth), response time is 100,000 seconds. A developer suspects a quadratic algorithm. Is O(n²) consistent with this observation?",
        "answer": "Yes",
        "wrong": [
          "No",
          "No",
          "Yes"
        ],
        "explanation": "under O(n²), a 1,000× user increase causes a 1,000²=1,000,000× time increase: 0.1s × 1,000,000 = 100,000s, which matches exactly."
      },
      {
        "id": "quiz-b-45",
        "number": 45,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An e-commerce platform with 10 million products evaluates two search algorithms. Algorithm X completes in 23 fixed operations regardless of product count. Algorithm Y takes up to 10,000,000 operations. What are their complexities and which should power the product search?",
        "answer": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion.",
        "wrong": [
          "Both are O(n); Algorithm X should be chosen because 23 operations is numerically smaller than 10,000,000 for this specific dataset.",
          "Algorithm X is O(log n); Algorithm Y is O(n²). Algorithm X is better because logarithmic growth is slower than quadratic growth at all sizes.",
          "Both are O(log n); Algorithm X is preferred because its constant factor of 23 is smaller than Algorithm Y's constant factor at this dataset size."
        ],
        "explanation": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion."
      },
      {
        "id": "quiz-b-46",
        "number": 46,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A mobile app loads all contacts into memory so users can scroll through them. A user with 50 contacts uses 50 memory slots; a user with 5,000 contacts uses 5,000 slots. What is the space complexity and is it appropriate?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "linear space; memory grows proportionally with contact count, which is expected and acceptable for a contact list application."
      },
      {
        "id": "quiz-b-47",
        "number": 47,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "When Ω (best case) = Θ (average case) = O (worst case) for an algorithm, what does this equal relationship mean for the algorithm's behavior?",
        "answer": "The algorithm has tight complexity",
        "wrong": [
          "The algorithm is asymptotically unstable and produces widely varying step counts on different inputs even of the same size n.",
          "The algorithm uses exponential memory in all three cases, making it impractical for any input size larger than a few dozen elements.",
          "The algorithm degenerates to sequential execution when best and worst cases match, losing all parallel performance benefits."
        ],
        "explanation": "it performs the same number of steps on every input of size n, making its behavior perfectly predictable."
      },
      {
        "id": "quiz-b-48",
        "number": 48,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A naive duplicate file detector compares every file to every other file. With 10,000 files, how many comparisons are made, what is the complexity, and what smarter approach reduces it?",
        "answer": "100,000,000 comparisons",
        "wrong": [
          "10,000 comparisons",
          "20,000 comparisons",
          "10,000,000,000,000 comparisons"
        ],
        "explanation": "O(n²); computing a hash for each file and comparing hashes instead of file contents reduces this to O(n)."
      },
      {
        "id": "quiz-b-49",
        "number": 49,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A government portal expects 50 million citizen logins. System A stores usernames in an unsorted list and checks them sequentially. System B uses a hash table. What are their Big O worst-case complexities and which must be chosen?",
        "answer": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant.",
        "wrong": [
          "System A is O(log n); System B is O(n²). System A is the better choice because logarithmic growth is manageable at 50 million users.",
          "Both systems are O(1) in the worst case; System B should be chosen because hash tables have a smaller constant factor than linear search.",
          "System A is O(n log n); System B is O(n). System B is better because linear growth is slower than linearithmic growth for large user counts."
        ],
        "explanation": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant."
      },
      {
        "id": "quiz-b-50",
        "number": 50,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A teacher asks students to rank these five algorithms from MOST efficient to LEAST efficient for very large inputs: (I) O(n) Linear Search, (II) O(1) Hash Lookup, (III) O(n log n) Merge Sort, (IV) O(n²) Bubble Sort, (V) O(log n) Binary Search. What is the correct ranking?",
        "answer": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
        "wrong": [
          "O(n) Linear Search → O(1) Hash Lookup → O(log n) Binary Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(log n) Binary Search → O(n) Linear Search → O(1) Hash Lookup → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(1) Hash Lookup → O(n) Linear Search → O(n²) Bubble Sort → O(log n) Binary Search → O(n log n) Merge Sort"
        ],
        "explanation": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort"
      }
    ],
    "everythingA": [
      {
        "id": "prelim-a-1",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the primary objective of parallel computing systems?",
        "answer": "Reducing program execution time through simultaneous processing",
        "wrong": [
          "Improving reliability by duplicating hardware resources",
          "Organizing large databases across independent machines",
          "Expanding network connectivity between computer systems"
        ],
        "explanation": "Parallel computing uses simultaneous processing to reduce wall-clock execution time."
      },
      {
        "id": "prelim-a-2",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "In shared memory programming, what is a major responsibility of the developer?",
        "answer": "Coordinating synchronization to prevent race conditions",
        "wrong": [
          "Managing distributed file replication across clusters",
          "Configuring communication protocols between remote nodes",
          "Creating routing policies for message transmission systems"
        ],
        "explanation": "Shared memory is fast, but the developer must protect shared data with synchronization."
      },
      {
        "id": "prelim-a-3",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which option best represents distributed computing?",
        "answer": "A Hadoop cluster analyzing massive datasets collaboratively",
        "wrong": [
          "A graphics card rendering frames for a video game",
          "A desktop processor running several browser applications",
          "A laptop processor executing spreadsheet calculations locally"
        ],
        "explanation": "A Hadoop cluster is made of multiple computers collaborating across a network."
      },
      {
        "id": "prelim-a-4",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What is the main function of the Map phase in MapReduce?",
        "answer": "Splitting data into segments for simultaneous computation",
        "wrong": [
          "Saving generated outputs within distributed storage systems",
          "Directing communication requests among participating servers",
          "Combining processed results into a completed final output"
        ],
        "explanation": "The Map phase splits and processes chunks in parallel. Reduce combines the intermediate results."
      },
      {
        "id": "prelim-a-5",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture provides each processor with independent local memory?",
        "answer": "An architecture using separate local memory per processor",
        "wrong": [
          "A multiprocessing model built around centralized memory access",
          "A design where memory latency varies between processors",
          "A memory structure where all processors share equal access"
        ],
        "explanation": "Distributed memory gives processors or nodes their own local memory."
      },
      {
        "id": "prelim-a-6",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which pair of operations forms the basis of message passing systems?",
        "answer": "Sending information packets and receiving transmitted data",
        "wrong": [
          "Reading information and writing information to storage",
          "Allocating memory blocks and releasing unused resources",
          "Encoding communication streams and decoding transferred signals"
        ],
        "explanation": "Message passing is built on send and receive operations."
      },
      {
        "id": "prelim-a-7",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which architecture allows every node to function as both client and server?",
        "answer": "A decentralized model where nodes share equal responsibilities",
        "wrong": [
          "A processing framework based on mapping and reducing tasks",
          "A cloud platform distributing applications through virtual servers",
          "A centralized system controlled by dedicated server machines"
        ],
        "explanation": "Peer-to-peer architecture gives each node both client and server roles."
      },
      {
        "id": "prelim-a-8",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Flynn's taxonomy categorizes parallel systems according to what criteria?",
        "answer": "The arrangement of instruction streams and data streams",
        "wrong": [
          "The operating systems and processor manufacturing designs",
          "The communication speed and network transmission capacity",
          "The quantity of processors and available memory resources"
        ],
        "explanation": "Flynn's taxonomy uses instruction streams and data streams."
      },
      {
        "id": "prelim-a-9",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A computer executing one instruction stream on one data stream belongs to which category?",
        "answer": "A system processing one instruction and one data stream",
        "wrong": [
          "A model supporting multiple instructions on shared datasets",
          "A configuration applying varied operations to identical inputs",
          "A structure executing many tasks across separate processors"
        ],
        "explanation": "Single Instruction, Single Data is SISD, the classic serial category."
      },
      {
        "id": "prelim-a-10",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Which term describes the relationship between computation and communication in parallel systems?",
        "answer": "The balance between computational work and communication",
        "wrong": [
          "The quantity of completed operations within a time period",
          "The delay experienced during data transfer between systems",
          "The capability of a system to increase processing capacity"
        ],
        "explanation": "Granularity describes the ratio or balance between computation and communication."
      },
      {
        "id": "prelim-a-11",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A hospital system must analyze millions of patient records for an AI diagnosis platform. Their current single-server setup requires 72 hours to finish processing. Which approach is most appropriate?",
        "answer": "Using parallel processing across multiple processing cores",
        "wrong": [
          "Migrating services toward a decentralized peer network design",
          "Replacing the current processor with a higher clock-speed model",
          "Implementing a traditional client-server communication structure"
        ],
        "explanation": "Large analysis workloads can be split and processed in parallel to reduce completion time."
      },
      {
        "id": "prelim-a-12",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "An online shopping platform experiences severe slowdowns during holiday traffic spikes. The company wants to increase server capacity without redesigning the application. Which distributed computing characteristic best solves this issue?",
        "answer": "The ability to scale resources efficiently as demand grows",
        "wrong": [
          "A single instruction single data processing organization",
          "Uniform processor access to centrally managed memory blocks",
          "A memory-sharing structure across connected processing units"
        ],
        "explanation": "Scalability lets a distributed or cloud system add resources as demand grows."
      },
      {
        "id": "prelim-a-13",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "During a climate simulation, one node in a computing cluster unexpectedly crashes. The simulation continues operating successfully without losing results. Which distributed computing feature enabled this?",
        "answer": "Maintaining operation despite hardware or software failures",
        "wrong": [
          "Exchanging information continuously between independent processes",
          "Executing instructions sequentially through staged processing units",
          "Automatically distributing workloads across active processors evenly"
        ],
        "explanation": "Fault tolerance means the system can keep operating despite component failures."
      },
      {
        "id": "prelim-a-14",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A rendering studio divides a 4K movie into thousands of independent frames processed simultaneously across 200 computers. Which concept best describes this situation?",
        "answer": "Large processing tasks divided into loosely connected workloads",
        "wrong": [
          "Multiple instruction streams operating on identical data values",
          "A memory-sharing approach spanning several distributed systems",
          "Highly independent tasks executed simultaneously without interaction"
        ],
        "explanation": "This is coarse-grained or embarrassingly parallel work: large tasks split into mostly independent units."
      },
      {
        "id": "prelim-a-15",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Two processors running on the same machine frequently exchange extremely large datasets. Performance speed is the highest priority. Which communication method is most suitable?",
        "answer": "Shared memory because it minimizes communication overhead costs",
        "wrong": [
          "Shared memory because synchronization is completely unnecessary",
          "Message passing because operating system calls improve protection",
          "Message passing because it supports communication across networks"
        ],
        "explanation": "Shared memory is usually faster for large same-machine data exchange because it avoids per-message overhead."
      },
      {
        "id": "prelim-a-16",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A startup rapidly increases from 5 to 50 virtual machines during a product launch, then reduces usage afterward. Which computing model makes this possible?",
        "answer": "An elastic infrastructure delivered through cloud platforms",
        "wrong": [
          "A tightly coupled cluster operating within one local network",
          "A decentralized network without dedicated control mechanisms",
          "A grid-based environment connecting geographically separated systems"
        ],
        "explanation": "Cloud computing provides elastic, on-demand resources."
      },
      {
        "id": "prelim-a-17",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A graphics processor applies the same blur operation simultaneously across thousands of image pixels. Which Flynn taxonomy category best represents this process?",
        "answer": "A single operation applied simultaneously to multiple datasets",
        "wrong": [
          "One instruction stream operating on one sequence of data",
          "Multiple operations performed on one shared stream of data",
          "Different instructions executing independently across many datasets"
        ],
        "explanation": "SIMD applies a single instruction or operation across many data elements."
      },
      {
        "id": "prelim-a-18",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Engineers design a fraud-detection system where several processors perform different analyses on the same transaction stream. Which Flynn classification matches this setup?",
        "answer": "Multiple instruction streams analyzing the same incoming dataset",
        "wrong": [
          "A single processor executing sequential instructions on data",
          "One instruction stream simultaneously handling many data values",
          "Independent processors executing separate tasks on unique data"
        ],
        "explanation": "Multiple instructions acting on a single data stream is MISD."
      },
      {
        "id": "prelim-a-19",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel program finishes in 2 hours using 16 processors, while the serial version requires 20 hours. A colleague claims the parallel version is always more efficient. Which response is most accurate?",
        "answer": "Coordination overhead can reduce benefits for smaller workloads",
        "wrong": [
          "Parallel systems waste processing resources because of idle time",
          "Additional processors consistently improve efficiency for all workloads",
          "Parallel execution always decreases total processor utilization time"
        ],
        "explanation": "This key was corrected: more processors do not always improve efficiency because overhead can dominate."
      },
      {
        "id": "prelim-a-20",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A developer notices performance decreases after adding more processors because processors spend excessive time exchanging information. Which overhead factor is the likely cause?",
        "answer": "The communication costs associated with transferring shared data",
        "wrong": [
          "The delay occurring when tasks complete and release resources",
          "The licensing restrictions imposed by distributed software vendors",
          "The initialization time required before parallel tasks can begin"
        ],
        "explanation": "Communication overhead can erase the benefits of adding processors."
      },
      {
        "id": "prelim-a-21",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A NUMA architecture links two SMP systems. Processor A accesses local memory in 50ns but remote memory in 150ns. Which statement is most accurate?",
        "answer": "Memory access latency differs between regions in NUMA systems",
        "wrong": [
          "The system qualifies as UMA because processors remain identical",
          "Separate SMP systems require exclusive use of message passing",
          "Cache coherency cannot function correctly in NUMA architectures"
        ],
        "explanation": "NUMA means memory access time is non-uniform and depends on memory location."
      },
      {
        "id": "prelim-a-22",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "Why does increasing CPUs in a shared memory system not always improve performance proportionally?",
        "answer": "Traffic contention creates bottlenecks on memory communication paths",
        "wrong": [
          "Shared memory systems cannot expand storage capacity efficiently",
          "Distributed memory becomes mandatory after adding several processors",
          "Shared memory processors cannot execute tasks independently"
        ],
        "explanation": "More CPUs can increase traffic and contention on shared memory paths."
      },
      {
        "id": "prelim-a-23",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A parallel application uses fine-grained granularity. What consequence is most likely?",
        "answer": "Communication overhead becomes larger relative to computation",
        "wrong": [
          "Execution becomes slower because fewer tasks are generated",
          "Distributed architectures become unnecessary for coordination",
          "Communication demands decrease as processor counts increase"
        ],
        "explanation": "Fine-grained tasks communicate frequently, so overhead can become large."
      },
      {
        "id": "prelim-a-24",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "What distinguishes distributed shared memory systems from pure distributed memory systems?",
        "answer": "Software creates a shared-memory illusion across distributed nodes",
        "wrong": [
          "Every processor physically accesses one universal memory structure",
          "Communication between machines becomes completely unnecessary",
          "All processors execute identical instructions on identical datasets"
        ],
        "explanation": "DSM hides physical distribution and presents an illusion of shared memory."
      },
      {
        "id": "prelim-a-25",
        "source": "Prelim Exam",
        "set": "A",
        "tag": "Set A",
        "prompt": "A MIMD computer may execute tasks non-deterministically. What does this imply for developers?",
        "answer": "Synchronization mechanisms are required to ensure correctness",
        "wrong": [
          "Scientific applications cannot operate reliably on MIMD systems",
          "Deterministic execution is unnecessary in parallel applications",
          "SIMD systems experience more synchronization concerns than MIMD"
        ],
        "explanation": "Non-deterministic execution means synchronization is needed to keep shared results correct."
      },
      {
        "id": "prelim-b-1",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What distinguishes distributed computing from parallel computing?",
        "answer": "Distributed computing uses multiple networked computers with independent memory spaces",
        "wrong": [
          "Parallel computing depends entirely on wide-area communication architecture systems",
          "Distributed computing always requires identical processors within shared architectures",
          "Parallel computing eliminates coordination between processors during task execution"
        ],
        "explanation": "Distributed computing uses independent networked machines, while parallel computing often focuses on simultaneous execution using multiple processors or cores."
      },
      {
        "id": "prelim-b-2",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which of the following is a key advantage of distributed memory architecture over shared memory?",
        "answer": "Higher scalability through independent nodes added across environments",
        "wrong": [
          "Faster synchronization between tightly coupled computational workloads",
          "Simplified address spaces allowing transparent memory access globally",
          "Lower communication overhead during real-time synchronization across processor groups"
        ],
        "explanation": "Distributed memory can scale by adding independent nodes, each with its own memory."
      },
      {
        "id": "prelim-b-3",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In the von Neumann architecture, what is stored in electronic memory?",
        "answer": "Program instructions together with data required for execution processes",
        "wrong": [
          "Operating system services and communication protocols",
          "Arithmetic processing rules controlling processor execution stages",
          "Hardware interrupt signals coordinating communication between connected input devices"
        ],
        "explanation": "The von Neumann model stores both program instructions and data in memory."
      },
      {
        "id": "prelim-b-4",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the Reduce phase responsible for in MapReduce?",
        "answer": "Combining intermediate outputs into summarized results for final processing stages",
        "wrong": [
          "Splitting data before assigning tasks across processing nodes",
          "Replicating distributed data across clusters for system fault tolerance",
          "Scheduling worker processes during parallel execution of distributed jobs"
        ],
        "explanation": "Reduce combines intermediate Map outputs into final summarized results."
      },
      {
        "id": "prelim-b-5",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which parallel computing resource is specifically mentioned as suitable for machine learning and scientific simulations?",
        "answer": "Graphics processing units (GPUs) enabling repetitive mathematical operations efficiently simultaneously",
        "wrong": [
          "Distributed storage platforms coordinating replicated blocks across computing environments",
          "Symmetric multiprocessing architectures supporting coordinated memory sharing operations globally",
          "Cluster middleware frameworks balancing workloads among geographically separated processors"
        ],
        "explanation": "GPUs are well suited for repetitive parallel mathematical operations used in machine learning and simulations."
      },
      {
        "id": "prelim-b-6",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is a node in the context of parallel computing clusters?",
        "answer": "Independent computers containing processors, memory and networking communication interfaces together",
        "wrong": [
          "Routing hardware connecting distributed systems across communication infrastructure environments",
          "Virtualized services executing distributed applications within cloud infrastructures remotely",
          "Shared processor cores executing synchronized instructions within multiprocessor architectures"
        ],
        "explanation": "A cluster node is a standalone computer with processors, memory, and network interfaces."
      },
      {
        "id": "prelim-b-7",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Which statement correctly describes the shared memory inter-process communication model?",
        "answer": "Processes access and coordinate through spaces and regions containing shared information together",
        "wrong": [
          "Processes exchange information exclusively through synchronized message queue communication mechanisms",
          "Processes communicate indirectly using distributed packet switching across network infrastructures",
          "Processes isolate execution environments while communicating through independent storage replication systems"
        ],
        "explanation": "Shared memory IPC lets processes communicate by reading and writing a shared memory region."
      },
      {
        "id": "prelim-b-8",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "What is the primary purpose of synchronization in parallel applications?",
        "answer": "Coordinating concurrent tasks while preventing inconsistent shared data modifications simultaneously",
        "wrong": [
          "Increasing processor speed during independent execution of distributed computational workloads",
          "Minimizing memory allocation requirements across geographically distributed processing environments globally",
          "Reducing network latency between geographically distributed computational resource infrastructures entirely"
        ],
        "explanation": "Synchronization coordinates concurrent work and protects shared data from inconsistent updates."
      },
      {
        "id": "prelim-b-9",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An SMP (Symmetric Multi-Processor) system is characterized by:",
        "answer": "Processors sharing equal access to memory and computing resources together",
        "wrong": [
          "Processors connected geographically using distributed communication infrastructures and middleware frameworks",
          "Nodes maintaining isolated memory spaces without coordinated synchronization mechanisms",
          "Nonuniform memory access architectures requiring specialized optimization and coordination strategies"
        ],
        "explanation": "In SMP, processors share memory and resources with equal access."
      },
      {
        "id": "prelim-b-10",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is message passing described as both useful and slower compared to shared memory communication?",
        "answer": "Message passing requires physical data transfers through operating system communication services",
        "wrong": [
          "Shared memory communication depends entirely upon geographically distributed network infrastructures globally",
          "Variable-length communication reduces synchronization requirements between processing components completely",
          "Message passing architectures require fewer processing distributed computational coordination tasks"
        ],
        "explanation": "Message passing is useful across separate address spaces, but it is slower because data transfer is mediated by the OS or network services."
      },
      {
        "id": "prelim-b-11",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer converts a serial program to run on 16 processors. Total CPU time increases from 4 hours to 48 hours while wall-clock time decreases slightly. What conclusion is most accurate?",
        "answer": "Parallel overhead may reduce overall efficiency when workload distribution across processors consumes resources",
        "wrong": [
          "Additional processors automatically guarantee greater processing resources",
          "Serial execution remains best because synchronization always reduces performance substantially",
          "Processor utilization increases substantially despite application executed across clustered infrastructures"
        ],
        "explanation": "The program may use more total CPU time because overhead, communication, and coordination reduce efficiency."
      },
      {
        "id": "prelim-b-12",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "In P2P architecture, each node is both client and server. What makes this fundamentally different from client-server regarding fault tolerance?",
        "answer": "Distributed peer participation removes central dependency while improving system resilience significantly",
        "wrong": [
          "Centralized coordination improves replicated communication routing infrastructures globally",
          "Dedicated servers eliminate synchronization problems during workload distribution between participating systems",
          "Peer architectures depend entirely upon specialized hardware supporting coordinated resource allocation mechanisms"
        ],
        "explanation": "P2P removes a central server dependency, improving resilience compared with a single central server design."
      },
      {
        "id": "prelim-b-13",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A SIMD architecture processes the same data stream for fraud detection, where multiple independent cryptographic algorithms simultaneously analyze the same data stream. Which Flynn classification applies and why?",
        "answer": "MISD because multiple instructions analyze one shared transaction data stream",
        "wrong": [
          "SIMD because identical instructions operate across multiple independent transaction datasets simultaneously",
          "MIMD because processors execute unrelated algorithms using independent transaction processing streams",
          "SISD because transaction processing occurs sequentially through centralized computing architecture exclusively"
        ],
        "explanation": "Multiple instruction streams analyzing the same data stream corresponds to MISD."
      },
      {
        "id": "prelim-b-14",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A grid computing system spans multiple organizations globally. Compare this to cluster computing regarding governance, resource ownership, and scale.",
        "answer": "Grid systems involve distributed governance and heterogeneous resources across organizations globally",
        "wrong": [
          "Cluster systems depend entirely upon geographically separated organizations coordinating shared control",
          "Grid architectures operate exclusively within homogeneous environments managed through centralized administration systems",
          "Cluster infrastructures require distributed governance supporting independently managed computational resource networks worldwide"
        ],
        "explanation": "Grid computing often spans organizations and heterogeneous resources, while clusters are usually more tightly managed."
      },
      {
        "id": "prelim-b-15",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Why is complexity listed as both a challenge and cost multiplier in parallel software development?",
        "answer": "Concurrent execution coordination increases effort across design, debugging, tuning, and maintenance phases",
        "wrong": [
          "Specialized hardware infrastructures dramatically eliminate software licensing and deployment requirements globally",
          "Parallel programming languages restrict interoperability between distributed applications and operating systems entirely",
          "Proprietary debugging frameworks eliminate open-source development support for distributed computing projects globally"
        ],
        "explanation": "Parallel software adds coordination complexity throughout design, coding, debugging, tuning, and maintenance."
      },
      {
        "id": "prelim-b-16",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A weather forecasting agency must process satellite data from 50 regions simultaneously and independently. What is the most appropriate computing model?",
        "answer": "Embarrassingly parallel distribution supporting independent regional processing tasks simultaneously efficiently",
        "wrong": [
          "Client-server architecture coordinating centralized processing through dedicated communication infrastructures globally",
          "SISD processing executing sequential instructions through synchronized processor architectures exclusively",
          "High-speed serial processing environments minimizing synchronization across distributed computational infrastructures entirely"
        ],
        "explanation": "Independent regional workloads are a good fit for embarrassingly parallel processing."
      },
      {
        "id": "prelim-b-17",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A logistics company stores shipment records across geographically separate data centers. A query must search all locations simultaneously. Which component addresses this?",
        "answer": "Distributed file systems enabling coordinated access across geographically separated storage infrastructures",
        "wrong": [
          "Shared memory architectures supporting centralized synchronization between geographically separated processors globally",
          "Vector processing pipelines accelerating repetitive instructions during sequential database search operations",
          "Symmetric multiprocessing systems coordinating shared memory access between distributed processing systems"
        ],
        "explanation": "Distributed file systems coordinate access to data stored across geographically separated locations."
      },
      {
        "id": "prelim-b-18",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "Two processes on different machines connected by a network need to share computation results. Shared memory is unavailable. Which IPC mechanism must they use?",
        "answer": "Message passing through send and receive communication operations across network infrastructures",
        "wrong": [
          "Direct cache coherency mechanisms coordinating memory synchronization between distributed processors continuously",
          "Shared address spaces supporting transparent remote memory access across geographically separated processing systems globally",
          "Uniform memory architectures coordinating synchronized processor access within shared computing environments together"
        ],
        "explanation": "Processes on different machines without shared memory communicate through message passing."
      },
      {
        "id": "prelim-b-19",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A machine learning model trains by splitting datasets into batches processed by GPU cores applying identical operations. Which Flynn taxonomy class describes this?",
        "answer": "SIMD because processing occurs through synchronized instruction execution across processor architectures",
        "wrong": [
          "SISD because processing occurs sequentially through synchronized processor architecture globally",
          "MIMD because processors execute unrelated instructions across multiple independent computational data streams independently",
          "MISD because multiple instruction streams coordinate processing across centralized communication environments globally"
        ],
        "explanation": "GPU cores applying the same operation to many data items are an example of SIMD."
      },
      {
        "id": "prelim-b-20",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "An online multiplayer game server crashes but users reconnect seamlessly to a backup server without data loss. Which distributed characteristic enabled this?",
        "answer": "Fault tolerance maintaining service continuity despite failures within distributed computing environments effectively",
        "wrong": [
          "Load balancing distributing computational requests across synchronized server communication infrastructures globally",
          "Scalability mechanisms supporting increased processor coordination during high-demand computational workloads simultaneously",
          "Parallel decomposition separating independent tasks during coordinated distributed application processing operations globally"
        ],
        "explanation": "Fault tolerance allows service continuity when a server fails."
      },
      {
        "id": "prelim-b-21",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A university shares CPU cycles from multiple countries to simulate protein folding. Which distributed architecture best fits?",
        "answer": "Grid computing integrating heterogeneous resources from geographically distributed organizations collaboratively worldwide",
        "wrong": [
          "Cluster computing supporting homogeneous systems managed through centralized administrative infrastructures together",
          "Peer-to-peer architectures coordinating decentralized file exchanges between participating computational environments globally",
          "Client-server computing centralizing resource allocation through dedicated administrative infrastructure globally"
        ],
        "explanation": "Grid computing fits geographically distributed, heterogeneous resources across organizations."
      },
      {
        "id": "prelim-b-22",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel program splits work into microtasks constantly exchanging small updates. Performance becomes worse than the serial version. What is the most likely cause?",
        "answer": "Excessive communication overhead caused by extremely fine-grained task decomposition strategies continuously",
        "wrong": [
          "Coarse-grained decomposition reducing synchronization requirements across distributed processing environments entirely globally",
          "Distributed memory architectures providing synchronized communication between computational microtasks completely",
          "Processor underutilization resulting from insufficient workload distribution across available computing infrastructures globally"
        ],
        "explanation": "Fine-grained work can communicate so frequently that overhead outweighs parallel speedup."
      },
      {
        "id": "prelim-b-23",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A social media recommendation engine processes different users with different algorithms simultaneously across thousands of servers. Which Flynn classification applies?",
        "answer": "MIMD because independent instructions process separate datasets across distributed processors concurrently",
        "wrong": [
          "SIMD because identical operations process recommendation datasets simultaneously together",
          "SISD because execution remains sequential through centralized algorithmic processing architectures exclusively",
          "MISD because multiple algorithms analyze synchronized datasets through coordinated instruction execution simultaneously"
        ],
        "explanation": "Different algorithms on separate user datasets across many servers is MIMD."
      },
      {
        "id": "prelim-b-24",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A developer prioritizes simpler programming over system-level efficiency when choosing between fixed-size and variable-size messages. Which should they choose?",
        "answer": "Variable-size messages simplifying application programming despite increased implementation complexity internally globally",
        "wrong": [
          "Fixed-size messages because implementation through predictable communication packet structures globally",
          "Fixed-size communication structures automatically supporting flexible distributed application requirements completely",
          "Variable-length communication packets consistently reducing transmission overhead across distributed infrastructures worldwide"
        ],
        "explanation": "Variable-size messages require more system-level implementation but make the programming task simpler."
      },
      {
        "id": "prelim-b-25",
        "source": "Prelim Exam",
        "set": "B",
        "tag": "Set B",
        "prompt": "A parallel scientific simulation runs correctly on 8 processors but produces inconsistent results on 32 processors. What is the most likely cause?",
        "answer": "Improper synchronization causing race conditions during larger-scale parallel execution environments simultaneously",
        "wrong": [
          "Network communication bandwidth preventing synchronization between distributed processing environments effectively globally",
          "NUMA architectures introducing incompatible processor communication patterns during synchronized computational execution processes",
          "Insufficient memory allocation preventing processor coordination across distributed computational workloads successfully"
        ],
        "explanation": "Inconsistent results at larger scale often point to race conditions from improper synchronization."
      },
      {
        "id": "week3-1",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What best describes a process?",
        "answer": "A running program with its own memory space and resources",
        "wrong": [
          "A single variable stored inside shared memory",
          "A hardware-only instruction decoder",
          "A message header used in distributed systems"
        ],
        "explanation": "A process is an independent running program with its own memory space."
      },
      {
        "id": "week3-2",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What best describes a thread?",
        "answer": "A lightweight execution unit inside a process",
        "wrong": [
          "A separate physical computer in a cluster",
          "A storage partition in HDFS",
          "A network protocol for RPC"
        ],
        "explanation": "A thread is the smallest execution unit inside a process and shares process memory."
      },
      {
        "id": "week3-3",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is the key distinction between concurrency and parallelism?",
        "answer": "Concurrency manages multiple tasks; parallelism executes tasks simultaneously",
        "wrong": [
          "Concurrency requires multiple machines; parallelism requires only one core",
          "Concurrency is slower storage; parallelism is faster storage",
          "Concurrency means no synchronization is required"
        ],
        "explanation": "Concurrency is about dealing with multiple tasks; parallelism is about doing them at the same time."
      },
      {
        "id": "week3-4",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Why do threads require synchronization?",
        "answer": "They share memory within a process",
        "wrong": [
          "They cannot communicate with each other",
          "They always run on separate networks",
          "They only execute serial instructions"
        ],
        "explanation": "Threads share memory, so access to shared data must be coordinated."
      },
      {
        "id": "week3-5",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which primitive provides exclusive access to a shared resource?",
        "answer": "Mutex or lock",
        "wrong": [
          "Map phase",
          "HDFS block",
          "Client request"
        ],
        "explanation": "A lock or mutex allows only one thread or process to enter a protected section at a time."
      },
      {
        "id": "week3-6",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which synchronization primitive uses a counter for limited resources?",
        "answer": "Semaphore",
        "wrong": [
          "Condition variable",
          "RPC",
          "Pipeline"
        ],
        "explanation": "A semaphore tracks available resource count."
      },
      {
        "id": "week3-7",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a condition variable used for?",
        "answer": "Waiting until a specific condition becomes true",
        "wrong": [
          "Classifying instruction streams",
          "Storing files across Hadoop nodes",
          "Dividing a program into Map and Reduce"
        ],
        "explanation": "Condition variables let threads wait and be signaled when a condition changes."
      },
      {
        "id": "week3-8",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a monitor?",
        "answer": "An abstraction that encapsulates shared data and controlled access procedures",
        "wrong": [
          "A screen that displays processor temperature",
          "A network cable for clusters",
          "A serial-only execution unit"
        ],
        "explanation": "A monitor bundles shared data with synchronized procedures."
      },
      {
        "id": "week3-9",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which communication primitive supports asynchronous ordered messages?",
        "answer": "Message queue",
        "wrong": [
          "Mutex",
          "Barrier",
          "SMP"
        ],
        "explanation": "Message queues let tasks send asynchronous messages while preserving order."
      },
      {
        "id": "week3-10",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which primitive is used to execute a procedure on another machine?",
        "answer": "RPC",
        "wrong": [
          "UMA",
          "SIMD",
          "Pthreads"
        ],
        "explanation": "Remote Procedure Call invokes a remote procedure as if it were local."
      },
      {
        "id": "week3-11",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a deadlock?",
        "answer": "Tasks wait forever for each other to release resources",
        "wrong": [
          "Tasks execute the same instruction on many data values",
          "A cluster scales down after demand falls",
          "A program completes with perfect speedup"
        ],
        "explanation": "Deadlock is permanent waiting caused by circular resource dependencies."
      },
      {
        "id": "week3-12",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "What is a livelock?",
        "answer": "Tasks keep reacting to each other but fail to make progress",
        "wrong": [
          "A single instruction operates on one data stream",
          "A file is replicated across nodes",
          "A GPU applies one operation to pixels"
        ],
        "explanation": "In livelock, tasks are active but still make no progress."
      },
      {
        "id": "week3-13",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which technique lets a web server handle many client requests concurrently without one request blocking all others?",
        "answer": "Threads or asynchronous I/O",
        "wrong": [
          "Only SISD execution",
          "Turning off IPC",
          "Using no synchronization primitives"
        ],
        "explanation": "Web servers commonly use threads, async I/O, or event loops to handle concurrent requests."
      },
      {
        "id": "week3-14",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Why are processes more isolated than threads?",
        "answer": "Each process has its own memory space",
        "wrong": [
          "Each process always runs on a different physical country",
          "Processes cannot use operating system resources",
          "Threads never share memory"
        ],
        "explanation": "Process memory isolation improves stability and security."
      },
      {
        "id": "week3-15",
        "source": "Week 3 Drill",
        "set": "Week 3",
        "tag": "Week 3",
        "prompt": "Which is an example of communication rather than synchronization?",
        "answer": "Channel",
        "wrong": [
          "Mutex",
          "Semaphore",
          "Barrier"
        ],
        "explanation": "Channels pass messages. Mutexes, semaphores, and barriers primarily coordinate access or timing."
      },
      {
        "id": "module-final-a-1",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "A program creates several threads inside one process, and each thread reads and writes the same array. Which model is being used?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message-passing programming",
          "Linear programming",
          "Branch and bound"
        ],
        "explanation": "Shared-memory programming uses a common memory space that all threads can access."
      },
      {
        "id": "module-final-a-2",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Which statement best describes shared memory?",
        "answer": "All threads can access the same memory addresses",
        "wrong": [
          "Every process must use separate private memory",
          "Data is exchanged only through network packets",
          "Only one processor can read memory at a time"
        ],
        "explanation": "The key clue is common memory addresses accessible by multiple threads or processes."
      },
      {
        "id": "module-final-a-3",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "In shared-memory programming, how do threads usually communicate?",
        "answer": "By reading and writing shared variables",
        "wrong": [
          "By sending emails between processes",
          "By compiling separate programs",
          "By using only linear constraints"
        ],
        "explanation": "Shared variables are the communication channel in a shared-memory model."
      },
      {
        "id": "module-final-a-4",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "Two threads update the same counter at the same time and the final value is wrong. What is the most likely issue?",
        "answer": "Race condition",
        "wrong": [
          "Point-to-point communication",
          "Linearithmic runtime",
          "Greedy selection"
        ],
        "explanation": "Race conditions happen when concurrent access to shared data is not properly synchronized."
      },
      {
        "id": "module-final-a-5",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "Which mechanism is used to coordinate access to shared variables?",
        "answer": "Locks, semaphores, and barriers",
        "wrong": [
          "Only binary search",
          "Only message broadcasting",
          "Only matrix multiplication"
        ],
        "explanation": "Locks, semaphores, and barriers prevent conflicting updates in shared memory."
      },
      {
        "id": "module-final-a-6",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "What is the key difference between multithreading and multiprocessing in the shared-memory discussion?",
        "answer": "Multithreading creates multiple threads within one process, while multiprocessing uses independent processes",
        "wrong": [
          "Multithreading always uses networks, while multiprocessing never uses memory",
          "Multiprocessing is another name for binary search",
          "Multithreading cannot run in parallel"
        ],
        "explanation": "The distinction is thread units inside a process versus independent processes."
      },
      {
        "id": "module-final-a-7",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Why is shared-memory communication often fast?",
        "answer": "Threads can directly access shared data structures",
        "wrong": [
          "Every message must cross a wide-area network",
          "It always avoids all synchronization",
          "It uses factorial-time scheduling"
        ],
        "explanation": "Direct memory access is usually faster than communication between distributed nodes."
      },
      {
        "id": "module-final-a-8",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "Which is a real challenge of shared-memory programming?",
        "answer": "Synchronization overhead",
        "wrong": [
          "No possibility of data sharing",
          "No need for debugging",
          "Automatic perfect scalability"
        ],
        "explanation": "Correct synchronization is necessary, but too much synchronization can reduce performance."
      },
      {
        "id": "module-final-a-9",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Scalability",
        "prompt": "As the number of shared-memory threads increases, performance may stop improving because of what?",
        "answer": "Contention for shared resources",
        "wrong": [
          "Lack of any common address space",
          "Guaranteed message ordering",
          "Fewer variables in memory"
        ],
        "explanation": "More threads can fight over shared data, locks, cache lines, or memory bandwidth."
      },
      {
        "id": "module-final-a-10",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Synchronization",
        "prompt": "A developer says shared memory is easy because threads can share variables. What important warning should you add?",
        "answer": "Shared variables must be synchronized to avoid inconsistent data",
        "wrong": [
          "Shared variables remove all debugging problems",
          "Shared memory cannot create race conditions",
          "Threads are never allowed to write shared data"
        ],
        "explanation": "The convenience of shared variables is exactly why synchronization is important."
      },
      {
        "id": "module-final-a-11",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which programming paradigm uses independent processes that exchange explicit messages?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming",
          "Dynamic programming",
          "Constant-space programming"
        ],
        "explanation": "Message passing uses send/receive communication instead of a common memory space."
      },
      {
        "id": "module-final-a-12",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "In message-passing programming, what is usually true about memory?",
        "answer": "Processes run in separate memory spaces",
        "wrong": [
          "All processes share one global address space",
          "Only GPU memory can be used",
          "Memory is replaced by linear equations"
        ],
        "explanation": "The model communicates by explicit messages because memory is not shared."
      },
      {
        "id": "module-final-a-13",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which pair best represents the basic operations of message passing?",
        "answer": "Send and receive",
        "wrong": [
          "Divide and combine",
          "Lock and unlock only",
          "Push and pop only"
        ],
        "explanation": "Message-passing programs coordinate by sending and receiving messages."
      },
      {
        "id": "module-final-a-14",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "What does asynchronous communication mean in message passing?",
        "answer": "A process can continue execution while waiting for a message",
        "wrong": [
          "All processes must stop until every message arrives",
          "Messages are impossible to receive out of order",
          "Only one process may exist"
        ],
        "explanation": "Asynchronous communication lets execution continue instead of always blocking immediately."
      },
      {
        "id": "module-final-a-15",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "What makes synchronization explicit in message passing?",
        "answer": "Processes intentionally wait for or react to message receipt",
        "wrong": [
          "The operating system hides all communication decisions",
          "Shared variables are automatically protected",
          "The compiler removes all messages"
        ],
        "explanation": "The program explicitly coordinates around messages."
      },
      {
        "id": "module-final-a-16",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "A process sends a message directly to one specific target process. What communication pattern is this?",
        "answer": "Point-to-point communication",
        "wrong": [
          "Collective communication",
          "Dynamic programming",
          "Quadratic space"
        ],
        "explanation": "Point-to-point means one sender targets one receiver."
      },
      {
        "id": "module-final-a-17",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Broadcasting a value from one process to all processes is what kind of message-passing operation?",
        "answer": "Collective communication",
        "wrong": [
          "Constant-time access",
          "Backtracking",
          "Shared variable assignment"
        ],
        "explanation": "Collective communication involves a group of processes exchanging data by a pattern like broadcast, reduce, or gather."
      },
      {
        "id": "module-final-a-18",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Message Passing",
        "prompt": "Which standard is widely used for high-performance message passing?",
        "answer": "MPI",
        "wrong": [
          "HTML",
          "CSS",
          "SQL injection"
        ],
        "explanation": "MPI stands for Message Passing Interface and is widely used in HPC and distributed memory systems."
      },
      {
        "id": "module-final-a-19",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Scalability",
        "prompt": "Why does message passing scale well for clusters?",
        "answer": "It does not depend on a single shared memory space",
        "wrong": [
          "It never communicates",
          "It removes all overhead",
          "It requires one processor only"
        ],
        "explanation": "Separate processes can run across many machines and communicate through messages."
      },
      {
        "id": "module-final-a-20",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Debugging",
        "prompt": "Which is a common debugging issue in message-passing programs?",
        "answer": "Message deadlock or unexpected message order",
        "wrong": [
          "No communication pattern exists",
          "All variables are shared by default",
          "There are no synchronization concerns"
        ],
        "explanation": "Message-passing bugs often involve blocking messages, unexpected order, or deadlocks."
      },
      {
        "id": "module-final-a-21",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Which statement best defines data parallelism?",
        "answer": "The same operation is applied to different partitions of a dataset",
        "wrong": [
          "Different unrelated tasks are always executed one after another",
          "All processes use one lock",
          "One message is broadcast to all users"
        ],
        "explanation": "Data parallelism is about splitting data and repeating the same computation."
      },
      {
        "id": "module-final-a-22",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Data parallelism is often associated with which execution style?",
        "answer": "SIMD",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "Non-repudiation"
        ],
        "explanation": "SIMD means Single Instruction, Multiple Data, matching the same operation over many data elements."
      },
      {
        "id": "module-final-a-23",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Load Balancing",
        "prompt": "Why is load balancing important in data parallelism?",
        "answer": "It keeps processing units from receiving uneven amounts of work",
        "wrong": [
          "It prevents all communication from existing",
          "It forces all data into one partition",
          "It converts O(n) into O(1)"
        ],
        "explanation": "Uneven partitions cause some processors to finish early while others continue working."
      },
      {
        "id": "module-final-a-24",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Which statement is usually true for ideal data parallelism?",
        "answer": "Communication between processing units is minimal or unnecessary",
        "wrong": [
          "Every task must exchange messages every step",
          "Each unit performs a different algorithm",
          "All work must run on one core"
        ],
        "explanation": "Independent partitions allow parallel work with little coordination."
      },
      {
        "id": "module-final-a-25",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Data Parallelism",
        "prompt": "Applying the same brightness adjustment to every pixel of a large image is an example of what?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Branch and bound",
          "Linear programming"
        ],
        "explanation": "The same operation is applied to many independent pixel values."
      },
      {
        "id": "module-final-a-26",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Which statement best defines task parallelism?",
        "answer": "Different independent tasks are executed concurrently",
        "wrong": [
          "The same instruction must run on all data elements",
          "All processors share one variable only",
          "Every task must wait for a network message"
        ],
        "explanation": "Task parallelism focuses on separate tasks, not just separate data chunks."
      },
      {
        "id": "module-final-a-27",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Which situation most clearly uses task parallelism?",
        "answer": "A program searches files, downloads data, and compresses output at the same time",
        "wrong": [
          "A GPU applies one blur operation to every pixel",
          "A loop prints each element sequentially",
          "A binary search halves a sorted array"
        ],
        "explanation": "The tasks are distinct operations executing concurrently."
      },
      {
        "id": "module-final-a-28",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Why does task parallelism often need dynamic load balancing?",
        "answer": "Tasks may have different execution times or complexity",
        "wrong": [
          "All tasks are guaranteed identical",
          "Data partitions are always the same size",
          "Messages cannot be sent"
        ],
        "explanation": "Dynamic scheduling keeps units busy when tasks vary."
      },
      {
        "id": "module-final-a-29",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "When one task depends on another task's result, task parallelism may require what?",
        "answer": "Synchronization",
        "wrong": [
          "Factorial growth",
          "No coordination",
          "Only greedy selection"
        ],
        "explanation": "Dependencies require coordination so tasks use correct results."
      },
      {
        "id": "module-final-a-30",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Parallel recursive algorithms often fit task parallelism because what can become independent work?",
        "answer": "Recursive calls",
        "wrong": [
          "Only one global variable",
          "The final print statement",
          "All memory addresses"
        ],
        "explanation": "Each recursive branch can sometimes be treated as an independent task."
      },
      {
        "id": "module-final-a-31",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Task Parallelism",
        "prompt": "Parallel loop iterations are task-parallel only when what is true?",
        "answer": "Iterations can execute independently",
        "wrong": [
          "Every iteration writes the same shared variable without locks",
          "The loop must be O(n!)",
          "Only one iteration exists"
        ],
        "explanation": "Independent iterations can be treated as separate tasks."
      },
      {
        "id": "module-final-a-32",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Parallelism Types",
        "prompt": "Which clue separates data parallelism from task parallelism?",
        "answer": "Same operation on data chunks versus different operations as tasks",
        "wrong": [
          "Both require no processors",
          "Data parallelism cannot use datasets",
          "Task parallelism always means one task"
        ],
        "explanation": "This is the central distinction the exam often tests."
      },
      {
        "id": "module-final-a-33",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Shared Memory",
        "prompt": "OpenMP is most commonly associated with what environment?",
        "answer": "Shared-memory multi-core programming",
        "wrong": [
          "Only wide-area message passing",
          "Only database normalization",
          "Only cryptography"
        ],
        "explanation": "OpenMP is commonly used to express parallelism in shared-memory systems."
      },
      {
        "id": "module-final-a-34",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Divide and conquer has which core sequence?",
        "answer": "Divide -> Conquer -> Combine",
        "wrong": [
          "Send -> Receive -> Broadcast",
          "Lock -> Sleep -> Ignore",
          "Guess -> Encrypt -> Delete"
        ],
        "explanation": "The method divides the problem, solves subproblems recursively, and combines results."
      },
      {
        "id": "module-final-a-35",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which algorithm is a classic divide-and-conquer example?",
        "answer": "Merge sort",
        "wrong": [
          "Sudoku backtracking as the only answer",
          "A password policy",
          "Linear objective optimization"
        ],
        "explanation": "Merge sort divides, recursively sorts, and merges the subresults."
      },
      {
        "id": "module-final-a-36",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique chooses the best-looking option at the current step?",
        "answer": "Greedy method",
        "wrong": [
          "Backtracking",
          "Message passing",
          "Quadratic space"
        ],
        "explanation": "Greedy algorithms make local choices and typically do not reconsider them."
      },
      {
        "id": "module-final-a-37",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Why is the greedy method considered risky on some problems?",
        "answer": "A local best choice may not produce the global best result",
        "wrong": [
          "It always checks all permutations",
          "It is impossible to implement",
          "It requires shared memory"
        ],
        "explanation": "Greedy choices are simple, but local optimality is not always enough."
      },
      {
        "id": "module-final-a-38",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique solves subproblems and reuses their stored answers?",
        "answer": "Dynamic programming",
        "wrong": [
          "Message passing",
          "Constant space only",
          "Point-to-point communication"
        ],
        "explanation": "Dynamic programming avoids repeated work by reusing subproblem solutions."
      },
      {
        "id": "module-final-a-39",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Why is Fibonacci often used to explain dynamic programming?",
        "answer": "It has repeated overlapping subproblems",
        "wrong": [
          "It requires no memory at all",
          "It is only a message-passing protocol",
          "It always uses linear constraints"
        ],
        "explanation": "Naive Fibonacci recomputes many values; DP stores and reuses them."
      },
      {
        "id": "module-final-a-40",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "A Sudoku solver tries a number, fails later, and returns to choose a different number. Which technique is this?",
        "answer": "Backtracking",
        "wrong": [
          "Data parallelism",
          "Linear programming",
          "Constant time"
        ],
        "explanation": "Backtracking tries a candidate and retreats when the path becomes invalid."
      },
      {
        "id": "module-final-a-41",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which problem is commonly linked to backtracking?",
        "answer": "Eight queen problem",
        "wrong": [
          "Direct array access",
          "Simple variable assignment",
          "Point-to-point send only"
        ],
        "explanation": "Eight queens, Sudoku, and maze traversal are classic backtracking examples."
      },
      {
        "id": "module-final-a-42",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which technique keeps a current best solution and prunes paths that cannot beat it?",
        "answer": "Branch and bound",
        "wrong": [
          "Greedy method only",
          "Shared variable communication",
          "Big-Omega notation"
        ],
        "explanation": "Branch and bound uses bounds to remove weak parts of the solution space."
      },
      {
        "id": "module-final-a-43",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "What is a key purpose of branch and bound search?",
        "answer": "Maintain or improve the lowest-cost path to a target",
        "wrong": [
          "Avoid optimization entirely",
          "Force every process to share memory",
          "Make all loops nested"
        ],
        "explanation": "The method searches for an optimal solution while pruning."
      },
      {
        "id": "module-final-a-44",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Linear programming is used when the objective and constraints are what?",
        "answer": "Linear functions",
        "wrong": [
          "Random message orders",
          "Only recursive calls",
          "Only shared variables"
        ],
        "explanation": "Linear programming optimizes a linear objective subject to linear constraints."
      },
      {
        "id": "module-final-a-45",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Algorithms",
        "prompt": "Which is a typical linear programming goal?",
        "answer": "Maximize profit or minimize cost",
        "wrong": [
          "Create a race condition",
          "Broadcast every pixel",
          "Ignore all constraints"
        ],
        "explanation": "The source lists maximum profit, shortest path, and lowest cost style outcomes."
      },
      {
        "id": "module-final-a-46",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "What does time complexity measure?",
        "answer": "How runtime grows as input size grows",
        "wrong": [
          "Only the color of a chart",
          "Only the number of processors",
          "Only the size of source code comments"
        ],
        "explanation": "Time complexity is runtime as a function of input size."
      },
      {
        "id": "module-final-a-47",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Directly printing the first array element is usually what time complexity?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n^2)",
          "O(n!)"
        ],
        "explanation": "The work does not depend on how many elements the array contains."
      },
      {
        "id": "module-final-a-48",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Binary search on a sorted array is usually what time complexity?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(n!)",
          "O(1) for all cases"
        ],
        "explanation": "Binary search repeatedly halves the search range."
      },
      {
        "id": "module-final-a-49",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Two nested loops that print every ordered pair from an array usually have what time complexity?",
        "answer": "O(n^2)",
        "wrong": [
          "O(log n)",
          "O(1)",
          "O(n log n) always"
        ],
        "explanation": "A loop inside another loop over n elements creates n times n work."
      },
      {
        "id": "module-final-a-50",
        "source": "PaD Module Finals",
        "set": "A",
        "tag": "Complexity",
        "prompt": "Which growth order is generally best among these for large input?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(2^n)",
          "O(n!)"
        ],
        "explanation": "Logarithmic growth increases very slowly compared with polynomial, exponential, and factorial growth."
      },
      {
        "id": "module-final-b-1",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A hospital AI system splits millions of records into equal chunks and runs the same risk-scoring formula on each chunk. Which model is the best fit?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Backtracking",
          "Linear programming"
        ],
        "explanation": "The same computation is applied to independent data partitions."
      },
      {
        "id": "module-final-b-2",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A video editor applies the same filter to every frame block on a GPU. What is the best classification?",
        "answer": "Data parallelism using SIMD-style work",
        "wrong": [
          "Message passing with no data partitioning",
          "Greedy local selection",
          "Branch and bound search"
        ],
        "explanation": "The same operation is repeated over many independent data elements."
      },
      {
        "id": "module-final-b-3",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A web server handles login, payment, and notification jobs at the same time, and each job uses different logic. What is the best fit?",
        "answer": "Task parallelism",
        "wrong": [
          "Pure data parallelism",
          "O(1) direct access",
          "Linear programming"
        ],
        "explanation": "Different independent operations executing concurrently point to task parallelism."
      },
      {
        "id": "module-final-b-4",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A cluster has 200 nodes, each with its own memory, and nodes exchange work updates through MPI. Which model is this?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming",
          "Constant-space programming",
          "Greedy method"
        ],
        "explanation": "Separate memory spaces plus MPI are message-passing clues."
      },
      {
        "id": "module-final-b-5",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Four threads in one process update a shared transaction balance. What must be added to avoid inconsistent balances?",
        "answer": "Synchronization such as a lock",
        "wrong": [
          "More unsynchronized writes",
          "A factorial algorithm",
          "A public broadcast only"
        ],
        "explanation": "Shared updates need controlled access to avoid race conditions."
      },
      {
        "id": "module-final-b-6",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "An image-processing job has 1,000 chunks, but some chunks are much harder than others. What problem should the developer watch?",
        "answer": "Load imbalance",
        "wrong": [
          "No possible parallelism",
          "Big-Omega notation",
          "Only greedy recursion"
        ],
        "explanation": "Uneven work makes some processors idle while others keep running."
      },
      {
        "id": "module-final-b-7",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A process waits forever for a message that another process never sends. What kind of issue is most likely?",
        "answer": "Message deadlock",
        "wrong": [
          "Cache-friendly shared memory",
          "Constant time success",
          "Linear objective optimization"
        ],
        "explanation": "Message-passing programs can deadlock when waiting conditions are not satisfied."
      },
      {
        "id": "module-final-b-8",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A programmer wants to send one configuration value from a root process to all worker processes. Which operation type fits?",
        "answer": "Collective communication",
        "wrong": [
          "Point-to-point only",
          "Backtracking",
          "Quadratic space"
        ],
        "explanation": "Broadcasting to a group is collective communication."
      },
      {
        "id": "module-final-b-9",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A worker sends a result only to process 7. Which message-passing communication type is this?",
        "answer": "Point-to-point communication",
        "wrong": [
          "Collective communication",
          "Shared variable access",
          "Branch and bound"
        ],
        "explanation": "A specific sender-to-target pattern is point-to-point."
      },
      {
        "id": "module-final-b-10",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A shared-memory app becomes slower after adding more threads because they all compete for one lock. What is the best explanation?",
        "answer": "Synchronization contention reduces scalability",
        "wrong": [
          "Message passing removed all overhead",
          "Binary search became O(n!)",
          "The program stopped using memory"
        ],
        "explanation": "Too much lock contention can erase parallel speedup."
      },
      {
        "id": "module-final-b-11",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A program divides a large search tree into branches, but some branches depend on earlier choices and invalid paths must be abandoned. Which algorithm style fits?",
        "answer": "Backtracking",
        "wrong": [
          "Data parallelism only",
          "O(1) direct access",
          "Message broadcast"
        ],
        "explanation": "Trying a path and retreating when it fails is backtracking."
      },
      {
        "id": "module-final-b-12",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A delivery company wants the cheapest route and prunes any path already more expensive than the best current route. Which technique is being used?",
        "answer": "Branch and bound",
        "wrong": [
          "Shared memory only",
          "Greedy with no pruning",
          "Constant-space array creation"
        ],
        "explanation": "The bound lets the algorithm eliminate paths that cannot beat the current best."
      },
      {
        "id": "module-final-b-13",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A scheduling problem has a linear cost equation and linear resource constraints. What technique is most appropriate?",
        "answer": "Linear programming",
        "wrong": [
          "Backtracking only",
          "Message passing only",
          "Dynamic work stealing"
        ],
        "explanation": "Linear programming optimizes a linear objective under linear constraints."
      },
      {
        "id": "module-final-b-14",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A recursive Fibonacci implementation keeps recomputing the same values. Which technique is designed to fix that?",
        "answer": "Dynamic programming",
        "wrong": [
          "Greedy method",
          "Message deadlock",
          "O(n!) sorting"
        ],
        "explanation": "Dynamic programming stores and reuses overlapping subproblem results."
      },
      {
        "id": "module-final-b-15",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A sorting method splits an array, sorts the halves, then merges the halves. Which design technique is this?",
        "answer": "Divide and conquer",
        "wrong": [
          "Linear programming",
          "Point-to-point messaging",
          "Race condition"
        ],
        "explanation": "Split, recursively solve, and combine is divide and conquer."
      },
      {
        "id": "module-final-b-16",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A navigation app always chooses the currently closest next stop without reconsidering previous choices. Which method is this closest to?",
        "answer": "Greedy method",
        "wrong": [
          "Dynamic programming",
          "Backtracking",
          "Message passing"
        ],
        "explanation": "Greedy chooses the best immediate option and typically does not reconsider."
      },
      {
        "id": "module-final-b-17",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A classmate says greedy always gives the globally optimal answer. What is the best correction?",
        "answer": "Greedy can fail when the local best choice is not globally best",
        "wrong": [
          "Greedy always checks every possible solution",
          "Greedy is only for shared memory",
          "Greedy never makes choices"
        ],
        "explanation": "Greedy is efficient and simple, but it needs problem conditions that make local choices safe."
      },
      {
        "id": "module-final-b-18",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A security scan checks every pair of modules for compatibility using two nested loops. What time complexity should you expect?",
        "answer": "O(n^2)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Checking all pairs creates quadratic growth."
      }
    ],
    "everythingB": [
      {
        "id": "module-final-b-19",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A monitoring tool reads only the first log entry no matter how many logs exist. What time complexity is this action?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n log n)",
          "O(2^n)"
        ],
        "explanation": "The number of operations is fixed and does not grow with input size."
      },
      {
        "id": "module-final-b-20",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A sorted database repeatedly halves the remaining search range while looking for an ID. What time complexity is this?",
        "answer": "O(log n)",
        "wrong": [
          "O(n^2)",
          "O(n!)",
          "O(n^3)"
        ],
        "explanation": "Halving the search space is the signature of logarithmic time."
      },
      {
        "id": "module-final-b-21",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A program prints every item in a list once. What time complexity is most likely?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(n^2)",
          "O(2^n)"
        ],
        "explanation": "One pass through n items gives linear time."
      },
      {
        "id": "module-final-b-22",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Complexity Scenario",
        "prompt": "A merge-sort style algorithm divides data and combines sorted results. What typical complexity appears in many efficient sorting algorithms?",
        "answer": "O(n log n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Efficient comparison sorting is commonly O(n log n)."
      },
      {
        "id": "module-final-b-23",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A program creates an array of size n before processing. What space complexity is introduced by that array?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n!)"
        ],
        "explanation": "Memory grows in direct proportion to n."
      },
      {
        "id": "module-final-b-24",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A program creates an n by n table for dynamic programming. What space complexity is likely?",
        "answer": "O(n^2)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n) only"
        ],
        "explanation": "An n by n matrix contains n squared cells."
      },
      {
        "id": "module-final-b-25",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Space Complexity",
        "prompt": "A function only stores three integer variables regardless of input size. What space complexity is likely?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "explanation": "A fixed number of variables is constant space."
      },
      {
        "id": "module-final-b-26",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes an upper bound or worst-case-style ceiling?",
        "answer": "Big-O",
        "wrong": [
          "Big-Omega",
          "Big-Theta only",
          "SIMD"
        ],
        "explanation": "Big-O gives an upper bound on growth."
      },
      {
        "id": "module-final-b-27",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes a lower bound or minimum growth guarantee?",
        "answer": "Big-Omega",
        "wrong": [
          "Big-O",
          "Big-Theta only",
          "MPI"
        ],
        "explanation": "Big-Omega gives a lower bound."
      },
      {
        "id": "module-final-b-28",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation describes a tight bound with both upper and lower limits?",
        "answer": "Big-Theta",
        "wrong": [
          "Big-O only",
          "Big-Omega only",
          "OpenMP"
        ],
        "explanation": "Big-Theta is used when the growth is bounded above and below by the same class."
      },
      {
        "id": "module-final-b-29",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A team uses OpenMP pragmas to parallelize loops on a multi-core machine with shared RAM. Which model is most likely?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message-passing programming",
          "Blockchain consensus",
          "Linear programming"
        ],
        "explanation": "OpenMP is commonly used for shared-memory multi-core parallelism."
      },
      {
        "id": "module-final-b-30",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A team uses MPI to coordinate jobs across machines with separate memory. Which model is most likely?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory programming only",
          "Backtracking only",
          "O(1) space only"
        ],
        "explanation": "MPI is the standard clue for message passing."
      },
      {
        "id": "module-final-b-31",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Message Passing",
        "prompt": "A developer says asynchronous message passing means no synchronization is ever needed. What is the best response?",
        "answer": "Processes still need explicit coordination around message receipt",
        "wrong": [
          "Asynchronous means all processes share memory",
          "Asynchronous means no messages are sent",
          "Asynchronous converts all code to O(1)"
        ],
        "explanation": "Asynchronous communication can reduce waiting, but coordination is still explicit."
      },
      {
        "id": "module-final-b-32",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Shared Memory",
        "prompt": "A shared array is updated by many threads, but each thread writes to a separate index and no thread reads incomplete results. What is the likely benefit?",
        "answer": "Reduced synchronization need compared with shared writes to one location",
        "wrong": [
          "Guaranteed factorial complexity",
          "Mandatory message deadlock",
          "No memory access"
        ],
        "explanation": "Independent partitions reduce conflicts, though final coordination may still be needed."
      },
      {
        "id": "module-final-b-33",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "A GPU applies one instruction to thousands of pixels at the same time. Which taxonomy idea matches this?",
        "answer": "SIMD",
        "wrong": [
          "MIMD only",
          "SISD only",
          "Branch and bound"
        ],
        "explanation": "Single Instruction, Multiple Data fits the GPU pixel example."
      },
      {
        "id": "module-final-b-34",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "A normal single-core program executes one instruction stream over one data stream. Which Flynn category is closest?",
        "answer": "SISD",
        "wrong": [
          "SIMD",
          "MISD",
          "MIMD"
        ],
        "explanation": "SISD means Single Instruction, Single Data."
      },
      {
        "id": "module-final-b-35",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "Different processors run different tasks on different data at the same time. Which Flynn category is closest?",
        "answer": "MIMD",
        "wrong": [
          "SISD",
          "SIMD",
          "Constant space"
        ],
        "explanation": "MIMD means Multiple Instruction, Multiple Data."
      },
      {
        "id": "module-final-b-36",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Taxonomy",
        "prompt": "Different processors run different analyses on the same sensor stream. Which Flynn category is closest?",
        "answer": "MISD",
        "wrong": [
          "SISD",
          "SIMD",
          "O(n log n)"
        ],
        "explanation": "MISD means Multiple Instruction, Single Data, a rare but testable category."
      },
      {
        "id": "module-final-b-37",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Granularity",
        "prompt": "A task-parallel program has many small tasks, and scheduling overhead becomes large compared with useful computation. What issue is this?",
        "answer": "Too fine-grained task decomposition",
        "wrong": [
          "Perfect load balancing",
          "Constant-time execution",
          "No synchronization"
        ],
        "explanation": "Very fine-grained tasks can spend too much time on overhead."
      },
      {
        "id": "module-final-b-38",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "A distributed program sends huge messages every millisecond and spends more time communicating than computing. What factor is hurting performance?",
        "answer": "Communication overhead",
        "wrong": [
          "Greedy optimality",
          "O(1) direct access",
          "Backtracking success"
        ],
        "explanation": "Excessive data transfer can dominate runtime."
      },
      {
        "id": "module-final-b-39",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "A program gets faster when processors are added, but not proportionally. Which explanation is most realistic?",
        "answer": "Coordination, communication, and synchronization overhead reduce ideal speedup",
        "wrong": [
          "Parallelism always gives perfect speedup",
          "More processors remove all memory limits",
          "The program becomes serial by definition"
        ],
        "explanation": "Parallel systems often have overhead and non-parallel portions."
      },
      {
        "id": "module-final-b-40",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Performance",
        "prompt": "Which metric describes how effectively processors are used in a parallel system?",
        "answer": "Efficiency",
        "wrong": [
          "Voltage",
          "Screen resolution",
          "Database color"
        ],
        "explanation": "Efficiency compares useful speedup with processor resources used."
      },
      {
        "id": "module-final-b-41",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Granularity",
        "prompt": "A program divides a 4K video into independent frames processed by many computers. What phrase best fits?",
        "answer": "Coarse-grained parallel workload",
        "wrong": [
          "One shared lock workload",
          "O(1) direct access only",
          "No parallelism"
        ],
        "explanation": "Independent large tasks are coarse-grained and suited to distributed processing."
      },
      {
        "id": "module-final-b-42",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Data Parallelism",
        "prompt": "A data-parallel workload needs almost no communication. What is the performance advantage?",
        "answer": "Less communication overhead",
        "wrong": [
          "More message deadlocks",
          "More lock contention",
          "Factorial growth"
        ],
        "explanation": "Minimal communication helps preserve speedup."
      },
      {
        "id": "module-final-b-43",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Task Parallelism",
        "prompt": "A task-parallel system has tasks whose durations are unknown until runtime. Which scheduling idea helps most?",
        "answer": "Dynamic load balancing",
        "wrong": [
          "Fixed one-time partitioning only",
          "No scheduling",
          "Only linear programming"
        ],
        "explanation": "Dynamic balancing adapts as tasks vary."
      },
      {
        "id": "module-final-b-44",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Message Passing",
        "prompt": "Which option is the clearest example of collective communication?",
        "answer": "Reducing partial sums from all workers into one total",
        "wrong": [
          "Thread A writes x = 5",
          "A single direct array lookup",
          "A Sudoku solver backtracks"
        ],
        "explanation": "Reduce gathers and combines data from many processes."
      },
      {
        "id": "module-final-b-45",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A programmer moves a program from one multi-core server to a cluster of independent machines. Which shift is most likely needed?",
        "answer": "From shared-memory assumptions to message-passing communication",
        "wrong": [
          "From O(n) to O(1) automatically",
          "From data structures to no data",
          "From messages to one global variable"
        ],
        "explanation": "Clusters usually do not share one address space across machines."
      },
      {
        "id": "module-final-b-46",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Which model is best if all worker units must frequently update one shared object with low-latency access?",
        "answer": "Shared-memory programming with careful synchronization",
        "wrong": [
          "Message passing with no communication",
          "Linear programming only",
          "Backtracking only"
        ],
        "explanation": "Low-latency shared access fits shared memory, but synchronization remains necessary."
      },
      {
        "id": "module-final-b-47",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "Which model is best if workers are on different networked machines and memory is not shared?",
        "answer": "Message-passing programming",
        "wrong": [
          "Pure shared memory",
          "O(1) constant space only",
          "Single-threaded SISD only"
        ],
        "explanation": "Separate networked nodes usually coordinate by messages."
      },
      {
        "id": "module-final-b-48",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Concurrency Trap",
        "prompt": "What is the most likely bug if two tasks keep responding to each other but never make progress?",
        "answer": "Livelock",
        "wrong": [
          "Linear time",
          "Direct access",
          "Perfect scalability"
        ],
        "explanation": "Livelock means activity continues but no useful progress is made."
      },
      {
        "id": "module-final-b-49",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Concurrency Trap",
        "prompt": "What is the most likely bug if two threads each hold one lock and wait forever for the other lock?",
        "answer": "Deadlock",
        "wrong": [
          "SIMD",
          "O(n log n)",
          "Greedy choice"
        ],
        "explanation": "Deadlock occurs when each side waits for resources held by the other."
      },
      {
        "id": "module-final-b-50",
        "source": "PaD Module Finals",
        "set": "B",
        "tag": "Scenario",
        "prompt": "A cloud analytics job partitions data by user ID and runs the same aggregation on every partition. Which concept is strongest?",
        "answer": "Data parallelism",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "SISD"
        ],
        "explanation": "Partitioned data with identical aggregation is data parallel."
      },
      {
        "id": "module-final-c-1",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which answer is most accurate: shared-memory programming simplifies communication because...",
        "answer": "Threads can directly read and write shared data structures",
        "wrong": [
          "It removes the need for synchronization",
          "It works only across remote clusters",
          "It forbids shared variables"
        ],
        "explanation": "Shared memory simplifies data exchange, but it does not remove synchronization needs."
      },
      {
        "id": "module-final-c-2",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which statement is false about message-passing programming?",
        "answer": "Processes must share the same address space",
        "wrong": [
          "Processes exchange messages",
          "Synchronization is explicit",
          "MPI is a common standard"
        ],
        "explanation": "Message passing is defined by separate memory spaces, not a shared address space."
      },
      {
        "id": "module-final-c-3",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "A question says 'same operation, many data items.' Which answer should you suspect first?",
        "answer": "Data parallelism",
        "wrong": [
          "Task parallelism",
          "Branch and bound",
          "Linear programming"
        ],
        "explanation": "That phrase is the exam shortcut for data parallelism."
      },
      {
        "id": "module-final-c-4",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "A question says 'many independent operations, different work.' Which answer should you suspect first?",
        "answer": "Task parallelism",
        "wrong": [
          "Data parallelism",
          "SIMD only",
          "O(log n)"
        ],
        "explanation": "Distinct independent work points to task parallelism."
      },
      {
        "id": "module-final-c-5",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which item is not a shared-memory synchronization mechanism from the lesson?",
        "answer": "Broadcast",
        "wrong": [
          "Lock",
          "Semaphore",
          "Barrier"
        ],
        "explanation": "Broadcast is a collective message-passing operation; locks, semaphores, and barriers coordinate shared memory."
      },
      {
        "id": "module-final-c-6",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Tricky",
        "prompt": "Which item is not a message-passing library or standard listed in the lesson?",
        "answer": "OpenMP",
        "wrong": [
          "MPI",
          "Open MPI",
          "Microsoft MPI"
        ],
        "explanation": "OpenMP is usually associated with shared-memory parallel programming, not message passing."
      },
      {
        "id": "module-final-c-7",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Debugging",
        "prompt": "Which choice best describes why shared-memory debugging can be difficult?",
        "answer": "Race conditions may be hard to reproduce",
        "wrong": [
          "There are no shared variables",
          "Messages always arrive in perfect order",
          "No concurrency is possible"
        ],
        "explanation": "Timing-dependent race conditions can appear inconsistently."
      },
      {
        "id": "module-final-c-8",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Debugging",
        "prompt": "Which choice best describes why message-passing debugging can be difficult?",
        "answer": "Message order and waiting behavior can create subtle failures",
        "wrong": [
          "All data is automatically consistent",
          "Only one process is allowed",
          "It never uses communication"
        ],
        "explanation": "Deadlocks and unexpected message ordering are common message-passing debugging traps."
      },
      {
        "id": "module-final-c-9",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "A problem can be split into subproblems, but the same subproblem appears many times. Which technique usually beats plain divide and conquer?",
        "answer": "Dynamic programming",
        "wrong": [
          "Greedy method",
          "Point-to-point messaging",
          "Constant time"
        ],
        "explanation": "Dynamic programming stores repeated subproblem results."
      },
      {
        "id": "module-final-c-10",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for backtracking?",
        "answer": "Try a candidate, retreat when constraints fail",
        "wrong": [
          "Choose local best and never reconsider",
          "Apply same operation to pixels",
          "Send a message to process 3"
        ],
        "explanation": "Backtracking moves forward and returns when a path cannot lead to a valid solution."
      },
      {
        "id": "module-final-c-11",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for branch and bound?",
        "answer": "Prune solution paths using a bound and current best answer",
        "wrong": [
          "Split only into equal data partitions",
          "Read the first array item",
          "Broadcast to all workers"
        ],
        "explanation": "Bounds eliminate parts of the search space that cannot improve the solution."
      },
      {
        "id": "module-final-c-12",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which phrase is the best clue for linear programming?",
        "answer": "Linear objective and linear constraints",
        "wrong": [
          "Many shared variables",
          "Unexpected message order",
          "Nested loops only"
        ],
        "explanation": "Linear programming is defined by linear objective and constraint functions."
      },
      {
        "id": "module-final-c-13",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "A classmate says divide and conquer and dynamic programming are identical because both use subproblems. What is the best distinction?",
        "answer": "Dynamic programming reuses overlapping subproblem solutions",
        "wrong": [
          "Divide and conquer never uses recursion",
          "Dynamic programming is only for networks",
          "Divide and conquer always uses locks"
        ],
        "explanation": "DP is distinguished by storing/reusing repeated subproblems."
      },
      {
        "id": "module-final-c-14",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for binary search?",
        "answer": "Divide and conquer",
        "wrong": [
          "Backtracking",
          "Linear programming",
          "Message passing"
        ],
        "explanation": "Binary search repeatedly divides the search interval."
      },
      {
        "id": "module-final-c-15",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for Sudoku?",
        "answer": "Backtracking",
        "wrong": [
          "Greedy method only",
          "Data parallelism only",
          "O(1) direct access"
        ],
        "explanation": "Sudoku solvers often try candidates and backtrack when constraints fail."
      },
      {
        "id": "module-final-c-16",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely when choosing the best current component and never reconsidering it?",
        "answer": "Greedy method",
        "wrong": [
          "Dynamic programming",
          "Branch and bound",
          "Shared memory"
        ],
        "explanation": "The defining clue is choosing the current best-looking option."
      },
      {
        "id": "module-final-c-17",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which algorithm technique is most likely for optimizing maximum profit with linear restrictions?",
        "answer": "Linear programming",
        "wrong": [
          "Message passing",
          "Backtracking only",
          "SIMD"
        ],
        "explanation": "Maximum profit under linear constraints is a linear programming scenario."
      },
      {
        "id": "module-final-c-18",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Algorithms",
        "prompt": "Which technique searches the entire solution space more intelligently by eliminating impossible or weak areas?",
        "answer": "Branch and bound",
        "wrong": [
          "Constant time",
          "Point-to-point communication",
          "Direct array lookup"
        ],
        "explanation": "Branch and bound explores possible solutions while pruning using bounds."
      },
      {
        "id": "module-final-c-19",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which complexity class grows slowest among the options?",
        "answer": "O(1)",
        "wrong": [
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "explanation": "Constant time does not grow with input size."
      },
      {
        "id": "module-final-c-20",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which complexity class grows fastest among the options?",
        "answer": "O(n!)",
        "wrong": [
          "O(n^2)",
          "O(n log n)",
          "O(log n)"
        ],
        "explanation": "Factorial time grows extremely fast and is worse than the listed polynomial/logarithmic classes."
      },
      {
        "id": "module-final-c-21",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which pair is in correct increasing growth order?",
        "answer": "O(1), O(log n), O(n), O(n log n)",
        "wrong": [
          "O(n^2), O(n), O(log n), O(1)",
          "O(n!), O(2^n), O(n), O(1)",
          "O(log n), O(1), O(n^2), O(n)"
        ],
        "explanation": "The usual order is constant, logarithmic, linear, log-linear."
      },
      {
        "id": "module-final-c-22",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "A loop inside a loop inside a loop over n items is most likely what?",
        "answer": "O(n^3)",
        "wrong": [
          "O(log n)",
          "O(1)",
          "O(n log n)"
        ],
        "explanation": "Three nested n-sized loops imply cubic time."
      },
      {
        "id": "module-final-c-23",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Trying every subset of n items is commonly associated with what growth?",
        "answer": "O(2^n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n)"
        ],
        "explanation": "Each item often creates an include/exclude choice, producing exponential growth."
      },
      {
        "id": "module-final-c-24",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Trying every ordering of n items is commonly associated with what growth?",
        "answer": "O(n!)",
        "wrong": [
          "O(n)",
          "O(log n)",
          "O(n log n)"
        ],
        "explanation": "Every permutation of n items produces factorial growth."
      },
      {
        "id": "module-final-c-25",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Asymptotic Notation",
        "prompt": "Which notation is the tightest statement when an algorithm is both O(n log n) and Omega(n log n)?",
        "answer": "Theta(n log n)",
        "wrong": [
          "O(1)",
          "Omega(1) only",
          "SIMD"
        ],
        "explanation": "Matching upper and lower bounds give a Theta bound."
      },
      {
        "id": "module-final-c-26",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Asymptotic Notation",
        "prompt": "If an algorithm has worst-case O(n^2), what does that most directly tell you?",
        "answer": "Its runtime is bounded above by a quadratic function for large input",
        "wrong": [
          "It always runs exactly n^2 steps",
          "It has no lower bound",
          "It must use message passing"
        ],
        "explanation": "Big-O is an upper bound, not necessarily an exact count."
      },
      {
        "id": "module-final-c-27",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(n) time?",
        "answer": "Scanning every item once",
        "wrong": [
          "Directly reading array[0]",
          "Binary searching sorted data",
          "Trying every permutation"
        ],
        "explanation": "A single pass through all items is linear."
      },
      {
        "id": "module-final-c-28",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(log n) time?",
        "answer": "Binary search",
        "wrong": [
          "Printing all pairs",
          "Creating an n by n matrix",
          "Trying all subsets"
        ],
        "explanation": "Binary search repeatedly halves the possible range."
      },
      {
        "id": "module-final-c-29",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "Which is the best example of O(n log n) time?",
        "answer": "Efficient comparison sorting such as merge sort",
        "wrong": [
          "Direct access",
          "Two nested loops over all pairs",
          "Trying every permutation"
        ],
        "explanation": "Merge sort and many efficient sorts are O(n log n)."
      },
      {
        "id": "module-final-c-30",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Space Complexity",
        "prompt": "Which is the best example of O(n^2) space?",
        "answer": "Creating a square matrix of size n by n",
        "wrong": [
          "Using one sum variable",
          "Reading only the first element",
          "Sending one direct message"
        ],
        "explanation": "An n by n matrix stores n squared cells."
      },
      {
        "id": "module-final-c-31",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "What is the main difference between time and space complexity?",
        "answer": "Time measures runtime growth; space measures memory growth",
        "wrong": [
          "Time measures colors; space measures processors",
          "Both only mean Big-Omega",
          "Space complexity ignores input size"
        ],
        "explanation": "Time and space analyze different resource growth."
      },
      {
        "id": "module-final-c-32",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Complexity",
        "prompt": "A program is fast on small input but explodes as n grows because it checks permutations. What is the likely problem?",
        "answer": "Factorial growth",
        "wrong": [
          "Constant time",
          "No synchronization",
          "SIMD efficiency"
        ],
        "explanation": "Permutation-based search often has O(n!) behavior."
      },
      {
        "id": "module-final-c-33",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A distributed cluster processes work successfully even when one node fails and others continue. Which distributed-systems property is this?",
        "answer": "Fault tolerance",
        "wrong": [
          "Race condition",
          "Linear programming",
          "Constant space"
        ],
        "explanation": "Fault tolerance means the system continues despite component failures."
      },
      {
        "id": "module-final-c-34",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A tightly connected group of computers works as a single system for HPC. What is this called?",
        "answer": "Cluster computing",
        "wrong": [
          "Greedy method",
          "Direct array access",
          "Single-core SISD"
        ],
        "explanation": "Cluster computing uses interconnected computers as one system, often for HPC."
      },
      {
        "id": "module-final-c-35",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "A large resource-sharing system spans multiple organizations and locations. What is this called?",
        "answer": "Grid computing",
        "wrong": [
          "Shared local variable",
          "Constant-time lookup",
          "Backtracking only"
        ],
        "explanation": "Grid computing extends resource sharing across wide areas and organizations."
      },
      {
        "id": "module-final-c-36",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "Which architecture has every node act as both client and server?",
        "answer": "Peer-to-peer architecture",
        "wrong": [
          "Client-server only",
          "SISD",
          "Linear programming"
        ],
        "explanation": "P2P nodes can serve and request resources without a central server."
      },
      {
        "id": "module-final-c-37",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "Which architecture relies on centralized services responding to client requests?",
        "answer": "Client-server architecture",
        "wrong": [
          "Peer-to-peer only",
          "Backtracking",
          "SIMD"
        ],
        "explanation": "Client-server has clients requesting services from a server."
      },
      {
        "id": "module-final-c-38",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "MapReduce's Map phase primarily does what?",
        "answer": "Processes split data chunks in parallel",
        "wrong": [
          "Combines all final results only",
          "Locks one shared variable",
          "Chooses a local greedy option"
        ],
        "explanation": "Map splits work into chunks processed in parallel."
      },
      {
        "id": "module-final-c-39",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Distributed Concepts",
        "prompt": "MapReduce's Reduce phase primarily does what?",
        "answer": "Aggregates intermediate results",
        "wrong": [
          "Applies a pixel filter to one image only",
          "Creates locks",
          "Runs binary search"
        ],
        "explanation": "Reduce combines mapped outputs into final results."
      },
      {
        "id": "module-final-c-40",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Model Comparison",
        "prompt": "Which statement about shared memory vs message passing is most accurate?",
        "answer": "Shared memory can be faster locally, while message passing fits distributed nodes",
        "wrong": [
          "Message passing always shares one address space",
          "Shared memory never needs synchronization",
          "Both are exactly the same"
        ],
        "explanation": "This captures the key tradeoff between speed and distributed scalability."
      },
      {
        "id": "module-final-c-41",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Model Comparison",
        "prompt": "Which statement about data and task parallelism is most accurate?",
        "answer": "Data parallelism repeats one operation over data; task parallelism runs distinct tasks",
        "wrong": [
          "They are identical terms",
          "Data parallelism means no data exists",
          "Task parallelism means only one task runs"
        ],
        "explanation": "This is the cleanest distinction."
      },
      {
        "id": "module-final-c-42",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Synchronization",
        "prompt": "Which choice is most likely to create a race condition?",
        "answer": "Two threads writing the same shared variable without synchronization",
        "wrong": [
          "Binary search on a read-only sorted array",
          "A process receiving a message",
          "A linear objective function"
        ],
        "explanation": "Concurrent unsynchronized shared writes are the classic race-condition setup."
      },
      {
        "id": "module-final-c-43",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Performance",
        "prompt": "Which choice is most likely to create communication overhead?",
        "answer": "Processes frequently exchange large messages across a network",
        "wrong": [
          "A thread reads a local variable once",
          "An algorithm uses O(1) space",
          "A direct array access"
        ],
        "explanation": "Network message exchange costs time."
      },
      {
        "id": "module-final-c-44",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Performance",
        "prompt": "Which choice best explains why increasing processors may not improve performance proportionally?",
        "answer": "Some work is serial and coordination adds overhead",
        "wrong": [
          "All parallel programs are automatically perfect",
          "Big-O always becomes O(1)",
          "Memory disappears"
        ],
        "explanation": "Real speedup is limited by serial portions and overhead."
      },
      {
        "id": "module-final-c-45",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Granularity",
        "prompt": "A program divides tasks into extremely small pieces, causing scheduling and communication to dominate. What is the issue?",
        "answer": "Fine-grained overhead",
        "wrong": [
          "Perfect coarse-grained balance",
          "No parallelism possible",
          "Big-Theta notation"
        ],
        "explanation": "Too-small work units can cost more to manage than execute."
      },
      {
        "id": "module-final-c-46",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Granularity",
        "prompt": "A program divides work into large independent frames for rendering. What granularity is this?",
        "answer": "Coarse-grained",
        "wrong": [
          "Fine-grained every instruction",
          "Constant-space only",
          "No workload"
        ],
        "explanation": "Large independent chunks are coarse-grained."
      },
      {
        "id": "module-final-c-47",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Shared Memory",
        "prompt": "Which model fits a multi-core CPU where threads share a global memory space?",
        "answer": "Shared-memory programming",
        "wrong": [
          "Message passing across clusters only",
          "Grid computing only",
          "Linear programming"
        ],
        "explanation": "One machine with shared memory and multiple cores is the shared-memory setting."
      },
      {
        "id": "module-final-c-48",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Message Passing",
        "prompt": "Which model fits a networked cluster where each node has its own local memory?",
        "answer": "Message-passing programming",
        "wrong": [
          "Shared-memory only",
          "O(1) only",
          "Greedy method only"
        ],
        "explanation": "Separate local memories and network communication point to message passing."
      },
      {
        "id": "module-final-c-49",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Taxonomy",
        "prompt": "Which phrase is the clearest sign of SIMD?",
        "answer": "One instruction applied to many data values",
        "wrong": [
          "Many instructions on no data",
          "One thread waits for one lock",
          "A linear constraint is optimized"
        ],
        "explanation": "SIMD expands to Single Instruction, Multiple Data."
      },
      {
        "id": "module-final-c-50",
        "source": "PaD Module Finals",
        "set": "C",
        "tag": "Taxonomy",
        "prompt": "Which phrase is the clearest sign of MIMD?",
        "answer": "Different instructions operating on different data streams",
        "wrong": [
          "One instruction and one data stream",
          "A single direct array access",
          "A square matrix allocation"
        ],
        "explanation": "MIMD expands to Multiple Instruction, Multiple Data."
      },
      {
        "id": "quiz-a-1",
        "number": 1,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is the primary characteristic that defines message-passing programming as distinct from shared-memory programming?",
        "answer": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other.",
        "wrong": [
          "Processes share a distributed cache layer that all nodes can read from and write to simultaneously.",
          "Processes communicate through a central coordinator node that manages all data transfers between workers.",
          "Processes share a single common memory space and communicate by reading and writing the same variables directly."
        ],
        "explanation": "Processes run in separate memory spaces and communicate explicitly by sending and receiving messages to each other."
      },
      {
        "id": "quiz-a-2",
        "number": 2,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement best describes asynchronous communication in a message-passing program?",
        "answer": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it.",
        "wrong": [
          "A sending process suspends all computation and remains idle until the receiving process explicitly confirms the message arrived.",
          "All participating processes coordinate to send and receive messages at a pre-agreed synchronized time checkpoint.",
          "The operating system buffers all messages and delivers them in the exact sequence they were originally transmitted."
        ],
        "explanation": "A sending process posts its message and immediately continues executing other work without waiting for the receiver to accept it."
      },
      {
        "id": "quiz-a-3",
        "number": 3,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "In message-passing programming, what accurately describes point-to-point communication?",
        "answer": "One process sends a message to one specific, individually addressed target process for direct exchange.",
        "wrong": [
          "Every process in the group sends its local data to every other process simultaneously in a ring pattern.",
          "A group of processes collectively computes a result and delivers it to all members of the communicator.",
          "One root process distributes identical copies of a message to every other process in the communicator group."
        ],
        "explanation": "One process sends a message to one specific, individually addressed target process for direct exchange."
      },
      {
        "id": "quiz-a-4",
        "number": 4,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What does the acronym MPI stand for in high-performance parallel computing?",
        "answer": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming.",
        "wrong": [
          "Memory Partitioned Interface, the specification for dividing RAM equally among parallel worker threads.",
          "Modular Parallel Implementation, a framework for automatically decomposing sequential programs into tasks.",
          "Multi-Process Integration, the standard protocol for combining results across multi-core processors."
        ],
        "explanation": "Message Passing Interface, the widely adopted standard library for distributed-memory parallel programming."
      },
      {
        "id": "quiz-a-5",
        "number": 5,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A 500-node cluster runs a weather simulation where each node independently processes one geographic region and exchanges boundary values only with adjacent nodes. Which parallel paradigm fits best?",
        "answer": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls.",
        "wrong": [
          "Shared-memory using Intel TBB, because the threading library efficiently manages work queues across all cluster nodes.",
          "Shared-memory using POSIX threads, because pthreads allow fine-grained control over each node's regional data buffer.",
          "Shared-memory using OpenMP, because compiler directives automatically distribute the regional computation across all 500 nodes."
        ],
        "explanation": "Message-passing using MPI, because each node has separate memory and communicates boundary data via explicit send and receive calls."
      },
      {
        "id": "quiz-a-6",
        "number": 6,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly describes a key scalability advantage of message-passing programming over shared-memory programming?",
        "answer": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly.",
        "wrong": [
          "Message-passing programs use a global shared bus so that adding more nodes directly increases available memory bandwidth.",
          "Message-passing programs depend on a shared heap segment that grows proportionally as more compute nodes join the cluster.",
          "Message-passing programs run on a single machine with shared RAM and scale well because the OS manages lock contention automatically."
        ],
        "explanation": "Message-passing programs scale across hundreds of distributed nodes because each process owns private memory and communicates explicitly."
      },
      {
        "id": "quiz-a-7",
        "number": 7,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "What is collective communication in message-passing systems and which operation is an example of it?",
        "answer": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process.",
        "wrong": [
          "Collective communication describes the technique of buffering multiple point-to-point messages to reduce individual transmission overhead.",
          "Collective communication describes a fault-tolerance protocol where surviving processes redistribute work from a failed process automatically.",
          "Collective communication describes one process sending a private message to one specific partner, as in a standard MPI_Send call."
        ],
        "explanation": "Collective communication describes group-level operations involving all processes, such as MPI_Bcast which sends one value to every process."
      },
      {
        "id": "quiz-a-8",
        "number": 8,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Two MPI processes — P0 and P1 — each call a blocking MPI_Send to the other before calling MPI_Recv. Neither process ever proceeds past its send call and the program freezes permanently. What condition has occurred and how is it resolved?",
        "answer": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend.",
        "wrong": [
          "A scheduling conflict has occurred; the fix is to assign each process to a dedicated CPU core using processor affinity settings.",
          "A collective communication mismatch has occurred; the fix is to replace MPI_Send with MPI_Bcast so both processes receive the message.",
          "A memory overflow has occurred because each blocking send allocated a buffer larger than the available RAM on each node."
        ],
        "explanation": "A message deadlock has occurred; the fix is to reorder calls so one process sends while the other receives, or to use non-blocking MPI_Isend."
      },
      {
        "id": "quiz-a-9",
        "number": 9,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A financial HPC cluster shows no speedup gain after 150 nodes even when 50 more nodes are added. The computation per node remains constant but inter-node messaging has grown. What does this indicate about the message-passing workload?",
        "answer": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide.",
        "wrong": [
          "The financial dataset is too small for the cluster size, so each extra node receives zero work items and sits idle during the run.",
          "The network switch is running at capacity so the OS automatically throttles new nodes to prevent packet loss on the interconnect.",
          "The MPI library reached its maximum registered process count of 150 and stopped accepting new worker registrations."
        ],
        "explanation": "Communication overhead between processes is growing fast enough to cancel out the computational benefit that the extra nodes provide."
      },
      {
        "id": "quiz-a-10",
        "number": 10,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "Which statement correctly identifies a significant debugging challenge that is specific to message-passing programs?",
        "answer": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently.",
        "wrong": [
          "Message-passing programs share a global heap, so memory corruption in one process is immediately visible and easy to isolate.",
          "Message-passing programs always execute sequentially on one core, so the debugger can single-step through every instruction in order.",
          "Message-passing programs store all communication logs in a shared database, giving the developer a complete audit trail of every exchange."
        ],
        "explanation": "Message-passing programs can suffer from deadlocks or non-deterministic message ordering, making bugs difficult to reproduce consistently."
      },
      {
        "id": "quiz-a-11",
        "number": 11,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "How is synchronization between processes handled in the message-passing programming model?",
        "answer": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes.",
        "wrong": [
          "Synchronization is fully automatic; the MPI runtime inserts barriers between every communication call without developer intervention.",
          "Synchronization is unnecessary because each process runs in complete isolation and never needs to coordinate timing with any peer.",
          "Synchronization is handled by a dedicated master process that polls all workers and issues clock signals at fixed time intervals."
        ],
        "explanation": "Synchronization is explicit; processes deliberately issue send, receive, or barrier calls to coordinate their activities with other processes."
      },
      {
        "id": "quiz-a-12",
        "number": 12,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Message-Passing Programming",
        "prompt": "A physics simulation on 1,000 nodes produces partial results on each node. At the end, all partial sums must be totaled into a single global result held on Node 0. Which MPI collective operation is the correct and most efficient choice?",
        "answer": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result.",
        "wrong": [
          "MPI_Bcast, where Node 0 transmits its partial result to all other nodes so every process holds the same starting value.",
          "MPI_Scatter, where Node 0 breaks a large dataset into chunks and distributes one unique chunk to each of the 1,000 nodes.",
          "MPI_Alltoall, where every node exchanges its partial result with every other node so all nodes hold all partial sums."
        ],
        "explanation": "MPI_Reduce, where all processes send their partial values to Node 0 which combines them using a SUM operation into one result."
      },
      {
        "id": "quiz-a-13",
        "number": 13,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What are the three sequential steps that the Divide and Conquer algorithm technique performs at each level of recursion?",
        "answer": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer.",
        "wrong": [
          "Initialize the data structure, process each element sequentially, then output the final combined result to storage.",
          "Partition the input data evenly, sort each partition with an insertion pass, then merge adjacent sorted partitions repeatedly.",
          "Select the optimal sub-problem to solve first, execute it greedily, then propagate the result to dependent sub-problems."
        ],
        "explanation": "Divide the problem into smaller sub-problems, conquer each sub-problem recursively, then combine their solutions into the final answer."
      },
      {
        "id": "quiz-a-14",
        "number": 14,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which algorithm design technique makes the locally optimal choice at each decision step and never revisits a previous decision?",
        "answer": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices.",
        "wrong": [
          "Dynamic Programming, which stores every sub-problem solution in a table and reuses those stored answers in future computations.",
          "Backtracking, which explores each candidate solution fully and retreats to the previous checkpoint when a dead end is encountered.",
          "Branch and Bound, which maintains a priority queue of partial solutions ranked by their lower-bound cost estimate."
        ],
        "explanation": "The Greedy Method, which always selects the best-looking option at the current step without reconsidering earlier choices."
      },
      {
        "id": "quiz-a-15",
        "number": 15,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "What is the key distinguishing difference between Dynamic Programming and the Divide and Conquer technique?",
        "answer": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently.",
        "wrong": [
          "Divide and Conquer stores solutions to sub-problems in a lookup table while Dynamic Programming always recomputes them from scratch.",
          "Dynamic Programming works only on graph problems while Divide and Conquer applies only to array and sorting problems.",
          "Divide and Conquer requires distributed memory clusters while Dynamic Programming runs only on shared-memory multi-core systems."
        ],
        "explanation": "Dynamic Programming stores and reuses overlapping sub-problem solutions, while Divide and Conquer solves each sub-problem independently."
      },
      {
        "id": "quiz-a-16",
        "number": 16,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which description most accurately defines how the Backtracking algorithm works?",
        "answer": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails.",
        "wrong": [
          "The algorithm builds a priority queue of candidate solutions ranked by their estimated cost and processes the cheapest candidate first.",
          "The algorithm expresses the problem as a set of linear constraints and finds the assignment of variables that satisfies all constraints optimally.",
          "The algorithm divides the solution space into two halves repeatedly and processes each half on a separate processor simultaneously."
        ],
        "explanation": "The algorithm starts with a promising candidate, advances step by step checking constraints, and retreats one level when a constraint fails."
      },
      {
        "id": "quiz-a-17",
        "number": 17,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Which real-world combinatorial puzzle is the most classically cited example of the Backtracking algorithm in computer science textbooks?",
        "answer": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen.",
        "wrong": [
          "The Fibonacci Series problem, where each term depends on the sum of the two immediately preceding terms in the sequence.",
          "The Travelling Salesman Problem, where the total distance of a route connecting all cities must be minimized globally.",
          "The Shortest Path Problem, where the minimum-cost route between two nodes in a weighted graph must be identified."
        ],
        "explanation": "The Eight Queens Problem, where eight chess queens must be placed on a board so that no queen threatens any other queen."
      },
      {
        "id": "quiz-a-18",
        "number": 18,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A delivery company must find the minimum-distance route visiting 12 cities. The solution space is enormous. Which design technique intelligently prunes unpromising routes without evaluating every possibility?",
        "answer": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found.",
        "wrong": [
          "The Greedy Method, which builds the route one city at a time by always traveling to the nearest unvisited city from the current location.",
          "Dynamic Programming, which breaks the route into overlapping city-pair sub-problems and stores the shortest sub-route for each pair.",
          "Linear Programming, which models the routing decision as a set of linear equations and solves for the assignment that minimizes total distance."
        ],
        "explanation": "Branch and Bound, which explores partial routes and discards any branch whose lower-bound cost already exceeds the best complete route found."
      },
      {
        "id": "quiz-a-19",
        "number": 19,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "The Fibonacci algorithm (Fib(n) = Fib(n-1) + Fib(n-2)) implemented with a lookup table to avoid repeated computation is a classic example of which technique?",
        "answer": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls.",
        "wrong": [
          "Backtracking, because the recursion explores multiple candidate values before settling on the correct Fibonacci term at depth n.",
          "Branch and Bound, because the recursion tree branches into two sub-calls and prunes branches where Fib values are already known.",
          "Divide and Conquer, because the problem is split into two independent halves that are solved separately and their results summed."
        ],
        "explanation": "Dynamic Programming, because overlapping sub-problems (Fib(n-1), Fib(n-2)) are computed once, stored, and reused in later calls."
      },
      {
        "id": "quiz-a-20",
        "number": 20,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "Both Binary Search and Merge Sort are textbook examples of which parallel algorithm design technique?",
        "answer": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results.",
        "wrong": [
          "Greedy Method, because both algorithms commit to a locally optimal decision at each step without reconsidering prior choices.",
          "Dynamic Programming, because both algorithms store results from smaller input sizes to avoid re-scanning previously processed data.",
          "Branch and Bound, because both algorithms prune sections of the input that cannot possibly contribute to the final answer."
        ],
        "explanation": "Divide and Conquer, because both algorithms recursively split the input in half, solve each half, and then combine the results."
      },
      {
        "id": "quiz-a-21",
        "number": 21,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A logistics firm assigns delivery drivers to routes to maximize total deliveries in an 8-hour shift. Driver assignment, shift-hour limits, and vehicle capacity all have linear relationships. Which design technique directly models and solves this optimization problem?",
        "answer": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically.",
        "wrong": [
          "Branch and Bound, which generates a tree of partial assignments and prunes branches where estimated deliveries fall below the current best.",
          "Greedy Method, which assigns the driver with the greatest remaining shift time to the longest available route at each decision step.",
          "Backtracking, which tries every possible driver-to-route assignment and retreats whenever a shift-hour or capacity constraint is violated."
        ],
        "explanation": "Linear Programming, which models the objective and all constraints as linear functions and finds the optimal variable assignment mathematically."
      },
      {
        "id": "quiz-a-22",
        "number": 22,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Algorithm Design Techniques",
        "prompt": "A game developer builds a maze solver that explores a path step by step, and when it hits a dead end, it reverses to the last junction and tries a different direction. This continues until the exit is found. Which design technique is being implemented?",
        "answer": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered.",
        "wrong": [
          "Greedy Method, because at each junction the solver picks the corridor that appears to lead most directly toward the exit position.",
          "Branch and Bound, because at each junction the solver calculates the minimum remaining distance and prunes corridors that exceed the limit.",
          "Divide and Conquer, because the maze is split into quadrants and each quadrant is solved independently by a recursive sub-call."
        ],
        "explanation": "Backtracking, because the solver builds a path incrementally and retreats to the previous decision point whenever a dead end is encountered."
      },
      {
        "id": "quiz-a-23",
        "number": 23,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "What is the defining characteristic of the shared-memory parallel programming model?",
        "answer": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables.",
        "wrong": [
          "Threads are assigned to separate physical servers and synchronize by exchanging data packets over a high-speed network interconnect.",
          "Each thread operates on an independent memory bank that is readable by the CPU but not directly accessible by any other thread.",
          "Each thread holds a private copy of all program variables and must explicitly send updates to other threads through a message queue."
        ],
        "explanation": "All threads running on the same system can access the same memory addresses and communicate by reading and writing shared variables."
      },
      {
        "id": "quiz-a-24",
        "number": 24,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Two threads simultaneously read a shared counter, each adds one to it, and each writes back the result. The counter increments by one instead of two. What is this concurrency problem called?",
        "answer": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost.",
        "wrong": [
          "A memory leak, where each thread allocates a new buffer for the counter value but never frees the old buffer after writing.",
          "A stack overflow, where the counter variable exceeds the maximum integer range supported by the thread's private call stack memory.",
          "A deadlock, where both threads are blocked waiting for a resource that the other thread currently holds and refuses to release."
        ],
        "explanation": "A race condition, where two threads access and modify shared data concurrently without synchronization causing one update to be lost."
      },
      {
        "id": "quiz-a-25",
        "number": 25,
        "source": "Recent Final Quiz",
        "set": "A",
        "tag": "Shared-Memory Programming",
        "prompt": "Which synchronization mechanism in shared-memory programming ensures that only one thread at a time can execute a critical section of code?",
        "answer": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time.",
        "wrong": [
          "A network socket, which provides a reliable byte-stream channel between two threads running on different CPU cores.",
          "A memory-mapped file, which maps shared data to a file on disk so multiple threads can access it through the file system.",
          "A message queue, which buffers outgoing data from one thread and delivers it to another thread in the order it was enqueued."
        ],
        "explanation": "A mutex lock (mutual exclusion lock), which allows only the thread holding the lock to enter the critical section at any given time."
      },
      {
        "id": "quiz-b-26",
        "number": 26,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "In shared-memory programming, what is the key difference between multithreading and multiprocessing?",
        "answer": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory.",
        "wrong": [
          "Multithreading allocates a separate CPU socket to each thread while multiprocessing runs all tasks on a single CPU core in rotation.",
          "Multithreading is exclusively used for input/output tasks while multiprocessing handles all mathematical and computational operations.",
          "Multithreading requires a special OS kernel module while multiprocessing runs on any standard operating system without modification."
        ],
        "explanation": "Multithreading creates multiple execution units within one process sharing the same memory; multiprocessing creates separate processes each with independent memory."
      },
      {
        "id": "quiz-b-27",
        "number": 27,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which parallel processing framework uses pragma compiler directives to parallelize loops and is specifically designed for shared-memory multi-core systems?",
        "answer": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code.",
        "wrong": [
          "CUDA (Compute Unified Device Architecture), which offloads massively parallel computations to GPU streaming multiprocessors.",
          "MPI (Message Passing Interface), which uses explicit send/receive calls to coordinate work across distributed-memory compute nodes.",
          "Hadoop MapReduce, which distributes large dataset processing across a cluster of commodity servers using a key-value paradigm."
        ],
        "explanation": "OpenMP, which uses #pragma omp directives so developers can parallelize loops and sections without restructuring sequential code."
      },
      {
        "id": "quiz-b-28",
        "number": 28,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Thread A and Thread B both execute 'counter++' on a shared variable 1,000 times each without any synchronization. The final value is 1,743 instead of 2,000. What caused the discrepancy of 257?",
        "answer": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost.",
        "wrong": [
          "The operating system's thread scheduler assigned both threads to the same CPU core, causing them to alternate too slowly to complete all increments.",
          "The threads consumed excessive CPU cache capacity causing some increment operations to be silently discarded by the cache coherence protocol.",
          "The compiler optimized away 257 redundant increment operations because it detected that both threads were modifying the same variable."
        ],
        "explanation": "A race condition caused both threads to read the same counter value before either could write back, so some increments were overwritten and lost."
      },
      {
        "id": "quiz-b-29",
        "number": 29,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "As the number of threads in a shared-memory program increases to very large numbers, what performance limitation typically emerges?",
        "answer": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains.",
        "wrong": [
          "The operating system automatically converts the shared-memory program to a message-passing program to handle the extra threads efficiently.",
          "Memory usage drops to zero because the threads share so much data that very little unique information needs to be stored per thread.",
          "The compiler automatically inserts additional mutex locks that protect all shared variables so thread safety improves as thread count grows."
        ],
        "explanation": "Scalability degrades because increasing threads means more contention for shared resources and growing synchronization overhead that reduces gains."
      },
      {
        "id": "quiz-b-30",
        "number": 30,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "An online exam system on a 32-core server handles 5,000 simultaneous student registrations. Each registration decrements a shared 'seats_remaining' counter. Which approach correctly prevents registration count errors in shared-memory programming?",
        "answer": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates.",
        "wrong": [
          "Allow all 5,000 threads to update the counter simultaneously and rely on the CPU's out-of-order execution to merge the updates correctly.",
          "Run each student's session on a separate virtual machine so that each VM maintains its own independent copy of the counter value.",
          "Use file locking to write the counter to disk before each decrement so the persistent file serves as the authoritative shared state."
        ],
        "explanation": "Use a mutex lock around the decrement operation so only one thread modifies seats_remaining at a time, preventing lost updates."
      },
      {
        "id": "quiz-b-31",
        "number": 31,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Two Java threads process bank account transactions on the same account object. Both read a balance of PHP 10,000, each deducts PHP 8,000, and both write PHP 2,000 back — leaving PHP 2,000 instead of detecting an overdraft. Which concurrency problem caused this and what is the correct fix?",
        "answer": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time.",
        "wrong": [
          "A deadlock caused both threads to block waiting for the account object lock; adding a second lock object on the transaction class resolves it.",
          "A memory leak caused transaction objects to pile up; calling System.gc() after each transaction frees the excess objects and corrects the balance.",
          "A stack overflow in the transaction recursion caused the balance to be partially written; increasing the JVM thread stack size resolves the issue."
        ],
        "explanation": "A race condition caused a lost update; using Java's synchronized keyword on the transaction method ensures only one thread reads-and-writes at a time."
      },
      {
        "id": "quiz-b-32",
        "number": 32,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Shared-Memory Programming",
        "prompt": "Which statement accurately describes the communication advantage of shared-memory programming over message-passing for tasks on a single machine?",
        "answer": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead.",
        "wrong": [
          "Shared-memory programs automatically distribute their computations across multiple physical servers with no network configuration needed.",
          "Shared-memory programs prevent all race conditions by default because the compiler inserts atomic operations around every memory access.",
          "Shared-memory programs scale to unlimited thread counts because lock contention decreases automatically as more cores are added to the system."
        ],
        "explanation": "Shared-memory programs allow threads to communicate by directly reading and writing shared data structures with no message serialization overhead."
      },
      {
        "id": "quiz-b-33",
        "number": 33,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does complexity analysis measure about a computer program or algorithm?",
        "answer": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows.",
        "wrong": [
          "Complexity analysis counts the total number of lines of source code and evaluates how readable the code is for future developers.",
          "Complexity analysis evaluates the quality of a program's user interface and measures user interaction response times under load.",
          "Complexity analysis audits the number of external library dependencies and scores how maintainable the program is over time."
        ],
        "explanation": "Complexity analysis measures how efficiently an algorithm uses time (number of operations) and memory (RAM) as input size grows."
      },
      {
        "id": "quiz-b-34",
        "number": 34,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big O notation (O) specifically represent when describing algorithm complexity?",
        "answer": "Big O represents the worst-case upper bound",
        "wrong": [
          "Big O represents the best-case minimum number of steps the algorithm will perform when given the most favorable possible input.",
          "Big O represents the average-case expected performance across all typical real-world inputs for the algorithm.",
          "Big O represents the exact number of operations the algorithm performs for every specific input of a given size n."
        ],
        "explanation": "the maximum growth rate the algorithm's resource usage will ever reach."
      },
      {
        "id": "quiz-b-35",
        "number": 35,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "What does Big Omega notation (Ω) represent in algorithm complexity analysis?",
        "answer": "Big Omega represents the best-case lower bound",
        "wrong": [
          "Big Omega represents the worst-case upper bound",
          "Big Omega represents the average-case expected growth rate when inputs are drawn uniformly at random from all possible values.",
          "Big Omega represents the memory complexity of the algorithm expressed in terms of the number of recursive function call frames."
        ],
        "explanation": "the minimum number of steps the algorithm will ever need on any input."
      },
      {
        "id": "quiz-b-36",
        "number": 36,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm performs exactly 7 operations whether the input list has 10 items or 10,000,000 items. What time complexity class does this represent?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "constant complexity, because the number of operations never changes regardless of how large the input becomes."
      },
      {
        "id": "quiz-b-37",
        "number": 37,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search on a sorted array of 1,024 elements finds the target in at most 10 steps. On 1,048,576 elements it finds it in at most 20 steps. What time complexity does this pattern represent?",
        "answer": "O(log n)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(1)"
        ],
        "explanation": "logarithmic complexity, where each step eliminates half the remaining candidates so steps grow very slowly with array size."
      },
      {
        "id": "quiz-b-38",
        "number": 38,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A loop visits every element in an array of n items exactly once and performs one operation on each. What is the time complexity of this loop?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "explanation": "linear complexity, because the total number of operations grows in direct proportion to the number of items in the array."
      },
      {
        "id": "quiz-b-39",
        "number": 39,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An algorithm contains an outer loop running n times and an inner loop that also runs n times for each outer iteration. What is the time complexity?",
        "answer": "O(n²)",
        "wrong": [
          "O(n)",
          "O(n log n)",
          "O(2n)"
        ],
        "explanation": "quadratic, because the inner loop executes n times for each of the n outer iterations giving n multiplied by n total steps."
      },
      {
        "id": "quiz-b-40",
        "number": 40,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A hospital's patient lookup system uses linear search on 1,000,000 unsorted records. In the worst case, approximately how many record comparisons are made and what is the Big O complexity?",
        "answer": "Up to 1,000,000 comparisons",
        "wrong": [
          "About 20 comparisons",
          "Exactly 1 comparison",
          "Up to 1,000,000,000,000 comparisons"
        ],
        "explanation": "O(n), because linear search checks every record until a match is found or the list is exhausted."
      },
      {
        "id": "quiz-b-41",
        "number": 41,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Sorting 1,000 student scores with Merge Sort takes roughly 10,000 operations. Using the same O(n log n) relationship, approximately how many operations does sorting 1,000,000 scores require?",
        "answer": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000.",
        "wrong": [
          "About 20,000,000,000 operations, because the sort switches to O(n²) behavior once the input exceeds one million elements.",
          "About 1,000,000 operations, because O(n log n) scales at the same rate as O(n) when the logarithmic factor remains near constant.",
          "About 1,000 operations, because the logarithmic factor reduces the linear component proportionally."
        ],
        "explanation": "About 20,000,000 operations, because O(n log n) scales as n × log₂(n), and 1,000,000 × log₂(1,000,000) ≈ 1,000,000 × 20 = 20,000,000."
      },
      {
        "id": "quiz-b-42",
        "number": 42,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A cashier program sums all item prices in a shopping cart using one variable: 'int sum = 0; for(item: cart) sum += item.price;'. What is the space complexity of this algorithm?",
        "answer": "O(1)",
        "wrong": [
          "O(n)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "constant space, because only one variable (sum) is ever allocated regardless of how many items appear in the cart."
      },
      {
        "id": "quiz-b-43",
        "number": 43,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "Binary Search runs in O(log n) time. What critical requirement must the data meet BEFORE Binary Search can be applied correctly?",
        "answer": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard.",
        "wrong": [
          "The data must be stored in a hash table so that each element can be located by computing its position from its key value directly.",
          "The data must be stored in a linked list so that Binary Search can traverse forward and backward from a given starting element.",
          "The data must fit entirely within the CPU's L1 cache so that each Binary Search probe accesses an element in a single clock cycle."
        ],
        "explanation": "The data must be sorted in either ascending or descending order so that Binary Search can correctly determine which half to discard."
      },
      {
        "id": "quiz-b-44",
        "number": 44,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An app runs in 0.1 seconds for 500 users. After going viral with 500,000 users (a 1,000× growth), response time is 100,000 seconds. A developer suspects a quadratic algorithm. Is O(n²) consistent with this observation?",
        "answer": "Yes",
        "wrong": [
          "No",
          "No",
          "Yes"
        ],
        "explanation": "under O(n²), a 1,000× user increase causes a 1,000²=1,000,000× time increase: 0.1s × 1,000,000 = 100,000s, which matches exactly."
      },
      {
        "id": "quiz-b-45",
        "number": 45,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "An e-commerce platform with 10 million products evaluates two search algorithms. Algorithm X completes in 23 fixed operations regardless of product count. Algorithm Y takes up to 10,000,000 operations. What are their complexities and which should power the product search?",
        "answer": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion.",
        "wrong": [
          "Both are O(n); Algorithm X should be chosen because 23 operations is numerically smaller than 10,000,000 for this specific dataset.",
          "Algorithm X is O(log n); Algorithm Y is O(n²). Algorithm X is better because logarithmic growth is slower than quadratic growth at all sizes.",
          "Both are O(log n); Algorithm X is preferred because its constant factor of 23 is smaller than Algorithm Y's constant factor at this dataset size."
        ],
        "explanation": "Algorithm X is O(1); Algorithm Y is O(n). Algorithm X should be used because its operation count stays constant even if products grow to 1 billion."
      },
      {
        "id": "quiz-b-46",
        "number": 46,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A mobile app loads all contacts into memory so users can scroll through them. A user with 50 contacts uses 50 memory slots; a user with 5,000 contacts uses 5,000 slots. What is the space complexity and is it appropriate?",
        "answer": "O(n)",
        "wrong": [
          "O(1)",
          "O(n²)",
          "O(log n)"
        ],
        "explanation": "linear space; memory grows proportionally with contact count, which is expected and acceptable for a contact list application."
      },
      {
        "id": "quiz-b-47",
        "number": 47,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "When Ω (best case) = Θ (average case) = O (worst case) for an algorithm, what does this equal relationship mean for the algorithm's behavior?",
        "answer": "The algorithm has tight complexity",
        "wrong": [
          "The algorithm is asymptotically unstable and produces widely varying step counts on different inputs even of the same size n.",
          "The algorithm uses exponential memory in all three cases, making it impractical for any input size larger than a few dozen elements.",
          "The algorithm degenerates to sequential execution when best and worst cases match, losing all parallel performance benefits."
        ],
        "explanation": "it performs the same number of steps on every input of size n, making its behavior perfectly predictable."
      },
      {
        "id": "quiz-b-48",
        "number": 48,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A naive duplicate file detector compares every file to every other file. With 10,000 files, how many comparisons are made, what is the complexity, and what smarter approach reduces it?",
        "answer": "100,000,000 comparisons",
        "wrong": [
          "10,000 comparisons",
          "20,000 comparisons",
          "10,000,000,000,000 comparisons"
        ],
        "explanation": "O(n²); computing a hash for each file and comparing hashes instead of file contents reduces this to O(n)."
      },
      {
        "id": "quiz-b-49",
        "number": 49,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A government portal expects 50 million citizen logins. System A stores usernames in an unsorted list and checks them sequentially. System B uses a hash table. What are their Big O worst-case complexities and which must be chosen?",
        "answer": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant.",
        "wrong": [
          "System A is O(log n); System B is O(n²). System A is the better choice because logarithmic growth is manageable at 50 million users.",
          "Both systems are O(1) in the worst case; System B should be chosen because hash tables have a smaller constant factor than linear search.",
          "System A is O(n log n); System B is O(n). System B is better because linear growth is slower than linearithmic growth for large user counts."
        ],
        "explanation": "System A is O(n); System B is O(1). System B must be chosen because O(n) means up to 50 million comparisons per login while O(1) stays constant."
      },
      {
        "id": "quiz-b-50",
        "number": 50,
        "source": "Recent Final Quiz",
        "set": "B",
        "tag": "Complexity Analysis",
        "prompt": "A teacher asks students to rank these five algorithms from MOST efficient to LEAST efficient for very large inputs: (I) O(n) Linear Search, (II) O(1) Hash Lookup, (III) O(n log n) Merge Sort, (IV) O(n²) Bubble Sort, (V) O(log n) Binary Search. What is the correct ranking?",
        "answer": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
        "wrong": [
          "O(n) Linear Search → O(1) Hash Lookup → O(log n) Binary Search → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(log n) Binary Search → O(n) Linear Search → O(1) Hash Lookup → O(n log n) Merge Sort → O(n²) Bubble Sort",
          "O(1) Hash Lookup → O(n) Linear Search → O(n²) Bubble Sort → O(log n) Binary Search → O(n log n) Merge Sort"
        ],
        "explanation": "O(1) Hash Lookup → O(log n) Binary Search → O(n) Linear Search → O(n log n) Merge Sort → O(n²) Bubble Sort"
      }
    ]
  },
  "quizCounts": {
    "prelimA": 25,
    "prelimB": 25,
    "combinedPrelimA": 25,
    "combinedPrelimB": 25,
    "quizA": 25,
    "quizB": 25,
    "combinedQuizA": 25,
    "combinedQuizB": 25,
    "combinedPrelim": 50,
    "combinedQuiz": 50,
    "everything": 265,
    "everythingA": 133,
    "everythingB": 132,
    "moduleFinalsIncluded": 150,
    "week3Included": 15
  }
};
