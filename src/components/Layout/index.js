// tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';


import './Layout.scss'

function Layout() {
    return ( 
        <div className='App'>
            <Tippy>
                <Sidebar />
            </Tippy>

            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    );
}

export default Layout;