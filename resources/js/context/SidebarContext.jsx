import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();
const { Provider } = SidebarContext;

const SidebarContextProvider = ({ children }) => {
    const shouldSidebarBeOpen = (document.body.clientWidth > 1186);
    const [isOpen, setSidebarContext] = useState(shouldSidebarBeOpen);
    const toggle = () => setSidebarContext(!isOpen);

    return (
        <Provider value={{ isOpen, setSidebarContext, toggle }} displayName="SidebarContext">
            {children}
        </Provider>
    );
};

export default SidebarContextProvider;

export const useSidebarContext = () => useContext(SidebarContext);
