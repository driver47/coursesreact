import React from "react";
import Course from "../components/Course";
import CourseForm from "../components/CourseForm"; 
import HeroBasic from "../components/HeroBasic";

class CourseAdd extends React.Component {
   
  state = { form: {
    courseName: '',
    courseCampus: '',
    courseWebDir: '',
    courseDuration: '',
    courseLogo: '',
  } };

  handleChange = e => {
   
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <HeroBasic />

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Course
                courseName={this.state.form.courseName}
                courseCampus={this.state.form.courseCampus}
                courseWebDir={this.state.form.courseWebDir}
                courseDuration={this.state.form.courseDuration}
                courseLogo="//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/170px-Sena_Colombia_logo.svg.png"
              />
            </div>

            <div className="col-6">
                <CourseForm 
                onChange={this.handleChange} 
                formValues={this.state.form}/>
            </div>








          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CourseAdd;
