import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import ApiData from "@/components/ApiData";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-2 sm:px-4 py-4 sm:py-8 w-full">
      <Card className="max-w-xl w-full text-center p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-blue-700 dark:text-blue-300">
          Welcome to Task Manager
        </h1>
        <p className="mb-4 sm:mb-6 text-gray-700 dark:text-gray-200 text-sm sm:text-base">
          Organize your tasks, stay productive, and explore public APIs. <br />
          This app demonstrates React component architecture, state management,
          hooks, and API integration with Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Link to="/tasks" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full">
              Go to Tasks
            </Button>
          </Link>
          <a
            href="https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Mayen007"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="secondary" className="w-full">
              GitHub
            </Button>
          </a>
        </div>
      </Card>
      {/* Render API Data below the Card */}
      <div className="w-full max-w-4xl mt-6 sm:mt-8">
        <ApiData />
      </div>
    </div>
  );
}
