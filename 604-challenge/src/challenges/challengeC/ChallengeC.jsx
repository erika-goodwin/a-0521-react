import React, { useState } from 'react'

const HigherOrderComponent = (WrappedComponent, incrementValue) => {
    const HOC = () => {
        const [value, setValue] = useState(0)
        const incrementHandler = () => {
            setValue(value + incrementValue)
        }

        return <WrappedComponent value={value} incrementHandler={incrementHandler} />
    }

    return HOC
}

const ComponentA = HigherOrderComponent(({ value, incrementHandler }) => (
    <>
        <button onClick={incrementHandler}>Increment by 2</button>
        <h2>{value}</h2>
    </>
), 2)

const ComponentB = HigherOrderComponent(({ value, incrementHandler }) => (
    <>
        <button onClick={incrementHandler}>Increment by 20</button>
        <h2>{value}</h2>
    </>
), 20)

const ComponentC = HigherOrderComponent(({ value, incrementHandler }) => (
    <>
        <button onClick={incrementHandler}>Increment by 200</button>
        <h2>{value}</h2>
    </>
), 200)

const ChallengeC = () => {
    return (
        <>
           <ComponentA /> 
           <hr/>
           <ComponentB /> 
           <hr/>
           <ComponentC /> 
        </>
    )
}

export default ChallengeC