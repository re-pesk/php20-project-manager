import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DownloadButton from './DownloadButton';

const Buttons = () => (
    <Container>
        <Row className="text-center">
            <Col><DownloadButton endpoint="api/projects/export" title="Project List" /></Col>
            <Col><DownloadButton endpoint="api/projects/1/export" title="Project #1" /></Col>
            <Col><DownloadButton endpoint="api/projects/1/tasks/export" title="Project #1 Task List" /></Col>
            <Col><DownloadButton endpoint="api/tasks/export" title="Task List" /></Col>
            <Col><DownloadButton endpoint="api/tasks/1/export" title="Task #1" /></Col>
        </Row>
    </Container>
);

export default Buttons;
