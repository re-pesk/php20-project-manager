import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

const UserContextProvider = ({ children }) => {
    const [userContext, setUserContext] = useState({});

    return (
        <Provider value={{ userContext, setUserContext }}>
            {children}
        </Provider>
    );
};

UserContext.displayName = 'UserContextProvider';

export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);
