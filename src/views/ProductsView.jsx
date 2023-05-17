import { Fragment } from "react";
import CardComponent from "../components/Cards/CardComponent";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://hp-api.onrender.com/api/characters";
const MAX_ITEMS = 18;

const ProductsView = (props) => {
  const [data, loading] = useFetch(BASE_URL);

  return (
    <Fragment>
      <div className="container">
        {loading ? (
          <h1>Estamos cargando los productos...</h1>
        ) : (
          <div className="row">
            {data.slice(0, MAX_ITEMS).map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <CardComponent showInfoBtn={true} data={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProductsView;
