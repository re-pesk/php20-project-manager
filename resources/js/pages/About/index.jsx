import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../../components/Cards';
import TeamList from '../../components/TeamList';

const Content = () => (
    <Container className="px-5">
        <Row className="my-5">
            <Col className="mx-auto col-6">
                <h1 className="text-center my-5">PHProjectMan Team</h1>
                <TeamList />
            </Col>
        </Row>
        <Cards />
    </Container>
);

export default Content;
