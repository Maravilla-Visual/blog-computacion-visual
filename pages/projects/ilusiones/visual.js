import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Row, Col, Button } from "react-bootstrap";

const Gradient = dynamic(() => import("../../../components/illusions/gradient"), {
  ssr: false,
});

const Blur = () => {
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
    
                <Gradient/>
              
  );
};

export default Blur;
