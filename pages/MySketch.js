import React, {useState, useEffect} from 'react'

const MySketch = () => {

  const [myRef]= useState( React.createRef())

  const Sketch = (p5) => {
    let b
    let d
    p5.setup = function () {
      p5.createCanvas(100, 100)
      p5.background(0)
      b = new Box(p5, 0, 0, 20, 20)
      d = new Box(p5, 20, 20, 20, 20)
    }
    p5.draw = function () {
      p5.background(0)
      b.display()
      d.display()
    }
  }

  useEffect(() => {
    const p5 = require("p5") 
    const myP5 = new p5(Sketch, myRef.current)
  }, []);

    return <div ref={myRef}/>
  
}

class Box {
  constructor(_p, _x, _y, _w, _h) {
    // this p is our p5 instance object
    this.p = _p
    this.x = _x
    this.y = _y
    this.w = _w
    this.h = _h
  }

  display() {
    this.p.fill(255)
    this.p.rect(this.x, this.y, this.w, this.h)
  }
}

export default MySketch;
