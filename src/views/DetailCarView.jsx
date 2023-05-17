import React, { Fragment, useContext } from "react";
import CardComponent from "../components/Cards/CardComponent";
import { CartContext } from "../context/CartContext";

const DetailCarView = () => {
  const { cart } = useContext(CartContext);

  return (
    <Fragment>
      <div className="container">
        {cart.map((item, index) => (
          <CardComponent key={index} data={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default DetailCarView;
