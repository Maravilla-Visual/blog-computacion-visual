import React from "react";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";
import Grid from "../../../components/sketches/ilusiones/grid";

const explication = 'La ilusión es el resultado de que las células de la retina ajustan el brillo de una imagen ajustando la intensidad de la señal de luz en muchas secciones pequeñas, lo que le permite ver una amplia gama de detalles brillantes y oscuros en la misma imagen.'

const link = "https://www.illusionsindex.org/i/hermann-grid"

const controls = []

const title = "Hermann Grid"


const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={Grid} explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;