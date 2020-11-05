import React from "react";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";
import CrazyCircles from "../../../components/sketches/ilusiones/CrazyCircles";

const explication = 'Los circulos de distintos colores siguen un movimineto repetitivo muy sencillo en linea recta hacia el centro del circulo y devuelta a la circunferencia. Cuando se agregan varios circulos partiendo de distintas posiciones y un movimiento al unísono, se pone de manifiesto un efecto particular, en el que pareciera que multiples elipses estan rotando.'

const link = "http://www.consciousness.it/CC/CCD/CrazyCirclesDebunked.php"

const controls = ["Haga click para hacer aparecer y desaparecer las lineas guia.", "Presione + para aumentar la cantidad de circulos.", "Presione - para disminuir la cantidad de circulos."]

const title = "Crazy Circle"

const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={CrazyCircles}  explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;
