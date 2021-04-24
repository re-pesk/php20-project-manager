import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Empty from './pages/Empty';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import IsLoggedIn from './pages/IsLoggedIn';
import Register from './pages/Register';
import Logout from './pages/Logout';
import ErrorPage from './pages/Error';
import { useSidebarContext } from './context/SidebarContext';
import EditTask from './pages/EditTask';
import CreateTask from './pages/CreateTask';

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
                <Route exact path="/create-task/:project" component={CreateTask} />
                <Route exact path="/edit-task/:task" component={EditTask} />
                <Route exact path="/empty" component={Empty} />
                <Route exact path="/logged-in" component={IsLoggedIn} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/logout" component={Logout} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    );
}
