import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Navbar from "./Navbar"
import { UNSPLASH_KEY, WEATHER_KEY } from "./data"
import { useEffect, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Reset } from 'styled-reset'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"


const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  flex-direction: column;
}

h1, h2, p {
  font-family: 'Playfair Display', serif;
}

h3, h4, li, input, button {
  font-family: 'Work Sans', sans-serif;
}

h1 {
  font-size: 50px;
  font-weight: 500;
}

h2 {
  font-size: 45px;
}

h3 {
  font-size: 35px;
}

h4 {
  font-size: 25px;
}
`

const StyledHeader = styled.header`
background: black;
& > h1 {
  color: white;
  margin-left: 40px;
  line-height: 80px;
}
`

const StyledMain = styled.main`
margin: 50px 0;
& > h2 {
  margin-left: 80px;
  margin-top: 20px;
}
`

const StyledFlexContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
box-sizing: border-box;
`

const StyledSocials = styled.div`
box-sizing: border-box;
height: 0px;
padding: 5px 5px 0 0;
& a {
  margin: 0 12px;
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
      <Reset />
      <GlobalStyle />
      <StyledHeader>

        <StyledFlexContainer>
          <Navbar />
          <StyledSocials>
            <a href="https://github.com/filipclavin"><FontAwesomeIcon icon={faGithubSquare} size="4x" color="#FFFFFF" /></a>
            <a href="https://www.linkedin.com/in/filip-clavin-026354147/"><FontAwesomeIcon icon={faLinkedin} size="4x" color="#0077B5" /></a>
          </StyledSocials>
        </StyledFlexContainer>

        <h1>Filip Clavin</h1>

      </StyledHeader>

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
