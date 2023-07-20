import React from 'react'
import { useLogout } from '../hooks/useLogout'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
   const { user } = useAuthContext()
   const { logout } = useLogout()
   return (
      <nav>
         <h3>Hi: {user?.email}</h3>
         <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li onClick={ logout }>Logout</li>
         </ul>
      </nav>
   )
}
