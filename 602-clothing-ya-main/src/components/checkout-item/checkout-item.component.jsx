import React from 'react'
import { useDispatch } from 'react-redux'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles'

import {addItemAction,removeItemAction,clearItemFromCartAction} from 'redux/cart/cart.actions'

const CheckoutItem = ({ cartItem }) => {

    const {imageUrl, name, quantity, price} = cartItem

    const dispatch = useDispatch()

    const addItem = (cartItem) => dispatch(addItemAction(cartItem))
    const removeItem = (cartItem) => dispatch(removeItemAction(cartItem))
    const clearCart = (cartItem) => dispatch(clearItemFromCartAction(cartItem))

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>

            <TextContainer>
                {name}
            </TextContainer>

            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>

            <TextContainer>
                {price}
            </TextContainer>

            <RemoveButtonContainer onClick={() => clearCart(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )

}

export default CheckoutItem