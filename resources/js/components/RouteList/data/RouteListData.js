import {
    AuthExample, CreateTask, Dashboard,

    EditTask,
    Empty,

    ErrorPage, IsLoggedIn,
    Login,

    Logout,
    Project,
    ProjectTasks, Register, Welcome, CreateProject, UpdateProject,
} from '../../../pages';

const routeListData = [
    { exact: true, path: '/', content: Welcome },
    { exact: true, path: '/dashboard', content: Dashboard },
    { exact: true, path: '/create-task/:project', content: CreateTask, title: 'Edit task' },
    { exact: true, path: '/edit-task/:task', content: EditTask, title: 'Edit task' },
    { exact: true, path: '/task/:project', content: ProjectTasks, title: 'Project Tasks' },
    { exact: true, path: '/empty', content: Empty },
    { exact: true, path: '/example', content: AuthExample, title: 'Authentication Example' },
    { exact: true, path: '/logged-in', content: IsLoggedIn, title: 'Is User Logged In?' },
    { exact: true, path: '/login', content: Login },
    { exact: true, path: '/register', content: Register },
    { exact: true, path: '/logout', content: Logout },
    { exact: true, path: '/projects', content: Project, title: 'Projects list' },
    { exact: true, path: '/create-project', content: CreateProject, title: 'Create Project' },
    { exact: true, path: '/update-project/:project', content: UpdateProject, title: 'Update Project' },
    { exact: false, path: '', content: ErrorPage, title: 'Error' },
];

export default routeListData;
