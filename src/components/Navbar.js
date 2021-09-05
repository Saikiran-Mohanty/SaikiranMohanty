import React from 'react'
import logo from '../logo.png'
const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-tranparant">
            <div className="container">
                
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#"><h3>Saikiran</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link" href="#">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">EXPERIENCE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT US</a>
        </li>
        
      </ul>
      
    </div>
  </div>
            </div>
</nav>
    )
}

export default navbar
