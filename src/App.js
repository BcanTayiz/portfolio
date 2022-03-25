import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

import Navigation from './components/Navigation/Navigation'

import Project1 from './pages/projects/project1/Project1';
import Project2 from './pages/projects/project2/Project2';
import Project3 from './pages/projects/project3/Project3';

import Footer from './components/Footer/Footer'


export default function App() {
  return (
    <Router>
      <div>
        <Navigation/>

        <Routes>
            <Route exact path="/portfolio/" element={<Home />}/>
            <Route  path="/portfolio/about" element={<About />}/>
            <Route  path="/portfolio/projects" element={<Projects />}/>
            <Route  path="/portfolio/contact" element={<Contact />}/>
            <Route  path="/portfolio/project1" element={<Project1 />}/>
            <Route  path="/portfolio/project2" element={<Project2 />}/>
            <Route  path="/portfolio/project3" element={<Project3 />}/>
        </Routes>

        <Footer/>
      </div>
  </Router>
  );
}