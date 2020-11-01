import React, { useEffect } from "react";

const Error = () => {
  
  return (
    <div className="error-container">
      <div className="content">
        <h2 className="error-message">404</h2>
        <h4 className="error-title">
          Página no encontrada <span>😢</span>
        </h4>
        <p className="error-description">
          La página que buscabas no se encuentra. Puede que hayas escrito mal la
          dirección o se haya removido.
        </p>
        <a className="back-home" href="/blog-computacion-visual">
          Devuelta al Home
        </a>
      </div>
    </div>
  );
};

export default Error;
