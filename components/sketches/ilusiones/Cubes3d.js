export default function Cubes3d(p5) {
  let xmag = 0;
  let ymag = 0;
  let newXmag;
  let newYmag;

  p5.setup = function () {
    p5.createCanvas(640, 360, p5.WEBGL);
    p5.translate(50, 50);
  };

  p5.draw = function () {
    p5.background(0);
    p5.translate(645 / 2 - 350, 360 / 2 - 170, -30);

    newXmag = (p5.mouseX / parseFloat(645)) * p5.TWO_PI;
    newYmag = (p5.mouseY / parseFloat(360)) * p5.TWO_PI;

    p5.rotateX(-ymag);
    p5.rotateY(-xmag);

    let diff = xmag - newXmag;
    if (Math.abs(diff) > 0.01) {
      xmag -= diff / 4.0;
    }

    diff = ymag - newYmag;
    if (Math.abs(diff) > 0.01) {
      ymag -= diff / 4.0;
    }

    p5.box(50);
    p5.fill(255, 245, 89);

    p5.translate(0, 0, 50);
    p5.box(50);
    p5.fill(155, 45, 89);
    p5.translate(0, 0, 50);
    p5.box(50);
    p5.fill(50, 45, 89);
    p5.translate(0, 0, -50);
    p5.translate(0, 0, -50);
    p5.translate(50, 0, 0);
    p5.box(50);
    p5.fill(255, 0, 123);
    p5.translate(50, 0, 0);
    p5.box(50);
    p5.fill(22, 0, 123);
    p5.translate(-100, 0, 0);
    p5.translate(0, 50, 0);
    p5.box(50);
    p5.fill(67, 0, 0);
    p5.translate(0, 50, 0);
    p5.box(50);
    p5.fill(0, 123, 0);
    p5.translate(0, -50, 50);
    p5.box(50);
    p5.fill(255, 0, 0);
    p5.translate(50, -0, 0);
    p5.box(50);
    p5.fill(5, 255, 0);
    p5.translate(0, -50, 0);
    p5.box(50);
    p5.fill(132, 12, 155);
    p5.translate(0, 50, -50);
    p5.box(50);
  };
}
