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
        name: '',
        description: '',
        project_state_id: '',
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
                // eslint-disable-next-line no-console
                setProjectData({
                    name: response.data.name,
                    description: response.data.description,
                    project_state_id: response.data.project_state_id,
                });
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                // console.log(error);
            });
    }, []);

    useEffect(async () => {
        if (!state) {
            return;
        }
        const config = {
            method: 'put',
            url: `/api/projects/${project}`,
            // headers: {
            //     Accept: 'application/json',
            // },
            data: projectData,
        };

        // console.log(taskData)

        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                // console.log(response.data)
                // setUserContext(response.data);
                setSuccesMessage('Project updated succesfully');
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                // console.log(error.response.data.errors);
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
    },);

    return (
        <>
            {/* {
                token && <Redirect to="/dashboard" />
            } */}
            <Form className="w-25 mx-auto mt-5" onSubmit={handleSubmit}>
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
                <Form.Label className="mt-3">State</Form.Label>
                <Form.Control
                    name="project_state_id"
                    onChange={handleChange}
                    as="select"
                    custom
                    value={projectData.project_state_id}
                >
                    <option value="">--- SELECT STATE ---</option>
                    <option value="1">In Progress</option>
                    <option value="2">Done</option>
                </Form.Control>
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.project_state_id}
                </div>
                <Button className="mt-3" variant="primary" type="submit">
                    Update Project
                </Button>
                <div style={{ fontSize: 15 }} className="text-success my-3">
                    {succesMessage}
                </div>
            </Form>
        </>
    )
}

export default UpdateProjectForm
