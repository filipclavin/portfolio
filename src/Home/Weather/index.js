import styled from "styled-components"

const WeatherWidget = styled.div`
background: ${props => props.weatherBackground ? `url(${props.weatherBackground.urls.small})` : 'null'};
background-size: 400px 500px;
width: 400px;
height: 500px;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
color: rgb(235, 235, 235);
& > form {
    text-align: center;
    position: relative;
    width: fit-content;
    padding 30px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    & input {
        text-align: center;
        margin-bottom: 10px;
    }
    & h2 {
        margin-bottom: 0;
    }
    & h3 {
        margin: 0;
    }
}
`

function Weather(props) {
    return (
        <WeatherWidget weatherBackground={props.weatherBackground}>
            <form onSubmit={props.weatherSubmit}>
                <input type="text" placeholder="Enter location" /> <br />
                <button type="submit">Get weather</button>
                {props.weatherData ? <h2>{props.weatherData.name}</h2> : null}
                <div>
                    {props.weatherData ? <img src={props.iconURL} alt="" /> : null}
                    {props.weatherData ? <h3>{props.weatherData.main.temp} &deg;C</h3> : null}
                </div>
            </form>
        </WeatherWidget>
    )
}

export default Weather;