import React from "react";
import "./styles/Course.css";
import { Link } from "react-router-dom"; 

class CoursesList extends React.Component {
  render() {

    if (this.props.courses.length === 0){
      return (
        <div>
          <h3>No Courses were found</h3>
          <Link className="btn btn-primary" to="/courses/new">
            Create New Course
          </Link>
        </div>
      )
    }
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {this.props.courses.map((course) => {
          return (
            <div key={course.id} className="col">
              <div className="card shadow-sm m-2">
                <img
                  src={course.courseLogo}
                  className="bd-placeholder-img card-img-top"
                  alt="images"
                />

                <div className="text-white text-center bg-primary card-body">
                  <h5>{course.courseName}</h5>
                  <p className="text-success"><em>{course.courseCampus} - {course.courseDuration}</em></p>
                </div>

                <div className="card-footer text-center text-white bg-info">
                  {course.courseWebDir}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CoursesList;
