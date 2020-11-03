import React from "react";
import dynamic from "next/dynamic";
import { Tabs, Tab } from "react-bootstrap";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";

import CrazyCircles from "../../../components/sketches/ilusiones/CrazyCircles";
import ColourContrast from "../../../components/sketches/ilusiones/ColourContrast";

const Gradient = dynamic(
  () => import("../../../components/illusions/gradient"),
  {
    ssr: false,
  }
);

const Balls = dynamic(() => import("../../../components/illusions/balls"), {
  ssr: false,
});

const Grid = dynamic(() => import("../../../components/illusions/grid"), {
  ssr: false,
});

const Triangle = dynamic(
  () => import("../../../components/illusions/triangle"),
  {
    ssr: false,
  }
);

const VisualDefault = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Ilusiones</h1>
      </div>
      <Tabs defaultActiveKey="gradient" id="uncontrolled-tab-example">
        <Tab eventKey="gradient" title="Gradient Color" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <Gradient />
            <div className="description-text">
              <p>
                {" "}
                El efecto es el resultado de la percepción de la luminosidad, o
                el concepto de que nuestros ojos perciben los colores de manera
                diferente en función de la sombra de cualquier objeto que esté
                en el fondo o en primer plano.{" "}
                <a
                  href="https://www.dailymail.co.uk/sciencetech/article-6065035/The-incredible-color-changing-gradient-illusion-break-brain.html"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
              <small>
                  Haga click para hacer aparecer y desaparecer el gradiente del
                  fondo.
                </small>
            </div>
          </div>
        </Tab>
        <Tab eventKey="grid" title="Hermann Grid" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <Grid />
            <div className="description-text">
              <p>
                {" "}
                La ilusión es el resultado de que las células de la retina
                ajustan el brillo de una imagen ajustando la intensidad de la
                señal de luz en muchas secciones pequeñas, lo que le permite ver
                una amplia gama de detalles brillantes y oscuros en la misma
                imagen.{" "}
                <a
                  href="https://www.illusionsindex.org/i/hermann-grid"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="balls" title="Ebbinghaus" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <Balls />
            <div className="description-text">
              <p>
                {" "}
                Se basa en el hecho de que el sistema de atención visual usa el
                contexto para determinar el tamaño de los objetos. La ilusión es
                susceptible a las diferencias individuales, aquellos que
                experimentan la ilusión con más fuerza tienden a tener un estilo
                de procesamiento más global y holístico.{" "}
                <a
                  href="https://www.illusionsindex.org/ir/ebbinghaus-illusion"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
              <h5>Controles</h5>
              <small>
            Haga click para cambiar el estado del sketch.
                </small>
            </div>
          </div>
        </Tab>
        <Tab eventKey="triangle" title="Kanizsa Triangle" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <Triangle />
            <div className="description-text">
              <p>
                {" "}
                El cerebro ve roturas en las líneas y si no se les da más
                información, asumirán que hay una figura delante de las líneas.
                Los científicos creen que esto sucede porque el cerebro ha sido
                entrenado para ver la rotura de líneas como un objeto que podría
                representar una amenaza potencial.{" "}
                <a
                  href="https://www.illusionsindex.org/i/kanizsa-triangle"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="colourContrast" title="Colour Contrast" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <P5Wrapper sketch={ColourContrast} />
            </div>
            <div className="description-text">
              <p>
                {" "}
                A medida que se aumenta la opacidad del rectángulo, el ojo
                izquierdo pareciera adquirir un tinte azulado, mientras que el
                de la derecha es gris neutro. En realidad ambos son del mismo
                tono. Este es un caso de contraste de color simultáneo y
                probablemente también de adaptación de color. El tinte rojizo al
                lado del ojo cambia el gris neutro del ojo al color del
                oponente, que para el rojo es azul verdoso.{" "}
                <a
                  href="https://michaelbach.de/ot/col-context/index.html"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
              <h5>Controles</h5>
              <ul>
                <li>
                  Mueva el slider para aumentar o disminuir la opacidad del
                  rectangulo rojo.
                </li>
              </ul>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default VisualDefault;
