import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchText, setFormat } from "../../redux/slices/textGeneratorSlice";

const Inputs = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(2);
  const format = useSelector((state) => state.text.format);

  const chengeCountHandle = (e) => {
    setCount(e.target.value);
  };
  const changeFormatHandle = (e) => {
    dispatch(setFormat(e.target.value));
  };

  useEffect(() => {
    console.log("send");
    dispatch(fetchText(count, format));
  }, [format, count]);

  return (
    <form className="flex gap-10 text-black mt-5">
      <div className="grid grid-cols-1 grid-rows-2 gap-2">
        <label htmlFor="countParagraphs" className="text-white">
          Paragraphs
        </label>
        <input
          onChange={chengeCountHandle}
          type="number"
          value={count}
          name="countParagraphs"
          className="rounded-md p-1"
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-2 gap-2">
        <label htmlFor="countParagraphs" className="text-white">
          Include Type
        </label>
        <select
          name="countParagraphs"
          id="countParagraphs"
          className="rounded-md p-1"
          onChange={changeFormatHandle}
          value={format}
        >
          <option value="html">html</option>
          <option value="text">text</option>
        </select>
      </div>
    </form>
  );
};

export default Inputs;
