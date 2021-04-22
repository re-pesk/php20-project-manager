import React from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

export default function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/dashboard" component={Dashboard} />

                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={Error} />
            </Switch>
        </>
    );
}
