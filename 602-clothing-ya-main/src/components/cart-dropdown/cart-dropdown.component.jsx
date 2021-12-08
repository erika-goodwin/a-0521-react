import React from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import './cart-dropdown.styles.scss';
import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
} from './cart-dropdown.styles'

import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(state => state.cart.cartItems)

  return(
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </CartItemsContainer>
    <CartDropdownButton onClick={() => { navigate('/checkout') }} >GO TO CHECKOUT</CartDropdownButton>
  </CartDropdownContainer>
)}

export default CartDropdown;