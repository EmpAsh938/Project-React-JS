import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "./context";

const Header = () => {
  const { input, setInput, handleSubmit } = useContext(AppContext);
  return (
    <article className="header">
      <div className="header-title">
        <h2>Stock Photos</h2>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <button onClick={handleSubmit}>
          <FaSearch />
        </button>
      </form>
    </article>
  );
};

export default Header;
