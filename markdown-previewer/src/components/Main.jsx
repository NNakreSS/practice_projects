import Footer from "./Footer";
import Header from "./Header";
import MarkDownPreview from "./MarkDownPreview";
import TextArea from "./TextArea";

const Main = () => {
  return (
    <div className="w-10/12 m-auto">
      <Header />
      <main className="grid grid-cols-2 gap-5 my-5">
        <TextArea />
        <MarkDownPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
