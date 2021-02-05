import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import { API_KEY } from "./data";
import { useEffect, useState } from "react";


function App() {

  const [city, setCity] = useState('stockholm')
  const [weatherData, setWeatherData] = useState()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(data => setWeatherData(data))
      .catch(err => console.log(err))
  }, [city])

  function weatherSubmit(e) {
    e.preventDefault()
    setCity(e.target.firstChild.value)
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
            <Home weatherData={weatherData} weatherSubmit={weatherSubmit} />
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
