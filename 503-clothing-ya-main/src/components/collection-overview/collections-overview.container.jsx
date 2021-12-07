import { connect } from 'react-redux'

import CollectionOverview from './collections-overview.component'

const mapStateToProps = (state) => {

    console.log('from container: ', state);
    return{
        collectionProps: state.shop.collections
    }
}

const CollectionOverviewContainer = connect(mapStateToProps)(CollectionOverview)

export default CollectionOverviewContainer