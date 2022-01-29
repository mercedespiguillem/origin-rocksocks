import { useEffect, useState } from "react";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const productId = 1;

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data.find((item) => item.id === productId)))
      .catch((err) => console.log(err))
      .finally(() => console.log("Esto se ejecuta al final"));
  }, []);

  return (
    <div>
      <ItemDetail products={products} />
    </div>
  );
}

export default ItemDetailContainer;
