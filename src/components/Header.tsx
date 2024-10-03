import React from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

const Header: React.FC = () => {
    return (
        <Navbar className="header" expand="lg" variant="light" bg="light">
            <Navbar.Brand className="mx-auto animated fadeInDown">saree store</Navbar.Brand>
            {/* <Form className="d-flex search-box">
                <FormControl
                    type="search"
                    placeholder="Search for sarees..."
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form> */}
        </Navbar>
    );
};

export default Header;