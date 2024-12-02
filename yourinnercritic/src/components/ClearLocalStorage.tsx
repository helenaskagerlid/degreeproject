import { useEffect } from "react";

export const ClearLocalStorage = () => {
  useEffect(() => {
    const handleExitPage = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", handleExitPage);

    return () => {
      window.removeEventListener("beforeunload", handleExitPage);
    };
  }, []);

  return null;
};
