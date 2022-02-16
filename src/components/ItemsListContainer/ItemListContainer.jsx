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
// import getProducts from "../../helpers/getProducts";

function ItemListContainer(props) {
  // promise // estados // useEffect

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({});

  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    // const queryFilter = query(
    //   collection(db, "items"),
    //   where("category", "==", "idCategory")
    // );

    setLoading(true);

    // TRAE TODA LA COLECCION DE PRODUCTOS

    getDocs(queryCollection)
      .then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    //  Aca queria filtrar por categorias

    // getDocs(queryFilter)
    //   .then((resp) =>
    //     setProducts(
    //       idCategory
    //         ? setProducts(resp.docs.map((prod) => prod.category === idCategory))
    //         : setProducts(
    //             resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
    //           )
    //     )
    //   )
    //   .then((resp) => console.log(resp))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));

    //  Asi estaba antes

    // getProducts()
    //   .then((res) =>
    //     setProducts(
    //       idCategory ? res.filter((prod) => prod.category === idCategory) : res
    //     )
    //   )
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));
  }, [idCategory]);

  // console.log(idCategory);

  return (
    <>
      {loading ? (
        <h3 style={{ color: "gray" }} className="m-5 p-5">
          Cargando...
        </h3>
      ) : (
        <div>
          <div style={{ backgroundColor: "yellow" }}>
            <h3 className="p-3 m-0">{props.greeting}</h3>
          </div>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
