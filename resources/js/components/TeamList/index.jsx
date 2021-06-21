import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ContactEmail from './ContactEmail';
import { teamData } from './team-data';

const { _ } = window;

const memberList = (members) => members.map(
    (member, index) => (
        <li key={`key${index + 1}`}>
            <Row style={{ height: '2rem' }}>
                <Col className="col-5">
                    {member.name}
                    {': '}
                </Col>
                <Col className="col-7">
                    <ContactEmail emailKey={member.emailKey} />
                </Col>
            </Row>
        </li>
    ),
);

const TeamList = () => teamData.map(
    (item, index) => (
        <div key={`key${index + 1}`}>
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
