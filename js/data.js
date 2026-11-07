// ==============================================================
// DATA STORE: DESCRIPTIONS, PROFILES, MODAL DATA & COMMANDS
// ==============================================================

// --- Perspective Lens Narrative Text ---
const lensDescriptions = {
    all: 'M.Sc. researcher in Computer &amp; Systems Engineering at <strong class="text-white">TU Ilmenau</strong> with around 3 years of commercial software engineering experience. Specializing in <span class="text-neon-cyan font-medium">LLM hallucination quantification</span>, <span class="text-neon-purple font-medium">vector RAG architectures</span>, <span class="text-neon-emerald font-medium">Java multi-tier enterprise backends</span>, and <span class="text-neon-amber font-medium">mission-critical QA automation</span>.',
    ai: 'Empirical AI Engineering focus: Quantifying hallucinations across <span class="text-neon-purple font-semibold">Qwen, Gemma, Llama and more</span> using cosine certainty and vector representations. Designing production vector RAG workflows with <span class="text-neon-cyan font-semibold"> embeddings, Javalin, and SQLite</span>.',
    java: 'Full-Stack Java Systems focus: Around 3 years of professional engineering revitalizing enterprise e-commerce platforms (<span class="text-neon-cyan font-semibold">Ninja Framework, JPA ORM, H2/SQL</span>), coordinating 190+ tickets as project lead, and developing high-throughput Javalin micro-services.',
    qa: 'SDET &amp; Automated Testing focus: Engineering robust Page Object Model automation suites with <span class="text-neon-emerald font-semibold">Selenium, Selenide, Neodymium, JUnit 5, and Playwright</span>. Postman-to-XLT compatibility bridge builder for enterprise load testing.',
    hardware: 'Embedded Systems &amp; Robotics focus: Computer Engineering graduate with capstone in <span class="text-neon-rose font-semibold">autonomous drone collision avoidance</span> (Arduino Nano + ArduPilot Mega over MAVLink + LiDAR). Active Deputy Manager at Repair Café troubleshooting micro-electronics.'
};

// --- Recruiter Hub Profiles ---
const recruiterProfiles = {
    qa: {
        title: '// TARGET ROLE: QA / TEST AUTOMATION / SDET PROFILE',
        text: 'QA and test automation engineer with around 3 years of software engineering experience, including automated UI and API testing, load and performance testing, debugging, and release work in Agile projects. Worked with Selenium WebDriver, Playwright, JUnit, Selenide, Neodymium, XLT/XTC, Postman, and Allure, and has experience turning requirements into test cases and maintaining automated test suites. English C1/C2, German B1+.',
        stack: 'Selenium, Selenide, Neodymium, Playwright, JUnit 5, XLT, Postman, Allure'
    },
    ai: {
        title: '// TARGET ROLE: AI ENGINEERING / LLM RESEARCH PROFILE',
        text: 'M.Sc. researcher in Computer and Systems Engineering at TU Ilmenau with  software and research oriented AI engineering experience and current work in LLM evaluation and RAG-based applications. Uses Python, PyTorch, Java, Open Weight LLMs, APIs, Local LLMs, Cloud-based LLMs, various embedding quantification techniques, vector databases, vector retrieval, hallucination research, semantic search, and AI-enabled backend systems. English C1/C2, German B1+.',
        stack: 'Python, PyTorch, Java, Locally Deployed LLMs, HPC Cluster, API, Vector RAG, Cosine Similarity, Embeddings, SQLite'
    },
    java: {
        title: '// TARGET ROLE: JAVA SYSTEMS & BACKEND DEVELOPMENT PROFILE',
        text: 'Software engineer with around 3 years of experience working mainly with Java backends, web applications, databases, and automated testing. Professional work includes a multi-tier e-commerce application using Java, Ninja Framework, and JPA ORM, while personal projects use Javalin, REST APIs, Maven, SQLite, and external APIs.',
        stack: 'Java, Ninja Framework, Javalin, Spring Boot, JPA ORM, H2, SQLite, REST, Maven'
    },
    web: {
        title: '// TARGET ROLE: FULL-STACK WEB DEVELOPMENT PROFILE',
        text: 'Software engineer with experience across backend and frontend web development using Java, PHP, JavaScript, HTML/CSS, CodeIgniter, Javalin, FreeMarker, Bootstrap, and Tailwind CSS. Professional work includes maintaining and modernizing an e-commerce application, while personal projects combine Java or Node.js backends with browser-based interfaces and AI features. English C1/C2, German B1+.',
        stack: 'Node.js, Express, PHP, CodeIgniter, Tailwind CSS, FreeMarker, Bootstrap, HTML5/ES6'
    },
    embedded: {
        title: '// TARGET ROLE: HARDWARE / ARDUINO / EMBEDDED PROFILE',
        text: 'Computer Engineering graduate with hands-on hardware and embedded-system project experience, including an autonomous drone project that connected an Arduino Nano with an ArduPilot Mega flight controller and ultrasonic/LiDAR sensing for collision avoidance. Also volunteers at a Repair Café, troubleshooting laptops, PCs, smartphones, and other electronic devices. English C1/C2, German B1+.',
        stack: 'C++, Arduino Nano, ArduPilot Mega, MAVLink, LiDAR, Ultrasonic, Hardware Diagnostics'
    }
};

