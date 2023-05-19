import React, { Fragment, useContext } from "react";
import CardComponent from "../components/Cards/CardComponent";
import { CartContext } from "../context/CartContext";
import BuyComponent from "../components/BuyComponent/BuyComponent";

const DetailCarView = () => {
  const { cart } = useContext(CartContext);

  return (
    <Fragment>
      <div className="container">
        {cart.length === 0 ? (
          <h1>No hay personajes agregados en el carrito</h1>
        ) : (
          cart.map((item, index) => (
            <BuyComponent showRemoveBtn={true} key={index} data={item} />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default DetailCarView;
