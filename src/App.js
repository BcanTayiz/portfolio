import './App.css';

import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

import Navigation from './components/Navigation/Navigation'

import Project1 from './pages/project1/Project1';
import Project2 from './pages/project2/Project2';
import Project3 from './pages/project3/Project3';
import Project4 from './pages/project4/Project4';
import Project5 from './pages/project5/Project5';
import Project6 from './pages/project6/Project6';
import Project7 from './pages/project7/Project7';

import Footer from './components/Footer/Footer'


export default function App() {
  return (
    <Router>
      <div>
        <Navigation/>

        <Routes>
            <Route  path="/" element={<Home />}/> 
            <Route exact path="/portfolio" element={<Home />}/>
            <Route  path="/portfolio/about" element={<About />}/>
            <Route  path="/portfolio/projects" element={<Projects />}/>
            <Route  path="/portfolio/contact" element={<Contact />}/>
            <Route  path="/portfolio/project1" element={<Project1 />}/>
            <Route  path="/portfolio/project2" element={<Project2 />}/>
            <Route  path="/portfolio/project3" element={<Project3 />}/>
            <Route  path="/portfolio/project4" element={<Project4 />}/>
            <Route  path="/portfolio/project5" element={<Project5 />}/>
            <Route  path="/portfolio/project6" element={<Project6 />}/>
            <Route  path="/portfolio/project7" element={<Project7 />}/>
        </Routes>

        <Footer/>
      </div>
  </Router>
  );
}