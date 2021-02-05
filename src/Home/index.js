function Home(props) {
    return (
        <>
            <h2>Home</h2>
            <form onSubmit={props.weatherSubmit}>
                <input type="text" placeholder="City" />
                <button type="submit">Get weather</button>
            </form>
            {props.weatherData ? <h3>{props.weatherData.name}</h3> : null}
        </>
    );
}

export default Home;