import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { portfolioData } from "../../../shared/data/portfolio";
import {
  filterProjects,
  projectFilters,
  type ProjectFilter,
} from "../lib/projects";
import ProjectCard from "./project-card";
import SectionHeading from "./section-heading";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 82%" },
        },
      );

      gsap.fromTo(
        tabsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: tabsRef.current, start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  const visibleProjects = filterProjects(portfolioData, activeFilter);

  const handleFilterChange = (nextFilter: ProjectFilter) => {
    if (!gridRef.current || nextFilter === activeFilter) {
      return;
    }

    gsap.to(gridRef.current, {
      opacity: 0,
      y: 8,
      duration: 0.18,
      onComplete: () => {
        setActiveFilter(nextFilter);
        gsap.to(gridRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        });
      },
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="px-5 py-24 layer md:px-16 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div ref={titleRef}>
          <SectionHeading
            label="04 — Projects"
            title="LOYIHA"
            accent="LAR"
            joiner=""
          />
        </div>

        <div
          ref={tabsRef}
          className="mobile-scroll-row mb-8 flex gap-2 md:mb-10 md:flex-wrap md:overflow-visible md:pb-0"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              className="shrink-0 rounded-full border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest transition-all duration-250 md:rounded-none md:text-xs"
              style={{
                letterSpacing: "0.1em",
                background:
                  activeFilter === filter.key ? "var(--red)" : "transparent",
                borderColor:
                  activeFilter === filter.key ? "var(--red)" : "var(--border)",
                color:
                  activeFilter === filter.key
                    ? "var(--white)"
                    : "var(--gray-3)",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
