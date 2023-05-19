import React, { useContext, useMemo } from "react";
import DivOptionNavComponent from "./DivOptionNavComponent";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import useFireStore from "../../utils/useFireStore";
import { CartContext } from "../../context/CartContext";

const nameCollection = "houses";

const NavBarComponent = (props) => {
  const { quantity } = useContext(CartContext);
  const [data] = useFireStore({ nameCollection });
  const dataProcess = useMemo(() => {
    const categoriesObject = data.length !== 0 ? data[0] : [];
    return "houses" in categoriesObject ? categoriesObject.houses : [];
  }, [data]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            width={100}
            height={80}
            src="https://st.depositphotos.com/14715994/57683/v/600/depositphotos_576839106-stock-illustration-boy-glasses-cartoon-icon-vector.jpg"
            alt=""
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <DivOptionNavComponent data={dataProcess} />

          <CartWidget quantity={quantity} />
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
