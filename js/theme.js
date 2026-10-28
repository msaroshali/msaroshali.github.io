// ==============================================================
// THEME CONTROLLER: E-INK PAPER MODE & CYBER TERMINAL MODE
// ==============================================================

function applyTheme(theme, triggerFlash = true) {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');
    const mobileThemeLabel = document.getElementById('mobile-theme-label');
    const footerThemeBtn = document.getElementById('footer-theme-btn');

    if (triggerFlash) {
        document.body.classList.add('e-ink-pulse');
        setTimeout(() => document.body.classList.remove('e-ink-pulse'), 280);
    }

    if (theme === 'e-ink') {
        html.classList.remove('dark');
        html.classList.add('e-ink');
        if (themeIcon) {
            themeIcon.innerHTML = `
                <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
            `;
        }
        if (mobileThemeIcon) mobileThemeIcon.textContent = '⚡';
        if (mobileThemeLabel) mobileThemeLabel.textContent = 'SWITCH TO CYBER THEME';
        if (footerThemeBtn) footerThemeBtn.textContent = 'Switch to Cyber Mode';
        localStorage.setItem('msa-theme', 'e-ink');
    } else {
        html.classList.remove('e-ink');
        html.classList.add('dark');
        if (themeIcon) {
            themeIcon.innerHTML = `
                <svg class="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
            `;
        }
        if (mobileThemeIcon) mobileThemeIcon.textContent = '📖';
        if (mobileThemeLabel) mobileThemeLabel.textContent = 'SWITCH TO E-INK THEME';
        if (footerThemeBtn) footerThemeBtn.textContent = 'Toggle E-Ink Mode';
        localStorage.setItem('msa-theme', 'cyber');
    }
}

function toggleTheme() {
    const isEink = document.documentElement.classList.contains('e-ink');
    const nextTheme = isEink ? 'cyber' : 'e-ink';
    applyTheme(nextTheme, true);
    if (typeof showToast === 'function') {
        showToast(nextTheme === 'e-ink' ? '📖 E-Ink Mode: Eye-soothing paper display active' : '⚡ Cyber Mode: Terminal display active');
    }
}

// Initialize Theme from localStorage on script execution
(function initTheme() {
    const savedTheme = localStorage.getItem('msa-theme');
    if (savedTheme === 'e-ink') {
        applyTheme('e-ink', false);
    } else {
        applyTheme('cyber', false);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

        const mobileThemeBtn = document.getElementById('mobile-theme-btn');
        if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

        const footerThemeBtn = document.getElementById('footer-theme-btn');
        if (footerThemeBtn) footerThemeBtn.addEventListener('click', toggleTheme);
    });
})();
