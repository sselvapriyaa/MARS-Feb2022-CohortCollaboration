import React from "react";
import HeidiW from "../../images/HeidiW.jpg";
import { Col, Container, Row } from "react-bootstrap";

function AboutHeidi(props) {
  return (
    <div className="container">
      <div className="about_container">
        <header>
          <h1>Heidi Willden</h1>
        </header>
        <section className="pagelayout">
          <div className="section1">
            <img src={HeidiW} alt="picture of Heidi" width="100%" />
          </div>
          <div className="section2">
            <h3>About Heidi</h3>
            <p>
              I am interning as a full-stack developer in the MARS Returnship
              program. I graduated with a BA in linguistics and worked at a
              research institute before deciding to transition to IT.
            </p>

            <p>
              Through MARS, I have gained experience developing React
              applications and websites with HTML5, CSS, JavaScript, and
              Bootstrap.
            </p>

            <p>
              I have also worked in an agile development environment, tracking
              sprint presentations and tasks in a Jira board and participating
              in daily scrum meetings. Please click{" "}
              <a
                href="https://docs.google.com/document/d/1WthQ1pY4a9EIrvf7oaN8PA-ZeS5RD4arNFi-rOVCKAY/edit?usp=sharing"
                target="blank"
              >
                here
              </a>{" "}
              to see my resume.
            </p>
          </div>
        </section>
        <footer>
          <div className="socialmedia">
            <p className="icon3">
              <a
                href="https://www.linkedin.com/in/heidi-willden-7aa59317a/"
                alt="linkedin link"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </p>
            <p className="icon4">
              <a
                href="https://github.com/momopeachyh"
                alt="github link"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </a>
            </p>
            <p className="icon5">
              <a
                href="mailto:heidi.willden@me.com"
                alt="email link"
                target="_blank"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </p>
          </div>
          <p className="copyright"> Copyright &copy; 2022 </p>
        </footer>
      </div>
    </div>
  );
}

export default AboutHeidi;
