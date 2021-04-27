/* eslint-disable max-len */
import {
    AuthExample, CreateTask, Dashboard,

    EditTask,
    Empty,

    ErrorPage, IsLoggedIn,
    Login,

    Logout,
    ProjectTasks, Register, Welcome, CreateProject, UpdateProject, ProjectList,
} from '../../../pages';

export const accessType = Object.freeze({ requiresLogin: 1, publicOnly: 2, both: 3 });

export default [
    { exact: true, path: '/', content: Welcome, accessibility: accessType.both },
    { exact: true, path: '/dashboard', content: Dashboard, accessibility: accessType.requiresLogin },
    { exact: true, path: '/create-task/:project', content: CreateTask, title: 'Edit task', accessibility: accessType.requiresLogin },
    { exact: true, path: '/edit-task/:task', content: EditTask, title: 'Edit task', accessibility: accessType.requiresLogin },
    { exact: true, path: '/task/:project', content: ProjectTasks, title: 'Project Tasks', accessibility: accessType.requiresLogin },
    { exact: true, path: '/empty', content: Empty, accessibility: accessType.requiresLogin },
    { exact: true, path: '/example', content: AuthExample, title: 'Authentication Example', accessibility: accessType.requiresLogin },
    { exact: true, path: '/logged-in', content: IsLoggedIn, title: 'Is User Logged In?', accessibility: accessType.both },
    { exact: true, path: '/login', content: Login, accessibility: accessType.publicOnly },
    { exact: true, path: '/register', content: Register, accessibility: accessType.publicOnly },
    { exact: true, path: '/logout', content: Logout, accessibility: accessType.requiresLogin },
    { exact: true, path: '/projects', content: ProjectList, title: 'Projects list', accessibility: accessType.requiresLogin },
    { exact: true, path: '/create-project', content: CreateProject, title: 'Create Project', accessibility: accessType.requiresLogin },
    { exact: true, path: '/update-project/:project', content: UpdateProject, title: 'Update Project', accessibility: accessType.requiresLogin },
    { exact: false, path: '', content: ErrorPage, title: 'Error', accessibility: accessType.both },
];
