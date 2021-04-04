import Weather from "./Weather";
import styled from "styled-components";

const HomeContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 100px 0;
background-color: rgba(28, 0, 122, 0.5);
width: fit-content;
border-radius: 0 70px 0 70px;
margin: 0 auto;
`

const Introduction = styled.article`
flex-basis: 600px;
align-self: flex-start;
color: #aee8ff;
& > h1 {
    font-size: 60px;
}
& > h2 {
    font-size: 40px;
    line-height: 8rem;
}
& > p {
    font-size: 20px;
}
`

function Home(props) {
    return (
        <>
            <h2>Home</h2>
            <HomeContent>
                <Introduction>
                    <h1>Hello there! I'm Filip.</h1>
                    <br />
                    <br />
                    <h2>Welcome to my portfolio.</h2>
                    <p>I like working on creative technical solutions to problems with web-applications. Like this weather widget over to my right.</p>
                </Introduction>
                <Weather weatherData={props.weatherData} iconURL={props.iconURL} weatherSubmit={props.weatherSubmit} weatherBackground={props.weatherBackground} />

            </HomeContent>

        </>
    );
}

export default Home;