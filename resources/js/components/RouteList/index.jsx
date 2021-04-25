import React from 'react';

import { Route, Switch } from 'react-router-dom';
// import Welcome from '../../pages/Welcome';
import routeListData from './routeListData';

const RouteList = () => (
    <Switch>
        {routeListData.map((item, index) => {
            const { exact, path, content } = item;
            const key = `id-${index + 1}`;
            return <Route key={key} exact={exact} path={path}>{content()}</Route>;
        })}
    </Switch>
);

export default RouteList;
