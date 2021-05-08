import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateProjectForm = () => {
    // get project id from params
    const { project } = useParams();
    // current task data
    const [projectData, setProjectData] = useState({
        name: '',
        description: '',
        project_state_id: '',
    });

    // validation errors from API
    const [validationErrors, setErrors] = useState({
        name: '-',
        description: '-',
        project_state_id: '-',
    });

    const [state, setState] = useState(false);
    const [succesMessage, setSuccesMessage] = useState('');

    // get editable project data from API
    useEffect(async () => {
        const config = {
            method: 'get',
            url: `/api/projects/${project}`,
        };

        await axios(config)
            .then((response) => {
                setProjectData({
                    name: response.data.name,
                    description: response.data.description,
                    project_state_id: response.data.project_state_id,
                });
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    }, []);

    useEffect(async () => {
        if (!state) {
            return;
        }
        const config = {
            method: 'put',
            url: `/api/projects/${project}`,
            data: projectData,
        };

        await axios(config)
            .then(() => {
                setErrors({
                    name: '',
                    description: '',
                    project_state_id: '',
                });
                setSuccesMessage('Project updated succesfully');
            })
            .catch((error) => {
                setErrors({
                    name: error.response.data.errors.name
                        ? error.response.data.errors.name[0]
                        : '',
                    description: error.response.data.errors.description
                        ? error.response.data.errors.description[0]
                        : '',
                    project_state_id: error.response.data.errors.project_state_id
                        ? error.response.data.errors.project_state_id[0]
                        : '',
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
            <Form noValidate className="w-25 mx-auto mt-5" onSubmit={handleSubmit}>
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
                <Form.Group controlId="project_state_id">
                    <Form.Label className="mt-3">State</Form.Label>
                    <Form.Control
                        name="project_state_id"
                        onChange={handleChange}
                        as="select"
                        custom
                        value={projectData.project_state_id}
                        isValid={Boolean(validationErrors.project_state_id === '')}
                        isInvalid={Boolean(validationErrors.project_state_id !== ''
                        && validationErrors.project_state_id !== '-')}
                    >
                        <option value="">--- SELECT STATE ---</option>
                        <option value="1">In Progress</option>
                        <option value="2">Done</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{validationErrors.project_state_id}</Form.Control.Feedback>
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">
                    Update Project
                </Button>
                <div style={{ fontSize: 15 }} className="text-success my-3">
                    {succesMessage}
                </div>
            </Form>
        </>
    );
};

export default UpdateProjectForm;
