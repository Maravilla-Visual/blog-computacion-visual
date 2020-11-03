export default function CrazyCircles(p5) {
  let n;
  let frameCounter;
  let amplitude;
  let linesVisible = false;

  p5.setup = function () {
    p5.createCanvas(500, 500);
    p5.textFont("Arial", 16, true);
    n = 2;
    frameCounter = 0;
    amplitude = 1;
    p5.noStroke();
    p5.colorMode(p5.HSB, 360, 255, 255);
  };

  p5.draw = function () {
    p5.background(0);
    p5.textAlign(p5.CENTER);
    p5.text("Number of balls: " + n, 500 / 2, 60);
    p5.push();
    p5.translate(500 / 2, 500 / 2);
    if (linesVisible) {
      showLines();
    }
    for (let i = 0; i < n; i++) {
      p5.rotate(p5.TWO_PI / n);
      p5.fill((360 * i) / n, 255, 255);
      p5.ellipse(
        50 *
          (1.1 +
            amplitude * Math.cos(0.075 * frameCounter + (p5.PI * 6 * i) / n)),
        0,
        8,
        8
      );
    }
    p5.pop();
    frameCounter++;
  };

  function showLines() {
    p5.stroke(100);
    for (let i = 0; i < n; i++) {
      p5.rotate(p5.TWO_PI / n);
      p5.line(150, 0, 5, 0);
    }
  }

  p5.keyPressed = function () {
    if (p5.keyCode === 187) n++;
    else if (p5.keyCode === 189) n--;
  };

  p5.mousePressed = function () {
    linesVisible = !linesVisible;
  };
}
