import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Pages/Firebase/Firebase.config';
import axios from 'axios';
import Spinner from '../Component/Spinner/Spinner';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleAuth = new GoogleAuthProvider(app);
    
    // if(loading){
    //     return <Spinner></Spinner>
    // }

    //  create new user
     const newRegister = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }

    // exiting user sing in 
    const singIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Goggle Sing in
    const googleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleAuth)
    }

    // User LogOUt
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // User name and photo
    const updateUserProfile  = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // observe user check
    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser)
        //  get and set token
        if(currentUser){
            axios.post('http://localhost:5000/jwt',{email:currentUser?.email})
            .then(data=>{
                // console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token)
            })
        }else{
            localStorage.removeItem('access-token')
        }   
        // if(currentUser?.email){
        //     fetch('http://localhost:5000/jwt',{
        //         method:'POST',
        //         headers:{
        //             'content-type':'application/json'
        //         },
        //         body:JSON.stringify({email:currentUser?.email})
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         localStorage.setItem('access-token', data?.token)
        //     })
        // }
        setLoading(false)
  
         })
         return () =>{
             return unsubscribe;
         }
     },[])

    // Value pass
    const authInfo = {
        user,
        loading,
        setLoading,
        newRegister,
        singIn,
        logOut,
        updateUserProfile,
        googleSingIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;