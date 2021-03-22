import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// required for react-router navigation which breaks on IE
// with "cannot find method 'repeat' on Object"
import 'events-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from 'scenes/Root/Root';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Root />, document.querySelector('#root'));
