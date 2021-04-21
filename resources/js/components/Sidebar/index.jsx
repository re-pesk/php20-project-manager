import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faPaperPlane,
    faQuestion,
    faBug,
    faCopy,
    faInfoCircle,
    faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';
import SubMenu from './SubMenu';
import { useSidebarContext } from '../../context/SidebarContext';

const SideBar = () => {
    // const { isOpen } = props;
    const { isOpen } = useSidebarContext();
    return (
        <div className={classNames("sidebar", { 'is-open': isOpen })}>
            <div className="sticky-sidebar">
            <div className="sidebar-header">
                <h3>PHProjectMan</h3>
            </div>

            <Nav className="flex-column pt-2">
                <p className="ml-3">Heading</p>

                <Nav.Item className="active">
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/dashboard">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Dashboard
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/empty">
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                        About
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/test">
                        <FontAwesomeIcon icon={faBug} className="mr-2" />
                        Error
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                        FAQ
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        Contact
                    </Nav.Link>
                </Nav.Item>

                <SubMenu
                    title="Pages"
                    icon={faCopy}
                    items={['Link', 'Link2', 'Active']}
                />
            </Nav>
            </div>
        </div>
    );
};

export default SideBar;
