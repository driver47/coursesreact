import React from "react";
import Course from "../components/Course";
import CourseForm from "../components/CourseForm"; 
import HeroBasic from "../components/HeroBasic";
import api from "../api"; 
import PageLoading from "../components/PageLoading";


class CourseEdit extends React.Component {
   
  state = { 
    loading: true,
    error: null,
    form: {
    courseName: '',
    courseCampus: '',
    courseWebDir: '',
    courseDuration: '',
    courseLogo: '',
  } };

  componentDidMount() { //Cuando el componente se monte 
    this.fetchData()  // voy a empezar a carhar los datos con esta funcion fechData()
  }

  //Definimos la funcion fechData cuando pedimos datos la funcion debe ser async asincrona 
  fetchData = async e => {
    this.setState({ loading: true, error: null }); // comensamos con nuestro patron de peticion
    
    // intentamos hacer la peticion al api
    try {
      const data = await api.courses.read(  //read toma el id del curso que nos interesa 
        this.props.match.params.courseId  //vamos a leer el id por medio de un prop llamado match
      )                                  // cada una de las variables vamos a accederlas con el 
                                         // objeto params del courseId

      this.setState({ loading: false, form: data }); // si optenemos los datos los vamos a guardar 
                                                    // dentro del form 
    } catch (error) { // en caso de que ocurra un error lo vamos a menejar 
      this.setState({ loading: false, error: error}); // detenemos el loading y desplegamos el error 
    }

  };

  handleChange = e => {
   
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null }) // inicializamos el loading con error null por que apenas estamos enviando los datos

    try {
      await api.courses.update(this.props.match.params.courseId,this.state.form)
      this.setState({ loading: false }); // detenemos el loading y los datos no los vamos a usar 

      this.props.history.push('/courses');

    } catch (error) {
      this.setState({ loading: false, error: error }) // detenemos el loading y mostramos el error
    }
  }

  render() {
     
    if(this.state.loading){
      return <PageLoading />;
    }



    return (
      <React.Fragment>
        <HeroBasic />

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Course
                courseName={this.state.form.courseName || 'COURSE_NAME'}
                courseCampus={this.state.form.courseCampus || 'COURSE_CAMPUS'}
                courseWebDir={this.state.form.courseWebDir || 'COURSE_WEB'}
                courseDuration={this.state.form.courseDuration || 'COURSE_DURATION'}
                courseLogo={this.state.form.courseLogo || '//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/170px-Sena_Colombia_logo.svg.png'}
              />
            </div>

            <div className="col-6">
                <h1>Edit Course</h1>
                <CourseForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
                />
               
            </div>








          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CourseEdit;
