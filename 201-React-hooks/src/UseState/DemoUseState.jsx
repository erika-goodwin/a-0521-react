import React, { useState } from 'react'

const DemoUseState = () => {
    const [state, setState] = useState({ age: 18, siblingNum: 5 }) //declaring a state variable

    const handleClick = (val) => setState({ 
        ...state,
        [val]: state[val] + 1
    })

    const { age, siblingNum } = state

    return (
        <div>
            <p>Today I am {age} years of age!</p>
            <p>I have {siblingNum} siblings</p>
            <button onClick={handleClick.bind(null, 'age')}>Get older!</button>{" "}
            <button onClick={handleClick.bind(null, 'siblingNum')}>More Siblings!</button>
        </div>
    )
}

// const DemoUseState = () => {
//     const [count, setCount] = useState(0) //declaring a state variable
//     const [siblingNum, setSiblingNums] = useState(10)

//     const handleClick = () => setCount(count + 1)
//     const handleSiblingNum = () => setSiblingNums(siblingNum + 1)

//     return (
//         <div>
//             <p>Today I am {count} years of age!</p>
//             <p>I have {siblingNum} siblings</p>
//             <button onClick={handleClick}>Get older!</button>{" "}
//             <button onClick={handleSiblingNum}>More Siblings!</button>
//         </div>
//     )
// }

export default DemoUseState
