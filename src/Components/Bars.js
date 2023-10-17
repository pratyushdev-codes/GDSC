import React from 'react';

function Bars() {
  return (
    <div className="d-flex justify-content-between align-items-center" style={{ padding: '10px', width:"70%" , marginLeft:"50px"}}>
      <div>
        <button type="button" className="btn" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '20px' }}>Latest</button> &nbsp; &nbsp;
        <button type="button" className="btn" style={{ borderRadius: '20px', backgroundColor: 'white' }}>Popular</button>&nbsp; &nbsp;
        <span className="d-none d-md-inline"> | </span> &nbsp; &nbsp;
        <span className="d-none d-md-inline" style={{color:"orange"}}> Premium </span>  &nbsp; &nbsp;
        <span className="d-none d-md-inline" style={{color:"blue"}}> Free </span>
      </div>

     
    </div>
  );
}

export default Bars;
