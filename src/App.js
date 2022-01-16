import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import NavBar from './components/NavBar/NavBar';
import Cartwidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
        <Titulo/> 
        {/* <Cartwidget/> */}
        <NavBar/>
    </div>

  );
}

export default App;
