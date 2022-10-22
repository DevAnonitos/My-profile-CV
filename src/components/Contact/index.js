import React, {useState, useEffect} from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1 className='main-title'>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15} 
                    />
                </h1>
                <p className='main-description'>
                    I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li className='half'>
                                <input type="text" name="subject" placeholder='Subject' required />
                            </li>
                            <li className='half'>
                               <textarea name="message" placeholder='Message' required>

                               </textarea>
                            </li>
                            <li className='half'>
                                <input type="submit" className='flat-button' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        {/* Loader */}
        <Loader type='pacman' />
    </>
  )
}

export default Contact