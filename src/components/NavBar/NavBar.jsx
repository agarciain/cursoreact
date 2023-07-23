import {CartWidget} from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink, Link} from "react-router-dom";

export const NavBar = () => {
    return(<>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
              <NavLink to="/" >Gabrielle</NavLink>
                <Nav className="me-auto">
                  <NavLink to="/category/sale" >Sale</NavLink>
                  <NavLink to="/category/new" >New</NavLink>
                </Nav>
                <CartWidget />
          </Container>
        </Navbar>
        <Outlet />
        </> 
    );  
  }