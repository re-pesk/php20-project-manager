import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSidebarContext } from '../../context/SidebarContext';
import NavItemList from './NavItemList';

const SideBar = () => {
    const { isOpen, toggle } = useSidebarContext();
    return (
        <div className={classNames('sidebar', { 'is-open': isOpen })}>
            <div className="sticky-sidebar">
                <div className="d-flex align-items-end flex-column">
                    <Button
                        className={classNames({ invisible: !isOpen })}
                        variant="info"
                        size="sm"
                        onClick={toggle}
                    >
                        <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
                    </Button>
                </div>
                <div className="sidebar-header">
                    <div>
                        <h4>
                            PHProjectMan
                        </h4>
                    </div>
                </div>

                <NavItemList />
            </div>
        </div>
    );
};

export default SideBar;
