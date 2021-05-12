import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DownloadButton from './DownloadButton';

const Buttons = () => (
    <Container>
        <Row className="text-center">
            <DownloadButton href="api/projects/export" title="Project List" />
            <DownloadButton href="api/projects/1/export" title="Project #1" />
            <DownloadButton href="api/projects/1/tasks/export" title="Project #1 Task List" />
            <DownloadButton href="api/tasks/export" title="Task List" />
            <DownloadButton href="api/tasks/1/export" title="Task #1" />
        </Row>
    </Container>
);

export default Buttons;
