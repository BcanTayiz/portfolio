import React from 'react'
import {Link} from 'react-router-dom'

import './Navigation.css'


export default function Navigation() {
  return (
    <div className="navbar-container">
      <h1>
        <Link to='/' className='el'>Barış Can Tayiz's Personal Website</Link>
      </h1>
      <div className='navbar-arrows'>
        <img src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png" alt="" className='img' />
        <img src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png" alt=""  className='img'/>
        <img src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png" alt="" className='img' />
        <img src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png" alt=""  className='img'/>
      </div>
      <nav className='navbar'>
        <Link to="/" className='el'>Home</Link>
        <Link to="/projects" className='el'>Projects</Link>
        <Link to="/contact" className='el'>Contact</Link>
        <Link to="/about" className='el'>About</Link>
    </nav>
    </div>  
    
  )
}
