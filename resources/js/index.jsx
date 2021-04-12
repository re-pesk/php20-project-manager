import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const router = (
    <Router>
        <App />
    </Router>
);

render(
    router,
    document.getElementById('app'),
);
