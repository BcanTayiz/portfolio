import React from 'react'

import Footer from '../../components/Footer/Footer'
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom'

import './Projects.css'

export default function Projects() {
  return (
    <>
    <div className='container'>
        <article className='articles' >
            <h2 className='h2_title'>See below the projects</h2>
        </article>

        <section className='projects'>
        <Card className='card_container'>
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              Project 1, will be built soon
            </Card.Text>
            <Link to='/portfolio/project1'>Go Project 1</Link>
          </Card.Body>
        </Card>

        <Card className='card_container'>
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              Project 2, will be built soon
            </Card.Text>
            <Link to='/portfolio/project2'>Go Project 2</Link>
          </Card.Body>
        </Card>

        <Card className='card_container'>
          <Card.Body>
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
              Project 3, will be built soon
            </Card.Text>
            <Link to='/portfolio/project3'>Go Project 3</Link>
          </Card.Body>
        </Card>

        
        </section>
        
    </div>

    <Footer/>
    </>
  )
}
