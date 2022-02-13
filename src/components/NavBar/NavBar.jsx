import Cartwidget from "../CartWidget/CartWidget";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../LogoSocks/Logo";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function NavBar() {
  const { amount } = useCartContext();

  return (
    <div style={{ backgroundColor: "pink" }}>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Logo />
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link
                className="text-decoration-none"
                style={{ color: "white" }}
                to="/"
              >
                RockSocks
              </Link>
            </Nav>
            <Nav className="me-auto">
              <Link
                className="m-3 text-decoration-none"
                style={{ color: "white" }}
                to="category/dinosaurios"
              >
                Dinosaurios
              </Link>
              <Link
                className="m-3 text-decoration-none"
                style={{ color: "white" }}
                to="category/rayadas"
              >
                Rayadas
              </Link>
              <Link
                className="m-3 text-decoration-none"
                style={{ color: "white" }}
                to="category/invisibles"
              >
                Invisibles
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Link to="/cart">
              {amount() !== 0 && (
                <label
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    borderRadius: 15,
                  }}
                  className="p-2 text-decoration-none"
                >
                  {amount()}
                  
                </label>
              )}

              <Cartwidget />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
