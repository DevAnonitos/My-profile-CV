
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';

// components
import Logos from './Logo';

// style components
import './Home.scss'

function Home() {
    // logic state
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['B', 'a', 'o', 'N', 'g', 'u', 'y', 'e', 'n'];
    const jobArray = ['w', 'e', 'b', 'd', 'e', 'v', 'e' ,'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return ( 
        <div className='container home-page'>
            <div className='text-zone'>
                {/*------------------- main title----------------- */}
                <h1 className='main-title'>
                    {/* title */}
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>

                <h2 className='sub-title'>
                    Fullstack developer 
                    / Javascript Expert 
                    / Blogger
                </h2>

                <Link to='/contact' className='flat-button'>
                    Contact me
                </Link>
            </div>
            <Logos />
        </div>
    );
}

export default Home;