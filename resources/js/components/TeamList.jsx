import React from 'react';
import { Col, Row } from 'react-bootstrap';

const { _ } = window;

const teamData = [
    {
        memberType: 'developers',
        members: [
            { name: 'Arnoldas Venckus', email: '' },
            { name: 'Karolis Kvatavičius', email: 'karolis(dot)kvatavicius(at)gmail(dot)com' },
            { name: 'Marius Šerys', email: 'marius(dot)serys(at)gmail(dot)com' },
            { name: 'Rėdas Peškaitis', email: 'redas(dot)peskaitis(at)gmail(dot).com' },
            { name: 'Žilvinas Kazakauskas', email: 'zil(dot)kazakauskas(at)gmail(dot)com' },
        ],
    },
    {
        memberType: 'testers',
        members: [
            { name: 'Akvilė Gurskaitė-Rutkauskienė', email: '' },
            { name: 'Julius Činčikas', email: '' },
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
