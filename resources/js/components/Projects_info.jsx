import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projectData, setProjectData] = useState([]);
    useEffect(async () => {
        const config = {
            method: "GET",
            url: "/api/projects/1",
            headers: {
                Accept: "application/json",
            },
        };
        await axios(config)
            .then((response) => {
                // console.log(response.data);
                setProjectData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(projectData);
    
    return (
        <p>
            Statusas: {projectData.project_state['name']}
        </p>
    );
};

export default Projects;