import { useContext } from "react";
import "./App.css";
import { NavHeader } from "./components/NavHeader/NavHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "light" ? "bg-lt-ghost-white" : "bg-dk-dark-gun-metal"
      } flex flex-col justify-center items-center p-5`}
    >
      <NavHeader />
      <SearchBar />
    </div>
  );
}

export default App;
