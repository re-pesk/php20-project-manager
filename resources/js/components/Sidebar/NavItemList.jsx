import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { useSidebarContext } from '../../context/SidebarContext';
import navItemListData from './data/nav-item-list-data';
import NavItem from './NavItem';

const NavItemList = () => {
    const { isOpen, toggle } = useSidebarContext();

    return (
        <Nav className="flex-column">
            {isOpen ? (
                <Button
                    style={{ borderRadius: 0 }}
                    className="mx-0"
                    variant="info"
                    onClick={toggle}
                >
                    <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
                </Button>
            ) : null}

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
};

export default withRouter(NavItemList);
