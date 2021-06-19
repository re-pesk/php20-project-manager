import React from 'react';

const { _ } = window;

const teamData = [
    {
        memberType: 'developers',
        members: [
            { name: 'Arnoldas Venckus', email: '' },
            { name: 'Karolis Kvatavičius', email: 'karolis(dot)kvatavicius(at)gmail(dot)com' },
            { name: 'Marius Šerys', email: '' },
            { name: 'Rėdas Peškaitis', email: 'redas(dot)peskaitis(at)gmail(dot).com' },
            { name: 'Žilvinas Kazakauskas', email: '' },
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
            {member.name}
            {': '}
            {member.email}
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
