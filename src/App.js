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
import Footer from './components/Footer/Footer';

import Project1 from './pages/project1/Project1';
import Project2 from './pages/project2/Project2';
import Project3 from './pages/project3/Project3';
import Project4 from './pages/project4/Project4';
import Project5 from './pages/project5/Project5';
import Project6 from './pages/project6/Project6';
import Project7 from './pages/project7/Project7';
import Project8 from './pages/project8/Project8';
import Project9 from  './pages/project9/Project9';
import Project10 from './pages/project10/Project10';
import Project11 from './pages/project11/Project11';
import Project12 from './pages/project12/Project12';
import MemoryPage from './pages/project10/MemoryPage';


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
            <Route  path="/portfolio/project8" element={<Project8 />}/>
            <Route  path="/portfolio/project9" element={<Project9 />}/>
            <Route  path="/portfolio/project10" element={<Project10 />}/>
            <Route  path="/portfolio/project11" element={<Project11 />}/>
            <Route  path="/portfolio/memoryPage" element={<MemoryPage />}/>
            <Route path="/portfolio/project12"  element={<Project12 />}></Route>
        </Routes>

        <Footer/>
      </div>
  </Router>
  );
}