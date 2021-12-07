import { ADD_CART_ITEM } from './cart.types'

//initial state
const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
}

//reducer function
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer

const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

    if(existingCartItem){
      return cartItems.map(item => 
        item.id === cartItemToAdd.id ? 
        { ...item, quantity: item.quantity + 1} 
        : 
        item
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}
