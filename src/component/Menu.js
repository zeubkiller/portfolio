import React from 'react';

import './Menu.css';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Main from './Main.js'

function Menu() {
    return <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Sylvain Abelard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Presentation</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div>
            <Main id="home"></Main>
        </div>
    </div>;
}

export default Menu;