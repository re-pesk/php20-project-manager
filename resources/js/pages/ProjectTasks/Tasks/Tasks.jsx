/* eslint-disable no-console */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Badge, Button, Card, Container, Spinner } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router-dom';
import TaskCard from './TaskCard';

const Tasks = () => {
    // Tasks data
    const [tasksData, setTasksData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    // Delete
    const [idDelete, setIdDelete] = useState(0);
    const [deleting, setDeleting] = useState(false);
    // loading
    const [loading, setLoading] = useState(false);
    // Paginate
    const [currentPage, setCurrentPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);
    // URL
    const history = useHistory();
    // const { project } = useParams();
    const { project } = history.location.state;

    const getProjectTasks = async () => {
        const config = {
            method: 'GET',
            url: `/api/projectTasks/${project}?page=${currentPage}`,
            headers: {
                Accept: 'Application/json',
            },
        };
        await axios(config)
            .then((response) => {
                setTasksData(response.data.tasksData.data);
                setLastPage(response.data.tasksData.last_page);
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
    }, [idDelete, currentPage]);

    const deleteTask = useCallback(
        async (deleteId) => {
            const config = {
                _method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            await axios
                .post(`/api/tasks/${deleteId}`, config).then((response) => {
                    console.log('Deleted success!', response);
                })
                .catch((error) => {
                    console.log(error);
                });
            setDeleting(false);
        },
        [],
    );

    // Change page
    const paginate = (e) => {
        const pageNumber = e.selected + 1;
        setCurrentPage(pageNumber);
    };

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
                                // history.push(`/create-task/${projectInfo.id}`);
                                history.push({ pathname: '/project/create-task',
                                    state: {
                                        project: projectInfo.id,
                                        task: null,
                                    } });
                            }}
                        >
                            Create Task
                        </Button>

                    </div>
                </div>

            ))}

            <Accordion>
                {/* { tasksData.length > 0 ? tasksData.map((task) => (
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
                    :  (
                        <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                variant="link"
                                className="text-center"
                            >
                                There are no tasks in this project.
                            </Accordion.Toggle>
                        </Card>
                    )} */}
                {tasksData.length < 1 && currentPage === 1
                    ? (
                        <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                variant="link"
                                className="text-center"
                            >
                                There are no tasks in this project.
                            </Accordion.Toggle>
                        </Card>
                    ) : null}
                {tasksData.length < 1 && currentPage > 1
                    ? (
                        setCurrentPage(currentPage - 2)
                    ) : tasksData.map((task) => (
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
            <ReactPaginate
                pageCount={lastPage}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={paginate}
                initialPage={currentPage}
                containerClassName="nav justify-content-center nav-pills mt-2"
                pageClassName="nav-item mx-1"
                pageLinkClassName="nav-link"
                activeLinkClassName="active"
                nextLinkClassName="btn btn-link ml-1"
                previousLinkClassName="btn btn-link mr-1"
                breakClassName="pt-2"
            />
            {loading === true ? (
                <div className="text-center font-weight-bold">
                    Loading data...
                    <Spinner animation="border" variant="primary" className="ml-2" />
                </div>

            ) : null}
        </Container>
    );
};
export default Tasks;
