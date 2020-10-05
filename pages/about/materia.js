export default function Materia() {
  return (
    <div className="materia">
      <h2 className="m-3">Computación Visual</h2>

      <img
        src="/blog-computacion-visual/visual-computing.jpg"
        alt="Jane"
        width="20%"
        height="200px"
        className="materia-imagen"
      />
      <div className="materia-desc mt-3">
        <p>
          Materia de la universidad nacional cuyo objetivo es Estudiar el
          proceso de producción y manipulación de una imagen digital que sirve
          para dar sustento a una aplicación visual moderna, empleando una
          arquitectura actual de computador. Respecto de dicho proceso buscamos
          discernir:
        </p>
        <ul className="materia-list">
          <li>La relación con la visión humana.</li>
          <li>Sus entradas: modelos geométricos, datos, imágenes y gestos.</li>
          <li>
            Sus etapas, identificando las programables y el modo de hacerlo.
          </li>
        </ul>
      </div>
    </div>
  );
}
