import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";
import WeatherForecast from "./components/WeatherForecast";
import CurrentWeather from "./components/CurrentWeather";

const currentWeatherData = {
  location: "London",
  temperature: 20,
};


const forecastData = [
  { date: "01/04", minTemp: 18, maxTemp: 22 },
  { date: "02/04", minTemp: 17, maxTemp: 23 },
  { date: "03/04", minTemp: 16, maxTemp: 24 },
  { date: "04/04", minTemp: 15, maxTemp: 25 },
  { date: "05/04", minTemp: 12, maxTemp: 26 },
  { date: "06/04", minTemp: 13, maxTemp: 21 },
  { date: "07/04", minTemp: 11, maxTemp: 29 },
  { date: "08/04", minTemp: 4, maxTemp: 28 },
  { date: "09/04", minTemp: 4, maxTemp: 28 },
  { date: "10/04", minTemp: 4, maxTemp: 28 },
  { date: "11/04", minTemp: 4, maxTemp: 28 },
  { date: "12/04", minTemp: 4, maxTemp: 28 },
]

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <CurrentWeather 
            location={currentWeatherData.location} 
            temperature={currentWeatherData.temperature} />
        <WeatherForecast forecast={forecastData} />
      </div>
    </ThemeProvider>
  );
};

export default App;