// --- Project Deep Dive Details ---
const projectModalDetails = {
    'modal-aicvnow': {
        title: 'aicvnow (cvezee) | AI CV Optimizer',
        subtitle: 'Full-Stack GenAI Application • Node.js, Gemini API, Supabase, Puppeteer Core',
        body: `
            <p><strong>Overview:</strong> aicvnow solves the asymmetry in job applications by providing an automated, intelligent analysis engine that extracts requirements from job descriptions and harmonizes them with an authentic master CV.</p>
            <h4 class="text-white font-bold mt-4 mb-2">Key Technical Innovations:</h4>
            <ul class="list-disc list-inside space-y-1.5">
                <li><strong>Structured Skill Audit:</strong> Leverages strict JSON schema contracts with Google Gemini to separate skills into three distinct telemetry categories: Matched Skills, Omitted Master Skills, and Missing Requirements.</li>
                <li><strong>Anti-Buzzword Humanizer Engine:</strong> Implements negative constraints prohibiting synthetic LLM buzzwords (e.g., "spearheaded", "synergized", "leveraged", "pivotal"), mandating direct, human-authored accomplishment phrasing.</li>
                <li><strong>Live Click-to-Edit Sync:</strong> Interactive preview DOM listeners calculate exact line coordinates so clicking any sentence in the rendered CV auto-scrolls the raw markdown editor.</li>
                <li><strong>Automated PDF Generation:</strong> Uses Puppeteer Core connected to local browser instances with custom-crafted CSS page stylesheets (Executive Dark, Modern Teal, Minimal Serif).</li>
            </ul>
            <div class="mt-4 p-3 rounded-lg bg-dark-950 border border-white/5 font-mono text-xs">
                <strong>Impact:</strong> Increased application interview callback rates by &gt;200% and reduced manual tailoring time by over 95%.
            </div>
        `
    },
    'modal-hallucination': {
        title: 'AI Hallucination Quantification System',
        subtitle: 'Academic Research • Technische Universität Ilmenau (2025 – Present)',
        body: `
            <p><strong>Research Scope:</strong> Investigating empirical methods to quantify semantic divergence and hallucination probability across open-weight LLM families, specifically Qwen, Gemma, and Llama architectures.</p>
            <h4 class="text-white font-bold mt-4 mb-2">Methodological Formulation:</h4>
            <ul class="list-disc list-inside space-y-1.5">
                <li><strong>Vector Representation Extraction:</strong> Extracts hidden state vectors and sentence embeddings across controlled multi-turn prompt sets.</li>
                <li><strong>Prospect Certainty Weighting:</strong> Applies mathematical prospect weighting to cosine similarity matrices to detect subtle distribution shifts that precede factual hallucination.</li>
                <li><strong>Model Comparison:</strong> Benchmarks parameter size vs. factual hallucination resistance under domain-specific stress tests.</li>
            </ul>
            <div class="mt-4 p-3 rounded-lg bg-dark-950 border border-white/5 font-mono text-xs">
                <strong>Tech Stack:</strong> Python, PyTorch, Hugging Face Transformers, NumPy, SciPy, Vector Analysis.
            </div>
        `
    },
    'modal-whatsnews': {
        title: 'WhatsNews | Vector RAG News Engine',
        subtitle: 'Lightweight Java Backend • Javalin, SQLite Vector RAG, Gemini API',
        body: `
            <p><strong>Overview:</strong> WhatsNews is an intelligent news aggregation and semantic Q&amp;A platform engineered with a clean, low-latency Java backend.</p>
            <h4 class="text-white font-bold mt-4 mb-2">Key Engineering Details:</h4>
            <ul class="list-disc list-inside space-y-1.5">
                <li><strong>Lightweight Concurrency:</strong> Javalin micro-framework backend running asynchronous background ingestion jobs and SQLite vector indices without heavy container overhead.</li>
                <li><strong>Vector RAG Workflow:</strong> News documents are chunked and embedded using Gemini's text embedding APIs, enabling instant semantic search and natural-language synthesis.</li>
                <li><strong>Rate-Limit Resilience:</strong> Automated token-bucket rotation of API keys and fallback models to gracefully survive HTTP 429 and 503 limits without user downtime.</li>
            </ul>
            <div class="mt-4 flex items-center space-x-3">
                <a href="https://www.loom.com/share/b05012fd7a3c45c6a8ec7363f8b86ff9" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-neon-blue text-dark-950 font-bold text-xs font-mono">
                    Watch Full Video Walkthrough on Loom &rarr;
                </a>
            </div>
        `
    },
    'modal-regression': {
        title: 'University Portal Automated Regression Test Suite',
        subtitle: 'TU Ilmenau Research Seminar 2025 • Page Object Model Architecture',
        body: `
            <p><strong>Overview:</strong> Developed an enterprise-grade automated regression test suite for TU Ilmenau's online project registration portal to eliminate repetitive manual validation.</p>
            <h4 class="text-white font-bold mt-4 mb-2">Architecture Highlights:</h4>
            <ul class="list-disc list-inside space-y-1.5">
                <li><strong>Page Object Model (POM):</strong> Decoupled UI selectors from test assertions through reusable page component classes.</li>
                <li><strong>16 End-to-End Scenarios:</strong> Full lifecycle coverage including login authentication, project registration, file uploads, role verification, and project cancellations.</li>
                <li><strong>Telemetry &amp; Reporting:</strong> Integrated Allure framework for automated step screenshots, failure stacks, and execution timelines.</li>
            </ul>
            <div class="mt-4 p-3 rounded-lg bg-dark-950 border border-white/5 font-mono text-xs">
                <strong>Technologies:</strong> Java, Selenide, Neodymium, JUnit 5, Allure, Maven, JSON/YAML data sets.
            </div>
        `
    },
    'modal-posters': {
        title: 'Posters Demo Store Revitalization',
        subtitle: 'Xceptance Software Technologies GmbH • 190+ Tickets Resolved',
        body: `
            <p><strong>Overview:</strong> Served as Project Lead coordinating development, testing, and multi-tier release lifecycles for an enterprise e-commerce demo application.</p>
            <h4 class="text-white font-bold mt-4 mb-2">Key Responsibilities &amp; Deliverables:</h4>
            <ul class="list-disc list-inside space-y-1.5">
                <li><strong>Project Leadership:</strong> Coordinated a 2–3 person team across 190+ Jira issues, authoring and deploying code for over 70% of tickets personally.</li>
                <li><strong>Postman-XLT Compatibility Layer:</strong> Engineered a custom Java translation layer enabling Postman collections to execute in Xceptance's XLT high-scale load-testing framework.</li>
                <li><strong>Stack Modernization:</strong> Refactored backend and frontend layers using Java, Ninja Framework, JPA ORM, and Bootstrap.</li>
            </ul>
        `
    },
    'modal-drone': {
        title: 'Autonomous Drone Collision-Avoidance System',
        subtitle: 'Bahria University Capstone Project • Arduino Nano &amp; APM over MAVLink',
        body: `
            <p><strong>Overview:</strong> Engineered a fully functional autonomous aerial vehicle equipped with real-time obstacle detection and automated evasive flight logic.</p>
            <h4 class="text-white font-bold mt-4 mb-2">Robotics &amp; Communication Stack:</h4>
            <ul class="list-disc list-inside space-y-1.5">
                <li><strong>Sensor Array:</strong> Integrated LiDAR pulsed distance sensors with ultrasonic ranging for multi-directional proximity detection.</li>
                <li><strong>MAVLink Bridge:</strong> Connected Arduino Nano microcontroller with an ArduPilot Mega (APM) flight controller via serial MAVLink telemetry protocol.</li>
                <li><strong>Evasive Trajectory:</strong> Programmed reactive avoidance algorithms commanding the flight controller to alter attitude and vector away from obstacles.</li>
            </ul>
        `
    }
};

