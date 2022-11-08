import './Logo.scss';

import Logo from '../../../assets/images/logo-s.png'

import React from 'react'

const Logos = () => {
  return (
    <div className='logo-container'>
        <img className='solid-logo' src={Logo} alt='logo' />
    </div>
  )
}

export default Logos