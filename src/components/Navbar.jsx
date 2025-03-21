import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>      
        <nav className='navbar'>
        <h2 className='nav-main'>React-Learning</h2>
        <div className='nav-links'>
            <a href='/' className='Home'>Home</a>
            <a href="/about" className='About'>About</a>
            <a href="/contact" className='Contact'>Contact</a>
            <a href="/product" className='Product'>Product</a>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
