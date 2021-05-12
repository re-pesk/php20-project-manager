import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const { axios } = window;

const DownloadData = () => {
    const getUserData = async () => {
    // setErrorData({});
        const config = {
            method: 'get',
            url: 'api/data/export',
            responseType: 'blob',
            headers: {
                Accept: 'application/vnd.ms-excel',
            },
        };
        await axios(config)
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'project-data.xlsx');
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
            // setErrorData({ status: error.response.status, message: error.response.data.message });
            // eslint-disable-next-line no-console
                console.log(error.response);
            });
    };

    const handleClick = (event) => {
        event.preventDefault();
        getUserData();
    };

    return (
        <Container>
            <Row className="text-center">
                <Col>
                    <Button type="button" className="btn btn-primary" onClick={handleClick}>Click to Export</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DownloadData;
