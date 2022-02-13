import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function ItemDetail({ products }) 
{
  const { cartList, addToCart } = useCartContext();
  const [counter, setCounter] = useState(0);

  function onAdd(item, amount) {
    addToCart({ articulo: {...products} , cantidad: item });
    setCounter(amount);

  }

  console.log(cartList)

  return (
    <div className="row m-5">
      <div className="card col col-sm-12 col-md-6 d-flex justify-content">
        <div>
          <img
            src={products.image}
            alt="Medias"
            style={{ borderRadius: 10, width: 300 }}
            className="m-3 center"
          />
        </div>
        <h2>{products.name}</h2>
        <h5 className="m-3">{products.description}</h5>
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
