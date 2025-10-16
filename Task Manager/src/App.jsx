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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
