import React from 'react';
import { Container, Nav } from 'react-bootstrap';

export default function Error() {
    const goBack = (event) => {
        event.preventDefault();
        window.history.back();
    };
    return (
        <Container>
            <h3>Error</h3>
            <p>
                Page does not exist!
            </p>
            <Nav className="mr-auto">
                <Nav.Item>
                    {/* eslint-disable-next-line no-script-url */}
                    <Nav.Link href="#" onClick={goBack}>Go back</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}
