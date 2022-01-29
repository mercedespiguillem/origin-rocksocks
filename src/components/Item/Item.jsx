import React from "react";
import { Card } from "react-bootstrap";


function Item({id, name, size, image, price}) {
  
  return (
    <div className="m-5 d-flex justify-content-between">
        <Card key={id} className="col-md-6 col-sm-8 mt-5" bg='light'>
            <Card.Header>{`${name} - ${size}`}</Card.Header>
            <Card.Body>
              <img src={image} alt="" className="w-50" />
            </Card.Body>
            <div>{price}</div>
            <div className="card-footer">
              <button className="btn btn-warning btn-block">
                Ver producto
              </button>
            </div>
        </Card>
    </div>
  );
}

export default Item;
