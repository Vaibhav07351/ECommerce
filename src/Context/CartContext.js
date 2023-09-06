import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();


const getLocalCartData = () => {
  let localCartData = localStorage.getItem("KeyCart");

  // if (localCartData === []) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }

  const parsedData=JSON.parse(localCartData);
  if(!Array.isArray(parsedData)) return [];
  return parsedData;

};




const initialState = {
//  cart: [],
 cart: getLocalCartData(),
  total_item: 0,
  total_amount: 0,
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };



  useEffect(() => {
  // //   // dispatch({ type: "CART_TOTAL_ITEM" });
  // //   // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    
    localStorage.setItem("KeyCart", JSON.stringify(state.cart));
  }, [state.cart]);

  // console.log(state);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };