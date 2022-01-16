import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Titulo/> 
        <NavBar/>
        <ItemListContainer props='Hola!'/>
    </div>

  );
}

export default App;
