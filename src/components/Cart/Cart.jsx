import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Form,
  FormCheck,
  FormGroup,
  FormLabel,
  ListGroup,
} from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  writeBatch,
} from "firebase/firestore";
import "./cart.css";

function Cart() {
  const { cartList, removeItem, totalPrice, totalPriceItems, clearCart } =
    useCartContext();

  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const makeOrder = async (e) => {
    e.preventDefault();

    let order = {};
    order.buyer = dataForm;
    order.total = totalPrice();

    order.items = cartList.map((itemInCart) => {
      const id = itemInCart.articulo.id;
      const title = itemInCart.articulo.name;
      const price = itemInCart.articulo.price;
      const amount = itemInCart.cantidad;

      return {
        id,
        title,
        price,
        amount,
      };
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const batch = writeBatch(db);

    await addDoc(ordersCollection, order)
      .then((resp) => setId(resp.id))
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          email: "",
          phone: "",
          name: "",
        });
      });
    batch.commit();
  };

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  console.log(dataForm);

  return (
    <>
      {cartList.length !== 0 ? (
        <>
          {cartList.map((prod) => (
            <>
              <ListGroup className="container mt-3">
                <ListGroup.Item action variant="dark" className="p-3">
                  <>
                    <img
                      src={prod.articulo.image}
                      alt="Medias"
                      className="m-3 center img"
                    />
                  </>
                  <p className="info">
                    Articulo: {prod.articulo.name} - Cantidad: {prod.cantidad} -
                    Precio: ${totalPriceItems(prod)}
                  </p>
                  <Button
                    variant="dark"
                    onClick={() => removeItem(prod.articulo.id)}
                  >
                    Eliminar
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </>
          ))}
          <Alert variant="warning" className="container w-75 mt-5">
            <h4>Total: $ {totalPrice()}</h4>
          </Alert>
          {id !== "" && (
            <>
              <Alert variant="success" className="container w-75">
                <h3>Orden generada con éxito</h3>
                <p>El id de la orden es : {id}</p>
              </Alert>

              <Form
                onSubmit={makeOrder}
                className="container border border-radius-5 w-75 p-3"
              >
                <Form.Group className=" container mb-3 ">
                  <Form.Label>Nombre y apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    value={dataForm.name}
                    className=""
                  />
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="e-mail"
                    onChange={handleChange}
                    value={dataForm.email}
                    className="mb-2"
                  />

                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Vuelva a ingresar su email"
                    onChange={handleChange}
                    value={dataForm.email}
                    className="mb-2"
                  />
                  <Form.Label>Numero de telefono</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    placeholder="Numero de telefono"
                    onChange={handleChange}
                    value={dataForm.phone}
                    className="mb-2"
                  />
                </Form.Group>
                <Button variant="warning" type="submit" onChange={handleChange}>
                  Confirmar orden
                </Button>
              </Form>
            </>
          )}
          <Button
            variant="warning"
            className="m-3 p-2 btn-1"
            onClick={clearCart}
          >
            Vaciar Carrito
          </Button>
          <Button variant="dark" className="m-3 p-2" onClick={makeOrder}>
            Finalizar compra
          </Button>
        </>
      ) : (
        <>
          <h3 className="mt-5 empty">Lo sentimos, el carrito está vacío </h3>
          <Link to="/">
            <Button variant="warning" className="m-3 p-2 btn-1">
              Seguir comprando
            </Button>
          </Link>
        </>
      )}
    </>
  );
}
export default Cart;