// --- Terminal CLI Command Directory ---
const terminalCommands = {
    help: () => `
        <div class="text-neon-cyan font-bold">AVAILABLE COMMANDS:</div>
        <div class="grid grid-cols-2 gap-2 text-xs text-gray-300 mt-1">
            <div><span class="text-neon-emerald font-bold">whoami</span> : Bio and core credentials</div>
            <div><span class="text-neon-emerald font-bold">projects</span> : List flagship systems</div>
            <div><span class="text-neon-emerald font-bold">skills</span> : Technical capabilities</div>
            <div><span class="text-neon-emerald font-bold">lens [role]</span> : Switch lens (ai, java, qa, hw)</div>
            <div><span class="text-neon-emerald font-bold">theme [eink|cyber]</span> : Eye-soothing E-Ink / Cyber</div>
            <div><span class="text-neon-emerald font-bold">eval</span> : Run LLM hallucination benchmark</div>
            <div><span class="text-neon-emerald font-bold">cv [role]</span> : View tailored CV profile</div>
            <div><span class="text-neon-emerald font-bold">hobbies</span> : Personal passions &amp; Repair Café</div>
            <div><span class="text-neon-emerald font-bold">contact</span> : Email, phone, and profiles</div>
            <div><span class="text-neon-emerald font-bold">matrix</span> : Digital rain easter egg</div>
            <div><span class="text-neon-emerald font-bold">clear</span> : Clear screen</div>
        </div>
    `,
    whoami: () => `
        <div class="text-white leading-relaxed">
            <strong>Muhammad Sarosh Ali</strong><br>
            • M.Sc. Researcher in Computer &amp; Systems Engineering at TU Ilmenau (Ongoing)<br>
            • B.E. in Computer Engineering from Bahria University (2015 – 2019)<br>
            • ~3 Years Commercial Engineering Experience (Xceptance GmbH, Final Solutions)<br>
            • Languages: English (C1/C2 Fluent), German (B1+), Urdu/Hindi (Native), Punjabi (Native)<br>
            • Location: Ilmenau, Germany
        </div>
    `,
    projects: () => `
        <div class="text-white space-y-1">
            <div>1. <span class="text-neon-cyan font-bold">aicvnow</span> : AI CV tailoring &amp; skill audit (Gemini, Node.js, Puppeteer)</div>
            <div>2. <span class="text-neon-purple font-bold">AI Hallucination Engine</span> : Vector divergence across Qwen/Gemma/Llama</div>
            <div>3. <span class="text-neon-blue font-bold">WhatsNews</span> : Java (Javalin) vector RAG news aggregator with key rotation</div>
            <div>4. <span class="text-neon-emerald font-bold">Portal Regression Suite</span> : TU Ilmenau automated QA (Selenide, Allure)</div>
            <div>5. <span class="text-neon-amber font-bold">Posters Demo Store</span> : 190+ tickets, Java/Ninja modernization, Postman bridge</div>
            <div>6. <span class="text-neon-rose font-bold">Autonomous Drone</span> : Arduino Nano + APM over MAVLink + LiDAR</div>
        </div>
    `,
    skills: () => `
        <div class="text-white leading-relaxed">
            • <strong>Languages:</strong> Java, Python, JavaScript, TypeScript, PHP, SQL, C++, Bash<br>
            • <strong>AI/ML:</strong> PyTorch, LLM Eval, Vector RAG, Gemini API, Vector Similarity Quantification, Embeddings, Structural Mathematical Weighting <br>
            • <strong>Java/Backend:</strong> Javalin, Ninja, Spring Boot, JPA ORM, Hibernate, JDBC, REST, gRPC<br>
            • <strong>QA/SDET:</strong> Selenium, Selenide, Neodymium, Playwright, JUnit 5, XLT/XTC, Allure<br>
            • <strong>Hardware:</strong> Arduino, ArduPilot Mega, MAVLink, LiDAR, Soldering, Electronics Triage
        </div>
    `,
    eval: () => `
        <div class="text-neon-purple font-mono">
            [SIMULATION] Initializing Prospect Certainty Hallucination Scan...<br>
            &gt; Target Models: Qwen-2.5-7B, Gemma-2-9B, Llama-3.1-8B<br>
            &gt; Vector Embedding Extraction: text-embedding-004 (768 dimensions)<br>
            &gt; Calculating Cosine Similarity Matrix... [OK]<br>
            &gt; Applying Structural Mathematical Weighting... [OK]<br>
            <span class="text-neon-emerald font-bold">&gt; Result: Contextual Certainty Index: 0.942 (Factual Cohesion High)</span>
        </div>
    `,
    hobbies: () => `
        <div class="text-white leading-relaxed">
            • <strong>Photography:</strong> Fujifilm enthusiast, street geometry, rule of thirds.<br>
            • <strong>Repair Café:</strong> Deputy Manager volunteering with Ingenieure Ohne Grenzen Ilmenau.<br>
            • <strong>Ancient History:</strong> Sumer, Spartan politics, Roman civilization, Japan 1026 AD.<br>
            • <strong>Writing:</strong> Essays, technical thoughts, and reflective poetry.<br>
            • <strong>Gaming &amp; Strategy:</strong> Chess endgames and tactical RPGs.
        </div>
    `,
    contact: () => `
        <div class="text-white leading-relaxed">
            • <strong>Email:</strong> <a href="mailto:muhammadsaroshali@gmail.com" class="text-neon-cyan underline">muhammadsaroshali@gmail.com</a><br>
            • <strong>Phone:</strong> +49 15213431198<br>
            • <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/muhammad-sarosh-ali-8b49191b9/" target="_blank" class="text-neon-cyan underline">linkedin.com/in/muhammad-sarosh-ali</a><br>
            • <strong>GitHub:</strong> <a href="https://github.com/msaroshali" target="_blank" class="text-neon-cyan underline">github.com/msaroshali</a><br>
            • <strong>Location:</strong> Ilmenau, Germany
        </div>
    `,
    matrix: () => {
        let count = 0;
        const interval = setInterval(() => {
            const line = Array.from({ length: 40 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 90))).join(' ');
            printTerminal(`<div class="text-neon-emerald text-[11px] font-mono opacity-80">${line}</div>`);
            count++;
            if (count > 8) clearInterval(interval);
        }, 100);
        return `<div class="text-neon-emerald font-bold">Entering Digital Matrix...</div>`;
    },
    theme: () => {
        toggleTheme();
        const isEink = document.documentElement.classList.contains('e-ink');
        return `<div class="text-neon-cyan font-bold">Display theme toggled to: ${isEink ? 'E-INK PAPER MODE' : 'CYBER TERMINAL MODE'}</div>`;
    },
    clear: () => {
        const out = document.getElementById('terminal-output');
        if (out) out.innerHTML = '';
        return '';
    }
};

