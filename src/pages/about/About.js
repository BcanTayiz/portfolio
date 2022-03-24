import React from 'react'

import './About.css'
import Footer from '../../components/Footer/Footer'
import { BsFillCircleFill } from "react-icons/bs";

export default function About() {
  return (

    <>
    <div className='container'>
        <article className='articles' >
            <p className='text'><BsFillCircleFill/>   I was born at Burdur. Mainly, I am a local, in Istanbul, Turkish citizen.</p>
            <p className='text'><BsFillCircleFill/>   I started coding profesionally at 2015 with C# summer course in ITU24</p>
            <p className='text'><BsFillCircleFill/>   I graduated from Istanbul Technical University Management Engineering in 2017</p>
            <p className='text'><BsFillCircleFill/>   I also have a master's degree from MEF University with the topic of Big Data Engineering</p>
            <p className='text'></p>
        </article>

        
    </div>
      <Footer/>
    </>
  )
}
