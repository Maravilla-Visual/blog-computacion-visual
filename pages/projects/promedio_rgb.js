import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Row, Col } from "react-bootstrap";

const PromedioRGBSketch = dynamic(
  () => import("../../components/sketches/PromedioRgb"),
  { ssr: false }
);

const PromedioRGB = () => {
  const [file, setFile] = useState(null);
  const [showSketch, setShowSketch] = useState(false);

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setShowSketch(false);
  };

  const handleConvertClick = () => {
    setShowSketch(true);
  };

  return (
    <div style={{ height: "100%", padding: '5rem' }}>
      <div className="projects-container" style={{ height: "100%", width: '100%' }} />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: 'absolute',
          top: 0,
          left: '6rem',
        }}
      >
        <Row>
          <Col xs={2}>
            <input
              type="file"
              onChange={handleChange}
              placeholder="holi"
              style={{ marginTop: "1rem" }}
            />
          </Col>
          <Col xs={4}>
            <img src={file} style={{ width: "200px", height: "200px" }} />
          </Col>
          <Col xs={2}>
            {file && (
              <button
                className="back-home"
                style={{ outline: "none", border: "none" }}
                onClick={handleConvertClick}
              >
                Convertir
              </button>
            )}
          </Col>
          <Col xs={4}>
            {file && showSketch && (
              <div>
                <PromedioRGBSketch imageURL={file} />
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PromedioRGB;
