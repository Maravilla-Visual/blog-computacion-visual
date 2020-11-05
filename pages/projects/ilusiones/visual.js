import React from "react";
import dynamic from "next/dynamic";
import { Tabs, Tab } from "react-bootstrap";
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
      
        <Tab eventKey="balls" title="Ebbinghaus" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }} className="my-2">
            <Balls />
            <div className="description-text description-text-visual">
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
              <small>
                  * Haga click para cambiar el estado del sketch.
                </small>
            </div>
          </div>
        </Tab>
        <Tab eventKey="triangle" title="Kanizsa Triangle" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }} className="my-2">
            <Triangle />
            <div className="description-text description-text-visual">
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
      </Tabs>
    </div>
  );
};

export default VisualDefault;
