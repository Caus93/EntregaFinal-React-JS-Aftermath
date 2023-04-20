import React from "react";
import { Fragment } from "react";

const CardComponent = (props) => {
  const { data } = props;
  const { index, name, gender, house, image } = props.data;

  return (
    <Fragment>
      {/* <div className="col-4"> */}
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
          <p className="card-text">{gender}</p>
          <button className="btn btn-success btn-sm">Más detalles</button>
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  );
};

export default CardComponent;
