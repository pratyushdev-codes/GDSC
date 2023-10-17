import React from 'react';

function Events() {
  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "20rem" , borderRadius:"20px", backgroundColor:"#F5F6F6"}}>
            <img src="./images/1.jpeg" className="card-img-top" alt="..." style={{ margin: "10px" , width:"300px", height:"250px", borderRadius:"20px"}} />
            <div className="card-body">
              <h5 className="card-title">Info Session</h5>
              <p className="card-text">Having had a successful last tenure, we are exhilarated to begin with our next tenure filled with learning and inspiration. </p>
         
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "20rem" , borderRadius:"20px" , backgroundColor:"#F5F6F6"}}>
            <img src="./images/2.gif" className="card-img-top" alt="..."  style={{ margin: "10px" , width:"300px", height:"250px", borderRadius:"20px"}}/>
            <div className="card-body">
              <h5 className="card-title">Techathon</h5>
              <p className="card-text">A 3 day-long event where we will have multiple sessions with an aim of giving the students exposure to specific tech tools.</p>
           
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "20rem" , borderRadius:"20px" , backgroundColor:"#F5F6F6"}}>
            <img src="./images/3.gif" className="card-img-top" alt="..."  style={{ margin: "10px" , width:"300px", height:"250px", borderRadius:"20px"}}/>
            <div className="card-body">
              <h5 className="card-title">Workshop</h5>
              <p className="card-text">A 4-day long event series for people who are new to development and provides an opportunity to learn about emerging technology.</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events;
