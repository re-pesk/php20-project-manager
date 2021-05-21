import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useUserContext } from '../../context/UserContext';
import Log from '../../components/Log';

const { axios } = window;

const Login = () => {
    const history = useHistory();
    const { setUserContext } = useUserContext({});
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const [validated, setValidated] = useState(false);
    const [errorData, setErrorData] = useState({});

    const getUserData = async () => {
        setErrorData({});
        const config = {
            method: 'post',
            url: '/login',
            headers: {
                Accept: 'application/json',
            },
            data: userData,
        };
        await axios.default.get('/sanctum/csrf-cookie').then(async () => {
            await axios(config)
                .then((response) => {
                // eslint-disable-next-line no-console
                    console.log(response.data);
                    setUserContext(response.data);
                    Log('add', `User ${response.data.user.email} logged in`);
                    Log('send');
                    history.push('/dashboard');
                })
                .catch((error) => {
                    setErrorData({ status: error.response.status, message: error.response.data.message });
                    if (error.response.status === 401) {
                        setUserContext({});
                    }
                    // eslint-disable-next-line no-console
                    console.log(error.response);
                });
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
        getUserData();
    };

    const handleChange = (event) => setUserData({
        ...userData,
        [event.target.name]: event.target.value,
    });

    return (
        <Form
            noValidate
            validated={validated}
            style={{ width: '370px' }}
            className="mx-auto mt-5"
            onSubmit={handleSubmit}
        >
            <Form.Text type="invalid" className="text-danger">{errorData.message}</Form.Text>
            <Form.Group controlId="email">
                <Form.Label className="mt-3">Email</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    value={userData.email}
                    placeholder="Type in e-mail address"
                    onChange={handleChange}
                    required
                />
                <Form.Control.Feedback type="invalid">Please provide a valid e-mail address!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label className="mt-3">Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Type in the password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
                <Form.Control.Feedback type="invalid">Please provide a valid password!</Form.Control.Feedback>
            </Form.Group>
            <Button
                className="mt-3"
                variant="primary"
                type="submit"
            >
                Login
            </Button>
        </Form>
    );
};

export default Login;
