import React from "react";
import cartIcon from "./assets/cart.svg";
import { NavLink } from "react-router-dom";

const CartWidget = (props) => {
  const { quantity } = props;

  return (
    <div>
      <NavLink to="/cart">
        <img src={cartIcon} alt="cart-widget" />
        {quantity > 0 && <span>{quantity}</span>}
      </NavLink>
    </div>
  );
};

export default CartWidget;
