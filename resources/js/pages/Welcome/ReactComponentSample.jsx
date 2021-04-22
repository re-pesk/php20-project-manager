import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

export default function ReactComponentSample() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="text-center">
                        <Card.Header><h2>React Component Sample in Laravel</h2></Card.Header>
                        <Card.Body>I&apos;m tiny React component in Laravel app!</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
