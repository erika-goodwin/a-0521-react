import DIRECTORY from 'assets/data/directory'
import {
  FETCH_DIRECTORY_START,
  FETCH_DIRECTORY_SUCCESS,
  FETCH_DIRECTORY_FAILURE,
} from './directory.types'

const INITIAL_STATE = {
  directory: null,
  isFetching: false,
  errorMessage: undefined,
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DIRECTORY_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_DIRECTORY_SUCCESS:
      return{
        ...state,
        isFetching: false,
        directory: action.payload
      }
    case FETCH_DIRECTORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default directoryReducer
