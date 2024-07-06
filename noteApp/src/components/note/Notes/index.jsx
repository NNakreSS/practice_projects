import { useSelector } from "react-redux";
import Note from "./note";

function Notes() {
  let {
    notes,
    noteForm: { search },
  } = useSelector((state) => state.note);

  if (search != "")
    notes = notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-auto mt-10 box-border flex-wrap justify-start">
      {notes.map((note, index) => (
        <Note key={index} values={note} />
      ))}
    </div>
  );
}

export default Notes;
