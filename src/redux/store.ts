import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from './middlewares'
import { rootReducer } from './rootReduce'


// 


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, thunk)
)