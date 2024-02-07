import { createContext } from "react";

import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export interface AuthContextType {
  user: User | null;
  userData: DocumentData | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
