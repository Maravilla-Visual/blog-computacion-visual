export default function RedBall(p5) {

  let constx = -4;
  let consty = -0.4;
  let movx = 0;
  let movy = 0;
  let a = false;

  p5.setup = function () {
    p5.createCanvas(900, 500);
  };

  p5.draw = function () {
    p5.background(255);
    p5.translate(0, 500);

    p5.stroke(204, 102, 0);
    //   X1    Y1    X2   Y2
    p5.line(600, -400, 800, -225);
    p5.line(575, -350, 675, -260);
    p5.line(575, -300, 630, -254.5);
    p5.line(600, -400, 100, -345);
    p5.ellipse(100, -322, 25, 50);
    p5.line(575, -350, 100, -298);
    p5.line(575, -300, 199, -260);
    p5.ellipse(199, -235, 25, 50);
    p5.line(675, -260, 199, -211);
    p5.line(800, -225, 298, -171);
    p5.ellipse(298, -146, 25, 50);
    p5.line(800, -175, 298, -122);
    p5.line(575, -350, 575, -300);
    p5.line(800, -225, 800, -175);
    p5.line(600, -400, 800, -225);
    p5.line(575, -350, 675, -260);
    p5.fill(255, 0, 0);
    if (a == false) {
      p5.circle(630 + movx, -245 - movy, 55);
    } else {
      p5.circle(590 + movx, -390 - movy, 50);
    }
    p5.fill(255, 255, 255);
    if (movy < -100) {
      a = !a;
      movx = 0;
      movy = 0;
      constx = -5;
      consty = -0.5;
    }

    if (movx < -350 && a == false) {
      constx = -0.5;
      consty = -1;
    }
    if (movx < -550 && a == true) {
      constx = -0.5;
      consty = -1;
    }

    //count++;
    movx = movx + constx;
    movy = movy + consty;
  };
}
