import React from 'react';
import "./styles/Profile.css";
import logoDev from '../images/diploma.svg';


class Profile extends React.Component {

    render() { 
     return <div className="Profile">

           <div className="Profile__header">
           <img src={logoDev} className="Profile__ImgTitle" alt="images"/>
           <div className="Profile__title">
               <h3>Curso</h3>
           </div>
           </div>

           <div className="Profile__section-name">
               <img  className="Profile__avatar" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/170px-Sena_Colombia_logo.svg.png" alt="img_profile"/>
               <h4>La Administración Básica en la Empresa</h4>
           </div>

           <div className="Profile__section-info">
               <h4>Institución SENA</h4>
               <div>www.sena.edu.co</div>
           </div>

           <div className="Profile__footer">
               Duración 40horas
           </div>

       </div>;
    }
}
export default Profile; 