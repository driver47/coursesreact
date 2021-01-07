import React from "react";
import { Link } from 'react-router-dom'; 
import "./styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';





class Navbar extends React.Component {
  
  

  render() {


    const element = <FontAwesomeIcon icon={faBars} />


    return (

      <nav className="navbar navbar-expand-lg  bg-new fixed-top">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
   <i>{element}</i>
  </button>
  <Link className="navbar-brand" to="/">Daniel Campo</Link>

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/courses">Courses</Link>
        
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/courses/new">New Courses</Link>
      </li>
    
    </ul>
  </div>
</nav>













    
    );
  }
}

export default Navbar;
