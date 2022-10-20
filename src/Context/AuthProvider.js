import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    //Set Logged in user data to a state
    const [user, setUser] = useState()
    //Loading to resolve return to login page after each reload
    const [loading, setLoading] = useState(true)
    //Create a auth and Get Auth
    const auth = getAuth(app)
    //Create a auth Provider for google
    const googleProvider = new GoogleAuthProvider()
    //Handle Google Signin/Registration
    const googleSignIn = ()=> {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    //const user register using emial and password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Send user a Verification email after registration
    const verifyEmail =()=>{
        return sendEmailVerification(auth.currentUser)
    }
    //Login using Email and Password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //SignOut
    const logOut = ()=> {
        setLoading(true)
        return signOut(auth);
    }
    //Get the user data from the state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe()
    }, [auth])

    const data = {user, googleSignIn, userRegister, verifyEmail, userLogin, logOut, loading}
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;