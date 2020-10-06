import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Row, Col, Button } from "react-bootstrap";

const LumaSketch = dynamic(() => import("../../components/sketches/Luma"), {
  ssr: false,
});

const Luma = () => {
  const [file, setFile] = useState(null);
  const [showSketch, setShowSketch] = useState(false);
  const hiddenFileInput = React.useRef(null);

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setShowSketch(false);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleConvertClick = () => {
    setShowSketch(true);
  };

  const deleteFile = () => {
    setFile(null);
  };

  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">LUMA</h1>
      </div>
      <div className="files-container">
        {!file && (
          <div>
            <Button onClick={handleClick} className="button-box">
              Imagen
            </Button>
            <input
              type="file"
              onChange={handleChange}
              ref={hiddenFileInput}
              placeholder="holi"
              className="input-file"
              style={{ display: "none" }}
            />
          </div>
        )}
        {file && (
          <Col xs={4}>
            <img src={file} style={{ width: "300px", height: "300px" }} />
          </Col>
        )}
        {file && (
          <Col xs={2}>
            <button
              className="back-home"
              style={{ outline: "none", border: "none" }}
              onClick={handleConvertClick}
            >
              Convertir
            </button>
          </Col>
        )}
        {file && (
          <Col xs={4}>
            {showSketch && (
              <div>
                <LumaSketch imageURL={file} />
              </div>
            )}
          </Col>
        )}
        {file && (
          <div className="button-box__delete">
            <Button onClick={deleteFile} className="button-box">
              Borrar Imagen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Luma;
