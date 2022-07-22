import React from 'react';
import img from '../../images/Naga_Priya_Img_2.png';

function AboutNaga(props) {
    return (
        <div className="container">
            <div  className='about_container'>
                <header>
                    <h1>Naga Priya Karuppusami</h1>
                </header>
                <section className = "pagelayout">
                    <div className='section1'>
                        <img src={img} alt="Picture of Naga Priya K" width = "100%"/>
                    </div>
                    <div className = "section2">
                        <h3>About Naga Priya</h3>
                        <p style={{lineHeight: 200+'%'}}>I am a Computer Engineering Graduate, experienced in Software Development and Testing. I have worked on Life Critical Aircraft Software in accordance with DO-178 B standards.</p>
                
                        <p style={{lineHeight: 200+'%'}}>I am inquisitive and curious to learn, understand and implement new ideas. I love long walks, listening to music and playing board games with my family and friends.</p>

                        <p style={{lineHeight: 200+'%'}}>Currently, I am a fullstack developer intern at Mars Solution Group, gaining hands on Experience in developing webpages using HTML, CSS and Java Script, creating React components and managed application state using redux. </p>
                
                        
                        <div>
                            <h4>Some of my works are:</h4>
                            <ul>
                                <li><a href="https://mars2022cohort.github.io/MARS-Feb2022-CohortCollaboration/" target='blank'>Project 1</a></li>
                                {/* <li><a href="https://anniechris.github.io/budget-react-code/" target='blank'>Project 2</a></li>
                                <li><a href="https://anniechris.github.io/e-learning-redux-code/" target='blank'>Project 3</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className = "section3">
                        <h3>Contact</h3>
                        <p>Phone : <a href="tel:xxxxxxxxxx">xxxxxxxxxx</a> </p>
                        <p>E-mail : <a href="mailto:nagapriya.cks@gmail.com">nagapriya.cks@gmail.com</a></p>
                        <p>URL : <a href="#">Naga Priya's Portfolio</a> </p>
                        
                    </div>
                    <div className = "section4">
                        Click here : <a href="https://docs.google.com/document/d/1bNccnbE1Hu_netqtPtB9PXCnOIj5swTQ/edit?usp=sharing&ouid=103724420871834588165&rtpof=true&sd=true" target='blank'>Resume</a>
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
                        <a href = "https://www.linkedin.com/in/nagapriya-cks-316a3a15/" alt = "linkedin link" target = "_blank">  
                            <i className="bi bi-linkedin"></i>
                        </a>   
                    </p>   
                    <p className = "icon4">
                        <a href = "https://github.com/Naga-Priya" alt = "github link" target = "_blank"> 
                            <i className="bi bi-github"></i>
                        </a> 
                    </p>
                    <p className = "icon5">
                        <a href="mailto:nagapriya.cks@gmail.com" alt = "email link" target = "_blank"> 
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

export default AboutNaga;