import React from "react";
import DivOptionNavComponent from "./DivOptionNavComponent";
import CartWidget from "./CartWidget/CartWidget";

const NavBarComponent = (props) => {
  const nameOptions = ["Inicio", "Musica", "Tienda", "Nosotros"];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            width={100}
            height={100}
            src="data:image/png;base64,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"
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
