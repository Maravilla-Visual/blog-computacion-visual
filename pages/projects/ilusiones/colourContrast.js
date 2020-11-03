import React from "react";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";
import ColourContrast from "../../../components/sketches/ilusiones/ColourContrast";


const VisualDefault = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Colour Contrast</h1>
      </div>
      <div className="ilusion-wrap ilusion-wrap-overflow">
        <div className="ilusion-canvas">
        <P5Wrapper sketch={ColourContrast} />
        </div>
        <div className="description-text ilusion-description">
          <h5>Explicación</h5>
          <p className="ilusion-explanation">
            {" "}
            A medida que se aumenta la opacidad del rectángulo, el ojo izquierdo
            pareciera adquirir un tinte azulado, mientras que el de la derecha
            es gris neutro. En realidad ambos son del mismo tono. Este es un
            caso de contraste de color simultáneo y probablemente también de
            adaptación de color. El tinte rojizo al lado del ojo cambia el gris
            neutro del ojo al color del oponente, que para el rojo es azul
            verdoso.{" "}
            <a
              href="https://michaelbach.de/ot/col-context/index.html"
              target="_blank"
            >
              {" "}
              Mas Información{" "}
            </a>
          </p>

          <h5>Controles</h5>
          <ul className="ilusion-explanation">
          <li>
                  Mueva el slider para aumentar o disminuir la opacidad del
                  rectangulo rojo.
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisualDefault;
