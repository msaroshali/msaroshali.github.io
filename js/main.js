// ==============================================================
// MAIN APP LOGIC: COMPONENT RENDERERS, LENS, SKILLS & INTERACTIVITY
// ==============================================================

// --- 0. Dynamic Component Renderers (Data-Driven Architecture) ---
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid || typeof projectsData === 'undefined') return;
    grid.innerHTML = projectsData.map(p => `
        <div class="project-card glass-card rounded-2xl p-6 flex flex-col justify-between group" data-category="${p.category}">
            <div>
                <div class="flex items-center justify-between mb-3">
                    <span class="px-2.5 py-1 rounded-md ${p.badgeColor} text-[11px] font-mono font-semibold">
                        ${p.badge}
                    </span>
                    <span class="text-xs font-mono text-gray-400">${p.period}</span>
                </div>
                <h3 class="text-xl font-heading font-bold text-white ${p.accentColor} transition-colors">
                    ${p.title}
                </h3>
                <p class="text-xs font-mono text-gray-400 mb-3">${p.subtitle}</p>
                <p class="text-sm text-gray-300 leading-relaxed mb-4">
                    ${p.description}
                </p>
                ${p.widgetHtml || ''}
                <div class="flex flex-wrap gap-1.5">
                    ${p.tags.map(t => `<span class="px-2 py-0.5 rounded bg-white/5 text-gray-300 text-[11px] font-mono">${t}</span>`).join('')}
                </div>
            </div>
            <div class="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs font-mono ${p.highlightColor}">${p.highlight}</span>
                <button class="open-modal-btn text-xs font-mono text-gray-300 hover:text-white flex items-center space-x-1 group-hover:translate-x-1 transition-transform" data-modal="${p.modalKey}">
                    <span>Deep Dive</span>
                    <span>&rarr;</span>
                </button>
            </div>
        </div>
    `).join('');
}

