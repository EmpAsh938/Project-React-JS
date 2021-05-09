import { Link } from "react-router-dom";
import Logo from "../logo.svg";

const Title = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="cocktails" />
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Title;
