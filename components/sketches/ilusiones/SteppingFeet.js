export default function SteppingFeet(p5) {
  let showBars = true;
  let position = 0;
  let direction = 1;
  let showBlue = true;
  let showYellow = true;
  let sel;

  p5.setup = function () {
    p5.createCanvas(645, 300);
    p5.background(255);
    sel = p5.createSelect();
    sel.position(0, 0);
    sel.option(0.5);
    sel.option(1);
    sel.option(1.5);
    sel.option(2);
    sel.option(2.5);
    sel.option(3);
    sel.option(3.5);
    sel.option(4);
    sel.option(4.5);
    sel.option(5);
    sel.selected(0.5);
  };

  p5.draw = function () {
    p5.background(104, 104, 104);
    if (showBars) {
      p5.background(255);
      p5.fill(0);
      for (let x = 0; x < 650; x += 30) {
        p5.rect(x, 0, 15, 300);
      }
    }
    moveBricks();
  };

  function moveBricks() {
    p5.noStroke();
    if (showYellow) {
      p5.fill(255, 255, 0);
      p5.rect(position, 90, 65, 25);
    }
    if (showBlue) {
      p5.fill(0, 0, 139);
      p5.rect(position, 190, 65, 25);
    }

    
    position += parseFloat(sel.value()) * direction;

    if (position + 65 >= 645 || position <= 0) direction *= -1;
  }

  p5.keyPressed = function () {
    if (p5.keyCode === p5.ENTER) {
      showBars = !showBars;
    } else if (p5.keyCode === 89) {
      showYellow = !showYellow;
    } else if (p5.keyCode === 66) {
      showBlue = !showBlue;
    }
  };
}
