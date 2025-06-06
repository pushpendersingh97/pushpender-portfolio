import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.getItem("theme") === "dark"
      ? setIsDarkMode(true)
      : setIsDarkMode(false);
    document.documentElement.classList.toggle(
      "dark",
      localStorage.getItem("theme") === "dark"
    );
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2",
        "rounded-full bg-gray-800 dark:bg-gray-200 transition-colors duration-300"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
