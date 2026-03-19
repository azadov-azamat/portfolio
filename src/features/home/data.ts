export const navLinks = ["about", "experience", "projects", "contact"];

export const heroRoles = [
  "Web Developer / Full-Stack Engineer",
  "Full-Stack Developer",
  "React / Next.js",
  "Node.js / Spring",
  "Mobile · Web · AI",
];

export const heroDescription =
  "Toshkentlik web developer va full stack engineer. Hozir Banerma Group bilan React, Next.js, Node.js, Spring Boot va React Native asosidagi mahsulotlar ustida ishlaydi.";

export const aboutSummary =
  "Azamat Azadov - Toshkentlik web developer va full stack engineer. Ochiq profillarida GitHub portfolio, Telegram va web developer bio mavjud; agregator profillarda esa 2021-yildan beri NAPA Team, Davlat Xizmatlari Agentligi, Adliya Vazirligi, Kervanyol va Banerma Group tajribasi ko'rinadi.";

export const aboutDetails =
  "Asosiy yo'nalishlari React, Next.js, TypeScript, Node.js, Spring Boot va React Native. Web ilovalar, AI integratsiyalar, logistika platformalari va real-estate mahsulotlari ustida ishlaydi.";

export const heroStats = [
  { value: "10+", label: "Loyihalar" },
  { value: "5+", label: "Yil tajriba" },
  { value: "5", label: "Kompaniya" },
  { value: "∞", label: "Kod satrlari" },
];

export const marqueeItems = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "React Native",
  "PostgreSQL",
  "Spring Boot",
  "Tailwind CSS",
  "Three.js",
  "GSAP",
  "Redux",
  "Docker",
];

export const skills = [
  { name: "React / Next.js", pct: 95 },
  { name: "TypeScript", pct: 88 },
  { name: "Node.js / Express", pct: 85 },
  { name: "Java / Spring Boot", pct: 78 },
  { name: "React Native", pct: 82 },
  { name: "PostgreSQL", pct: 76 },
  { name: "Three.js / GSAP", pct: 70 },
  { name: "Docker / DevOps", pct: 65 },
];

export type CodeTokenType =
  | "plain"
  | "keyword"
  | "variable"
  | "property"
  | "string"
  | "number"
  | "type"
  | "operator";

export interface CodeToken {
  value: string;
  type?: CodeTokenType;
}

export const aboutCodeSnippet: CodeToken[][] = [
  [
    { value: "const", type: "keyword" },
    { value: " " },
    { value: "developer", type: "variable" },
    { value: " " },
    { value: "=", type: "operator" },
    { value: " {" },
  ],
  [
    { value: "  " },
    { value: "name", type: "property" },
    { value: ": " },
    { value: '"Azamat Azadov"', type: "string" },
    { value: "," },
  ],
  [
    { value: "  " },
    { value: "location", type: "property" },
    { value: ": " },
    { value: '"Tashkent, UZ 🇺🇿"', type: "string" },
    { value: "," },
  ],
  [
    { value: "  " },
    { value: "role", type: "property" },
    { value: ": " },
    { value: '"Web Developer / Full-Stack Engineer"', type: "string" },
    { value: "," },
  ],
  [
    { value: "  " },
    { value: "currentRole", type: "property" },
    { value: ": " },
    { value: '"Full Stack Engineer at Banerma Group"', type: "string" },
    { value: "," },
  ],
  [],
  [
    { value: "  " },
    { value: "stack", type: "property" },
    { value: ": {" },
  ],
  [
    { value: "    " },
    { value: "frontend", type: "property" },
    { value: ": " },
    { value: '["React", "Next.js", "Tailwind"]', type: "string" },
    { value: "," },
  ],
  [
    { value: "    " },
    { value: "mobile", type: "property" },
    { value: ": " },
    { value: '["React Native"]', type: "string" },
    { value: "," },
  ],
  [
    { value: "    " },
    { value: "backend", type: "property" },
    { value: ": " },
    { value: '["Node.js", "Spring Boot"]', type: "string" },
    { value: "," },
  ],
  [
    { value: "    " },
    { value: "db", type: "property" },
    { value: ": " },
    { value: '["PostgreSQL", "MongoDB"]', type: "string" },
    { value: "," },
  ],
  [
    { value: "    " },
    { value: "ai", type: "property" },
    { value: ": " },
    { value: '["OpenAI GPT-4", "Telegram Bot"]', type: "string" },
    { value: "," },
  ],
  [{ value: "  }," }],
  [],
  [
    { value: "  " },
    { value: "experience", type: "property" },
    { value: ": " },
    { value: '"5+ years since 2021"', type: "string" },
    { value: "," },
  ],
  [
    { value: "  " },
    { value: "projects", type: "property" },
    { value: ": " },
    { value: "10", type: "number" },
    { value: "," },
  ],
  [
    { value: "  " },
    { value: "companies", type: "property" },
    { value: ": " },
    { value: "5", type: "number" },
    { value: "," },
  ],
  [],
  [
    { value: "  " },
    { value: "education", type: "property" },
    { value: ": " },
    { value: '["PDP IT Academy", "Toshkent Amaliy Fanlar Universiteti"]', type: "string" },
    { value: "," },
  ],
  [
    { value: "  " },
    { value: "currentFocus", type: "property" },
    { value: ": " },
    { value: '"Building scalable', type: "string" },
  ],
  [
    { value: "    " },
    { value: 'logistics & real-estate platforms"', type: "string" },
    { value: "," },
  ],
  [],
  [
    { value: "  " },
    { value: "openTo", type: "property" },
    { value: ": " },
    { value: '"Exciting opportunities 🚀"', type: "string" },
    { value: "," },
  ],
  [{ value: "};" }],
];

