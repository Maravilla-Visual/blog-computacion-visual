import React from "react";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";
import Triangle from "../../../components/sketches/ilusiones/triangle";


const explication = 'El cerebro ve roturas en las líneas y si no se les da más información, asumirán que hay una figura delante de las líneas. Los científicos creen que esto sucede porque el cerebro ha sido entrenado para ver la rotura de líneas como un objeto que podría representar una amenaza potencial.'

const link = "https://www.illusionsindex.org/i/kanizsa-triangle"

const controls = []

const title = "Kanizsa Triangle"


const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={Triangle}  explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;