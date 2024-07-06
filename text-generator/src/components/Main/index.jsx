import Footer from "../Footer";
import Header from "../Header";
import Inputs from "./inputs";
import ShowText from "./showText";

const Main = () => {
  return (
    <main className=" w-8/12 m-auto text-white relative min-h-screen">
      <Header />
      <Inputs />
      <ShowText />
      <Footer />
    </main>
  );
};

export default Main;
