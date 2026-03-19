import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "uz" | "en" | "ru";

interface LocaleOption {
  code: Locale;
  label: string;
  nativeLabel: string;
}

interface I18nContextValue {
  locale: Locale;
  localeOptions: LocaleOption[];
  setLocale: (locale: Locale) => void;
}

const STORAGE_KEY = "portfolio-locale";

const localeOptions: LocaleOption[] = [
  { code: "uz", label: "UZ", nativeLabel: "O'z" },
  { code: "en", label: "EN", nativeLabel: "English" },
  { code: "ru", label: "RU", nativeLabel: "Рус" },
];

const siteMeta: Record<Locale, { description: string; title: string }> = {
  uz: {
    title: "Azamat Azadov | Full Stack Engineer Portfolio",
    description:
      "Azamat Azadovning portfolio sayti. React, Next.js, TypeScript, Node.js, Spring Boot va React Native bo'yicha tajriba va loyihalar.",
  },
  en: {
    title: "Azamat Azadov | Full Stack Engineer Portfolio",
    description:
      "Portfolio of Azamat Azadov. Projects and experience across React, Next.js, TypeScript, Node.js, Spring Boot, and React Native.",
  },
  ru: {
    title: "Azamat Azadov | Портфолио Full Stack Engineer",
    description:
      "Портфолио Азамата Азадова. Опыт и проекты на React, Next.js, TypeScript, Node.js, Spring Boot и React Native.",
  },
};

const I18nContext = createContext<I18nContextValue | null>(null);

function detectLocale(): Locale {
  if (typeof window === "undefined") {
    return "uz";
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY);

  if (savedLocale === "uz" || savedLocale === "en" || savedLocale === "ru") {
    return savedLocale;
  }

  const browserLocale = window.navigator.language.toLowerCase();

  if (browserLocale.startsWith("ru")) {
    return "ru";
  }

  if (browserLocale.startsWith("en")) {
    return "en";
  }

  return "uz";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uz");

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.title = siteMeta[locale].title;

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute("content", siteMeta[locale].description);
    }
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      localeOptions,
      setLocale: setLocaleState,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
