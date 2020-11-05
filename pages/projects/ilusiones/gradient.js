import React from "react";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";
import Gradient from "../../../components/sketches/ilusiones/gradient";

const explication = 'El efecto es el resultado de la percepción de la luminosidad, o el concepto de que nuestros ojos perciben los colores de manera diferente en función de la sombra de cualquier objeto que esté en el fondo o en primer plano.'

const link = "https://www.dailymail.co.uk/sciencetech/article-6065035/The-incredible-color-changing-gradient-illusion-break-brain.html"

const controls = ["Haga click para hacer aparecer y desaparecer el gradiente del fondo."]

const title = "Gradient Color"


const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={Gradient} explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;