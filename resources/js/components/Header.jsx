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

    // const redirectToLogin = () => {
    //     window.location.replace('/login');
    // };

    // const logout = (event) => {
    //     event.preventDefault();

    //     if (!token) {
    //         return;
    //     }

    //     const config = {
    //         method: 'post',
    //         url: '/api/logout',
    //         headers: {
    //             Accept: 'application/json',
    //             Authorization: `Bearer ${token}`,
    //         },
    //     };

    //     window.axios(config)
    //         .then((response) => {
    //             // eslint-disable-next-line no-console
    //             console.log(JSON.stringify(response.data));
    //             setUserContext({});
    //             redirectToLogin();
    //         })
    //         .catch((error) => {
    //             // eslint-disable-next-line no-console
    //             console.log(error);
    //         });
    // };

    return (
        <Container fluid>
            {/* { token ? '' : <Redirect to="/" /> } */}
            <Navbar
                bg="light"
                // variant="white"
                // sticky="top"
                className="navbar shadow-sm p-3 mb-5 bg-white rounded"
                expand
            >
                <Nav className="col-1" navbar>
                    <Button
                        variant="outline-info"
                        onClick={toggle}
                    >
                        <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
                    </Button>
                </Nav>
                <Nav className="text-center mx-auto" navbar><h1>{title}</h1></Nav>
                {
                    userContext.token
                        ? (
                            <Nav className="col-1 justify-content-end" navbar>
                                <LinkContainer to="/logout">
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        )
                        : (
                            <Nav className="col-1 justify-content-end" navbar>
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        )
                }
            </Navbar>
        </Container>
    );
}
