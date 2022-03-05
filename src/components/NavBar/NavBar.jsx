import Cartwidget from "../CartWidget/CartWidget";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../LogoSocks/Logo";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Badge } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  const { amount } = useCartContext();

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Link to="/">
          <Logo />
        </Link>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link className="text-decoration-none h3 pr-5 logo" to="/">
                RockSocks
              </Link>
            </Nav>
            <Nav className="me-auto">
              <Link
                className="m-3 text-decoration-none p-3 logo"
                to="category/estampadas"
              >
                Estampadas
              </Link>
              <Link
                className="m-3 text-decoration-none p-3 logo"
                to="category/rayadas"
              >
                Rayadas
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Link to="/cart">
              {amount() !== 0 && (
                <Badge bg="yellow" className="badge">
                  {amount()}
                </Badge>
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
