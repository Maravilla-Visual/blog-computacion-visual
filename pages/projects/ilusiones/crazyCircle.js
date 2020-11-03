import React from "react";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";
import CrazyCircles from "../../../components/sketches/ilusiones/CrazyCircles";



const VisualDefault = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Crazy Circle</h1>
      </div>
          <div className="ilusion-wrap">
            <div className="ilusion-canvas">
              <P5Wrapper sketch={CrazyCircles} />
            </div>
            <div className="description-text ilusion-description">
              <h5>Explicación</h5>
              <p className="ilusion-explanation">
                {" "}
                Los circulos de distintos colores siguen un movimineto
                repetitivo muy sencillo en linea recta hacia el centro del
                circulo y devuelta a la circunferencia. Cuando se agregan varios
                circulos partiendo de distintas posiciones y un movimiento al
                unísono, se pone de manifiesto un efecto particular, en el que
                pareciera que multiples elipses estan rotando.{" "}
                <a
                  href="http://www.consciousness.it/CC/CCD/CrazyCirclesDebunked.php"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
              
              <h5>Controles</h5>
              <ul className="ilusion-explanation">
                <li >
                  Haga click para hacer aparecer y desaparecer las lineas guia.
                </li>
                <li>Presione "+" para aumentar la cantidad de circulos.</li>
                <li>Presione "-" para disminuir la cantidad de circulos.</li>
              </ul>
            </div>
          </div>
    </div>
  );
};

export default VisualDefault;
