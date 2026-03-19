import type { Locale } from "../../shared/i18n";

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

export interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  tech: string;
  desc: string;
}

interface HomeContent {
  navLinks: Array<{ href: string; label: string }>;
  hero: {
    backgroundLabel: string;
    chip: string;
    eyebrow: string;
    primaryCta: string;
    scrollLabel: string;
    secondaryCta: string;
  };
  heroDescription: string;
  heroRoles: string[];
  heroStats: Array<{ label: string; value: string }>;
  about: {
    details: string;
    summary: string;
  };
  sections: {
    about: { accent: string; joiner?: string; label: string; title: string };
    contact: { accent: string; joiner?: string; label: string; title: string };
    experience: { accent: string; joiner?: string; label: string; title: string };
    projects: { accent: string; joiner?: string; label: string; title: string };
  };
  marqueeItems: string[];
  skills: Array<{ name: string; pct: number }>;
  experienceItems: ExperienceItem[];
  projectFilters: Record<"all" | "backend" | "frontend" | "fullstack" | "live", string>;
  projects: {
    archived: string;
    badges: Record<"backend" | "frontend" | "fullstack", string>;
    live: string;
    openLabel: string;
    ownerLabel: string;
    periodLabel: string;
  };
  contact: {
    availability: string;
    intro: string;
    locationLabel: string;
    locationValue: string;
    responseTime: string;
    responseTimeValue: string;
  };
  socialLinks: SocialLink[];
  footer: {
    location: string;
    signature: string;
  };
  misc: {
    githubLabel: string;
  };
}

const marqueeItems = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "React Native",
  "PostgreSQL",
  "Spring Boot",
  "Tailwind CSS",
  "Canvas",
  "Redux",
  "Docker",
  "OpenAI",
];

const skills = [
  { name: "React / Next.js", pct: 95 },
  { name: "TypeScript", pct: 88 },
  { name: "Node.js / Express", pct: 85 },
  { name: "Java / Spring Boot", pct: 78 },
  { name: "React Native", pct: 82 },
  { name: "PostgreSQL", pct: 76 },
  { name: "OpenAI / AI Integrations", pct: 74 },
  { name: "Docker / DevOps", pct: 65 },
];

