import React, { useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";
import SteppingFeet from "../../../components/sketches/ilusiones/SteppingFeet";
import SteppingFeetVertical from "../../../components/sketches/ilusiones/SteppingFeetVertical";

const ilusions = [
  {
    name: "Gradient Color",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/visual",
  },
  {
    name: "Hermann Grid",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/visual",
  },
  {
    name: "Ebbinghaus",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/visual",
  },
  {
    name: "Kaniza Triangle",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/visual",
  },
  {
    name: "Crazy Circles",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/crazyCircle",
  },
  {
    name: "3D Cubes",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/cubes",
  },
  {
    name: "Bilvet",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/bilvet",
  },
  {
    name: "Stepping feet",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/steppingFeet",
  },
  {
    name: "Colour Constrant",
    category: "Paradojica",
    reference: "https://michaelbach.de/ot/col-context/index.html",
    type: "integrante1",
    url: "no aplica",
    link: "/blog-computacion-visual/projects/ilusiones/colourContrast",
  },
];

const Ilusiones = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Demostraciones de ilusiones visuales</h1>
      </div>
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
        
          {ilusions.map((item,index) =>  (
            <tbody>
          <tr>
            <td><a href={item.link}>{item.name}</a></td>
            <td>{item.category}</td>
            <td>{item.reference}</td>
            <td>{item.type}</td>
            <td>{item.url}</td>
          </tr>
        </tbody>
        ))}
      </Table>
      
    </div>
  );
};

export default Ilusiones;
