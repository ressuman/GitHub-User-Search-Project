import { useContext } from "react";
import "./App.css";
import { NavHeader } from "./components/NavHeader/NavHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import { ThemeContext } from "./context/ThemeContext";
import { CardDetails } from "./components/CardDetails/CardDetails";
import { UserContext } from "./context/apiContext/UserContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const { userData } = useContext(UserContext);

  return (
    <div
      className={`${
        theme === "light" ? "bg-ghost-white" : "bg-dark-gun-metal"
      } flex flex-col justify-center items-center p-5 h-full`}
    >
      <NavHeader />
      <SearchBar />
      {userData?.id && <CardDetails />}
    </div>
  );
}

export default App;
