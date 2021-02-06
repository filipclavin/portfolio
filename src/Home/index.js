import Weather from "./Weather";

function Home(props) {
    return (
        <>
            <h2>Home</h2>
            <Weather weatherData={props.weatherData} weatherSubmit={props.weatherSubmit} weatherBackground={props.weatherBackground} />
        </>
    );
}

export default Home;