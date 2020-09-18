import React from 'react'
import dynamic from 'next/dynamic'

const p5 = dynamic(
  () => import("p5"),
  { ssr: false }
)

class MySketch extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = p => {
    let b
    let d

    p.setup = function () {
      p.createCanvas(100, 100)
      p.background(0)
      b = new Box(p, 0, 0, 20, 20)
      d = new Box(p, 20, 20, 20, 20)
    }
    p.draw = function () {
      p.background(0)
      b.display()
      d.display()
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return <div ref={this.myRef} />
  }
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
