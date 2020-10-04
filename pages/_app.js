import "../styles/globals.css";
import "../styles/stars_background.css";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ErrorMessage.css";
import Navbar from "../components/navbar/navbar";
import { Container, Row, Col } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="stars" />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Container fluid style={{ height: "100%" }}>
          <Row style={{ height: "100%"}}>
            <Col xs={3} lg={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Navbar />
            </Col>

            <Col xs={9} lg={10} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Component {...pageProps} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MyApp;
