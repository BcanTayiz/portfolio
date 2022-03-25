import React from 'react'

import Footer from '../../components/Footer/Footer'

import './Home.css'

export default function Home() {
  return (
    <>
    <div className='container'>


      <div className='section_Parts'>
        <section className='main' >
            <h2 className='h2_title'>Welcome to Personal Site of Barış Can Tayiz</h2>
            <ul className='list_ul' >
              <li className='text'><span>Projects:</span> This page is about my projects technologies by javascript</li>
              <li  className='text'><span>About:</span> This page is about myself and my story</li>
              <li  className='text'><span>Contact:</span> For freelance and other services contact me from here.</li>
            </ul>
            <img className='profil_photo'   src="https://res.cloudinary.com/jerrick/image/upload/v1592662535/5eee1a075cd2e3001c4803ed.jpg" />
        </section>

      </div>
        
    </div>

    </>

  )
}
