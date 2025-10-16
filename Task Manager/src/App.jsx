import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import your components here
// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskManager />} />
    </Routes>
  );
}

export default App;
