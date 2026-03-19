import { useEffect, useRef } from "react";
import type { LayoutProps } from "./types";

function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId = 0;

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px,${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px,${ringY - 18}px)`;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor custom-cursor-dot"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="custom-cursor custom-cursor-ring"
        aria-hidden="true"
      />
    </>
  );
}

function ScrollBar() {
  useEffect(() => {
    const element = document.getElementById("scroll-bar");

    if (!element) {
      return;
    }

    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      element.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id="scroll-bar" />;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative">
      <Cursor />
      <ScrollBar />
      <main>{children}</main>
    </div>
  );
}
