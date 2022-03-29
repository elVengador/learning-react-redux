import { combineReducers } from 'redux';
import { counterReducer } from './counters/counter.reducers';
import { jokesReducer } from './jokes/jokes.reducers';



export const rootReducer = combineReducers({
    counter: counterReducer,
    jokes: jokesReducer
})