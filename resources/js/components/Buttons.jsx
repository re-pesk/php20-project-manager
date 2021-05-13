import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DownloadButton from './DownloadButton';

const buttonData = [
    { endpoint: 'api/export/projects', title: 'Project List' },
    { endpoint: 'api/export/projects/1', title: 'Project #1' },
    { endpoint: 'api/export/projects/1/tasks', title: 'Project #1 Task List' },
    { endpoint: 'api/export/tasks', title: 'Task List' },
    { endpoint: 'api/export/tasks/1', title: 'Task #1' },
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
