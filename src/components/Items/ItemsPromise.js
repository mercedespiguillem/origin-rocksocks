import { products } from "../helpers/ItemListArray";

export const getFetch = new Promise((res, rej) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      res(products);
    }, 2000);
  } else {
    rej("404 not found");
  }
});