// ==============================================================
// 1. PROJECTS DATASET
// ==============================================================
const projectsData = [
    {
        id: 'aicvnow',
        title: 'aicvnow (cvezee)',
        subtitle: 'Job Description-Based AI CV Tailoring & Intelligence',
        badge: 'AI / Full-Stack',
        badgeColor: 'text-neon-cyan border-neon-cyan/20 bg-neon-cyan/10',
        period: '2026 – Ongoing',
        category: 'ai web',
        description: 'Engineered an AI CV tailoring platform using Node.js, Express, and Google Gemini. Features a 3-tier skill audit (matched, omitted, missing), anti-buzzword humanizer prompts, ATS compatibility scoring, live click-to-edit markdown sync, and Puppeteer PDF rendering.',
        widgetHtml: `
            <div class="p-3 rounded-xl bg-dark-950/70 border border-white/5 mb-4">
                <div class="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-2">
                    <span>Interactive Skill Gap Audit:</span>
                    <span class="text-neon-emerald font-bold">94% ATS Match</span>
                </div>
                <div class="w-full bg-dark-800 rounded-full h-1.5 mb-2.5 overflow-hidden">
                    <div class="bg-gradient-to-r from-neon-cyan to-neon-emerald h-1.5 rounded-full w-[94%]"></div>
                </div>
                <div class="flex flex-wrap gap-1 text-[10px] font-mono">
                    <span class="px-1.5 py-0.5 rounded bg-neon-emerald/10 text-emerald-300 border border-emerald-500/20">✓ Matched: 18</span>
                    <span class="px-1.5 py-0.5 rounded bg-neon-amber/10 text-amber-300 border border-amber-500/20">! Omitted: 6</span>
                    <span class="px-1.5 py-0.5 rounded bg-neon-rose/10 text-rose-300 border border-rose-500/20">✗ Missing: 2</span>
                </div>
            </div>
        `,
        tags: ['Node.js', 'Gemini API', 'Supabase', 'Puppeteer'],
        highlight: '+200% Callbacks',
        highlightColor: 'text-neon-cyan',
        modalKey: 'modal-aicvnow',
        accentColor: 'group-hover:text-neon-cyan'
    },
    {
        id: 'hallucination',
        title: 'AI Hallucination Quantification',
        subtitle: 'Vector Divergence Across Open-Weight LLMs',
        badge: 'Academic Research',
        badgeColor: 'text-neon-purple border-neon-purple/20 bg-neon-purple/10',
        period: 'TU Ilmenau • 2025 – Pres.',
        category: 'ai',
        description: 'Researching empirical hallucination quantification across open-weight LLMs (Qwen, Gemma, Llama, Mistral). Extracts vector embeddings across controlled prompts and applies prospect certainty-based cosine similarity with structural weighting to establish contextual certainty metrics.',
        widgetHtml: `
            <div class="p-3 rounded-xl bg-dark-950/70 border border-white/5 mb-4">
                <div class="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1.5">
                    <span>Variance: <span id="variance-val">0.18</span></span>
                    <span class="text-neon-purple font-mono">Certainty: <strong id="certainty-val">0.92</strong></span>
                </div>
                <input type="range" min="0" max="100" value="18" class="w-full h-1 bg-dark-750 rounded-lg appearance-none cursor-pointer accent-neon-purple" id="variance-slider">
                <div class="flex justify-between text-[9px] font-mono text-gray-500 mt-1">
                    <span>Cohesive (Low Divergence)</span>
                    <span>High Hallucination Risk</span>
                </div>
            </div>
        `,
        tags: ['Python', 'PyTorch', 'Embeddings', 'Cosine Sim'],
        highlight: 'Qwen / Gemma / Llama / Mistral',
        highlightColor: 'text-neon-purple',
        modalKey: 'modal-hallucination',
        accentColor: 'group-hover:text-neon-purple'
    },
    {
        id: 'whatsnews',
        title: 'WhatsNews',
        subtitle: 'Real-Time News Aggregator & AI Q&A Engine',
        badge: 'Java / Vector RAG',
        badgeColor: 'text-neon-blue border-neon-blue/20 bg-neon-blue/10',
        period: '2025 – Ongoing',
        category: 'ai java web',
        description: 'High-performance Java backend built with Javalin and SQLite. Features vector RAG workflows using Gemini embeddings for semantic retrieval, scheduled automated ingestion, and dynamic API key/model rotation resilient against HTTP 429/503 rate limits.',
        widgetHtml: `
            <a href="https://www.loom.com/share/b05012fd7a3c45c6a8ec7363f8b86ff9" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-neon-blue/10 border border-neon-blue/25 hover:bg-neon-blue/20 flex items-center justify-between text-xs font-mono text-blue-200 mb-4 transition-all group/vid">
                <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span>Watch Video Demo (Loom)</span>
                </div>
                <svg class="w-4 h-4 text-neon-blue group-hover/vid:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
        `,
        tags: ['Java', 'Javalin', 'Vector RAG', 'SQLite'],
        highlight: 'Zero Rate-Limit Drop',
        highlightColor: 'text-neon-blue',
        modalKey: 'modal-whatsnews',
        accentColor: 'group-hover:text-neon-blue'
    },
    {
        id: 'regression',
        title: 'University Portal Regression Suite',
        subtitle: 'Enterprise Page Object Model Test Framework',
        badge: 'QA & SDET Framework',
        badgeColor: 'text-neon-emerald border-neon-emerald/20 bg-neon-emerald/10',
        period: 'TU Ilmenau • 2025',
        category: 'qa java',
        description: "Java automated test suite for TU Ilmenau's online project registration portal. Engineered 3 test groups covering 16 independent end-to-end scenarios (auth, registration, file upload, cancellation) using Selenide, Neodymium, JUnit 5, and Allure reporting.",
        widgetHtml: `
            <div class="p-3 rounded-xl bg-dark-950/70 border border-white/5 mb-4 text-[11px] font-mono space-y-1 text-gray-300">
                <div class="flex items-center space-x-1.5 text-neon-emerald">
                    <span>✓</span>
                    <span>Page Object Model & Reusable Components</span>
                </div>
                <div class="flex items-center space-x-1.5 text-neon-emerald">
                    <span>✓</span>
                    <span>Data-driven via JSON & YAML datasets</span>
                </div>
                <div class="flex items-center space-x-1.5 text-neon-emerald">
                    <span>✓</span>
                    <span>Allure HTML reports with visual artifacts</span>
                </div>
            </div>
        `,
        tags: ['Selenide', 'Neodymium', 'JUnit 5', 'Allure'],
        highlight: '16 E2E Scenarios',
        highlightColor: 'text-neon-emerald',
        modalKey: 'modal-regression',
        accentColor: 'group-hover:text-neon-emerald'
    },
    {
        id: 'posters',
        title: 'Posters Demo Store Revitalization',
        subtitle: 'Multi-Tier Architecture & Postman-XLT Bridge',
        badge: 'Enterprise E-Commerce',
        badgeColor: 'text-neon-amber border-neon-amber/20 bg-neon-amber/10',
        period: 'Xceptance • 2021 – 2024',
        category: 'java web qa',
        description: 'Project Lead for the modernization of Posters Demo Store. Handled development and release coordination across 190+ tickets (resolved >70% directly). Built compatibility bridge between Postman and XLT load-testing framework for data-driven API benchmarks.',
        widgetHtml: `
            <div class="p-3 rounded-xl bg-dark-950/70 border border-white/5 mb-4 text-[11px] font-mono space-y-1 text-gray-300">
                <div class="text-gray-400">Agile Project Leadership:</div>
                <div class="text-neon-amber font-semibold">>190 tickets coordinated across 2-3 person team</div>
                <div class="text-gray-400">Postman ↔ XLT Load Testing Integration</div>
            </div>
        `,
        tags: ['Java', 'Ninja Framework', 'JPA ORM', 'XLT / Postman'],
        highlight: '190+ Tickets',
        highlightColor: 'text-neon-amber',
        modalKey: 'modal-posters',
        accentColor: 'group-hover:text-neon-amber'
    },
    {
        id: 'drone',
        title: 'Autonomous Drone Collision-Avoidance',
        subtitle: 'Arduino Nano ↔ ArduPilot Mega over MAVLink',
        badge: 'Robotics & Embedded',
        badgeColor: 'text-neon-rose border-neon-rose/20 bg-neon-rose/10',
        period: 'Bahria Capstone • 2019',
        category: 'hardware',
        description: 'Autonomous aerial vehicle connecting an Arduino Nano with an ArduPilot Mega flight controller. Integrated ultrasonic and LiDAR sensing with MAVLink telemetry protocol to detect obstacles and command real-time collision-avoidance flight maneuvers.',
        widgetHtml: `
            <div class="p-3 rounded-xl bg-dark-950/70 border border-white/5 mb-4 flex items-center justify-between">
                <div class="text-[11px] font-mono">
                    <div class="text-gray-400">Telemetry Sensor Array:</div>
                    <div class="text-neon-rose font-semibold">LiDAR + Ultrasonic (MAVLink)</div>
                </div>
                <div class="relative w-10 h-10 rounded-full border border-neon-rose/40 flex items-center justify-center">
                    <span class="w-2 h-2 rounded-full bg-neon-rose animate-ping"></span>
                    <div class="absolute inset-0 rounded-full border border-dashed border-neon-rose/30 animate-spin" style="animation-duration: 8s;"></div>
                </div>
            </div>
        `,
        tags: ['C++', 'Arduino', 'ArduPilot', 'MAVLink'],
        highlight: 'Real-Time Evasion',
        highlightColor: 'text-neon-rose',
        modalKey: 'modal-drone',
        accentColor: 'group-hover:text-neon-rose'
    }
];

