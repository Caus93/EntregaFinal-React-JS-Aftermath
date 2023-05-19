import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [upd, setUpd] = useState(false);

  const quantityCar = () => {
    const totalProduct = cart.reduce((acc, act) => acc + act.quantity, 0);
    setQuantity(totalProduct);
  };

  useEffect(() => {
    quantityCar();
  }, [upd]);

  const addItem = (item, quantity) => {
    console.log(item);
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      cart.forEach((prod) => {
        if (prod.id === item.id) {
          prod.quantity = prod.quantity + quantity;
        }
      });
    }
    upd ? setUpd(false) : setUpd(true);
  };

  const removeItem = (data) => {
    const cartUpdated = cart.filter((prod) => data.id !== prod.id);
    setCart(cartUpdated);
    upd ? setUpd(false) : setUpd(true);
  };

  const clearCart = () => {
    setCart([]);
    upd ? setUpd(false) : setUpd(true);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, quantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
