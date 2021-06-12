import React from 'react'; 
import { BrowserRouter , Switch, Route} from 'react-router-dom';

import Layout from './layout'; 
import CourseAdd from '../pages/CourseAdd';
import CourseEdit from '../pages/CourseEdit';
import Courses from '../pages/Courses'; 
import NotFount from '../pages/NotFount';
import BeginHome from '../pages/BeginHome'; 
import CourseDetails from '../pages/CourseDetails';



function App() {

    return (
        <BrowserRouter>
        <Layout>
         <Switch>
         <Route exact path="/" component={BeginHome} />
         <Route exact path="/courses" component={Courses} />
         <Route exact path="/courses/new" component={CourseAdd} />
         <Route exact path="/courses/:courseId/edit" component={CourseEdit} />
         <Route exact path="/courses/:courseId" component={CourseDetails} />
         <Route component={NotFount} /> 
         </Switch>
        </Layout>
        </BrowserRouter>
    ); 

}

export default App; 

