import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const WeatherBox = styled.div`
    text-align: center;
    width: 25%;
`;

const InputBox = styled.input`
    width: 100%;
    height: 5vw;
    border: 0.3vw solid black;
    border-radius: 1.5vw;
    box-sizing: border-box;
    padding-left: 2vw;
`

const WeatherContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 0.2vw solid black;
    border-radius: 1.5vw;
    box-sizing: border-box;
    margin-top: 2vw;
    padding: 0 2vw 0 2vw;
    text-align: left;
`

const WeatherAPI = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = process.env.REACT_APP_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    const searchWeather = async () => {
        try {
        const response = await axios.get(url);
            setWeather(response.data);
            setError(null);
        } catch (error) {
            setWeather(null);
            setError("Error: ", error);
        }
    };

    return (
        <WeatherBox>
            <InputBox type="text" placeholder="도시를 입력하세요" value={location} onChange={(e) => setLocation(e.target.value)} onKeyPress={(e) => {
                if (e.key === "Enter") {
                    searchWeather();
                }}}
            />
            {weather && (
                <WeatherContainer>
                    <h3>{weather.name}</h3>
                    <h1>{((((weather.main.temp-273.15)*10))/10).toFixed(1)}ºC</h1>
                    <h3 style={{textAlign: "right"}}>{weather.weather[0].description}</h3>
                </WeatherContainer>
            )}
            {error && <p>{error}</p>}
        </WeatherBox>
    );
};

export default WeatherAPI;
