import React from 'react'
import { signInWithGoogle } from '../../firebase'
import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container } from '@mui/material'


const Login = () => {
  return (
    <>
    <AppBar position='relative' sx={{marginLeft: 10, display: 'flex', justifyContent: 'space-between'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant="h2" color="initial">
          My Current Projects
        </Typography>
        <button onClick={signInWithGoogle} className='Login-btn'>
          Sign in with Google
        </button>
      </Toolbar>
    </AppBar> 
    </>
  )
}

export default Login