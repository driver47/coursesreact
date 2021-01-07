import React from "react";
import "./styles/Course.css";
import logoDev from "../images/diploma.svg";

class Course extends React.Component {
  render() {
    return (
      <div className="Course">
        <div className="Course__header">
          <img src={logoDev} className="Course__ImgTitle" alt="images" />
          <div className="Course__title">
            <h3>Course</h3>
          </div>
        </div>

        <div className="Course__section-name">
          <img
            className="Course__logo"
            src={this.props.courseLogo}
            alt="img_profile"
          />
          <h4>{this.props.courseName}</h4>
        </div>

        <div className="Course__section-info">
          <h4>Institution {this.props.courseCampus}</h4>
          <div>{this.props.courseWebDir}</div>
        </div>

        <div className="Course__footer">{this.props.courseDuration}</div>
      </div>
    );
  }
}
export default Course;