const homeContent: Record<Locale, HomeContent> = {
  uz: {
    navLinks: [
      { href: "about", label: "Men haqimda" },
      { href: "experience", label: "Tajriba" },
      { href: "projects", label: "Loyihalar" },
      { href: "contact", label: "Aloqa" },
    ],
    hero: {
      backgroundLabel: "DEV",
      chip: "Mobile · Web · AI",
      eyebrow: "Portfolio · 2025",
      primaryCta: "Loyihalar",
      scrollLabel: "PASTGA",
      secondaryCta: "Bog'lanish",
    },
    heroDescription:
      "Toshkentlik web developer va full stack engineer. Banerma Group bilan React, Next.js, Node.js, Spring Boot va React Native asosidagi mahsulotlar ustida ishlaydi.",
    heroRoles: [
      "Web Developer / Full-Stack Engineer",
      "Full-Stack Developer",
      "React / Next.js mutaxassisi",
      "Node.js / Spring developer",
      "Mobile · Web · AI",
    ],
    heroStats: [
      { value: "10+", label: "Loyihalar" },
      { value: "5+", label: "Yil tajriba" },
      { value: "5", label: "Kompaniya" },
      { value: "∞", label: "Kod satrlari" },
    ],
    about: {
      summary:
        "Azamat Azadov — Toshkentlik web developer va full stack engineer. Ochiq profillarida GitHub portfolio, Telegram va professional bio mavjud; 2021-yildan beri davlat va xususiy sektordagi jamoalar bilan ishlagan.",
      details:
        "Asosiy yo'nalishlari React, Next.js, TypeScript, Node.js, Spring Boot va React Native. Web ilovalar, AI integratsiyalar, logistika platformalari va real-estate mahsulotlari ustida ishlaydi.",
    },
    sections: {
      about: { label: "02 — About", title: "MEN", accent: "HAQIMDA" },
      contact: { label: "05 — Contact", title: "BOG'LA", accent: "NISH", joiner: "" },
      experience: { label: "03 — Experience", title: "ISH", accent: "TAJRIBAM" },
      projects: { label: "04 — Projects", title: "LOYIHA", accent: "LAR", joiner: "" },
    },
    marqueeItems,
    skills,
    experienceItems: [
      {
        year: "2025",
        company: "Banerma Group",
        role: "Full-Stack Developer",
        tech: "React Native · React JS · OpenAI · GPT-4",
        desc: "Yukon App — yuk va transport bozori uchun web, Telegram bot va Android platforma.",
      },
      {
        year: "2024",
        company: "Banerma Group",
        role: "Full-Stack Developer",
        tech: "Ember.js · Node.js · PostgreSQL · GPT-4",
        desc: "77kv.uz — rieltor va agentlar uchun ko'chmas mulk platformasi.",
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
        desc: "Smart Adliya va B-Advice — integratsiya platformasi va tadbirkorlar uchun maslahat xizmati.",
      },
      {
        year: "2021",
        company: "NAPA Automotive",
        role: "Frontend Developer",
        tech: "React · Socket.io · PWA · Zoom",
        desc: "Depository — online yig'ilish va ovoz berish platformasi.",
      },
    ],
    projectFilters: {
      all: "Hammasi",
      live: "Aktiv",
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full-Stack",
    },
    projects: {
      archived: "○ ARXIV",
      badges: {
        backend: "BACKEND",
        frontend: "FRONTEND",
        fullstack: "FULLSTACK",
      },
      live: "● LIVE",
      openLabel: "Loyihani ochish",
      ownerLabel: "Mijoz",
      periodLabel: "Davr",
    },
    contact: {
      availability: "Yangi loyihalarga ochiq",
      intro:
        "Yangi loyiha, hamkorlik yoki shunchaki tanishish uchun quyidagi platformalar orqali bog'laning.",
      locationLabel: "Manzil",
      locationValue: "Toshkent, O'zbekiston",
      responseTime: "Javob vaqti",
      responseTimeValue: "< 24 soat",
    },
    socialLinks: [
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
    ],
    footer: {
      location: "Toshkent, O'zbekiston",
      signature: "© 2025 Azamat Azadov · React · Canvas · CSS Motion",
    },
    misc: {
      githubLabel: "GitHub profilini ochish",
    },
  },
  en: {
    navLinks: [
      { href: "about", label: "About" },
      { href: "experience", label: "Experience" },
      { href: "projects", label: "Projects" },
      { href: "contact", label: "Contact" },
    ],
    hero: {
      backgroundLabel: "DEV",
      chip: "Mobile · Web · AI",
      eyebrow: "Portfolio · 2025",
      primaryCta: "Projects",
      scrollLabel: "SCROLL",
      secondaryCta: "Contact",
    },
    heroDescription:
      "Web developer and full-stack engineer based in Tashkent. Currently building products with React, Next.js, Node.js, Spring Boot, and React Native at Banerma Group.",
    heroRoles: [
      "Web Developer / Full-Stack Engineer",
      "Full-Stack Developer",
      "React / Next.js Specialist",
      "Node.js / Spring Developer",
      "Mobile · Web · AI",
    ],
    heroStats: [
      { value: "10+", label: "Projects" },
      { value: "5+", label: "Years of experience" },
      { value: "5", label: "Companies" },
      { value: "∞", label: "Lines of code" },
    ],
    about: {
      summary:
        "Azamat Azadov is a Tashkent-based web developer and full-stack engineer. His public profiles show hands-on work across government and private-sector products since 2021.",
      details:
        "Primary focus areas include React, Next.js, TypeScript, Node.js, Spring Boot, and React Native, with experience in web apps, AI integrations, logistics platforms, and real-estate products.",
    },
    sections: {
      about: { label: "02 — About", title: "ABOUT", accent: "ME" },
      contact: { label: "05 — Contact", title: "GET IN", accent: "TOUCH", joiner: " " },
      experience: { label: "03 — Experience", title: "WORK", accent: "EXPERIENCE" },
      projects: { label: "04 — Projects", title: "PRO", accent: "JECTS", joiner: "" },
    },
    marqueeItems,
    skills,
    experienceItems: [
      {
        year: "2025",
        company: "Banerma Group",
        role: "Full-Stack Developer",
        tech: "React Native · React JS · OpenAI · GPT-4",
        desc: "Yukon App — a logistics product spanning web, Telegram bot, and Android.",
      },
      {
        year: "2024",
        company: "Banerma Group",
        role: "Full-Stack Developer",
        tech: "Ember.js · Node.js · PostgreSQL · GPT-4",
        desc: "77kv.uz — a real-estate platform for agents and brokers.",
      },
      {
        year: "2023",
        company: "Kervanyol Technologies",
        role: "Frontend Developer",
        tech: "React · Vite · Redux · Material UI",
        desc: "EximERP — an ERP system that automates declaration and import workflows.",
      },
      {
        year: "2022",
        company: "Ministry of Justice",
        role: "Backend Developer",
        tech: "Java · Spring Boot · Microservice",
        desc: "Smart Adliya and B-Advice — integration and advisory platforms for public services.",
      },
      {
        year: "2021",
        company: "NAPA Automotive",
        role: "Frontend Developer",
        tech: "React · Socket.io · PWA · Zoom",
        desc: "Depository — an online meeting and voting platform.",
      },
    ],
    projectFilters: {
      all: "All",
      live: "Live",
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full-Stack",
    },
    projects: {
      archived: "○ ARCHIVE",
      badges: {
        backend: "BACKEND",
        frontend: "FRONTEND",
        fullstack: "FULLSTACK",
      },
      live: "● LIVE",
      openLabel: "Open project",
      ownerLabel: "Client",
      periodLabel: "Period",
    },
    contact: {
      availability: "Open to new projects",
      intro:
        "Feel free to reach out through the platforms below for a new project, collaboration, or a quick introduction.",
      locationLabel: "Location",
      locationValue: "Tashkent, Uzbekistan",
      responseTime: "Response time",
      responseTimeValue: "< 24 hours",
    },
    socialLinks: [
      {
        key: "github",
        label: "GitHub",
        handle: "azadov-azamat",
        url: "https://github.com/azadov-azamat",
        desc: "Open source · projects · contributions",
        icon: "github",
        accent: "#ffffff",
        hover: "#e8192c",
      },
      {
        key: "telegram",
        label: "Telegram",
        handle: "@azadov_azamat",
        url: "https://t.me/azadov_azamat",
        desc: "Quick chat · questions · collaboration",
        icon: "telegram",
        accent: "#38bdf8",
        hover: "#0ea5e9",
      },
      {
        key: "linkedin",
        label: "LinkedIn",
        handle: "azamat-azadov",
        url: "https://linkedin.com/in/azamat-azadov",
        desc: "Professional profile · work history",
        icon: "linkedin",
        accent: "#60a5fa",
        hover: "#3b82f6",
      },
    ],
    footer: {
      location: "Tashkent, Uzbekistan",
      signature: "© 2025 Azamat Azadov · React · Canvas · CSS Motion",
    },
    misc: {
      githubLabel: "Open GitHub profile",
    },
  },
  ru: {
    navLinks: [
      { href: "about", label: "Обо мне" },
      { href: "experience", label: "Опыт" },
      { href: "projects", label: "Проекты" },
      { href: "contact", label: "Контакты" },
    ],
    hero: {
      backgroundLabel: "DEV",
      chip: "Mobile · Web · AI",
      eyebrow: "Портфолио · 2025",
      primaryCta: "Проекты",
      scrollLabel: "ЛИСТАЙ",
      secondaryCta: "Связаться",
    },
    heroDescription:
      "Веб-разработчик и full-stack инженер из Ташкента. Сейчас работает над продуктами на React, Next.js, Node.js, Spring Boot и React Native в Banerma Group.",
    heroRoles: [
      "Web Developer / Full-Stack Engineer",
      "Full-Stack разработчик",
      "Специалист по React / Next.js",
      "Разработчик Node.js / Spring",
      "Mobile · Web · AI",
    ],
    heroStats: [
      { value: "10+", label: "Проектов" },
      { value: "5+", label: "Лет опыта" },
      { value: "5", label: "Компаний" },
      { value: "∞", label: "Строк кода" },
    ],
    about: {
      summary:
        "Азамат Азадов — веб-разработчик и full-stack инженер из Ташкента. С 2021 года работает над продуктами для государственного и частного сектора.",
      details:
        "Основные направления: React, Next.js, TypeScript, Node.js, Spring Boot и React Native. Работает с веб-приложениями, AI-интеграциями, логистическими платформами и продуктами в сфере недвижимости.",
    },
    sections: {
      about: { label: "02 — About", title: "ОБО", accent: "МНЕ" },
      contact: { label: "05 — Contact", title: "НАПИ", accent: "ШИТЕ", joiner: "" },
      experience: { label: "03 — Experience", title: "ОПЫТ", accent: "РАБОТЫ" },
      projects: { label: "04 — Projects", title: "ПРОЕ", accent: "КТЫ", joiner: "" },
    },
    marqueeItems,
    skills,
    experienceItems: [
      {
        year: "2025",
        company: "Banerma Group",
        role: "Full-Stack разработчик",
        tech: "React Native · React JS · OpenAI · GPT-4",
        desc: "Yukon App — логистический продукт для web, Telegram-бота и Android.",
      },
      {
        year: "2024",
        company: "Banerma Group",
        role: "Full-Stack разработчик",
        tech: "Ember.js · Node.js · PostgreSQL · GPT-4",
        desc: "77kv.uz — платформа недвижимости для риелторов и агентов.",
      },
      {
        year: "2023",
        company: "Kervanyol Technologies",
        role: "Frontend разработчик",
        tech: "React · Vite · Redux · Material UI",
        desc: "EximERP — ERP-система для автоматизации деклараций и импортных процессов.",
      },
      {
        year: "2022",
        company: "Министерство юстиции",
        role: "Backend разработчик",
        tech: "Java · Spring Boot · Microservice",
        desc: "Smart Adliya и B-Advice — интеграционные и консультационные платформы для госуслуг.",
      },
      {
        year: "2021",
        company: "NAPA Automotive",
        role: "Frontend разработчик",
        tech: "React · Socket.io · PWA · Zoom",
        desc: "Depository — платформа для онлайн-встреч и голосований.",
      },
    ],
    projectFilters: {
      all: "Все",
      live: "Активные",
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full-Stack",
    },
    projects: {
      archived: "○ АРХИВ",
      badges: {
        backend: "BACKEND",
        frontend: "FRONTEND",
        fullstack: "FULLSTACK",
      },
      live: "● LIVE",
      openLabel: "Открыть проект",
      ownerLabel: "Клиент",
      periodLabel: "Период",
    },
    contact: {
      availability: "Открыт к новым проектам",
      intro:
        "Напишите через платформы ниже, если у вас есть новый проект, предложение о сотрудничестве или вы хотите познакомиться.",
      locationLabel: "Локация",
      locationValue: "Ташкент, Узбекистан",
      responseTime: "Время ответа",
      responseTimeValue: "< 24 часов",
    },
    socialLinks: [
      {
        key: "github",
        label: "GitHub",
        handle: "azadov-azamat",
        url: "https://github.com/azadov-azamat",
        desc: "Открытый код · проекты · вклад",
        icon: "github",
        accent: "#ffffff",
        hover: "#e8192c",
      },
      {
        key: "telegram",
        label: "Telegram",
        handle: "@azadov_azamat",
        url: "https://t.me/azadov_azamat",
        desc: "Быстрая связь · вопросы · предложения",
        icon: "telegram",
        accent: "#38bdf8",
        hover: "#0ea5e9",
      },
      {
        key: "linkedin",
        label: "LinkedIn",
        handle: "azamat-azadov",
        url: "https://linkedin.com/in/azamat-azadov",
        desc: "Профессиональный профиль · опыт работы",
        icon: "linkedin",
        accent: "#60a5fa",
        hover: "#3b82f6",
      },
    ],
    footer: {
      location: "Ташкент, Узбекистан",
      signature: "© 2025 Azamat Azadov · React · Canvas · CSS Motion",
    },
    misc: {
      githubLabel: "Открыть профиль GitHub",
    },
  },
};

