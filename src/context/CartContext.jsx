import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);

export function useCartContext() {
  return useContext(CartContext);
}

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  // funcion que verifica si el item esta en el carrito

  function isInTheCart(item) {
    if (cartList.find((x) => x.articulo.id === item.articulo.id)) {
      return true;
    }
  }

  // funcion que agrega el item seleccionado al carrito

  function addToCart(item) {
    console.log(item);

    if (isInTheCart(item)) {
      const foundById = cartList.find(
        (x) => x.articulo.id === item.articulo.id
      );
      const filteredCartList = cartList.filter(
        (x) => x.articulo.id !== item.articulo.id
      );
      foundById.cantidad += item.cantidad;

      setCartList([...filteredCartList, foundById]);
    } else {
      setCartList([...cartList, item]);
    }
  }

  // funcion que suma el precio total de los productos del carrito

  const totalPrice = () => {
    return cartList.reduce(
      (acum, prod) => (acum = acum + prod.articulo.price * prod.cantidad),
      0
    );
  };

  // suma del precio de un mismo item

  function totalPriceItems(item) {
      return item.cantidad * item.articulo.price;
    }


  // funcion que calcula el total de items en el carrito

  function amount() {
    return cartList.reduce((acc, prod) => (acc += prod.cantidad), 0);
  }

  // funcion que elimina un item del carrito segun su id

  function removeItem(id) {
    setCartList(cartList.filter((prod) => prod.articulo.id !== id));
  }

  // funcion que vacia el carrito

  function clearCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        isInTheCart,
        addToCart,
        totalPrice,
        amount,
        totalPriceItems,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
