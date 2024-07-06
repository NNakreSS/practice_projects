import { useSelector } from "react-redux";

const Loading = () => {
  const error = useSelector((state) => state.characters.error);
  return (
    <div className="w-full h-screen flex justify-center items-center text-4xl text-red-600">
      <span>{error}</span>
    </div>
  );
};

export default Loading;
