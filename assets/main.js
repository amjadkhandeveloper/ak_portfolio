/* ===========================================================================
 * Amjad Khan · Portfolio · interactions
 * Zero dependencies. ~2KB. Respects prefers-reduced-motion.
 * =========================================================================== */

(() => {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Scroll-triggered card reveal ---------- */
    const initScrollReveal = () => {
        if (prefersReducedMotion) return;
        if (!('IntersectionObserver' in window)) return;

        const targets = document.querySelectorAll(
            '.exp-card, .domain-card, .achv-card, .skill-card, .cred-card, .info-card, .stat, .contact-card, .contact-pitch, .about-text, .section-head, .work-intro, .contact-title'
        );

        targets.forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(28px)';
            el.style.transition = 'opacity 750ms cubic-bezier(0.2,0.65,0.3,1), transform 750ms cubic-bezier(0.2,0.65,0.3,1)';
            el.style.willChange = 'opacity, transform';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        // Clean up will-change after animation completes (perf)
                        setTimeout(() => { entry.target.style.willChange = 'auto'; }, 800);
                    }, i * 70);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -60px 0px'
        });

        targets.forEach((el) => observer.observe(el));
    };

    /* ---------- Active section indicator in nav ---------- */
    const initActiveNav = () => {
        if (!('IntersectionObserver' in window)) return;

        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav a');
        if (!sections.length || !navLinks.length) return;

        const setActive = (id) => {
            navLinks.forEach((link) => {
                const isActive = link.getAttribute('href') === `#${id}`;
                link.style.color = isActive ? 'var(--ink)' : '';
                link.style.background = isActive ? 'rgba(0, 217, 255, 0.08)' : '';
            });
        };

        const observer = new IntersectionObserver((entries) => {
            // Pick the section most visible in viewport
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visible) setActive(visible.target.id);
        }, { threshold: [0.25, 0.5, 0.75] });

        sections.forEach((s) => observer.observe(s));
    };

    /* ---------- Parallax glow on mouse move (desktop only) ---------- */
    const initParallaxGlow = () => {
        if (prefersReducedMotion) return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

        const glow = document.querySelector('.bg-glow');
        if (!glow) return;

        let targetX = 50, targetY = 50, currentX = 50, currentY = 50;
        let rafId = null;

        const onMove = (e) => {
            targetX = (e.clientX / window.innerWidth) * 100;
            targetY = (e.clientY / window.innerHeight) * 100;
            if (!rafId) tick();
        };

        const tick = () => {
            currentX += (targetX - currentX) * 0.05;
            currentY += (targetY - currentY) * 0.05;

            glow.style.background = `
                radial-gradient(ellipse 70% 50% at ${50 + (currentX - 50) * 0.2}% -10%, rgba(0, 217, 255, 0.12), transparent 60%),
                radial-gradient(ellipse 60% 40% at ${100 + (currentX - 50) * 0.1}% 10%, rgba(255, 107, 91, 0.08), transparent 60%),
                radial-gradient(ellipse 50% 40% at ${(currentX - 50) * 0.1}% 30%, rgba(0, 217, 255, 0.05), transparent 60%)
            `;

            if (Math.abs(targetX - currentX) < 0.1 && Math.abs(targetY - currentY) < 0.1) {
                rafId = null;
                return;
            }
            rafId = requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
    };

    /* ---------- Boot ---------- */
    const boot = () => {
        initScrollReveal();
        initActiveNav();
        initParallaxGlow();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
