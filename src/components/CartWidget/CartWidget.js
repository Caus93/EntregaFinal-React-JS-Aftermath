import React from "react";
import cartIcon from "./assets/cart.svg";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <img src={cartIcon} alt="cart-widget" />
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </div>
  );
};

export default CartWidget;
