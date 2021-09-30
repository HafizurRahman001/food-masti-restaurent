import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontSize: '20px',
        color: 'white',
        fontWeight: 'bold'
    }
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">FOOD MASTII</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink activeStyle={activeStyle} className="navStyle" to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className="navStyle" to="/restaurent">Foods</NavLink>
                    <NavLink activeStyle={activeStyle} className="navStyle" to="/about">About us</NavLink>
                </Nav>
            </Container>
        </Navbar>


        // <nav>
        //     <NavLink activeStyle={activeStyle} to='/home'>Home</NavLink>{' '}
        //     <NavLink activeStyle={activeStyle} to='/restaurent'>restaurent</NavLink>{' '}
        //     <NavLink activeStyle={activeStyle} to='/about'>About</NavLink>
        // </nav>
    );
};

export default Header;