import type { PortfolioItem } from "../../../shared/types/content";

export type ProjectFilter = "all" | "live" | "frontend" | "backend" | "fullstack";

export const projectFilters: Array<{ key: ProjectFilter; label: string }> = [
  { key: "all", label: "Hammasi" },
  { key: "live", label: "Active" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "fullstack", label: "Full-Stack" },
];

export function filterProjects(
  projects: PortfolioItem[],
  filter: ProjectFilter,
): PortfolioItem[] {
  if (filter === "live") {
    return projects.filter((project) => project.status);
  }

  if (filter === "frontend") {
    return projects.filter((project) => project.position.includes("Frontend"));
  }

  if (filter === "backend") {
    return projects.filter((project) => project.position.includes("Backend"));
  }

  if (filter === "fullstack") {
    return projects.filter((project) => project.position.includes("Full"));
  }

  return projects;
}

export function getProjectRoleBadge(position: string): string {
  if (position.includes("Full")) {
    return "FULLSTACK";
  }

  if (position.includes("Front")) {
    return "FRONTEND";
  }

  return "BACKEND";
}

export function resolveProjectLink(project: PortfolioItem) {
  if (typeof project.url === "string") {
    return {
      href: `https://${project.url}`,
      label: project.url,
    };
  }

  return {
    href: project.url.href,
    label: project.url.label,
  };
}
