import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Accordion, Card } from 'react-bootstrap';

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

            <Accordion>
                {projectsData.map(project => (
                    <Card key={project.id}>
                        <Accordion.Toggle as={Card.Header} eventKey={project.id} className="bg-light d-flex justify-content-between">
                            <span className="text-capitalize">Project Name: {project.name}</span>
                            <div>
                            <a className="btn btn-primary mr-1" href="#" role="button">View tasks</a>
                            <a className="btn btn-primary mr-1" href="#" role="button">Show Board</a>
                            <a className="btn btn-primary mr-1" href="#" role="button">Edit</a>
                            <a className="btn btn-danger" href="#" role="button">Delete</a>
                            </div>
        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={project.id}>
                            <Card.Body className="bg-secondary"><span className="text-capitalize">{project.description}</span>
                            <p className="text-capitalize">Status: {project.state.name}</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}

            </Accordion>

    );
};
export default Projects;

