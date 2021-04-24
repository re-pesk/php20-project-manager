import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();
const { Provider } = SidebarContext;

const SidebarContextProvider = ({ children }) => {
    const [isOpen, setSidebarContext] = useState(true);

    const toggle = () => setSidebarContext(!isOpen);

    return (
        <Provider value={{ isOpen, setSidebarContext, toggle }}>
            {children}
        </Provider>
    );
};

SidebarContext.displayName = 'SidebarContext';

export default SidebarContextProvider;

export const useSidebarContext = () => useContext(SidebarContext);
