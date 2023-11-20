import styled from "styled-components";
import WeatherAPI from "../Components/WeatherAPI";

const WeatherContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Weather = () => {
    return (
        <WeatherContainer>
        <WeatherAPI />
        </WeatherContainer>
    );
};

export default Weather;
