// redux
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../redux/markdownSlicer";

const TextArea = () => {
  const dispatch = useDispatch();
  const { help, helpText, text } = useSelector((state) => state.markdown);

  const changeHandle = ({ target }) => {
    const value = target.value;
    dispatch(addText(value));
  };

  return (
    <textarea
      value={!help ? text : helpText}
      readOnly={help}
      rows={15}
      name="markdown-text-area"
      className="p-5 shadow-black/50 shadow-xl"
      onChange={changeHandle}
    />
  );
};

export default TextArea;
