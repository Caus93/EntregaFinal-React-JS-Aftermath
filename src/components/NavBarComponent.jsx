import React from "react";
import DivOptionNavComponent from "./DivOptionNavComponent";
import CartWidget from "./CartWidget/CartWidget";

const NavBarComponent = (props) => {
  const nameOptions = ["Inicio", "Cards", "Hogwarts", "Nosotros"];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            width={100}
            height={80}
            src="https://st.depositphotos.com/14715994/57683/v/600/depositphotos_576839106-stock-illustration-boy-glasses-cartoon-icon-vector.jpg"
            alt=""
          />
        </span>
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
          <DivOptionNavComponent
            nameOption={nameOptions}
          ></DivOptionNavComponent>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
