import type { PortfolioItem, PortfolioRole } from "../../../shared/types/content";

export type ProjectFilter = "all" | "live" | PortfolioRole;

export const projectFilterKeys: ProjectFilter[] = [
  "all",
  "live",
  "frontend",
  "backend",
  "fullstack",
];

export function filterProjects(
  projects: PortfolioItem[],
  filter: ProjectFilter,
): PortfolioItem[] {
  if (filter === "live") {
    return projects.filter((project) => project.status);
  }

  if (filter === "frontend" || filter === "backend" || filter === "fullstack") {
    return projects.filter((project) => project.roleKey === filter);
  }

  return projects;
}

export function getProjectRoleBadge(roleKey: PortfolioRole): PortfolioRole {
  return roleKey;
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
