import React, { useRef } from 'react'
import { auth } from '../../firebase'
import { ref } from 'firebase/storage';

const HoMe = () => {

  const form = useRef();

  const submitProfile = (e) => {
    e.preventDefault(); 

    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];
    
    const storageRef = ref();
    
  }

  return (
    <div className='dashboard'>
        <form ref={form} onSubmit={submitProfile}>
          <p><input type='text' placeholder='name' /></p>
          <p><textarea placeholder='description'></textarea></p>
          <p><input type='text' placeholder='Url' /></p>
          <p><input type='file' placeholder='Image' /></p>
          <button type='submit'>submit</button>
          <button onClick={() => auth.signOut()}>Sign out</button>
        </form>
    </div>
  )
}

export default HoMe