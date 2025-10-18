import React from "react";
import useTheme from "../context/useTheme";

/**
 * ThemeToggle component - A modern toggle switch for theme switching.
 * Features smooth animations and clear visual feedback.
 *
 * @returns {JSX.Element}
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sun Icon */}
      <svg
        className={`w-5 h-5 transition-all duration-300 ${
          isDark
            ? "text-gray-400 scale-75 opacity-50"
            : "text-yellow-500 scale-100 opacity-100"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>

      {/* Divider */}
      <div className="w-px h-5 bg-gray-300 dark:bg-gray-600" />

      {/* Moon Icon */}
      <svg
        className={`w-5 h-5 transition-all duration-300 ${
          isDark
            ? "text-blue-400 scale-100 opacity-100"
            : "text-gray-400 scale-75 opacity-50"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-lg bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;
