import React from 'react';
import SelvapriyaA from '../../images/SelvapriyaA.jpg'
//import './AboutSelvapriya.css'
import '../About.css';
//import Container  from 'react-bootstrap/Container';

function AboutSelvapriya(props) {
    return (  
        <div className = "text-center">     
          <header className = "heading">
                <h5>Get to Know</h5>
                <h2>About Me</h2>
        </header> 
       
         <section className = "pagelayout"> 
         <div className = "section1">   
            <img src={SelvapriyaA} alt="picture of Selvapriya A "></img>
          </div>

          <div className = "section2">    
       I am a Full-Stack Developer with experience in Java, React JS, MS SQL.
       I have a Masters Degree in Computer Science. I am ready for a more challenging project.  
      </div>

      <div className = "section3">    
        Phone: 414 573 6665 <br></br>
        Email: selvapriyaphd@gmail.com<br></br>
        Portfolio website:      
      </div>
      <div className = "section4">    
        <a href = "https://www.linkedin.com/in/selvapriyaanandamirtharaj/" alt ="google drive resume"  
        >Resume </a>
       
      </div>
      </section>      
      <footer className = "socialmedia" >   
      <p className = "icon1">
        <a href = "" alt = "facebook link"
        target = "_blank"
        >  
        <i class="bi bi-facebook"></i>
          </a>    
      </p>
      <p className = "icon2">
        <a href = "" alt = "instagram link"
        target = "_blank"
        > 
      <i class="bi bi-instagram"></i>
      </a>     
      </p>  
      <p className = "icon3">
        <a href = "https://www.linkedin.com/in/selvapriyaanandamirtharaj/" alt = "linkedin link"
        target = "_blank"
        >  
        <i class="bi bi-linkedin"></i>
          </a>   
      </p>   
      <p className = "icon4">
        <a href = "https://github.com/sselvapriyaa" alt = "github link"
        target = "_blank"
        > 
        <i class="bi bi-github"></i>
        </a> 
        </p>
        </footer>
        <p className = "copyright">
      Copyright &copy; 2022
        </p> 
       
    </div>
  
    );
}
export default AboutSelvapriya;