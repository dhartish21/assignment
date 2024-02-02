// Navbar.js
import React from 'react';

const Navbar = () => {
  
  return (
<nav>


      <ul>
      

  
  

  <div className="btn-group" role="group">
  <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Browse All categories
  </button>
  <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
    <li><a className="dropdown-item" href="#" /></li>
    <li><a className="dropdown-item" href="#" /></li>
  </ul>
</div>



        <li><a href='#'>Hotdeals</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>Vendor</a></li>
        <li><a href='#'>MegaMenu</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Pages</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


