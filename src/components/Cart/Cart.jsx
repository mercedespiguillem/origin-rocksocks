import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

function Cart() {
  const { cartList, removeItem, clearCart } = useCartContext();

  console.log(cartList);

  return (
    <div className="mt-5">
      {cartList.map((prod) => (
        <ListGroup className="container">
          <ListGroup.Item action variant="dark" className="p-2">
            <p>
              Articulo: {prod.articulo.name} - Cantidad: {prod.cantidad} -
              Precio: {prod.articulo.price}
            </p>
            <Button
              variant="dark"
              className=""
              onClick={() => removeItem(prod.articulo.id)}
            >
              Eliminar
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ))}
      <Button
        variant="dark"
        className="m-3 p-2"
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={clearCart}
      >
        Vaciar Carrito
      </Button>
    </div>
  );
}

export default Cart;
