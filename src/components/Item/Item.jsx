import { Card, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item.css";

function Item({ id, name, size, image }) {
  return (
    <Col>
      <Card key={id} className="m-2" bg="light">
        <Card.Header>{`${name} - ${size}`}</Card.Header>
        <Card.Body>
          <img src={image} alt="imagen de medias" className="image" />
        </Card.Body>
        <Link to={`/item/${id}`}>
          <button className="btn btn-warning btn-block m-3 btn-1 ">
            Ver producto
          </button>
        </Link>
      </Card>
    </Col>
  );
}

export default Item;
