import { connect } from 'react-redux'

import CollectionOverview from './collections-overview.component'

const mapStateToProps = (state) => ({
    collectionProps: state.shop.collections
})

const CollectionOverviewContainer = connect(mapStateToProps)(CollectionOverview)

export default CollectionOverviewContainer