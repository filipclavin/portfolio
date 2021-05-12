import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import contactBg from "../img/contactBg.jpg"

const ContactContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${contactBg});
background-color: whitesmoke;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 65%;
min-width: 320px;
margin: 0 auto;
border: solid 20px black;
padding: 10vh 5vw;

& > * {
    padding: 20px 0;
}

& h3 {
    font-family: 'Playfair Display', serif;
    text-align: center;
    width: 65%;
    min-width: 300px;
}

& .links {
    display: flex;
    flex-wrap: wrap;
    width: 360px;
    justify-content: space-around;
}
`

function Contact() {
    return (
        <ContactContent>
            <h1>Contact</h1>
            <h3>I'm always happy to recieve business inquiries! You can reach me either on my LinkedIn or my E-mail:</h3>
            <div className="links">
                <a href="https://www.linkedin.com/in/filip-clavin-026354147/"><FontAwesomeIcon icon={faLinkedin} size="10x" color="#0077B5" /></a>
                <a href="mailto:filipclavin99@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} size="10x" color="#EC4134" /></a>
            </div>
        </ContactContent>
    );
}

export default Contact;