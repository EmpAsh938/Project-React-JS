import React, { createContext, useEffect, useReducer } from "react";

export const AppContext = createContext();
const url = "https://course-api.com/react-useReducer-cart-project";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        cartItems: [...action.payload],
        isLoading: false,
      };
    case "REMOVE_ITEM":
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: newCartItems,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    case "UPDATE_AMOUNT":
      if (action.payload.mode === "INC") {
        const newUpdatedItem = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cartItems: newUpdatedItem,
        };
      } else if (action.payload.mode === "DEC") {
        const newUpdateItem = state.cartItems
          .map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, amount: item.amount - 1 };
            } else {
              return item;
            }
          })
          .filter((item) => item.amount >= 1);
        return {
          ...state,
          cartItems: newUpdateItem,
        };
      }
      break;
    case "TOTAL_ITEMS":
      const { totalAmount, totalQuantity } = state.cartItems.reduce(
        (acc, item) => {
          acc.totalAmount = Number(item.price) * item.amount + acc.totalAmount;
          acc.totalQuantity = item.amount + acc.totalQuantity;
          return acc;
        },
        { totalAmount: 0, totalQuantity: 0 }
      );
      return {
        ...state,
        amount: totalAmount,
        quantity: totalQuantity,
      };
    default:
      throw new Error("No Matching action type found");
  }
};

const initialState = {
  cartItems: [],
  isLoading: true,
  amount: 999.99,
  quantity: 9,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRequest = async () => {
    const request = await fetch(url);
    const response = await request.json();
    dispatch({ type: "FETCH_REQUEST", payload: response });
    dispatch({ type: "TOTAL_ITEMS" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    dispatch({ type: "TOTAL_ITEMS" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    dispatch({ type: "TOTAL_ITEMS" });
  };

  const updateAmount = (id, effect) => {
    dispatch({ type: "UPDATE_AMOUNT", payload: { id: id, mode: effect } });
    dispatch({ type: "TOTAL_ITEMS" });
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        clearCart,
        updateAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
