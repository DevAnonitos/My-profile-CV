import React, { useRef } from 'react'
import { auth, db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material'

const HoMe = () => {

  const form = useRef();

  const submitProfile = (e) => {
    e.preventDefault(); 

    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];
    
    const storageRef = ref(storage, `portfolio/${image.name}`);

    uploadBytes(storageRef, image).then(
      (snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadUrl) => {
              savePortfolio({
                  name,
                  description,
                  url,
                  image: downloadUrl
              })
          }, (error) => {
              console.log(error);
              savePortfolio({
                  name,
                  description,
                  url,
                  image: null
              })
          })
      }, (error) => {
          console.log(error);
          savePortfolio({
              name,
              description,
              url,
              image: null
          })
      }
    )
  }

  const savePortfolio = async (portfolio) => {
    console.log(portfolio);
    try {
      await addDoc(collection(db, 'portfolio'), portfolio);
      window.location.reload(false);
    } catch (error) {
      alert('Failed to add portfolio!');
    }
  }

  

  return (
  <>
    <AppBar position='relative' sx={{marginLeft: 10, display: 'flex', justifyContent: 'space-between'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant="h2" color="initial">
          My Current Projects
        </Typography>
        <button className='Logout-btn' onClick={() => auth.signOut()}>Sign out</button>
      </Toolbar>
    </AppBar> 
    <main>
      <div>
        <Container maxWidth='sm'>
          <Typography variant='h3' align='center' color='#f1c40f' gutterBottom sx={{marginTop: 2}}> 
            Some Projects
          </Typography>
          <Typography variant='h5' align='center' color='#fff' paragraph>
            Hello everyone. This is a view page and I'm trying to show you some current projects. About HTML, CSS and Javascript, some library Reactjs, JQUERY, SASS
          </Typography>
          <div>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <Button variant='contained' color='primary' sx={{padding: 2}}>
                  See my project
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary' sx={{padding: 2}}>
                  Secondary Action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
  </>
  )
}

export default HoMe