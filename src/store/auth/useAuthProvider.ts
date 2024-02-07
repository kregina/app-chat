import { useEffect, useState } from "react";

import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { DocumentData, Firestore, doc, getDoc, getFirestore } from "firebase/firestore";

import { AuthContextType } from "./AuthContext";

export const useAuthProvider = (): AuthContextType => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<DocumentData | null>(null);
  const auth = getAuth();
  const db: Firestore = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef).then((docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("No such user document!");
          }
        }).catch((error) => {
          console.error("Error fetching user document:", error);
        });
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  return {
    user,
    userData,
  };
};