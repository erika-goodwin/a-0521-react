import { connect } from 'react-redux'
import { compose } from 'redux'

import CollectionOverview from './collections-overview.component'
import WithSpinner from 'hoc/withSpinner/with-spinner.component'

const mapStateToProps = (state) => ({
  collectionProps: state.shop.collections,
  isLoading: state.shop.isFetching
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
