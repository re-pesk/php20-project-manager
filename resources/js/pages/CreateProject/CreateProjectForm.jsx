import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function CreateProjectForm() {
    const [projectData, setProjectData] = useState({
        name: '',
        description: '',
        project_state_id: '',
    });

    const [validationErrors, setErrors] = useState({
        name: '',
        description: '',
        project_state_id: '',
    });

    const [state, setState] = useState(false);
    const [succesMessage, setSuccesMessage] = useState('');

    useEffect(async () => {
        if (!state) {
            return;
        }
        const config = {
            method: 'post',
            url: '/api/projects',
            // headers: {
            //     Accept: 'application/json',
            // },
            data: projectData,
        };

        // console.log(taskData)

        await axios(config)
            .then(() => {
                // eslint-disable-next-line no-console
                // console.log(response.data)
                // setUserContext(response.data);
                setSuccesMessage('Project created succesfully');
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                // console.log(error.response.data.errors);
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
                // console.log(true);
            });
        setState(false);
    }, [state]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccesMessage('');
        setErrors({});
        // console.log(event);
        setState(true);
    };

    const handleChange = (event) => setProjectData({
        ...projectData,
        [event.target.name]: event.target.value,
    });

    return (
        <>
            {/* {
                token && <Redirect to="/dashboard" />
            } */}
            <Form className="w-25 mx-auto mt-5 mb-5" onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    value={projectData.name}
                    onChange={handleChange}
                />
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.name}
                </div>
                <Form.Label className="mt-3">Description</Form.Label>
                <Form.Control
                    name="description"
                    as="textarea"
                    rows={5}
                    style={{ resize: 'none' }}
                    value={projectData.description}
                    onChange={handleChange}
                />
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.description}
                </div>
                <Form.Label className="mt-3">Priority</Form.Label>
                <Form.Control name="project_state_id" onChange={handleChange} as="select" custom>
                    <option>--- SELECT PROJECT STATE ---</option>
                    <option value="1">in progress</option>
                    <option value="2">done</option>
                </Form.Control>
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.project_state_id}
                </div>
                <Button className="mt-3" variant="primary" type="submit">
                    Create Project
                </Button>
                <div style={{ fontSize: 15 }} className="text-success my-3">
                    {succesMessage}
                </div>
            </Form>
        </>
    );
}
