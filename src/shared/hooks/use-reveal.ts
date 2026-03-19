import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

interface UseRevealOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export function useReveal<T extends HTMLElement>({
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.16,
}: UseRevealOptions = {}) {
  const ref = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, prefersReducedMotion, rootMargin, threshold]);

  return { ref, isVisible };
}
