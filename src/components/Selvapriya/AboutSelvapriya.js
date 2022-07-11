import React from "react";
import SelvapriyaA from "../../images/SelvapriyaA.jpg";
//import './AboutSelvapriya.css'
import "../About.css";
//import Container  from 'react-bootstrap/Container';
//Selva added comment

function AboutSelvapriya(props) {
  return (
    <div className="container">
      <div className="about_container">
        <header className="heading">
          <h1>Selvapriya Anand Amirtharaj</h1>
        </header>

        <section className="pagelayout">
          <div className="section1">
            <img
              src={SelvapriyaA}
              alt="picture of Selvapriya A "
              width="100%"
            ></img>
          </div>

          <div className="section2">
            <h3>About Selvapriya</h3>
            <p>I am a Full-Stack Developer with experience
            in Java, React JS, MS SQL. I have a Masters Degree in Computer
            Science. Previously, I worked as a Web Developer Intern.
            </p>
            <p>
            Worked in an Agile environment, served as Scrum Master, 
            and performed Sprint presentations in monthly Sprint Retrospective.
            </p>
            <div>
              <h4>Some of my works are:</h4>
              <ul>
                  <li><a href = "https:/sselvapriyaa.github.io/MARS-Feb2022-CohortCollaboration/" target="blank">Project 1</a></li>
                  <li><a href = " " target="blank"></a>Project 2</li>
                  <li><a href = " " target="blank"></a>Project 3</li>      
              </ul>
            </div>

            </div>
          <div className="section3">
           <h3>Contact</h3>
           <p>Phone : <a href="tel:123456789">123456789</a></p>
           <p>email : <a href="mailto:selvapriyaphd@gmail.com"> selvapriyaphd@gmail.com </a></p>
           <p>URL: <a href ="#">Selvapriya's Portfolio</a></p> 
            
          </div>
          <div className="section4">
            Click here: {""}
            <a
              href="https://bit.ly/3nSwxJS"
              alt="google drive resume"
            >
              Resume{" "}
            </a>
          </div>
        </section>
        <footer>
          <div className="socialmedia">
          <p className="icon1">
              <a
                href="https://www.linkedin.com/in/selvapriyaanandamirtharaj/"
                alt="linkedin link"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </p>
            <p className="icon2">
              <a
                href="https://github.com/sselvapriyaa"
                alt="github link"
                target="_blank"
              >
                <i class="bi bi-github"></i>
              </a>
            </p>
            <p className="icon3">
              <a href="mailto:selvapriyaphd.gmail.com" alt="email link" target="_blank">
              <i class="bi bi-envelope-fill"></i>      
              </a>
            </p>
          </div>
          <p className="copyright">Copyright &copy; 2022</p>
        </footer>
      </div>
    </div>
  );
}
export default AboutSelvapriya;
