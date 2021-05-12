import styled from "styled-components"

const WeatherWidget = styled.div`
background: ${props => props.weatherBackground ? `url(${props.weatherBackground.urls.small})` : 'null'};
background-repeat: no-repeat;
background-size: cover;
width: 32%;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
color: rgb(235, 235, 235);
@media (max-width: 1539px) {
    width: 40%;
    min-width: 300px;
    
  }
& > form {
    text-align: center;
    position: relative;
    width: 100%;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.55);
    display: flex;
    flex-direction: column;
    align-items: center;
    & input, button {
        text-align: center;
        margin-bottom: 10px;
    }
    & input {
        padding-top: 10px;
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0);
        color: rgb(200, 200, 200);
        border: none;
        border-bottom: 2px solid rgba(125, 125, 125, 0.5);
        outline: none;
    }
    & input:focus {
        background-color: rgba(0, 0, 0, 0.2);
        color: rgb(255, 255, 255);
        border-bottom: 2px solid rgb(125, 125, 125);
    }
    & button {
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.5);
        color: rgb(200, 200, 200);
        border: 2px solid rgba(200, 200, 200, 0.8);
        outline: none;
        cursor: pointer;
    }
    & button:hover {
        background-color: rgba(200, 200, 200, 0.75);
        border: 2px solid rgba(0, 0, 0, 0.8);
        color: rgb(30, 30, 30);
        font-weight: 500;
    }
    & h2 {
        margin-bottom: 0;
    }
}
`

function Weather(props) {
    return (
        <WeatherWidget weatherBackground={props.weatherBackground}>
            <form onSubmit={props.weatherSubmit}>
                <input type="text" placeholder="Enter location" /> <br />
                <button type="submit">Get weather</button>
                {props.weatherData ? <h3>{props.weatherData.name}</h3> : null}
                <div>
                    {props.weatherData ? <img src={props.iconURL} alt="" /> : null}
                    {props.weatherData ? <h4>{props.weatherData.main.temp} &deg;C</h4> : null}
                </div>
            </form>
        </WeatherWidget>
    )
}

export default Weather;