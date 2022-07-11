import React from "react";
import LynnR from "../../images/LynnR.jpg";
import { Col, Container, Row } from "react-bootstrap";

function AboutLynn(props) {
  return (
    <div className="container">
      <div className="about_container">
        <header>
          <h1>Lynn Ameen Rollins</h1>
        </header>
        <section className="pagelayout">
          <div className="section1">
            <img src={LynnR} alt="picture of Annie" width="100%" />
          </div>
          <div className="section2">
            <h3>About Lynn</h3>
            <p>
              I am currently working with the Mars Returnship program to return
              to the world of IT. In the returnship, I gained experience in
              full-stack development (HTML, CSS, Javascript, Java, React, Redux,
              and MySQL) and in DevOps (Ansible, Docker, Kubernetes, Helm,
              Packer and Terraform). I was recently certified as an AWS Cloud
              Practitioner and am working towards earning my CKA.
            </p>

            <p>
              Prior to Mars, I have many years of experience as an educator in
              higher education- in particular with STEM education that involves
              community engaged learning. As the inaugural program director for
              the Center for Engineering Action at CWRU, I addressed the unique
              challenges associated with nascent systems-change efforts.
              Previous to my time in academia, I worked in the medical imaging
              and telecommunications field. Designing and developing customer
              facing software applications.
            </p>

            <p>
              I hold a Master's degree in Neuroscience and Biomedical
              Engineering from Case Western Reserve University and a Bachelor’s
              degree in Chemical Engineering from the University of Dayton.
            </p>

            <p>
              I possess the discipline, motivation and flexibility required to
              bring a new vision to reality. I am comfortable working in an
              agile environment with a variety of stakeholders to meet goals and
              objectives in a timely fashion. I am a strong communicator, both
              orally and in writing, and I enjoy working in teams, both large
              and small. I am forward-thinking, detail-oriented, a creative
              problem solver and have a reputation for reliability and kindness.{" "}
            </p>
            <p>
              Please click here my{" "}
              <a
                href="https://docs.google.com/document/d/1loLPX6hK8vfpOYyK_Rk-smIPBNx8Ddmjvae_ihhRWCo/edit?usp=sharing"
                target="blank"
              >
                here
              </a>
              {""} to view my resume.
            </p>
          </div>
        </section>
        <footer>
          <div className="socialmedia">
            <p className="icon3">
              <a
                href="https://www.linkedin.com/in/lynn-ameen-rollins-67ab601a9/"
                alt="linkedin link"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </p>
            <p className="icon4">
              <a
                href="https://github.com/lynnameenrollins"
                alt="github link"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </a>
            </p>
            <p className="icon5">
              <a
                href="mailto:lynnameenrollins@gmail.com"
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

export default AboutLynn;
