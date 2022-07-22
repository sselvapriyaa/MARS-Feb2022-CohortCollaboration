import React from 'react';
import Greeshma from '../../images/Greeshma-PP.jpg';
import { Col, Container, Row} from "react-bootstrap";


function AboutGreeshma(props) {
  return (
    <div className="container">
            <div className='about_container'>
                <header>
                    <h1>Greeshma Earkkara Vishnu</h1>
                </header>
                <section className = "pagelayout">
                    <div className='section1'>
                        <img src={Greeshma} alt="picture of Greeshma" width = "100%"/>
                    </div>
                    <div className = "section2">
                        <h3>About Greeshma</h3>
                        <p>I am a Full stack developer Intern in Mars Returnship program.
                            I did my masters in Computer Applications.
                            Before Mars I worked as Software developer with 2 years of experience.
                            
                        </p>

                        <p>
                        •	Worked in agile development environment performing activities like daily scrums, sprints, and sprint presentations and tracking them in Jira Board.
                        </p>

                        <p>
                        •	Experience in full stack web application development using technologies like HTML, CSS, JavaScript, ReactJS, SQL Server, Java </p>
                        

                        <div>
                            <h4>Some of my works are:</h4>
                            <ul>
                                <li><a href="https://mars2022cohort.github.io/MARS-Feb2022-CohortCollaboration/" target='blank'>Project 1</a></li>
                              {/*  <li><a href="" target='blank'>Project 2</a></li>
                                <li><a href="" target='blank'>Project 3</a></li>*/}
                            </ul>
                        </div>

                    </div>
                    <div className = "section3">
                        <h3>Contact</h3>
                       { /*<p>Phone : <a href="tel:123456789">123456789</a> </p> */}
                        <p>email : <a href="mailto:ev.greesma@gmail.com">ev.greeshma@gmail.com</a></p>
                       {/* <p>URL : <a href="#">Greeshma's Portfolio</a> </p>*/}
                        
                    </div>
                    <div className = "section4">
                        Click here : <a href="" target='blank'>Resume</a>
                    </div>
                </section>
                <footer >  
                    <div className = "socialmedia"> 
                    {/* <p className = "icon1">
                        <a href = "https://www.facebook.com/" alt = "facebook link" target = "_blank">  
                            <i className="bi bi-facebook"></i>
                        </a>    
                    </p>
                    <p className = "icon2">
                        <a href = "https://www.instagram.com/" alt = "instagram link" target = "_blank"> 
                            <i className="bi bi-instagram"></i>
                        </a>     
                    </p>   */}
                    <p className = "icon3">
                        <a href = "https://www.linkedin.com/in/greeshmaev/" alt = "linkedin link" target = "_blank">  
                            <i className="bi bi-linkedin"></i>
                        </a>   
                    </p>   
                    <p className = "icon4">
                        <a href = "https://github.com/Grevcoder" alt = "github link" target = "_blank"> 
                            <i className="bi bi-github"></i>
                        </a> 
                    </p>
                    <p className = "icon5">
                        <a href="mailto:ev.greeshma@gmail.com" alt = "email link" target = "_blank"> 
                            <i className="bi bi-envelope-fill"></i>
                        </a> 
                    </p>
                    </div>
                    <p className = "copyright"> Copyright &copy; 2022 </p>
                </footer>
            </div>
        </div>
    );
}


export default AboutGreeshma;
