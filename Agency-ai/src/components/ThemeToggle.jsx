import { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggle = ({ theme, setTheme }) => {
  // useEffect(() => {
  //   const preferDarkMode = window.matchMedia(
  //     "(prefers-color-scheme: dark)",
  //   ).matches;
  //   setTheme(theme || (preferDarkMode ? "dark" : "light"));
  // }, []);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.add("light");
  //   }
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button>
      {theme === "dark" ? (
        <img
          src={assets.sun_icon}
          alt="ToggleTheme"
          className="size-8 p-1.5 border-bs-gray-500 rounded-full"
          onClick={() => setTheme("light")}
        />
      ) : (
        <img
          src={assets.moon_icon}
          alt="ToggleTheme"
          className="size-8 p-1.5 border-bs-gray-500 rounded-full"
          onClick={() => setTheme("dark")}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
