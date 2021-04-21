import React, { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import axios from "axios";
import TaskCard from "./TaskCard";

const Tasks = () => {
    const [tasksData, setTasksData] = useState([]);
    const [project, setProject] = useState([]);
    const getProjectTasks = async (projectId) => {
        const config = {
            method: "GET",
            url: `/api/projectTasks/${projectId}`,
            headers: {
                Accept: "application/json",
            },
        };
        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                setTasksData(response.data.tasksData);
                setProject(response.data.projectData);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    };
    useEffect(() => {
        getProjectTasks(9);
    }, []);

    return (
        <Container>
            {project.map((projectInfo) => {
                return (
                    <h2>
                        {projectInfo.id} {projectInfo.name}
                    </h2>
                );
            })}

            {tasksData.map((task) => {
                return (
                    <TaskCard
                        key={task.id}
                        name={task.name}
                        description={task.description}
                        id={task.id}
                        priority={task.priority}
                        state={task.state}
                    />
                );
            })}
        </Container>
    );
};
export default Tasks;
