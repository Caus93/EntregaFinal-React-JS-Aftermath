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

  const removeItem = (itemId) => {
    const cardUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cardUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
