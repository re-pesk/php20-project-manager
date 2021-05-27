import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { debugContextDevtool } from 'react-context-devtool';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/index.css';
import App from './App';
import Log from './components/Log';
import SidebarContextProvider from './context/SidebarContext';
import UserContextProvider from './context/UserContext';

const container = document.getElementById('app');

window.addEventListener('beforeunload', (e) => {
    delete e.returnValue;
    Log('add', 'User left to external link');
    Log('send');
});

render(
    <UserContextProvider>
        <SidebarContextProvider>
            <Router>
                <App />
            </Router>
        </SidebarContextProvider>
    </UserContextProvider>,
    container,
);

debugContextDevtool(container);
