import React, { useState } from 'react';
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import TeamList from '../TeamList';

export default function Footer() {
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

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
                onSelect={showModal}
                expand
            >
                <Nav className="text-center mx-auto" navbar>
                    <Nav.Item>
                        <Nav.Link className="text-white" eventKey="x">&copy; 2021 PHProjectMan team.</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>PHProjectMan Team</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TeamList />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
