import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <>
        <Navbar className='NavbarTop sticky-top' variant='dark'>
          <Container className='container'>
          <Navbar.Brand className='link' href="#home">HomeStore</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className='link' href="#pricing"><CartWidget /></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    )
}
export default Header;