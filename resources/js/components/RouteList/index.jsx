import React from 'react';

import { Route, Switch } from 'react-router-dom';
import routeListData from './data/route-list-data';

import Page from '../Page';
import CheckedRoute from './CheckedRoute';

const RouteList = () => (
    <Switch>
        {routeListData.map((item, index) => {
            const { exact, path, content, title, accessibility, page } = item;
            const key = `id-${index + 1}`;
            if (page) {
                return (
                    <Route key={key} exact={exact} path={path}>
                        {content()}
                    </Route>
                );
            }
            return (
                <CheckedRoute key={key} exact={exact} path={path} accessibility={accessibility}>
                    <Page title={title} content={content} />
                </CheckedRoute>
            );
        })}
    </Switch>
);

export default RouteList;
