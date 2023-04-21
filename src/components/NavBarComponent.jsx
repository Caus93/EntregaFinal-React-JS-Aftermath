import React from "react";
import DivOptionNavComponent from "./DivOptionNavComponent";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

const BASE_URL = "https://hp-api.onrender.com/api/characters";

const NavBarComponent = (props) => {
  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  const selectedHouse = useParams().house;
  const [data] = useFetch(BASE_URL);
  const data2 = data.filter((item) => item.house.includes(selectedHouse));
  console.log(data2);

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
          <DivOptionNavComponent data={houses} />

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
