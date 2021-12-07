import {initializeApp} from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
}

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return

    firestore.collection('users').doc('VNJYnTPjt3RXJz71IBAw').collection('pets').doc('s2OPluAb8SIAQbkjgwsj')
    firestore.doc('/users/VNJYnTPjt3RXJz71IBAw/pets/s2OPluAb8SIAQbkjgwsj')
    const userRef = firestore.doc() 
}

const firebaseApp = initializeApp(config)

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => signInWithPopup(auth, provider).then(res => console.log(res))

export default firebaseApp