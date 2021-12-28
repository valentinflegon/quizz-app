import React, { Component } from 'react'
import styled from 'styled-components'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

import Logo from './Logo'
import Links from './Links'

// const Container = styled.div.attrs({
//     className: 'container',
// })``

// const Nav = styled.nav.attrs({
//     className: 'navbar navbar-expand-lg navbar-dark bg-dark',
// })`
//     margin-bottom: 20 px;
// `

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">GeoQuizz</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">ScoreBoard</Nav.Link>
              </Nav>
              <Nav>
              <NavDropdown title="User" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Sign in</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default NavBar