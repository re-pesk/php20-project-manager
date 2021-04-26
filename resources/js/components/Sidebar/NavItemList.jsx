import {
    faBug,

    faChartLine, faCopy, faHome,

    faInfoCircle, faPaperPlane,
    faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import NavItem from './NavItem';
import SubMenu from './SubMenu';

const itemListData = [
    { href: '/', icon: faHome, text: 'Home' },
    { href: '/dashboard', icon: faChartLine, text: 'Dashboard' },
    { href: '/empty', icon: faInfoCircle, text: 'About' },
    { href: '/test', icon: faBug, text: 'Error' },
    { href: '/faq', icon: faQuestion, text: 'FAQ' },
    { href: '/contact', icon: faPaperPlane, text: 'Contact' },
];

const NavItemList = () => (
    <Nav className="flex-column pt-2">
        <p className="ml-3">Heading</p>

        {itemListData.map((itemData, index) => {
            const { href, icon, text } = itemData;
            const key = `id-${index}`;
            return (
                <NavItem key={key} href={href}>
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    {text}
                </NavItem>
            );
        })}

        <SubMenu
            title="Pages"
            icon={faCopy}
            items={['Link', 'Link2', 'Active']}
        />
    </Nav>
);

export default withRouter(NavItemList);
