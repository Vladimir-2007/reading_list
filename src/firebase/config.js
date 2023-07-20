import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth }


