import React, { useContext /* , { useContext } */ } from "react";
import { Fragment, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFireStore from "../utils/useFireStore";
import ItemCount from "../components/ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";

const nameCollection = "items";

const DetailProductView = () => {
  const { idCharacter } = useParams();

  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const [data, loading] = useFireStore({ nameCollection, idCharacter });
  const { name, actor, house, price, image, gender /* quantity */ } = data;

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(data, quantity);
  };

  return (
    <Fragment>
      <div className="container">
        {loading ? (
          <h1>Cargando al personaje</h1>
        ) : (
          <div className="row justify-content-center">
            <div className="card shadow-sm m-5" style={{ width: "20rem" }}>
              <img
                width={200}
                height={300}
                src={image}
                className="card-img-top pt-3"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{house}</p>
                <p className="card-text text-muted">{actor}</p>
                <p className="card-text text-muted">{gender}</p>
                <p className="card-text text-muted">{price}</p>
                {quantityAdded > 0 ? (
                  <NavLink to={"/"} className="option">
                    <button className="btn btn-success btn-sm">Volver</button>
                  </NavLink>
                ) : (
                  <ItemCount
                    initial={1}
                    stock={10}
                    onAdd={handleOnAdd}
                  ></ItemCount>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default DetailProductView;
