import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD0NMO1BuAICNJ3o4bLU54Ws6UpTrLMcLs',
  authDomain: 'reactzzaria-40602.firebaseapp.com',
  databaseURL: 'https://reactzzaria-40602.firebaseio.com',
  projectId: 'reactzzaria-40602',
  storageBucket: '',
  messagingSenderId: '806464840510',
  appId: '1:806464840510:web:0afcb88392c85a7c84c26f'
}

firebase.initializeApp(config)

export default firebase
