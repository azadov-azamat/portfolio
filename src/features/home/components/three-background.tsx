import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let frameId = 0;

    type Particle = {
      accent: boolean;
      size: number;
      vx: number;
      vy: number;
      x: number;
      y: number;
    };

    let particles: Particle[] = [];

    const createParticles = () => {
      const particleCount = width < 768 ? 46 : 88;
      const accentCount = Math.max(8, Math.round(particleCount * 0.14));

      particles = Array.from({ length: particleCount }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (width < 768 ? 0.16 : 0.24),
        vy: (Math.random() - 0.5) * (width < 768 ? 0.18 : 0.26),
        size: Math.random() * 1.8 + 0.55,
        accent: index < accentCount,
      }));
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      const pointerOffsetX = pointer.active ? (pointer.x - width / 2) * 0.008 : 0;
      const pointerOffsetY = pointer.active ? (pointer.y - height / 2) * 0.008 : 0;
      const connectionDistance = width < 768 ? 80 : 120;

      particles.forEach((particle, index) => {
        if (!prefersReducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -24 || particle.x > width + 24) {
            particle.vx *= -1;
          }

          if (particle.y < -24 || particle.y > height + 24) {
            particle.vy *= -1;
          }
        }

        const x = particle.x + pointerOffsetX * (particle.accent ? 0.7 : 0.35);
        const y = particle.y + pointerOffsetY * (particle.accent ? 0.7 : 0.35);

        context.beginPath();
        context.fillStyle = particle.accent
          ? "rgba(232,25,44,0.48)"
          : "rgba(255,255,255,0.16)";
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fill();

        for (let siblingIndex = index + 1; siblingIndex < particles.length; siblingIndex += 1) {
          const sibling = particles[siblingIndex];
          const dx = sibling.x - particle.x;
          const dy = sibling.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance > connectionDistance) {
            continue;
          }

          context.beginPath();
          context.strokeStyle = `rgba(255,255,255,${0.06 - distance / (connectionDistance * 20)})`;
          context.lineWidth = sibling.accent || particle.accent ? 0.55 : 0.35;
          context.moveTo(x, y);
          context.lineTo(
            sibling.x + pointerOffsetX * (sibling.accent ? 0.7 : 0.35),
            sibling.y + pointerOffsetY * (sibling.accent ? 0.7 : 0.35),
          );
          context.stroke();
        }
      });

      if (!prefersReducedMotion) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();

    if (!prefersReducedMotion) {
      frameId = window.requestAnimationFrame(render);
    } else {
      render();
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" />;
}
