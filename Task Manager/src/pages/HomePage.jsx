import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-8">
      <Card className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">
          Welcome to Task Manager
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-200">
          Organize your tasks, stay productive, and explore public APIs. <br />
          This app demonstrates React component architecture, state management,
          hooks, and API integration with Tailwind CSS.
        </p>
        <Button variant="primary" className="mr-2" as="a" href="/tasks">
          Go to Tasks
        </Button>
        <Button
          variant="secondary"
          as="a"
          href="https://github.com/Mayen007"
          target="_blank"
          rel="noopener noreferrer"
          link={true}
        >
          GitHub
        </Button>
      </Card>
    </div>
  );
}
