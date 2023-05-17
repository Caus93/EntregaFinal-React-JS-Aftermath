import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ButtonComponent = ({
  showInfoBtn,
  showRemoveBtn,
  idCharacter,
  removeThisItem,
}) => {
  return (
    <Fragment>
      {showInfoBtn ? (
        <NavLink to={`/characters/detail/${idCharacter}`}>
          <button className="btn btn-success btn-sm">Más detalles</button>
        </NavLink>
      ) : (
        ""
      )}
      {showRemoveBtn ? (
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => removeThisItem()}
        >
          X
        </button>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ButtonComponent;
