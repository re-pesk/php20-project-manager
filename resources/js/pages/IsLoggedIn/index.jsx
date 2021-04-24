import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import { useUserContext } from '../../context/UserContext';
import { useSidebarContext } from '../../context/SidebarContext';

const { axios } = window;

const IsLoggedIn = () => {
    const { isOpen } = useSidebarContext;
    const { userContext } = useUserContext({});
    const [state, setState] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(async () => {
        const { token } = userContext;

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
                setLoggedIn(true);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                setLoggedIn(false);
            });
    }, [state]);

    return (
        <Container
            fluid
            className={classNames('content', { 'is-open': isOpen })}
        >
            <Header title="Is logged in?" />
            <pre id="output">
                {`Is user logged in? ${isLoggedIn}`}
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
