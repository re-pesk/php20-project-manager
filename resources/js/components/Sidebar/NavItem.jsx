import React from 'react';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';

const NavItem = (props) => {
    const { href, children } = props;
    const currentUrl = new URL(window.location.href);
    const currentPath = currentUrl.pathname;
    return (
        <Nav.Item className={classNames({ active: (href === currentPath) })}>
            <Nav.Link href={href}>
                {children}
            </Nav.Link>
        </Nav.Item>
    );
};

export default NavItem;
