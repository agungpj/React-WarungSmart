import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import FirebaseConfig from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp(FirebaseConfig);
//custom hooks
export function useFirebase() {
  return useContext(FirebaseContext);
}

const FirebaseContext = React.createContext();
const FirebaseProvider = (props) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const storage = firebase.storage();
  //custom hook auth firebase.
  const [user, loading, error] = useAuthState(auth);

  return (
    <FirebaseContext.Provider
      value={{
        auth,
        firestore,
        storage,
        user,
        loading,
        error,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
