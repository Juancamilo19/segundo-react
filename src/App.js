import React from 'react';
import "./styles/styles.scss"
import Curso  from './Curso'

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://i2.wp.com/www.yentelman.com/wp-content/uploads/2019/01/city-town-village-metropolis.jpg?ssl=1" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Plan de Mejoramiento JavaScript</p>
        <p> A la proxima no soy tan vago JAJA</p>
        <a href="https://ed.team" className="button">Lo Juro</a>
      </div>
    </div>
  </div>
</div>

  <div className="ed-grid m-grid-3">
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />

  </div>

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
