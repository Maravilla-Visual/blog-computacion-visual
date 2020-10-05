import React, { useState, useEffect } from "react";

const Blur = ({ imageURL, kernelSize }) => {
  const [myRef] = useState(React.createRef());

  const Sketch = (p5) => {
    let image;

    p5.preload = () => {
      image = p5.loadImage(imageURL);
    };

    p5.setup = () => {
      console.log("ESTOY EN BLUR");
      const size = kernelSize;
      const sigma = 15.0;
      const mid = parseInt(size / 2);
      const kernel = [];
      let sum = 0;
      for (let x = -mid; x <= mid; x++) {
        kernel.push(Array(size).fill(0));
        for (let y = -mid; y <= mid; y++) {
          kernel[x + mid][y + mid] =
            Math.exp(-(x * x + y * y) / (2 * sigma * sigma)) /
            (2 * 3.1416 * sigma * sigma);
          sum += kernel[x + mid][y + mid];
        }
      }

      for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
          kernel[i][j] /= sum;
        }
      }
      //console.log(mid)
      //console.log(kernel)//

      p5.createCanvas(200, 200);
      image.loadPixels();

      for (let i = 0; i < image.width; i++) {
        for (let j = 0; j < image.height; j++) {
          if (
            i < mid + 1 ||
            j < mid + 1 ||
            i > image.width - (mid + 1) ||
            j > image.height - (mid + 1)
          ) {
          } else {
            let rb = 0;
            let gb = 0;
            let bb = 0;
            let a = 0;
            let b = 0;

            for (let z = -mid; z <= mid; z++) {
              a = 0;
              for (let v = -mid; v <= mid; v++) {
                rb = rb + p5.red(image.get(i + z, j + v)) * kernel[a][b];
                gb = gb + p5.green(image.get(i + z, j + v)) * kernel[a][b];
                bb = bb + p5.blue(image.get(i + z, j + v)) * kernel[a][b];
                a++;
              }
              b++;
            }

            image.set(i, j, p5.color(rb, gb, bb));
          }
        }
      }

      image.updatePixels();
      p5.noLoop();
    };

    p5.draw = () => {
      p5.image(image, 0, 0, 200, 200);
    };
  };

  useEffect(() => {
    const p5 = require("p5");
    const myP5 = new p5(Sketch, myRef.current);
  }, []);

  return <div ref={myRef} />;
};

export default Blur;
