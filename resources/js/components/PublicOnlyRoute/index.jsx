import React from 'react';
import { Redirect, Route } from 'react-router';
import { useUserContext } from '../../context/UserContext';


export default function PublicOnlyRoute({ children, ...rest }) {

    const { userContext } = useUserContext();

    return (
        <Route
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
            render={({ location }) => (!userContext.user ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/dashboard',
                        state: { from: location },
                    }}
                />
            ))}
        />
    );
}