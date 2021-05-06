/* eslint-disable no-console */
import axios from 'axios';
import { capitalize } from 'lodash';
import Moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Button, Card, Container, Spinner } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router-dom';

const Projects = () => {
    // back button
    const history = useHistory();
    // projects data
    const [projectsData, setProjectsData] = useState([]);
    // project delete
    const [idDelete, setIdDelete] = useState(0);
    // loading spinner
    const [loading, setLoading] = useState(true);
    // paginate
    const [currentPage, setCurrentPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);

    useEffect(async () => {
        const config = {
            method: 'GET',
            url: `/api/projects?page=${currentPage}`,
            headers: {
                Accept: 'application/json',
            },
        };
        await axios(config)
            .then((response) => {
                console.log(response.data);
                setProjectsData(response.data.data);
                setLastPage(response.data.last_page);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idDelete, currentPage]);
    console.log(projectsData);

    // delete project

    const deleteProject = useCallback(
        async (deleteId) => {
            const config = {
                _method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            await axios
                .post(`/api/projects/${deleteId}`, config)
                .then((response) => {
                    console.log('Project deleted succesfuly', response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        [],
    );

    // Change page
    const paginate = (e) => {
        setCurrentPage(e.selected + 1);
        setLoading(true);
        console.log(e);
    };

    return (
        <Container>
            <div>
                <Button
                    className="mb-3"
                    variant="primary"
                    type="submit"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Back
                </Button>
                <Button
                    className="mb-3"
                    style={{ float: 'right' }}
                    variant="primary"
                    type="submit"
                    onClick={() => {
                        history.push('/create-project/');
                    }}
                >
                    Create New Project
                </Button>
            </div>
            <Accordion>
                {/* Jei nera sukurta projektu */}
                {projectsData < 1
                    ? (
                        <Card>
                            <Card.Header as="h4" className="text-center">
                                There are no projects yet.
                            </Card.Header>
                        </Card>
                    )
                    // eslint-disable-next-line operator-linebreak
                    :
                    // Jei yra sukurta projektu
                    projectsData.map((project) => (
                        <Card key={project.id} id={project.id}>
                            <Accordion.Toggle
                                className="text-capitalize"
                                as={Button}
                                variant="light"
                                eventKey={project.id}
                            >
                                <Card.Header>
                                    <div className="row">
                                        <div className="col d-flex justify-content-start align-self-center">
                                            <h4 className="align-self-center mt-2">
                                                <span className="badge bg-secondary text-light mr-2">{project.id}</span>
                                                {capitalize(project.name)}
                                            </h4>
                                        </div>
                                        <div className="col align-self-center">
                                            <div className="d-flex justify-content-start">
                                                <b>State: </b>
                                                <span className={project.state.name === 'in progress'
                                                    ? 'text-primary' : 'text-success'}
                                                >
                                                    {project.state.name}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <b>Tasks Assigned:&nbsp;</b>
                                                <span className="text-primary">{project.tasks_count}</span>
                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <b>Unfinished Tasks:&nbsp;</b>
                                                <span className="text-danger">{project.unfinished_tasks_count}</span>
                                            </div>
                                        </div>
                                        <div className="col align-self-center ">
                                            <div className="d-flex justify-content-end">
                                                <b>Created at: </b>
                                                {Moment(project.created_at).format('YYYY-MM-DD HH:mm:ss')}
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <b>Updated at: </b>
                                                {Moment(project.updated_at).format('YYYY-MM-DD HH:mm:ss')}
                                            </div>
                                        </div>
                                    </div>
                                </Card.Header>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={project.id}>
                                <Card.Body className="bg-white">
                                    <div className="row px-2">
                                        <Card.Text>{project.description}</Card.Text>
                                    </div>
                                    <div className="row mt-4 pr-2 d-flex justify-content-end">
                                        <Button
                                            className="mr-1"
                                            type="submit"
                                            value={project.id}
                                            onClick={() => {
                                                history.push(`/task/${project.id}`);
                                            }}
                                        >
                                            View tasks
                                        </Button>
                                        <Button
                                            className="mr-1"
                                            onClick={() => {
                                                history.push({ pathname: '/project/board',
                                                    state: {
                                                        project: project.id,
                                                        task: null,
                                                    } });
                                            }}
                                        >
                                            Show Board
                                        </Button>
                                        <Button
                                            className="mr-1"
                                            type="submit"
                                            value={project.id}
                                            onClick={() => {
                                                history.push(`/update-project/${project.id}`);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            type="submit"
                                            value={project.id}
                                            onClick={() => {
                                                if (confirm('Are you sure want to delete project?')) {
                                                    deleteProject(project.id);
                                                    setIdDelete(project.id);
                                                } else {
                                                    setIdDelete(project.id);
                                                    return false;
                                                }
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                {/* loading data spinneris */}
                {loading === true ? (
                    <div className="text-center font-weight-bold">
                        Loading data...
                        <Spinner animation="border" variant="primary" className="ml-2" />
                    </div>
                ) : <div />}
            </Accordion>
            <ReactPaginate
                breakClassName="pt-2"
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
            />
        </Container>

    );
};
export default Projects;
