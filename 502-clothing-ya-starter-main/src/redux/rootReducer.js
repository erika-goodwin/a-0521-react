import{ conbineReducers} from 'redux'
import {persistReducer} from 'reduz-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import userReducer from './user/user.reducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'cart', 'directory', 'shop']


}

const rootReducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    user: userReducer
})

export default persistReducer