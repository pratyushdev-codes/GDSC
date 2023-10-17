import React from 'react'

function Pagination() {
  return (
    <div className="d-flex justify-content-between align-items-center" style={{ padding: '10px', width:"70%" , marginLeft:"50px"}}>
    <div>
      Discover all Events
    </div>

    <div><center><button type="button" class="btn btn" style={{backgroundColor:"#F5F6F6", borderRadius:"20px", borderColor:"black"}}>Next Page </button></center></div>
<div>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>
   
  </div>
  )
}

export default Pagination