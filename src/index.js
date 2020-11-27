import React from 'react';  
import ReactDom from 'react-dom';  
import "./components/styles/bootstrap.min.css"; //thema https://bootswatch.com/flatly/

import Course from './components/Course';


const container = document.getElementById('app'); 


ReactDom.render(<Course
    courseName = "La Administración Básica en la Empresa"
    courseCampus = "SENA"
    courseWebDir = "www.sena.edu.co"
    courseDuration = "Duración 40horas"
    courseLogo = "//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/170px-Sena_Colombia_logo.svg.png"
    />,
     container
    ); 

