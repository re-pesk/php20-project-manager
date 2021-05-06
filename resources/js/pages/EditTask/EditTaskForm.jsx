import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function EditTaskForm() {
// get task id from params
    const { task } = useParams();
    // current task data
    const [taskData, setTaskData] = useState({
        name: '',
        description: '',
        priority_id: '',
        task_state_id: '',
    });

    // validation errors from API
    const [validationErrors, setErrors] = useState({
        name: '',
        description: '',
        priority_id: '',
        task_state_id: '',
    });

    const [state, setState] = useState(false);
    const [succesMessage, setSuccesMessage] = useState('');

    // get editable task data from API
    useEffect(async () => {
        const config = {
            method: 'get',
            url: `/api/tasks/${task}`,
        };

        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                setTaskData({
                    name: response.data.name,
                    description: response.data.description,
                    priority_id: response.data.priority_id,
                    task_state_id: response.data.task_state_id,
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
            method: 'PUT',
            url: `/api/tasks/${task}`,
            // headers: {
            //     Accept: 'application/json',
            // },
            data: taskData,
        };

        // console.log(taskData)

        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                // console.log(response.data)
                // setUserContext(response.data);
                setSuccesMessage('Task updated succesfully');
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
                    priority_id: error.response.data.errors.priority_id
                        ? error.response.data.errors.priority_id[0]
                        : '',
                    task_state_id: error.response.data.errors.task_state_id
                        ? error.response.data.errors.task_state_id[0]
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

    const handleChange = (event) => setTaskData({
        ...taskData,
        [event.target.name]: event.target.value,
    },
    console.log(taskData));

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
                <Form.Control
                    name="priority_id"
                    onChange={handleChange}
                    as="select"
                    custom
                    value={taskData.priority_id}
                >
                    <option value="">--- SELECT PRIORITY ---</option>
                    <option value="1">low</option>
                    <option value="2">medium</option>
                    <option value="3">high</option>
                </Form.Control>
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.priority_id}
                </div>
                <Form.Label className="mt-3">State</Form.Label>
                <Form.Control
                    name="task_state_id"
                    onChange={handleChange}
                    as="select"
                    custom
                    value={taskData.task_state_id}
                >
                    <option value="">--- SELECT STATE ---</option>
                    <option value="1">to do</option>
                    <option value="2">in progress</option>
                    <option value="3">done</option>
                </Form.Control>
                <div style={{ fontSize: 12 }} className="text-danger">
                    {validationErrors.task_state_id}
                </div>
                <Button className="mt-3" variant="primary" type="submit">
                    Update Task
                </Button>
                <div style={{ fontSize: 15 }} className="text-success my-3">
                    {succesMessage}
                </div>
            </Form>
        </>
    );
}
