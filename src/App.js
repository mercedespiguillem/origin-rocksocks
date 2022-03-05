import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import Titulo from "./components/Titulo/Titulo";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Titulo />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ItemListContainer greeting="Hola, bienvenidos a Rocksocks - Tu media naranja ;)" />
              }
            />
            <Route
              exact
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/item/:idItem"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
