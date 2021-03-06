import { Row } from "react-bootstrap";
import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <Row xs={1} md={3} className="g-4 m-2">
      {products.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.price}
          size={prod.size}
          image={prod.image}
          description={prod.description}
          category={prod.category}
        />
      ))}
    </Row>
  );
}

export default ItemList;
