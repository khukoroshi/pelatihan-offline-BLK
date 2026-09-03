import assets from "../assets/assets";

const ThemeToggle = ({ theme, setTheme }) => {
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
