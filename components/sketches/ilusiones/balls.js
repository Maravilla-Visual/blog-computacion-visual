
export default function Balls (p5) {
        let ballsMode = 0;

        p5.setup = () => {
            p5.createCanvas(640, 360);
        };

        p5.draw = () => {
            p5.ill = 2;
            p5.background(211,211,211);


            p5.fill(255, 0, 0);
            p5.strokeWeight(1)
            p5.ellipse(150, 150, 60, 60);
            p5.ellipse(450, 150, 60, 60);
            switch (ballsMode) {
                case 0:
                    showBalls();
                    break;
                case 1:
                    showRings();
                    break;
                default:
                    break;
            }

        };

        const showBalls = () => {
            p5.fill(0, 0, 255);
            p5.ellipse(150, 60, 100, 100);
            p5.ellipse(150, 240, 100, 100);
            p5.ellipse(60, 150, 100, 100);
            p5.ellipse(240, 150, 100, 100);
            p5.ellipse(450, 90, 40, 40);
            p5.ellipse(450, 210, 40, 40);
            p5.ellipse(390, 150, 40, 40);
            p5.ellipse(510, 150, 40, 40);
        }

        const showRings = () => {
            p5.noFill();
            p5.strokeWeight(8);
            p5.stroke(0, 0, 255);
            p5.circle(450, 150, 100);
            p5.circle(150, 150, 170);
        }

        p5.mousePressed = () => {
            if(ballsMode < 2) {
                ballsMode ++;
            } else {
                ballsMode = 0
            }
        }
};
