import "./App.css";
import { NavHeader } from "./components/NavHeader/NavHeader";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="bg-lt-queen-blue flex flex-col justify-center items-center">
      <NavHeader />
      <SearchBar />
    </div>
  );
}

export default App;
