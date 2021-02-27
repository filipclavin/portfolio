import Weather from "./Weather";
import styled from "styled-components";

const HomeContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 100px;
`

const Introduction = styled.article`
padding: 20px;
flex-basis: 600px;
`

function Home(props) {
    return (
        <>
            <h2>Home</h2>
            <HomeContent>
                <Introduction>
                    <h3>Hello, there! I'm Filip.</h3>
                    <h4>Welcome to my portfolio.</h4>
                    <br />
                    <p>I like working on creative solutions with web-applications. Like this weather widget over to my right.</p>
                </Introduction>
                <Weather weatherData={props.weatherData} iconURL={props.iconURL} weatherSubmit={props.weatherSubmit} weatherBackground={props.weatherBackground} />

            </HomeContent>

        </>
    );
}

export default Home;