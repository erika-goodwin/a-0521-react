import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CollectionPageContainer from 'pages/collection/collection-page.container'
import CollectionOverviewContainer from 'components/collection-overview/collections-overview.container'

const ShopPage = () => {

    return(
        <>
            <Routes>
                <Route path="" element={<CollectionOverviewContainer />} />
                <Route path=":collectionId" element={<CollectionPageContainer />} />
            </Routes>
        </>
    )
}

export default ShopPage