import React from 'react';
import classNames from 'classnames';
import { useSidebarContext } from '../../context/SidebarContext';
import NavItemList from './NavItemList';

const SideBar = () => {
    const { isOpen } = useSidebarContext();
    return (
        <div className={classNames('sidebar', { 'is-open': isOpen })}>
            <div className="sticky-sidebar">
                <div className="sidebar-header">
                    <h3>PHProjectMan</h3>
                </div>

                <NavItemList />
            </div>
        </div>
    );
};

export default SideBar;
