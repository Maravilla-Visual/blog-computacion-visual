import React from "react";
import { Table } from "react-bootstrap";

const ilusions = [
  {
    name: "Gradient Color",
    category: "Ambigua",
    reference:
      "https://www.researchgate.net/figure/Demonstration-of-the-simultaneous-contrast-an-optical-illusion-already-described-as_fig4_264866231",
    type: "Click",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/gradient",
  },
  {
    name: "Hermann Grid",
    category: "Ficticia",
    reference: "https://www.illusionsindex.org/i/hermann-grid",
    type: "N/A",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/grid",
  },
  {
    name: "Ebbinghaus",
    category: "Distorsion",
    reference: "https://www.illusionsindex.org/ir/ebbinghaus-illusion",
    type: "Click",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/ebbinghaus",
  },
  {
    name: "Kaniza Triangle",
    category: "Ficticia",
    reference: "https://www.illusionsindex.org/i/kanizsa-triangle",
    type: "N/A",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/kanizsa",
  },
  {
    name: "Crazy Circles",
    category: "Paradojica",
    reference: "http://www.consciousness.it/CC/CCD/CrazyCirclesDebunked.php",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/crazyCircle",
  },
  {
    name: "3D Cubes",
    category: "Geometrica",
    reference: "N/A",
    type: "Movimiento con el mouse.",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/cubes",
  },
  {
    name: "Bilvet",
    category: "Paradojica / Geometrica",
    reference:
      "https://www.youtube.com/watch?v=U4ziyKPYC1k&t=58s&ab_channel=sTeR-POl",
    type: "Movimiento automatico.",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/bilvet",
  },
  {
    name: "Stepping feet",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type:
      "- Lista desplegable para configurar velocidad de buses. -Teclas para hacer aparecer y desaparecer buses. -Tecla para hacer aparecer y desaparecer barras de fondo.",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/steppingFeet",
  },
  {
    name: "Colour Constrant",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "Slider with Click",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/colourContrast",
  },
];

const Ilusiones = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Reporte</h1>
      </div>
      <div className="contenido-reporte">
        <h5 className="mb-4">Proposito</h5>
        <p className="ilusion-explanation ml-3">
          {" "}
          Comprender algunos aspectos fundamentales de la inferencia
          inconsciente de la percepción visual humana.{" "}
        </p>
        <h5 className="mb-4">Tareas</h5>
        <p className="ilusion-explanation ml-3">
          {" "}
          Implementar al menos 6 ilusiones de tres tipos distintos (paradójicas,
          geométricas, ambiguas, etc.), al menos dos con movimiento, dos con
          interactividad y una en 3D.{" "}
        </p>
        <h3 className="mt-4">Discusión</h3>
        <h5 className="m-3">1. Tabla</h5>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Ilusión</th>
              <th>Categoria</th>
              <th>Referencia</th>
              <th>Tipo de interactividad</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody className="container-overflow">
            {ilusions.map((item, index) => (
              <tr>
                <td>
                  <a href={item.link}>{item.name}</a>
                </td>
                <td>{item.category}</td>
                <td>{item.reference}</td>
                <td>{item.type}</td>
                <td>{item.url}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h5>Referencias estudiadas</h5>
        <ul className="ilusion-explanation">
          <li>
            <a href="https://processing.org/tutorials/pshader/"> Processing </a>
            , aunque se trato de hacer una implementación de ilusiones 3d con
            shaders, no se logro nada exitoso, quedamos con ganas de estudiar
            mas de shaders ya que su funcionamiento lo vimos bastante potente en
            este tipo de ilusiones, pero su implementación tenia una curva de
            aprendizaje bastante alta.
          </li>

          <li>
            La interpretación cerebral de la geometría, en un par de nuestras
            ilusiones se podría decir que engañamos al cerebro, por lo tanto me
            parece interesante profundizar en este aspecto y llegar un poco mas
            lejos en cuanto a que tanto se puede engañar visualmente al cerebro
            humano
          </li>
          <li>
            Nos parece importante conocer más sobre fragment Shaders ya que de
            acuerdo con la documentación estudiada se podia reconocer la mejoria
            en el rendimiento que tiene su implementación
          </li>
          <li>
            Ames Visual Illusions (1951) - YouTube, a la hora de implementar
            ciertas ilusiones visuales, a veces confundimos entre perspectiva o
            objetos imposibles, e importante entender a cual de estos dos
            pertenece el que vamos a tratar, ya que estos dos son muy diferentes
            y su implementación podría llegar a ser imposible si estamos
            equivocados.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ilusiones;
