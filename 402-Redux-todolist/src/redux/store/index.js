import { createStore } from 'redux'

//Redux-persist
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todosReducer from '../reducers/todos.reducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//Redux-persist
const persistConfig = {
    key: 'root',
    storage: storage
}
const pxReducer = persistReducer(persistConfig, todosReducer)


// export const store = createStore(todosReducer, devTools)

//After using Redux-persist
export const store = createStore(pxReducer, devTools)
export const persistor = persistStore(store)