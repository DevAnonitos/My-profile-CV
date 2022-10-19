import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './About.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1 className='main-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p className='main-description'>
                I'm studying HoChiMinh Open university in 2021. My major's computer science. A day by day, I always going on an up to date the latest technologies. In the near future, I will become a full stack developer from Zero to Hero.
            </p>
            <p className='main-description'>
                I'm a persistent, patient and hard-working person. I want to make a useful contribution to the community.
            </p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cube-spinner'>
                <div className='face1'>

                </div>
                <div className='face2'>

                </div>
                <div className='face3'>

                </div>
                <div className='face4'>

                </div>
                <div className='face5'>

                </div>
                <div className='face6'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About