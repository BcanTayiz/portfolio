import React from 'react'

import {Link} from 'react-router-dom'
import './Footer.css'

import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='footer_Container'>
        
        <section className='footer_all'>
        <nav className='navbar_Section'>
          <Link to="/portfolio" className='el'>Home</Link>
          <Link to="/portfolio/projects" className='el'>Projects</Link>
          <Link to="/portfolio/contact" className='el'>Contact</Link>
          <Link to="/portfolio/about" className='el'>About</Link>
        </nav>
        <br className='block'/>
        <br className='block'/>
          <nav className='other_Navbar'>
            <h5>Social Media Links</h5>
            <a href="https://github.com/BcanTayiz"  target="_blank" className='el'><GoMarkGithub/></a>
            <a href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-tayiz-8523bb58" target="_blank" className='el'><BsLinkedin/></a>
          </nav>
        </section>
        <section className='origin'>
          <p> 2022 - Made by Barış Can Tayiz</p>
        </section>
       
    </div>
  )
}
