import { IoMoon } from "react-icons/io5";

export const NavHeader = () => {
  return (
    <header className="bg-[blue] text-[20px] w-full">
      <nav className="flex justify-between">
        <div>
          <h1>devFinder</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>Dark</span>
          <span>
            <IoMoon />
          </span>
        </div>
      </nav>
    </header>
  );
};
