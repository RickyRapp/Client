import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducers from './reducers';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store={store}>
        <App /> 
    </Provider>
    
);
 