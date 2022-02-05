import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Item({ id, name, size, image, category, price }) {
  return (
    <div className="row m-5 d-flex justify-content-center">
      <Card key={id} className="col-md-6 col-sm-8 m-3" bg="light">
        <Card.Header>{`${name} - ${size}`}</Card.Header>
        <Card.Body>
          <img src={image} alt="" className="" style={{borderRadius: 10 , width: 300 }} />
        </Card.Body>
        <Link to={`/item/${id}`}>
          <button className="btn btn-warning btn-block m-3">Ver producto</button>
        </Link>
      </Card>
    </div>
  );
}

export default Item;
