import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "5seas_theme";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  resetToSystem: () => void;
  isManuallySet: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
  resetToSystem: () => {},
  isManuallySet: false,
});

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getSavedTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {}
  return null;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const saved = getSavedTheme();

  const [theme, setTheme] = useState<Theme>(saved ?? getSystemTheme);
  const [isManuallySet, setIsManuallySet] = useState(saved !== null);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (isManuallySet) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [isManuallySet]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "light" ? "dark" : "light";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      setIsManuallySet(true);
      return next;
    });
  }, []);

  const resetToSystem = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setIsManuallySet(false);
    setTheme(getSystemTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, resetToSystem, isManuallySet }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
