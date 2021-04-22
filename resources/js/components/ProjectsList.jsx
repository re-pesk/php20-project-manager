import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    return (
        <>
            <ul className="list-group">
                {projectsData.map(project => (
                    <li className="list-group-item d-flex justify-content-between"><span className="font-weight-bold">{project.id}. </span> Project name: {project.name}, Description: {project.description}
                        <button className="btn btn-primary mr-2">View tasks</button>
                        <button className="btn btn-primary mr-2">Show board</button>
                        <button className="btn btn-primary mr-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default Projects;

