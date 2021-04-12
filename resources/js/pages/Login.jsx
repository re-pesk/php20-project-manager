import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const [state, setState] = useState(false);
    const [responseData, setResponseData] = useState({});

    useEffect(async () => {
        if (state) {
            const csrfUrl = `${process.env.MIX_BACK_URL}/sanctum/csrf-cookie`;
            axios.get(csrfUrl)
                .then((response) => setResponseData({ _error: false, response }))
                .catch((error) => setResponseData({ _error: true, ...error }));
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            const headers = {
                // 'Content-Type': 'application/json',
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRF-TOKEN': csrfToken,
            };
            const url = `${process.env.MIX_BACK_URL}/api/login`;
            axios.post(url, userData, headers)
                .then((response) => setResponseData({ _error: false, ...response.data }))
                .catch((error) => setResponseData({ _error: true, ...error }));
        }
        setState(false);
    }, [state]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        // alert(JSON.stringify(userData));
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
        </>
    );
};

export default Login;
