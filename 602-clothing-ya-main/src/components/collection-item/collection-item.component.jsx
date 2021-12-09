import React from 'react'
import { useDispatch } from 'react-redux'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles'

import { addItemAction } from 'redux/cart/cart.actions'

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item

    const dispatch = useDispatch()

    return(
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => dispatch(addItemAction(item))}>Add to Cart</AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem