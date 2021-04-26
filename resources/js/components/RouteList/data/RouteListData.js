import {
    Welcome,
    Dashboard,
    CreateTask,
    EditTask,
    Empty,
    AuthExample,
    IsLoggedIn,
    Login,
    Register,
    Logout,
    ErrorPage,
} from '../../../pages';

const routeListData = [
    { exact: true, path: '/', content: Welcome },
    { exact: true, path: '/dashboard', content: Dashboard, requiresLogin: true },
    { exact: true, path: '/create-task/:project', content: CreateTask, title: 'Create task', requiresLogin: true},
    { exact: true, path: '/edit-task/:task', content: EditTask, title: 'Edit task', requiresLogin: true },
    { exact: true, path: '/empty', content: Empty, requiresLogin: true },
    { exact: true, path: '/example', content: AuthExample, title: 'Authentication Example', requiresLogin: true },
    { exact: true, path: '/logged-in', content: IsLoggedIn, title: 'Is User Logged In?', requiresLogin: true },
    { exact: true, path: '/login', content: Login, publicOnly: true },
    { exact: true, path: '/register', content: Register, publicOnly: true },
    { exact: true, path: '/logout', content: Logout, requiresLogin: true },
    { exact: false, path: '', content: ErrorPage, title: 'Error' },
];

export default routeListData;
