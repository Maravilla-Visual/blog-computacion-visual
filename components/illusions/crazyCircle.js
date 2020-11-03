import React, {
    useState,
    useEffect
} from "react";

const CrazyCircle = () => {
    const [myRef] = useState(React.createRef());

    const Sketch = (p5) => {
        let n;
        let frameCounter;
        let amplitude;
        let linesVisible = false;

        p5.setup = () => {
            p5.createCanvas(500, 500);
            // p5.createFont("Arial", 16, true);
            n = 16;
            frameCounter = 0;
            amplitude = 1;
            p5.noStroke();
            p5.colorMode('HSB', 360, 255, 255);
        };

        p5.draw = () => {
            p5.background(0, 0, 0);
            // p5.textAlign(CENTER);
            p5.text("Number of balls: " + n, 500 / 2, 60);
            p5.push();
            p5.translate(500 / 2, 500 / 2);
            if (linesVisible) {
                showLines();
            }
            for ( let i = 0; i < n; i++) {
                p5.rotate(2 * Math.pi / n);
                p5.fill(360 * i / n, 255, 255);
                p5.ellipse(50 * (1.1 + amplitude * Math.cos(.075 * frameCounter + Math.pi * 6 * i / n)), 0, 8, 8);
            }
            p5.pop();
            frameCounter++;
        };

        const showLines = () => {
            p5.stroke(100);
            for (let i=0; i<n; i++) {
              p5.rotate(2* Math.pi/n);
              p5.line(150, 0, 5, 0);
            }
          }
        
          p5.mousePressed = () => {
            linesVisible=!linesVisible;
          }

          p5.keyPressed =(event) => {
            p5.stroke(100);
            if (event.key =='+') {
              n++;
            } else if (event.key =='-') {
              n--;
            }
            console.log(n);
            
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

export default CrazyCircle;