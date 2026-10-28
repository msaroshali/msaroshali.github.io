// ==============================================================
// MAIN APP LOGIC: LENS, SKILLS, MODALS, CLOCK & INTERACTIVITY
// ==============================================================

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
document.querySelectorAll('.arch-tab').forEach(tab => {
    tab.addEventListener('click', () => {
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
});

// --- 5. Technical Skills Matrix Filtering & Search ---
(function initSkillsMatrix() {
    const skillSearchInput = document.getElementById('skill-search');
    const skillPills = document.querySelectorAll('.skill-pill');

    function filterSkills() {
        const query = (skillSearchInput ? skillSearchInput.value : '').toLowerCase().trim();
        const activeCatBtn = document.querySelector('.skill-cat-btn.bg-neon-cyan\\/15');
        const activeCat = activeCatBtn ? activeCatBtn.dataset.cat : 'all';

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
document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
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
