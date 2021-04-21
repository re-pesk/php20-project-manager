import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { debugContextDevtool } from 'react-context-devtool';
import UserContextProvider from './context/UserContext';
import App from './App';

const container = document.getElementById('app');

render(
    <UserContextProvider>
        <Router>
            <App />
        </Router>
    </UserContextProvider>,
    container,
);

debugContextDevtool(container);
