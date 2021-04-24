import React, { useState, useEffect, useCallback } from "react";
import { Container, Accordion, Badge } from "react-bootstrap";
import axios from "axios";
import TaskCard from "./TaskCard";

const Tasks = ({ id }) => {
    const [tasksData, setTasksData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [idDelete, setIdDelete] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const getProjectTasks = async () => {
        const config = {
            method: "GET",
            url: `/api/projectTasks/${id}`,
            headers: {
                Accept: "Application/json",
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
                _method: "DELETE",
                headers: {
                    Accept: "application/json",
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
        [idDelete]
    );

    return (
        <Container>
            {projectData.map((projectInfo) => {
                return (
                    <h2 className="text-capitalize" key={projectInfo.id}>
                        <Badge variant="secondary">{projectInfo.id}</Badge>{" "}
                        {projectInfo.name}
                    </h2>
                );
            })}
            <Accordion>
                {tasksData.map((task) => {
                    return (
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
                    );
                })}
            </Accordion>
        </Container>
    );
};
export default Tasks;
