import React from "react"; 
import Course from "../components/Course";
import { Link } from "react-router-dom"; 
import DeleteCourseModal from "../components/DeleteCourseModal";





function CourseDetails (props) {

    const coursedata = props.coursedata;
   

    return (
        <div>
        <div className="jumbotron">
          
          <h1 className="display-5">®</h1>
          <h1 className="display-5">{coursedata.courseName}</h1>
          <h3 className="display-6">{coursedata.courseWebDir}</h3>
          <p className="lead">¡Take This Course!</p>
          <p className="lead">
          </p>
        </div>

        <div className="container">

            <div className="row">
                <div className="col">
                  
                 <Course 
                 courseLogo={coursedata.courseLogo}
                 courseName={coursedata.courseName}
                 courseCampus={coursedata.courseCampus}
                 courseWebDir={coursedata.courseWebDir}
                 courseDuration={coursedata.courseDuration}
                 />

                </div>
                <div className="col">
                    <h2>Actions</h2>




                    <div>
                      
                        
                        
                    <Link className="btn btn-secondary mb-4" to={`/courses/${coursedata.id}/edit`}>
                        <h5>Edit Course</h5>
                    </Link>
                    </div>

                    <div><button onClick={props.onOpenModal} className="btn btn-danger"><h5>Delete</h5></button>
                   
                     <DeleteCourseModal 
                      isOpen={props.modalIsOpen} 
                      onClose={props.onCloseModal}
                      onDeleteCourse={props.onDeleteCourse}
                      />
                  
                    </div>   
                </div>
            </div>
        </div>
        </div>
    );
}

export default CourseDetails; 