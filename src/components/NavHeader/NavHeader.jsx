import { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "../../context/ThemeContext";

export const NavHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className=" w-full md:w-[85%] lg:w-[70%] ">
      <nav className="flex justify-between">
        <div>
          <h1
            className={`text-lg font-bold text-${
              theme === "light" ? "dark-gun-metal" : "white"
            }`}
          >
            devFinder
          </h1>
        </div>
        <div onClick={toggleTheme} className="cursor-pointer">
          {theme === "light" ? (
            <span className="flex justify-center items-center gap-2  text-queen-blue">
              Dark
              <IoMoon />
            </span>
          ) : (
            <span className="flex justify-center items-center gap-2 text-white">
              Light
              <IoSunny />
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};
