import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Badge, Button, Card, Container, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import Pagination from './Pagination';
import TaskCard from './TaskCard';

const Tasks = () => {
    const [tasksData, setTasksData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [idDelete, setIdDelete] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(8);
    const history = useHistory();
    const { project } = useParams();

    const getProjectTasks = async () => {
        const config = {
            method: 'GET',
            url: `/api/projectTasks/${project}`,
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
        setLoading(false);
    };
    useEffect(() => {
        setLoading(true);
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
        [],
    );

    // Get current posts
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasksData.slice(indexOfFirstTask, indexOfLastTask);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            {projectData.map((projectInfo) => (
                <div className="d-flex flex-sm-row flex-column justify-content-between" key={projectInfo.id}>
                    <Button
                        className="m-2"
                        variant="primary"
                        type="submit"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        Back
                    </Button>
                    <h2 className="text-capitalize">

                        <Badge variant="secondary">{projectInfo.id}</Badge>
                        {' '}
                        {projectInfo.name}
                    </h2>
                    <div className="d-flex justify-content-between">

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

                    </div>
                </div>

            ))}

            <Accordion>
                { tasksData.length > 0 ? currentTasks.map((task) => (
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
                ))
                    : (
                        <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                variant="link"
                                className="text-center"
                            >
                                There are no tasks in this project.
                            </Accordion.Toggle>
                        </Card>
                    )}
                {loading === true ? (
                    <div className="text-center font-weight-bold">
                        Loading data...
                        <Spinner animation="border" variant="primary" className="ml-2" />
                    </div>

                ) : (<div />)}
            </Accordion>
            <Pagination
                tasksPerPage={tasksPerPage}
                totalTasks={tasksData.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </Container>
    );
};
export default Tasks;
