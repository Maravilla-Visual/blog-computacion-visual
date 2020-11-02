import React, {
    useState,
    useEffect
} from "react";

const Gradient = () => {
    const [myRef] = useState(React.createRef());

    const Sketch = (p5) => {
        let b1;
        let b2;
        let c1;

        p5.setup = () => {
          
            p5.createCanvas(640, 360);
            b1 = p5.color(255);
            b2 = p5.color(0);
            c1 = p5.color(192, 192, 192);

            p5.noLoop();
        };

        p5.draw = () => {
          setGradient(0, 0, 640/2, 360, b1, b2);
          setGradient(640/2, 0, 640/2, 360, b2, b1);
          setGradient(50, 130, 540, 80, c1, c1);
        };

        // const showLines = () => {
        //     p5.stroke(100);
        //     for (let i=0; i<n; i++) {
        //       p5.rotate(2* Math.pi/n);
        //       p5.line(150, 0, 5, 0);
        //     }
        //   }
        
          // p5.mousePressed = () => {
          //   linesVisible=!linesVisible;
          // }

          const setGradient = ( x, y, w, h, c1, c2 ) => {
              p5.fill(0);
              for (let i = x; i <= x+w; i++) {
                const inter = p5.map(i, x, x+w, 0, 1);
                const c = p5.lerpColor(c1, c2, inter);
                p5.stroke(c);
                p5.line(i, y, i, y+h);
              }
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