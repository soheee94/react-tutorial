import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
// ./modules/index.js = ./modules
import rootReducer from './modules';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(rootReducer);
// 스토어 상태 확인
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
