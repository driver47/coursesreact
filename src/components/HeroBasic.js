import React from "react";
import { Link } from 'react-router-dom'; 

class HeroBasic extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">My Courses</h1>
        <p className="lead">These are some courses that I have taken..</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/" role="button">
            Learn more
          </Link>
        </p>
      </div>
    );
  }
}

export default HeroBasic;
