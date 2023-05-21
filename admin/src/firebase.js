import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBpVXK0gC3IB6InrVZC4LnYL7bgzAxMrsk',
  authDomain: 'netflix-17a8b.firebaseapp.com',
  projectId: 'netflix-17a8b',
  storageBucket: 'netflix-17a8b.appspot.com',
  messagingSenderId: '867408770737',
  appId: '1:867408770737:web:87156312e358a6e1265490',
  measurementId: 'G-6133QG0ZEQ',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
