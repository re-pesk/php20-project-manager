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
        name: '-',
        description: '-',
        priority_id: '-',
        task_state_id: '-',
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
            data: taskData,
        };

        await axios(config)
            .then(() => {
                setErrors({
                    name: '',
                    description: '',
                    priority_id: '',
                    task_state_id: '',
                });
                setSuccesMessage('Task updated succesfully');
            })
            .catch((error) => {
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
            });
        setState(false);
    }, [state]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccesMessage('');
        setState(true);
    };

    const handleChange = (event) => setTaskData({
        ...taskData,
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
                        value={taskData.name}
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
                        value={taskData.description}
                        onChange={handleChange}
                        isValid={Boolean(validationErrors.description === '')}
                        isInvalid={Boolean(validationErrors.description !== '' && validationErrors.description !== '-')}
                    />
                    <Form.Control.Feedback type="invalid">{validationErrors.description}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="priority_id">
                    <Form.Label className="mt-3">Priority</Form.Label>
                    <Form.Control
                        name="priority_id"
                        onChange={handleChange}
                        as="select"
                        isValid={Boolean(validationErrors.priority_id === '')}
                        isInvalid={Boolean(validationErrors.priority_id !== '' && validationErrors.priority_id !== '-')}
                        custom
                        value={taskData.priority_id}
                    >
                        <option value="">--- SELECT PRIORITY ---</option>
                        <option value="1">low</option>
                        <option value="2">medium</option>
                        <option value="3">high</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{validationErrors.priority_id}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="task_state_id">
                    <Form.Label className="mt-3">State</Form.Label>
                    <Form.Control
                        name="task_state_id"
                        onChange={handleChange}
                        as="select"
                        isValid={Boolean(validationErrors.task_state_id === '')}
                        isInvalid={Boolean(validationErrors.task_state_id !== ''
                        && validationErrors.task_state_id !== '-')}
                        custom
                        value={taskData.task_state_id}
                    >
                        <option value="">--- SELECT STATE ---</option>
                        <option value="1">to do</option>
                        <option value="2">in progress</option>
                        <option value="3">done</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{validationErrors.task_state_id}</Form.Control.Feedback>
                </Form.Group>
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
