import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./itemDetail.css";

function ItemDetail({ products }) {
  const { cartList, addToCart } = useCartContext();
  const [counter, setCounter] = useState(0);

  function onAdd(item, amount) {
    addToCart({ articulo: { ...products }, cantidad: item });
    setCounter(amount);
  }

  console.log(cartList);

  return (
    <Row xs={1} md={1} className="row m-5">
      <Col className="card">
        <div>
          <img src={products.image} alt="Medias" className="m-3 center image" />
        </div>
        <h2 className="title">{products.name}</h2>
        <h6 className="m-3">{products.description}</h6>
        <h6>Stock: {products.stock}</h6>
        <h6>Precio: {products.price}</h6>
        <Col className="h-300">
          {counter === 0 ? (
            <ItemCount stock={products.stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              <Card>
                <Link to="/cart">
                  <Button variant="warning" className="m-3 p-2 w-25 btn-finish">
                    Finalizar compra
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="dark" className="m-3 p-2 w-25">
                    Seguir comprando
                  </Button>
                </Link>
              </Card>
            </>
          )}
        </Col>
      </Col>
    </Row>
  );
}

export default ItemDetail;
