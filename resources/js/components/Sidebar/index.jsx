import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSidebarContext } from '../../context/SidebarContext';
import NavItemList from './NavItemList';

const SideBar = () => {
    const { isOpen, toggle } = useSidebarContext();
    return (
        <Container className={classNames('sidebar', 'px-0', { 'is-open': isOpen })} fluid>
            <Container className="sticky-sidebar px-0" fluid>
                <Navbar
                    // variant="info"
                    // sticky="top"
                    className="navbar shadow-sm py-3 px-0 mb-5 text-info"
                    expand
                >
                    <Nav className="text-center mx-auto text-light" style={{ height: 56 }} navbar>
                        <h3 className="my-auto">PHProjectMan</h3>
                    </Nav>
                    <Nav className={classNames({ 'toggle-visibility': !isOpen })} navbar>
                        <div className="d-flex align-items-start flex-column">
                            <Button
                            // className={classNames({ invisible: isOpen })}
                                variant="info"
                                size="sm"
                                onClick={toggle}
                            >
                                <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
                            </Button>
                        </div>
                    </Nav>
                </Navbar>
                <NavItemList />
            </Container>
        </Container>
    );
};

export default SideBar;
