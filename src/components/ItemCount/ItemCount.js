import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls d-flex justify-content-flex-start p-3">
        <button className="btn btn-success btn-sm" onClick={decrement}>
          -
        </button>
        <h5 className="Number p-2">{quantity}</h5>
        <button className="btn btn-success btn-sm" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-success btn-sm"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
