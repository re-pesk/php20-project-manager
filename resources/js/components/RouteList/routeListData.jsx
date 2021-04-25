// import React from 'react';

import Empty from '../../pages/Empty';
import Welcome from '../../pages/Welcome';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import IsLoggedIn from '../../pages/IsLoggedIn';
import Register from '../../pages/Register';
import Logout from '../../pages/Logout';
import ErrorPage from '../../pages/Error';
import AuthExample from '../../pages/AuthExample';
import EditTask from '../../pages/EditTask';
import CreateTask from '../../pages/CreateTask';

const routeListData = [
    { exact: true, path: '/', content: Welcome },
    { exact: true, path: '/dashboard', content: Dashboard },
    { exact: true, path: '/create-task/:project', content: CreateTask },
    { exact: true, path: '/edit-task/:task', content: EditTask },
    { exact: true, path: '/empty', content: Empty },
    { exact: true, path: '/example', content: AuthExample },
    { exact: true, path: '/logged-in', content: IsLoggedIn },
    { exact: true, path: '/login', content: Login },
    { exact: true, path: '/register', content: Register },
    { exact: true, path: '/logout', content: Logout },
    { exact: false, path: '', content: ErrorPage },
];

export default routeListData;
