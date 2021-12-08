import { CartItemsContainer } from "components/cart-dropdown/cart-dropdown.styles"

export const addITemToCart = () => {

    const existingCartItem = cartItem.find(item=> item.id === cartItemToAdd.id)

    if(existingCartItem){
        return CartItemsContainer.map(item=>
            item.id === cartItemToAdd.id ?
            {...item, quantity : item.quantity +1}
            :
            item
            )
    }
}

    export const removeITemFromCart = (cartItems, cartItemToRemove) => {
        const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

        if(existingCartItem.quantity === 1){
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

        }

        return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id ? 
            {...cartItem, quantity} 
            : 
            cartItem
            )
}