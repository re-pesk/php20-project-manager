import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useUserContext } from '../context/UserContext';

export default function CreateTaskForm() {

    // const { userContext, setUserContext } = useUserContext();
    // const { token } = userContext;

    let { project } = useParams();
    // console.log(project);

    const [taskData, setTaskData] = useState({
        name: '',
        description: '',
        priority_id: '',
        project_id: project,
    });

    const [state, setState] = useState(false);

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

        console.log(taskData);

        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(response.data);
                // setUserContext(response.data);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);

            });
        setState(false);
    }, [state]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        setState(true);
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
            <Form
                className="w-25 mx-auto mt-5"
                onSubmit={handleSubmit}
            >
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    value={taskData.name}
                    onChange={handleChange}
                />
                <Form.Label className="mt-3">Description</Form.Label>
                <Form.Control
                    name="description"
                    type="text"
                    value={taskData.description}
                    onChange={handleChange}
                />
                <Form.Label className="mt-3">Priority</Form.Label>
                <Form.Control
                    name="priority_id"
                    type="text"
                    value={taskData.priority_id}
                    onChange={handleChange}
                />
                {/* <Form.Label className="mt-3">State</Form.Label>
                <Form.Control
                    name="task_state_id"
                    type="text"
                    value={taskData.task_state_id}
                    onChange={handleChange}
                /> */}
                {/* <Form.Label className="mt-3">Project</Form.Label> */}
                {/* <Form.Control
                    name="project_id"
                    type="hidden"
                    value={project}
                    onChange={handleChange}
                /> */}
                <Button
                    className="mt-3"
                    variant="primary"
                    type="submit"
                >
                    Create Task
                </Button>
            </Form>
        </>
    );
}