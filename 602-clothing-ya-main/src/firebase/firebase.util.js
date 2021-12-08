import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
  getFirestore,
  serverTimestamp,
  setDoc,
  doc,
  writeBatch,
  collection,
} from 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  try {
    const formData = {
      displayName: additionalData.displayName,
      email: userAuth.email,
      timestamp: serverTimestamp(),
    }
    await setDoc(doc(db, 'users', userAuth.uid), formData)
  } catch (error) {
    console.log('Error creating user: ', error.message)
  }
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db)

  const collectionRef = collection(db, collectionKey)
  objectsToAdd.forEach((obj) => {
      const newDocRef = doc(collectionRef)
      batch.set(newDocRef, obj)
  })

  await batch.commit()
}

const firebaseApp = initializeApp(config)

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).then((res) => console.log(res))

export default firebaseApp
