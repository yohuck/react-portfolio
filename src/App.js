// import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero'
import Projects from './components/Projects';
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"






export default function App() {
  return (
    <div>

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
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path='/' element={<Hero />}></Route>
      </Routes>
      <Routes>
        <Route path='/work' element={<Projects />}></Route>
      </Routes>

    </Router>
    </div>
  );
}

