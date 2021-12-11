import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementValueAction, decrementValueAction } from '../../redux/actions'

const ChallengeD = () => {
  return <div>
    <Component1 />
    <Component2 />
    </div>
}

export default ChallengeD

const Component1 = () => {
  const dispatch = useDispatch()
  const value = useSelector(state => state.value)

  const incrementHandler = () => {
      dispatch(incrementValueAction(value))
  }

  const decrementHandler = () => {
      dispatch(decrementValueAction(value))
  }

  return (
      <>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </>
  )
}

const Component2 = () => {
    const value = useSelector(state => state.value)

    return(
        <>
            <h2>{value}</h2>
        </>
    )
}
