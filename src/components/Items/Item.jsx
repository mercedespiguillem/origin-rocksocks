import React from "react";
import { useEffect, useState } from "react";
import { getFetch } from "./ItemsPromise";
import { products } from "../helpers/ItemListArray";

function Item() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getFetch
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("al final"));
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((prod) => (
        <div key={prod.id} className="col-md-4">
          <div className="card w-100 mt-5">
            <div className="card-header">{`${prod.name} - ${prod.size}`}</div>
            <div className="card-body">
              <img src={prod.image} alt="" className="w-50" />
            </div>
            <div>{prod.price}</div>
            <div className="card-footer">
              <button className="btn btn-outline-secondary btn-block">
                Ver producto
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
