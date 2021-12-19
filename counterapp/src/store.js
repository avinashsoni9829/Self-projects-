import {applyMiddleware, createStore} from  'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'


import CounterReducer from './CounterReducer';

const store = createStore(CounterReducer , composeWithDevTools(applyMiddleware(logger)));


export default store;
