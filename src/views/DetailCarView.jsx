import React, { Fragment } from "react";
import BuyComponent from "../components/BuyComponent/BuyComponent";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const DetailCarView = () => {
  const { cart } = useContext(CartContext);

  return (
    <Fragment>
      <div className="container">
        {cart.length === 0 ? (
          <h1>No hay personajes agregados en el carrito</h1>
        ) : (
          <BuyComponent showRemoveBtn={true} />
        )}
      </div>
    </Fragment>
  );
};

export default DetailCarView;
