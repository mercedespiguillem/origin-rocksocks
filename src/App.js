import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo/Titulo";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
            <Titulo />
            <NavBar />
          <Routes>  
            <Route exact path='/' element={<ItemListContainer greeting="Hola, bienvenidos a Rocksocks!"/>}/>
            <Route exact path='/category/:idCategory' element={<ItemListContainer/>} />
            <Route exact path='/item/:idItem' element={<ItemDetailContainer/>} />
            <Route exact path='/cart' element={<Cart/>} />
          </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
