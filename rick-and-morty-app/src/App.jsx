// CSS
import "./App.css";
// ROTUE
import { Routes, Route, Link, NavLink } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Details from "./pages/Details";
// REDUX
import { useSelector } from "react-redux";
// COMPONENTS
import Header from "./Components/Header";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <main className={`${theme} text-foreground bg-background`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:char_id" element={<Details />} />
      </Routes>
    </main>
  );
}

export default App;
