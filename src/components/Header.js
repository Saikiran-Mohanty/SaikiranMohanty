import React from 'react';
import logo from '../name.png';
// import Typed from 'react-typed';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <>
<div className="hero">
<nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
            <a className="navbar-brand logo" href="#"><img src={logo} alt="" className="logo"/></a>
  <div className="container-fluid d-block">
 
    <button className="navbar-toggler btn-sm " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">ABOUT</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link" href="#service">SERVICES</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Projects</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">EXPERIENCE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">CONTACT ME</a>
        </li>
        
      </ul>
      
    </div>
  </div>
            </div>
</nav>



{/* +++++++++++++++++++++++++++++++++++++Header++++++++++++++++++++++++++++++++++++ */}
        <div className="header-wrapper">
            <div className="main-info">
                <h1>SAIKIRAN MOHANTY</h1>
                {/* <Typed className="typed-text" 
                strings={["Web Designer", "Web Developer", "Marketing Analyst", "Frontend developer"]} typeSpeed={40} backSpeed={60}
                loop/> */}
                 <ReactTypingEffect className="typed-text" 
        text={["Web Developer", "UI/UX Designer", "Marketing Analyst", "Psychic Entertainer"]} speed={40} eraseSpeed={60}
        typingDelay={200} eraseDelay={1000}
      />
            </div>
        </div>
        </div>
        </>
    )
}

export default Header
