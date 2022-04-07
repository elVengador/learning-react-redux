import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from './middlewares'
import { rootReducer } from './rootReduce'

// TODO: search a best way to configure REDUX DEV TOOLS
export const store = createStore(
    rootReducer,
    {},

    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : args => args,
    ),
)

