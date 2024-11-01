import React from 'react';
import './Weather.css';
import { useState } from 'react';
// import './Weather.html';

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = '0e565ab2a350c81b0346fd5c061c1059';
    const getWeather = () => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

        fetch(URL)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    setWeatherData({
                        temp: data.main.temp,
                        description: data.weather[0].description
                    });
                    setError(null);
                } else {
                    setWeatherData(null);
                    setError("city not found");
                }
            })
            .catch(error => {
                setError("Error while fetching data..");
                console.error("Error: ", error);
            });
    };

    return (
        <div className="weatherContainer">
            <h1>Weather App</h1>
            <input type='text' value={city} onChange={(event) => setCity(event.target.value)} placeholder='Enter city name' />
            <button onClick={getWeather}>Get Weather</button>

            {error && <p className='error'>{error}</p>}
            {weatherData && (
                <div>
                    <h1 style={{color:"white"}}>{city}</h1>
                    <p style={{color:'white'}}>Temprature {weatherData.temp} °C</p>
                    <p style={{color:'white'}}>Description {weatherData.description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;