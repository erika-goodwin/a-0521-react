import React from 'react'
import { useSelector } from 'react-redux'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout-page.styles'

import CheckoutItem from 'components/checkout-item/checkout-item.component'
import StripeCheckoutButton from 'components/stripe-button/stripe-button.component'

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((acc, cartItem) => ( acc + cartItem.quantity * cartItem.price), 0)
    return(
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer><span>Product</span></HeaderBlockContainer>
            <HeaderBlockContainer><span>Description</span></HeaderBlockContainer>
            <HeaderBlockContainer><span>Quantity</span></HeaderBlockContainer>
            <HeaderBlockContainer><span>Price</span></HeaderBlockContainer>
            <HeaderBlockContainer><span>Remove</span></HeaderBlockContainer>
        </CheckoutHeaderContainer>

        {
            cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <TotalContainer>TOTAL: ${totalPrice}</TotalContainer>
        <WarningContainer>
            * Use the following test credit cart for payment *
            <br />
            4242 4242 4242 4242 - Exp: future date - CVC: 123
        </WarningContainer>

        <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
)}

export default CheckoutPage