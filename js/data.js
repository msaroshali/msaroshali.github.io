// ==============================================================
// DATA STORE: DESCRIPTIONS, PROFILES, MODAL DATA & COMMANDS
// ==============================================================

// --- Perspective Lens Narrative Text ---
const lensDescriptions = {
    all: 'M.Sc. researcher in Computer &amp; Systems Engineering at <strong class="text-white">TU Ilmenau</strong> with around 3 years of commercial software engineering experience. Specializing in <span class="text-neon-cyan font-medium">LLM hallucination quantification</span>, <span class="text-neon-purple font-medium">vector RAG architectures</span>, <span class="text-neon-emerald font-medium">Java multi-tier enterprise backends</span>, and <span class="text-neon-amber font-medium">mission-critical QA automation</span>.',
    ai: 'Empirical AI Engineering focus: Quantifying hallucinations across <span class="text-neon-purple font-semibold">Qwen, Gemma, and Llama</span> using cosine certainty and vector representations. Designing production vector RAG workflows with <span class="text-neon-cyan font-semibold">Gemini embeddings, Javalin, and SQLite</span>.',
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
        text: 'M.Sc. researcher in Computer and Systems Engineering at TU Ilmenau with around 3 years of software engineering experience and current work in LLM evaluation and RAG-based applications. Uses Python, PyTorch, Java, Gemini APIs, embeddings, and vector retrieval for hallucination research, semantic search, summarization, and AI-enabled backend systems. English C1/C2, German B1+.',
        stack: 'Python, PyTorch, Gemini API, Vector RAG, Cosine Similarity, Embeddings, SQLite'
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
            • <strong>AI/ML:</strong> PyTorch, LLM Eval, Vector RAG, Gemini API, Cosine Similarity, Embeddings<br>
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
            const line = Array.from({length: 40}, () => String.fromCharCode(33 + Math.floor(Math.random() * 90))).join(' ');
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
