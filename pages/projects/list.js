import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const trabajos = [
    { id: '1', img: '/blog-computacion-visual/example1.jpg', title: 'Trabajo 1' },
    { id: '2', img: '/blog-computacion-visual/example2.jpg', title: 'Trabajo 2' }
]

export default function FirstPost() {
    
  return (
    <div className="row container m-5">
    { trabajos.map((trabajo) => (

    <Card style={{ width: "18rem" }} className="m-5">
      <Card.Img variant="top" src={trabajo.img} />
      <Card.Body>
        <Card.Title>{trabajo.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ir al {trabajo.title}</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
  );
}
