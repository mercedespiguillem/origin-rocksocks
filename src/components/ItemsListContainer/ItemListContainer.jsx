import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../helpers/getProducts";


function ItemListContainer(props) {
  // promise // estados // useEffect


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({});

  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) =>
        setProducts(
          idCategory ? res.filter((prod) => prod.category === idCategory) : res
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  // console.log(idCategory);

  return (
    <>
      { loading ? 
        <h3 style={{ color: "gray" }} className="m-5 p-5">Cargando...</h3> : 
        <div>
          <div style={{ backgroundColor: "yellow" }}>
            <h3 className="p-3 m-0">{props.greeting}</h3>
          </div>
          <ItemList products={products} />
        </div>
      }
    </>
  );
}

export default ItemListContainer;
