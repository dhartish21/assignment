import React from 'react';

const Navbar = () => {
  
  return (
<nav>


      <ul>
      

  
  

  <div className="btn-group" role="group">
  <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   Featured categories
  </button>
  <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
    <li><a className="dropdown-item" href="#" /></li>
    <li><a className="dropdown-item" href="#" /></li>
  </ul>
</div>



        <li><a href='#'>Cakes</a></li>
        <li><a href="#">Cofee&Tea</a></li>
        <li><a href="#">Petfood</a></li>
        <li><a href='#'>Vegetables</a></li>
     
      </ul>
    </nav>
  );
};

export default Navbar;