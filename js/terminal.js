// ==============================================================
// TERMINAL HUD CONTROLLER: CLI EMULATOR WITH PERMANENT FOCUS
// ==============================================================

(function initTerminal() {
    const terminalModal = document.getElementById('terminal-modal');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const closeDot = document.getElementById('close-terminal-dot');
    
    if (!terminalModal || !terminalInput || !terminalOutput) return;

    let commandHistory = [];
    let historyIndex = -1;

    // Ensure focus helper
    function keepFocus() {
        if (!terminalModal.classList.contains('hidden')) {
            terminalInput.focus({ preventScroll: true });
        }
    }

    function openTerminal() {
        terminalModal.classList.remove('hidden');
        terminalModal.classList.add('flex');
        keepFocus();
        setTimeout(keepFocus, 20);
    }

    function closeTerminal() {
        terminalModal.classList.add('hidden');
        terminalModal.classList.remove('flex');
    }

    // Keep cursor in focus at all times when terminal is open
    // 1. Click anywhere in terminal window refocuses input
    terminalModal.addEventListener('click', (e) => {
        if (e.target.id === 'close-terminal-dot') {
            closeTerminal();
            return;
        }
        // Allow text selection if user is dragging, else keep focus
        const selection = window.getSelection();
        if (!selection || selection.toString().length === 0) {
            keepFocus();
        }
    });

    // 2. Window focus and blur protection while modal is open
    terminalInput.addEventListener('blur', () => {
        if (!terminalModal.classList.contains('hidden')) {
            setTimeout(keepFocus, 10);
        }
    });

    // 3. Global keydown handler to catch keystrokes when modal is open
    window.addEventListener('keydown', (e) => {
        if (terminalModal.classList.contains('hidden')) {
            // Global open with Ctrl+K or Cmd+K
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                openTerminal();
            }
            return;
        }

        // When terminal is open:
        if (e.key === 'Escape') {
            e.preventDefault();
            closeTerminal();
            return;
        }

        // Toggle terminal with Ctrl+K
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            closeTerminal();
            return;
        }

        // If focus was lost, immediately refocus and forward character
        if (document.activeElement !== terminalInput) {
            keepFocus();
        }
    });

    // Print helper
    window.printTerminal = function(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        terminalOutput.appendChild(div);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    };

    // Terminal Input: Enter and Command History Navigation (Up/Down)
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmdLine = terminalInput.value.trim();
            terminalInput.value = '';
            if (!cmdLine) return;

            commandHistory.push(cmdLine);
            historyIndex = commandHistory.length;

            printTerminal(`<div class="text-gray-400">&gt; <span class="text-white font-bold">${cmdLine}</span></div>`);
            const parts = cmdLine.split(' ');
            const baseCmd = parts[0].toLowerCase();
            const arg = parts[1] ? parts[1].toLowerCase() : '';

            if (baseCmd === 'lens') {
                if (['all', 'ai', 'java', 'qa', 'hardware', 'embedded'].includes(arg)) {
                    const target = arg === 'embedded' ? 'hardware' : arg;
                    if (typeof setPerspectiveLens === 'function') {
                        setPerspectiveLens(target);
                    }
                    printTerminal(`<div class="text-neon-cyan font-bold">Perspective Lens switched to: ${target.toUpperCase()}</div>`);
                } else {
                    printTerminal(`<div class="text-rose-400">Usage: lens [all | ai | java | qa | hardware]</div>`);
                }
            } else if (baseCmd === 'theme') {
                if (arg === 'eink' || arg === 'paper') {
                    if (typeof applyTheme === 'function') applyTheme('e-ink', true);
                    printTerminal(`<div class="text-neon-emerald font-bold">Display theme set to: E-INK PAPER</div>`);
                } else if (arg === 'cyber' || arg === 'dark') {
                    if (typeof applyTheme === 'function') applyTheme('cyber', true);
                    printTerminal(`<div class="text-neon-cyan font-bold">Display theme set to: CYBER TERMINAL</div>`);
                } else {
                    if (typeof toggleTheme === 'function') toggleTheme();
                    const isEink = document.documentElement.classList.contains('e-ink');
                    printTerminal(`<div class="text-neon-cyan font-bold">Display theme toggled to: ${isEink ? 'E-INK PAPER' : 'CYBER TERMINAL'}</div>`);
                }
            } else if (baseCmd === 'cv') {
                const profKey = (arg && recruiterProfiles && recruiterProfiles[arg]) ? arg : 'qa';
                const prof = recruiterProfiles ? recruiterProfiles[profKey] : null;
                if (prof) {
                    printTerminal(`
                        <div class="text-neon-purple font-bold">${prof.title}</div>
                        <div class="text-gray-300 mt-1">${prof.text}</div>
                        <div class="text-neon-cyan text-xs mt-1">Stack: ${prof.stack}</div>
                    `);
                }
            } else if (terminalCommands && terminalCommands[baseCmd]) {
                const res = terminalCommands[baseCmd]();
                if (res) printTerminal(res);
            } else {
                printTerminal(`<div class="text-rose-400">Command not recognized: '${baseCmd}'. Type <span class="text-neon-cyan font-bold">help</span> for command list.</div>`);
            }

            keepFocus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
        }
    });

    // Wire open buttons
    document.addEventListener('DOMContentLoaded', () => {
        const openBtn = document.getElementById('open-terminal-btn');
        const heroBtn = document.getElementById('hero-terminal-btn');
        const footerBtn = document.getElementById('footer-terminal-btn');
        const fabBtn = document.getElementById('terminal-fab');

        if (openBtn) openBtn.addEventListener('click', openTerminal);
        if (heroBtn) heroBtn.addEventListener('click', openTerminal);
        if (footerBtn) footerBtn.addEventListener('click', openTerminal);
        if (fabBtn) fabBtn.addEventListener('click', openTerminal);
        if (closeDot) closeDot.addEventListener('click', closeTerminal);
    });

    window.openTerminal = openTerminal;
    window.closeTerminal = closeTerminal;
})();
