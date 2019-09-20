import React from "react";

const Navbar = () => {
  return (
    <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">GoogleReads</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Search</a></li>
        <li><a href="#">Saved</a></li>
      </ul>
    </div>
  </nav>
        );
    }
    
export default Navbar;