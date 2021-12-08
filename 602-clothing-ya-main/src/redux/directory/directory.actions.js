import { collection, getDocs } from 'firebase/firestore'
import { db } from 'firebase/firebase.util'

import {
  UPDATE_DIRECTORY,
  FETCH_DIRECTORY_START,
  FETCH_DIRECTORY_SUCCESS,
  FETCH_DIRECTORY_FAILURE,
} from './directory.types'

export const updateDirectory = (directoryMap) => ({
  type: UPDATE_DIRECTORY,
  payload: directoryMap,
})

export const fetchDirectoryStart = () => ({
  type: FETCH_DIRECTORY_START,
})

export const fetchDirectoryStartAsync = () => {
  return async (dispatch) => {
    try {
      const dirRef = collection(db, 'directory')
      dispatch(fetchDirectoryStart())
      
      const docSnap = await getDocs(dirRef)
      
      docSnap.forEach((doc) => {
        dispatch(fetchDirectorySuccess(doc.data()))
      })
    } catch (error) {
      dispatch(fetchDirectoryFailure(error.message))
    }
  }
}

export const fetchDirectorySuccess = (directoryMap) => ({
  type: FETCH_DIRECTORY_SUCCESS,
  payload: directoryMap,
})
export const fetchDirectoryFailure = (errorMessage) => ({
  type: FETCH_DIRECTORY_FAILURE,
  payload: errorMessage,
})
