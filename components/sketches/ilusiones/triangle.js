
export default function Triangle (p5) {
        p5.setup = () => {
            p5.createCanvas(640, 360);
	        p5.background(211,211,211);
	        p5.strokeWeight(5)
	        p5.fill(211,211,211)
	        p5.triangle(300,20, 200,220, 400,220)
	        p5.fill(0)
	        p5.strokeWeight(10)
	        p5.ellipse(200,100, 90,90)
	        p5.ellipse(400,100, 90,90)
	        p5.ellipse(300,300, 90,90)
	        p5.noStroke()
	        p5.fill(211,211,211)
	        p5.triangle(300,300, 200,100, 400,100)
        };
};