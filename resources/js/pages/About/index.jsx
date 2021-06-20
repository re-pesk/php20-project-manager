import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../../components/Cards';
import TeamList from '../../components/TeamList';

const Content = () => (
    <Container className="px-5">
        <Row className="my-5">
            <Col className="mx-auto col-8">
                <h1 className="text-center my-5">PHProjectMan Team</h1>
                <TeamList />
                <p><a href="https://github.com/re-pe/php20-project-manager">Github repository</a></p>
            </Col>
        </Row>
        <Cards />
    </Container>
);

export default Content;
