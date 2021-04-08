import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Nav className="mr-auto">
                <Navbar.Brand>Laravel 8 + React 17</Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link>Welcome</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dashboard">
                    <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/test">
                    <Nav.Link>Test</Nav.Link>
                </LinkContainer>
            </Nav>
            <Nav>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="register">Register</Nav.Link>
                <Nav.Link href="logout">Logout</Nav.Link>
            </Nav>
        </Navbar>

    );
}
