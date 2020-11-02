import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Row, Col, Button } from "react-bootstrap";

const CrazyCircle = dynamic(() => import("../../../components/illusions/crazyCircle"), {
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
    
                <CrazyCircle/>
              
  );
};

export default Blur;
