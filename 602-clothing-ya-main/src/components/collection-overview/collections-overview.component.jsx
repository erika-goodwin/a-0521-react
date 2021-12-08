import React, { useEffect } from 'react'

import { CollectionsOverviewContainer } from './collections-overview.styles'

import CollectionPreview from 'components/collection-preview/collection-preview.component'
import { addCollectionAndDocuments } from 'firebase/firebase.util'

const CollectionOverview = ({ collectionProps }) => {
    
    //maps the dummy data to firestore <--- run only once
    // useEffect(() => {
    //     addCollectionAndDocuments('collections', collectionProps )
    // }, [])
    return(
    <CollectionsOverviewContainer>
        {
            collectionProps && collectionProps.map(( { id, ...otherProps} ) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </CollectionsOverviewContainer>
)}

export default CollectionOverview