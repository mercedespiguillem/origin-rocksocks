import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo/Titulo";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Titulo />
      <NavBar />
      <ItemListContainer greeting="Hola, bienvenidos a Rocksocks!" />
    </div>
  );
}

export default App;
