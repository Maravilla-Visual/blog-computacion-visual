import React from "react";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";
import Balls from "../../../components/sketches/ilusiones/balls";


const explication = 'Se basa en el hecho de que el sistema de atención visual usa el contexto para determinar el tamaño de los objetos. La ilusión es susceptible a las diferencias individuales, aquellos que experimentan la ilusión con más fuerza tienden a tener un estilo de procesamiento más global y holístico.'

const link = "https://www.illusionsindex.org/ir/ebbinghaus-illusion"

const controls = ["Haga click para cambiar el estado del sketch."]

const title = "Ebbinghaus"


const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={Balls}  explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;