import { ADD_CART_ITEM } from './cart.types'

export const addItem = (item) => ({ type: ADD_CART_ITEM, payload: item })