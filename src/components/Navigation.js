import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom"

export default function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
          <Link to="/" className="navbar-brand">BIS</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">Inicio</Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
