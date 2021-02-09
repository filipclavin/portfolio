import styled from "styled-components"

const WeatherWidget = styled.div`
background: ${props => props.weatherBackground ? `url(${props.weatherBackground.urls.small})` : 'null'};
background-size: 360px 540px;
width: 360px;
height: 540px;
`

function Weather(props) {
    return (
        <WeatherWidget weatherBackground={props.weatherBackground}>
            <form onSubmit={props.weatherSubmit}>
                <input type="text" placeholder="Enter location" />
                <button type="submit">Get weather</button>
            </form>
            { props.weatherData ? <h3>{props.weatherData.name}</h3> : null}
            { props.weatherData ? <img src={props.iconURL} alt="" /> : null}
            {/* { props.weatherBackground ? <img src={props.weatherBackground.urls.small} alt={props.weatherBackground.alt_description} /> : null} */}
        </WeatherWidget>
    )
}

export default Weather;