import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, OverlayTrigger, Popover } from 'react-bootstrap';
import { useUserContext } from '../../context/UserContext';

const { axios } = window;
const minPassLength = 6;

const Register = () => {
    const history = useHistory();
    const { setUserContext } = useUserContext();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [validated, setValidated] = useState(false);
    const [errorData, setErrorData] = useState({});

    const getUserData = async () => {
        const config = {
            method: 'post',
            url: '/register',
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
                    history.push('/dashboard');
                })
                .catch((error) => {
                    setErrorData({ status: error.response.status, message: error.response.data.message });
                    // eslint-disable-next-line no-console
                    console.log(error);
                });
        });
    };

    const handleSubmit = async (event) => {
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
            <Form.Group controlId="username">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="username"
                    type="text"
                    value={userData.username}
                    minLength={1}
                    placeholder="Here will be your name"
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label className="mt-3">Email</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    value={userData.email}
                    placeholder="Type in your e-mail address"
                    onChange={handleChange}
                    required
                />
                <Form.Control.Feedback type="invalid">Please provide a valid e-mail address!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label className="mt-3">Password</Form.Label>
                <OverlayTrigger
                    placement="top"
                    overlay={(
                        <Popover id="popover-password">
                            <Popover.Content className="bg-primary text-white">
                                Password must be have minimum 8 characters length
                                and must contain at least one uppercase letter,
                                one lowercase letter, one number and one special character!
                            </Popover.Content>
                        </Popover>
                    )}
                >
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Type in your password"
                        value={userData.password}
                        minLength={minPassLength}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*-])[A-Za-z\d~!@#$%^&*-]+$"
                        onChange={handleChange}
                        required
                    />
                </OverlayTrigger>
                <Form.Control.Feedback type="invalid">
                    Password must be have minimum 8 characters length and contain at least one uppercase letter,
                    one lowercase letter, one number and one special character!
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="confirm_password">
                <Form.Label className="mt-3">Confirm password</Form.Label>
                <OverlayTrigger
                    placement="top"
                    overlay={(
                        <Popover id="popover-confirmation">
                            <Popover.Content className="bg-primary text-white">
                                Confirmation password must be the same as password above!
                            </Popover.Content>
                        </Popover>
                    )}
                >
                    <Form.Control
                        name="password_confirmation"
                        type="password"
                        placeholder="Confirm your password"
                        value={userData.password_confirmation}
                        minLength={minPassLength}
                        pattern={userData.password}
                        onChange={handleChange}
                        required
                    />
                </OverlayTrigger>
                <Form.Control.Feedback type="invalid">
                    Confirmation password must be the same as password above!
                </Form.Control.Feedback>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;
