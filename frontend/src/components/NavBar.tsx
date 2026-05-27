import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const NavBar: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="navbar container">
        <Link id="name" className="alignable pull-left" to="/">
          ~YH~
        </Link>

        <ul id="navlist" className="alignable pull-right navbar-ul">
          <li className="alignable pull-left nav-list">
            <Link to="/projects">Projects</Link>
          </li>

          <li className="alignable pull-left nav-list">
            <Link to="/research">Research</Link>
          </li>

          <li className="alignable pull-left nav-list">
            <Link to="/writing">Writing</Link>
          </li>

          <li className="alignable pull-left nav-list">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
