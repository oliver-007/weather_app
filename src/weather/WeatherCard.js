import React, { useEffect, useState } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}: ${date.getMinutes()}`;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-cloud");

          break;

        case "Haze":
          setWeatherState("wi-dust");

          break;

        case "Clear":
          setWeatherState("wi-day-sunny");

          break;

        case "Mist":
          setWeatherState("wi-day-fog");

          break;

        case "Rain":
          setWeatherState("wi-rain");

          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>
              {temp}
              <i className="wi wi-celsius"></i>
            </span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name} <br />
              {country}
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr}
                <br /> Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br /> Humidity{" "}
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure{" "}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
