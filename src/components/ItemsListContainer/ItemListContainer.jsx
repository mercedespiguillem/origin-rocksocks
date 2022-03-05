import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";

function ItemListContainer(props) {
  // promise // estados // useEffect

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({});

  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    setLoading(true);
    getDocs(
      idCategory
        ? query(queryCollection, where("category", "==", idCategory))
        : queryCollection
    )
      .then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  console.log(idCategory);

  return (
    <>
      {loading ? (
        <h3 className="m-5 p-5 loading">Cargando...</h3>
      ) : (
        <div>
          <div>
            <h3 className="p-3 m-0 greeting">{props.greeting}</h3>
          </div>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
