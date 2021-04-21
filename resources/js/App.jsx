import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './shared/Navigation';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';
import Footer from './shared/Footer';
import CreateTaskForm from './shared/CreateTaskForm';
import EditTaskForm from './shared/EditTaskForm';

export default function App() {
    return (
        <>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/create-task/:project" children={<CreateTaskForm/>} />
                <Route exact path="/edit-task/:task" children={<EditTaskForm/>} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </>
    );
}
