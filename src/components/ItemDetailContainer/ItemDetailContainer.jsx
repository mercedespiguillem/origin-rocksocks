import { getDoc, doc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState({});

  const { idItem } = useParams();

  const db = getFirestore();
  const itemRef = doc(db, "items", idItem);

  useEffect(() => {
    setLoading(true);
    getDoc(itemRef)
      .then((resp) => setProducts({ id: resp.id, ...resp.data() }))
      .then(() => console.log(idItem))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // asi estaba antes

    // getProducts()
    //   .then((data) => setProducts(data.find((item) => item.id === idItem)))
    //   .then(() => console.log(idItem))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));
  }, [idItem]);

  return (
    <div>
      {loading ? (
        <h3 style={{ color: "gray" }} className="m-5 p-5">
          Cargando...
        </h3>
      ) : (
        <ItemDetail products={products} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