export function getHomeContent(locale: Locale) {
  return homeContent[locale];
}

export function getAboutCodeSnippet(locale: Locale): CodeToken[][] {
  const localizedValues = {
    uz: {
      currentFocus: '"Scalable logistika va real-estate platformalar yaratish"',
      currentRole: '"Banerma Groupda Full Stack Engineer"',
      experience: '"2021-yildan beri 5+ yil"',
      openTo: '"Qiziqarli imkoniyatlarga ochiq 🚀"',
      role: '"Web Developer / Full-Stack Engineer"',
    },
    en: {
      currentFocus: '"Building scalable logistics and real-estate platforms"',
      currentRole: '"Full Stack Engineer at Banerma Group"',
      experience: '"5+ years since 2021"',
      openTo: '"Open to exciting opportunities 🚀"',
      role: '"Web Developer / Full-Stack Engineer"',
    },
    ru: {
      currentFocus: '"Создание масштабируемых логистических и real-estate платформ"',
      currentRole: '"Full Stack Engineer в Banerma Group"',
      experience: '"5+ лет с 2021 года"',
      openTo: '"Открыт к интересным возможностям 🚀"',
      role: '"Web Developer / Full-Stack Engineer"',
    },
  }[locale];

  return [
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
      { value: localizedValues.role, type: "string" },
      { value: "," },
    ],
    [
      { value: "  " },
      { value: "currentRole", type: "property" },
      { value: ": " },
      { value: localizedValues.currentRole, type: "string" },
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
      { value: '["OpenAI", "Telegram Bot"]', type: "string" },
      { value: "," },
    ],
    [{ value: "  }," }],
    [],
    [
      { value: "  " },
      { value: "experience", type: "property" },
      { value: ": " },
      { value: localizedValues.experience, type: "string" },
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
      {
        value: '["PDP IT Academy", "Tashkent University of Applied Sciences"]',
        type: "string",
      },
      { value: "," },
    ],
    [
      { value: "  " },
      { value: "currentFocus", type: "property" },
      { value: ": " },
      { value: localizedValues.currentFocus, type: "string" },
      { value: "," },
    ],
    [],
    [
      { value: "  " },
      { value: "openTo", type: "property" },
      { value: ": " },
      { value: localizedValues.openTo, type: "string" },
      { value: "," },
    ],
    [{ value: "};" }],
  ];
}
