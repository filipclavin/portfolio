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
            <h1>Home</h1>
            <HomeContent>
                <Introduction>
                    <h1>Hello, there! I'm Filip.</h1>
                    <h2>Welcome to my portfolio.</h2>
                    <p>I like working on creative solutions to problems with web-applications. Like this weather widget over to my right.</p>
                </Introduction>
                <Weather weatherData={props.weatherData} iconURL={props.iconURL} weatherSubmit={props.weatherSubmit} weatherBackground={props.weatherBackground} />

            </HomeContent>

        </>
    );
}

export default Home;