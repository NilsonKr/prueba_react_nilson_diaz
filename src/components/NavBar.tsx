import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStore } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'
import '../styles/NavBar.css'

function NavBar() {
  return (
    <Navbar expand="md" sticky="top" className="navbar-tienda">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FontAwesomeIcon icon={faStore} />
          Tienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="nav-menu me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <label className="navbar-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input type="search" placeholder="Search gadgets" />
            </label>
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
