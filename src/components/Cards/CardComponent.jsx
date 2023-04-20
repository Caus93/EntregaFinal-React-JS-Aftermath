import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const CardComponent = (props) => {
  const { data } = props;
  const { id: idCharacter, name, actor, house, image } = data;

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
        </div>
      </div>
    </Fragment>
  );
};

export default CardComponent;
