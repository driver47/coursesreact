import React from "react";
import "./styles/Course.css";
import { Link } from "react-router-dom"; 


function useSearchCourses(courses) { 
  const [ query, setQuery ] = React.useState('');
  //filtro de busqueda por nombre y web
  // usamos React.useMemo para guardar una memoria de la busqueda para que sea mas rapido 
  const [ filteredCourses, setFilteredCourses ] = React.useState(courses); 

  React.useMemo( () => {
    const result = courses.filter(course => {
    return `${course.courseName} ${course.courseWebDir}`.toLowerCase().includes(query.toLowerCase());
  });

  setFilteredCourses(result)

 }, [courses, query ]);

 return { query, setQuery, filteredCourses}
}

function CoursesList (props) {
    
  const courses = props.courses; 

  const { query, setQuery, filteredCourses} = useSearchCourses(courses); 

  //Creamos nuestro hook para buscar 

    if (filteredCourses.length === 0){
      return (
        <div>
        <div className="form-group search">
        <label>Filter Courses</label>
        <input 
         type="text" 
         className="form-control"
         value={query}
         onChange={e => {
           setQuery(e.target.value)
         }}
        />
       </div>

        <div>
          <h3>No Courses were found</h3>
          <Link className="btn btn-primary" to="/courses/new">
            Create New Course
          </Link>
        </div>
        </div>
      )
    }

    return (

      <div>
      
       <div className="form-group search">
       <label>Filter Courses</label>
       <input 
        type="text" 
        className="form-control"
        value={query}
        onChange={e => {
          setQuery(e.target.value)
        }}
       />
      </div>
      

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


        {filteredCourses.map((course) => {
          return (
            <div key={course.id} className="col">
              
              <div className="card shadow-sm m-2">
                <img
                  src={course.courseLogo}
                  className="bd-placeholder-img card-img-top"
                  alt="images"
                />

                <div className="text-white bg-primary card-body">
               <Link className="text-reset text-decoration-none text-center" to={`/courses/${course.id}`}>
                  <h6>{course.courseName}</h6>
               </Link>
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

      </div>
    );
  }

export default CoursesList;
