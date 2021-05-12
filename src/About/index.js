import { faHtml5, faCss3, faJsSquare, faReact, faNodeJs, } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import background from "../img/aboutBg.jpg"
import pfp from "../img/pfp.jpg"
import styled from "styled-components";

const AboutContent = styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${background});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 65%;
min-width: 320px;
margin: 0 auto;
border: solid 20px black;
padding: 10vh 10vw;

& h1, h2 {
    text-align: center
}

& p {
    font-size: 20px;
}

& > * {
    padding: 20px 0;
}

& .aboutText {
    width: 70%;
    & img {
        height: 100px;
        border-radius: 100%;
        margin-right: 10px;
        float: left;
    }
}
`

const Techs = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
`

function About() {

    const diffMs = Date.now() - new Date(1999, 2, 3).getTime()
    const ageDt = new Date(diffMs)
    const age = ageDt.getUTCFullYear() - 1970

    return (
        <AboutContent>
            <h1>About me</h1>
            <div className="aboutText">
                <img src={pfp} alt="A picture of me" />
                <p>My name is Filip Clavin. I'm a {age} year old front-end development student, currently studying att <a href="https://kyh.se/">KYH</a> in Stockholm. I highly enjoy programming in JavaScript, but am also quite capable in HTML and CSS.
                Before my formal studies I taught myself some web development with Codecademy in hopes to make a career change, and I quickly found it both fun and fulfilling!</p>
            </div>
            <h2>Technologies I am familiar with:</h2>
            <Techs>
                <FontAwesomeIcon icon={faHtml5} size="7x" color="#E44D26" title="HTML" />
                <FontAwesomeIcon icon={faCss3} size="7x" color="#264DE4" title="CSS" />
                <FontAwesomeIcon icon={faJsSquare} size="7x" color="#F2DE4E" title="JavaScript" />
                <FontAwesomeIcon icon={faReact} size="7x" color="#61DAFA" title="React" />
                <FontAwesomeIcon icon={faNodeJs} size="7x" color="#80BD01" title="Node.js" />
            </Techs>

        </AboutContent>
    );
}

export default About;