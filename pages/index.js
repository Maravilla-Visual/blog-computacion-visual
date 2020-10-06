import { Button } from "react-bootstrap";

export default function About() {
  return (
    <div className="about">
      <div className="title">
        <h1 className="title-text">Computación Visual</h1>
      </div>

      <div className="materia-inicio">
        <div className="materia">
          <img
            src="/blog-computacion-visual/visual-computing.jpg"
            alt="Jane"
            width="20%"
            height="200px"
            className="materia-imagen materia-imagen__home"
          />
          <div className="materia-desc mt-3">
            <p>
              Materia de la universidad nacional cuyo objetivo es Estudiar el
              proceso de producción y manipulación de una imagen digital que
              sirve para dar sustento a una aplicación visual moderna, empleando
              una arquitectura actual de computador. Respecto de dicho proceso
              buscamos discernir:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
