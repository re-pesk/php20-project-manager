/* eslint-disable max-len */
import {
    About,
    Board,
    CreateProject,
    CreateTask,
    Dashboard,
    EditTask,
    ErrorPage,
    Login,
    Logout,
    ProjectList,
    ProjectTasks,
    Register,
    UpdateProject,
    Welcome,
} from '../../../pages';

export const accessType = Object.freeze({ requiresLogin: 1, publicOnly: 2, both: 3 });

export default [
    { exact: true, path: '/', content: Welcome, title: 'Welcome', accessibility: accessType.both },
    { exact: true, path: '/dashboard', content: Dashboard, title: 'Dashboard', accessibility: accessType.requiresLogin },
    { exact: true, path: '/project/create-task', content: CreateTask, title: 'Create task', accessibility: accessType.requiresLogin },
    { exact: true, path: '/project/edit-task', content: EditTask, title: 'Edit task', accessibility: accessType.requiresLogin },
    { exact: true, path: '/project/tasks', content: ProjectTasks, title: 'Project Tasks', accessibility: accessType.requiresLogin },
    { exact: true, path: '/about-us', content: About, title: 'About us', accessibility: accessType.requiresLogin },
    { exact: true, path: '/login', content: Login, title: 'Login', accessibility: accessType.publicOnly },
    { exact: true, path: '/register', content: Register, title: 'Register', accessibility: accessType.publicOnly },
    { exact: true, path: '/logout', content: Logout, title: 'Logout', accessibility: accessType.requiresLogin },
    { exact: true, path: '/projects', content: ProjectList, title: 'Projects list', accessibility: accessType.requiresLogin },
    { exact: true, path: '/create-project', content: CreateProject, title: 'Create Project', accessibility: accessType.requiresLogin },
    { exact: true, path: '/update-project', content: UpdateProject, title: 'Update Project', accessibility: accessType.requiresLogin },
    { exact: true, path: '/project/board', content: Board, title: 'Tasks Board', accessibility: accessType.requiresLogin },
    { exact: false, path: '', content: ErrorPage, title: 'Error', accessibility: accessType.both },
];
