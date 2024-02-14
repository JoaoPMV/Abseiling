export default Menu;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo2.png";

import "./Global.css";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
      <Container fluid className="">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className="logotipo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex justify-content-center me-4">
            <Nav.Link href="#deets" className="teste">
              Quem somos
            </Nav.Link>
            <Nav.Link href="#deets" className="teste">
              Próximos Eventos
            </Nav.Link>
            <Nav.Link href="#deets" className="teste">
              Equipe
            </Nav.Link>
            <Nav.Link href="#deets" className="teste">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
