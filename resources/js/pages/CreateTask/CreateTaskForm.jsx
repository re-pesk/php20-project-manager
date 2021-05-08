import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

export default function CreateTaskForm() {
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
        name: '-',
        description: '-',
        priority_id: '-',
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
            data: taskData,
        };

        await axios(config)
            .then(() => {
                setSuccesMessage('Task created succesfully');

                setTaskData({
                    name: '',
                    description: '',
                    priority_id: '',
                    project_id: project,
                });
                document.querySelector('#priority_id').value = '';

                setErrors({
                    name: '-',
                    description: '-',
                    priority_id: '-',
                });
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
    const goBackToTasks = useCallback(() => {
        history.push(`/task/${project}`);
    });

    return (
        <>
            <Form
                noValidate
                className="w-25 mx-auto mt-5 mb-5"
                onSubmit={handleSubmit}
            >
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
                    >
                        <option value="">--- SELECT PRIORITY ---</option>
                        <option value="1">low</option>
                        <option value="2">medium</option>
                        <option value="3">high</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{validationErrors.priority_id}</Form.Control.Feedback>
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">
                    Create Task
                </Button>
                {succesMessage !== '' ? (
                    <div>
                        <div style={{ fontSize: 15 }} className="text-success my-3">
                            {succesMessage}
                        </div>
                        <Button className="mt-3" variant="primary" onClick={goBackToTasks}>
                            Go Back To Tasks
                        </Button>
                    </div>
                ) : (
                    <div style={{ fontSize: 15 }} className="text-success my-3" />
                )}
            </Form>
        </>
    );
}
