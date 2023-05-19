import React, { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ButtonComponent from "../Buttons/ButtonComponent";

const BuyComponent = (props) => {
  const { data, showInfoBtn, showRemoveBtn } = props;
  const { id: idCharacter, name, actor, house, image, price, quantity } = data;
  console.log(data);
  const { removeItem } = useContext(CartContext);

  const removeThisItem = () => {
    removeItem(data);
  };
  return (
    <Fragment>
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
          <p className="card-text text-muted">{quantity}</p>
          <p className="card-text text-muted">{quantity * price}</p>
          <ButtonComponent
            showInfoBtn={showInfoBtn}
            showRemoveBtn={showRemoveBtn}
            idCharacter={idCharacter}
            removeThisItem={removeThisItem}
          ></ButtonComponent>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyComponent;
