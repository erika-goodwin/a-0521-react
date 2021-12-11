import React, { useState } from 'react'

const ChallengeA = () => {
    const [list, setList] = useState([])
    const [value, setValue] = useState('')

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    const submitHandler = () => {
        setList([...list, value])
        setValue('')
    }

    const deleteHandler = (item) => {
        setList(list.filter((el) => el !== item ))
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} />
            <br/>
            <button onClick={submitHandler}>Add</button>
            <ul>
                {
                    list.length > 0 && list.map((item, index) => {
                        return( 
                            <li key={index} onClick={() => deleteHandler(item)}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ChallengeA
