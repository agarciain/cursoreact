import {CartWidget} from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink, Link} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

export const NavBar = () => {
    return(<>
        <Navbar expand="lg" bg="light" data-bs-theme="light"  >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Gabrielle</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">  
                <LinkContainer to="/category/sale"><Nav.Link>Sale</Nav.Link></LinkContainer> 
                <LinkContainer to="/category/new"><Nav.Link >New</Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
            <CartWidget />
          </Container>
        </Navbar>
        <Outlet />
        </> 
    );  
  }