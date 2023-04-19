import React from "react";
import './About.css';
import { } from 'react-icons/fa';
import { FaInstagram, FaGithub, FaLinkedin, FaReact, FaCss3, FaJs, FaHtml5 } from 'react-icons/fa';

class About extends React.Component {
    constructor(props) {
        super(props);
    }


render() {
    return (
        <>
        <section className="imagen">
    <h2 className="Sobremi4">Hello, I introduce myself, I am Francisco Jesus Sanabria!😃</h2>
    <h3 className="Sobremi1">This is my first project handling different types of languages.
I am in the process of becoming a full stack developer.🖥️<br></br>
Next, I will leave my contacts so that they can communicate with me about any concerns.<br></br></h3>
   <p><a  href="https://www.instagram.com/fran.sanabria/" target="_blank"> <FaInstagram className="instagram">
            <li className="instagram">instagram</li></FaInstagram></a>
            <a  href="https://github.com/FranSanabri" target="_blank"> <FaGithub className="github">
            <li className="github">github</li></FaGithub></a>
            
            <a  href="https://www.linkedin.com/in/francisco-jesus-sanabria-07b189236/" target="_blank"> <FaLinkedin className="linkedin">
            <li className="linkedin">Linkedin</li></FaLinkedin></a>

            <FaReact className="react">
            <li className="react">react</li></FaReact>

            <FaCss3 className="css">
            <li className="css">css</li></FaCss3>

            <FaJs className="js">
            <li className="js">js</li></FaJs>

            <FaHtml5 className="html5">
            <li className="html5">html5</li></FaHtml5>

            </p>
            <p className="texto2">Lenguages used for the project, in the process of adding more.</p>
            <p className="texto3">Contacts</p>
            <div>
                <img src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Image.png" className="foto"></img>
            </div>
            <p className="info">ABOUT</p>
            <p className="derechos">Thank you for visiting my Project!</p>
    </section>
        </>
        
     );
     
    }
}
export default About