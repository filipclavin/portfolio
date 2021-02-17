import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import { UNSPLASH_KEY, WEATHER_KEY } from "./data";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
& > h1 {
  margin-left: 40px;
}
`

function App() {

  const [location, setLocation] = useState('stockholm')
  const [weatherData, setWeatherData] = useState()
  const [weatherBackground, setWeatherBackgound] = useState()
  const [iconURL, setIconURL] = useState()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${WEATHER_KEY}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(data => {
        setWeatherData(data)
        setIconURL(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
      })
      .catch(err => console.log(err))

    fetch(`https://api.unsplash.com/photos/random?query=${location}&featured&orientation=portrait&client_id=${UNSPLASH_KEY}`)
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
        <Navbar />
      </header>

      <StyledMain>
        <Switch>
          <Route exact path="/">
            <Home weatherData={weatherData} iconURL={iconURL} weatherSubmit={weatherSubmit} weatherBackground={weatherBackground} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </StyledMain>
    </Router>
  );
}

export default App;
