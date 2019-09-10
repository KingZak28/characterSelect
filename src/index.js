import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
// import Card from './Card';
// import CardList from './CardList'
import App from './containers/App'
import 'tachyons'
import {searchCharacters, requestCharacters} from './containers/reducers';
import * as serviceWorker from './serviceWorker';
// import {characters} from "./characters"; //Have to destructure because I used exports and not exports default

//Creating our Redux store here
//Generally you'll have a root reducer to combine your multiple reducers
const rootReducer = combineReducers({searchCharacters, requestCharacters});
const logger = createLogger();
//applyMiddleware is has ordered params so thunk will run first
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));


//Because we don't want to pass the store down the component tree over and over
//So we wrap the app component in the provider component which passes down the store to it's children
ReactDOM.render(
  <Provider store ={store} >
    <App />
  </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
