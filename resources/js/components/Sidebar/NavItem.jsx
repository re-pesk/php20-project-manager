import classNames from 'classnames';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavItem = (props) => {
    const { href, children } = props;

    return (
        <Nav.Item className={classNames({ active: (href === window.location.pathname) })}>
            <LinkContainer to={href}>
                <Nav.Link>
                    {children}
                </Nav.Link>
            </LinkContainer>
        </Nav.Item>
    );
};

export default NavItem;
