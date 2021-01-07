import React from "react";
import "./styles/Course.css";

class CoursesList extends React.Component {
  render() {
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
