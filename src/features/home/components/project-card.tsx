import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import type { PortfolioItem } from "../../../shared/types/content";
import { getProjectRoleBadge, resolveProjectLink } from "../lib/projects";
import { HomeIcons } from "./icons";

interface ProjectCardProps {
  project: PortfolioItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const link = resolveProjectLink(project);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: (index % 3) * 0.1,
        scrollTrigger: { trigger: cardRef.current, start: "top 87%" },
      },
    );
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(imageRef.current, {
      scale: 1.07,
      duration: 0.55,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.45,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      className="card-editorial mobile-panel group overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[180px] overflow-hidden md:h-[200px]">
        <div ref={imageRef} className="h-full w-full">
          <img
            src={project.src || "/placeholder.svg"}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top,rgba(12,12,12,0.95) 0%,rgba(12,12,12,0.3) 60%,transparent 100%)",
          }}
        />

        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span
            className={project.status ? "status-live" : "status-arch"}
            style={{ fontFamily: "'IBM Plex Mono',monospace" }}
          >
            {project.status ? "● LIVE" : "○ ARXIV"}
          </span>
        </div>

        <div className="absolute right-3 top-3">
          <span className="tag-red">{getProjectRoleBadge(project.position)}</span>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            background: "rgba(232,25,44,0.08)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div
            className="text-6xl font-headline"
            style={{ color: "rgba(255,255,255,0.06)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className="p-4 md:p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3
            className="text-[1.7rem] leading-tight font-headline md:text-2xl"
            style={{ color: "var(--white)" }}
          >
            {project.title}
          </h3>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center border transition-all duration-200 hover:border-red-600 hover:bg-red-600 md:h-7 md:w-7"
            style={{
              borderColor: "var(--border)",
              color: "var(--gray-3)",
              marginTop: 4,
            }}
          >
            <HomeIcons.arrowUpRight />
          </a>
        </div>

        <p
          style={{
            fontFamily: "'IBM Plex Mono',monospace",
            fontSize: "0.65rem",
            color: "var(--red)",
            letterSpacing: "0.06em",
            marginBottom: 12,
          }}
        >
          {project.owner}
        </p>

        <div className="mb-4 space-y-2">
          {[
            { icon: <HomeIcons.user />, text: project.manager },
            {
              icon: <HomeIcons.calendar />,
              text: `${project.startDate} — ${project.finalDate}`,
            },
          ].map((meta) => (
            <div
              key={meta.text}
              className="flex items-start gap-2"
              style={{
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: "0.65rem",
                color: "var(--gray-3)",
              }}
            >
              <span
                style={{ color: "var(--red)", opacity: 0.7, display: "flex" }}
              >
                {meta.icon}
              </span>
              {meta.text}
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-3">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
            style={{
              fontFamily: "'IBM Plex Mono',monospace",
              fontSize: "0.62rem",
              color: "var(--gray-3)",
            }}
          >
            <span style={{ color: "var(--red)", display: "flex" }}>
              <HomeIcons.arrowUpRight />
            </span>
            <span className="max-w-[160px] truncate">{link.label}</span>
          </a>

          {project.telegram && (
            <a
              href={`https://${project.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors duration-200 hover:text-sky-400"
              style={{
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: "0.62rem",
                color: "var(--gray-3)",
              }}
            >
              <HomeIcons.telegram />
              <span className="max-w-[140px] truncate">{project.telegram}</span>
            </a>
          )}
        </div>

        <p className="project-card-description mb-4 font-mono text-[0.68rem] leading-[1.7] text-[var(--gray-2)]">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.hash.slice(0, 5).map((tag) => (
            <span key={tag} className="flex items-center gap-1 tag-red">
              <span style={{ opacity: 0.5, display: "flex" }}>
                <HomeIcons.tag />
              </span>
              {tag}
            </span>
          ))}

          {project.hash.length > 5 && (
            <span className="tag-red" style={{ opacity: 0.4 }}>
              +{project.hash.length - 5}
            </span>
          )}
        </div>
      </div>

      <div
        style={{
          height: 2,
          background: "var(--red)",
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  );
}
