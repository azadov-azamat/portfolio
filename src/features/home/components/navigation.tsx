import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { navLinks } from "../data";
import { HomeIcons } from "./icons";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 },
    );
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 layer md:px-8 md:py-5"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,12,12,0.92) 0%, rgba(12,12,12,0.58) 55%, transparent 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="rounded-full border px-3 py-1.5 text-lg tracking-widest font-headline md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-xl"
          style={{
            color: "var(--white)",
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          AZ<span style={{ color: "var(--red)" }}>.</span>
        </span>

        <div className="items-center hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/azadov-azamat"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:border-red-500 md:h-auto md:w-auto md:gap-2 md:rounded-none md:px-4 md:py-2"
          style={{ borderColor: "var(--border)" }}
          aria-label="Open GitHub profile"
        >
          <HomeIcons.github />
          <span className="hidden md:inline">GitHub</span>
        </a>
      </nav>

      <div className="mobile-nav-dock md:hidden">
        {navLinks.map((link) => (
          <a key={link} href={`#${link}`} className="mobile-nav-link">
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
