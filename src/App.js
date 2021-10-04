import React from 'react';
import "./styles/styles.scss";
import Curso  from './Curso';
import Banner from "./Banner";
import Formulario from "./Formulario";



const App = () => (
  <>
  <Banner />
  <Formulario name="Edgrid"/>

</>
) 

export default App;

//Reglas JSX
//1: Toda etiqueta debe cerrarse
//2: Los Componentes deben devolver UN solo elemento padre
//3: Apoyarse de los fragment cuando necesito devolver dos elementos
//4: Fragment => <> hijos </>
//5: img siempre se cierra
//6: Class => className
//7: for => htmlFor
