import { loadableP5 as P5Wrapper } from "./loadable";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className=" modal-title">
        <Modal.Title id="contained-modal-title-vcenter">
          Explicación
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <p>
          {props.explication}
          <a href={props.link} target="_blank">
            {" "}
            Mas Información{" "}
          </a>
        </p>
        {props.controls.length>0? <h4>Controles</h4>: '' }
        <ul className="ilusion-explanation">
          {props.controls.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer className=" modal-title">
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function IlusionWrapper({ ilusion, ilusion2, explication, link, controls, title }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="main-projects-container">
      <div className="title">
        <h1 className="title-text">{title}</h1>
      </div>
      <div className="ilusion-wrap ilusion-wrap-overflow">
        <div className="ilusion-canvas">
          <P5Wrapper sketch={ilusion} />
          {ilusion2? (<div className="ilusion-canvas"><P5Wrapper sketch={ilusion2} /> </div>) : ''}
        </div>
      </div>
      <Button variant="light" onClick={() => setModalShow(true)}>
        Información
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        explication={explication}
        controls={controls}
        link={link}
      />
    </div>
  );
}

export default IlusionWrapper;
