import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalContextProvider }  from './GlobalContext';

ReactDOM.render(
    <GlobalContextProvider>
        <Router>
            <App />
        </Router>
    </GlobalContextProvider>
    , document.getElementById('root'));
