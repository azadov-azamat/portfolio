import { useEffect, useRef, useState } from "react";
import { getPortfolioData } from "../../../shared/data/portfolio";
import { useI18n } from "../../../shared/i18n";
import { useReveal } from "../../../shared/hooks/use-reveal";
import {
  filterProjects,
  projectFilterKeys,
  type ProjectFilter,
} from "../lib/projects";
import { getHomeContent } from "../data";
import ProjectCard from "./project-card";
import SectionHeading from "./section-heading";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [isGridVisible, setIsGridVisible] = useState(true);
  const filterTimeoutRef = useRef<number>();
  const titleReveal = useReveal<HTMLDivElement>();
  const tabsReveal = useReveal<HTMLDivElement>();
  const { locale } = useI18n();
  const { projectFilters, sections } = getHomeContent(locale);

  const visibleProjects = filterProjects(getPortfolioData(locale), activeFilter);

  useEffect(() => {
    return () => {
      window.clearTimeout(filterTimeoutRef.current);
    };
  }, []);

  const handleFilterChange = (nextFilter: ProjectFilter) => {
    if (nextFilter === activeFilter) {
      return;
    }

    window.clearTimeout(filterTimeoutRef.current);
    setIsGridVisible(false);
    filterTimeoutRef.current = window.setTimeout(() => {
      setActiveFilter(nextFilter);
      window.requestAnimationFrame(() => {
        setIsGridVisible(true);
      });
    }, 180);
  };

  return (
    <section
      id="projects"
      className="content-section px-5 py-24 layer md:px-16 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleReveal.ref}
          className={`reveal reveal-up ${titleReveal.isVisible ? "is-visible" : ""}`}
        >
          <SectionHeading {...sections.projects} />
        </div>

        <div
          ref={tabsReveal.ref}
          className={`mobile-scroll-row mb-8 flex gap-2 reveal reveal-up md:mb-10 md:flex-wrap md:overflow-visible md:pb-0 ${
            tabsReveal.isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          {projectFilterKeys.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className="shrink-0 rounded-full border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest transition-all duration-250 md:rounded-none md:text-xs"
              style={{
                letterSpacing: "0.1em",
                background: activeFilter === filter ? "var(--red)" : "transparent",
                borderColor:
                  activeFilter === filter ? "var(--red)" : "var(--border)",
                color:
                  activeFilter === filter ? "var(--white)" : "var(--gray-3)",
              }}
            >
              {projectFilters[filter]}
            </button>
          ))}
        </div>

        <div
          className={`projects-grid grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 ${
            isGridVisible ? "is-grid-visible" : "is-grid-hidden"
          }`}
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
