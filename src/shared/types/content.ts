export type PortfolioRole = "fullstack" | "frontend" | "backend";

export interface ExternalLink {
  label: string;
  href: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  src: string;
  owner: string;
  hash: string[];
  position: string;
  roleKey: PortfolioRole;
  telegram?: string;
  url: string | ExternalLink;
  startDate: string;
  finalDate: string;
  manager: string;
  status: boolean;
}

export interface OfficeItem {
  id: number;
  title: string;
  desc: string;
  src: string;
  owner: string;
}
