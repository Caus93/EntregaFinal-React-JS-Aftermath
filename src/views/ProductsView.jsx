import { Fragment, useState, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";
import ItemComponentList from "../components/ItemComponentList/ItemComponentList";
import CardComponent from "../components/Cards/CardComponent";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://hp-api.onrender.com/api/characters";
const MAX_ITEMS = 20;

const ProductsView = (props) => {
  const [response, error, data, loading] = useFetch(BASE_URL);

  return (
    <Fragment>
      <NavBarComponent />
      <ItemComponentList greeting={"Bienvenidos al mundo de Harry Potter"} />
      <div className="container">
        {loading ? (
          <h1>Estamos cargando los productos...</h1>
        ) : (
          <div className="row">
            {data.slice(0, MAX_ITEMS).map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <CardComponent data={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProductsView;
