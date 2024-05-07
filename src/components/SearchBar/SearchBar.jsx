import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../../context/ThemeContext";

export default function SearchBar() {
  const { theme } = useContext(ThemeContext);

  return (
    <form
      className={`w-full md:w-[85%] lg:w-[70%] flex justify-between items-center ${
        theme == "light" ? "bg-dk-white" : "bg-dk-yankees-blue"
      } px-4 py-4 rounded-md mt-10`}
    >
      <div className="flex items-center gap-3 flex-1">
        <IoSearch className="text-lt-azure text-lg" />
        <input
          type="search"
          name="userName"
          id="userName"
          className={`w-full  border-0 ${
            theme === "light"
              ? "text-lt-slate-gray bg-dk-white placeholder:text-lt-queen-blue"
              : "text-dk-white bg-dk-yankees-blue placeholder:text-dk-white "
          }  focus:outline-none text-sm `}
          placeholder="Search GitHub Username... "
        />
      </div>

      <div className="flex items-center gap-1">
        {/* <span className="text-sm text-dk-tart-orange ">err</span> */}
        <button
          className=" bg-dk-azure px-4 py-3 rounded-md text-lt-white text-sm "
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
