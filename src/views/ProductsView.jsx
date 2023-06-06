import { Fragment } from "react";
import CardComponent from "../components/Cards/CardComponent";
import useFireStore from "../utils/useFireStore";
const MAX_ITEMS = 18;

const nameCollection = "items";

const ProductsView = (props) => {
  const [data, loading] = useFireStore({ nameCollection });

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
