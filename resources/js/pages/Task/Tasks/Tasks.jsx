import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Badge, Container } from 'react-bootstrap';
import TaskCard from './TaskCard';

const Tasks = ({ id }) => {
    const [tasksData, setTasksData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [idDelete, setIdDelete] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const getProjectTasks = async () => {
        const config = {
            method: 'GET',
            url: `/api/projectTasks/${id}`,
            headers: {
                Accept: 'Application/json',
            },
        };
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
            const config = {
                _method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            await axios
                .post(`/api/projectTasks/${deleteId}`, config)
                .catch((error) => {
                    console.log(error);
                });
            setDeleting(false);
        },
    );

    return (
        <Container>
            {projectData.map((projectInfo) => (
                <h2 className="text-capitalize" key={projectInfo.id}>
                    <Badge variant="secondary">{projectInfo.id}</Badge>
                    {' '}
                    {projectInfo.name}
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
