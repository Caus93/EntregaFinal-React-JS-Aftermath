import React, { useContext /* , { useContext } */ } from "react";
import { Fragment, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import ItemCount from "../components/ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
/* import GeneralContext from "../context/GeneralContext"; */

const BASE_URL = "https://hp-api.onrender.com/api/characters";

const DetailProductView = () => {
  const { idCharacter } = useParams();

  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const [data, loading] = useFetch(BASE_URL);
  const data2 = data.filter((character) => character.id.includes(idCharacter));

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const selectedItem = data2.find((item) => item.id === idCharacter);

    if (selectedItem) {
      const { id, name, image } = selectedItem;
      const item = { idCharacter: id, name, image, quantity };
      addItem(item, quantity);
    }
  };

  return (
    <Fragment>
      <div className="container">
        {loading ? (
          <h1>Cargando al personaje</h1>
        ) : (
          <div className="row justify-content-center">
            {data2.map((item, index) => {
              return (
                <div
                  className="card shadow-sm m-5"
                  key={index}
                  style={{ width: "20rem" }}
                >
                  <img
                    width={200}
                    height={300}
                    src={item.image}
                    className="card-img-top pt-3"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.house}</p>
                    <p className="card-text text-muted">{item.actor}</p>
                    {quantityAdded > 0 ? (
                      <NavLink to={"/products/car"} className="option">
                        <button className="btn btn-success btn-sm">
                          Terminar Compra
                        </button>
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
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default DetailProductView;
