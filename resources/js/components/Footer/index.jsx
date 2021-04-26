import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container
            fluid
            bg="info"
            id="footer"
            className="px-0 mt-auto"
        >
            <Navbar
                id="navbar"
                bg="info"
                sticky="bottom"
                className="navbar text-light shadow-sm p-3 m-0 mt-5"
                expand
            >
                <footer className="footer mx-auto">
                    <span>
                        &copy; 2021 PHProjectMan team.
                    </span>
                </footer>
            </Navbar>
        </Container>
    );
}
