import React, { useState, useEffect } from "react";

const Luma = ({ imageURL }) => {
  const [myRef] = useState(React.createRef());

  const Sketch = (p5) => {
    let image;

    p5.preload = () => {
      image = p5.loadImage(imageURL);
    };

    p5.setup = () => {
      p5.createCanvas(300, 300);
      image.loadPixels();

      for (let i = 0; i < image.width; i++) {
        for (let j = 0; j < image.height; j++) {

          let red = p5.red(image.get(i,j));
          let green = p5.green(image.get(i,j));
          let blue = p5.blue(image.get(i,j));

          let average = red*0.299 + green*0.587 + blue*0.114;

          image.set(i, j, p5.color(average, average, average));
        }
      }

      image.updatePixels();
      p5.noLoop();
    };

    p5.draw = () => {
      
      p5.image(image, 0, 0, 300, 300);
    };
  };

  useEffect(() => {
    const p5 = require("p5");
    const myP5 = new p5(Sketch, myRef.current);
  }, []);

  return <div ref={myRef} />;
};

export default Luma;
