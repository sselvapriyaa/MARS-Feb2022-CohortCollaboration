import React from "react";
import { HashRouter as Router, Link, Routes, Route } from "react-router-dom";
// Bootstrap
import {
  Card,
  Carousel,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

// Personal Style
import "../components/styles.css";

// carousel background photos
import technology1 from "../images/technology1.jpg";
import Banner_Image from "../images/Banner_Image.jpg";
import Banner_Image1 from "../images/Banner_Image1.jpg";
import Banner_Image2 from "../images/Banner_Image2.jpg";

//Returners photos
import ColtonW from "../images/ColtonW.jpg";
import LynnR from "../images//LynnR.jpg";
import RichardF from "../images/RichardF.jpg";
import HeidiW from "../images/HeidiW.jpg";
import AnnieW from "../images/AnnieW.jpg";
import NagaK from "../images/Naga_Priya_Img_2.png";
import SelvapriyaA from "../images/SelvapriyaA.jpg";
import Greeshma from "../images/Greeshma-PP.jpg";


function Home(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={technology1}
            alt="FirstCarousel"
          />
          <Carousel.Caption>
            <h3 style={{ color: "white" }}>MARS RETURNSHIP</h3>
            <p style={{ color: "white" }}>
              The MARS Returnship program is an on-ramp for those looking to
              restart their careers in technology following a gap in employment.
              MARS provides on-the-job training, mentorship, and a partnership
              approach to prepare our cohorts to successfully rejoin the
              workforce. Meet the February 2022 Cohort!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner_Image}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "white" }}>MARS RETURNSHIP</h3>
            {<p style={{ color: "white" }}>
            Mars Returnship is a great platform to update our Professional development skills via remote training and also providing hands on experience in the latest technologies
            </p>} 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner_Image1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3  style={{ color: "black" }}>MARS RETURNSHIP</h3>
            <p  style={{ color: "black" }}>
            Mars Returnship focuses on reskilling and training to fill in the gaps and get the returner back on track.
            </p> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner_Image2}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>MARS RETURNSHIP</h3>
            {<p style={{ color: "black" }}>
            In Mars Returnship program we work collaboratively as a team to achieve our common goal. 
            </p>} 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br />
      {/* Personal Cards - Row 1 */}
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {/* <Col>
          <Card>
            <Link to="/Colton">              
                <Card.Img
                  className="rounded-circle"
                  variant="top"
                  src={ColtonW}
                />
                <Card.Body>
                  <Card.Title>Colton</Card.Title>
                  <Card.Text>Short Description</Card.Text>
                </Card.Body>
              
            </Link>
            </Card>
          </Col> */}

          <Col>
            <Card>
            <Link to="/Lynn"><Card.Img className="rounded-circle" variant="top" src={LynnR} />
              <Card.Body>
                  <Card.Title>Lynn</Card.Title>
                <Card.Text>
                  Experience in medical imaging, telecom, STEM education and
                  project mangement
                </Card.Text>
              </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card>
            <Link to="/Richard">
              <Card.Img
                className="rounded-circle"
                variant="top"
                src={RichardF}
              />
              <Card.Body>
                <Card.Title>Richard</Card.Title>
                <Card.Text>
                  Long time programmer who loves science and math.
                </Card.Text>
              </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card>
            <Link to="/Heidi">
              <Card.Img className="rounded-circle" variant="top" src={HeidiW} />
              <Card.Body>                
                  <Card.Title>Heidi</Card.Title>                
                <Card.Text>
                  Linguistics grad excited to transition to tech!
                </Card.Text>
              </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card>
            <Link to="/Annie">
              <Card.Img className="rounded-circle" variant="top" src={AnnieW} />
              <Card.Body>                
                  <Card.Title>Annie</Card.Title>                
                <Card.Text>
                  Worked as a Web Developer. Designed and Developed user
                  friendly dynamic Webpages using PHP.
                </Card.Text>
              </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>

      <br />

      {/* Personal Cards - Row 2 */}
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          

          <Col>
            <Card>
            <Link to="/NagaPriya">
              <Card.Img className="rounded-circle" variant="top" src={NagaK} />
              <Card.Body>                
                  <Card.Title>Naga Priya K</Card.Title>                
                <Card.Text>
                  Full Stack Intern, Experienced in Software Development and
                  Testing.
                </Card.Text>
              </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card>
            <Link to="/Selvapriya">
              <Card.Img
                className="rounded-circle"
                variant="top"
                src={SelvapriyaA}
              />
              <Card.Body>
                
                  <Card.Title>Selvapriya</Card.Title>
                
                <Card.Text>Experience in full stack web development</Card.Text>
              </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card>
            <Link to="/Greeshma">
              <Card.Img
                className="rounded-circle"
                variant="top"
                src={Greeshma}
              />
              <Card.Body>
              <Card.Title>Greeshma</Card.Title>            
                <Card.Text>Worked as a Software Developer.</Card.Text>
              </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
