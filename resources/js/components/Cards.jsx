import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const images = [
    {
        id: 1,
        src: '../../img/padejeja.jpg',
        title: 'Developerio padėjėja',
        text: 'Prilaikysiu letenyte, kad patyliukais nepabėgtų :)',
    },
    {
        id: 2,
        src: '../../img/padejejas-2.jpg',
        title: 'Ramybės sargas',
        text: 'Aš irgi nagiuką prikišau!',
    },
    {
        id: 3,
        src: '../../img/pupiukas.jpg',
        title: 'Pupiukas',
        text: 'Mūsų gražuolis! :D',
    },
    {
        id: 3,
        src: '../../img/rokis.JPG',
        title: 'Rokis',
        text: 'Gražuolis ir taškas!',
    },
];

const Cards = () => (
    <Container>
        <Row>
            {images.map(
                (data) => (
                    <Col key={data.id}>
                        <Card className="mx-auto" style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={data.src} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ),
            )}
        </Row>
    </Container>
);

export default Cards;
