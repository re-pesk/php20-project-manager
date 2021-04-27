import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { accessType } from './data/route-list-data';

export default function PublicOnlyRoute({ accessibility, children, ...rest }) {
    const { userContext } = useUserContext();
    const { user } = userContext;
    const canAccess = (
        (accessibility === accessType.both)
    || (user && accessibility === accessType.requiresLogin)
    || (!user && accessibility === accessType.publicOnly)
    );

    return (
        <Route
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
            render={({ location }) => (canAccess ? (
                children
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: location },
                }}
                />
            ))}
        />
    );
}