// ==============================================================
// 2. ARCHITECTURES DATASET
// ==============================================================
const architecturesData = [
    {
        id: 'rag',
        label: '1. Vector RAG Pipeline (WhatsNews)',
        title: 'Semantic Vector RAG & Rate-Limit Recovery',
        subtitle: 'WhatsNews Architecture: Javalin + SQLite + Gemini Embeddings',
        badge: 'Backend Architecture',
        badgeColor: 'text-neon-blue border-neon-blue/20 bg-neon-blue/10',
        steps: [
            { num: '01', title: 'Data Ingestion', desc: 'Background schedulers fetch live RSS & news streams into SQLite', border: 'border-neon-blue/30', badge: 'bg-neon-blue/20 text-neon-blue' },
            { num: '02', title: 'Vector Embedding', desc: 'Gemini text-embedding-004 generates high-dimensional vectors', border: 'border-neon-purple/30', badge: 'bg-neon-purple/20 text-neon-purple' },
            { num: '03', title: 'Resilient Query', desc: 'Cosine distance ranking with automatic key & model rotation for HTTP 429', border: 'border-neon-cyan/30', badge: 'bg-neon-cyan/20 text-neon-cyan' },
            { num: '04', title: 'Synthesis & Q&A', desc: 'Grounded synthesis streamed to frontend with reference citations', border: 'border-neon-emerald/30', badge: 'bg-neon-emerald/20 text-neon-emerald' }
        ],
        decision: 'Used Javalin for its ultra-lightweight footprint and raw JVM concurrency. Integrated token-bucket model rotation to automatically failover from HTTP 429/503 errors without dropping active user requests.'
    },
    {
        id: 'cv',
        label: '2. AI Skill Audit Engine (aicvnow)',
        title: 'AI Skill Audit & Anti-Buzzword Humanizer',
        subtitle: 'aicvnow Architecture: Node.js + Gemini + Structured JSON Contracts',
        badge: 'Full-Stack AI Flow',
        badgeColor: 'text-neon-cyan border-neon-cyan/20 bg-neon-cyan/10',
        steps: [
            { num: '01', title: 'Dual Ingestion', desc: 'Master CV Source of Truth + Target Job Description tokenized', border: 'border-neon-cyan/30', badge: 'bg-neon-cyan/20 text-neon-cyan' },
            { num: '02', title: 'Structured Audit', desc: 'Extracts Matched, Omitted, and Missing skills with ATS Score estimate', border: 'border-neon-amber/30', badge: 'bg-neon-amber/20 text-neon-amber' },
            { num: '03', title: 'Live DOM & PDF Sync', desc: 'Click-to-edit preview synchronization & Puppeteer headless rendering', border: 'border-neon-emerald/30', badge: 'bg-neon-emerald/20 text-neon-emerald' }
        ],
        decision: 'Implemented strict anti-buzzword constraints forbidding synthetic clichés (e.g., "spearheaded", "synergized") and mandated structural JSON encapsulation for skill telemetry.'
    },
    {
        id: 'drone',
        label: '3. MAVLink Telemetry (Drone)',
        title: 'MAVLink Telemetry & Real-Time Evasion Loop',
        subtitle: 'Robotics Architecture: Arduino Nano + ArduPilot Mega (APM)',
        badge: 'Embedded System',
        badgeColor: 'text-neon-rose border-neon-rose/20 bg-neon-rose/10',
        steps: [
            { num: '01', title: 'Sensor Acquisition', desc: 'Ultrasonic ranging + LiDAR pulsed distance captured by Arduino Nano', border: 'border-neon-rose/30', badge: 'bg-neon-rose/20 text-neon-rose' },
            { num: '02', title: 'MAVLink Protocol Packet', desc: 'Serial packet encoding with checksum verification at 57600 baud', border: 'border-neon-purple/30', badge: 'bg-neon-purple/20 text-neon-purple' },
            { num: '03', title: 'APM Trajectory Override', desc: 'Autonomous flight controller overrides roll/pitch to clear obstacle vector', border: 'border-neon-cyan/30', badge: 'bg-neon-cyan/20 text-neon-cyan' }
        ],
        decision: 'Delegated sensor polling to a lightweight Arduino Nano to prevent flight controller CPU interrupt starvation, passing structured MAVLink messages over hardware UART.'
    },
    {
        id: 'qa',
        label: '4. Page Object Model (QA Suite)',
        title: 'Enterprise Page Object Model & Allure CI Pipeline',
        subtitle: 'QA Automation Architecture: Selenide + Neodymium + JUnit 5',
        badge: 'SDET Framework',
        badgeColor: 'text-neon-emerald border-neon-emerald/20 bg-neon-emerald/10',
        steps: [
            { num: '01', title: 'Data Sets', desc: 'JSON & YAML localized test records and user credentials', border: 'border-neon-emerald/30', badge: 'bg-neon-emerald/20 text-neon-emerald' },
            { num: '02', title: 'Page Objects', desc: 'Shared web components and strict locator encapsulation', border: 'border-neon-blue/30', badge: 'bg-neon-blue/20 text-neon-blue' },
            { num: '03', title: 'Test Flows', desc: '16 modular end-to-end scenarios executed via JUnit 5', border: 'border-neon-purple/30', badge: 'bg-neon-purple/20 text-neon-purple' },
            { num: '04', title: 'Allure Telemetry', desc: 'Automated screenshots, failure stacks, and timeline analytics', border: 'border-neon-cyan/30', badge: 'bg-neon-cyan/20 text-neon-cyan' }
        ],
        decision: 'Avoided brittle XPath expressions by coupling smart CSS locators with Neodymium assertions, cutting test flakiness to near zero.'
    }
];

