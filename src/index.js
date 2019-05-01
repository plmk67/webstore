import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import App from './app/components/layout/App'

//State that was grouped together
// import configureStore from './store/configureStore';

//Redux-Thunk configuration
// const store = configureStore();

ReactDOM.render(
    // <Provider store={store}>
    <Provider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
