import React from 'react';  
import ReactDom from 'react-dom';  
import "./components/styles/bootstrap.min.css"; //thema https://bootswatch.com/flatly/
import "./components/styles/Hero.css";
import App from './components/App';




const container = document.getElementById('app'); 


ReactDom.render(<App />, container); 

