
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';


// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
// Images
import Logo from '../../assets/images/logo-main.png'


function Sidebar() {
    return ( 
        <div className='nav-bar'>

            {/* Logo and sub title */}
            <Link className='logo' to='/'>
                <img src={Logo} alt="Logo" />
            </Link>
            <div>
                <h4 className='logo-title'>BaoNg.dev</h4>
            </div>

            {/* navbar icons */}
            <nav>
                {/* Components */}
                <NavLink exact='true' activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className="contact-link" to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className="setting-link" to='/setting'>
                        <FontAwesomeIcon icon={faGear} />
                </NavLink>
            </nav>

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
}

export default Sidebar;