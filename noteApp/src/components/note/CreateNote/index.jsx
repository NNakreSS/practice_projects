import Buttons from "./buttons";
import Inputs from "./inputs";

function CreateNote() {
  return (
    <div className="m-auto w-80 mt-5 flex flex-wrap gap-2">
      <Inputs />
      <Buttons />
    </div>
  );
}

export default CreateNote;
