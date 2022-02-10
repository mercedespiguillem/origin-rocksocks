import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);

export function useCartContext() {
  return useContext(CartContext);
}

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  // funcion que agrega el item seleccionado al carrito

  // function isInTheCart(item) {
  //   if (cartList.find((x) => x === item)) {
  //     return true;
  //   }
  // }

  function addToCart(item) {
    cartList.find((x) => x === item)
      ? setCartList([(item.cantidad += 1)])
      : setCartList([...cartList, item]);
  }

  // function addToCart(item) {
  //   if (isInTheCart(item)) {
  //     const amount = [...cartList];
  //     amount.forEach((i) => {
  //       if (i === item) {
  //         i.cantidad += 1;
  //       }
  //     });
  //   }
  // }

  // function isInTheCart(produc) {
  //   const findInTheCart = cartList.find((x) => x === produc);
  //   return findInTheCart;
  // }

  // funcion que vacia el carrito

  function clearCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
