import React from "react";

const Ilusiones = () => {
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">Reporte</h1>
      </div>
      <div className="contenido-reporte">
        <p className="ilusion-explanation ml-3">
          {" "}
          La iluminación es uno de los temas más importantes en el campo de los
          gráficos 3D. Modelarlo correctamente agrega mucho al atractivo visual
          de la escena renderizada. Esto es algo bastante complejo, ya que el
          comportamiento natural tiene bastantas variables complejas de modelar,
          con este taller se busca trabajar con distintos tipos de iluminación
          implementados por medio de shaders.{" "}
        </p>
        <h3 className="mt-4">Teoria</h3>
        <p className="ilusion-explanation ml-3">
          {" "}
          A lo largo de los años se han desarrollado varios modelos que capturan
          el efecto de núcleo que tiene la luz cuando incide sobre los objetos y
          los hace visibles. Estos modelos ligeros se han vuelto cada vez más
          complejos a medida que avanza el campo de los gráficos 3D y se
          disponía de más potencia de cálculo, a continuación vamos a ver los
          diferentes tipos de luz que son pertinentes para el taller.{" "}
        </p>
        <h5 className="mb-4">1. Ambient Light</h5>
        <p className="ilusion-explanation ml-3">
          {" "}
          Tipo de luz que se presenta cuando al aire libre en un día soleado
          normal. Aunque el sol viaja por el cielo y sus rayos de luz inciden en
          el mundo en diferentes ángulos a lo largo del día, la mayoría de las
          cosas serán visibles, incluso si está en la sombra. Dado que la luz
          rebota en todo, eventualmente golpea todo, por lo que los objetos que
          no están en el camino directo del sol también se iluminan. La luz
          ambiental se modela como una luz que no tiene origen ni dirección y
          tiene el mismo efecto en todos los objetos de la escena.{" "}
        </p>
        <h6 className="mb-4">1.1 Directional Light</h6>
        <p className="ilusion-explanation ml-3">
          {" "}
          Una fuente de este tipo de iluminación es luz direccional tiene una
          dirección, pero no un origen específico. Esto significa que todos los
          rayos de luz son paralelos entre sí. La dirección de la luz se
          especifica mediante un vector y ese vector se utiliza para calcular la
          luz en todos los objetos de la escena, independientemente de su
          posición. Una propiedad importante de una luz direccional es que su
          brillo permanece igual independientemente de la distancia desde el
          objeto iluminado.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          TPara especificar el color de las fuentes de luz se utiliza un trio de
          valores de punto flotante en rango [0, 1]. Multiplicando el color de
          la luz por el color del objeto obtenemos el color reflejado. Sin
          embargo, también queremos tener en cuenta la intensidad de la luz
          ambiental. Por lo tanto, la intensidad ambiental se especificará como
          un único valor de punto flotante en el rango [0-1] que también se
          multiplicará por todos los canales del color reflejado que acabamos de
          calcular. Este será el color final. A continuación, se muestra una
          imagen con luz direccional y la ecuación de cálculo de la luz
          ambiental.{" "}
        </p>
        <div className="d-flex flex-column align-items-center">
          <img
            src="/blog-computacion-visual/ambient.png"
            alt="Ambient-light"
            className="about-perfil-img"
          />
          <small>Tomado de: www.cv.com</small>
        </div>

        <h5 className="mb-4">2. Diffuse Light</h5>
        <p className="ilusion-explanation ml-3">
          {" "}
          La principal diferencia entre la luz ambiental y la luz difusa es el
          hecho de que la luz difusa depende de la dirección de los rayos de
          luz, mientras que la luz ambiental la ignora por completo. Cuando solo
          hay luz ambiental, toda la escena está igualmente iluminada. La luz
          difusa hace que las partes de los objetos que miran hacia la luz sean
          más brillantes que las partes opuestas a ella.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          El modelo de luz difusa se basa en realidad en la ley del coseno de
          Lambert que dice que la intensidad de la luz reflejada desde una
          superficie es directamente proporcional al coseno del ángulo entre la
          línea de visión del observador y la superficie normal. Para calcular
          la intensidad de la luz en el modelo difuso, simplemente usaremos el{" "}
          <bold>
            coseno del ángulo entre la luz y la superficie normal
          </bold>.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          En la siguiente imagen vemos cuatro rayos de luz que golpean la
          superficie en diferentes ángulos. La normal de la superficie es la
          flecha verde que apunta hacia la superficie. El rayo de luz A tiene la
          mayor fuerza. El ángulo entre A y la normal es cero y el coseno de
          cero es 1. Esto significa que después de multiplicar la intensidad de
          la luz (tres canales de 0 a 1) por el color de la superficie,
          multiplicaremos por 1. Podemos ' No hay nada mejor que esto con luz
          difusa. El rayo de luz B incide en la superficie en un ángulo entre 0
          y 90. Esto significa que el ángulo entre B y la normal también está
          entre 0 y 90 y el coseno de ese ángulo está entre 0 y 1. Escalaremos
          el resultado de la multiplicación arriba por el coseno de ese ángulo,
          lo que significa que la intensidad de la luz definitivamente será
          menor que el rayo de luz A. Las cosas se vuelven diferentes con los
          rayos de luz C y D. C golpea la superficie directamente desde un lado,
          en un ángulo de 0. El ángulo entre C y la normal es exactamente de 90
          grados y el coseno es 0. Esto hace que C no tenga efecto sobre
          iluminando la superficie en absoluto! El ángulo entre D y la normal es
          obtuso, lo que significa que el coseno es un número negativo que es
          menor que 0 y mayor o igual a -1. El resultado final es el mismo que
          C, sin efecto sobre el brillo de la superficie.{" "}
        </p>
        <div className="d-flex flex-column align-items-center">
          <img
            src="/blog-computacion-visual/diffuse.png"
            alt="diffuse-light"
            className="about-perfil-img"
          />
          <small>Tomado de: www.cv.com</small>
        </div>
        <p className="ilusion-explanation ml-3">
          {" "}
          En la segunda imagen se muestra el truco consistente en utilizar un
          concepto conocido como "vértice normal". Una normal de vértice es el
          promedio de las normales de todos los triángulos que comparten el
          vértice. En lugar de hacer que el sombreador de vértices calcule la
          luz difusa, solo pasamos por la normal de vértice como un atributo del
          sombreador de fragmentos y nada más. El rasterizador obtendrá tres
          normales diferentes y deberá interpolar entre ellas. El sombreador de
          fragmentación se invocará para cada píxel con la normal específica
          para este píxel. Luego podemos calcular la luz difusa a nivel de píxel
          usando esa normal específica. El resultado será un efecto de
          iluminación que cambia muy bien a lo largo de la cara del triángulo y
          entre los triángulos vecinos. Esta técnica se conoce como Phong
          Shading. La segunda imagen muestra las normales de vértice después de
          la interpolación.{" "}
        </p>

        <h5 className="mb-4">3. Specular Light</h5>
        <p className="ilusion-explanation ml-3">
          {" "}
          La iluminación especular agrega un nuevo elemento a la mezcla: la
          posición del espectador. La idea es que cuando la luz incide en una
          superficie en algún ángulo, también se refleja en el mismo ángulo (al
          otro lado de la normal). Si el espectador se encuentra exactamente en
          algún lugar del camino del rayo de luz reflejado, recibe una mayor
          cantidad de luz que un espectador que se encuentra más lejos.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          El resultado final de la iluminación especular es que los objetos se
          verán más brillantes desde ciertos ángulos y este brillo disminuirá a
          medida que se aleje. El ejemplo perfecto de iluminación especular del
          mundo real son los objetos metálicos. Este tipo de objetos a veces
          pueden ser tan brillantes que en lugar de ver el objeto en su color
          natural, ves una mancha de luz blanca brillante que se refleja
          directamente en ti. Sin embargo, este tipo de cualidad que es muy
          natural para los metales está ausente en muchos otros materiales (por
          ejemplo, madera). Muchos objetos simplemente no brillan,
          independientemente de dónde venga la luz y dónde esté parado el
          espectador. La conclusión es que el factor especular depende más del
          objeto que de la luz misma.{" "}
        </p>
        <div className="d-flex flex-column align-items-center">
          <img
            src="/blog-computacion-visual/specular.png"
            alt="Specular-light"
            className="about-perfil-img"
          />
          <small>Tomado de: www.cv.com</small>
        </div>
        <p className="ilusion-explanation ml-3">
          {" "}
          En la primera parte de la anterior imagen hay cinco elementos a tener
          en cuenta:{" "}
        </p>
        <ul>
          <li>
            'I' es la luz incidente que incide en la superficie (y genera la luz
            difusa).
          </li>
          <li>'N' es la superficie normal.</li>
          <li>
            'R' es el rayo de luz que se refleja desde la superficie. Es
            simétrico a través de la normal de 'I' pero su dirección general
            está invertida (apunta "hacia arriba" y no "hacia abajo").
          </li>
          <li>
            'V' es el vector desde el punto en la superficie donde la luz incide
            en el 'ojo' (que representa al espectador).
          </li>
          <li>'α' es el ángulo creado por los vectores 'R' y 'V'.</li>
        </ul>
        <p className="ilusion-explanation ml-3">
          {" "}
          Vamos a modelar el fenómeno de la luz especular usando el ángulo 'α'.
          La idea detrás de la luz especular es que la fuerza de la luz
          reflejada será máxima a lo largo del vector 'R'. En ese caso, 'V' es
          idéntica a 'R' y el ángulo es cero. A medida que el espectador
          comienza a alejarse de 'R', el ángulo aumenta. Queremos que el efecto
          de la luz disminuya gradualmente a medida que aumenta el ángulo. A
          estas alturas probablemente pueda adivinar que vamos a utilizar la
          operación del producto escalar de nuevo para calcular el coseno de
          'α'. Esto servirá como nuestro factor especular en la fórmula de
          iluminación. Cuando 'α' es cero, el coseno es 1, que es el factor
          máximo que podemos obtener. A medida que disminuye 'α', el coseno se
          vuelve más pequeño hasta que 'α' alcanza los 90 grados donde el coseno
          es cero y no hay absolutamente ningún efecto especular. Cuando 'α' es
          más de 90 grados, el coseno es negativo y tampoco hay efecto
          especular. Esto significa que el espectador no se encuentra en
          absoluto en el camino del rayo de luz reflejado.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          En la segunda parte de la imagen se muestra la formula final de la luz
          especular.{" "}
        </p>

        <h3 className="mt-4">Discusión</h3>
        <p className="ilusion-explanation ml-3">
          {" "}
          El comportamiento de la luz es en la actualidad un tema importante en
          la computación y desarrollo 3d, ya que contenido cotidiano como
          juegos, videos, películas, y más contenido requieren la adición de
          comportamiento de luz a sus gráficos. Esto nos obliga como
          desarrolladores de este tipo de contenidos a profundizar cada vez más
          en el comportamiento de la luz, perfeccionando y tratando de acercarse
          más a la realidad y el comportamiento natural, esta necesidad implica
          no solo estudiar algoritmos computacionales sino teoría y observación.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          Cuando observamos la iluminación en la vida real, y la tratamos de
          entender, podemos pensar que su comportamiento es bastante simple, y
          en efecto los ángulos, los focos de emisión se comportan de una manera
          sencilla, si se quiere enfatizar en un solo emisor de luz y ver cómo
          se comporta su flujo desde el foco, hasta su disipación en energía.
          Pero en el mundo real no existe un único emisor u origen de la luz, en
          el mundo real existen otros componentes que hacen que el
          comportamiento de la luz se vuelva complejo y dificulte su simulación.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          Entonces podemos observar en el mundo real, diferentes comportamientos
          de la luz, que dependen tanto de objetos que están en el paisaje, como
          del comportamiento natural de la luz, por ejemplo, si ponemos un
          vidrio o un espejo ante la emisión del sol, podemos observar que se
          genera otra fuente de luz, pero el comportamiento de este sería algo
          particular, ya que imitaría el de su emisor pero con menos intensidad,
          ahora el objeto que esté en un punto donde los dos emisores lo
          afecten, podría estar afectado por el mismo emisor, desde dos puntos
          distintos. Esto es solo un pequeño ejemplo de que por un simple objeto
          en el paisaje el sujeto que esté expuesto a la luz puede verse
          afectado en gran medida.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          Entonces podemos observar en el mundo real, diferentes comportamientos
          de la luz, que dependen tanto de objetos que están en el paisaje, como
          del comportamiento natural de la luz, por ejemplo, si ponemos un
          vidrio o un espejo ante la emisión del sol, podemos observar que se
          genera otra fuente de luz, pero el comportamiento de este sería algo
          particular, ya que imitaría el de su emisor pero con menos intensidad,
          ahora el objeto que esté en un punto donde los dos emisores lo
          afecten, podría estar afectado por el mismo emisor, desde dos puntos
          distintos. Esto es solo un pequeño ejemplo de que por un simple objeto
          en el paisaje el sujeto que esté expuesto a la luz puede verse
          afectado en gran medida.{" "}
        </p>
        <p className="ilusion-explanation ml-3">
          {" "}
          Los temas vistos al comienzo de este reporte tienen un gran efecto en
          la simulación de la luz, por lo tanto, se puede decir que un correcto
          generador de estos efectos podría hacer que el espectador, de verdad
          aprecie y crea en la realidad del efecto realizado. Si tratamos de
          entender este efecto en código, observamos que un efecto de luz puede
          afectar a todos los píxeles, de nuestra imagen o frame, por lo tanto,
          a cada frame este comportamiento de la luz podría afectar todos los
          pixeles con una función que combine diferentes efectos de los que
          hemos hablado.{" "}
        </p>
      </div>
    </div>
  );
};

export default Ilusiones;
