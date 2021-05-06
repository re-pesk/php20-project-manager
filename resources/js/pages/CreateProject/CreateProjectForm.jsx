import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function CreateProjectForm() {
    const [projectData, setProjectData] = useState({
        name: '',
        description: '',
    });
    // back mygtukas atsirandantis po projekto sukurimo
    const [backToProjectsButton, setBackToProjectsButton] = useState(false);
    const history = useHistory();

    const [validationErrors, setErrors] = useState({
        name: '',
        description: '',
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
                // nuresetinam forma po projekto sukurimo
                setProjectData({
                    name: '',
                    description: '',
                });
                setBackToProjectsButton(true);
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
                {/* <Form.Label className="mt-3">Project State</Form.Label>
                <Form.Control name="project_state_id" onChange={handleChange} as="select" custom>
                    <option value="1">In Progress</option>
                </Form.Control>
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.project_state_id}
                </div> */}
                <div className="d-flex justify-content-between">
                    <Button className="mt-3" variant="primary" type="submit">
                        Create Project
                    </Button>
                    {/* back mygtukas atsirandantis po projekto sukurimo */}
                    { backToProjectsButton === true
                        ? (
                            <Button className="mt-3" variant="primary" onClick={() => { history.goBack(); }}>
                                Back
                            </Button>
                        )
                        : <div />}
                </div>
                <div style={{ fontSize: 15 }} className="text-success my-3">
                    {succesMessage}
                </div>
            </Form>
        </>
    );
}
