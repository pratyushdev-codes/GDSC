import React from 'react';

function Pagination() {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ padding: '10px', width:"70%" , marginLeft:"50px"}}>
      <div className="mb-2 mb-md-0">
        Discover all Events
      </div>

      <div className="text-center mb-2 mb-md-0">
        <button type="button" className="btn btn" style={{backgroundColor:"#F5F6F6", borderRadius:"20px", borderColor:"black"}}>
          Next Page
        </button>
      </div>

      <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
