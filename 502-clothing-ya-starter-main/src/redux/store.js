import { createStore, applyMiddleware} from 'redux'
import {persistStore} from 'redux-presist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


import rootReducer from './rootReducer'

const middleware = [ thunk, logger]

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

export const store = createStore( rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store)