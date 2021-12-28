import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

function Header(){
    return(<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className='title' href="#home">GeoQuizz</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">ScoreBoard</Nav.Link>
      </Nav>
      <Nav>
      <NavDropdown title="User" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Sign in</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>)
}

export default Header;