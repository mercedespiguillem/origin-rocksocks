import { productos } from "./products";


const getProducts = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
        resolve(productos)}, 2000);
    })
} 





export default getProducts