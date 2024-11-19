import { useState, useRef, useEffect } from "react";

export const useVisibilityObserver = <T extends HTMLElement>(
  threshold: number = 0.3
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold, isVisible]);

  return { isVisible, elementRef };
};
