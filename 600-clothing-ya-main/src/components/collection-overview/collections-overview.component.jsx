import React from 'react'

import { CollectionsOverviewContainer } from './collections-overview.styles'

import CollectionPreview from 'components/collection-preview/collection-preview.component'

const CollectionOverview = ({ collectionProps }) => (
    <CollectionsOverviewContainer>
        {
            collectionProps && collectionProps.map(( { id, ...otherProps} ) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </CollectionsOverviewContainer>
)

export default CollectionOverview