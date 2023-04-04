import { useState } from "react"
import {signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'
import {auth} from '../firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'

export const useAuth = () => {

    const [user, loading] = useAuthState(auth)

    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
        }
        catch (error) {
            console.log(error)
        }
    }

    const Logout = () => {
        signOut(auth);
      };

    return {user,loading, GoogleLogin, Logout}
}