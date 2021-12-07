import { connect } from 'react-redux'
import { compose } from 'redux'

import WithRouter from 'hoc/withRouter/with-router.router';
import WithSpinner from 'hoc/withSpinner/with-spinner.component';
import CollectionPage from './collection-page.component'

const mapStateToProps = (state, ownProps) => {
    const { collectionId } = ownProps.params

    return { 
        collections: state.shop.collections.filter(item => item.title.toLowerCase() === collectionId.toLowerCase())[0] ,
        isLoading: false
    }
}

// const CollectionPageContainer = WithSpinner(WithRouter(connect(mapStateToProps)(CollectionPage)))
const CollectionPageContainer = compose(
    WithRouter,
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage)

export default CollectionPageContainer