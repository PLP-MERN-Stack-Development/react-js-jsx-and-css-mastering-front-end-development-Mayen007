import { useContext } from "react";
import ThemeContext from "./ThemeContext";

/**
 * Custom hook to access theme context (light/dark mode and toggle function).
 * @returns {{ theme: string, toggleTheme: function }}
 */
const useTheme = () => useContext(ThemeContext);

export default useTheme;
