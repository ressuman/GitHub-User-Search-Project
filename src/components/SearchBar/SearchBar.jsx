import { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../../context/ThemeContext";
import { UserContext } from "../../context/apiContext/UserContext";
import { getUser, getRepos } from "../../context/apiContext/ApiActions";

export default function SearchBar() {
  const { theme } = useContext(ThemeContext);
  const { userData, updateData } = useContext(UserContext);

  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setSearchData(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (searchData.trim() === "") {
      setError("Please enter a GitHub username");
      return;
    }

    setLoading(true);
    try {
      const [userResult, reposResult] = await Promise.all([
        getUser(searchData),
        getRepos(searchData),
      ]);
      updateData({ ...userResult, repos: reposResult });
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`w-full md:w-[85%] lg:w-[70%] flex justify-between items-center ${
          theme === "light" ? "bg-white" : "bg-yankees-blue"
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
            className={`w-full border-0 ${
              theme === "light"
                ? "text-slate-gray bg-white placeholder:text-queen-blue"
                : "text-white bg-yankees-blue placeholder:text-white"
            } focus:outline-none text-sm`}
            placeholder="Search GitHub Username..."
          />
        </div>

        <div className="flex items-center gap-1">
          <button
            className="bg-azure px-4 py-3 rounded-md text-white text-sm"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-full md:w-[85%] lg:w-[70%] mt-2 text-tart-orange text-sm">
          {error}
        </div>
      )}
    </>
  );
}
