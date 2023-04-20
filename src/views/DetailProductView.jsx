import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

const BASE_URL = "https://hp-api.onrender.com/api/characters";

const DetailProductView = () => {
  const { idCharacter } = useParams();
  const [data] = useFetch(`${BASE_URL}/${idCharacter}`);
  console.log(data);
  const { name, actor, house, image } = data;

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card shadow-sm m-5" style={{ width: "18rem" }}>
            <img
              width={200}
              height={300}
              src={image}
              className="card-img-top pt-3"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{house}</p>
              <p className="card-text text-muted">{actor}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailProductView;
