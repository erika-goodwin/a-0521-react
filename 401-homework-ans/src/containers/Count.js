import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const Count = ({ countProps, onIncrement }) =>{

    useEffect(() => {
        setInterval(() => {
            //dispatch an increment function
            onIncrement()
        }, 1000)
    }, [])

    return(
        <div>
            <h2>Count: {countProps} </h2>
            {/* <button onClick={() => onIncrement()}>ADD</button> */}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return { countProps: state.count }
// }
const mapStateToProps = (state) => ({ countProps: state.counter.count })
const mapDispatchToProps = (dispatch) => {
    return { 
        onIncrement: () => dispatch({ type: 'INCREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)