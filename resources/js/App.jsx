import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Projects from './components/ProjectsList';

export default function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/test" component={Projects} />
                <Route component={Error} />
            </Switch>
        </>
    );
}
