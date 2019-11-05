import React from 'react';
import ReactDOM from 'react-dom';
import './style'
import store from "./store/store";
import {Provider} from 'react-redux'
import 'antd/dist/antd.css';
import App from './App';
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

