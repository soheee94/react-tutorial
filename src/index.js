import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import ContextSample from './ContextSample';
import User from './User';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './ErrorBoundary';

// root 인걸 찾아서 그 안에 app을 넣겟다
ReactDOM.render(
<ErrorBoundary>
    <User /></ErrorBoundary>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
