import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

export default function CreateTaskForm() {
    // const { userContext, setUserContext } = useUserContext();
    // const { token } = userContext;
    const history = useHistory();
    const { project } = useParams();
    // console.log(project);

    const [taskData, setTaskData] = useState({
        name: '',
        description: '',
        priority_id: '',
        project_id: project,
    });

    const [validationErrors, setErrors] = useState({
        name: '',
        description: '',
        priority_id: '',
    });

    const [state, setState] = useState(false);
    const [succesMessage, setSuccesMessage] = useState('');

    useEffect(async () => {
        if (!state) {
            return;
        }
        const config = {
            method: 'post',
            url: '/api/tasks',
            // headers: {
            //     Accept: 'application/json',
            // },
            data: taskData,
        };

        // console.log(taskData)

        await axios(config)
            .then(() => {
                // eslint-disable-next-line no-console
                // console.log(response.data)
                // setUserContext(response.data);
                setSuccesMessage('Task created succesfully');

                // history.push(`/task/${project}`);
                setTaskData({
                    name: '',
                    description: '',
                    priority_id: '',
                    project_id: project,
                });
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
                    priority_id: error.response.data.errors.priority_id
                        ? error.response.data.errors.priority_id[0]
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
        document.querySelector('#priority_id').value = '';
    };

    const handleChange = (event) => setTaskData({
        ...taskData,
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
                    value={taskData.name}
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
                    value={taskData.description}
                    onChange={handleChange}
                />
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.description}
                </div>
                <Form.Label className="mt-3">Priority</Form.Label>
                <Form.Control id="priority_id" name="priority_id" onChange={handleChange} as="select" custom>
                    <option value="">--- SELECT PRIORITY ---</option>
                    <option value="1">low</option>
                    <option value="2">medium</option>
                    <option value="3">high</option>
                </Form.Control>
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.priority_id}
                </div>
                <Button className="mt-3" variant="primary" type="submit">
                    Create Task
                </Button>
                {succesMessage !== '' ? (
                    <div style={{ fontSize: 15 }} className="text-success my-3">
                        {succesMessage}
                    </div>
                ) : (
                    <div style={{ fontSize: 15 }} className="text-success my-3" />
                )}

            </Form>
        </>
    );
}
