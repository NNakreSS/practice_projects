import { useWeather } from "../Contexts/weatherContext";
import style from "./style.module.css";

const date = new Date().toLocaleDateString();

const Header = () => {
  const { citys, setCity, city } = useWeather();

  const changeHandle = (e) => {
    const selected = e.target.value;
    setCity(selected);
  };

  return (
    <header className={style.header}>
      <div id={style.selectCity}>
        <label htmlFor="citys">Şehir : </label>
        <select
          defaultValue={city}
          onChange={changeHandle}
          name="citys"
          id="citys"
        >
          {citys?.map((city, i) => (
            <option key={i}>{city}</option>
          ))}
        </select>
      </div>
      <span>{date}</span>
    </header>
  );
};

export default Header;
