import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.svg";

/**
 * Navbar component for site navigation and theme switching.
 * Features:
 * - Responsive hamburger menu for mobile
 * - Logo integration
 * - Theme toggle always visible
 * - Smooth transitions and animations
 *
 * @param {object} props
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} [props.children] - Additional content (optional)
 * @returns {JSX.Element}
 */
const Navbar = ({ className = "", children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 ${className}`.trim()}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[64px] py-3">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 mr-2">
            <Link
              to="/"
              className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Task Manager Logo"
                className="w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0"
              />
              <span className="text-base sm:text-xl font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                Task Manager
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 ${
                    isActive
                      ? "font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-200"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 ${
                    isActive
                      ? "font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-200"
                  }`
                }
              >
                Tasks
              </NavLink>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-3 pb-4 space-y-2 border-t dark:border-gray-800">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-all ${
                  isActive
                    ? "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tasks"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-all ${
                  isActive
                    ? "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              Tasks
            </NavLink>

            {/* Theme Switcher in Mobile Menu */}
            <div className="px-4 py-3 border-t dark:border-gray-800 mt-2 pt-4">
              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>

      {children && <div className="px-4 py-2">{children}</div>}
    </nav>
  );
};

export default Navbar;
