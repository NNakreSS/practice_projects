import { Textarea } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setNote, setTitle } from "../../../redux/reducers/noteReducer";

const Inputs = () => {
  const dispatch = useDispatch();
  const { title, note } = useSelector((state) => state.note.noteForm);
  const titleChangeHandle = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const noteChangeHandle = (e) => {
    dispatch(setNote(e.target.value));
  };
  return (
    <>
      <Textarea
        isRequired
        label="Note Title"
        labelPlacement="outside"
        placeholder="Enter your note title..."
        minRows={1}
        variant="underlined"
        onChange={titleChangeHandle}
        value={title}
      />
      <Textarea
        value={note}
        onChange={noteChangeHandle}
        isRequired
        labelPlacement="inside"
        placeholder="Enter your note here..."
        disableAnimation
        disableAutosize
        classNames={{
          base: "max-w-xs",
          input: "resize-y min-h-[40px]",
        }}
        variant="bordered"
      />
    </>
  );
};

export default Inputs;
