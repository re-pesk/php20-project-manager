import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Badge, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import TaskCard from './TaskCard';

const Tasks = ({ id }) => {
    const [tasksData, setTasksData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [idDelete, setIdDelete] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const history = useHistory();

    const getProjectTasks = async () => {
        const config = {
            method: 'GET',
            url: `/api/projectTasks/${id}`,
            headers: {
                Accept: 'Application/json',
            },
        };
        console.log(`/api/projectTasks/${id}`);
        await axios(config)
            .then((response) => {
                setTasksData(response.data.tasksData);
                setProjectData(response.data.projectData);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getProjectTasks();
    }, [idDelete]);

    const deleteTask = useCallback(
        async (deleteId) => {
            setDeleting;
            const config = {
                _method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            await axios
                .post(`/api/projectTasks/${deleteId}`, config)
                .then((response) => {
                    setDeleting(false);
                })
                .catch((error) => {
                    console.log(error);
                    setDeleting(false);
                });
        },
        [idDelete],
    );

    return (
        <Container>
            {projectData.map((projectInfo) => (
                <h2 className="text-capitalize" key={projectInfo.id}>
                    <Badge variant="secondary">{projectInfo.id}</Badge>
                    {' '}
                    {projectInfo.name}
                    <Button
                        className="m-2"
                        variant="primary"
                        type="submit"
                        value={projectInfo.id}
                        onClick={() => {
                            history.push(`/create-task/${projectInfo.id}`);
                        }}
                    >
                        Create Task
                    </Button>
                </h2>
            ))}
            <Accordion>
                {tasksData.map((task) => (
                    <TaskCard
                        key={task.id}
                        name={task.name}
                        description={task.description}
                        id={task.id}
                        priority={task.priority}
                        state={task.state}
                        created={task.created_at}
                        updated={task.updated_at}
                        deleteTask={deleteTask}
                        setIdDelete={setIdDelete}
                        idDelete={idDelete}
                        setDeleting={setDeleting}
                        deleting={deleting}
                    />
                ))}
            </Accordion>
        </Container>
    );
};
export default Tasks;
