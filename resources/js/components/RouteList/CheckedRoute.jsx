import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { accessType } from './data/route-list-data';

export default function CheckedRoute({ accessibility, children, exact, key, path }) {
    const { userContext } = useUserContext();
    const { user } = userContext;
    const canAccess = (
        (accessibility === accessType.both)
    || (user && accessibility === accessType.requiresLogin)
    || (!user && accessibility === accessType.publicOnly)
    );

    return (
        <Route
            key={key}
            exact={exact}
            path={path}
            render={({ location }) => (canAccess ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location },
                    }}
                />
            ))}
        />
    );
}
