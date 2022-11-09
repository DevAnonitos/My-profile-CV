import React from 'react'
import { signInWithGoogle } from '../../firebase'
const Login = () => {
  return (
    <div className='dashboard'>
        <button onClick={signInWithGoogle} className='Login-btn'>
          Sign in with Google
        </button>
    </div>
  )
}

export default Login