import React from "react"
import Curso from "./Curso";

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

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { cursos.map(c => (
        <Curso 
        key={c.id}
        id={c.id}
        title={c.titulo}
        image={c.image}
        price={c.price}
        profesor={c.profesor}
        />
        )) }
    </div>
)

export default CourseGrid