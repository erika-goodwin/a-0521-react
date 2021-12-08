import React from 'react';
import { useSelector } from 'react-redux'
// import './cart-icon.styles.scss';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles'

const CartIcon = ({toggleCartHidden}) => {
  const cartItems = useSelector(state => state.cart.cartItems)

  return(
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <ItemCountContainer>{cartItems.length}</ItemCountContainer>
  </CartContainer>
)};

export default CartIcon;
