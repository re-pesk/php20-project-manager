import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useUserContext } from '../../context/UserContext';

const { axios } = window;

const IsLoggedIn = () => {
    const { userContext, setUserContext } = useUserContext({});
    const [state, setState] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const { token } = userContext;

    useEffect(async () => {
        if (!state) {
            return;
        }
        const config = {
            method: 'post',
            url: '/api/logged-in',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(response.data));
                setUserContext(response.data);
                setLoggedIn(true);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                setLoggedIn(false);
            });
        setState(false);
    }, [state]);

    return (
        <Container>
            <pre id="output" className="mx-auto">
                {`Is user logged in? ${isLoggedIn || !!userContext.token}`}
                <br />
                User data:
                <br />
                {JSON.stringify(userContext, null, 4)}
            </pre>
            <Button
                className="mt-3 mx-auto"
                variant="primary"
                type="submit"
                onClick={() => setState(true)}
            >
                Is user logged?
            </Button>
        </Container>
    );
};

export default IsLoggedIn;
