import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
const NavBar: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">\
                <Nav className="m-auto">
                    <Nav.Link href="#Whatsnew">Whatsnews</Nav.Link>
                    <Nav.Link href="Suits">Suits</Nav.Link>
                    <Nav.Link href="Kurti">Kurti</Nav.Link>
                    <Nav.Link href="Lehnga">Lehenga</Nav.Link>
                    <Nav.Link href="Festive">Festive Edit</Nav.Link>
                    <Nav.Link href="Exclusive">Exclusive</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};


export default NavBar;