import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <div>
      {products.map((prod) => (
        <Item
          key={prod.id}
          name={prod.name}
          price={prod.price}
          size={prod.size}
          image={prod.image}
        />
      ))}
    </div>
  );
}

export default ItemList;
