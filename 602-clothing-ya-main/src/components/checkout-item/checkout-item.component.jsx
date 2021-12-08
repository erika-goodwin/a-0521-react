import React from 'react'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {

    const {imageUrl, name, quantity, price} = cartItem

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>

            <TextContainer>
                {name}
            </TextContainer>

            <QuantityContainer>
                <span>{quantity}</span>
            </QuantityContainer>

            <TextContainer>
                {price}
            </TextContainer>

            <RemoveButtonContainer>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )

}

export default CheckoutItem