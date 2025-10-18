import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
// Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskManager />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
