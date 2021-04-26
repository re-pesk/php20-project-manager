import React from 'react';

import { Route, Switch } from 'react-router-dom';
import routeListData from './data/RouteListData';

import Page from '../Page';
import PrivateRoute from '../PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute';

const RouteList = () => (
    <Switch>
        {routeListData.map((item, index) => {
            const { exact, path, content, page, requiresLogin, publicOnly } = item;
            let { title } = item;
            if (!title) {
                title = content.name;
            }
            const key = `id-${index + 1}`;
            if (page) {
                return <Route key={key} exact={exact} path={path}>{content()}</Route>;
            }
            if (requiresLogin) {
                return <PrivateRoute key={key} exact={exact} path={path}><Page title={title}>{content()}</Page></PrivateRoute>;
            }
            if (publicOnly) {
                return <PublicOnlyRoute key={key} exact={exact} path={path}><Page title={title}>{content()}</Page></PublicOnlyRoute>;
            }
            return <Route key={key} exact={exact} path={path}><Page title={title}>{content()}</Page></Route>;
        })}
    </Switch>
);

export default RouteList;
