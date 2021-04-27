import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useUserContext } from '../../context/UserContext';

const { axios } = window;

const Register = () => {
    const history = useHistory();
    const { setUserContext } = useUserContext();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const getUserData = async () => {
        const config = {
            method: 'post',
            url: '/api/register',
            headers: {
                Accept: 'application/json',
            },
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
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await getUserData();
            history.push('/dashboard');
        } catch (e) {
            // eslint-disable-next-line no-alert
            alert(e.message);
        }
    };

    const handleChange = (event) => setUserData({
        ...userData,
        [event.target.name]: event.target.value,
    });

    return (
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
            <Button className="mt-3" variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;
