import React, { useState } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";

const Ilusiones = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Reporte</h1>
      </div>
      <div
        className="files-container2"
        style={{ textAlign: "justify", color: "white" }}
      >
        <h2>Tabla de ilusiones</h2>
        <Table striped bordered style={{ color: "white" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Ilusión</th>
              <th>Gategoría</th>
              <th>Referencia</th>
              <th>Tipo de interactividad</th>
              <th>URL código base</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Gradient Color</td>
              <td></td>
              <td>
                <a
                  href="https://www.dailymail.co.uk/sciencetech/article-6065035/The-incredible-color-changing-gradient-illusion-break-brain.html"
                  target="_blank"
                >
                  https://www.dailymail.co.uk/sciencetech/article-6065035/The-incredible-color-changing-gradient-illusion-break-brain.html
                </a>
              </td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Stepping feet</td>
              <td>Movimiento y contraste</td>
              <td>
                <a
                  href="https://michaelbach.de/ot/mot-feetLin/index.html"
                  target="_blank"
                >
                  https://michaelbach.de/ot/mot-feetLin/index.html
                </a>
              </td>
              <td>
                <ul>
                  <li>Lista desplegable para configurar velocidad de buses.</li>
                  <li>Teclas para hacer aparecer y desaparecer buses.</li>
                  <li>
                    Tecla para hacer aparecer y desaparecer barras de fondo.
                  </li>
                </ul>
              </td>
              <td>No aplica</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Colour contrast</td>
              <td>Contraste y Adaptación de color.</td>
              <td>
                <a
                  href="https://michaelbach.de/ot/col-context/index.html"
                  target="_blank"
                >
                  https://michaelbach.de/ot/col-context/index.html
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    Slider para aumentar o disminuir la opacidad del rectángulo.
                  </li>
                </ul>
              </td>
              <td>No aplica</td>
            </tr>
          </tbody>
        </Table>
        <h2>Referencias estudiadas</h2>
        <p>...</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Ilusiones;
