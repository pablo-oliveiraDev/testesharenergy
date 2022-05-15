import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './header.css';
import { AuthContext } from '../../Contexts/Auth';
import {AiOutlineUser} from 'react-icons/ai';



export default function Header() {
  const { signed,signOut}=useContext(AuthContext);
  return (
   
      <Navbar bg="dark"  variant="dark" expand="lg" >
        <Container className='navBody'>
          <Navbar.Brand ><Link to='/' className='titulo'>Titulo </Link></Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navItem">
              <Nav.Link className='navItems' href='/' >Home</Nav.Link> 
              <Nav.Link  className='navItems' href="/login">login</Nav.Link>
              <Nav.Link   className='navItems' href="/cadastrar">Cadastrar</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
               
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        <NavbarBrand> < AiOutlineUser size={35} color='#fff'/> {signed?<span className='on'>ON</span>:<span className='off'>OFF</span>}</NavbarBrand>
        <NavbarBrand>{signed?<button onClick={signOut}>logout</button>:''}</NavbarBrand>
        </Container>
      </Navbar>
    
  )
}
