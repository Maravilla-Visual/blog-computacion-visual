import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sketch from "react-p5";


const TestP5 = (props) => {
  let x = 50;
  const y = 50;

  const setup = (p5, canvasParentRef) => {
      p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
      p5.background(0);
      p5.ellipse(x, y, 70, 70);
      x++;
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default function Home() {

  return (
    <div className={styles.container}>
      <h1> Test </h1>
      <TestP5 />
    </div>
  )
}
