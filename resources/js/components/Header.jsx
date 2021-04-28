import React from 'react';
// import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft, faArrowRight, faSignInAlt, faSignOutAlt, faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useUserContext } from '../context/UserContext';
import { useSidebarContext } from '../context/SidebarContext';

export default function Header(props) {
    const { title } = props;
    const { isOpen, toggle } = useSidebarContext();
    const { userContext } = useUserContext({});

    return (
        <Container fluid>
            <Navbar
                bg="light"
                // variant="info"
                // sticky="top"
                className="navbar shadow-sm p-3 mb-5 text-info"
                expand
            >
                <Nav className="col-2" navbar>
                    <Button
                        variant="outline-info"
                        onClick={toggle}
                    >
                        <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
                    </Button>
                </Nav>
                <Nav className="text-center mx-auto" navbar><h1>{title}</h1></Nav>
                {
                    userContext.user
                        ? (
                            <Nav className="col-2 justify-content-end" navbar>
                                <Nav.Link><p>{userContext.user.username}</p></Nav.Link>
                                <LinkContainer to="/logout">
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-info" />
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        )
                        : (
                            <Nav className="col-2 justify-content-end" navbar>
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faSignInAlt} className="mr-2 text-info" />
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faUserPlus} className="mr-2 text-info" />
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        )
                }
            </Navbar>
        </Container>
    );
}
