import axios from 'axios';
import Moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Projects = () => {
    const history = useHistory();
    const [projectsData, setProjectsData] = useState([]);
    const [idDelete, setIdDelete] = useState(0);
    useEffect(async () => {
        const config = {
            method: 'GET',
            url: '/api/projects',
            headers: {
                Accept: 'application/json',
            },
        };
        await axios(config)
            .then((response) => {
                // console.log(response.data);
                setProjectsData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idDelete]);
    console.log(projectsData);

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
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        [],
    );

    // console.log();
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
                        history.push('/project/create/');
                    }}
                >
                    Create New Project
                </Button>
            </div>
            <Accordion>
                {/* Jei nera sukurta projektu */}
                {projectsData.length < 1
                    ? (
                        <Card>
                            <Card.Header as="h4" className="text-center">
                                There are no projects yet,
                                {' '}
                                <a href="/create-project/" className="text-primary">create one!</a>
                            </Card.Header>
                        </Card>
                    )
                    :
                    // Jei yra sukurta projektu
                    projectsData.map((project) => (
                        <Card key={project.id} id={project.id}>
                            <Accordion.Toggle
                                className="text-capitalize"
                                as={Button}
                                variant="link"
                                eventKey={project.id}
                            >
                                <Card.Header as="h4">
                                    {project.name}
                                </Card.Header>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={project.id}>
                                <Card.Body className="bg-white">
                                    <Card.Title className="text-capitalize">
                                        State:
                                        {' '}
                                        {project.state.name}
                                    </Card.Title>

                                    <Card.Title className="text-capitalize">
                                        Tasks assigned:
                                        {' '}
                                        {project.tasks_count}
                                    </Card.Title>
                                    <Card.Title className="text-capitalize">
                                        Unfinished tasks:
                                        {' '}
                                        {project.unfinished_tasks_count}
                                    </Card.Title>

                                    <Card.Text>{project.description}</Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <Button
                                                className="mr-1"
                                                type="submit"
                                                value={project.id}
                                                onClick={() => {
                                                    history.push(
                                                        { pathname: '/project/tasks',
                                                            state: { project: project.id,
                                                                task: null } },
                                                    );
                                                }}
                                            >
                                                View tasks
                                            </Button>
                                            <Button className="mr-1">Show Board</Button>
                                            <Button
                                                className="mr-1"
                                                type="submit"
                                                value={project.id}
                                                onClick={() => {
                                                    history.push(
                                                        { pathname: '/project/edit',
                                                            state: { project: project.id,
                                                                task: null } },
                                                    );
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
                                        <div>
                                            <Card.Text>
                                                Created date:
                                                {' '}
                                                {Moment(project.created_at).format('YYYY-MM-DD HH:mm:ss')}
                                            </Card.Text>
                                            <Card.Text>
                                                Updated date:
                                                {' '}
                                                {Moment(project.updated_at).format('YYYY-MM-DD HH:mm:ss')}
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
            </Accordion>
        </Container>

    );
};
export default Projects;
