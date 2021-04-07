import Weather from "./Weather";
import styled from "styled-components";
import { useState, useEffect } from "react";

const HomeContent = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 10vh 1vw;
background-color: rgba(28, 0, 122, 0.5);
width: 65%;
min-width: 320px;
border-radius: 0 70px 0 70px;
margin: 0 auto;
& > * {
    margin: 20px;
}
`

const Introduction = styled.article`
flex-basis: 600px;
color: #aee8ff;
& > h1 {
    font-size: 60px;
    line-height: 0.5;
}
& > h2 {
    font-size: 40px;
    line-height: 8rem;
}
& > p {
    font-size: 20px;
}
`

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions;
}

function Home(props) {
    const width = useWindowDimensions()

    return (
        <HomeContent>
            <Introduction>
                <h1>Hello there! I'm Filip.</h1>
                <br />
                <br />
                <h2>Welcome to my portfolio.</h2>
                <p>I like working on creative technical solutions to problems with web-applications. Like this weather widget {width > 1539 ? 'over to my right' : 'below me'}. It both collects weather data from OpenWeatherMap and sets the background picture for the widget from Unsplash based on the location you enter.</p>
            </Introduction>
            <Weather weatherData={props.weatherData} iconURL={props.iconURL} weatherSubmit={props.weatherSubmit} weatherBackground={props.weatherBackground} />
        </HomeContent>
    );
}

export default Home;