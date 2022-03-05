import { getDoc, doc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemsListContainer/itemListContainer.css";

function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState({});

  const { idItem } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", idItem);
    setLoading(true);
    getDoc(itemRef)
      .then((resp) => setProducts({ id: resp.id, ...resp.data() }))
      .then(() => console.log(idItem))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idItem]);

  return (
    <div>
      {loading ? (
        <h3 className="m-5 p-5 loading">Cargando...</h3>
      ) : (
        <ItemDetail products={products} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
