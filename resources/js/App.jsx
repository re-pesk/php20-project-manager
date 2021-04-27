import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import '../css/App.css';
import RouteList from './components/RouteList';
import Sidebar from './components/Sidebar';
import { useSidebarContext } from './context/SidebarContext';

export default function App() {
    // open first
    const { setSidebarContext } = useSidebarContext();
    const [previousWidth, setPreviousWidth] = useState(-1);

    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;
            const widthLimit = 576;
            const isMobile = width <= widthLimit;
            const wasMobile = previousWidth <= widthLimit;

            if (isMobile !== wasMobile) {
                setSidebarContext(!isMobile);
            }

            setPreviousWidth(width);
        };

        // updateWidth();
        /**
         * Add event listener
         */
        window.addEventListener('resize', updateWidth);
        /**
         * Remove event listener
         */
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    });

    return (
        <div className="App wrapper min-vh-100">
            <Sidebar />
            <RouteList />
        </div>
    );
}
