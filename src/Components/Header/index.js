import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { GlobalContext } from '../../Context';
import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import "./index.css";
import logo from "../../assets/img/logo.svg";
import cart from "../../assets/img/cart.svg";
import React from 'react';

function Header() {
    const globalContext = useContext(GlobalContext);
    const {eventList} = globalContext;
    const selectedEventList = eventList.filter(item => item.selected === true).length;
  return (
    <Navbar bg="myBg" collapseOnSelect  sticky="top" >
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img height={"50px"} width={"50px"} src={logo} alt="sports-logo"/>
            <span className='logo-text'>Sports Day</span>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/myEvents">
            My Events
            <img className='cart-logo' width={"20px"} height={"20px"} src={cart} alt="cart"></img>
            <span className='count'>{selectedEventList > 0 ? selectedEventList : ""}</span> 
          </Nav.Link>               
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;