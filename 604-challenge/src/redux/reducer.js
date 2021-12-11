export const reducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT_VALUE":
            return {
                ...state,
                value: action.payload + 1
            }
        case "DECREMENT_VALUE":
            return{
                ...state,
                value: action.payload - 1
            }
        default:
            return state
    }
}