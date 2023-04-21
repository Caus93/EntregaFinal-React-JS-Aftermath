import React from "react";
import { NavLink } from "react-router-dom";

const OptionNavComponent = (props) => {
  const { titleOption } = props;
  return (
    <NavLink to={`/characters/houses/${titleOption}`}>
      <span className="nav-link ">{titleOption}</span>
    </NavLink>
  );
};

export default OptionNavComponent;
