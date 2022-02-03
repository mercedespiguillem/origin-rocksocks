import React from "react";
// import { productos } from "../../helpers/products";




function ItemDetail({products}) {


    return (
    <div>
        <h3>{products.description}</h3>
        <h6>Stock: {products.stock}</h6>
        <h6>Precio: {products.price}</h6>
    </div>
    );
}

export default ItemDetail;
