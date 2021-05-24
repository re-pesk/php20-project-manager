import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, ListGroup, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const history = useHistory();

    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const config = {
            method: 'GET',
            url: '/api/dashboard',
            headers: {
                Accept: 'application/json',
            },
        };

        await axios(config)
            .then((response) => {
                setProjectData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
        // console.log(searchVar);
    }, []);

    return (
        <Container>
            <div>
                <Button
                    className="mb-3"
                    variant="primary"
                    type="submit"
                    onClick={() => {
                        history.push({ pathname: '/' });
                    }}
                >
                    Back
                </Button>
            </div>
            <div className="row">
                <div className="col">
                    <h1 className="mt-5 text-center">Database statistics</h1>
                    <div className="text-center">
                        <img src="../../img/chart.png" alt="chart" />
                    </div>
                </div>
            </div>
            {loading === true ? (
                <div className="row">
                    <div className="col">
                        <div className="mt-2 font-weight-bold text-center">
                            Loading data...
                            <Spinner animation="border" variant="primary" className="ml-2" />
                        </div>
                    </div>
                </div>
            )
                : (
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mt-5">
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        There
                                        {' '}
                                        {projectData.projectCount === '1 project' ? ('is') : ('are')}
                                        {' '}
                                        <strong>{projectData.projectCount}</strong>
                                        {' '}
                                        in the database.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        There
                                        {' '}
                                        {projectData.finishedProjectCount === '1 finished project' ? ('is') : ('are')}
                                        {' '}
                                        <strong>{projectData.finishedProjectCount}</strong>
                                        {' '}
                                        in the database.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        There
                                        {' '}
                                        {projectData.projectsCreatedLastWeekCount === '1 project' ? ('is') : ('are')}
                                        {' '}
                                        <strong>{projectData.projectsCreatedLastWeekCount}</strong>
                                        {' '}
                                        in the database that has been created this week.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-5">
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        There
                                        {' '}
                                        {projectData.projectCount === '1 task' ? ('is') : ('are')}
                                        {' '}
                                        <strong>{projectData.taskCount}</strong>
                                        {' '}
                                        in the database.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        There
                                        {' '}
                                        {projectData.finishedTaskCount === '1 finished task' ? ('is') : ('are')}
                                        {' '}
                                        <strong>{projectData.finishedTaskCount}</strong>
                                        {' '}
                                        in the database.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        There
                                        {' '}
                                        {projectData.tasksCreatedLastWeekCount === '1 task' ? ('is') : ('are')}
                                        {' '}
                                        <strong>{projectData.tasksCreatedLastWeekCount}</strong>
                                        {' '}
                                        in the database that has been created this week.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </div>
                )}
        </Container>

    );
}
