import { useState } from 'react'
import type { FormEvent } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStore } from '@fortawesome/free-solid-svg-icons'

import CartWidget from './CartWidget'

import '../styles/NavBar.css'

function NavBar() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    const query = term.trim()
    navigate(query ? `/?search=${encodeURIComponent(query)}` : '/')
  }

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
            <form className="navbar-search" role="search" onSubmit={handleSearch}>
              <button type="submit" className="navbar-search__icon" aria-label="Buscar">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input
                type="search"
                placeholder="Buscar productos"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
              />
            </form>
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
