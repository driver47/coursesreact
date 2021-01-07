import React from "react";
import HeroBasic from "../components/HeroBasic";
import "../components/styles/CourseList.css";
import CoursesList from "../components/CoursesList";
import { Link } from "react-router-dom";
import Certificado1 from "../images/certificados/ingles1.jpg";
import Certificado2 from "../images/certificados/ingles2.jpg";
import Certificado3 from "../images/certificados/ingles3.jpg";

class Courses extends React.Component {
  

  constructor(props) {
    super(props);
    console.log('1.Constructor()');

    this.state = {
      data: []
    };

  }

  componentDidMount() {
    console.log('3.ComponentDidMount');
    
    // esta funcion en 3 segundos va actualizar el estado 
    this.timeoutId = setTimeout(() => { 
    this.setState({
      data: [
        {
          id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
          courseName: "LAN Networks Course",
          courseCampus: "UCC",
          courseWebDir: "www.ucc.edu.co",
          courseDuration: "40hours",
          courseLogo: Certificado1,
        },
        {
          id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
          courseName: "Computer Maintenance",
          courseCampus: "UCC",
          courseWebDir: "www.ucc.edu.co",
          courseDuration: "40hours",
          courseLogo: Certificado2,
        },
        {
          id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
          courseName: "NTIC - Applied to Training",
          courseCampus: "SENA",
          courseWebDir: "www.sena.edu.co",
          courseDuration: "40hours",
          courseLogo: Certificado3,
        },
        {
          id: "a9748581-dfdc-4a78-930d-5205a2ccef48",
          courseName: "Introduction to Pedagogical Processes",
          courseCampus: "SENA",
          courseWebDir: "www.sena.edu.co",
          courseDuration: "40hours",
          courseLogo: Certificado2,
        },
        {
          id: "1921a734-cc05-4f71-a677-ffe38dda6958",
          courseName: "NTICS - Administration Process",
          courseCampus: "SENA",
          courseWebDir: "www.sena.edu.co",
          courseDuration: "40hours",
          courseLogo: Certificado3,
        },
        {
          id: "3629db36-14f9-4f24-b139-200f3a1b9af7",
          courseName: "JavaScript Algorithms and Data Structures",
          courseCampus: "Free Code Camp",
          courseWebDir: "freeCodeCamp.org",
          courseDuration: "300hours",
          courseLogo: Certificado1,
        },
        {
          id: "8c734836-1f7a-4493-b903-37db30fc7224",
          courseName: "Git and GitHub",
          courseCampus: "Platzy",
          courseWebDir: "platzi.com",
          courseDuration: "15hours",
          courseLogo:
            "https://www.ucc.edu.co/_catalogs/masterpage/eResponsive/img/logo-ucc.png",
        },
      ],

    });

    },1000);

  
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5.componentDidUpdate()');
    console.log({
      prevProps: prevProps , prevState: prevState
    }); 

    console.log({
      props: this.props,
      state: this.state, 
    })
  }

  componentWillUnmount() {
    console.log('6. componentWilUnmount'); 

    clearTimeout(this.timeoutId); 
  }


  render() {

    console.log('2/4.Render()'); 

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
