import Cartwidget from "../CartWidget/CartWidget";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../LogoSocks/Logo";

function NavBar() {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <Navbar bg="dark" variant="dark">
        <Logo />
        <Container>
          <Navbar.Brand href="#home">RockSocks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Soquetes">Soquetes</Nav.Link>
            <Nav.Link href="#Medias">Medias</Nav.Link>
            <Nav.Link href="#Invisibles">Invisibles</Nav.Link>
          </Nav>
          <Nav className="">
            <Cartwidget />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
