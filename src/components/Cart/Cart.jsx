import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, removeItem, totalPrice, totalPriceItems, clearCart } =
    useCartContext();

  console.log(cartList);

  return (
    <>
      {cartList.length !== 0 ? (
        <>
          {cartList.map((prod) => (
            <>
              <ListGroup className="container mt-3 ml-10 mr-10">
                <ListGroup.Item action variant="dark" className="p-2">
                  <>
                    <img
                      src={prod.articulo.image}
                      alt="Medias"
                      style={{ borderRadius: 25, width: 50 }}
                      className="m-3 center"
                    />
                  </>
                  <p>
                    Articulo: {prod.articulo.name} - Cantidad: {prod.cantidad} -
                    Precio: ${totalPriceItems(prod)}
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
            </>
          ))}
          <div className="m-5">
            <h4>Total: $ {totalPrice()}</h4>
          </div>

          <Button
            variant="dark"
            className="m-3 p-2"
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={clearCart}
          >
            Vaciar Carrito
          </Button>
          <Button variant="dark" className="m-3 p-2">
            Finalizar compra
          </Button>
        </>
      ) : (
        <>
          <h3 className="mt-5">El carrito está vacío</h3>
          <Link to="/">
            <Button
              variant="dark"
              className="m-3 p-2"
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Seguir comprando
            </Button>
          </Link>
        </>
      )}
    </>
  );
}
export default Cart;
