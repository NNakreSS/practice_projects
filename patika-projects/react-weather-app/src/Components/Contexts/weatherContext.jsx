import { createContext, useState, useContext, useEffect } from "react";
import propTypes from "prop-types";
import axios from "axios";

const WeatherContext = createContext();

const apiKey = "";
const WeatherProvider = ({ children }) => {
  const [weathers, setWeather] = useState();
  const [city, setCity] = useState("Adana");
  const [citys, setCitys] = useState();

  useEffect(() => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city} ,TR&lang=tr&appid=${apiKey}`;
    axios(apiUrl)
      .then(({ data }) => {
        const weatherList = data.list;
        const dailyWeatherData = {};
        weatherList.map((weather) => {
          const date = new Date(weather.dt * 1000);
          const day = date.toISOString().split("T")[0];
          if (!dailyWeatherData[day]) dailyWeatherData[day] = [];
          dailyWeatherData[day].push(weather);
        });
        setWeather(dailyWeatherData);
      })
      .catch((err) => console.log(err));
  }, [city]);

  useEffect(() => {
    const apiUrl =
      "https://turkiyeapi.cyclic.app/api/v1/provinces?fields=id%2Cname";
    axios(apiUrl)
      .then(({ data }) => {
        const citysData = [];
        data.data.map((city) => {
          citysData.push(city.name);
        });
        setCitys(citysData);
      })
      .catch((error) => console.log(error));
  }, []);

  const values = {
    weathers,
    setWeather,
    city,
    setCity,
    citys,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context == undefined) {
    throw new Error(
      "useWeather sadece WeatherProvider içerisinde kullanılabilir..."
    );
  }
  return context;
};

WeatherProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { WeatherProvider, useWeather };
