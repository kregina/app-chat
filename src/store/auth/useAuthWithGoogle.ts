import { useCallback } from 'react';

import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import { firebaseConfig } from './firebaseConfig';

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const provider: GoogleAuthProvider = new GoogleAuthProvider();

interface AuthWithGoogle {
  username: string,
  theme: string
}

export const useAuthWithGoogle = () => {
  const navigate = useNavigate();

  const authWithGoogle = useCallback(async (props: AuthWithGoogle) => {
    const { username, theme } = props;
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const db = getFirestore();
      const userRef = doc(db, "users", user.uid);

      await setDoc(userRef, {
        username: username,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        theme: theme
      });

      navigate('/lobby');
    } catch (error) {
      //TODO: Handle error
      console.error(error);
    }
  }, [navigate]);

  return authWithGoogle;
};

