import React from "react";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import CourseDetails from "./CourseDetails";


class CourseDetailsContainer extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
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

    //Funciones para Abrir y cerrar el Modal 

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true })
    }


    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }

    //Funcion para eliminar un curso 

    handleDeleteCourse = async e => {
        this.setState({loading:true, error: null })

        try {
            await api.courses.remove(this.props.match.params.courseId);
            this.setState({ loading: false });

            this.props.history.push('/courses')
        } catch (error) {
            this.setState({ loading: false, error: error})
        }
    }






    render() {
        
        if(this.state.loading) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <CourseDetails 
            onCloseModal={this.handleCloseModal} 
            onOpenModal={this.handleOpenModal} 
            modalIsOpen={this.state.modalIsOpen}
            onDeleteCourse={this.handleDeleteCourse}
            coursedata={this.state.data} />
        );
        
    }
}

export default CourseDetailsContainer; 