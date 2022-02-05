import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemDetail({ products }) {
  const [counter, setCounter] = useState(0);

  const onAdd = (amount) => {
    setCounter(amount);
  };

  return (
    <div className="row m-5">
      <div className="card col col-sm-12 col-md-6 d-flex justify-content">
        <div>
          <img
            src={products.image}
            alt="Medias con rayas"
            style={{ borderRadius: 10, width: 300 }}
            className="m-3 center"
          />
        </div>
        <h3 className="m-3">{products.description}</h3>
        <h6>Stock: {products.stock}</h6>
        <h6>Precio: {products.price}</h6>
      </div>
      <div className="col col-md-6">
        {counter === 0 ? (
          <ItemCount stock={products.stock} initial={1} onAdd={onAdd} />
        ) : (
          <>
            <Link to="/cart">
              <Button
                variant="dark"
                className="m-3 p-2"
                style={{ backgroundColor: "yellow", color: "black" }}
              >
                Finalizar compra
              </Button>
            </Link>
            <Link to="/">
              <Button variant="dark" className="m-3 p-2">
                Seguir comprando
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
