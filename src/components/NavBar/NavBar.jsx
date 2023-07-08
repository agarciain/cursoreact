import {CartWidget} from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Gabrielle</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="#home">SALE</Nav.Link>
                  <Nav.Link href="#link">New</Nav.Link>
                  <Nav.Link href="#link">Accesorios</Nav.Link>
                  <NavDropdown title="Prendas" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Pantalones</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                      Blusas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Vestidos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Faldas
                  </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>
      /*<header>
        <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between'
                }}>
                <span style={{fontSize: 18, fontWeight: 'bolder'}}>STARBOOK</span>
                <nav>
                    <a>Terror</a>
                    <a>Misterio</a>
                    <a>Romance</a>
                </nav>   
        </div>
      </header>*/
    );  
  }