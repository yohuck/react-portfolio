// import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero'
import Projects from './components/Projects';
import Skills from './components/Skills'
import Contact from './components/Contact';
import Footer from './components/Footer'

import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"







export default function App() {
  return (
    <div className='app'>
    <Router>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    
      <Routes>
        <Route path='/' element={<Hero />}></Route>
      </Routes>
      <Routes>
        <Route path='/work' element={<Projects />}></Route>
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />

    </Router>
    </div>
  );
}

