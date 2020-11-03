import React from "react";
import dynamic from "next/dynamic";
import { Tabs, Tab } from "react-bootstrap";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";
import SteppingFeet from "../../../components/sketches/ilusiones/SteppingFeet";
import SteppingFeetVertical from "../../../components/sketches/ilusiones/SteppingFeetVertical";
import Cubes3d from "../../../components/sketches/ilusiones/Cubes3d";
import Blivet from "../../../components/sketches/ilusiones/Blivet";
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
              <h5>Controles</h5>
              <ul>
                <li>
                  Haga click para hacer aparecer y desaparecer el gradiente del
                  fondo.
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
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
              <ul>
                <li>Haga click para cambiar el estado del sketch.</li>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Tab>
        <Tab eventKey="crazy-circles" title="Crazy circles" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <P5Wrapper sketch={CrazyCircles} />
            </div>
            <div className="description-text">
              <p>
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
              <ul>
                <li>
                  Haga click para hacer aparecer y desaparecer las lineas guia.
                </li>
                <li>Presione "+" para aumentar la cantidad de circulos.</li>
                <li>Presione "-" para disminuir la cantidad de circulos.</li>
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
        <Tab eventKey="3d-cubes" title="3D cubes" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <P5Wrapper sketch={Cubes3d} />
            </div>
            <div className="description-text">
              <p>
                {" "}
                Este ejemplo muestra la importancia de la perspectiva lineal y
                el sentido de profundidad que todos tenemos. Al alinear de
                manera perfectamente paralela una de las caras de la estructura
                de cubos con la pantalla (nuestro punto de visión), podriamos
                ser engañados y pensar que es una estructura bidimensional, sin
                embargo una minima rotación pondrá de manifiesto la perspectica
                que se maneja, tal como sucede en la realidad, dandonos el
                sentido de profundidad que tiene la estructura.{" "}
                <a
                  href="https://es.wikipedia.org/wiki/Perspectiva"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
              <h5>Controles</h5>
              <ul>
                <li>Mueva el mouse para rotar la estructura de cubos.</li>
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
        <Tab eventKey="blivet" title="Blivet" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <P5Wrapper sketch={Blivet} />
            </div>
            <div className="description-text">
              <p>
                {" "}
                Un tridente imposible , también conocido como tenedor imposible
                , blivet , poiuyt o diapasón del diablo , es un dibujo de un
                objeto imposible (figura indescifrable). Parece tener tres
                puntas cilíndricas en un extremo que luego se transforman
                misteriosamente en dos puntas rectangulares en el otro extremo..{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Impossible_trident"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>
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
        <Tab eventKey="stepping-feet" title="Stepping feet" className="m-2">
          <div style={{ height: "100vh", overflow: "auto" }}>
            <h4 style={{ color: "white" }}>Horizontal</h4>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <P5Wrapper sketch={SteppingFeet} />
            </div>
            <h4 style={{ color: "white" }}>Vertical</h4>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <P5Wrapper sketch={SteppingFeetVertical} />
            </div>
            <div className="description-text">
              <p>
                Esta ilusión es un fenómeno de percepción de movimiento que
                involucra dos "autobuses", uno azul y otro amarillo, que se
                mueven horizontalmente a través de una "calle" que consta de
                rayas blancas y negras. Aunque ambos autobuses se mueven a
                velocidad constante, su velocidad percibida varía drásticamente.
              </p>
              <p>
                Cuando el autobús azul se encuentra sobre las franjas blancas,
                el contraste es alto (azul oscuro frente a blanco) y fácilmente
                visible, por lo que parece moverse más rápido que su velocidad
                real. Por el contrario, cuando el bus azul está contra las
                franjas negras, el contraste es bajo (azul oscuro vs. negro) y
                más difícil de ver, por lo que el movimiento parece más lento.
                Los efectos opuestos ocurren para el bus amarillo. Los dos
                autobuses se asemejan a un par de pies en movimiento, lo que le
                da a la ilusión su nombre.
              </p>
              <p>
                En general, los movimientos de mayor contraste se ven más
                rápidos que los de menor contraste. El efecto desaparece cuando
                se quita la textura rayada de la calle porque no queda
                contraste, mostrando cómo el fondo de un objeto puede tener un
                efecto significativo en su velocidad percibida.
                <a
                  href="https://michaelbach.de/ot/mot-feetLin/index.html"
                  target="_blank"
                >
                  {" "}
                  Mas Información{" "}
                </a>
              </p>

              <h5>Controles</h5>
              <ul>
                <li>
                  Utilice el menu desplegable para controlar la velocidad de los
                  "buses"
                </li>
                <li>Presione ENTER para aparecer y desaparecer las barras</li>
                <li>
                  Presione la letra "y" para aparecer y desaparecer el bus
                  amarillo
                </li>
                <li>
                  Presione la letra "b" para aparecer y desaparecer el bus azul
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
