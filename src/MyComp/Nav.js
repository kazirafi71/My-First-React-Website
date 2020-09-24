import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <div className='container-fluid bg-light font_style'>
        <div className="col-10 mx-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand nav_font_size" to="/">Kazi Rafi</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink exact activeClassName="active_nav " className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      
      
      <li className="nav-item">
        <NavLink exact activeClassName="active_nav" className="nav-link" to="/service">Service</NavLink>
      </li>

      <li className="nav-item">
        <NavLink exact activeClassName="active_nav" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active_nav" className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>
</div>








        
        </>
    );
};

export default Nav;