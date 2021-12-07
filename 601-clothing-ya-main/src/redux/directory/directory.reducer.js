import { directory } from 'assets/data/directory'

const INITIAL_STATE = directory

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
