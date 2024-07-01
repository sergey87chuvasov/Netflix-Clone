import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: 'AIzaSyDywnbRrBhG004fFC5FpD_N-AXGRzqrCCQ',
  authDomain: 'netflix-clone-4829c.firebaseapp.com',
  projectId: 'netflix-clone-4829c',
  storageBucket: 'netflix-clone-4829c.appspot.com',
  messagingSenderId: '355052350520',
  appId: '1:355052350520:web:b0aaafe89b3e39aa20cacd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user;

    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    // console.log(err);
    toast.error(err.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    // console.log(err);
    toast.error(err.code.split('/')[1].split('-').join(' '));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
