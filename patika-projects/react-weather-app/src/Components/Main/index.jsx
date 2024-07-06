import { useWeather } from "../Contexts/weatherContext";
import propType from "prop-types";
import style from "./style.module.css";

const getDayName = (day) => {
  const daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamsa",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  return daysOfWeek[day];
};

const WeatherCard = ({ weathers }) => {
  if (!weathers) return <p>Hava durumu verileri alınıyor ...</p>;
  return (
    <>
      {Object.keys(weathers).map((key) => {
        const weatherData = weathers[key][0];
        const { dt_txt: date } = weatherData;
        const { description, icon } = weatherData.weather[0];
        const { temp: temprature } = weatherData.main;
        const tempratureCelcius = (temprature - 273.15).toFixed(2);
        const day = date.split(" ")[0].split("-")[2];
        const dayName = getDayName(new Date(date).getDay());
        const today = getDayName(new Date().getDay());
        return (
          <div
            className={
              style.weatherBox + " " + (today == dayName ? style.today : "")
            }
            key={key}
          >
            <div className={style.weatherItemBox + " " + style.weatherDays}>
              <span className={style["weather-day"]}>{day}</span>
              <span className={style["weather-dayName"]}>{dayName}</span>
            </div>
            <div className={style.weatherItemBox}>
              <img
                className={style["weater-icon"]}
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt="weather icon"
              />
            </div>
            <div className={style["weather-info"] + " " + style.weatherItemBox}>
              <span className={style["weather-temprature"]}>
                {tempratureCelcius} °C
              </span>
              <span className={style["weather-description"]}>
                {description}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Main = () => {
  const { weathers } = useWeather();
  return (
    <main id={style.main}>
      <WeatherCard weathers={weathers} />
    </main>
  );
};

WeatherCard.propTypes = {
  weathers: propType.object,
};

export default Main;
