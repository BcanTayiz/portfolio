import React from 'react'

import Footer from '../../components/Footer/Footer'
import Card from 'react-bootstrap/Card';

import project1Image from '../../assets/images/project1.png'
import project2Image from '../../assets/images/project2.png'

import {Link} from 'react-router-dom'

import './Projects.css'

export default function Projects() {
  return (
    <div className='mainContainer'>
    <div className='container'>
        <article className='articles' >
            <h2 className='h2_title'>See below the projects</h2>
        </article>

        <section className='projects'>
        <Card className='card_container'>
        <Card.Img variant="top" src={project1Image} className='imageElement'/>
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              Word Meaning Mathing game
            </Card.Text>
            <Link to='/portfolio/project1'>Go to Project 1</Link>
          </Card.Body>
        </Card>

        <Card className='card_container'>
        <Card.Img variant="top" src={project2Image} className='imageElement2'/>
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              Project 2, will be built soon
            </Card.Text>
            <Link to='/portfolio/project2'>Go to Project 2</Link>
          </Card.Body>
        </Card>

        <Card className='card_container'>
          <Card.Body>
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
              Project 3, will be built soon
            </Card.Text>
            <Link to='/portfolio/project3'>Go to Project 3</Link>
          </Card.Body>
        </Card>

        
        </section>
        
        
    </div>

    
    </div>
  )
}
