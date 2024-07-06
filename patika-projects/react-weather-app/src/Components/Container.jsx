import { WeatherProvider } from "./Contexts/weatherContext";
import Header from "./Header";
import Main from "./Main";
import styles from "./styles.module.css";

const Container = () => {
  return (
    <WeatherProvider>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    </WeatherProvider>
  );
};

export default Container;
