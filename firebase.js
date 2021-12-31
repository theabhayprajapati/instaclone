// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAmH73Rffsz4LQ-C0pzofy0es-qp6JdVzc',
  authDomain: 'instaclone-35d81.firebaseapp.com',
  projectId: 'instaclone-35d81',
  storageBucket: 'instaclone-35d81.appspot.com',
  messagingSenderId: '209404873762',
  appId: '1:209404873762:web:b217543597ba134e1b0e7b',
  measurementId: 'G-S4CL1NB0SF',
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore()
const storage = getStorage()

const analytics = getAnalytics(app)

//  todo: for server-side rendering

export { app, db, storage }
