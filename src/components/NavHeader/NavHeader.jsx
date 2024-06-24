import { useContext } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { ThemeContext } from "../../context/ThemeContext";

export const NavHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full md:w-[85%] lg:w-[70%]">
      <nav className="flex justify-between items-center">
        <div>
          <h1
            className={`text-lg font-bold ${
              theme === "light" ? "text-dark-gun-metal" : "text-white"
            }`}
          >
            devFinder
          </h1>
        </div>
        <button
          onClick={toggleTheme}
          className="cursor-pointer flex justify-center items-center gap-2"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <span className="text-queen-blue flex items-center gap-2">
              Dark
              <IoMoon />
            </span>
          ) : (
            <span className="text-white flex items-center gap-2">
              Light
              <IoSunny />
            </span>
          )}
        </button>
      </nav>
    </header>
  );
};
