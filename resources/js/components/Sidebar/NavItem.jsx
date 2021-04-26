import classNames from 'classnames';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = (props) => {
    const { href, icon, children } = props;

    return (
        <Nav.Item className={classNames({ active: (href === window.location.pathname) })}>
            <LinkContainer to={href}>
                <Nav.Link>
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    {children}
                </Nav.Link>
            </LinkContainer>
        </Nav.Item>
    );
};

export default NavItem;
