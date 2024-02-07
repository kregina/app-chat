import { useAuth } from "@store/auth";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Lobby() {
  const navigate = useNavigate();
  const auth = getAuth();
  const { userData } = useAuth();

  const logout = () => {
    signOut(auth).then(() => {
      //TODO: Add toast
      console.log('User signed out successfully');
      navigate('/');
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <div>
      <h1>Welcome to the Lobby</h1>
      <p>Hey {userData?.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
