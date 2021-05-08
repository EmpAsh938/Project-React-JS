import { useContext } from "react";
import { AppContext } from "./context";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Cart = () => {
  const { cartItems, amount, removeItem, clearCart, updateAmount } = useContext(
    AppContext
  );
  return (
    <article className="cart">
      <h1 className="cart-title">Your Bag</h1>
      {cartItems.length < 1 ? (
        <p className="items-none">is currently empty</p>
      ) : (
        <div className="item-container">
          {cartItems.map((item) => {
            const { id, title, img, price, amount } = item;
            return (
              <div className="items" key={id}>
                <div className="item-wrapper">
                  <img src={img} alt={title} />
                  <div className="items-info">
                    <h3 className="items-title">{title}</h3>
                    <p>${price}</p>
                    <button className="btn" onClick={() => removeItem(id)}>
                      remove
                    </button>
                  </div>
                </div>
                <div className="quantity">
                  <button
                    className="btn"
                    onClick={() => updateAmount(id, "INC")}
                  >
                    <FaAngleUp />
                  </button>
                  <p>{amount}</p>
                  <button
                    className="btn"
                    onClick={() => updateAmount(id, "DEC")}
                  >
                    <FaAngleDown />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="cart-total">
            <h4 className="items-title">Total</h4>
            <p className="items-title">${amount.toFixed(2)}</p>
          </div>
          <div className="btn-container">
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Cart;
