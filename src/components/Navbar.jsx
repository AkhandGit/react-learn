import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>      
        <nav className='navbar'>
        <h2 className='nav-main'>React-Learning</h2>
        <div className='nav-links'>
            <h4 className='nav-text'>About</h4>
            <h4 className='nav-text'>Contact</h4>
            <h4 className='nav-text'>Services</h4>
            <h4 className='nav-text'>Your Account</h4>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
