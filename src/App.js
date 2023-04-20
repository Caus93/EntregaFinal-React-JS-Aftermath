import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import ItemComponentList from "./components/ItemComponentList/ItemComponentList";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProductView";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <ItemComponentList greeting={"Bienvenidos al mundo de Harry Potter"} />
      <Routes>
        <Route path={routes.root} element={<ProductsView />}></Route>
        <Route
          path={routes.detailProductView}
          element={<DetailProductView />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
