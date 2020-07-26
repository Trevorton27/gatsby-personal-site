import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'

export class Menu extends Component {
  render() {

    const logoStyle = {
      size: '900%',
      color: '#fff'
    }

    const menuItemStyle = {
      marginRight: '7em'
    }

    const activeStyles = {
      color: 'goldenrod',
      backGround: 'green'
    }
    return (
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="/">Trevor Mearns  <span style={logoStyle}>&#9733;</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={menuItemStyle}>
              <Nav.Link as={Link} to='/journey/' activeStyle={activeStyles}>Journey</Nav.Link>
              <Nav.Link as={Link} to='portfolio'>Portfolio</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
              <Nav.Link href="https://github.com/Trevorton27">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
    )
  }
}

export default Menu
