import React, { useRef } from 'react'
import { auth, db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

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
    <div className='dashboard'>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        </Stack>
        <button className='Logout-btn' onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default HoMe