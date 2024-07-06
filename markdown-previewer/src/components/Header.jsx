import { useDispatch } from "react-redux";
import { toggleHelp } from "../redux/markdownSlicer";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="relative text-3xl font-bold text-yellow-50 flex justify-center items-center h-8 p-10 border-b-2">
      <h1>Markdown Previewer</h1>
      <div
        onClick={() => dispatch(toggleHelp())}
        className="absolute right-8 bg-slate-100 w-10 h-10 flex justify-center items-center shadow-md rounded-lg cursor-pointer text-black/90 shadow-black"
      >
        ?
      </div>
    </header>
  );
};

export default Header;
