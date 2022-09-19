import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './auth'

export const UserLoggedAuth = ({children}) => {
    const auth = useAuth()

    if(auth.user){
        return <Navigate to='/profile'/>
    }
  return (
    children
  )
}
