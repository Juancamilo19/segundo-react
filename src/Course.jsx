import React from "react"

const cursos = [
    {
      "id": 1,
      "titulo": "React desde cero",
      "image": "https://i.ytimg.com/vi/C7NLf7K7hLA/maxresdefault.jpg",
      "price": 40,
      "profesor": "Beto Quiroga"
    },
    {
      "id": 2,
      "titulo": "Drupal desde cero",
      "image": "https://1.bp.blogspot.com/-xggP0sebQvo/WIu9u_c9jdI/AAAAAAAARd4/CGiuAmQ28cEXhuOIHDUEfS4d7WXphqMoQCLcB/s1600/Cursos%2Bgratis%2Bprogramacion%2B2017.jpg",
      "price": 30,
      "profesor": "Beto Quiroga"
    }, 
    {
      "id": 3,
      "titulo": "Go desde cero",
      "image": "https://1.bp.blogspot.com/-aLbivYo759s/WQd__JUxjBI/AAAAAAAAR5Q/Aqy9bP1XYR8aTjt4BCD7tjhPwFiNvkILgCLcB/s1600/nuevos%2Bcursos%2Bgratis%2Bprogramacion.jpg",
      "price": 50,
      "profesor": "Alexys Lozada"
    }, 
    {
      "id": 4,
      "titulo": "HTML desde cero",
      "image": "https://static.platzi.com/media/courses/og-prog-b%C3%A1sica-2017.png",
      "price": 10,
      "profesor": "Alvaro Felipe"
    }
  ]

const Course = ({ match }) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

            return (
            <div className="ed-grid m-grid-3">
            {
                cursoActual ? (

        <>
            <h1 className="m-cols-3">{ cursoActual.titulo }</h1>
            <img className="m-cols-1" 
            src={cursoActual.image} 
            alt={cursoActual.titulo} />
            <p className="m-cols-2">Profesor: {cursoActual.profesor} </p>
        </>
        ): 
                <h1>El curso no existe</h1>    
        }
    </div>
    )
}
export default Course