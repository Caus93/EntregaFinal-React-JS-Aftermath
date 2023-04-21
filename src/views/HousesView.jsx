import React from "react";
import { Fragment } from "react";
import { useParams, NavLink } from "react-router-dom";
import useFetch from "../utils/useFetch";

const BASE_URL = "https://hp-api.onrender.com/api/characters/house/";
const MAX_ITEMS = 8;

const HousesView = () => {
  const { house } = useParams();
  const [data, loading] = useFetch(`${BASE_URL}${house}`);

  return (
    <Fragment>
      <div className="container">
        {loading ? (
          <h1>Cargando al personaje</h1>
        ) : (
          <div className="row justify-content-center">
            {data.slice(0, MAX_ITEMS).map((item, index) => {
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
                    <NavLink to={`/`}>
                      <button className="btn btn-success btn-sm">
                        Adquirir Personaje
                      </button>
                    </NavLink>
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

export default HousesView;
