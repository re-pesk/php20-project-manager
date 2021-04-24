import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useUserContext } from '../../context/UserContext';

const { axios } = window;

const Logout = () => {
    const { previousPath } = '/';
    const { userContext, setUserContext } = useUserContext({});
    const { token } = userContext;
    const [path, setPath] = useState(previousPath);

    useEffect(async () => {
        if (!token) {
            return;
        }

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
                setPath('/login');
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    }, [isLoggedIn]);

    return (
        <Container
            fluid
            className={classNames('content', { 'is-open': isOpen })}
        >
            { token ? <Redirect to="/dashboard" /> : '' }
            <Header title="Login" />
            <Form
                className="w-25 mx-auto mt-5"
                onSubmit={handleSubmit}
            >
                <Form.Label className="mt-3">Email</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <Form.Label className="mt-3">Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Type in new password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <Button
                    className="mt-3"
                    variant="primary"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
            <Footer />
        </Container>
    );
};

export default Logout;
