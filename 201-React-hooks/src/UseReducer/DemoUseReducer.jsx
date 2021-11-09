import { useReducer } from "react"

const initialState = { width: 15 }

const reducer = (state, action) => {

    switch (action) {
        case 'plus':
            return { width: state.width + 15 }
        
        case 'minus':
            return { width: Math.max(state.width - 15, 2) }

        default:
            throw new Error("Whuuut?!");
    }
}

const DemoUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
            <div style={{background: 'teal', height: '30px', width: state.width }}></div>
            <div style={{ marginTop: '3rem'}}>
                <button onClick={() => dispatch('plus')}>Increase</button>
                {" "}
                <button onClick={() => dispatch('minus')}>Decrease</button>
            </div>
        </>
    )
}

export default DemoUseReducer