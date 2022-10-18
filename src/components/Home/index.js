
import { Link } from 'react-router-dom';

// style components
import './Home.scss'

function Home() {
    return ( 
        <div className='container home-page'>
            <div className='text-zone'>
                <h1 className='main-title'>Hi, <br/>I'm
                    BaoNguyen
                    <br />
                    web developer
                </h1>
                <h2 className='sub-title'>
                    Fullstack developer / Javascript Expert / Blogger
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;