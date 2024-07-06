import { useSelector } from "react-redux";

// redux
const ShowText = () => {
  const { text, format } = useSelector((state) => state.text);
  return (
    <div className="p-10 w-10/12 bg-slate-600 min-h-56 m-auto mt-10 rounded-md">
      {text?.map((p, index) => (
        <p key={index} className={"m-2"}>
          {format == "html" && <span className="text-yellow-200">{"<p>"}</span>}
          {p}
          {format == "html" && <span className="text-yellow-200">{"</p>"}</span>}
        </p>
      ))}
    </div>
  );
};

export default ShowText;
