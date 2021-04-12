import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [state, setState] = useState(false);
    const [responseData, setResponseData] = useState({});

    useEffect(async () => {
        if (state) {
            const headers = {
                Accept: 'application/json',
            };
            const url = `${window.location.origin}/api/register`;
            axios.post(url, userData, { headers })
                .then((response) => setResponseData({ _error: false, ...response.data }))
                .catch((error) => setResponseData({ _error: true, ...error }));
        }
        setState(false);
    }, [state]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(userData));
        setState(true);
    };

    const handleChange = (event) => setUserData({
        ...userData,
        [event.target.name]: event.target.value,
    });

    return (
        <>
            <pre>{JSON.stringify(responseData, null, 4)}</pre>
            <Form
                className="w-25 mx-auto mt-5"
                onSubmit={handleSubmit}
            >
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    value={userData.name}
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
