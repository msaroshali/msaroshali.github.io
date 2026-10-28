// ==============================================================
// BACKGROUND CANVAS: DYNAMIC CONSTELLATION & E-INK GRAPHITE DUST
// ==============================================================

(function initCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.4 + 0.1
        });
    }

    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function render() {
        ctx.clearRect(0, 0, width, height);
        const isEink = document.documentElement.classList.contains('e-ink');

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = isEink ? `rgba(45, 48, 55, ${p.alpha * 0.35})` : `rgba(6, 182, 212, ${p.alpha})`;
            ctx.fill();

            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = isEink ? `rgba(45, 48, 55, ${0.08 * (1 - dist / 110)})` : `rgba(139, 92, 246, ${0.15 * (1 - dist / 110)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }

            // Mouse proximity glow
            if (mouse.x !== null) {
                let mdx = p.x - mouse.x;
                let mdy = p.y - mouse.y;
                let mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (mdist < 130) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = isEink ? `rgba(45, 48, 55, ${0.12 * (1 - mdist / 130)})` : `rgba(6, 182, 212, ${0.25 * (1 - mdist / 130)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(render);
    }
    render();
})();
