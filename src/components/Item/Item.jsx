import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Item({ id, name, size, image, category, price }) {
  return (
    <div className="m-5 d-flex justify-content-between">
      <Card key={id} className="col-md-6 col-sm-8 mt-5" bg="light">
        <Card.Header>{`${name} - ${size}`}</Card.Header>
        <Card.Body>
          <img src={image} alt="" className="w-50" />
        </Card.Body>
        {/* <div className="card-footer">
          <ItemDetailContainer />
        </div> */}
        <Link to={`/item/${id}`}>
          <button className="btn btn-warning btn-block">Ver producto</button>
        </Link>
      </Card>
    </div>
  );
}

export default Item;