function renderArchitectures() {
    const tabsContainer = document.getElementById('arch-tabs-container');
    const viewsContainer = document.getElementById('arch-views-container');
    if (!tabsContainer || !viewsContainer || typeof architecturesData === 'undefined') return;

    tabsContainer.innerHTML = architecturesData.map((a, i) => `
        <button class="arch-tab px-4 py-2 rounded-lg ${i === 0 ? 'bg-neon-purple/20 text-neon-purple font-semibold border border-neon-purple/40' : 'text-gray-400 hover:text-white'}" data-arch="${a.id}">
            ${a.label}
        </button>
    `).join('');

    viewsContainer.innerHTML = architecturesData.map((a, i) => `
        <div id="arch-view-${a.id}" class="arch-view ${i === 0 ? '' : 'hidden'} space-y-6">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                    <h3 class="text-xl font-heading font-bold text-white">${a.title}</h3>
                    <p class="text-xs font-mono text-gray-400">${a.subtitle}</p>
                </div>
                <span class="px-2.5 py-1 rounded ${a.badgeColor} text-xs font-mono">${a.badge}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-${a.steps.length} gap-4 py-6 text-center text-xs font-mono">
                ${a.steps.map(s => `
                    <div class="p-4 rounded-xl bg-dark-900/90 border ${s.border} relative">
                        <div class="w-8 h-8 rounded-full ${s.badge} mx-auto flex items-center justify-center font-bold mb-2">${s.num}</div>
                        <div class="font-bold text-white text-sm">${s.title}</div>
                        <div class="text-gray-400 mt-1">${s.desc}</div>
                    </div>
                `).join('')}
            </div>
            <div class="p-4 rounded-xl bg-dark-900/60 border border-white/5 text-xs text-gray-300 font-mono leading-relaxed">
                <strong class="text-neon-cyan">Engineering Decision:</strong> ${a.decision}
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container || typeof skillsData === 'undefined') return;
    container.innerHTML = skillsData.map(s => `
        <div class="skill-pill glass-card p-3 rounded-xl flex flex-col justify-between" data-cat="${s.cat}" data-name="${s.name}">
            <div class="flex items-center justify-between text-xs font-mono ${s.color} font-bold">
                <span>${s.name}</span>
                <span class="text-[10px] text-gray-500">${s.tag}</span>
            </div>
            <div class="text-[11px] text-gray-400 mt-2 font-mono">${s.desc}</div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container || typeof experienceData === 'undefined') return;
    container.innerHTML = experienceData.map(e => `
        <div class="relative pl-6 sm:pl-8 group">
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-900 border-2 ${e.markerColor} group-hover:scale-125 transition-transform"></div>
            <div class="glass-card p-6 sm:p-8 rounded-2xl">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                        <h3 class="text-xl font-heading font-bold text-white ${e.roleColor} transition-colors">
                            ${e.role}
                        </h3>
                        <p class="text-sm font-medium ${e.companyColor}">${e.company}</p>
                    </div>
                    <div class="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 w-max">
                        ${e.period}
                    </div>
                </div>
                ${e.badge ? `<div class="text-xs font-mono text-gray-400 mb-4">${e.badge}</div>` : ''}
                <ul class="text-sm text-gray-300 space-y-2.5 list-disc list-inside leading-relaxed">
                    ${e.bulletPoints.map(b => `<li>${b}</li>`).join('')}
                </ul>
                <div class="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/10">
                    ${e.tags.map(t => `<span class="px-2 py-0.5 rounded bg-dark-800 ${t.color} text-xs font-mono">${t.name}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderPassions() {
    const container = document.getElementById('passions-grid');
    if (!container || typeof passionsData === 'undefined') return;
    container.innerHTML = passionsData.map(p => `
        <div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
                <div class="w-10 h-10 rounded-xl ${p.iconColor} border flex items-center justify-center mb-4">
                    ${p.icon}
                </div>
                <h3 class="text-lg font-heading font-bold text-white mb-2">${p.title}</h3>
                <p class="text-sm text-gray-300 leading-relaxed">${p.desc}</p>
            </div>
            <div class="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1.5 text-[11px] font-mono text-gray-400">
                ${p.tags.join(' • ')}
            </div>
        </div>
    `).join('');
}

// Initial Component Render
renderProjects();
renderArchitectures();
renderSkills();
renderExperience();
renderPassions();

// --- 1. Typewriter Effect for Hero Subtitle ---
(function initTypewriter() {
    const el = document.getElementById('typewriter-text');
    if (!el) return;
    const phrases = [
        'AI & LLM Evaluation Researcher',
        'Full-Stack Java Systems Engineer',
        'SDET & Automated Testing Specialist',
        'Embedded & Drone Robotics Tinkerer',
        'M.Sc. Candidate at TU Ilmenau'
    ];
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = true;
    let typingSpeed = 100;

    function tick() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            el.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            el.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 90;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2200;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(tick, typingSpeed);
    }
    setTimeout(tick, 2000);
})();

// --- 2. Perspective Lens Controller ---
function setPerspectiveLens(lens) {
    document.querySelectorAll('.lens-tab').forEach(tab => {
        if (tab.dataset.lens === lens) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const narrativeEl = document.getElementById('hero-narrative');
    if (narrativeEl && lensDescriptions && lensDescriptions[lens]) {
        narrativeEl.innerHTML = lensDescriptions[lens];
    }

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const cats = card.dataset.category || '';
        if (lens === 'all' || cats.includes(lens)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    showToast(`Perspective Lens: ${lens.toUpperCase()} Mode Active`);
}
window.setPerspectiveLens = setPerspectiveLens;

// --- 3. Interactive In-Card Simulator (AI Hallucination Slider) ---
(function initSlider() {
    const varianceSlider = document.getElementById('variance-slider');
    const varianceVal = document.getElementById('variance-val');
    const certaintyVal = document.getElementById('certainty-val');

    if (varianceSlider && varianceVal && certaintyVal) {
        varianceSlider.addEventListener('input', e => {
            const val = (e.target.value / 100).toFixed(2);
            varianceVal.textContent = val;
            const certainty = Math.max(0.05, 1 - Math.pow(val, 1.4)).toFixed(2);
            certaintyVal.textContent = certainty;
            if (certainty > 0.8) {
                certaintyVal.className = 'text-neon-emerald font-bold';
            } else if (certainty > 0.5) {
                certaintyVal.className = 'text-neon-amber font-bold';
            } else {
                certaintyVal.className = 'text-neon-rose font-bold';
            }
        });
    }
})();

// --- 4. Interactive System Architecture Switcher ---
document.addEventListener('click', e => {
    const tab = e.target.closest('.arch-tab');
    if (!tab) return;
    document.querySelectorAll('.arch-tab').forEach(t => {
        t.classList.remove('bg-neon-purple/20', 'text-neon-purple', 'font-semibold', 'border', 'border-neon-purple/40');
        t.classList.add('text-gray-400');
    });
    tab.classList.remove('text-gray-400');
    tab.classList.add('bg-neon-purple/20', 'text-neon-purple', 'font-semibold', 'border', 'border-neon-purple/40');

    const archId = tab.dataset.arch;
    document.querySelectorAll('.arch-view').forEach(view => {
        view.classList.add('hidden');
    });
    const targetView = document.getElementById(`arch-view-${archId}`);
    if (targetView) targetView.classList.remove('hidden');
});

// --- 5. Technical Skills Matrix Filtering & Search ---
(function initSkillsMatrix() {
    const skillSearchInput = document.getElementById('skill-search');

    function filterSkills() {
        const query = (skillSearchInput ? skillSearchInput.value : '').toLowerCase().trim();
        const activeCatBtn = document.querySelector('.skill-cat-btn.bg-neon-cyan\\/15');
        const activeCat = activeCatBtn ? activeCatBtn.dataset.cat : 'all';
        const skillPills = document.querySelectorAll('.skill-pill');

        skillPills.forEach(pill => {
            const cat = pill.dataset.cat || '';
            const name = (pill.dataset.name || '').toLowerCase();
            const matchesCat = (activeCat === 'all' || cat === activeCat);
            const matchesQuery = !query || name.includes(query) || pill.textContent.toLowerCase().includes(query);

            if (matchesCat && matchesQuery) {
                pill.style.display = 'flex';
            } else {
                pill.style.display = 'none';
            }
        });
    }

    if (skillSearchInput) {
        skillSearchInput.addEventListener('input', filterSkills);
    }

    document.querySelectorAll('.skill-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.skill-cat-btn').forEach(b => {
                b.classList.remove('bg-neon-cyan/15', 'text-neon-cyan', 'border-neon-cyan/30', 'font-semibold');
                b.classList.add('bg-dark-800', 'text-gray-300');
            });
            btn.classList.remove('bg-dark-800', 'text-gray-300');
            btn.classList.add('bg-neon-cyan/15', 'text-neon-cyan', 'border-neon-cyan/30', 'font-semibold');
            filterSkills();
        });
    });
})();

