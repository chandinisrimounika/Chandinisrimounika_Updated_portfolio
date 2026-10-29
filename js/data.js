/**
 * Chandini Sri Mounika Vissamsetti - Portfolio Data
 * Pure JavaScript Data Store
 */

var PORTFOLIO_DATA = {
  personalInfo: {
    name: "Chandini Sri Mounika Vissamsetti",
    shortName: "Chandini",
    monogram: "CSM",
    headline: "Computer Science Graduate | Software Engineer | AI/ML & Generative AI Developer",
    roleTags: [
      "Software Engineer",
      "Java Full Stack Developer",
      "AI/ML & Generative AI Developer",
      "Frontend Architect"
    ],
    statusNote: "Open to Software Engineering, Full Stack, and AI/ML Opportunities",
    email: "chandinisrimounika79@gmail.com",
    phone: "+91 7993975969",
    phoneFormatted: "+91 79939 75969",
    whatsappUrl: "https://wa.me/917993975969",
    location: "Vijayawada, Andhra Pradesh, India",
    education: {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "SRM University-AP",
      period: "2022 – 2026",
      cgpa: "7.93 / 10.0",
      highSchool: {
        institution: "Sri Chaitanya Junior College",
        period: "2020 – 2022",
        score: "75.5%"
      },
      secondarySchool: {
        institution: "Sri Chaitanya Techno Schools",
        period: "2019 – 2020",
        score: "98.5%"
      }
    },
    summary: "I am a Computer Science graduate from SRM University-AP specializing in Artificial Intelligence and Machine Learning. I enjoy building secure full-stack applications, AI-powered tools, and practical software solutions. My experience spans Java, Spring Boot, React, Python, Machine Learning, Generative AI, REST APIs, and database-driven applications.",
    aboutEditorial: "I have hands-on experience through internships, research, and independent projects involving frontend development, deep learning, full-stack engineering, semantic search, and Generative AI. I enjoy translating ideas into functional applications, learning new technologies, and solving practical problems through software.",
    whatIBring: [
      {
        title: "Problem-Solving & Analytical Rigor",
        description: "Structured algorithmic problem solving in Java and C++, recognized nationally as a Flipkart GRiD 7.0 semi-finalist.",
        icon: "brain"
      },
      {
        title: "Enterprise Full-Stack Engineering",
        description: "End-to-end applications integrating Spring Boot / Node.js backends with responsive, stateful React and Next.js frontends.",
        icon: "layers"
      },
      {
        title: "AI Integration & Semantic Search",
        description: "Hands-on implementation of RAG pipelines, FAISS vector indexing, TF-IDF cosine similarity, and Google Gemini API integration.",
        icon: "sparkles"
      },
      {
        title: "Security & Role-Based Authorization",
        description: "Implementation of JWT-based stateless authentication and strict role-based access control (RBAC) across API endpoints.",
        icon: "shield"
      },
      {
        title: "Continuous Learning & Project Ownership",
        description: "Proven commitment to staying ahead through verified certifications in OCI Generative AI, IBM Deep Learning, and Claude ecosystem tools.",
        icon: "check"
      }
    ],
    socials: [
      {
        label: "GitHub",
        url: "https://github.com/ChandiniSriMounika",
        icon: "github",
        badge: "30+ Repos"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/chandini-sri-mounika-18ba3a258/",
        icon: "linkedin",
        badge: "Connect"
      },
      {
        label: "Email",
        url: "mailto:chandinisrimounika79@gmail.com",
        icon: "mail",
        badge: "Direct"
      },
      {
        label: "WhatsApp",
        url: "https://wa.me/917993975969",
        icon: "message",
        badge: "+91 79939 75969"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/chandinisrimounika79/",
        icon: "instagram",
        badge: "@chandinisrimounika79"
      },
      {
        label: "Telegram",
        url: "https://web.telegram.org/a/#5630683795",
        icon: "telegram",
        badge: "Chat"
      }
    ],
    resume: {
      downloadUrl: "assets/Chandini-Sri-Mounika-Vissamsetti-Resume.pdf",
      viewUrl: "assets/Chandini-Sri-Mounika-Vissamsetti-Resume.pdf",
      filename: "Chandini-Sri-Mounika-Vissamsetti-Resume.pdf",
      format: "PDF (Original Verified Resume)",
      lastUpdated: "October 2026"
    }
  },

  skillsCategories: [
    {
      id: "programming-languages",
      title: "Programming Languages",
      tagline: "Core languages used for systems, backend, frontend, and algorithmic computing",
      skills: [
        { name: "Java", level: "Project Implemented", description: "Spring Boot, OOP, Collections, Multithreading" },
        { name: "Python", level: "Project Implemented", description: "AI/ML, RAG pipelines, PyTorch, Flask" },
        { name: "JavaScript (ES6+)", level: "Project Implemented", description: "Asynchronous JS, DOM, Full-stack apps" },
        { name: "TypeScript", level: "Project Implemented", description: "Strict typing, Next.js, React interfaces" },
        { name: "C++", level: "Core Studied & Certified", description: "Data Structures, Algorithms, STL, Certified" },
        { name: "C", level: "Core Studied & Certified", description: "Pointers, memory management, low-level concepts" },
        { name: "SQL", level: "Project Implemented", description: "Relational queries, schema design, joins, indexing" }
      ]
    },
    {
      id: "backend-development",
      title: "Backend Development",
      tagline: "Server-side architectures, RESTful APIs, and secure access systems",
      skills: [
        { name: "Spring Boot", level: "Project Implemented", description: "Microservices, dependency injection, enterprise REST APIs" },
        { name: "Spring Security", level: "Project Implemented", description: "Role-Based Access Control, JWT filters, security config" },
        { name: "Node.js", level: "Project Implemented", description: "Event loop, asynchronous workers, microservices" },
        { name: "Express.js", level: "Project Implemented", description: "Routing, middleware, rate-limiting, error handling" },
        { name: "Flask", level: "Project Implemented", description: "Lightweight Python REST backends and shell API execution" },
        { name: "REST APIs", level: "Project Implemented", description: "API design, status codes, JSON contracts, Postman testing" },
        { name: "Hibernate / JPA", level: "Project Implemented", description: "ORM entity mapping, repository queries, persistence" }
      ]
    },
    {
      id: "frontend-development",
      title: "Frontend Development",
      tagline: "High-performance, accessible, and responsive user interfaces",
      skills: [
        { name: "React.js", level: "Project Implemented", description: "Component state, hooks, virtual DOM, custom UI design" },
        { name: "Next.js 14", level: "Project Implemented", description: "App router, SSR, performance-critical rendering" },
        { name: "HTML5 & CSS3", level: "Project Implemented", description: "Semantic markup, modern flexbox, CSS grid, accessibility" },
        { name: "Tailwind CSS", level: "Project Implemented", description: "Utility-first design systems, responsive layouts, dark mode" },
        { name: "Streamlit", level: "Project Implemented", description: "Interactive AI applications and research prototypes" },
        { name: "Chart.js & Data Viz", level: "Project Implemented", description: "Real-time 60fps streaming charts and sentiment dashboards" }
      ]
    },
    {
      id: "ai-ml-genai",
      title: "AI, Machine Learning & Generative AI",
      tagline: "Neural networks, semantic search, retrieval augmentation, and LLM orchestration",
      skills: [
        { name: "Retrieval-Augmented Generation (RAG)", level: "Project Implemented", description: "PDF ingestion, FAISS indexing, context augmentation" },
        { name: "Large Language Models (LLMs)", level: "Project Implemented", description: "Prompt engineering, Gemini API integration, Claude SDK" },
        { name: "Semantic Search", level: "Project Implemented", description: "Vector embeddings, TF-IDF, and cosine similarity matching" },
        { name: "Deep Learning & CNNs", level: "Project Implemented", description: "Convolutional Neural Networks, dermoscopic image analysis" },
        { name: "Machine Learning Pipelines", level: "Project Implemented", description: "Feature extraction, preprocessing, hyperparameter tuning" },
        { name: "Sentiment Analysis", level: "Project Implemented", description: "Real-time news classification and sentiment scoring" },
        { name: "Vector Embeddings & FAISS", level: "Project Implemented", description: "High-dimensional similarity indexing and retrieval" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Storage",
      tagline: "Relational and document databases with schema design and query optimization",
      skills: [
        { name: "MySQL", level: "Project Implemented", description: "Relational data modeling, foreign keys, ACID transactions" },
        { name: "MongoDB", level: "Project Implemented", description: "NoSQL document store, aggregation pipelines, collections" },
        { name: "MongoDB Atlas", level: "Project Implemented", description: "Cloud database cluster management and network security" },
        { name: "Redis", level: "Project Implemented", description: "In-memory caching and BullMQ job queue state persistence" }
      ]
    },
    {
      id: "security-devops-tools",
      title: "Security, DevOps & Developer Tools",
      tagline: "Authentication protocols, containerization, cloud, and engineering workflows",
      skills: [
        { name: "JWT Authentication", level: "Project Implemented", description: "Token generation, claims, expiration, and authorization header parsing" },
        { name: "Role-Based Access Control (RBAC)", level: "Project Implemented", description: "Granular permissions, Admin/User authorization matrices" },
        { name: "Git & GitHub", level: "Project Implemented", description: "Version control, branching, Pull Shark achievement, open source" },
        { name: "Linux Environment", level: "Project Implemented", description: "Command-line workflows, model training execution, bash scripting" },
        { name: "Postman", level: "Project Implemented", description: "REST API testing, payload validation, environment variables" },
        { name: "Docker Fundamentals", level: "Core Studied & Certified", description: "Container concepts, Dockerfiles, isolated environments" },
        { name: "Oracle Cloud Infrastructure (OCI)", level: "Core Studied & Certified", description: "OCI Generative AI & AI Foundations Certified Associate" },
        { name: "Claude Code", level: "Core Studied & Certified", description: "Claude Code CLI, agentic workflows, repository inspection" }
      ]
    }
  ],

  projects: [
    {
      id: "secure-role-based-task-collaboration",
      title: "Secure Role-Based Task & Collaboration System",
      category: "Full Stack",
      categories: ["Full Stack"],
      tagline: "Enterprise full-stack task management system with JWT security and role-based permissions.",
      problem: "Collaborative platforms often suffer from insecure endpoints or complex privilege management, risking unauthorized modification of team tasks and confidential projects.",
      implementation: [
        "Engineered a multi-tier role authorization architecture distinguishing Admin and standard User operations.",
        "Implemented stateless JWT (JSON Web Token) authentication filters and secure Spring Security configurations.",
        "Created RESTful endpoints for granular task creation, assignment, status tracking, and deletion.",
        "Designed a responsive React interface with real-time status filtering and search capabilities."
      ],
      techStack: ["Java", "Spring Boot", "Spring Security", "React.js", "MySQL", "Hibernate / JPA", "JWT", "REST APIs"],
      githubUrl: "https://github.com/ChandiniSriMounika/Secure-Role-Based-Task-Collaboration-System-project",
      liveDemoUrl: "https://chandini-task-frontend.onrender.com",
      isFeatured: true,
      highlights: ["JWT Stateless Auth", "Admin & User RBAC", "Hibernate ORM", "Live Render Deployment"]
    },
    {
      id: "academic-paper-rag-app",
      title: "Academic Paper RAG Assistant",
      category: "Generative AI",
      categories: ["Generative AI", "AI/ML"],
      tagline: "AI research assistant using Retrieval-Augmented Generation for academic PDF deep analysis.",
      problem: "Researchers and students face cognitive fatigue parsing multi-page academic papers, extracting cross-references, and answering nuanced methodological questions accurately.",
      implementation: [
        "Constructed a multi-step RAG pipeline utilizing document loaders to extract and chunk academic PDF text.",
        "Generated dense vector embeddings indexed with FAISS for fast semantic search and similarity retrieval.",
        "Implemented context-aware question answering with cited paper excerpts to prevent hallucinated answers.",
        "Surfaced citation references and research insights within a clean interactive Streamlit dashboard."
      ],
      techStack: ["Python", "RAG", "FAISS", "Embeddings", "PyPDF", "Streamlit", "NLP", "LangChain"],
      githubUrl: "https://github.com/ChandiniSriMounika/academic-paper-rag-app",
      liveDemoUrl: "https://academic-paper-rag-app-g6vttphk5dbr9r2qzimnnx.streamlit.app/",
      isFeatured: true,
      highlights: ["Semantic Vector Search", "FAISS Vector Index", "Citation Extraction", "Streamlit Cloud Live"]
    },
    {
      id: "smart-job-matching-precision-search",
      title: "Smart Job Matching & Precision Search",
      category: "AI/ML",
      categories: ["AI/ML", "Full Stack"],
      tagline: "Recruitment search prototype combining vector-space TF-IDF similarity with strict filter constraints.",
      problem: "Standard keyword matching in recruitment platforms misses qualified candidates with synonymic skillsets, while unconstrained search results in irrelevant candidate profiles.",
      implementation: [
        "Built a vector-space relevance engine employing TF-IDF (Term Frequency-Inverse Document Frequency) and cosine similarity.",
        "Developed a resume parsing algorithm extracting core technical competencies, education, and years of experience.",
        "Integrated hard constraint filtering (domain, tier, role criteria) on top of continuous similarity scores.",
        "Created a fast, client-side interface allowing recruiters to submit queries and inspect candidate rankings."
      ],
      techStack: ["JavaScript", "TF-IDF", "Cosine Similarity", "NLP", "Resume Parsing", "Node.js", "Vercel"],
      githubUrl: "https://github.com/ChandiniSriMounika/Smart-Job-Matching-Precision-Search-Background",
      liveDemoUrl: "https://smart-job-matching-precision-search.vercel.app",
      isFeatured: true,
      highlights: ["TF-IDF & Cosine Similarity", "Dual Filter Architecture", "Resume Parser", "Vercel Live"]
    },
    {
      id: "dynamic-news-aggregator-sentiment",
      title: "Dynamic News Aggregator with Sentiment Analysis",
      category: "Full Stack",
      categories: ["Full Stack", "AI/ML"],
      tagline: "Full-stack real-time news pipeline classifying article tone using the Google Gemini API.",
      problem: "High-volume news streams make it difficult for analysts to synthesize coverage trends and understand prevailing market sentiment without manual reading.",
      implementation: [
        "Implemented an automated web scraper with Cheerio to extract headlines and summaries from news sources.",
        "Integrated Google Gemini API to categorize sentiment into positive, neutral, or negative classifications.",
        "Persisted aggregated articles and classification metadata in a cloud MongoDB Atlas database.",
        "Built an interactive React dashboard with Chart.js to render real-time sentiment breakdowns and category filters."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "Google Gemini API", "Cheerio", "Chart.js", "MongoDB Atlas"],
      githubUrl: "https://github.com/ChandiniSriMounika/Dynamic-News-Aggregator-with-Sentiment-Analysis",
      liveDemoUrl: "https://dynamic-news-aggregator.netlify.app/",
      backendApiUrl: "https://dynamic-news-aggregator.onrender.com/api/news",
      isFeatured: true,
      highlights: ["Google Gemini API", "Cheerio News Pipeline", "MongoDB Atlas", "Interactive Sentiment Charts"]
    },
    {
      id: "performance-critical-data-viz",
      title: "Performance-Critical Data Visualization Dashboard",
      category: "Frontend",
      categories: ["Frontend", "Developer Tools"],
      tagline: "High-throughput real-time dashboard rendering 10,000+ data points at 60 FPS.",
      problem: "Complex web dashboards drop frames and freeze user interactions when displaying massive real-time time-series streams.",
      implementation: [
        "Architected using Next.js 14 and TypeScript with aggressive frontend performance optimizations.",
        "Engineered efficient data windowing and throttled canvas/chart updates to maintain 60 FPS under load.",
        "Decoupled streaming ingestion state from visual chart components to avoid cascading React re-renders.",
        "Tested and verified rendering performance with 10,000+ concurrent simulated data points."
      ],
      techStack: ["Next.js 14", "TypeScript", "React", "Data Visualization", "Performance Profiling", "Vercel"],
      githubUrl: "https://github.com/ChandiniSriMounika/Performance-Critical-Data-Visualization-Dashboard",
      liveDemoUrl: "https://performance-critical-data-visualiza.vercel.app",
      isFeatured: true,
      highlights: ["10,000+ Points at 60 FPS", "Next.js 14 App Router", "TypeScript Strict", "Render Throttling"]
    },
    {
      id: "reachinbox-email-scheduler",
      title: "ReachInbox Asynchronous Email Scheduler",
      category: "Developer Tools",
      categories: ["Developer Tools", "Full Stack"],
      tagline: "Resilient asynchronous task worker with BullMQ and Redis for scheduled delivery.",
      problem: "High-volume email delivery platforms fail without fault-tolerant queues, rate limiting, and persistent state across server restarts.",
      implementation: [
        "Constructed a Node.js and TypeScript worker architecture utilizing BullMQ and Redis for queue persistence.",
        "Implemented support for CSV bulk contact uploads and automated batch scheduling.",
        "Engineered granular rate limiters and delayed queue workers to protect sender domain reputation.",
        "Demonstrated queue durability and restart resilience through structured test suites."
      ],
      techStack: ["Node.js", "TypeScript", "BullMQ", "Redis", "Express.js", "Nodemailer", "Worker Queues"],
      githubUrl: "https://github.com/ChandiniSriMounika/reachinbox-email-scheduler",
      isFeatured: true,
      highlights: ["BullMQ & Redis", "CSV Batch Ingestion", "Process Restart Resilience", "Worker Concurrency"]
    },
    {
      id: "attendance-management-dynamic-qr",
      title: "Attendance Management System with Dynamic QR Code",
      category: "Full Stack",
      categories: ["Full Stack"],
      tagline: "Real-time attendance platform utilizing decaying dynamic QR codes and secure authentication.",
      problem: "Traditional sign-in sheets and static QR codes invite buddy punching and lack immediate validation.",
      implementation: [
        "Implemented a dynamic QR generation loop with time-decaying tokens to prevent code sharing.",
        "Created role-separated portals for students to scan and educators to review live session records.",
        "Containerized deployment configuration with Docker for reproducible development and hosting."
      ],
      techStack: ["React", "TypeScript", "Node.js", "Docker", "Dynamic QR", "REST APIs"],
      githubUrl: "https://github.com/ChandiniSriMounika/attendance-management-system-using-dynamic-QR-code",
      isFeatured: false,
      highlights: ["Time-Decaying QR Tokens", "Docker Containerization", "Student & Faculty Portals"]
    },
    {
      id: "maersk-pdf-highlighter",
      title: "Maersk Q2 Report PDF Highlighter",
      category: "Frontend",
      categories: ["Frontend"],
      tagline: "Case study React application featuring bi-directional text highlighting across financial PDF pages.",
      problem: "Financial report reviewers struggle to connect summary analytical notes directly to specific clauses in dense corporate earnings PDFs.",
      implementation: [
        "Built a custom PDF rendering interface utilizing React, react-pdf, and Mozilla PDF.js.",
        "Engineered click-to-highlight logic matching reference markers to exact paragraph bounding coordinates.",
        "Demonstrated automated navigation jumping directly to relevant citation pages in the Maersk Q2 interim report."
      ],
      techStack: ["React", "react-pdf", "PDF.js", "JavaScript", "Netlify"],
      githubUrl: "https://github.com/ChandiniSriMounika/cloudmotiv-case-study_maersk-pdf-highlighter",
      liveDemoUrl: "https://69203ed293ec5c2d2737a3a0--soft-creponne-92608a.netlify.app/",
      isFeatured: false,
      highlights: ["react-pdf & PDF.js", "Coordinate-Based Text Highlight", "Netlify Live Demo"]
    },
    {
      id: "python-command-terminal",
      title: "Python Browser Command Terminal",
      category: "Developer Tools",
      categories: ["Developer Tools", "Full Stack"],
      tagline: "Web-based UNIX shell simulator built with Flask for browser-based command practice.",
      problem: "Students and learners need a frictionless, zero-install environment to practice fundamental Linux command patterns.",
      implementation: [
        "Developed a browser terminal UI supporting history traversal, clear screen, and command parsing.",
        "Constructed a secure Python Flask backend exposing `/api/exec` for command execution.",
        "Emulated key filesystem operations including pwd, ls, cd, mkdir, rm, touch, cat, and echo."
      ],
      techStack: ["Python", "Flask", "JavaScript", "HTML5 Terminal", "Render"],
      githubUrl: "https://github.com/ChandiniSriMounika/Python-Based-Command-Terminal",
      liveDemoUrl: "https://python-based-command-terminal-1-5jfe.onrender.com/",
      isFeatured: false,
      highlights: ["UNIX Shell Emulation", "Flask REST API", "Live Render Deployment"]
    },
    {
      id: "library-book-service",
      title: "Library Book Issue & Return Service",
      category: "Full Stack",
      categories: ["Full Stack"],
      tagline: "Full-stack inventory and circulation system streamlining book lending lifecycles.",
      problem: "Manual library tracking causes inventory discrepancies, unrecorded returns, and overdue fees.",
      implementation: [
        "Built RESTful service endpoints handling full book circulation (issue, return, renewal, and stock check).",
        "Designed member management schemas with tracking for active loans and return deadlines.",
        "Created a structured web dashboard for library administrators."
      ],
      techStack: ["JavaScript", "Node.js", "Express.js", "REST APIs", "CRUD Operations"],
      githubUrl: "https://github.com/ChandiniSriMounika/Library-Book-Issue-Return-Service",
      isFeatured: false,
      highlights: ["Circulation Lifecycle", "Member Loan Tracking", "Clean REST Endpoints"]
    },
    {
      id: "real-time-chat",
      title: "Real-Time WebSocket Chat Application",
      category: "Full Stack",
      categories: ["Full Stack"],
      tagline: "Bi-directional chat application enabling low-latency multi-client message broadcasting.",
      problem: "Traditional HTTP polling creates significant network overhead and sluggish communication in chat interfaces.",
      implementation: [
        "Constructed a persistent WebSocket event stream for instantaneous bi-directional communication.",
        "Implemented active room broadcasting, user joins, message timestamps, and disconnect handlers.",
        "Created a responsive mobile-friendly chat client interface."
      ],
      techStack: ["JavaScript", "Node.js", "WebSockets / Socket.io", "HTML5", "CSS3"],
      githubUrl: "https://github.com/ChandiniSriMounika/Real-Time-Chat-Application",
      isFeatured: false,
      highlights: ["Bi-directional WebSockets", "Active Room Channels", "Zero-Polling Messaging"]
    },
    {
      id: "high-performance-data-loader",
      title: "High-Performance PyTorch Data Loader",
      category: "AI/ML",
      categories: ["AI/ML", "Developer Tools"],
      tagline: "Optimized deep learning data ingestion pipeline to accelerate computer vision training.",
      problem: "Deep learning models frequently idle on GPU compute while waiting for slow disk I/O and unoptimized image transforms.",
      implementation: [
        "Designed an asynchronous PyTorch dataset loader leveraging Python multiprocessing workers.",
        "Implemented memory pinning and efficient prefetching to eliminate training pipeline bottlenecks.",
        "Benchmarked batch throughput against default sequential data loaders."
      ],
      techStack: ["Python", "PyTorch", "Computer Vision", "Multiprocessing", "I/O Optimization"],
      githubUrl: "https://github.com/ChandiniSriMounika/High-performance-Data-Loader",
      isFeatured: false,
      highlights: ["PyTorch Dataset Optimization", "Multiprocess Prefetching", "GPU Pipeline Saturation"]
    },
    {
      id: "coursegpt-job-seeking",
      title: "CourseGPT for Career & Skill Guidance",
      category: "Frontend",
      categories: ["Frontend", "AI/ML"],
      tagline: "AI-assisted guidance application recommending focused course roadmaps for job seekers.",
      problem: "Students entering the tech industry find it difficult to map broad university curricula to concrete job requirements.",
      implementation: [
        "Developed an interactive TypeScript client that parses user career goals and maps target skills.",
        "Structured curated learning pathways matching industry-standard role requirements.",
        "Delivered a clean, modern user experience designed to reduce career transition anxiety."
      ],
      techStack: ["TypeScript", "React", "Tailwind CSS", "Educational UX"],
      githubUrl: "https://github.com/ChandiniSriMounika/CourseGPT-for-job-seeking",
      liveDemoUrl: "https://drive.google.com/file/d/1coJWoidsipuL4hszKjooFDcdoXABIQ_i/view?usp=sharing",
      isFeatured: false,
      highlights: ["Personalized Skill Paths", "Role-to-Course Mapping", "Walkthrough Video Available"]
    },
    {
      id: "food-ordering-app",
      title: "Online Food Ordering & Menu Application",
      category: "Full Stack",
      categories: ["Full Stack"],
      tagline: "Interactive digital dining interface with dynamic cart calculation and responsive checkout.",
      problem: "Restaurant ordering apps often suffer from clunky cart updates and poor mobile usability.",
      implementation: [
        "Implemented dynamic menu catalog browsing with category filters and item customization.",
        "Engineered real-time cart state management calculating taxes, discounts, and order totals.",
        "Designed an intuitive responsive checkout flow optimized for handheld mobile devices."
      ],
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "State Management"],
      githubUrl: "https://github.com/ChandiniSriMounika/Food-Ordering-Application",
      isFeatured: false,
      highlights: ["Real-Time Cart Calculation", "Category Browsing", "Mobile-First UX"]
    },
    {
      id: "nxtwave-growth-challenge",
      title: "NxtWave Growth Challenge Campaign Page",
      category: "Frontend",
      categories: ["Frontend"],
      tagline: "Campaign landing page prototype featuring gamified referral loops and a live leaderboard.",
      problem: "Student workshop signups suffer from drop-off without viral incentives and dynamic social proof.",
      implementation: [
        "Created a landing page prototype featuring an engaging student referral loop.",
        "Built a dynamic leaderboard displaying top student ambassadors to foster healthy competition.",
        "Structured conversion-oriented copy with countdown triggers as part of an educational challenge."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Gamification UI", "GitHub Pages"],
      githubUrl: "https://github.com/ChandiniSriMounika/nxtwave-growth-challenge",
      liveDemoUrl: "https://chandinisrimounika.github.io/nxtwave-growth-challenge/",
      isFeatured: false,
      highlights: ["Referral Loop Mechanism", "Live Leaderboard", "Challenge Project Submission"]
    }
  ],

  experiences: [
    {
      id: "srm-research-intern",
      role: "Research Intern — Deep Learning",
      organization: "SRM University-AP",
      period: "September 2025 – December 2025",
      location: "Andhra Pradesh, India",
      type: "Research Internship",
      focus: "Dermatology skin disease detection and multi-class lesion classification using Convolutional Neural Networks (CNNs).",
      responsibilities: [
        "Curated and preprocessed dermoscopic medical image datasets through normalization, resizing, and data augmentation to prevent overfitting.",
        "Conducted feature extraction experiments and tuned deep learning model hyperparameters across CNN architectures.",
        "Constructed, debugged, and monitored machine learning training pipelines within a remote Linux environment.",
        "Evaluated model diagnostic metrics including precision, recall, confusion matrices, and ROC-AUC scores for clinical relevance."
      ],
      technologies: ["Python", "Deep Learning", "Convolutional Neural Networks (CNNs)", "Image Preprocessing", "Linux", "PyTorch / TensorFlow"],
      credentialNote: "Academic research internship under university faculty mentorship"
    },
    {
      id: "edunet-frontend-intern",
      role: "Front-End Developer Intern",
      organization: "Edunet Foundation",
      collaborators: "In collaboration with IBM SkillsBuild & SRM University-AP",
      period: "June 2024 – July 2024",
      location: "Virtual / Remote",
      type: "Frontend Internship",
      focus: "Production of responsive web interfaces, cross-browser compatibility, and modular user interface engineering.",
      responsibilities: [
        "Engineered mobile-first responsive web pages using semantic HTML5, modern CSS3 layout techniques, and JavaScript.",
        "Built interactive UI components adhering to usability best practices and accessibility guidelines.",
        "Integrated client-side API calls to handle asynchronous data fetching and dynamic state updates.",
        "Tested and debugged layouts across varied desktop and mobile browser viewports to ensure seamless visual consistency."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "REST APIs", "Cross-Browser Compatibility"],
      credentialNote: "Verified completion certificate issued by Edunet Foundation & IBM SkillsBuild",
      certificateUrl: "assets/certifications/edunet-internship.pdf"
    }
  ],

  internshipProjects: [
    {
      title: "CodeAlpha Web Development Projects",
      organization: "CodeAlpha Internship",
      description: "Built an interactive Image Gallery, functional Calculator, and early Portfolio prototype with clean JavaScript DOM manipulation.",
      technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
      githubUrl: "https://github.com/ChandiniSriMounika/CODEALPHA"
    },
    {
      title: "CodSoft Frontend Suite",
      organization: "CodSoft Internship",
      description: "Developed modern landing page templates, user utility calculators, and responsive portfolio layouts focusing on clean frontend semantics.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/ChandiniSriMounika/CODSOFT"
    },
    {
      title: "Edunet Personal Portfolio Prototype",
      organization: "Edunet Foundation & IBM SkillsBuild",
      description: "Constructed a personal showcase project demonstrating core responsive design patterns and deployed live to Vercel.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
      githubUrl: "https://github.com/ChandiniSriMounika/Edunet-personal-portfolio"
    }
  ],

  certifications: [
    {
      id: "claude-101",
      title: "Claude 101",
      issuer: "Claude Academy",
      issueDate: "September 17, 2026",
      category: "AI & Generative AI",
      badgeImage: "assets/certifications/claude-101-badge.svg",
      skillsCovered: ["Claude Architecture", "Prompt Engineering", "Context Windows", "Anthropic AI Best Practices"],
      isVerified: true,
      type: "Course Credential"
    },
    {
      id: "claude-code-in-action",
      title: "Claude Code in Action",
      issuer: "Claude Academy",
      issueDate: "September 17, 2026",
      category: "AI & Generative AI",
      badgeImage: "assets/certifications/claude-code-in-action-badge.svg",
      skillsCovered: ["Claude Code CLI", "Agentic Coding Workflows", "Terminal Automation", "Repository Refactoring"],
      isVerified: true,
      type: "Course Credential"
    },
    {
      id: "oracle-oci-generative-ai",
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle University",
      issueDate: "July 24, 2025",
      credentialId: "102089082OCI25GAIOCP",
      category: "AI & Generative AI",
      badgeImage: "assets/certifications/oracle-generative-ai.png",
      certificatePdf: "assets/certifications/oracle-generative-ai.pdf",
      skillsCovered: ["Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)", "OCI GenAI Service", "Vector Databases", "Fine-Tuning"],
      isVerified: true,
      type: "Professional Certification"
    },
    {
      id: "oracle-oci-ai-foundations",
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      issueDate: "July 24, 2025",
      credentialId: "102089082OCI25AICFA",
      category: "Cloud & Infrastructure",
      badgeImage: "assets/certifications/oracle-ai-foundations.png",
      certificatePdf: "assets/certifications/oracle-ai-foundations.pdf",
      skillsCovered: ["Artificial Intelligence", "Machine Learning", "Deep Learning Foundations", "Oracle Cloud AI Services"],
      isVerified: true,
      type: "Professional Certification"
    },
    {
      id: "coursera-cpp-dsa",
      title: "C++ Data Structures and Algorithms Specialization",
      issuer: "Coursera / Codio",
      issueDate: "2024",
      verificationUrl: "https://coursera.org/verify/specialization/WD9YR5TVI80S",
      category: "Programming & DSA",
      badgeImage: "assets/certifications/coursera-dsa-badge.svg",
      skillsCovered: ["C++ STL", "Trees & Graphs", "Dynamic Programming", "Algorithmic Complexity", "Memory Pointers"],
      isVerified: true,
      type: "Specialization"
    },
    {
      id: "ibm-deep-learning-pytorch",
      title: "Deep Learning with PyTorch",
      issuer: "IBM / Coursera",
      issueDate: "August 2025",
      category: "AI & Generative AI",
      badgeImage: "assets/certifications/ibm-pytorch-badge.svg",
      skillsCovered: ["PyTorch Tensors", "Convolutional Neural Networks", "Backpropagation", "Loss Optimization", "Model Evaluation"],
      isVerified: true,
      type: "Course Credential"
    },
    {
      id: "infosys-advanced-ai-python",
      title: "Advanced Artificial Intelligence Projects with Python",
      issuer: "Infosys Springboard",
      issueDate: "2025",
      verificationUrl: "https://verify.onwingspan.com",
      category: "AI & Generative AI",
      badgeImage: "assets/certifications/infosys-ai-badge.svg",
      skillsCovered: ["Python AI Engineering", "Model Deployment", "Data Pipelines", "Real-World AI Scenarios"],
      isVerified: true,
      type: "Course Credential"
    },
    {
      id: "infosys-python-basics",
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      issueDate: "2025",
      verificationUrl: "https://verify.onwingspan.com",
      category: "Programming & DSA",
      badgeImage: "assets/certifications/infosys-python-badge.svg",
      skillsCovered: ["Python Syntax", "Control Flow", "Data Structures", "Functions", "OOP Basics"],
      isVerified: true,
      type: "Course Credential"
    }
  ],

  achievements: [
    {
      id: "flipkart-grid-7",
      title: "Flipkart GRiD 7.0",
      award: "National Semi-Finalist (2025)",
      organization: "Flipkart Early Careers",
      date: "2025",
      description: "Ranked among the top engineering teams nationwide in India's premier engineering campus challenge. Recognized for advanced technical problem-solving, algorithmic capability, and innovative engineering under competitive timelines.",
      image: "assets/certifications/flipkart-grid-7.png",
      highlights: [
        "Top engineering tier nationwide across thousands of university participants",
        "Rigorous technical problem solving and algorithm design evaluation",
        "Official Certificate of Achievement from Flipkart Early Careers"
      ],
      type: "Competition"
    },
    {
      id: "naukri-young-turks-2026",
      title: "Naukri Campus Young Turks 2026",
      award: "Scored 93.28 Percentile Nationwide (Certificate of Merit)",
      organization: "HCLTech & Naukri Campus",
      date: "October 19, 2026",
      credentialId: "6acf479696ebe313e740afd9",
      description: "Awarded Certificate of Merit for scoring 93.28 percentile in Naukri Campus Young Turks 2026, India's largest skill contest presented by HCLTech and recognized by top industry leaders.",
      image: "assets/certifications/naukri-young-turks.png",
      pdfUrl: "assets/certifications/naukri-young-turks.pdf",
      highlights: [
        "93.28 Percentile Nationwide in India's largest skill contest",
        "Certificate ID: 6acf479696ebe313e740afd9",
        "Presented by HCLTech & Recognized by leading industry leaders"
      ],
      type: "National Assessment"
    },
    {
      id: "github-pull-shark",
      title: "GitHub Pull Shark Achievement",
      award: "Open Source Contributor & Pull Shark Badge",
      organization: "GitHub",
      date: "Verified Profile",
      link: "https://github.com/ChandiniSriMounika",
      description: "Earned the official GitHub Pull Shark achievement for consistently opening, collaborating on, and merging quality pull requests across technical repositories and open-source contributions.",
      image: "assets/certifications/github-pull-shark.svg",
      highlights: [
        "Official GitHub profile achievement badge",
        "30+ active public repositories and project commits",
        "Real-world version control and branch merging lifecycle experience"
      ],
      type: "Open Source"
    }
  ]
};

// Universal export for browser window & testing environments
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

