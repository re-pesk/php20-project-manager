import React from 'react';
// import { Redirect } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useUserContext } from '../context/UserContext';

export default function Navigation() {
    const { userContext, setUserContext } = useUserContext();
    const { token } = userContext;
    // const { loggedOut, setLoggedOut } = useState(false);

    const redirectToMain = () => {
        window.location.replace(`${process.env.MIX_BACK_URL}/`);
    };

    const logout = () => {
        if (!token) {
            return;
        }
        // const headers = {
        //     Accept: 'application/json',
        //     Authorization: `Bearer ${token}`,
        // };
        // const url = '/api/logout';
        // window.axios.post(url, {}, headers)
        //     .then((response) => {
        //     // eslint-disable-next-line no-console
        //         console.log(response.data);
        //         setUserContext('');
        //         // setLoggedOut(true);
        //         redirectToMain();
        //     })
        //     .catch((error) => {
        //     // eslint-disable-next-line no-console
        //         console.log(error);
        //     });

        const config = {
            method: 'post',
            url: '/api/logout',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        window.axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(response.data));
                setUserContext('');
                // setLoggedOut(true);
                redirectToMain();
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    };

    return (
        <>
            {/* { token ? '' : <Redirect to="/" /> } */}
            <Navbar bg="dark" variant="dark" sticky="top">
                <Nav className="mr-auto">
                    <Navbar.Brand>Laravel 8 + React 17</Navbar.Brand>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/dashboard">
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/test">
                        <Nav.Link>Test</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    {
                        token
                            ? <Nav.Link to="#" onClick={() => logout()}>Logout</Nav.Link>
                            : (
                                <>
                                    <LinkContainer to="/login">
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/register">
                                        <Nav.Link>Register</Nav.Link>
                                    </LinkContainer>
                                </>
                            )
                    }
                </Nav>
            </Navbar>
        </>
    );
}
