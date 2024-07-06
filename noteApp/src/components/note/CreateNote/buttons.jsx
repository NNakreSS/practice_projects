import { Button } from "@nextui-org/react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setActiveColor, addNote } from "../../../redux/reducers/noteReducer";

const Buttons = () => {
  const dispatch = useDispatch();
  const {
    colors,
    noteForm: { activeColor, title, note },
  } = useSelector((state) => state.note);

  const changeActiveColor = (color) => dispatch(setActiveColor(color));

  const addNewNote = () => {
    if (title == "" || note == "") {
      alert("Gerekli alanları doldurun");
    } else {
      dispatch(addNote({ title, note, color: activeColor }));
    }
  };

  return (
    <div>
      <div className="flex gap-2 mt-5">
        {colors.map((color, index) => (
          <Button
            onClick={() => changeActiveColor(color)}
            key={index}
            isIconOnly
            className={color}
          >
            {activeColor == color && <FaCheck />}
          </Button>
        ))}
      </div>
      <Button
        onClick={addNewNote}
        className="mt-3 float-end"
        color="success"
        variant="ghost"
        startContent={<MdOutlinePlaylistAdd className="text-3xl" />}
      >
        Add Note
      </Button>
    </div>
  );
};

export default Buttons;
