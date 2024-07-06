import { marked } from "marked";
// redux
import { useSelector } from "react-redux";

const MarkDownPreview = () => {
  const {
    text: markdownText,
    help,
    helpText,
  } = useSelector((state) => state.markdown);
  const parsedText = marked(help ? helpText : markdownText, { sanitize: true });
  const markDown = { __html: parsedText };
  return (
    <div
      className="prose h-full bg-white p-5 shadow-black/50 shadow-xl"
      dangerouslySetInnerHTML={markDown}
    ></div>
  );
};

export default MarkDownPreview;
