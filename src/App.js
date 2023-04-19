import "./App.css";
import { Fragment, useState, useEffect } from "react";
import NavBarComponent from "./components/NavBarComponent";
import ItemComponentList from "./components/ItemComponentList/ItemComponentList";
import CardComponent from "./components/Cards/CardComponent";

function App() {
  const [items, setItems] = useState([]);
  const BASE_URL = "https://hp-api.onrender.com/api/characters";
  const MAX_ITEMS = 30;

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data.slice(0, MAX_ITEMS));
      });
  }, []);

  return (
    <Fragment>
      <NavBarComponent />
      <ItemComponentList greeting={"Bienvenidos al mundo de Harry Potter"} />
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <CardComponent key={item.name} data={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
