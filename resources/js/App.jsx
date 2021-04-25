import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Sidebar from './components/Sidebar';
import { useSidebarContext } from './context/SidebarContext';
import CreateTask from './pages/CreateTask';
import Dashboard from './pages/Dashboard';
import EditTask from './pages/EditTask';
import Empty from './pages/Empty';
import ErrorPage from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Task from './pages/Task';
import Welcome from './pages/Welcome';

export default function App() {
    // open first
    const { setSidebarContext } = useSidebarContext();
    const [previousWidth, setPreviousWidth] = useState(-1);

    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;
            const widthLimit = 576;
            const isMobile = width <= widthLimit;
            const wasMobile = previousWidth <= widthLimit;

            if (isMobile !== wasMobile) {
                setSidebarContext(!isMobile);
            }

            setPreviousWidth(width);
        };

        // updateWidth();
        /**
         * Add event listener
         */
        window.addEventListener('resize', updateWidth);
        /**
         * Remove event listener
         */
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    });

    return (
        <div className="App wrapper min-vh-100">
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route
                    exact
                    path="/create-task/:project"
                    children={<CreateTask />}
                />
                <Route exact path="/edit-task/:task" children={<EditTask />} />
                <Route exact path="/empty" component={Empty} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/task/:project" component={Task} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    );
}
