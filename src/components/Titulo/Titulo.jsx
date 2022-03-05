import React from "react";
import { Alert } from "react-bootstrap";

function Titulo() {
  return (
    <Alert variant="warning" className="m-0">
      Envio GRATIS en compras superiores a $5000 - 15% OFF pagando por
      transferencia bancaria!!
    </Alert>
  );
}

export default Titulo;
