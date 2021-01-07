import React from "react"; 
import LogoImage from "../images/manBlackMed.svg";
import "./styles/HeroHome.css";
import { Link } from 'react-router-dom';



class HeroHome extends React.Component {
    render() {
        return (
          <div className="homeHero text-center">
              <div className ="homeIntro">
                  <img src={LogoImage} alt="imgHome"/>
                  <h1> {'}'} DANIEL CAMPO </h1>
                  <Link className="btn btn-outline-light" to="/courses" role="button">
                   The Way {'>'} Contact   
                  </Link>
              </div>

          </div> 
        );
    }
}

export default HeroHome;