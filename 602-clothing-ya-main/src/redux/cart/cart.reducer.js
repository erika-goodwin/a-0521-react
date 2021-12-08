import { ADD_CART_ITEM, REMOVE_CART_ITEM, CLEAR_FROM_CART, RESET_CART } from './cart.types'
import { addItemToCart, removeITemFromCart} from './cart.util'

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
    case REMOVE_CART_ITEM:
      return{
        ...state,
        cartItems: removeITemFromCart(state.cartItems, action.payload)
      }
    case CLEAR_FROM_CART:
    return{
      ...state,
      cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
    }
    case RESERT_CART:
      return INITIAL_STATE
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
