import React from 'react'
import WithRouter from 'hoc/withRouter/with-router.router'

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles'

import CollectionItem from 'components/collection-item/collection-item.component'

const CollectionPreview = ({ title, items, routeName, navigate, location }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => navigate(`${location.pathname}/${routeName}`)}>
        {title && title.toUpperCase()}
    </TitleContainer>

    <PreviewContainer>
        {
            items && items
                .filter((item, index) => index < 4 )
                .map( item => (
                    <CollectionItem key={item.id} item={item} />
                ))
        }
    </PreviewContainer>
  
  </CollectionPreviewContainer>
)

export default WithRouter(CollectionPreview)
