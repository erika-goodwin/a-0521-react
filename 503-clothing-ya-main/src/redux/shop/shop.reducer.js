import SHOP_DATA from "assets/data/shop"

const INITIAL_STATE = {
  collections: SHOP_DATA,
  isFetching: false,
  errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer
