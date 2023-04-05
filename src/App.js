import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import ItemComponentList from "./components/ItemComponentList/ItemComponentList";

function App() {
  return (
    <div>
      <NavBarComponent />;
      <ItemComponentList greeting={"Bienvenidos a Aftermath"} />;
    </div>
  );
}

export default App;
