import React, { createContext, useEffect, useState } from "react";

/**
 * ThemeContext provides theme state (light/dark) and a toggle function.
 *
 * ThemeProvider wraps the app and manages theme state, syncing with localStorage and system preference.
 */
const ThemeContext = createContext();
export default ThemeContext;

/**
 * ThemeProvider component to wrap the app and provide theme context.
 * @param {object} props
 * @param {React.ReactNode} props.children - App content
 * @returns {JSX.Element}
 */
export const ThemeProvider = ({ children }) => {
  // Check localStorage or system preference for initial theme
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
