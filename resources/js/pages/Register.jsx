import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useUserContext } from '../context/UserContext';

const Register = () => {
    const { userContext, setUserContext } = useUserContext();
    const { token } = userContext;
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [state, setState] = useState(false);

    useEffect(async () => {
        if (!state) {
            return;
        }
        const config = {
            method: 'post',
            url: '/api/register',
            // headers: {
            //     Accept: 'application/json',
            // },
            data: userData,
        };

        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(response.data);
                setUserContext(response.data);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
        setState(false);
    }, [state]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setState(true);
    };

    const handleChange = (event) => setUserData({
        ...userData,
        [event.target.name]: event.target.value,
    });

    return (
        <>
            {
                token && <Redirect to="/dashboard" />
            }
            <Form
                className="w-25 mx-auto mt-5"
                onSubmit={handleSubmit}
            >
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={handleChange}
                />
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
                <Form.Label className="mt-3">Confirm password</Form.Label>
                <Form.Control
                    name="password_confirmation"
                    type="password"
                    placeholder="Repeat yout password"
                    value={userData.password_confirmation}
                    onChange={handleChange}
                />
                <Button
                    className="mt-3"
                    variant="primary"
                    type="submit"
                >
                    Register
                </Button>
            </Form>
        </>
    );
};

export default Register;
