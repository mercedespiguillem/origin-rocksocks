import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./itemCount.css";

function ItemCount({ initial, stock, onAdd }) {
  // Inicializo el contador en 1

  const [count, setCount] = useState(initial);

  // funcion que si count es menor que stock, aumenta count en una unidad

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  //  funcion que si count es mayor a initial, resta una unidad de count
  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  // Agregar el numero seleccionado al carrito
  const addToChart = () => {
    onAdd(count);
  };

  return (
    <div>
      <Card className="m-5">
        <Card.Body className="md-6">
          <Button
            variant="warning"
            onClick={increase}
            className="w-25 p-2 btn-1"
          >
            Agregar
          </Button>
          <br />
          {count}
          <br />
          <Button variant="secondary" onClick={decrease} className="w-25 p-2">
            Quitar
          </Button>
          <br />
          <br />
          <div>
            <Button variant="dark" onClick={addToChart} className="p-2 w-50">
              Agregar al carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCount;
