import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.idCharacter)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.log("El personaje ya fue agregado");
    }
  };

  const removeItem = (data) => {
    const cartUpdated = cart.filter(
      (prod) => data.idCharacter !== prod.idCharacter
    );
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.idCharacter === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
