import loadCustomRoutes from "next/dist/lib/load-custom-routes";
import React from "react";

const Ilusiones = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Fractales de Newton</h1>
      </div>
      <div className="contenido-reporte">
        <h3 className="mt-4">¿Que es un Fractal?</h3>
        <p className="ilusion-explanation ml-3">
          {" "}
            Fractal: latín fractus, roto, fragmentado o fracturado
            El término fue acuñado por el  matemático frances  Benoït Mandelbrot
            En geometría un fractal es un objeto cuya estructura básica, fragmentada o aparentemente irregular, se repite a diferentes escalas.
            <br></br>
            Propiedades:  autosimilitud, recursividad, infinitud, una estructura compleja y suelen tener una forma demasiado irregular.{" "}
        </p>
        <h4> Aplicaciones de fractales </h4>
        <lu className="padding-left-20">
            <li>Naturaleza: ADN, Flores, Ramas, Analizar la forma de las estrellas.</li>
            <li>Computación: CGI, Compresión de imagenes y texto.</li>
            <li>Arte: Música (Beethoven, Mozart), Creación de imágenes.</li>
        </lu>
        <br></br>
        <h4 className="mb-4">Fractales de newton</h4>
        <p className="ilusion-explanation ml-3">
          {" "}
            Una forma de encontrar fractales es utilizando el método de newton para encontrar raices de una función. 
            Adaptar el algoritmo consiste en lo siguiente:  
            <br></br>
            Dada la función f : R → R le queremos encontrar una raíz, es decir, un valor a tal que f(a) = 0. 
            <br></br>
            Para ello tomamos un punto inicial x0 no muy lejos de a y 
            generamos una sucesión de puntos (x, n), n que converge a a. La ecuación a iterar es:{" "}
        </p>
        <div className="d-flex flex-column align-items-center">
          <img
            src="/blog-computacion-visual/formula1.jpeg"
            alt="Ambient-light"
            className="about-perfil-img"
          />
        </div>
        <p className="ilusion-explanation ml-3">
          {" "}
          Y la función de Newton asociada a f es:{" "}
        </p>
        <div className="d-flex flex-column align-items-center">
          <img
            src="/blog-computacion-visual/formula2.jpeg"
            alt="Ambient-light"
            className="about-perfil-img"
          />
        </div>
        <br></br>
        <br></br>
        <h4 className="mb-4">Método de Newton en los complejos</h4>
        <p className="ilusion-explanation ml-3">
          {" "}
          Aplicar el método de Newton en ecuaciones complejas es sencillo en polinomios cuadráticos, sin embargo, 
          se complica en ecuaciones de mayor grado. Sin embargo, se conoce que las fronteras en las cuencas 
          de atracción tienen una naturaleza fractal..{" "}
        </p>
        <div className="d-flex flex-column align-items-center">
          <img
            src="/blog-computacion-visual/formula4.jpeg"
            alt="Ambient-light"
            className="about-perfil-img"
          />
        </div>
        <p className="ilusion-explanation ml-3">
          {" "} Por ejemplo La función cuadrática de variable compleja,
            <br></br>
           f : C → C con f(z) = z^2 − 1 tiene dos raíces. 
           Dependiendo del valor inicial z0 la órbita Nf (z0) tiende a 1 ó −1. Podemos ver que la cuenca de atracción para la raíz 1, 
           es decir, el conjunto A(1) de los puntos que son atraídos a 1, es el semiplano de la derecha formado por 
           los puntos con primera componente positiva.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          Mientras que la cuenca de atracción para la raíz −1 es la parte izquierda del plano A.{" "}
        </p>
        <div className="d-flex flex-column align-items-center">
          <img
            src="/blog-computacion-visual/formula3.jpeg"
            alt="Ambient-light"
            className="about-perfil-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Ilusiones;
