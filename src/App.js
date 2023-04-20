import "./App.css";
import { Fragment } from "react";
import NavBarComponent from "./components/NavBarComponent";
import ItemComponentList from "./components/ItemComponentList/ItemComponentList";
import ProductsView from "./views/ProductsView";

function App() {
  return (
    <Fragment>
      <NavBarComponent />
      <ItemComponentList greeting={"Bienvenidos al mundo de Harry Potter"} />
      <ProductsView />
    </Fragment>
  );
}

export default App;
