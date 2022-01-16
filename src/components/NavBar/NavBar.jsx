import Cartwidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div style={{backgroundColor: 'pink'}}>
            <Cartwidget/>
            <nav>
                <li><a href='#'>Hola</a></li>
                <li><a href='#'>Soy</a></li>
                <li><a href='#'>El</a></li>
                <li><a href='#'>Menú</a></li>
            </nav>
        </div>
    )
}

export default NavBar
