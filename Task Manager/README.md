# 📝 Task Manager - React Application

A modern, responsive task management application built with React, Vite, and Tailwind CSS. This project demonstrates component architecture, state management, hooks usage, API integration, and responsive design principles.

## 🚀 Live Demo

🔗 **[View Live Application](#)** _(Add deployment URL here)_

## ✨ Features

### 📋 Task Management

- ✅ Add new tasks with a simple input form
- ✅ Mark tasks as completed with checkbox interaction
- ✅ Delete tasks individually
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Persistent storage using localStorage (tasks saved automatically)
- ✅ Real-time task counter showing remaining active tasks

### 🎨 User Interface

- 🌓 **Dark/Light Mode Toggle** - Smooth theme switching with persistent preference
- 📱 **Fully Responsive Design** - Mobile-first approach with hamburger menu
- 🎯 **Modern UI Components** - Reusable Button, Card, Navbar, and Footer components
- ✨ **Smooth Animations** - Hover effects, transitions, and menu animations
- 🖼️ **Custom Logo** - SVG logo with gradient styling

### 🌐 API Integration

- 📡 Fetches posts from JSONPlaceholder API
- 🔍 Search functionality to filter API results
- 📄 Pagination (6 posts per page)
- ⏳ Loading and error states
- 🎯 Grid layout for optimal content display

### 🏗️ Technical Features

- ⚛️ Built with **React 19** and **Vite** for fast development
- 🎨 Styled with **Tailwind CSS v4** (utility-first approach)
- 🧭 **React Router v7** for navigation
- 🪝 Custom hooks (`useLocalStorageTasks`, `useTheme`)
- 🔄 Context API for global theme management
- 📦 Component-based architecture for maintainability

## 🛠️ Technologies Used

- **React 19** - JavaScript library for building user interfaces
- **Vite 7** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router 7** - Declarative routing for React
- **JSONPlaceholder** - Fake REST API for testing and prototyping

## 📁 Project Structure

```
Task Manager/
├── public/
│   ├── logo.svg              # Application logo
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/               # Static assets
│   │   ├── logo.svg
│   │   └── react.svg
│   ├── components/           # Reusable UI components
│   │   ├── ApiData.jsx       # API data fetching and display
│   │   ├── Button.jsx        # Reusable button with variants
│   │   ├── Card.jsx          # Card container component
│   │   ├── Footer.jsx        # Footer with links
│   │   ├── Navbar.jsx        # Navigation bar with hamburger menu
│   │   ├── TaskManager.jsx   # Task management component
│   │   └── ThemeToggle.jsx   # Theme switcher component
│   ├── context/              # React Context for global state
│   │   ├── ThemeContext.jsx  # Theme provider and context
│   │   └── useTheme.js       # Custom hook for theme access
│   ├── hooks/                # Custom React hooks
│   │   └── useLocalStorage.js # Hook for localStorage persistence
│   ├── pages/                # Page components
│   │   └── HomePage.jsx      # Main landing page
│   ├── App.css               # Application styles
│   ├── App.jsx               # Main app component with routing
│   ├── index.css             # Global styles and Tailwind imports
│   └── main.jsx              # Application entry point
├── .gitignore
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── jsconfig.json             # JavaScript configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.js            # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Mayen007.git
   cd react-js-jsx-and-css-mastering-front-end-development-Mayen007/Task\ Manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📖 Usage

### Task Management

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to any task to mark it as completed
3. **Delete a Task**: Click the "Delete" button to remove a task
4. **Filter Tasks**: Use the filter buttons (All, Active, Completed) to view specific tasks

### Theme Switching

- Click the theme toggle button in the navigation bar (desktop) or hamburger menu (mobile)
- Your preference is saved automatically and persists across sessions

### API Data

- Scroll down on the home page to view posts from the API
- Use the search bar to filter posts by title or content
- Navigate through pages using the pagination controls

## 🎨 Components Overview

### Core Components

- **`Button`** - Reusable button with variants (primary, secondary, danger) and sizes
- **`Card`** - Container component for structured content display
- **`Navbar`** - Responsive navigation with logo, links, and theme toggle
- **`Footer`** - Footer section with links and copyright information
- **`TaskManager`** - Complete task management interface
- **`ApiData`** - API integration with search and pagination
- **`ThemeToggle`** - Theme switcher with sun/moon icons

### Custom Hooks

- **`useLocalStorageTasks`** - Manages task state with localStorage persistence
- **`useTheme`** - Provides access to theme context (light/dark mode)

### Context

- **`ThemeContext`** - Global theme state management with system preference detection

## 🎯 Key Features Implemented

### React Hooks Used

- ✅ `useState` - Component state management
- ✅ `useEffect` - Side effects and data fetching
- ✅ `useContext` - Global theme state
- ✅ Custom hooks - `useLocalStorageTasks`, `useTheme`

### Responsive Design

- 📱 Mobile-first approach with Tailwind responsive utilities
- 🍔 Hamburger menu for mobile navigation
- 📐 Flexible layouts that adapt to screen sizes
- 🎨 Consistent spacing and typography across devices

### State Management

- 🗂️ Local component state with `useState`
- 🌍 Global theme state with Context API
- 💾 Persistent storage with localStorage
- 🔄 Automatic state synchronization

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Mayen007/issues).

## 📝 License

This project is part of the PLP MERN Stack Development course.

## 👤 Author

**Mayen007**

- GitHub: [@Mayen007](https://github.com/Mayen007)

## 🙏 Acknowledgments

- PLP MERN Stack Development Program
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the fake API
- [Tailwind CSS](https://tailwindcss.com/) for the amazing utility-first framework
- [Vite](https://vitejs.dev/) for the blazing-fast build tool

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
