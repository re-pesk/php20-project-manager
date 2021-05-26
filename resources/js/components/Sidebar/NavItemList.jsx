import React from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import navItemListData from './data/nav-item-list-data';
import NavItem from './NavItem';

const NavItemList = () => (
    <Nav className="flex-column ml-4">
        {navItemListData.map((itemData, index) => {
            const { href, icon, text } = itemData;
            const key = `id-${index}`;
            return (
                <NavItem key={key} href={href} icon={icon}>
                    {text}
                </NavItem>
            );
        })}
    </Nav>
);

export default withRouter(NavItemList);
