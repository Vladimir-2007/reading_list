import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'


export const useLogin = () => {
   const { dispatch } = useAuthContext()
   const [error, setError] = useState(null)

   const login = (email, password) => {
      setError(null)
      signInWithEmailAndPassword(auth, email, password)
         .then(res => {
            dispatch({type: 'LOGIN', payload: res.user})
         }).catch(err => {
         setError(err.message)
      })
   }

   return { error, login }

}