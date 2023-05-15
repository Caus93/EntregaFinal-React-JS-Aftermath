import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import ItemCount from "../components/ItemCount/ItemCount";

const BASE_URL = "https://hp-api.onrender.com/api/characters";

const DetailProductView = () => {
  const { idCharacter } = useParams();
  const [data, loading] = useFetch(BASE_URL);

  const data2 = data.filter((character) => character.id.includes(idCharacter));

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
                    <ItemCount
                      initial={1}
                      stock={10}
                      onAdd={(quantity) =>
                        console.log(`Cantidad agregada`, quantity)
                      }
                    ></ItemCount>
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
