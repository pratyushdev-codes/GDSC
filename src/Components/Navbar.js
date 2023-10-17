import React from 'react';

function Navbar() {
  return (
    <div>
      <div style={{ position: "fixed", width: "100%", zIndex: "9999" , marginTop:"0.1%"}}>
        <nav className="navbar navbar-expand-lg" style={{ color: "grey", margin: "0 auto", borderRadius: "40px", maxWidth: "54%", height: "55px", marginTop: "20px", fontFamily: "General Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif", fontStyle: "normal", fontWeight: "600", backgroundColor:"black",fontSize: "18px", lineHeight: "28px",boxShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
          <div className="container-fluid ">
            &nbsp; &nbsp;
            <a><img src='./images/logo2.png' style={{height:"35px", width:"35px", borderRadius:"50px", boxShadow: "0 2px 4px rgba(0,0,0,0.5)"}}/ ></a> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            <a className="navbar-brand" href="#" style={{ color: "white" , fontWeight:"bold"}}>GDSC VIT Bhopal </a>&nbsp; &nbsp;
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-1">
                  <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Home</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>About</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Resources </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Contact </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Images </a>
                </li>
              </ul>
              <a style={{marginLeft:"100px"}} ><img src='./images/facebook.png' style={{height:"35px", width:"35px", borderRadius:"50px", boxShadow: "0 2px 4px rgba(0,0,0,0.8)"}}/ ></a>
              <a style={{marginLeft:"15px"}} ><img src='./images/gmail.webp' style={{height:"35px", width:"35px", borderRadius:"50px", boxShadow: "0 2px 4px rgba(0,0,0,0.5)"}}/ ></a>
            </div>
          </div>
        </nav>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{marginTop:"1px"}}>
        <img src="./images/banner.png" className="img-fluid" alt="Banner" style={{width: "100%", height: "auto"}} />
      </div>
    </div>
  );
}

export default Navbar;
