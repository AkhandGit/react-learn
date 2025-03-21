import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>      
        <nav className='navbar'>
          <h2 className='nav-main'>React-Learning</h2>
          <div className='nav-links'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/product'>Product</Link>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
