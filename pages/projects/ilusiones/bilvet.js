import React from "react";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";
import Blivet from "../../../components/sketches/ilusiones/Blivet";

const explication = 'Un tridente imposible , también conocido como tenedor imposible , blivet , poiuyt o diapasón del diablo , es un dibujo de un objeto imposible (figura indescifrable). Parece tener tres puntas cilíndricas en un extremo que luego se transforman misteriosamente en dos puntas rectangulares en el otro extremo.'

const link = "https://en.wikipedia.org/wiki/Impossible_trident"

const controls = ["Revisa con atención el comportamiento de la esfera y trata de identificar que figura es."]

const title = "Blivet"


const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={Blivet}  explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;