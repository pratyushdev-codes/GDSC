import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light" style={{ }}>
        <div className="container">
          <a href="/" className="navbar-brand" style={{ color: "black" }}>
            <img src='./images/logo2.png' style={{ height: "35px", width: "35px", borderRadius: "50px", boxShadow: "0 2px 4px rgba(0,0,0,0.5)" }} alt="Logo" />&nbsp;
            &nbsp;|&nbsp; VIT Bhopal
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3"><a className="nav-link" style={{ color: "Grey" }}>Home</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ color: "Grey" }}>About</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ color: "Grey" }}>Team</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ color: "Grey" }}>Images</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ color: "Grey" }}>Resources</a></li>
            </ul>
            <div className="ms-auto">
              <button type="button" className="btn btn" style={{ backgroundColor: "#65A0FB", borderRadius: "20px", color: "white" }}>+ Submit</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/"><img src='./images/facebook.png' style={{ height: "35px", width: "35px", borderRadius: "50px", boxShadow: "0 2px 4px rgba(0,0,0,0.8)" }} alt="Facebook Icon" /></a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/"><img src='./images/gmail.webp' style={{ height: "35px", width: "35px", borderRadius: "50px", boxShadow: "0 2px 4px rgba(0,0,0,0.5)" }} alt="Gmail Icon" /></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
