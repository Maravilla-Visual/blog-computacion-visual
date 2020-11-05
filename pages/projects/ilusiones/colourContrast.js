import React from "react";
import ColourContrast from "../../../components/sketches/ilusiones/ColourContrast";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";

const explication = 'A medida que se aumenta la opacidad del rectángulo, el ojo izquierdo pareciera adquirir un tinte azulado, mientras que el de la derecha es gris neutro. En realidad ambos son del mismo tono. Este es un caso de contraste de color simultáneo y probablemente también de adaptación de color. El tinte rojizo al lado del ojo cambia el gris neutro del ojo al color del oponente, que para el rojo es azul verdoso.'

const link = "https://michaelbach.de/ot/col-context/index.html"

const controls = ["Mueva el slider para aumentar o disminuir la opacidad del rectangulo rojo."]

const title = "Colour Contrast"

const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={ColourContrast}  explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;
