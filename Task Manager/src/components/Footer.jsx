import React from "react";

/**
 * Footer component with links and copyright information
 * @param {object} props
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} [props.children] - Additional content (optional)
 */
const Footer = ({ className = "", children }) => {
  return (
    <footer
      className={`bg-white dark:bg-gray-900 border-t mt-8 py-4 px-4 text-center text-gray-600 dark:text-gray-300 ${className}`.trim()}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div>
          &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
        </div>
        <div className="flex gap-4 justify-center">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/tasks" className="hover:underline">
            Tasks
          </a>
          <a
            href="https://github.com/Mayen007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
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
