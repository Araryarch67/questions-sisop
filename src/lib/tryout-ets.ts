export interface TryoutChapter {
  id: string;
  number: number;
  part: string;
  title: string;
  description: string;
  topics: string[];
  questionCount: number;
}

export interface TryoutEtsQuestion {
  id: number;
  text: string;
  options: string[];
  answerIndexes: number[];
  /** Alias for answerIndexes to support scored evaluation */
  answers: number[];
  multiple?: true;
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  sectionTitle: string;
  part: string;
}

export const tryoutChapters: TryoutChapter[] = [
  {
    "id": "ch01",
    "number": 1,
    "part": "PART 1 BACKGROUND",
    "title": "Computer System Overview",
    "description": "Elemen dasar komputer, evolusi mikroprosesor, eksekusi instruksi, interrupt, hierarki memori, cache memory, DMA, dan arsitektur multiprosesor (SMP/multicore).",
    "topics": [
      "1.1 Basic Elements",
      "1.2 Evolution of the Microprocessor",
      "1.3 Instruction Execution",
      "1.4 Interrupts",
      "1.5 The Memory Hierarchy",
      "1.6 Cache Memory",
      "1.7 Direct Memory Access",
      "1.8 Multiprocessor and Multicore Organization"
    ],
    "questionCount": 27
  },
  {
    "id": "ch02",
    "number": 2,
    "part": "PART 1 BACKGROUND",
    "title": "Operating System Overview",
    "description": "Tujuan dan fungsi sistem operasi, evolusi OS, arsitektur kernel monolitik vs mikrokernel, device driver, serta perintah CLI UNIX/Linux tradisional.",
    "topics": [
      "2.1 Operating System Objectives and Functions",
      "2.3 Major Achievements (Microkernel vs Monolithic)",
      "2.8 Traditional UNIX Systems & CLI Tools",
      "2.10 Linux Environment"
    ],
    "questionCount": 16
  },
  {
    "id": "ch03",
    "number": 3,
    "part": "PART 2 PROCESSES",
    "title": "Process Description and Control",
    "description": "Definisi proses, model 5-state proses dan siklus transisinya, Process Control Block (PCB), context switching, dispatcher, dan komunikasi antar proses (IPC).",
    "topics": [
      "3.1 What is a Process?",
      "3.2 Process States (5-State Model & Transitions)",
      "3.3 Process Description (Process Control Block)",
      "3.4 Process Control (Context Switching & Dispatcher)"
    ],
    "questionCount": 19
  },
  {
    "id": "ch04",
    "number": 4,
    "part": "PART 2 PROCESSES",
    "title": "Threads",
    "description": "Konsep proses vs thread, User-Level Threads (ULT) vs Kernel-Level Threads (KLT), model relasi (1:1, M:1, M:M), library Pthreads, thread pooling, dan pembatalan thread.",
    "topics": [
      "4.1 Processes and Threads",
      "4.2 Types of Threads (ULT vs KLT)",
      "4.2 Threading Models (One-to-One, Many-to-One, Many-to-Many)",
      "4.2 Pthreads API & Thread Pooling"
    ],
    "questionCount": 19
  },
  {
    "id": "ch05",
    "number": 5,
    "part": "PART 2 PROCESSES",
    "title": "Concurrency: Mutual Exclusion and Synchronization",
    "description": "Prinsip konkurensi, mutual exclusion, race condition, critical section, solusi software (Dekker, Peterson), dukungan hardware (Test-and-Set), Semaphore, Monitor, serta masalah producer-consumer & readers-writers.",
    "topics": [
      "5.1 Mutual Exclusion: Software (Dekker & Peterson)",
      "5.2 Principles of Concurrency & Critical Section",
      "5.3 Mutual Exclusion: Hardware Support (Test-and-Set)",
      "5.4 Semaphores (Binary & Counting Semaphores)",
      "5.5 Monitors & Condition Variables",
      "5.7 Readers/Writers Problem"
    ],
    "questionCount": 28
  },
  {
    "id": "ch06",
    "number": 6,
    "part": "PART 2 PROCESSES",
    "title": "Concurrency: Deadlock and Starvation",
    "description": "Prinsip deadlock, kondisi terbentuknya deadlock, starvation, dan masalah sinkronisasi klasik Dining Philosophers.",
    "topics": [
      "6.1 Principles of Deadlock",
      "6.6 Dining Philosophers Problem"
    ],
    "questionCount": 2
  },
  {
    "id": "ch09",
    "number": 9,
    "part": "PART 4 SCHEDULING",
    "title": "Uniprocessor Scheduling",
    "description": "Tipe penjadwalan prosesor (Long-Term, Short-Term / Dispatcher), preemptive vs non-preemptive, algoritma Round Robin (Time Quantum), dan Shortest Job First (SJF).",
    "topics": [
      "9.1 Types of Processor Scheduling",
      "9.2 Scheduling Algorithms (Round Robin, SJF)"
    ],
    "questionCount": 6
  }
];

