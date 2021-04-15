import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Cards = () => (
    <Container>
        <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src="../../img/padejeja.jpg" />
            <Card.Body>
                <Card.Title>Developerio padėjėja</Card.Title>
                <Card.Text>
                    Prilaikysius letenyte, kad patyliukais nepabėgtų
                    {' :)'}
                </Card.Text>
            </Card.Body>
        </Card>
    </Container>
);

export default Cards;
