import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { productos } from "../../helpers/products";

function ItemListContainer(props) {
  // promise // estados // useEffect

  const onAdd = (amount) => {
    console.log(amount);
  };

  const [products, setProducts] = useState([]);

  const getFetch = new Promise((res, rej) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        res(productos);
      }, 2000);
    } else {
      rej("404 not found");
    }
  });

  useEffect(() => {
    getFetch
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("al final"));
  }, []);

  console.log(products);

  return (
    <div>
      <div style={{ backgroundColor: "yellow" }}>
        <h3 className="p-3 m-0">{props.greeting}</h3>
      </div>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