// ==============================================================
// 3. TECHNICAL SKILLS DATASET
// ==============================================================
const skillsData = [
    // Languages
    { name: 'Java', cat: 'lang', tag: 'Core', desc: 'Posters Store, WhatsNews', color: 'text-neon-cyan' },
    { name: 'Python', cat: 'lang', tag: 'Research', desc: 'LLM Eval, PyTorch', color: 'text-neon-purple' },
    { name: 'JavaScript', cat: 'lang', tag: 'Full-Stack', desc: 'Node.js, ES6+, Web', color: 'text-neon-blue' },
    { name: 'TypeScript', cat: 'lang', tag: 'Typed', desc: 'Full-Stack, React', color: 'text-neon-blue' },
    { name: 'C++', cat: 'lang', tag: 'Systems', desc: 'Arduino, Microcontrollers', color: 'text-neon-rose' },
    { name: 'PHP', cat: 'lang', tag: 'MVC', desc: 'CodeIgniter 3/4', color: 'text-neon-amber' },

    // AI & Machine Learning
    { name: 'PyTorch', cat: 'ai', tag: 'DL', desc: 'Hallucination Research', color: 'text-neon-purple' },
    { name: 'Vector RAG', cat: 'ai', tag: 'Semantic', desc: 'WhatsNews, Gemini', color: 'text-neon-purple' },
    { name: 'LLM Evaluation', cat: 'ai', tag: 'Metrics', desc: 'Qwen, Gemma, Llama', color: 'text-neon-purple' },
    { name: 'Gemini API', cat: 'ai', tag: 'GenAI', desc: 'aicvnow, WhatsNews', color: 'text-neon-purple' },
    { name: 'Embeddings & Cosine', cat: 'ai', tag: 'Similarity', desc: 'Cosine & Prospect Score', color: 'text-neon-purple' },
    { name: 'Prompt Engineering', cat: 'ai', tag: 'Agentic', desc: 'Anti-buzzword, JSON', color: 'text-neon-purple' },

    // Java & Backend
    { name: 'Javalin', cat: 'java', tag: 'REST', desc: 'WhatsNews Service', color: 'text-neon-cyan' },
    { name: 'Ninja Framework', cat: 'java', tag: 'Full-Stack', desc: 'Posters Store Modernization', color: 'text-neon-cyan' },
    { name: 'Spring Boot', cat: 'java', tag: 'Enterprise', desc: 'Microservices & REST', color: 'text-neon-cyan' },
    { name: 'JPA ORM & Hibernate', cat: 'java', tag: 'ORM', desc: 'Entity Relationships', color: 'text-neon-cyan' },
    { name: 'Maven', cat: 'java', tag: 'Build', desc: 'Dependency Pipelines', color: 'text-neon-cyan' },
    { name: 'REST APIs & gRPC', cat: 'java', tag: 'Protocols', desc: 'Data Interchange', color: 'text-neon-cyan' },

    // QA & Automation
    { name: 'Selenium WebDriver', cat: 'qa', tag: 'E2E', desc: 'Automation Suites', color: 'text-neon-emerald' },
    { name: 'Selenide & Neodymium', cat: 'qa', tag: 'Concise', desc: 'TU Ilmenau Portal Suite', color: 'text-neon-emerald' },
    { name: 'Playwright', cat: 'qa', tag: 'Modern QA', desc: 'Headless Automation', color: 'text-neon-emerald' },
    { name: 'JUnit 5', cat: 'qa', tag: 'Testing', desc: 'Assertions & Runner', color: 'text-neon-emerald' },
    { name: 'XLT & XTC', cat: 'qa', tag: 'Load Test', desc: 'Xceptance Load Engine', color: 'text-neon-emerald' },
    { name: 'Allure Reporting', cat: 'qa', tag: 'Telemetry', desc: 'Regression Dashboards', color: 'text-neon-emerald' },

    // Web & Frontend
    { name: 'Node.js & Express', cat: 'web', tag: 'Backend', desc: 'aicvnow API Server', color: 'text-neon-blue' },
    { name: 'Tailwind CSS', cat: 'web', tag: 'Styling', desc: 'Modern Responsive UIs', color: 'text-neon-blue' },
    { name: 'Bootstrap & FreeMarker', cat: 'web', tag: 'Templates', desc: 'Posters Store UI', color: 'text-neon-blue' },

    // Data & Storage
    { name: 'SQLite & JDBC', cat: 'data', tag: 'Embedded', desc: 'WhatsNews Storage', color: 'text-neon-amber' },
    { name: 'Supabase & SQL', cat: 'data', tag: 'BaaS', desc: 'Auth & Row-Level Sec', color: 'text-neon-amber' },
    { name: 'MySQL & H2', cat: 'data', tag: 'RDBMS', desc: 'Relational Systems', color: 'text-neon-amber' },

    // Hardware & Systems
    { name: 'Arduino Nano', cat: 'hw', tag: 'MCU', desc: 'Drone Sensor System', color: 'text-neon-rose' },
    { name: 'ArduPilot Mega', cat: 'hw', tag: 'Flight', desc: 'Autonomous Navigation', color: 'text-neon-rose' },
    { name: 'MAVLink Telemetry', cat: 'hw', tag: 'Protocol', desc: 'Microcontroller Comms', color: 'text-neon-rose' },
    { name: 'LiDAR & Ultrasonic Sensors', cat: 'hw', tag: 'Sensors', desc: 'Obstacle Avoidance', color: 'text-neon-rose' },
    { name: 'Hardware Diagnostics & Soldering', cat: 'hw', tag: 'Triage', desc: 'Repair Café Volunteer', color: 'text-neon-rose' },
    { name: 'Git & Linux Shell', cat: 'hw', tag: 'Ops', desc: 'CI/CD, Workflow Automation', color: 'text-neon-cyan' }
];

