import React from 'react';
import AnnieW from '../../images/AnnieW.jpg';
import { Col, Container, Row} from "react-bootstrap";


function AboutAnnie(props) {
    return (
        <div className="container">
            <div className='about_container'>
                <header>
                    <h1>Annie Esther Wilson</h1>
                </header>
                <section className = "pagelayout">
                    <div className='section1'>
                        <img src={AnnieW} alt="picture of Annie" width = "100%"/>
                    </div>
                    <div className = "section2">
                        <h3>About Annie</h3>
                        <p>I am a Full stack developer Intern in Mars Returnship program.
                            I did my post graduation in Computer Applications.
                            Previous to Mars I worked as Web developer for 2 years.
                            
                        </p>

                        <p>
                        Working in agile development environment performing activities like daily scrums, sprints, and sprint retrospective presentations and tracking them in Jira Board.
                        </p>

                        <p>
                        Hands on Experience in designing  highly responsive user interface using HTML5, CSS3, ES6 Javascript and make it dynamic using Java and MSSQL.
                        Experienced in working on React Redux library for single page applications 
                        </p>
                        

                        <div>
                            <h4>Some of my works are:</h4>
                            <ul>
                                <li><a href="https://mars2022cohort.github.io/MARS-Feb2022-CohortCollaboration/" target='blank'>Project 1</a></li>
                                <li><a href="https://anniechris.github.io/budget-react-code/" target='blank'>Project 2</a></li>
                                <li><a href="https://anniechris.github.io/e-learning-redux-code/" target='blank'>Project 3</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className = "section3">
                        <h3>Contact</h3>
                        <p>Phone : <a href="tel:123456789">123456789</a> </p>
                        <p>email : <a href="mailto:annieesther3@gmail.com">annieesther3@gmail.com</a></p>
                        <p>URL : <a href="#">Annie's Portfolio</a> </p>
                        
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
                        <a href = "https://www.linkedin.com/in/annie-esther-wilson-063249100/" alt = "linkedin link" target = "_blank">  
                            <i className="bi bi-linkedin"></i>
                        </a>   
                    </p>   
                    <p className = "icon4">
                        <a href = "https://github.com/AnnieChris" alt = "github link" target = "_blank"> 
                            <i className="bi bi-github"></i>
                        </a> 
                    </p>
                    <p className = "icon5">
                        <a href="mailto:annieesther3@gmail.com" alt = "email link" target = "_blank"> 
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

export default AboutAnnie;