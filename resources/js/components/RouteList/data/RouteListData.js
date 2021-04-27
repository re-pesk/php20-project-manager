import {
    AuthExample, CreateTask, Dashboard,

    EditTask,
    Empty,

    ErrorPage, IsLoggedIn,
    Login,

    Logout,
    ProjectTasks, Register, Welcome, CreateProject, UpdateProject, ProjectList,
} from '../../../pages';

const routeListData = [
    { exact: true, path: '/', content: Welcome },
    { exact: true, path: '/dashboard', content: Dashboard, requiresLogin: true },
    { exact: true, path: '/create-task/:project', content: CreateTask, title: 'Edit task', requiresLogin: true },
    { exact: true, path: '/edit-task/:task', content: EditTask, title: 'Edit task', requiresLogin: true },
    { exact: true, path: '/task/:project', content: ProjectTasks, title: 'Project Tasks', requiresLogin: true },
    { exact: true, path: '/empty', content: Empty, requiresLogin: true },
    { exact: true, path: '/example', content: AuthExample, title: 'Authentication Example', requiresLogin: true },
    { exact: true, path: '/logged-in', content: IsLoggedIn, title: 'Is User Logged In?', requiresLogin: true },
    { exact: true, path: '/login', content: Login, publicOnly: true },
    { exact: true, path: '/register', content: Register, publicOnly: true },
    { exact: true, path: '/logout', content: Logout, requiresLogin: true },
    { exact: true, path: '/projects', content: ProjectList, title: 'Projects list', requiresLogin: true },
    { exact: true, path: '/create-project', content: CreateProject, title: 'Create Project', requiresLogin: true },
    { exact: true, path: '/update-project/:project', content: UpdateProject, title: 'Update Project', requiresLogin: true },
    { exact: false, path: '', content: ErrorPage, title: 'Error' },
];

export default routeListData;
