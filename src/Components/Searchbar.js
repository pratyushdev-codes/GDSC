import React from 'react';

function Searchbar() {
  return (
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: "50%", borderRadius:"20px", backgroundColor:"#FFFFFF", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <button type="button" className="btn" style={{borderColor:"#7E7E7E", borderRadius:"20px"}}>Search Past Events</button>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Info Session</a></li>
                  <li><a className="dropdown-item" href="#">Techathon </a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Workshop</a></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="text" style={{borderRadius:"20px", borderColor:"#F5F6F6"}} placeholder="Search Events" aria-label="Search" />
              <button className="btn btn" type="submit" style={{borderRadius:"20px"}}>&#x1F50D;</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Searchbar;
