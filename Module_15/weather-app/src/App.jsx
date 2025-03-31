import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";
import WeatherForecast from "./components/WeatherForecast";
import CurrentWeather from "./components/CurrentWeather";


const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);

  //API key
  const API_KEY = "6a929d88eab89c322d8f8a26755189a7";
  const city = "Brasília";  

  useEffect(() => {
  const fetchWeatherData = async () => {
    try {
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const currentWeatherJson = await currentWeatherResponse.json();
      setCurrentWeatherData({
        location: currentWeatherJson.name,
        temperature: currentWeatherJson.main.temp,
      });

      const foreCastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      ); 
      const forecastJson = await foreCastResponse.json();
      const dailyForecast = forecastJson.list
        .filter((reading) => reading.dt_txt.includes("12:00:00"))
        .slice(0, 5)
        .map((forecast) => ({
          date: forecast.dt_txt.split(" ")[0],
          minTemp: forecast.main.temp_min,
          maxTemp: forecast.main.temp_max,
        }));
      setForecastData(dailyForecast);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };
  fetchWeatherData();
}, []);

    if (loading) {
      return <p>Loading...</p>;
    }
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
}
export default App;