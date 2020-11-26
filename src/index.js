import React from 'react';  
import ReactDom from 'react-dom';  
import "./components/styles/bootstrap.min.css"; //thema https://bootswatch.com/flatly/

import Profile from './components/Profile';


const container = document.getElementById('app'); 


ReactDom.render(<Profile />, container); 

