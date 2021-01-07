import React from 'react'; 
import { BrowserRouter , Switch, Route} from 'react-router-dom';

import Layout from './layout'; 
import CourseAdd from '../pages/CourseAdd';
import Courses from '../pages/Courses'; 
import NotFount from '../pages/NotFount';
import BeginHome from '../pages/BeginHome'; 







function App() {

    return (
        <BrowserRouter>
        <Layout>
         <Switch>
         <Route exact path="/" component={BeginHome} />
         <Route exact path="/courses" component={Courses} />
         <Route exact path="/courses/new" component={CourseAdd} />
         <Route component={NotFount} /> 
         </Switch>
        </Layout>
        </BrowserRouter>
    ); 

}

export default App; 

