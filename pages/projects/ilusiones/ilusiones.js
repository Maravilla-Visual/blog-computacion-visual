import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";
import SteppingFeet from "../../../components/sketches/ilusiones/SteppingFeet";
import SteppingFeetVertical from "../../../components/sketches/ilusiones/SteppingFeetVertical";

const Ilusiones = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Demostraciones de ilusiones visuales</h1>
      </div>
      <div className="files-container2" style={{ textAlign: "justify" }}>
        <h2>Stepping feet</h2>
        <p>De acuerdo con Wikipedia:</p>
        <p style={{ marginLeft: "15px" }}>
          Esta ilusión es un fenómeno de percepción de movimiento que involucra
          dos "autobuses", uno azul y otro amarillo, que se mueven
          horizontalmente a través de una "calle" que consta de rayas blancas y
          negras. Aunque ambos autobuses se mueven a velocidad constante, su
          velocidad percibida varía drásticamente.
        </p>
        <p style={{ marginLeft: "15px" }}>
          Cuando el autobús azul se encuentra sobre las franjas blancas, el
          contraste es alto (azul oscuro frente a blanco) y fácilmente visible,
          por lo que parece moverse más rápido que su velocidad real. Por el
          contrario, cuando el bus azul está contra las franjas negras, el
          contraste es bajo (azul oscuro vs. negro) y más difícil de ver, por lo
          que el movimiento parece más lento. Los efectos opuestos ocurren para
          el bus amarillo. Los dos autobuses se asemejan a un par de pies en
          movimiento, lo que le da a la ilusión su nombre.
        </p>
        <p style={{ marginLeft: "15px" }}>
          En general, los movimientos de mayor contraste se ven más rápidos que
          los de menor contraste. El efecto desaparece cuando se quita la
          textura rayada de la calle porque no queda contraste, mostrando cómo
          el fondo de un objeto puede tener un efecto significativo en su
          velocidad percibida.
        </p>
        <h5>Controles</h5>
        <ul>
          <li>
            Utilice el menu desplegable para controlar la velocidad de los
            "buses"
          </li>
          <li>Presione ENTER para aparecer y desaparecer las barras</li>
          <li>
            Presione la letra "y" para aparecer y desaparecer el bus amarillo
          </li>
          <li>Presione la letra "b" para aparecer y desaparecer el bus azul</li>
        </ul>
        <div className="info-block">
          <h3 style={{ marginTop: "16px", marginRight: "600px" }}>
            Horizontal
          </h3>
          <h4>Vel.</h4>
        </div>
        <div>
          <P5Wrapper sketch={SteppingFeet} />
        </div>
        <div className="info-block">
          <h3 style={{ marginTop: "16px", marginRight: "635px" }}>Vertical</h3>
          <h4>Vel.</h4>
        </div>
        <div>
          <P5Wrapper sketch={SteppingFeetVertical} />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Ilusiones;
