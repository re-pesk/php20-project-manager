// import React from 'react';

import Empty from '../../../pages/Empty';
import Welcome from '../../../pages/Welcome';
import Dashboard from '../../../pages/Dashboard';
import Login from '../../../pages/Login';
import IsLoggedIn from '../../../pages/IsLoggedIn';
import Register from '../../../pages/Register';
import Logout from '../../../pages/Logout';
import ErrorPage from '../../../pages/Error';
import AuthExample from '../../../pages/AuthExample';
import EditTask from '../../../pages/EditTask';
import CreateTask from '../../../pages/CreateTask';

const routeListData = [
    { exact: true, path: '/', content: Welcome },
    { exact: true, path: '/dashboard', content: Dashboard },
    { exact: true, path: '/create-task/:project', content: CreateTask, title: 'Edit task' },
    { exact: true, path: '/edit-task/:task', content: EditTask, title: 'Edit task' },
    { exact: true, path: '/empty', content: Empty },
    { exact: true, path: '/example', content: AuthExample, page: true },
    { exact: true, path: '/logged-in', content: IsLoggedIn, title: 'Is User Logged In?' },
    { exact: true, path: '/login', content: Login },
    { exact: true, path: '/register', content: Register },
    { exact: true, path: '/logout', content: Logout },
    { exact: false, path: '', content: ErrorPage, title: 'Error' },
];

export default routeListData;
