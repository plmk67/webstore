import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

//State that was grouped together
import configureStore from './store/configureStore';

//Redux-Thunk configuration
const store = configureStore();

ReactDOM.render(
<Provider store={store}><App /></Provider>
, document.getElementById('root'));
