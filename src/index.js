import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import ContextSample from './ContextSample';
import * as serviceWorker from './serviceWorker';

// root 인걸 찾아서 그 안에 app을 넣겟다
ReactDOM.render(<ContextSample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