export const tryoutEtsQuestions: TryoutEtsQuestion[] = [
  {
    "id": 1,
    "text": "What is the main issue addressed by mutual exclusion?",
    "options": [
      "File corruption",
      "Memory leakage",
      "Program compilation",
      "Shared resource access"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.1 Mutual Exclusion",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 2,
    "text": "Which of the following best describes the concept of a system bus?",
    "options": [
      "Backup device",
      "Communication pathway",
      "Public transport",
      "Data transfer software"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (System Bus)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 3,
    "text": "What does the \">\" operator do?",
    "options": [
      "Appends to a file",
      "Moves files",
      "Compares two files",
      "Redirects output to a file (overwrites)"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (I/O Redirection)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 4,
    "text": "Which threading model pairs one user-level thread with one kernel-level thread?",
    "options": [
      "One-to-one model",
      "Many-to-one model",
      "Many-to-many model",
      "Hybrid model"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Thread Models (One-to-One)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 5,
    "text": "Which command is used to create a new directory?",
    "options": [
      "touch",
      "mkdir",
      "cd",
      "mkfile"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (Directory Commands)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 6,
    "text": "What happens during process termination?",
    "options": [
      "Memory locked",
      "Files deleted",
      "CPU reset",
      "Resources freed"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.4 Process Control (Termination)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 7,
    "text": "Which statement about Pop-Up threads is correct?",
    "options": [
      "They are used exclusively for error handling",
      "They are created automatically in response to an incoming request",
      "They exist only in microkernel architectures",
      "They are threads that display user interface elements"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Pop-Up Threads)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 8,
    "text": "What problem can occur without proper synchronization?",
    "options": [
      "Stack overflow",
      "Race conditions",
      "Hardware fault",
      "Cache miss"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Race Conditions)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 9,
    "text": "Which of the following is NOT a component of the CPU?",
    "options": [
      "I/O controller",
      "Registers",
      "Control unit",
      "ALU"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (CPU Components)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 10,
    "text": "What information would NOT typically be found in a Process Control Block?",
    "options": [
      "Program counter value",
      "Register values",
      "Process ID",
      "Source code of the program"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.3 Process Description (PCB)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 11,
    "text": "Which process state allows it to be assigned to the CPU?",
    "options": [
      "New",
      "Terminated",
      "Blocked",
      "Ready"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process States (Ready State)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 12,
    "text": "Which process state represents a process that is ready to execute but is waiting for the CPU?",
    "options": [
      "Running state",
      "Terminated state",
      "Ready state",
      "Blocked state"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process States (Ready vs Waiting)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 13,
    "text": "Which of the following is an example of non-volatile memory?",
    "options": [
      "Random Access Memory (RAM)",
      "Read-Only Memory (ROM)",
      "Cache memory",
      "CPU registers"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.5 The Memory Hierarchy (Non-Volatile Memory)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 14,
    "text": "What is the function of the Arithmetic Logic Unit (ALU)?",
    "options": [
      "To control the flow of data between the CPU and memory",
      "To manage the execution sequence of program instructions",
      "To perform mathematical and logical operations",
      "To store temporary data during processing"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (ALU)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 15,
    "text": "In Dekker's algorithm, what technique is used to prevent simultaneous entry into the critical section?",
    "options": [
      "Message passing between processes",
      "Timer-based process scheduling",
      "A combination of turn variables and interest flags",
      "Hardware atomic instructions"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.1 Mutual Exclusion: Software (Dekker Algorithm)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 16,
    "text": "What are the differences between a monolithic kernel and a microkernel?",
    "options": [
      "Microkernels are closed-source, while monolithic kernels are open-source",
      "In a microkernel, most services run as user processes, while in a monolithic kernel, all services are in kernel space",
      "Microkernels only work on single-processor systems, while monolithic kernels work on multiprocessor systems",
      "Monolithic kernels support multithreading, while microkernels do not"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.3 Major Achievements (Monolithic vs Microkernel)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 17,
    "text": "In the 5-state process model, what follows the ready state?",
    "options": [
      "Blocked",
      "Running",
      "New",
      "Exit"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process States (5-State Model)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 18,
    "text": "In a Symmetric Multiprocessing (SMP) system, which statement is true?",
    "options": [
      "Each processor runs its own independent operating system",
      "One processor acts as the master while others are slaves",
      "Processors cannot communicate directly with each other",
      "All processors share the same memory and are treated equally by the OS"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.8 Multiprocessor Organization (SMP)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 19,
    "text": "What is a major advantage of kernel-level threads?",
    "options": [
      "No context switch",
      "Infinite threads",
      "True parallelism",
      "No blocking"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Kernel-Level Threads)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 20,
    "text": "What is the main difference between a mutex and a binary semaphore?",
    "options": [
      "A mutex is implemented in hardware, while a semaphore is implemented in software",
      "A mutex can only synchronize processes on the same processor, while semaphores work across processors",
      "A mutex allows multiple processes to enter the critical section, while a binary semaphore allows only one",
      "A mutex can only be released by the process that acquired it, while a semaphore can be released by any process"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.4 Semaphores (Mutex vs Binary Semaphore)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 21,
    "text": "What is kernel-level threading?",
    "options": [
      "Managed by OS",
      "Hardware only",
      "No scheduling",
      "In user space"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Kernel-Level Threading)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 22,
    "text": "What is the function of the system clock in a computer?",
    "options": [
      "To keep track of the current date and time",
      "To synchronize the operation of the computer components",
      "To monitor the temperature of the CPU",
      "To count the number of instructions executed"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (System Clock)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 23,
    "text": "What is a race condition?",
    "options": [
      "Unpredictable outcome",
      "Fast process",
      "Memory full",
      "High CPU usage"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Race Condition)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 24,
    "text": "What is a critical section?",
    "options": [
      "Debug section",
      "Code with shared access",
      "OS kernel call",
      "Unused memory"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Critical Section)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 25,
    "text": "What is thread pooling?",
    "options": [
      "The process of prioritizing threads based on their resource needs",
      "A technique to move threads between different processor cores",
      "Creating a number of threads at process startup and placing them into a pool for later use",
      "Combining multiple threads into a single execution unit"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Thread Pooling)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 26,
    "text": "What is a critical section?",
    "options": [
      "A section of memory that is protected from concurrent access",
      "A section of code that always executes with the highest priority",
      "A segment of code where a process accesses shared resources that must not be concurrently accessed by other processes",
      "A segment of code that cannot be interrupted by the operating system"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Critical Section)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 27,
    "text": "What does the term \"degree of multiprogramming\" refer to?",
    "options": [
      "The maximum number of threads a process can create",
      "The number of CPUs in a system",
      "The number of I/O devices available",
      "The number of processes that are loaded into main memory"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process Management (Degree of Multiprogramming)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 28,
    "text": "What is a semaphore?",
    "options": [
      "A specialized data structure used only for file system operations",
      "A synchronization tool that provides a generalized method for controlling access to shared resources",
      "A hardware device that signals when a process is ready to enter its critical section",
      "A counter that keeps track of the total number of processes in the system"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.4 Semaphores (Definition & Usage)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 29,
    "text": "What is the main purpose of process control?",
    "options": [
      "Manage execution",
      "Store code",
      "Update firmware",
      "Monitor hardware"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.4 Process Control (Execution Management)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 30,
    "text": "What does it mean when a process is CPU-bound?",
    "options": [
      "The process has reached its maximum allowed CPU usage",
      "The process is tied to a specific CPU in a multiprocessor system",
      "The process is limited to using only one CPU core",
      "The process spends most of its time doing computations rather than waiting for I/O"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process Characteristics (CPU-Bound)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 31,
    "text": "What is the readers-writers problem?",
    "options": [
      "A problem where processes must read data before they can write to it",
      "A memory management issue where readers can corrupt data being written",
      "A problem where readers and writers must take turns accessing the shared resource",
      "A synchronization problem where multiple processes can read shared data simultaneously, but writes require exclusive access"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.7 Readers/Writers Problem",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 32,
    "text": "What is the function of a device driver?",
    "options": [
      "To encrypt data before sending it to external devices",
      "To drive electricity to peripheral devices",
      "To provide software interface between the operating system and hardware devices",
      "To physically connect peripheral devices to the computer"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.1 OS Objectives and Functions (Device Drivers)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 33,
    "text": "In the context of SMP, what does load balancing refer to?",
    "options": [
      "Distributing the workload evenly among all processors",
      "Balancing the number of I/O operations across all disks",
      "Ensuring all processors consume the same amount of power",
      "Maintaining equal amounts of data in all processor caches"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.8 Multiprocessor Organization (Load Balancing)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 34,
    "text": "Which of the following is NOT a requirement for a solution to the critical section problem?",
    "options": [
      "Guaranteed termination within a fixed number of steps",
      "Mutual exclusion",
      "Progress",
      "Bounded waiting"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Critical Section Requirements)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 35,
    "text": "What is a bus in a computer system?",
    "options": [
      "A software component that schedules CPU tasks",
      "A unit that performs arithmetic operations",
      "A temporary storage area for the CPU",
      "A physical connection that transfers data between components"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (System Bus)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 36,
    "text": "What is an atomic operation in the context of concurrency?",
    "options": [
      "An operation that requires exactly one machine instruction to complete",
      "An operation that cannot be broken down into simpler operations",
      "An operation that can only be performed by a single process in the system",
      "An operation that completes in its entirety without interruption"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.3 Mutual Exclusion: Hardware (Atomic Operations)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 37,
    "text": "Which statements about microkernels are correct?",
    "options": [
      "Microkernels are easier to extend and maintain",
      "Microkernels are more reliable because services run in user space",
      "Microkernels require message passing for communication between services",
      "Microkernels typically perform better than monolithic kernels for I/O-intensive tasks"
    ],
    "answerIndexes": [
      0,
      1,
      2
    ],
    "multiple": true,
    "answers": [
      0,
      1,
      2
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.3 Major Achievements (Microkernels)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 38,
    "text": "Which scheduling algorithm attempts to give equal CPU time to all processes?",
    "options": [
      "Priority Scheduling",
      "Shortest Job First",
      "Round Robin",
      "First-Come, First-Served"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch09",
    "chapterNumber": 9,
    "chapterTitle": "Uniprocessor Scheduling",
    "sectionTitle": "9.2 Scheduling Algorithms (Round Robin)",
    "part": "PART 4 SCHEDULING"
  },
  {
    "id": 39,
    "text": "What is a process?",
    "options": [
      "Active program",
      "Static file",
      "CPU only",
      "Memory block"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.1 What is a Process?",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 40,
    "text": "Which command displays the contents of a file?",
    "options": [
      "rm",
      "cat",
      "mv",
      "ls"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (cat Command)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 41,
    "text": "What does \"ps aux\" display?",
    "options": [
      "Currently running processes",
      "Available disk space",
      "System users",
      "Network connections"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (ps aux Command)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 42,
    "text": "What causes a context switch?",
    "options": [
      "File access",
      "Process change",
      "User login",
      "Memory error"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.4 Process Control (Context Switch Cause)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 43,
    "text": "In Peterson's solution to the mutual exclusion problem, what ensures that only one process enters the critical section?",
    "options": [
      "A hardware-supported atomic test-and-set instruction",
      "A message-passing protocol between the two processes",
      "A counting semaphore initialized to 1",
      "The combination of interest flags and a turn variable"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.1 Mutual Exclusion: Software (Peterson Solution)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 44,
    "text": "Which of the following is NOT a primary component of a basic computer system?",
    "options": [
      "Operating System Kernel",
      "CPU",
      "Memory",
      "Input/Output devices"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (Primary Components)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 45,
    "text": "What is the main function of the operating system in relation to the hardware and user applications?",
    "options": [
      "Handles security",
      "Manages peripherals only",
      "Acts as intermediary",
      "Compiles programs"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.1 OS Objectives and Functions (Intermediary Role)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 46,
    "text": "What is the difference between RISC and CISC processor architectures?",
    "options": [
      "RISC processors are always faster than CISC processors",
      "CISC architectures are more power-efficient than RISC architectures",
      "RISC uses simple instructions that execute in one cycle, while CISC uses complex instructions that may take multiple cycles",
      "RISC uses more transistors than CISC for the same functionality"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.2 Evolution of Microprocessor (RISC vs CISC)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 47,
    "text": "Which tool is commonly used for enforcing mutual exclusion?",
    "options": [
      "Lock",
      "Queue",
      "Timer",
      "Signal"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Locks)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 48,
    "text": "What state is a process in when it is waiting for an event?",
    "options": [
      "Blocked",
      "Terminated",
      "Running",
      "Ready"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process States (Blocked State)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 49,
    "text": "What is the function of the control unit within the CPU?",
    "options": [
      "Directs operations",
      "Manages storage",
      "Controls network",
      "Performs math"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (Control Unit Operations)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 50,
    "text": "What is the main function of the Control Unit (CU) in a computer system?",
    "options": [
      "To store program instructions and data",
      "To provide the interface between the computer and its peripheral devices",
      "To coordinate and control the operation of the entire computer system",
      "To execute arithmetic operations on data"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (Control Unit Coordination)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 51,
    "text": "Which of the following is true about condition variables in monitors?",
    "options": [
      "They can only be used once and then must be recreated",
      "They automatically detect deadlocks when processes are waiting",
      "They allow processes to wait for a specific condition",
      "They are equivalent to semaphores in all aspects"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.5 Monitors (Condition Variables)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 52,
    "text": "How do you search for text within a file?",
    "options": [
      "sort",
      "find",
      "cat",
      "grep"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (grep Command)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 53,
    "text": "What is preemptive scheduling?",
    "options": [
      "A scheduling algorithm that only runs high-priority processes",
      "A scheduling technique used only for I/O-bound processes",
      "A scheduling policy where a running process can be interrupted and moved to the ready state",
      "A scheduling policy where processes cannot be interrupted until completion"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch09",
    "chapterNumber": 9,
    "chapterTitle": "Uniprocessor Scheduling",
    "sectionTitle": "9.1 Types of Processor Scheduling (Preemption)",
    "part": "PART 4 SCHEDULING"
  },
  {
    "id": 54,
    "text": "Which of the following is a hardware solution for mutual exclusion?",
    "options": [
      "Test-and-Set instruction",
      "Peterson's algorithm",
      "Monitors",
      "Message passing"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.3 Mutual Exclusion: Hardware (Test-and-Set)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 55,
    "text": "Which key combination stops a running command in terminal?",
    "options": [
      "Ctrl+X",
      "Ctrl+S",
      "Ctrl+Z",
      "Ctrl+C"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (Signal / Ctrl+C)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 56,
    "text": "Which of the following is NOT a key characteristic of a microkernel?",
    "options": [
      "It runs most services as user-level processes",
      "It implements all device drivers within the kernel for maximum performance",
      "It provides minimal services such as IPC and basic scheduling",
      "It has a smaller trusted computing base than monolithic kernels"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.3 Major Achievements (Microkernel Architecture)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 57,
    "text": "What does \"man ls\" do?",
    "options": [
      "Deletes the ls command",
      "Lists manual files",
      "Creates a man file",
      "Shows the manual page for the ls command"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (man Command)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 58,
    "text": "Which data structure is commonly used to implement a ready queue for processes?",
    "options": [
      "Binary tree",
      "Hash table",
      "Stack",
      "Linked list"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process States (Ready Queue Structure)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 59,
    "text": "What happens when one thread in a many-to-one model blocks?",
    "options": [
      "Other threads run",
      "Thread splits",
      "OS replaces it",
      "All threads block"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Many-to-One Blocking)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 60,
    "text": "What does the command \"ls -la\" display?",
    "options": [
      "Only directories",
      "Only executable files",
      "Detailed file listing",
      "File contents"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (ls -la Command)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 61,
    "text": "Which of the following best defines Direct Memory Access (DMA)?",
    "options": [
      "Security tool",
      "Bypasses CPU",
      "Manages memory",
      "Network protocol"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.7 Direct Memory Access (DMA)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 62,
    "text": "What is the main purpose of synchronization?",
    "options": [
      "Coordinate processes",
      "Increase speed",
      "Save power",
      "Encrypt data"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Synchronization)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 63,
    "text": "Which of the following best describes Moore's Law?",
    "options": [
      "The speed of computer processing doubles every 18 months",
      "The number of transistors on a microchip doubles approximately every two years",
      "The size of computer memory doubles every year",
      "The cost of computers halves every two years"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.2 Evolution of Microprocessor (Moores Law)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 64,
    "text": "What does the scheduler do?",
    "options": [
      "Allocates files",
      "Manages users",
      "Clears memory",
      "Chooses processes"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch09",
    "chapterNumber": 9,
    "chapterTitle": "Uniprocessor Scheduling",
    "sectionTitle": "9.1 Types of Processor Scheduling (Scheduler Role)",
    "part": "PART 4 SCHEDULING"
  },
  {
    "id": 65,
    "text": "In the von Neumann architecture, where are both data and instructions stored?",
    "options": [
      "CPU only",
      "Control units",
      "Separate devices",
      "Same memory"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (von Neumann Architecture)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 66,
    "text": "What is the purpose of an Interrupt in a computer system?",
    "options": [
      "To encrypt data for secure transmission",
      "To convert analog signals to digital format",
      "To signal the occurrence of an event that needs attention from the CPU",
      "To increase the speed of data transfer between devices"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.4 Interrupts (Interrupt Purpose)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 67,
    "text": "What is the purpose of a time quantum in Round Robin scheduling?",
    "options": [
      "To measure the total execution time of a process",
      "To determine how long a process waits in the ready queue",
      "To limit the time a process can use the CPU",
      "To calculate the priority of a process"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch09",
    "chapterNumber": 9,
    "chapterTitle": "Uniprocessor Scheduling",
    "sectionTitle": "9.2 Scheduling Algorithms (Time Quantum)",
    "part": "PART 4 SCHEDULING"
  },
  {
    "id": 68,
    "text": "Which of the following best describes the fetch-decode-execute cycle?",
    "options": [
      "The process of compiling source code into machine code",
      "The basic operational steps performed by the CPU to execute instructions",
      "The method used to access data from secondary storage",
      "The process of transferring data between the CPU and peripherals"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.3 Instruction Execution (Fetch-Decode-Execute)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 69,
    "text": "What is the dining philosophers problem an example of?",
    "options": [
      "A problem that can only be solved using hardware synchronization",
      "An optimal solution for resource allocation",
      "A situation where semaphores are always superior to monitors",
      "A synchronization problem that can lead to deadlock and starvation"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch06",
    "chapterNumber": 6,
    "chapterTitle": "Concurrency: Deadlock and Starvation",
    "sectionTitle": "6.6 Dining Philosophers Problem",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 70,
    "text": "What is the purpose of the wait() operation on a semaphore?",
    "options": [
      "To force a process to wait for a fixed amount of time",
      "To check if any other process is currently in its critical section",
      "To terminate a process if the semaphore value is 0",
      "To atomically test if the semaphore value is greater than 0, and if so, decrement it"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.4 Semaphores (wait Operation)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 71,
    "text": "What is the primary purpose of mutual exclusion in concurrent programming?",
    "options": [
      "To prevent deadlocks by forcing sequential execution",
      "To increase the execution speed of concurrent processes",
      "To ensure that only one process at a time can access a shared resource",
      "To allocate additional CPU resources to critical processes"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.1 Mutual Exclusion (Core Objective)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 72,
    "text": "In a five-state process model, what causes a process to move from the Running state to the Blocked state?",
    "options": [
      "A higher priority process becomes ready",
      "The process completes its time slice",
      "The process requests an I/O operation or resource that is not immediately available",
      "The process terminates execution"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process States (Running to Blocked)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 73,
    "text": "What is thread cancellation?",
    "options": [
      "The termination of a thread before it has completed execution",
      "The process of moving a thread from one core to another",
      "The rejection of a thread creation request by the operating system",
      "The automatic destruction of thread resources when memory is low"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Thread Cancellation)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 74,
    "text": "Which component in a computer system is responsible for the long-term storage of data?",
    "options": [
      "Cache memory",
      "CPU",
      "Secondary storage (Hard drive, SSD)",
      "RAM"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.5 The Memory Hierarchy (Secondary Storage)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 75,
    "text": "What is a key challenge in SMP systems?",
    "options": [
      "Cache coherency across multiple processors",
      "Inability to share memory between processors",
      "Higher power consumption than single-processor systems",
      "Limitation of running only one thread per processor"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.8 Multiprocessor Organization (Cache Coherence)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 76,
    "text": "What is process contention scope (PCS)?",
    "options": [
      "It measures how much processors compete for memory access",
      "It sets the priority level for processes in the scheduler",
      "It determines how user-level threads are mapped to kernel-level threads",
      "It defines the maximum number of threads allowed per process"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Process Contention Scope)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 77,
    "text": "What is priority inversion?",
    "options": [
      "A situation where a higher-priority process is forced to wait for a lower-priority process that holds a needed resource",
      "A method for dynamically adjusting thread priorities based on CPU usage",
      "A technique for resolving deadlocks by reversing process priorities",
      "A scheduling algorithm that randomly inverts process priorities"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Priority Inversion)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 78,
    "text": "What is a deadlock?",
    "options": [
      "System reboot",
      "CPU overheating",
      "File deletion",
      "Processes stuck"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch06",
    "chapterNumber": 6,
    "chapterTitle": "Concurrency: Deadlock and Starvation",
    "sectionTitle": "6.1 Principles of Deadlock",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 79,
    "text": "What does the term \"word\" refer to in computer architecture?",
    "options": [
      "Any string of characters terminated by a space",
      "The natural unit of data used by a particular CPU design",
      "A collection of 8 bits",
      "A reserved keyword in programming languages"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (Word Length)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 80,
    "text": "What is the primary purpose of a Process Control Block (PCB)?",
    "options": [
      "To encrypt process data for security purposes",
      "To store the information needed to manage a process",
      "To allocate CPU time to different applications",
      "To store the source code of a program in a process"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.3 Process Description (PCB Role)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 81,
    "text": "What is a key benefit of multithreading?",
    "options": [
      "Lower RAM usage",
      "Easier coding",
      "More disk space",
      "Better performance"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.1 Processes and Threads (Multithreading Benefit)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 82,
    "text": "What is the purpose of the cache memory in a computer system?",
    "options": [
      "Speeds up access",
      "Connects devices",
      "Error correction",
      "Permanent storage"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.6 Cache Memory (Speed & Access)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 83,
    "text": "What is a thread?",
    "options": [
      "File pointer",
      "Lightweight process",
      "Hardware device",
      "Memory slot"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.1 Processes and Threads (Thread Definition)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 84,
    "text": "Which of the following is a benefit of the many-to-one threading model?",
    "options": [
      "It provides better support for thread blocking operations",
      "It has the lowest overhead of all threading models",
      "It allows true parallel execution on multiprocessor systems",
      "Thread management is done in user space, which is efficient and portable"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Many-to-One Advantages)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 85,
    "text": "Which of the following is NOT a potential issue in concurrent systems?",
    "options": [
      "Guaranteed CPU time allocation for all processes",
      "Starvation",
      "Priority inversion",
      "Deadlock"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Potential Issues)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 86,
    "text": "What is busy waiting?",
    "options": [
      "Network polling",
      "Disk read delay",
      "File buffering",
      "CPU cycles wasted"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Busy Waiting)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 87,
    "text": "What is the purpose of cache memory?",
    "options": [
      "To permanently store the operating system",
      "To replace the hard disk for long-term storage",
      "To serve as a high-speed buffer between CPU and main memory",
      "To store the BIOS settings"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.6 Cache Memory (High-Speed Buffer)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 88,
    "text": "What is the main disadvantage of the many-to-many threading model?",
    "options": [
      "Increased complexity in implementation and scheduling",
      "It doesn't allow true parallelism",
      "It requires more memory than other threading models",
      "It can only be implemented on single-processor systems"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Many-to-Many Tradeoffs)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 89,
    "text": "In the producer-consumer problem, what happens if the buffer is full and the producer wants to add an item?",
    "options": [
      "The producer receives an exception and must handle the error",
      "The oldest item in the buffer is automatically overwritten",
      "The buffer is automatically expanded to accommodate the new item",
      "The producer must wait until a consumer removes an item"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.4 Semaphores (Producer-Consumer Buffer)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 90,
    "text": "What is the main difference between primary and secondary memory?",
    "options": [
      "Primary memory is volatile and directly accessible by the CPU, while secondary memory is non-volatile and not directly accessible",
      "Secondary memory is more expensive than primary memory",
      "Primary memory is used only for storing the operating system",
      "Primary memory is always faster than secondary memory"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.5 The Memory Hierarchy (Primary vs Secondary)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 91,
    "text": "What is the main drawback of user-level threads?",
    "options": [
      "No communication",
      "No true parallelism",
      "Slow execution",
      "Large memory"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (User-Level Parallelism Limitations)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 92,
    "text": "What is the primary function of an operating system?",
    "options": [
      "To provide a user interface for running applications",
      "To manage hardware resources and provide services for applications",
      "To perform arithmetic calculations",
      "To format and store data on secondary storage devices"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.1 OS Objectives and Functions (Resource Management)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 93,
    "text": "What does context switching refer to in operating systems?",
    "options": [
      "Switching between different programming languages",
      "Saving the state of a running process and loading the saved state of another process",
      "Converting between different file formats",
      "Changing user accounts on a computer system"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.4 Process Control (Context Switching)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 94,
    "text": "What is the primary purpose of the long-term scheduler (job scheduler)?",
    "options": [
      "To control the degree of multiprogramming by selecting which processes to admit to the system",
      "To select which process should be executed next",
      "To handle I/O interrupts",
      "To allocate memory to processes"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch09",
    "chapterNumber": 9,
    "chapterTitle": "Uniprocessor Scheduling",
    "sectionTitle": "9.1 Types of Processor Scheduling (Long-Term Scheduler)",
    "part": "PART 4 SCHEDULING"
  },
  {
    "id": 95,
    "text": "What is the von Neumann architecture?",
    "options": [
      "A computer architecture that uses multiple processors",
      "A computer design where program instructions and data share the same memory",
      "A modern parallel processing computer design",
      "A computer design with separate memories for programs and data"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (von Neumann Shared Memory)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 96,
    "text": "Which component holds all the information about a process?",
    "options": [
      "ALU",
      "PCB",
      "Cache",
      "Kernel log"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.3 Process Description (PCB Information Store)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 97,
    "text": "What is a dispatcher in the context of process management?",
    "options": [
      "A routine that destroys processes after execution",
      "A module that gives control of the CPU to the process selected by the short-term scheduler",
      "A hardware device that manages network connections",
      "A program that compiles source code into executable files"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.4 Process Control (Dispatcher)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 98,
    "text": "What is the main disadvantage of busy waiting?",
    "options": [
      "It always leads to deadlock situations",
      "It requires special hardware support",
      "It can only be used with a single processor",
      "It wastes CPU cycles"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.2 Principles of Concurrency (Busy Waiting Overhead)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 99,
    "text": "Which process state transition occurs when an I/O operation completes?",
    "options": [
      "Blocked to Ready",
      "Running to Ready",
      "Ready to Running",
      "New to Ready"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.2 Process States (I/O Complete: Blocked to Ready)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 100,
    "text": "Which memory is volatile and loses its data when power is turned off?",
    "options": [
      "Hard Disk Drive (HDD)",
      "Solid State Drive (SSD)",
      "Read-Only Memory (ROM)",
      "Random Access Memory (RAM)"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.5 The Memory Hierarchy (RAM Volatility)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 101,
    "text": "Which semaphore operation decreases the count and may block?",
    "options": [
      "wait()",
      "release()",
      "signal()",
      "notify()"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.4 Semaphores (wait Decrement & Block)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 102,
    "text": "What command shows your current directory location?",
    "options": [
      "cd",
      "pwd",
      "ls",
      "whoami"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (pwd Command)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 103,
    "text": "In the context of thread libraries, what is the primary function of Pthreads?",
    "options": [
      "It automatically distributes threads across available processors",
      "It provides a standard API for creating and managing threads",
      "It provides thread synchronization only for UNIX systems",
      "It converts user-level threads to kernel-level threads"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Pthreads API)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 104,
    "text": "Which component is often referred to as the \"brain\" of the computer?",
    "options": [
      "Random Access Memory (RAM)",
      "Central Processing Unit (CPU)",
      "Motherboard",
      "Hard Disk Drive (HDD)"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.1 Basic Elements (CPU Brain)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 105,
    "text": "What is pipelining in CPU architecture?",
    "options": [
      "A technique for cooling the processor",
      "A method for transferring data between the CPU and memory",
      "A process where multiple instructions are overlapped in execution",
      "A way of organizing memory in a hierarchical structure"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch01",
    "chapterNumber": 1,
    "chapterTitle": "Computer System Overview",
    "sectionTitle": "1.2 Evolution of Microprocessor (Pipelining)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 106,
    "text": "What does \"chmod +x filename\" do?",
    "options": [
      "Copies the file",
      "Renames the file",
      "Makes the file executable",
      "Deletes the file"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch02",
    "chapterNumber": 2,
    "chapterTitle": "Operating System Overview",
    "sectionTitle": "2.8 Traditional UNIX (chmod +x Command)",
    "part": "PART 1 BACKGROUND"
  },
  {
    "id": 107,
    "text": "What does a semaphore control?",
    "options": [
      "Power usage",
      "Process access",
      "File size",
      "Instruction speed"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.4 Semaphores (Access Control)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 108,
    "text": "What is a monitor?",
    "options": [
      "A special process that oversees the execution of other processes",
      "A hardware device that detects deadlocks in concurrent systems",
      "A software tool for analyzing the performance of concurrent programs",
      "A high-level synchronization construct that encapsulates shared data and procedures"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.5 Monitors (Synchronization Construct)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 109,
    "text": "What is the main advantage of using threads over processes?",
    "options": [
      "Threads share the same address space",
      "Threads require less CPU time to create",
      "Threads always execute in parallel",
      "Threads have separate memory protection"
    ],
    "answerIndexes": [
      0,
      1
    ],
    "multiple": true,
    "answers": [
      0,
      1
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.1 Processes and Threads (Threads vs Processes)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 110,
    "text": "Which statement about binary semaphores is correct?",
    "options": [
      "A binary semaphore cannot solve the critical section problem",
      "A binary semaphore can only take the values 0 and 1",
      "A binary semaphore requires hardware support for atomic operations",
      "A binary semaphore can only be used by exactly two processes"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.4 Semaphores (Binary Semaphore Values)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 111,
    "text": "What do threads within the same process share?",
    "options": [
      "CPU core",
      "Address space",
      "Registers",
      "Program counter"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.1 Processes and Threads (Shared Address Space)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 112,
    "text": "Which model maps many user threads to one kernel thread?",
    "options": [
      "One-to-many",
      "One-to-one",
      "Many-to-many",
      "Many-to-one"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (Many-to-One Mapping)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 113,
    "text": "Which of the following is unique to each thread?",
    "options": [
      "Heap",
      "Data segment",
      "Code",
      "Stack"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.1 Processes and Threads (Per-Thread Stack)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 114,
    "text": "In the bounded-buffer problem, what synchronization objects are typically needed?",
    "options": [
      "A binary semaphore, and a counting semaphore",
      "A mutex, and a condition variable",
      "Hardware atomic instructions",
      "Two semaphores, and a mutex"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch05",
    "chapterNumber": 5,
    "chapterTitle": "Concurrency: Mutual Exclusion and Synchronization",
    "sectionTitle": "5.4 Semaphores (Bounded-Buffer Synchronization)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 115,
    "text": "Which scheduling algorithm prioritizes processes with the shortest estimated processing time?",
    "options": [
      "Priority Scheduling",
      "Round Robin (RR)",
      "Shortest Job First (SJF)",
      "First-Come, First-Served (FCFS)"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch09",
    "chapterNumber": 9,
    "chapterTitle": "Uniprocessor Scheduling",
    "sectionTitle": "9.2 Scheduling Algorithms (Shortest Job First)",
    "part": "PART 4 SCHEDULING"
  },
  {
    "id": 116,
    "text": "What is user-level threading?",
    "options": [
      "Uses hypervisor",
      "Kernel-only model",
      "Managed by library",
      "OS scheduling"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "ch04",
    "chapterNumber": 4,
    "chapterTitle": "Threads",
    "sectionTitle": "4.2 Types of Threads (User-Level Library)",
    "part": "PART 2 PROCESSES"
  },
  {
    "id": 117,
    "text": "What is interprocess communication (IPC) used for?",
    "options": [
      "Interrupt handling",
      "System boot",
      "File storage",
      "Process coordination"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "ch03",
    "chapterNumber": 3,
    "chapterTitle": "Process Description and Control",
    "sectionTitle": "3.4 Process Control (IPC Coordination)",
    "part": "PART 2 PROCESSES"
  }
];

export function getQuestionsByChapter(chapterId?: string): TryoutEtsQuestion[] {
  if (!chapterId || chapterId === "all") {
    return tryoutEtsQuestions;
  }
  return tryoutEtsQuestions.filter((q) => q.chapterId === chapterId);
}
