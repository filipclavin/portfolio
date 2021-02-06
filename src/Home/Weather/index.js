function Weather(props) {
    return (
        <>
            <form onSubmit={props.weatherSubmit}>
                <input type="text" placeholder="Enter city or country" />
                <button type="submit">Get weather</button>
            </form>
            { props.weatherData ? <h3>{props.weatherData.name}</h3> : null}
            { props.weatherBackground ? <img src={props.weatherBackground.urls.regular} alt={props.weatherBackground.alt_description} /> : null}
        </>
    )
}

export default Weather;