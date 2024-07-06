import { FaGithub } from "react-icons/fa6";
import CreateNote from "./CreateNote";
import Header from "./Header";
import Notes from "./Notes";
import Search from "./Search";

function Main() {
  return (
    <div className="container m-auto">
      <Header />
      <CreateNote />
      <Search />
      <Notes />
      <footer className="w-full flex items-center justify-center mt-10 text-4xl">
        <a target="_blank" href="https://github.com/NNakreSS/react-redux-noteApp">
          <FaGithub />
        </a>
      </footer>
    </div>
  );
}

export default Main;
