import React, { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ButtonComponent from "../Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const collectionOrders = "orders";

const BuyComponent = (props) => {
  const { showInfoBtn, showRemoveBtn } = props;
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  let total = 0;

  const removeThisItem = (item) => {
    removeItem(item);
  };

  cart.forEach((character) => {
    total = total + character.price * character.quantity;
  });

  const addOrder = (e) => {
    const name = e.target.elements.name.value;
    const lastName = e.target.elements.lastName.value;
    const phone = e.target.elements.phone.value;
    const email = e.target.elements.email.value;
    const confirmEmail = e.target.elements.confirmEmail.value;

    if (email === confirmEmail) {
      const newOrder = {
        client: {
          name,
          lastName,
          phone,
          email,
        },
        characters: cart,
        date: new Date().toLocaleDateString("es-CO"),
      };
      const db = getFirestore();
      const orderCollection = collection(db, collectionOrders);
      addDoc(orderCollection, newOrder).then(({ id }) => {
        alert(id);
      });
      clearCart();
      navigate("/");
    }
  };

  const actionBuy = (e) => {
    e.preventDefault();
    addOrder(e);
  };

  return (
    <Fragment>
      <div className="row">
        <div className="container col-7">
          {cart.map((item, index) => {
            return (
              <div
                className="card shadow-sm m-5"
                key={index}
                style={{ width: "10rem" }}
              >
                <img
                  width={150}
                  height={100}
                  src={item.image}
                  className="card-img-top pt-3"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.house}</p>
                  <p className="card-text text-muted">{item.actor}</p>
                  <p className="card-text text-muted">{item.quantity}</p>
                  <p className="card-text text-muted">
                    {item.quantity * item.price}
                  </p>
                  <ButtonComponent
                    showInfoBtn={showInfoBtn}
                    showRemoveBtn={showRemoveBtn}
                    idCharacter={item.id}
                    removeThisItem={() => {
                      removeThisItem(item);
                    }}
                  ></ButtonComponent>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container col-5">
          <form action="" onSubmit={actionBuy} className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Nombre
              </label>
              <input type="name" className="form-control" id="name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputLastName" className="form-label">
                Apellido
              </label>
              <input type="lastName" className="form-control" id="lastName" />
            </div>
            <div className="col-12">
              <label htmlFor="inputPhone" className="form-label">
                Teléfono
              </label>
              <input type="text" className="form-control" id="phone" />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                E-mail
              </label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="ConfirmEmail" className="form-label">
                Confirmar E-mail
              </label>
              <input type="text" className="form-control" id="confirmEmail" />
            </div>
            <div className="col-12">
              <h3>Total: $ {total}</h3>

              <button type="submit" className="btn btn-primary">
                Confirmar Compra
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyComponent;
