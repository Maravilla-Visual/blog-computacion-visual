import React from "react";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";
import Cubes3d from "../../../components/sketches/ilusiones/Cubes3d";

const explication = 'Este ejemplo muestra la importancia de la perspectiva lineal y el sentido de profundidad que todos tenemos. Al alinear de manera perfectamente paralela una de las caras de la estructura de cubos con la pantalla (nuestro punto de visión), podriamos ser engañados y pensar que es una estructura bidimensional, sin embargo una minima rotación pondrá de manifiesto la perspectica que se maneja, tal como sucede en la realidad, dandonos el sentido de profundidad que tiene la estructura.'

const link = "https://es.wikipedia.org/wiki/Perspectiva"

const controls = ["¿Cuantos cuadrados o cubos vez?.", "Mueve el mouse sobre la imagen y vuelve a responder la misma pregunta."]

const title = "3D cubes"

const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={Cubes3d} explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;
