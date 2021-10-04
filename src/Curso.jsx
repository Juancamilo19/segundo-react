import React from 'react'
import PropTypes from 'prop-types'

// const mayorDeEdad = edad => edad > 18

const Curso = ({title, image, price,profesor}) => (

<article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img 
    src={image} alt={title} 
    />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3> 
        <div className="s-main-center">
          {`${profesor}`}
        </div>
        <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="https://ed.team">{`${price}`}</a>
    </div>
  </div>
</article>

)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontro titulo",
  image: "https://previews.123rf.com/images/rabbit75123/rabbit751231210/rabbit75123121000088/15669808-new-york-city-manhattan-skyline-vista-a%C3%A9rea-blanco-y-negro-con-los-rascacielos-y-las-calles-.jpg",
  price: "--",
  profesor: ""
}

export default Curso 