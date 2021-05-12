import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Log from '../../components/Log';

export default function CreateProjectForm() {
    const history = useHistory();
    const [projectData, setProjectData] = useState({
        name: '',
        description: '',
    });
    // back mygtukas atsirandantis po projekto sukurimo
    // const [backToProjectsButton, setBackToProjectsButton] = useState(false);

    const [validationErrors, setErrors] = useState({
        name: '-',
        description: '-',
    });

    const [state, setState] = useState(false);
    const [succesMessage, setSuccesMessage] = useState('');
    const [projectId, setProjectId] = useState('');

    const getLastProject = async () => {
        const config = {
            method: 'GET',
            url: '/api/projectTasks',
        };
        await axios(config)
            .then((response) => {
                setProjectId(response.data.id);
            }).catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    };

    useEffect(async () => {
        if (!state) {
            return;
        }
        const config = {
            method: 'post',
            url: '/api/projects',
            data: projectData,
        };

        await axios(config)
            .then(() => {
                setErrors({
                    name: '-',
                    description: '-',
                });
                setProjectData({
                    name: '',
                    description: '',
                });
                setSuccesMessage('Project created succesfully');
                Log('add', 'Project created succesfully');
                getLastProject();
            })
            .catch((error) => {
                setErrors({
                    name: error.response.data.errors.name
                        ? error.response.data.errors.name[0]
                        : '',
                    description: error.response.data.errors.description
                        ? error.response.data.errors.description[0]
                        : '',
                });
                Log('add', {
                    name: error.response.data.errors.name
                        ? error.response.data.errors.name[0]
                        : 'validated',
                    description: error.response.data.errors.description
                        ? error.response.data.errors.description[0]
                        : 'validated',
                });
            });
        setState(false);
    }, [state]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccesMessage('');
        setState(true);
    };

    const handleChange = (event) => setProjectData({
        ...projectData,
        [event.target.name]: event.target.value,
    });

    return (
        <>
            <Form
                noValidate
                style={{ width: '370px' }}
                className="mx-auto mt-5 mb-5"
                onSubmit={handleSubmit}
            >
                {succesMessage !== '' ? (
                    <div className="mt-4">
                        <Alert variant="success">
                            <Alert.Heading>{succesMessage}</Alert.Heading>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <Button
                                    variant="outline-success"
                                    onClick={() => {
                                        Log('add', 'User navigated to "/project/tasks"');
                                        Log('send');
                                        // history.push(`/task/${project.id}`);
                                        history.push({ pathname: '/project/tasks',
                                            state: {
                                                project: projectId,
                                                task: null,
                                            } });
                                    }}
                                >
                                    Go To Project Task List
                                </Button>
                                <Button
                                    className="mx-2"
                                    variant="outline-success"
                                    onClick={() => {
                                        Log('add', 'User navigated to "/project/board"');
                                        Log('send');
                                        history.push({ pathname: '/project/board',
                                            state: {
                                                project: projectId,
                                                task: null,
                                            } });
                                    }}
                                >
                                    Show Project Board
                                </Button>
                                <Button
                                    variant="outline-success"
                                    onClick={() => {
                                        Log('add', 'User navigated to "/projects"');
                                        Log('send');
                                        history.push('/projects');
                                    }}
                                >
                                    Go To Project List
                                </Button>
                            </div>
                        </Alert>
                    </div>

                ) : null}
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        value={projectData.name}
                        onChange={handleChange}
                        isValid={Boolean(validationErrors.name === '')}
                        isInvalid={Boolean(validationErrors.name !== '' && validationErrors.name !== '-')}
                    />
                    <Form.Control.Feedback type="invalid">{validationErrors.name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label className="mt-3">Description</Form.Label>
                    <Form.Control
                        name="description"
                        as="textarea"
                        rows={5}
                        style={{ resize: 'none' }}
                        value={projectData.description}
                        onChange={handleChange}
                        isValid={Boolean(validationErrors.description === '')}
                        isInvalid={Boolean(validationErrors.description !== '' && validationErrors.description !== '-')}
                    />
                    <Form.Control.Feedback type="invalid">{validationErrors.description}</Form.Control.Feedback>
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">
                    Create Project
                </Button>
            </Form>
        </>
    );
}
