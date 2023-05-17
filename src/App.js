import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import ItemComponentList from "./components/ItemComponentList/ItemComponentList";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProductView";
import { routes } from "./routes";
import HousesView from "./views/HousesView";
/* import GeneralContext from "./context/GeneralContext"; */
import { CartProvider } from "./context/CartContext";
import DetailCarView from "./views/DetailCarView";

function App() {
  /*   const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter);
  };

  console.log(counter); */
  return (
    /*     <GeneralContext.Provider> */
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
    /*     </GeneralContext.Provider> */
  );
}

export default App;
