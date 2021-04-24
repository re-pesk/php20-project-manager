import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import { useUserContext } from '../../context/UserContext';
import { useSidebarContext } from '../../context/SidebarContext';

const { axios } = window;

const IsLoggedIn = () => {
    const { isOpen } = useSidebarContext;
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
        <Container
            fluid
            className={classNames('content', { 'is-open': isOpen })}
        >
            <Header title="Is logged in?" />
            <pre id="output">
                {`Is user logged in? ${isLoggedIn || !!userContext.token}`}
                <br />
                User data:
                <br />
                {JSON.stringify(userContext, null, 4)}
            </pre>
            <Button
                className="mt-3"
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
