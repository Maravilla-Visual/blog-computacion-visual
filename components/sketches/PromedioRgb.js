export default function PromedioRGB(p5) {
  let image;
  let filteredImage;
  let imageURL = "/blog-computacion-visual/juan-pablo.png";
  // let filterApplied = false;

  p5.preload = () => {
    image = p5.loadImage(imageURL);
  };

  p5.setup = () => {
    p5.createCanvas(300, 300);
    image.loadPixels();
    filteredImage=p5.createImage(image.width,image.height);
    filteredImage.loadPixels();
    
    for (let i = 0; i < image.width; i++) {
      for (let j = 0; j < image.height; j++) {
        var index = (i + j * image.width) * 4;

        var r = image.pixels[index];
        var g = image.pixels[index + 1];
        var b = image.pixels[index + 2];

        let average = (r + g + b) / 3;

        filteredImage.pixels[index] = 255;
        filteredImage.pixels[index+1] = 0;
        filteredImage.pixels[index+2] = 255;

      }
    }
    filteredImage.updatePixels();

    p5.image(filteredImage, 0, 0,);
  };
  /*
  p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.imageURL !== null) {
        imageURL = props.imageURL;
        image = p5.loadImage(imageURL);
        filterApplied = true;
    }
  };*/
  /*
  p5.draw = () => {
    p5.image(image, 0, 0, 300, 300);
  };*/
}

//XDDDDDD
