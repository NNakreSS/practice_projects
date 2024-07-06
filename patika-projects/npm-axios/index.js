import getData from "./components/app.js";

getData(2)
  .then((responseData) => console.log(responseData))
  .catch((err) => console.log(err));
