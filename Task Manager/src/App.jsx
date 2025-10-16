import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages
import HomePage from "./pages/HomePage";
// import TaskManager from './components/TaskManager';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/tasks" element={<TaskManager />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
