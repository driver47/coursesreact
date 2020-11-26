/*const element = document.createElement('h1');
element.innerText = 'Hello, River47!';

const container = document.getElementById('app');

container.appendChild(element);*/

import React from 'react';  //Nos permite usar JSX y Azucar Sintactico
import ReactDom from 'react-dom';  //ReactDom nos permite renderizar los elementos en el lugar que queremos 

//React nos permite escribir JSX codigo muy parecido a 
//html, siempre que usemos JSX debe ir import React
//const jsx = <h1>Hi, River47! from React</h1>;

//--React tiene sus prpias librerias-----------------------------------
//a. React.createElement: recibe tres parametros (TipoDeElento,Atributos o props,Children( es parecido al InnerText,InnerHTML))

//const element = React.createElement('a', { href: 'https://ebenteam.com'}, 'Hola!, Soy los children.');


const name = 'Lilith';
//insertando varibles con React.createElement
//const element = React.createElement('h1', {}, `Hola, soy ${name}`);
const sum = () => 3 + 3;
//Insertando Variales con JSX 
//podemos llenar los parentesis  con funciones, expresiones y variables
// si es 0, null, o undefined el valor no se ve dentro de los parentesis 
//const jsx = <h1> Hola Soy, {sum()}</h1>

//-----CON JSX---SIEMPRE USAREMOS JSX --------------------------------------
const jsx = (
    <div>
        <h1>MEJOR FORMA, {name, sum()}</h1>
        <p>Soy Ingeniero FullStack</p>
    </div>
)
//------------------------------------------------------
//-----CON REACT.createElement------MUY COMPLEJO--------------------
const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'HOLA A TODOS'),
    React.createElement('p', {}, 'soy ingeniero fullstack')
);
//------------------------------------------------------
const container = document.getElementById('app'); 

//ReactDom recibe 2 parametros que queremos renderizar 
//Donde lo queremos renderizar 
//ReactDom.render(__qué__, __Dónde__):
ReactDom.render(jsx, container); 

//