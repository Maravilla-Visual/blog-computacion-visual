import React from "react";
import { loadableP5 as P5Wrapper } from "../../../components/sketches/loadable";
import Blivet from "../../../components/sketches/ilusiones/Blivet";




const VisualDefault = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Blivet</h1>
      </div>
          <div className="ilusion-wrap">
            <div className="ilusion-canvas">
            <P5Wrapper sketch={Blivet} />
            </div>
            <div className="description-text ilusion-description">
              <h5>Explicación</h5>
              <p className="ilusion-explanation">
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
          </div>
    </div>
  );
};

export default VisualDefault;