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


export default function App() {
  return (
    <Router>
      <div>
        <Navigation/>

        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/project1" element={<Project1 />}/>
            <Route exact path="/project2" element={<Project2 />}/>
            <Route exact path="/project3" element={<Project3 />}/>
        </Routes>
      </div>
  </Router>
  );
}