// ==============================================================
// 4. CAREER & EXPERIENCE TIMELINE DATASET
// ==============================================================
const experienceData = [
    {
        role: 'Software Engineer / Junior QA Engineer',
        company: 'Xceptance Software Technologies GmbH',
        period: '12/2021 – 09/2024 • Jena, Germany',
        badge: 'Working Student &rarr; Promoted to Full-Time • Agile/Scrum Team Lead',
        bulletPoints: [
            '<strong class="text-white">Project Lead:</strong> Coordinated the modernization and continuous releases of the Posters Demo Store web application with a 2–3 person team, managing over <span class="text-neon-cyan font-semibold">190 tickets</span> and directly authoring solutions for over 70% of issues.',
            '<strong class="text-white">Framework Modernization:</strong> Maintained and revitalized a multi-tier e-commerce platform using <span class="text-white">Java, Ninja Framework, JPA ORM, FreeMarker templates, and SQL</span>.',
            '<strong class="text-white">Postman-to-XLT Compatibility Layer:</strong> Engineered a bridge enabling Postman collections to run seamlessly within the company proprietary XLT load-testing engine for scalable data-driven API benchmarks.',
            '<strong class="text-white">Automated Testing &amp; Monitoring:</strong> Built and maintained test suites using Selenium WebDriver, Selenide, Neodymium, JUnit, and deployed monitoring suites to XTC cloud.'
        ],
        tags: [
            { name: 'Java', color: 'text-neon-cyan' },
            { name: 'Ninja Framework', color: 'text-gray-300' },
            { name: 'JPA ORM', color: 'text-gray-300' },
            { name: 'Selenium / Selenide', color: 'text-gray-300' },
            { name: 'XLT / XTC', color: 'text-gray-300' },
            { name: 'Postman', color: 'text-gray-300' }
        ],
        markerColor: 'border-neon-cyan shadow-neon-cyan',
        roleColor: 'group-hover:text-neon-cyan',
        companyColor: 'text-neon-cyan'
    },
    {
        role: 'Repair Café Deputy Manager | Volunteer',
        company: 'Ingenieure Ohne Grenzen (Engineers Without Borders)',
        period: '10/2021 – Ongoing • Ilmenau, Germany',
        badge: null,
        bulletPoints: [
            '<strong class="text-white">Electronics Troubleshooting &amp; Repair:</strong> Diagnose and repair hardware and software faults across laptops, PCs, smartphones, audio gear, and PCBs.',
            '<strong class="text-white">Circular Tech &amp; Sustainability:</strong> Champion circular electronics and repair-not-replace culture, preventing functional consumer electronics from entering waste streams.',
            '<strong class="text-white">Community Operations:</strong> Coordinate volunteer workshops, mentor new technicians, and manage testing instruments and safety protocols.'
        ],
        tags: [
            { name: 'Hardware Diagnostics', color: 'text-neon-emerald' },
            { name: 'Soldering', color: 'text-gray-300' },
            { name: 'Circuits', color: 'text-gray-300' },
            { name: 'Sustainability', color: 'text-gray-300' }
        ],
        markerColor: 'border-neon-emerald shadow-neon-emerald',
        roleColor: 'group-hover:text-neon-emerald',
        companyColor: 'text-neon-emerald'
    },
    {
        role: 'Full Stack Web Development Intern',
        company: 'Final Solutions',
        period: '03/2021 – 07/2021 • Islamabad, Pakistan',
        badge: null,
        bulletPoints: [
            'Built and maintained customer-facing web applications using PHP and CodeIgniter 3/4 MVC architecture.',
            'Integrated backend relational databases with frontend templates, fixed defects, and improved UI stability.'
        ],
        tags: [
            { name: 'PHP', color: 'text-neon-purple' },
            { name: 'CodeIgniter', color: 'text-gray-300' },
            { name: 'MySQL', color: 'text-gray-300' },
            { name: 'JavaScript', color: 'text-gray-300' }
        ],
        markerColor: 'border-neon-purple shadow-neon-purple',
        roleColor: 'group-hover:text-neon-purple',
        companyColor: 'text-neon-purple'
    }
];

