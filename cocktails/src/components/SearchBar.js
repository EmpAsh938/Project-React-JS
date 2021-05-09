import { useContext } from "react";
import { AppContext } from "../context";

const SearchBar = () => {
  const { input, setInput } = useContext(AppContext);
  return (
    <form>
      <label htmlFor="searchbar">Search you favorite cocktail</label>
      <input
        type="text"
        name="search"
        id="searchbar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
