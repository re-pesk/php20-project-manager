import { faCopy } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import navItemListData from './data/NavItemListData';
import NavItem from './NavItem';
import SubMenu from './SubMenu';

const NavItemList = () => (
    <Nav className="flex-column pt-2">
        <p className="ml-3">Heading</p>

        {navItemListData.map((itemData, index) => {
            const { href, icon, text } = itemData;
            const key = `id-${index}`;
            return (
                <NavItem key={key} href={href} icon={icon}>
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
