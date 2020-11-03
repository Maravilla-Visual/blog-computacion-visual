import React from "react";
import { Table } from "react-bootstrap";

const ilusions = [
  {
    name: "Gradient Color",
    category: "Ambigua",
    reference: "https://www.researchgate.net/figure/Demonstration-of-the-simultaneous-contrast-an-optical-illusion-already-described-as_fig4_264866231",
    type: "Click",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/visual",
  },
  {
    name: "Hermann Grid",
    category: "Ficticia",
    reference: "https://www.illusionsindex.org/i/hermann-grid",
    type: "N/A",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/visual",
  },
  {
    name: "Ebbinghaus",
    category: "Distorcion",
    reference: "https://www.illusionsindex.org/ir/ebbinghaus-illusion",
    type: "Click",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/visual",
  },
  {
    name: "Kaniza Triangle",
    category: "Ficticia",
    reference: "https://www.illusionsindex.org/i/kanizsa-triangle",
    type: "N/A",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/visual",
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
    reference: "https://www.youtube.com/watch?v=U4ziyKPYC1k&t=58s&ab_channel=sTeR-POl",
    type: "Movimiento automatico.",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/bilvet",
  },
  {
    name: "Stepping feet",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "- Lista desplegable para configurar velocidad de buses. -Teclas para hacer aparecer y desaparecer buses. -Tecla para hacer aparecer y desaparecer barras de fondo.",
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
    <div  className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Demostraciones de ilusiones visuales</h1>
      </div>
      <div className="contenido-reporte">
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
        <tbody class="container-overflow">
          {ilusions.map((item,index) =>  (
            
          <tr>
            <td><a href={item.link}>{item.name}</a></td>
            <td>{item.category}</td>
            <td>{item.reference}</td>
            <td>{item.type}</td>
            <td>{item.url}</td>
          </tr>
        
        ))}
        </tbody>
      </Table>
      </div>
      </div>
  );
};

export default Ilusiones;
