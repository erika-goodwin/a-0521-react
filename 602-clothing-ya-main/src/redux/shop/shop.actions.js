import { collection, getDocs } from 'firebase/firestore'
import { db } from 'firebase/firebase.util'

import {
  UPDATE_COLLECTIONS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from './shop.types'

export const updateCollection = (collectionsMap) => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
})

export const fetchCollectionStart = () => ({
    type: FETCH_COLLECTIONS_START
})

export const fetchCollectionStartAsync = () => {
    return async(dispatch) => {

        try{

            const collectionsRef = collection(db, 'collections')

            const querySnap = await getDocs(collectionsRef)

            const collectionsMap = []
            querySnap.forEach((doc) => {
                return collectionsMap.push({ 
                    id: doc.id,
                    ...doc.data()
                })
            })

            dispatch(fetchCollectionSuccess(collectionsMap))

        }catch(error){
            dispatch(fetchCollectionFailure(error.message))
        }
    }
}

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
export const fetchCollectionFailure = (errorMessage) => ({
    type: FETCH_COLLECTIONS_START,
    payload: errorMessage
})