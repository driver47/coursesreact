import React from "react";
import HeroBasic from "../components/HeroBasic";
import "../components/styles/CourseList.css";
import CoursesList from "../components/CoursesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";  
import { Link } from "react-router-dom";
import api from '../api'; 


class Courses extends React.Component {
  
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    
    this.setState({
      loading: true,
      error: null
    })

    try {

      const data = await api.courses.list();
      this.setState({
        loading: false,
        data: data
       })

    } 
    catch (error) {

      this.setState({
        loading: false,
        error: error
       })

    }

  };
  


  render() {

    if(this.state.loading === true){
      return <PageLoading />; 
    }

    if(this.state.error){
      return <PageError error={this.state.error} />; 
    }


    return (
      <React.Fragment>
        <main>
          <HeroBasic />

          
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">It's the way</h1>
                  <p className="lead text-muted">
                    These courses have been of great help in my growth as a
                    professional.
                  </p>

                  <Link to="/courses/new" className="btn btn-info my-2">
                    New Course
                  </Link>
                </div>
              </div>
            </section>


            <div className="album py-5 bg-light">

            <div className="container">

          

              <CoursesList courses={this.state.data} />

    

            </div>

            </div>



        </main>
      </React.Fragment>
    );
  }
}
export default Courses;
