import React, {useState, useCallback, memo} from 'react'

const DemoUseCallback = () => {
    const [age, setAge] = useState(99)
    
    const handleClick = () => setAge(age + 1)

    const someValue = "someValue"

    const doSomething = useCallback(() => {
        return someValue
    }, [someValue])


    return (
        <div>
            <Age age={age} handleClick={handleClick} />
            <Instructions someValue={someValue} />
            {/* <Instructions doSomething={doSomething} /> */}
        </div>
    )
}

export default DemoUseCallback

const Age = ({ age, handleClick}) => (
    <div>
        <div style={{ border: '2px', background: 'yellow', padding: '1rem'}}>
            Today I am {age} years of age.
        </div>
        <button onClick={handleClick}>Get Older!</button>
    </div>
)

const Instructions = memo((props) => {
    console.log(props)
    return(
    <div style={{ background: 'black', color: 'yellow', padding: '1rem'}}>
        Please follow the instructions.......
    </div>
)})