export const experienceItems = [
  {
    year: "2025",
    company: "Banerma Group",
    role: "Full-Stack Developer",
    tech: "React Native · React JS · OpenAI · GPT-4",
    desc: "Yukon App — yuk va transport bozori uchun web, telegram-bot va Android platforma.",
  },
  {
    year: "2024",
    company: "Banerma Group",
    role: "Full-Stack Developer",
    tech: "Ember.js · Node.js · PostgreSQL · GPT-4",
    desc: "77kv.uz — realtor va agentlar uchun ko'chmas mulk platformasi.",
  },
  {
    year: "2023",
    company: "Kervanyol Technologies",
    role: "Frontend Developer",
    tech: "React · Vite · Redux · Material UI",
    desc: "EximERP — deklaratsiya va import jarayonlarini avtomatlashtiradigan ERP sistema.",
  },
  {
    year: "2022",
    company: "Adliya Vazirligi",
    role: "Backend Developer",
    tech: "Java · Spring Boot · Microservice",
    desc: "Smart Adliya va B-Advice — integratsiya platformasi va tadbirkorlar maslahati.",
  },
  {
    year: "2021",
    company: "NAPA Automotive",
    role: "Frontend Developer",
    tech: "React · Socket.io · PWA · Zoom",
    desc: "Depository — online yig'ilish va ovoz berish platformasi.",
  },
];

export type SocialIconName = "github" | "telegram" | "linkedin";

export interface SocialLink {
  key: string;
  label: string;
  handle: string;
  url: string;
  desc: string;
  icon: SocialIconName;
  accent: string;
  hover: string;
}

export const socialLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    handle: "azadov-azamat",
    url: "https://github.com/azadov-azamat",
    desc: "Ochiq kodlar · loyihalar · kontribusiyalar",
    icon: "github",
    accent: "#ffffff",
    hover: "#e8192c",
  },
  {
    key: "telegram",
    label: "Telegram",
    handle: "@azadov_azamat",
    url: "https://t.me/azadov_azamat",
    desc: "Tezkor muloqot · savollar · takliflar",
    icon: "telegram",
    accent: "#38bdf8",
    hover: "#0ea5e9",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "azamat-azadov",
    url: "https://linkedin.com/in/azamat-azadov",
    desc: "Professional profil · ish tajribasi",
    icon: "linkedin",
    accent: "#60a5fa",
    hover: "#3b82f6",
  },
];
