import { combineReducers } from 'redux';
import { counterReducer } from './counters/counter.reducers';



export const rootReducer = combineReducers({
    counter: counterReducer
})