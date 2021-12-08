import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CollectionPageContainer from 'pages/collection/collection-page.container'
import CollectionOverviewContainer from 'components/collection-overview/collections-overview.container'
import { fetchCollectionStartAsync } from 'redux/shop/shop.actions'

const ShopPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCollectionStartAsync())
    }, [])

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