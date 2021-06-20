import React from 'react';
import { Col, Row } from 'react-bootstrap';

const { _ } = window;

const teamData = [
    {
        memberType: 'developers',
        members: [
            { name: 'Arnoldas Venckus', email: 'arnoldas (dot) venckus (at) gmail (dot) com' },
            { name: 'Karolis Kvatavičius', email: 'karolis (dot) kvatavicius (at) gmail (dot) com' },
            { name: 'Marius Šerys', email: 'marius (dot) serys (at) gmail (dot) com' },
            { name: 'Rėdas Peškaitis', email: 'us<!-- abc@def -->er@domai<!-- @abc.com -->n.com  redas (dot) peskaitis (at) gmail (dot) com' },
            { name: 'Žilvinas Kazakauskas', email: 'zil (dot) kazakauskas (at) gmail (dot) com' },
        ],
    },
    {
        memberType: 'testers',
        members: [
            { name: 'Akvilė Gurskaitė-Rutkauskienė', email: 'akvile (dot) gurskaite (at) gmail (dot) com' },
            { name: 'Julius Činčikas', email: 'julius (dot) cincikas (at) gmail (dot) com' },
        ],
    },
];

const memberList = (members) => members.map(
    (member) => (
        <li>
            <Row>
                <Col className="col-5">
                    {member.name}
                    {': '}
                </Col>
                <Col className="col-7">{member.email}</Col>
            </Row>
        </li>
    ),
);

const TeamList = () => teamData.map(
    (item) => (
        <div>
            <h5>
                {_.upperFirst(item.memberType)}
                :
            </h5>
            <ul>
                {memberList(item.members)}
            </ul>
        </div>
    ),
);

export default TeamList;
