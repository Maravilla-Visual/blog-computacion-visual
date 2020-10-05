import { Tabs, Tab } from "react-bootstrap";
import Materia from "./materia";

const integrantes = [
  {
    name: "Andres Chaves",
    img: "/blog-computacion-visual/andres-chaves.png",
    email: "adchavesm@unal.edu.co",
    key: "integrante1",
    github: 'adchavesm',
    hobbies: ['Bicicletas', 'Carros'],
    interests: ['ML', 'Web-developer', 'Cloud Computing'],
    experience: 'Estudiante Universidad Nacional'
  },
  {
    name: "Juan Pablo Giron",
    img: "/blog-computacion-visual/juan-pablo.png",
    email: "jpgironb@unal.edu.co",
    key: "integrante2",
    github: 'jpgironb',
    hobbies: ['Salir', 'Jugar'],
    interests: ['ML', 'IA' ],
    experience: 'Estudiante Universidad Nacional'
  },
  {
    name: "Andres Velandia",
    img: "/blog-computacion-visual/andres-velandia.png",
    email: "anfvelandiaer@unal.edu.co",
    key: "integrante3",
    github: 'anfvelandiaer',
    hobbies: ['Cine', 'Libros', 'Música'],
    interests: ['ML', 'Web-developer', 'Arquitectura de software'],
    experience: 'Estudiante Universidad Nacional'
  },
];

export default function About() {
  return (
    <div className="about">
    <div className="title">
      <h1 className="title-text">Sobre Nosotros</h1>
    </div>

    <div className="tabs">
    <Tabs defaultActiveKey="first" transition={false} id="noanim-tab-example">
      <Tab eventKey="first" title="Materia">
        <Materia/>
      </Tab>
      {integrantes.map((item) => (
        <Tab eventKey={item.key} title={item.name}>
          <div className="about-body row">
            <div className="col-3 m-2">
              <img src={item.img} alt="Jane" className="about-perfil-img" />
              <div className="principal-information">
              <h4 className="perfil-name">{item.name}</h4>
              <p className="perfil-email">{item.email}</p>
              <p className="perfil-github">{item.github}</p>
              </div>
            </div>
            <div className="col-8">
              <div className="container">
                <h2 className="personal-information">Información Personal</h2>
                <b> Experiencia: </b> <p>{item.experience}</p>
                <b> Intereses: </b> 
                <ul>
                {item.interests.map((interest) => (
                  <li> {interest} </li>
                ))}
                </ul>

                <b> Hobbies: </b> 
                <ul>
                {item.hobbies.map((hobbie) => (
                  <li> {hobbie} </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </Tab>
      ))}
    </Tabs>
    </div>
    </div>
  );
}
