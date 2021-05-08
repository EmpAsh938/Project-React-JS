import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { AppContext } from "./context";

const Title = () => {
  const { quantity } = useContext(AppContext);
  return (
    <header>
      <nav>
        <h2 className="title">useReducer</h2>
        <div className="cart-icon">
          <FaShoppingBasket />
          <span className="total-items">{quantity}</span>
        </div>
      </nav>
    </header>
  );
};

export default Title;
