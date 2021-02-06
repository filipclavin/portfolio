import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import { UNSPLASH_KEY, WEATHER_KEY } from "./data";
import { useEffect, useState } from "react";


function App() {

  const [location, setLocation] = useState('stockholm')
  const [weatherData, setWeatherData] = useState()
  const [weatherBackground, setWeatherBackgound] = useState()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_KEY}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(data => setWeatherData(data))
      .catch(err => console.log(err))
  }, [location])

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?query=${location}&client_id=${UNSPLASH_KEY}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(data => setWeatherBackgound(data))
      .catch(err => console.log(err))
  }, [location])

  function weatherSubmit(e) {
    e.preventDefault()
    setLocation(e.target.firstChild.value)
    e.target.firstChild.value = ''
  }

  return (
    <Router>
      <header>
        <h1>Filip Clavin</h1>
        <Navbar />
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Home weatherData={weatherData} weatherSubmit={weatherSubmit} weatherBackground={weatherBackground} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
