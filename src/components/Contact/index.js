// deps
import React, {useState, useEffect, useRef} from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

// components
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';


const Contact = () => {
    // logic handle <event></event>
    const [letterClass, setLetterClass] = useState('text-animate');
    const Form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_bm1pl4l',
            'template_p2agjx9',
            Form.current,
            '_7i3rPu-HPtohnGjj'
        )
        .then(
            () => {
               alert('Send successfully!')
               Window.location.reload(false)
            },
            () => {
                alert('Error send!!');
            }
        )
    }

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
                    <form ref={Form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                BaoNguyen,
                <br />
                VietNam
                <br />
                District 12, HoChiMinh city
            </div>
            {/*--------------------- MAP container---------------------- */}
            <div className='map-wrap'>
                <MapContainer center={[10.861940, 106.658890]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[10.861940, 106.658890]}>
                        <Popup>BaoNguyen lives here :) 
                            <br />
                            Make a channel :3
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

        {/* Loader */}
        <Loader type='pacman' />
    </>
  )
}

export default Contact