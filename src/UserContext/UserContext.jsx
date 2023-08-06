import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { current } from "@reduxjs/toolkit";
import { app } from "../DbFirebaseCollection/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
export default function UserContext({ children }) {
  const [user, setUser] = useState({});
  console.log(user);
  const [loading, setLoading] = useState(true);

  //   social provider
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //   social provider

  //   google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   google login
  //   facebook login
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  //   facebook login
  //   github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  //   github login

  //   sign up
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign up
  //   sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   sign in

  // verify email
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  // verify email
  // reset Password
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // reset Password

  //   user update
  const userUpdate = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  //   user update

  // logIn
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // LogIn

  //   user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  //   user observer

  // authInfo
  const authInfo = {
    googleLogin,
    facebookLogin,
    githubLogin,
    signIn,
    signUp,
    verifyEmail,
    forgetPassword,
    logOut,
    userUpdate,
    loading,
    setLoading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
