import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import ItemComponentList from "./components/ItemComponentList/ItemComponentList";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProductView";
import { routes } from "./routes";
import HousesView from "./views/HousesView";
import { CartProvider } from "./context/CartContext";
import DetailCarView from "./views/DetailCarView";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarComponent />
        <ItemComponentList greeting={"Bienvenidos al mundo de Harry Potter"} />
        <Routes>
          <Route path={routes.root} element={<ProductsView />}></Route>
          <Route
            path={routes.detailProductView}
            element={<DetailProductView />}
          ></Route>
          <Route
            path="/characters/houses/:house"
            element={<HousesView />}
          ></Route>
          <Route path="/products/car" element={<DetailCarView />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