// --- 6. Recruiter Hub Profile Switcher ---
document.querySelectorAll('.cv-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.cv-tab').forEach(t => {
            t.classList.remove('bg-neon-purple', 'text-dark-950', 'font-bold');
            t.classList.add('bg-dark-800', 'text-gray-300');
        });
        tab.classList.remove('bg-dark-800', 'text-gray-300');
        tab.classList.add('bg-neon-purple', 'text-dark-950', 'font-bold');

        if (typeof recruiterProfiles !== 'undefined') {
            const prof = recruiterProfiles[tab.dataset.profile];
            if (prof) {
                document.getElementById('tailored-title').textContent = prof.title;
                document.getElementById('tailored-text').textContent = prof.text;
                document.getElementById('tailored-stack').textContent = prof.stack;
            }
        }
    });
});

const copySummaryBtn = document.getElementById('copy-summary-btn');
if (copySummaryBtn) {
    copySummaryBtn.addEventListener('click', () => {
        const text = document.getElementById('tailored-text').textContent;
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied tailored profile summary to clipboard!');
        });
    });
}

// --- 7. Modals (Project Deep Dive & Full Master CV) ---
document.addEventListener('click', e => {
    const btn = e.target.closest('.open-modal-btn');
    if (!btn) return;
    const modalKey = btn.dataset.modal;
    if (typeof projectModalDetails !== 'undefined') {
        const data = projectModalDetails[modalKey];
        if (data) {
            document.getElementById('modal-project-title').textContent = data.title;
            document.getElementById('modal-project-subtitle').textContent = data.subtitle;
            document.getElementById('modal-project-body').innerHTML = data.body;
            const modal = document.getElementById('project-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    }
});

const closeProjectModalBtn = document.getElementById('close-project-modal-btn');
if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener('click', () => {
        const modal = document.getElementById('project-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });
}

const cvModal = document.getElementById('cv-modal');
const viewCvBtn = document.getElementById('view-markdown-cv-btn');
const closeCvBtn = document.getElementById('close-cv-modal-btn');
const copyCvBtn = document.getElementById('copy-full-cv-btn');

if (viewCvBtn && cvModal) {
    viewCvBtn.addEventListener('click', () => {
        cvModal.classList.remove('hidden');
        cvModal.classList.add('flex');
    });
}
if (closeCvBtn && cvModal) {
    closeCvBtn.addEventListener('click', () => {
        cvModal.classList.add('hidden');
        cvModal.classList.remove('flex');
    });
}
if (copyCvBtn) {
    copyCvBtn.addEventListener('click', () => {
        const cvText = document.getElementById('full-cv-text').textContent;
        navigator.clipboard.writeText(cvText).then(() => {
            showToast('Master CV Markdown copied to clipboard!');
        });
    });
}

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const projModal = document.getElementById('project-modal');
        if (projModal) {
            projModal.classList.add('hidden');
            projModal.classList.remove('flex');
        }
        if (cvModal) {
            cvModal.classList.add('hidden');
            cvModal.classList.remove('flex');
        }
    }
});

// --- 8. Live Timezone Clock (Ilmenau, Germany) ---
function updateClock() {
    const el = document.getElementById('local-time');
    if (el) {
        const now = new Date();
        const options = { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        el.textContent = `${now.toLocaleTimeString('en-GB', options)} CET (Ilmenau, DE)`;
    }
}
setInterval(updateClock, 1000);
updateClock();

// --- 9. Toast Notification Helper ---
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3000);
}
window.showToast = showToast;

// --- 10. Clipboard & Interaction Handlers ---
document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const email = btn.dataset.email;
        navigator.clipboard.writeText(email).then(() => {
            showToast('Email address copied to clipboard!');
        });
    });
});

document.querySelectorAll('.lens-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        setPerspectiveLens(btn.dataset.lens);
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}
