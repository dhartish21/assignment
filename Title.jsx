import React from 'react'

function Title() {
  return (
  <div>


    <form className="d-flex">
         <img src='pic7.png' alt='' width="150px" height="100px"/>
         <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit" >Search</button>

      
     
<nav>
<ul>
    

<div className="btn-group" role="group">
<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Your Location
</button>
<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
<li><a className="dropdown-item" href="#" /></li>
<li><a className="dropdown-item" href="#" /></li>
</ul>
</div>



  <li><a href='#'>Compare</a></li>
  <li><a href="#">Wishlist</a></li>
  <li><a href="#">Cart</a></li>
  <li><a href='#'>Account</a></li>

</ul>
</nav>

    </form>
    
</div>
  )
}

export default Title