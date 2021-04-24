import React from 'react';

import { Route, Switch } from 'react-router-dom';
// import Welcome from '../../pages/Welcome';
import routeDataList from './routeDataList';

const RouteList = () => (
    <Switch>
        {routeDataList.map((item, index) => {
            const { exact, path, content } = item;
            const key = `id-${index + 1}`;
            return <Route key={key} exact={exact} path={path}>{content()}</Route>;
        })}
    </Switch>
);

export default RouteList;
