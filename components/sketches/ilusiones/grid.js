export default function Grid (p5) {
        p5.setup = () => {
            p5.createCanvas(640, 360); 
            p5.background(0); 
            p5.strokeWeight(3); 
            p5.smooth(); 
            p5.stroke(100, 100, 100);
            p5.noLoop();
        };

        p5.draw = () => {
            let step = 25; 

            for (let x = step; x < 640; x = x + step){
                p5.line(x, 0, x, 360); 
            }
            
            //horizontal lines
            for (let y = step; y < 360; y = y + step){
                p5.line(0, y, 640, y);
            }
            
            // Circles
            p5.smooth();
            p5.ellipseMode('CENTER');
            p5.stroke(256, 256, 256);  // white circles
            for (let i = step; i < 640 -5; i = i + step) {
              for (let j = step; j < 360 -15; j = j + step) {
                p5.strokeWeight(6); 
                p5.point(i, j);
                p5.strokeWeight(3); 
              }
            }

        };
};
