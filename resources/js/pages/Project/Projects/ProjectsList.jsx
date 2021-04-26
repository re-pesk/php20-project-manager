import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Container, Button, Accordion, Card } from 'react-bootstrap';
import Moment from "moment";

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);
    useEffect(async () => {
        const config = {
            method: "GET",
            url: "/api/projects",
            headers: {
                Accept: "application/json",
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
    }, []);
    console.log(projectsData);

    // console.log();
    return (

        //     <Accordion>
        //         {projectsData.map(project => (
        //             <Card key={project.id}>
        //                 <Accordion.Toggle as={Card.Header} eventKey={project.id} className="bg-light d-flex justify-content-between">
        //                     <span className="text-capitalize">Project Name: {project.name}</span>
        //                     <div>
        //                     <a className="btn btn-primary mr-1" href="#" role="button">View tasks</a>
        //                     <a className="btn btn-primary mr-1" href="#" role="button">Show Board</a>
        //                     <a className="btn btn-primary mr-1" href="#" role="button">Edit</a>
        //                     <a className="btn btn-danger" href="#" role="button">Delete</a>
        //                     </div>
        // </Accordion.Toggle>
        //                 <Accordion.Collapse eventKey={project.id}>
        //                     <Card.Body className="bg-secondary"><span className="text-capitalize">{project.description}</span>
        //                     <p className="text-capitalize">Status: {project.state.name}</p></Card.Body>
        //                 </Accordion.Collapse>
        //             </Card>
        //         ))}

        //     </Accordion>

        <Container>
            <Accordion>
            {projectsData.map(project => ( 
                let CreatedDate = project.created_at;
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
                        State: {project.state.name}
                    </Card.Title>

                    <Card.Title className="text-capitalize">
                        Tasks assigned: {project.tasks_count}
                    </Card.Title>
                    <Card.Title className="text-capitalize">
                        Unfinished tasks: {project.unfinished_tasks_count}
                    </Card.Title>

                    <Card.Text>{project.description}</Card.Text>
                    <div className="d-flex justify-content-between">
                        {/* <Button
                            variant="danger"
                            type="submit"
                            value={project.id}
                            onClick={() => {
                                setDeleting(true);
                                deleteTask(id);
                                setIdDelete(id);
                            }
                        }
                        >
                            {deleting ? "Loading..." : "Delete"}
                        </Button> */}
                        <div>
                        <Button className="mr-1">View tasks</Button>
                        <Button className="mr-1">Show Board</Button>
                        <Button className="mr-1">Edit</Button>
                        <Button variant="danger">Delete</Button>
                        </div>
                        <div>
                            <Card.Text>
                                {/* Created date:{" "}
                                {Moment(created).format("YYYY-MM-DD HH:m:s")} */}
                                Created date: {project.created_at}
                            </Card.Text>
                            <Card.Text>
                                {/* Updated date:{" "}
                                {Moment(updated).format("YYYY-MM-DD HH:m:s")} */}
                                Updated date: {project.updated_at}
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

