import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  
  // const productId = 1;

  const { idItem } = useParams();

  useEffect(() => {
    if (idItem) {
      getProducts()
        .then((data) => setProducts(data.find((item) => item.id === idItem)))
        .catch((err) => console.log(err))
        .finally(() => console.log("Esto se ejecuta al final"));
    } else {
      getProducts()
        .then((data) => setProducts(data))
        .catch((err) => console.log(err))
        .finally(() => console.log("Esto se ejecuta al final"));
    }
  }, [idItem]);

  console.log(idItem);

  return (
    <div>
      <ItemDetail products={products} />
    </div>
  );
}

export default ItemDetailContainer;
