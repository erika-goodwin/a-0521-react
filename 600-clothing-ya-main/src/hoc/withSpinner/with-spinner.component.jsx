import React from 'react'

import {SpinnerContainer,SpinnerOverlay} from './with-spinner.styles'

const WithSpinner = (Child) => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? ( 
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
            ) : ( 
                <Child {...otherProps} />
            )
    }

    return Spinner
}

export default WithSpinner