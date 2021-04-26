import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useUserContext } from '../../context/UserContext';

const { axios } = window;

const Logout = () => {
    const { userContext, setUserContext } = useUserContext({});
    const { token } = userContext;
    const history = useHistory();

    const clearData = async () => {
        const config = {
            method: 'post',
            url: '/api/logout',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(response.data));
                setUserContext({});
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    };

    const handleClick = async (event) => {
        event.preventDefault();
        try {
            await clearData();
            history.push('/login');
        } catch (e) {
            // eslint-disable-next-line no-alert
            alert(e.message);
        }
    };

    return (
        <Container className="text-center">
            <h1>Do you really want to logout?</h1>
            <Nav className="row justify-content-center" navbar>
                <Nav.Item>
                    <LinkContainer to="" onClick={() => history.goBack()}>
                        <Button>
                            Cancel
                        </Button>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="" onClick={handleClick}>
                        <Button>
                            OK
                        </Button>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Logout;
