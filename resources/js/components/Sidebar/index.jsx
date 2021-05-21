import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useSidebarContext } from '../../context/SidebarContext';
import NavItemList from './NavItemList';
// import { useSidebarContext } from '../context/SidebarContext';

const SideBar = () => {
    // const { isOpen } = useSidebarContext();
    const { isOpen, toggle } = useSidebarContext();
    return (
        <div className={classNames('sidebar', { 'is-open': isOpen })}>
            <div className="sticky-sidebar">
                {isOpen ? (
                    <Nav className="d-flex justify-content-end mr-2 mt-2" navbar>
                        <Button
                            variant="outline-info"
                            onClick={toggle}
                        >
                            <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
                        </Button>
                    </Nav>
                ) : null}
                <div className="sidebar-header">
                    <h3>PHProjectMan</h3>
                </div>

                {/* <Nav className="col-2" navbar>
                    <Button
                        variant="outline-info"
                        onClick={toggle}
                    >
                        <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
                    </Button>
                </Nav> */}
                <NavItemList />
            </div>
        </div>
    );
};

export default SideBar;
