import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>

      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href="#">MariShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="nbasic-" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
                <Nav.Link href="/cart">
                  <i className='fas fa-shopping-cart'></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link href="/login">
                  <i className='fas fa-user cart'></i>
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </header>
  )
}

export default Header