// ==============================================================
// 5. PASSIONS & BEYOND CODE (Bento Grid) DATASET
// ==============================================================
const passionsData = [
    {
        icon: '📷',
        iconColor: 'bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan',
        title: 'Fujifilm Photography',
        desc: 'Passionate about street photography, architectural geometry, and rule-of-thirds landscapes. Finding order, symmetry, and emotion through the glass of a Fujifilm sensor.',
        tags: ['Street', 'Rule of Thirds', 'Landscapes']
    },
    {
        icon: '🔧',
        iconColor: 'bg-neon-emerald/10 border-neon-emerald/20 text-neon-emerald',
        title: 'Repair Culture & Circular Tech',
        desc: 'Deputy Manager at Repair Café Ilmenau. Passionate about reviving discarded electronics, micro-soldering, tracing PCB rails, and fighting against planned obsolescence.',
        tags: ['Micro-soldering', 'PCBs', 'Reuse']
    },
    {
        icon: '🏛️',
        iconColor: 'bg-neon-amber/10 border-neon-amber/20 text-neon-amber',
        title: 'Deep History & Chronology',
        desc: 'Voracious reader of world history: Sumerian administrative scripts, Spartan geopolitics, Roman republican transitions, and Heian-period Japan (1026 AD).',
        tags: ['Sumer', 'Sparta', 'Rome', 'Japan 1026 AD']
    },
    {
        icon: '✍️',
        iconColor: 'bg-neon-purple/10 border-neon-purple/20 text-neon-purple',
        title: 'Writing & Classical Literature',
        desc: 'Writing for clarity and reflection — tech articles, essays, and poetry. Drawing timeless insights from classical fiction and physics philosophy.',
        tags: ['Poetry', 'Tech Essays', 'Physics']
    },
    {
        icon: '♟️',
        iconColor: 'bg-neon-blue/10 border-neon-blue/20 text-neon-blue',
        title: 'Chess & Strategy RPGs',
        desc: 'Exercising foresight, positional patience, and risk calculation through chess endgames and immersive tactical role-playing games.',
        tags: ['Tactics', 'Endgames', 'RPG Systems']
    },
    {
        icon: '🎧',
        iconColor: 'bg-neon-rose/10 border-neon-rose/20 text-neon-rose',
        title: 'Soundscapes & Music',
        desc: 'Deep focus powered by driving Berlin/European techno, golden-era hip-hop, and timeless vintage soul/oldies.',
        tags: ['Techno', 'Hip-Hop', 'Oldies']
    }
];

