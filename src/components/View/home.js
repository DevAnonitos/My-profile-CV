import React, { useRef } from 'react'
import { auth, db, storage } from '../../firebase'

import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, Button, CardMedia } from '@mui/material'
import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}




const HoMe = () => {

  return (
  <>
    <AppBar position='relative' sx={{marginLeft: 10, display: 'flex', justifyContent: 'space-between'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant="h2" color="initial">
          My Current Projects
        </Typography>
        <Avatar {...stringAvatar('Kent Dodds')} sx={{marginLeft: 2}} />
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
            <Grid container spacing={2} justifyContent='center' sx={{marginBottom: 4}}>
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
      <Container maxWidth='md'>
        <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
          <Grid item sx={{padding: '20px 0'}} xs={12} sm={6}>
            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia
                sx={{paddingTop: '56.25%'}}
                image='https://th.bing.com/th/id/OIP.miyD2HqmD664oIm7qk4lLgHaD4?pid=ImgDet&rs=1'
                title='image title'
              />
              <CardContent sx={{flexGrow: 1}}>
                <Typography gutterBottom variant='h4' className='headingCard'>
                  Heading
                </Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  <a href="https://nguyenbao23131.github.io/Manage_landing_page/" target={'blank'}>View</a>
                </Button>
                <Button size='small' color='primary'>Repositories</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sx={{padding: '20px 0'}} xs={12} sm={6}>
            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia
                sx={{paddingTop: '56.25%'}}
                image='https://th.bing.com/th/id/OIP.miyD2HqmD664oIm7qk4lLgHaD4?pid=ImgDet&rs=1'
                title='image title'
              />
              <CardContent sx={{flexGrow: 1}}>
                <Typography gutterBottom variant='h4' className='headingCard'>
                  Space X
                </Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  <a href="https://new-space-x.vercel.app/" target={'blank'}>View</a>
                </Button>
                <Button size='small' color='primary'>Repositories</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  </>
  )
}

export default HoMe