import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { debugContextDevtool } from 'react-context-devtool';
import UserContextProvider from './context/UserContext';
import SidebarContextProvider from './context/SidebarContext';
import App from './App';

const container = document.getElementById('app');

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
