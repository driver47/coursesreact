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
        
        if(this.state.loading) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <CourseDetails coursedata={this.state.data} />
        );
        
    }
}

export default CourseDetailsContainer; 