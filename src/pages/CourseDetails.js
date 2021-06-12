import React from "react";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import Course from "../components/Course";
import { Link } from "react-router-dom"; 


class CourseDetails extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null})

        try {
            const data = await api.courses.read(
                this.props.match.params.courseId
            );
            this.setState({ loading: false, data: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }


    render() {
        
        //esta variable de tipo constante fue creada para resumir la linea this.state.data
        const coursedata = this.state.data;

        if(this.state.loading) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />
        }



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
                      <div><Link className="btn btn-secondary mb-4" to={`/courses/${coursedata.id}/edit`}>
                          <h5>Edit Course</h5>
                      </Link>
                      </div>

                      <div><button className="btn btn-danger">
                          <h5>Delete</h5>
                      </button>
                      </div>   
                  </div>
              </div>

          </div>

          </div>
          
        );
        
        
    }
}

export default CourseDetails; 