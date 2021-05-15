import React, { useState, useContext, useEffect } from 'react'
import { auth, googleProvider } from './firebase'
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }
  const logout = () => {
    return auth.signOut();
  }
  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }
  const updateEmail = (email) => {
    currentUser.updateEmail(email);
  }
  const updatePassword = (password) => {
    currentUser.updatePassword(password);
  }
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  }
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setAuthLoading(false);
      return unsubscribe
    })
  }, [])
  
  return (
    <AuthContext.Provider 
      value={{
        currentUser,
        signup,
        login,
        authLoading,
        setAuthLoading,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        signInWithGoogle,
      }}>
      { !authLoading && children }
    </AuthContext.Provider>
  )
}
export function useAuth() {
  return useContext(AuthContext)
}

