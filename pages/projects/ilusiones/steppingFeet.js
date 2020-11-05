import React from "react";
import IlusionWrapper from "../../../components/wrapper/ilusionWrapper";
import SteppingFeet from "../../../components/sketches/ilusiones/SteppingFeet";
import SteppingFeetVertical from "../../../components/sketches/ilusiones/SteppingFeetVertical";

const explication = `Esta ilusión es un fenómeno de percepción de movimiento que involucra dos "autobuses", uno azul y otro amarillo, que se mueven horizontalmente a través de una "calle" que consta de rayas blancas y negras. Aunque ambos autobuses se mueven a velocidad constante, su velocidad percibida varía drásticamente.
Cuando el autobús azul se encuentra sobre las franjas blancas, el contraste es alto (azul oscuro frente a blanco) y fácilmente visible, por lo que parece moverse más rápido que su velocidad real. Por el contrario, cuando el bus azul está contra las franjas negras, el contraste es bajo (azul oscuro vs. negro) y más difícil de ver, por lo que el movimiento parece más lento. Los efectos opuestos ocurren para el bus amarillo. Los dos autobuses se asemejan a un par de pies en movimiento, lo que le da a la ilusión su nombre.
En general, los movimientos de mayor contraste se ven más rápidos que los de menor contraste. El efecto desaparece cuando se quita la textura rayada de la calle porque no queda contraste, mostrando cómo el fondo de un objeto puede tener un efecto significativo en su velocidad percibida.
`

const link = "https://michaelbach.de/ot/mot-feetLin/index.html"

const controls = ["Utilice el menu desplegable para controlar la velocidad de los 'buses'." , "Presione ENTER para aparecer y desaparecer las barras", "Presione la letra 'y' para aparecer y desaparecer el bus amarillo", "Presione la letra 'b' para aparecer y desaparecer el bus azul"]

const title = "Stepping Feet"

const VisualDefault = () => {
  return (
    <IlusionWrapper ilusion={SteppingFeet} ilusion2={SteppingFeetVertical} explication={explication} link={link} controls={controls} title={title}/>
  );
};

export default VisualDefault;
