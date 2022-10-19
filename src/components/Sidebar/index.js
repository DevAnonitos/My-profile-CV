
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';


import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'

// props
import React, { forwardRef} from 'react'

// Images
import Logo from '../../assets/images/logo-main.png'


const Sidebar = forwardRef((props, ref) =>{
    return ( 
        <div className='nav-bar'>

            {/* Logo and sub title */}
            <Link className='logo' to='/'>
                <Tippy
                    zIndex={[100]}
                    content="Logo"
                    placement='right'
                    delay={[1]}
                >
                    <img src={Logo} alt="Logo" />
                </Tippy>
            </Link>
            <div>
                <h4 className='logo-title'>BaoNg.dev</h4>
            </div>

            {/* navbar icons */}
            <nav>
                {/* Components */}
                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    to='/'
                >
                        <FontAwesomeIcon className='u--zoomIn' icon={faHome} />
                </NavLink>

                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    className='about-link' 
                    to='/about'
                >
                        <FontAwesomeIcon className='u--zoomIn' icon={faUser} />
                </NavLink>

                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    className="contact-link" 
                    to='/contact'>
                        <FontAwesomeIcon className='u--zoomIn' icon={faEnvelope} />
                </NavLink>

                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    className="setting-link" 
                    to='/setting'>
                        <FontAwesomeIcon className='u--zoomIn' icon={faGear} />
                </NavLink>
            </nav>

            {/* ================URL LINK social======================== */}
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/NguyenBao23131"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/baobaowl/"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/baonguyenno1412/"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
            </ul>

        </div>
    );
});

export default Sidebar;