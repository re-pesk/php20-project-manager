import React from 'react';

import { Route, Switch } from 'react-router-dom';
import routeListData from './RouteListData';

import Page from '../Page';

const RouteList = () => (
    <Switch>
        {routeListData.map((item, index) => {
            const { exact, path, content, page } = item;
            let { title } = item;
            if (!title) {
                title = content.name;
            }
            const key = `id-${index + 1}`;
            if (page) {
                return <Route key={key} exact={exact} path={path}>{content()}</Route>;
            }
            return <Route key={key} exact={exact} path={path}><Page title={title}>{content()}</Page></Route>;
        })}
    </Switch>
);

export default RouteList;
