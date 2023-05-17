import React from "react";
import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CardComponent = (props) => {
  const { data } = props;
  const { id: idCharacter, name, actor, house, image } = data;
  const { removeItem } = useContext(CartContext);

  const removeThisItem = () => {
    removeItem(data);
  };
  return (
    <Fragment>
      <div className="card shadow-sm m-5" style={{ width: "18rem" }}>
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
          <NavLink to={`/characters/detail/${idCharacter}`}>
            <button className="btn btn-success btn-sm">Más detalles</button>
          </NavLink>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => removeThisItem()}
          >
            X
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CardComponent;
