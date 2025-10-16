import React from "react";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../context/useTheme";
import Button from "./Button";

/**
 * Navbar component for site navigation
 * @param {object} props
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} [props.children] - Additional content (optional)
 */
const Navbar = ({ className = "", children }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav
      className={`bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between ${className}`.trim()}
    >
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          Task Manager
        </Link>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors ${
              isActive
                ? "font-semibold text-blue-700 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-200"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors ${
              isActive
                ? "font-semibold text-blue-700 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-200"
            }`
          }
        >
          Tasks
        </NavLink>
        <Button
          variant="secondary"
          size="sm"
          className="ml-4"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </Button>
      </div>
      {children && <div>{children}</div>}
    </nav>
  );
};

export default Navbar;
