import React from 'react'; 
/*import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";*/

class CourseForm extends React.Component {

    state = {}; 

  /*  state = {
        courseDuration: new Date()
    }

    onChange=courseDuration=>{
        this.setState({courseDuration: courseDuration});
    }
    
  */

  /*  handleChange = e => {

         this.setState({
            [e.target.name]: e.target.value,
         }
         )

    }; */

    handleClick = e => {
        console.log("Button was clicked for me bro"); 
    };

   /* handleSubmit = e => {
        e.preventDefault(); // de esta forma detengo el formulario 
        console.log("Form was stoped"); 
        console.log(this.state);
    };*/

    render(){
        return (
            <div>

                <h1>New Course</h1>

                <form onSubmit={this.props.onSubmit}>

                    <div className="form-group">
                        <label>Name</label>
                        <input 
                         onChange={this.props.onChange}
                         className="form-control" 
                         type="text" 
                         name="courseName"
                         value={this.props.formValues.courseName}
                         />
                    </div>

                    <div className="form-group">
                        <label>Campus</label>
                        <input 
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="courseCampus"
                        value={this.props.formValues.courseCampus}
                        />
                    </div>

                    <div className="form-group">
                        <label>Web</label>
                        <input 
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="courseWebDir"
                        value={this.props.formValues.courseWebDir}
                        />
                    </div>

                    <div className="form-group">
                        <label>Time</label>
                        <input 
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="courseDuration"
                        value={this.props.formValues.courseDuration}
                        />
                    </div>

                    <div className="form-group">
                        <label>Link Logo</label>
                        <input 
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="courseLogo"
                        value={this.props.formValues.courseLogo}
                        />
                    </div>


                    {/*<div className="form-group date" data-provide="datepicker">
                        <label>Duration</label>
                    <div><DatePicker onChange={this.onChange} name="courseDuration" className="form-control" selected={this.state.courseDuration} /></div>
                     </div>*/}

                  
                    
                    <button onClick={this.handleClick} className="btn btn-success">Create</button>


                </form>


            </div>
           

        )
    }
}

export default CourseForm; 