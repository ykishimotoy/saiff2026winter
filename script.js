// Film Grain Animation for Overview Section
class FilmGrainAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.init();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const section = this.canvas.parentElement;
        this.canvas.width = section.offsetWidth;
        this.canvas.height = section.offsetHeight;
    }

    init() {
        const numParticles = Math.floor(this.canvas.width / 40);
        for (let i = 0; i < numParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height + Math.random() * 100,
                size: Math.random() * 50 + 30,
                speed: Math.random() * 0.8 + 0.3,
                opacity: Math.random() * 0.2 + 0.05,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: Math.random() * 0.02 + 0.008
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.y -= p.speed;
            p.wobble += p.wobbleSpeed;

            if (p.y + p.size < 0) {
                p.y = this.canvas.height + p.size;
                p.x = Math.random() * this.canvas.width;
            }

            const wobbleX = Math.sin(p.wobble) * 15;

            // Purple-cyan gradient orbs
            const gradient = this.ctx.createRadialGradient(
                p.x + wobbleX, p.y, 0,
                p.x + wobbleX, p.y, p.size
            );
            gradient.addColorStop(0, `rgba(157, 78, 221, ${p.opacity * 0.7})`);
            gradient.addColorStop(0.4, `rgba(100, 50, 180, ${p.opacity * 0.4})`);
            gradient.addColorStop(0.8, `rgba(0, 212, 255, ${p.opacity * 0.2})`);
            gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(p.x + wobbleX, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            p.opacity = Math.max(0.03, Math.min(0.3, p.opacity + (Math.random() - 0.5) * 0.01));
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Projector Light Animation for Divisions Section
class ProjectorAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.beams = [];
        this.particles = [];
        this.resize();
        this.init();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const section = this.canvas.parentElement;
        this.canvas.width = section.offsetWidth;
        this.canvas.height = section.offsetHeight;
    }

    init() {
        // Create light beam sources from top
        this.beams = [
            { x: this.canvas.width * 0.25, angle: 0.15, spread: 0.12, opacity: 0.06 },
            { x: this.canvas.width * 0.75, angle: -0.1, spread: 0.1, opacity: 0.05 }
        ];

        // Create floating particles (dust in light)
        const numParticles = Math.floor(this.canvas.width / 15);
        for (let i = 0; i < numParticles; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        this.particles.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.3 + 0.05,
            life: Math.random(),
            decay: Math.random() * 0.003 + 0.001
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw light beams
        this.beams.forEach(beam => {
            const gradient = this.ctx.createRadialGradient(
                beam.x, 0, 0,
                beam.x, this.canvas.height, this.canvas.height * 0.8
            );
            gradient.addColorStop(0, `rgba(157, 78, 221, ${beam.opacity * 2})`);
            gradient.addColorStop(0.3, `rgba(100, 50, 200, ${beam.opacity})`);
            gradient.addColorStop(0.7, `rgba(0, 212, 255, ${beam.opacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');

            const halfWidth = this.canvas.height * beam.spread;
            this.ctx.beginPath();
            this.ctx.moveTo(beam.x, 0);
            this.ctx.lineTo(beam.x + halfWidth + beam.angle * this.canvas.height, this.canvas.height);
            this.ctx.lineTo(beam.x - halfWidth + beam.angle * this.canvas.height, this.canvas.height);
            this.ctx.closePath();
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });

        // Draw floating particles
        this.particles.forEach((p, index) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= p.decay;

            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            if (p.life <= 0) {
                this.particles.splice(index, 1);
                this.createParticle();
                return;
            }

            const alpha = p.opacity * p.life;
            this.ctx.fillStyle = `rgba(157, 78, 221, ${alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Spark / Star Animation for Awards Section
class SparkAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.sparks = [];
        this.resize();
        this.init();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const section = this.canvas.parentElement;
        this.canvas.width = section.offsetWidth;
        this.canvas.height = section.offsetHeight;
    }

    init() {
        const numStars = Math.floor((this.canvas.width * this.canvas.height) / 4000);
        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                twinkleOffset: Math.random() * Math.PI * 2
            });
        }

        const numSparks = Math.floor(this.canvas.width / 25);
        for (let i = 0; i < numSparks; i++) {
            this.createSpark();
        }
    }

    createSpark() {
        const isGold = Math.random() > 0.5;
        this.sparks.push({
            x: Math.random() * this.canvas.width,
            y: this.canvas.height + Math.random() * 50,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.7 + 0.2,
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: Math.random() * 0.08 + 0.03,
            life: 1.0,
            decay: Math.random() * 0.008 + 0.003,
            isGold: isGold
        });
    }

    animate(timestamp = 0) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw twinkling stars
        this.stars.forEach(star => {
            star.twinkleOffset += star.twinkleSpeed;
            const twinkle = Math.sin(star.twinkleOffset) * 0.3 + 0.7;
            const alpha = star.opacity * twinkle;

            this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Draw rising sparks
        this.sparks.forEach((spark, index) => {
            spark.y -= spark.speed;
            spark.wobble += spark.wobbleSpeed;
            spark.life -= spark.decay;

            if (spark.life <= 0 || spark.y < -10) {
                this.sparks.splice(index, 1);
                this.createSpark();
                return;
            }

            const wobbleX = Math.sin(spark.wobble) * 8;
            const alpha = spark.opacity * spark.life;

            const r = spark.isGold ? 255 : 157;
            const g = spark.isGold ? 200 : 78;
            const b = spark.isGold ? 0 : 221;

            const sparkGradient = this.ctx.createRadialGradient(
                spark.x + wobbleX, spark.y, 0,
                spark.x + wobbleX, spark.y, spark.size * 2
            );
            sparkGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
            sparkGradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${alpha * 0.8})`);
            sparkGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

            this.ctx.fillStyle = sparkGradient;
            this.ctx.beginPath();
            this.ctx.arc(spark.x + wobbleX, spark.y, spark.size * 2, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame((ts) => this.animate(ts));
    }
}

// Ripple Animation for About Section
class RippleAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.ripples = [];
        this.ripplePoints = [];
        this.resize();
        this.init();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const section = this.canvas.parentElement;
        this.canvas.width = section.offsetWidth;
        this.canvas.height = section.offsetHeight;
        this.initRipplePoints();
    }

    initRipplePoints() {
        this.ripplePoints = [
            { x: this.canvas.width * 0.2, y: this.canvas.height * 0.3 },
            { x: this.canvas.width * 0.5, y: this.canvas.height * 0.5 },
            { x: this.canvas.width * 0.8, y: this.canvas.height * 0.7 },
            { x: this.canvas.width * 0.3, y: this.canvas.height * 0.7 },
            { x: this.canvas.width * 0.7, y: this.canvas.height * 0.3 }
        ];
    }

    init() {
        this.lastRippleTime = 0;
        this.rippleInterval = 1400;
    }

    createRipple(point) {
        const isPurple = Math.random() > 0.4;
        this.ripples.push({
            x: point.x,
            y: point.y,
            radius: 0,
            maxRadius: Math.max(this.canvas.width, this.canvas.height) * 0.6,
            speed: 1.2,
            opacity: 0.5,
            lineWidth: 2.5,
            color: isPurple
                ? { r: 157, g: 78, b: 221 }
                : { r: 0,   g: 212, b: 255 }
        });
    }

    animate(timestamp = 0) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (timestamp - this.lastRippleTime > this.rippleInterval) {
            const randomPoint = this.ripplePoints[Math.floor(Math.random() * this.ripplePoints.length)];
            this.createRipple(randomPoint);
            this.lastRippleTime = timestamp;
        }

        this.ripples.forEach((ripple, index) => {
            ripple.radius += ripple.speed;
            ripple.opacity = Math.max(0, 1 - (ripple.radius / ripple.maxRadius));
            ripple.lineWidth = 2.5 * ripple.opacity;

            if (ripple.opacity <= 0) {
                this.ripples.splice(index, 1);
                return;
            }

            this.ctx.beginPath();
            this.ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(${ripple.color.r}, ${ripple.color.g}, ${ripple.color.b}, ${ripple.opacity * 0.7})`;
            this.ctx.lineWidth = ripple.lineWidth;
            this.ctx.stroke();

            const gradient = this.ctx.createRadialGradient(
                ripple.x, ripple.y, ripple.radius - 20,
                ripple.x, ripple.y, ripple.radius
            );
            gradient.addColorStop(0, `rgba(${ripple.color.r}, ${ripple.color.g}, ${ripple.color.b}, 0)`);
            gradient.addColorStop(1, `rgba(${ripple.color.r}, ${ripple.color.g}, ${ripple.color.b}, ${ripple.opacity * 0.12})`);

            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });

        requestAnimationFrame((ts) => this.animate(ts));
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new FilmGrainAnimation('filmGrainCanvas');
    new ProjectorAnimation('projectorCanvas');
    new SparkAnimation('sparkCanvas');
    new RippleAnimation('rippleCanvas');

    // Scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section, .division-card, .award-card, .apply-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Hero always visible
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', this.getAttribute('href'));
            }
        });
    });

    // Jump to section when URL contains a hash (e.g. /#apply),
    // after all assets load so the scroll position isn't thrown off by layout shifts
    if (window.location.hash) {
        const scrollToHash = () => {
            const target = document.getElementById(window.location.hash.slice(1));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        window.addEventListener('load', () => setTimeout(scrollToHash, 100));
    }

    // Film particle parallax on hero
    const hero = document.querySelector('.hero');
    const filmParticles = document.querySelectorAll('.film-particle');

    if (hero && filmParticles.length > 0) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            filmParticles.forEach((particle, index) => {
                const xMove = (clientX / innerWidth - 0.5) * 40;
                const yMove = (clientY / innerHeight - 0.5) * 30;
                const delay = index * 0.1;
                particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
                particle.style.transition = `transform ${0.5 + delay}s ease-out`;
            });
        });
    }

    // Button hover glow
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'pulse 1s infinite';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.animation = 'none';
        });
    });

    // Pulse keyframe
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { box-shadow: 0 0 30px rgba(157, 78, 221, 0.5); }
            50%       { box-shadow: 0 0 60px rgba(157, 78, 221, 0.9); }
        }
    `;
    document.head.appendChild(style);

    // Scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #7B2FBE, #9D4EDD, #00D4FF);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Prize image lightbox (click / tap to enlarge)
    const prizeImages = document.querySelectorAll('.prize-card-inner img');
    if (prizeImages.length) {
        const lightbox = document.createElement('div');
        lightbox.className = 'prize-lightbox';
        lightbox.innerHTML = '<button class="prize-lightbox-close" aria-label="閉じる">&times;</button><img alt="">';
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('img');
        const closeLightbox = () => {
            lightbox.classList.remove('is-open');
            document.body.style.overflow = '';
        };

        prizeImages.forEach((img) => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('is-open');
                document.body.style.overflow = 'hidden';
            });
        });

        lightbox.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    // Page fade-in
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});
