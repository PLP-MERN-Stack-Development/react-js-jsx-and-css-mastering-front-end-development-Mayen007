import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer component with links and copyright information.
 *
 * @param {object} props
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} [props.children] - Additional content (optional)
 * @returns {JSX.Element}
 */
const Footer = ({ className = "", children }) => {
  return (
    <footer
      className={`bg-white dark:bg-gray-900 border-t mt-8 py-2 px-2 sm:py-4 sm:px-4 text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base ${className}`.trim()}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
        <div className="mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full sm:w-auto">
          <Link
            to="/"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Tasks
          </Link>
          <a
            href="https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Mayen007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
      {children && <div className="mt-2">{children}</div>}
    </footer>
  );
};

export default Footer;
