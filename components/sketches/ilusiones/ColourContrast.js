export default function PromedioRGB(p5) {
  let image;
  let imageURL = "/blog-computacion-visual/angelina_jolie-bw.jpg";
  let slider;
  //let rectangle;

  p5.preload = () => {
    image = p5.loadImage(imageURL);
  };

  p5.setup = () => {
    p5.createCanvas(393, 512);
    p5.noStroke();
    slider = p5.createSlider(0, 255, 0, 5);
    slider.position(10, 10);
    slider.style("width", "300px");
  };

  p5.draw = function () {
    p5.background(0);
    p5.image(image, 0, 0);
    p5.fill(255, 0, 0, slider.value());
    p5.beginShape();

    p5.vertex(0, 0);
    p5.vertex(180, 0);
    p5.vertex(180, 512);
    p5.vertex(0, 512);

    p5.beginContour();
    p5.vertex(105, 182);
    p5.vertex(105, 200);
    p5.vertex(127, 200);
    p5.vertex(127, 182);
    p5.endContour();
    p5.endShape(p5.CLOSE);
  };
}
