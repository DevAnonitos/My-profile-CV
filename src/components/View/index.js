import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import Login from '../Login';
import HoMe from './home';
import './View.scss'


const View = () => {

  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
      }else {
        setUser(null);
      }
    })
  }, [])

  return (
    <div>
      {user ? <HoMe /> : <Login />}
    </div>
  )
}

export default View