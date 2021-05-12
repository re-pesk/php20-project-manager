import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DownloadButton from './DownloadButton';

const buttonData = [
    { endpoint: 'api/projects/export', title: 'Project List' },
    { endpoint: 'api/projects/1/export', title: 'Project #1' },
    { endpoint: 'api/projects/1/tasks/export', title: 'Project #1 Task List' },
    { endpoint: 'api/tasks/export', title: 'Task List' },
    { endpoint: 'api/tasks/1/export', title: 'Task #1' },
];

const Buttons = () => (
    <Container>
        <Row className="text-center">
            {buttonData.map((item, index) => {
                const key = `btn-${index}`;
                return (<Col><DownloadButton key={key} endpoint={item.endpoint} title={item.title} /></Col>);
            })}
        </Row>
    </Container>
);

export default Buttons;
