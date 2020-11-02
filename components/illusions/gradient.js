import React, {
    useState,
    useEffect
} from "react";

const Gradient = () => {
    const [myRef] = useState(React.createRef());

    const Sketch = (p5) => {
        let linesVisible = false;

        p5.setup = () => {
            p5.createCanvas(640, 360);
        };

        p5.draw = () => {
          p5.ill = 3;
	        p5.background(255);
          for (let i=0; i<=600; i++) {
            p5.stroke((i*255/600));
            p5.line(i, 0, i, 600);
          }
          if (linesVisible) {
            showLines();
          }
          p5.noStroke();
          p5.fill(170);
          p5.rect(100, 120, 450, 100);

        };

        const showLines = () => {
            p5.background(255);
          }
        
          p5.mousePressed = () => {
            linesVisible = !linesVisible;
          }
    };

    useEffect(() => {
        const p5 = require("p5");
        const myP5 = new p5(Sketch, myRef.current);
    }, []);

    return <div ref = {
        myRef
    }
    />;
};

export default Gradient;