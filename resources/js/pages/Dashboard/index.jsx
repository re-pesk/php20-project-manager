import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const history = useHistory();

    // const [projectsCount, setProjectCount] = useState([]);

    // useEffect(async () => {
    //     const config = {
    //         method: 'GET',
    //         url: `/api/search-projects/${searchVar}?page=${currentPage}`,
    //         headers: {
    //             Accept: 'application/json',
    //         },
    //     };

    //     await axios(config)
    //         .then((response) => {
    //             // console.log(response.data);
    //             // setProjectsData(response.data);
    //             // setProjectsData(response.data.data);
    //             // setLastPage(response.data.last_page);
    //             // setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     // console.log(searchVar);
    // }, []);

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
        </Container>

    );
}
