import { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../../context/ThemeContext";
import { UserContext } from "../../context/apiContext/UserContext";
import { getUser } from "../../context/apiContext/ApiActions";

export default function SearchBar() {
  const { theme } = useContext(ThemeContext);
  const { userData, updateData } = useContext(UserContext);

  const [searchData, setSearchData] = useState("");

  const handleInput = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchData === "") {
      alert("Enter Git Username");
    } else {
      await getUser(searchData)
        .then((result) => updateData(result))
        .finally(() => console.log(userData));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full md:w-[85%] lg:w-[70%] flex justify-between items-center ${
        theme == "light" ? "bg-white" : "bg-yankees-blue"
      } px-4 py-4 rounded-md mt-10 mb-4`}
    >
      <div className="flex items-center gap-3 flex-1">
        <IoSearch className="text-azure text-lg" />
        <input
          type="search"
          name="userName"
          value={searchData}
          onChange={handleInput}
          id="userName"
          className={`w-full  border-0 ${
            theme === "light"
              ? "text-slate-gray bg-white placeholder:text-queen-blue"
              : "text-white bg-yankees-blue placeholder:text-white "
          }  focus:outline-none text-sm `}
          placeholder="Search GitHub Username... "
        />
      </div>

      <div className="flex items-center gap-1">
        {/* <span className="text-sm text-dk-tart-orange ">err</span> */}
        <button
          className=" bg-azure px-4 py-3 rounded-md text-white text-sm "
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
