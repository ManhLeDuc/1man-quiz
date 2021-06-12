import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { authenticationService } from '../../services/authentication.service';

export default function CustomNavbar() {
  if (authenticationService.currentUserValue) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">HomePage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          { }
          <Nav>
            <Nav.Link>Picture</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => {
              authenticationService.logout();
              window.location.href = "/"
            }}>
              Log out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">HomePage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          { }
          <Nav>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/signup'>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}
