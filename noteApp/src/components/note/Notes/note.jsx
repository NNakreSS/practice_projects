import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { MdDeleteSweep } from "react-icons/md";
import { FaStickyNote } from "react-icons/fa";
import NoteModal from "./noteModal";
import { deleteNote } from "../../../redux/reducers/noteReducer";
import { useDispatch } from "react-redux";
const Note = ({ values }) => {
  const dispatch = useDispatch();

  const deleteHanle = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <Card className={`${values.color} shadow-lg border-2 border-current`}>
      <CardHeader className="flex gap-3 max-h-12">
        <span className="text-ellipsis overflow-hidden text-nowrap">
          <FaStickyNote className=" inline-block text-2xl mr-2" />
          {values.title}
        </span>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-ellipsis overflow-hidden text-nowrap">
          {values.note}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-end gap-2">
        <NoteModal detail={values} />
        <Button
          onClick={() => deleteHanle(values.id)}
          isIconOnly
          color="default"
          variant="shadow"
        >
          <MdDeleteSweep className=" text-red-600 text-xl" />
        </Button>
      </CardFooter>
    </Card>
  );
};

Note.propTypes = {
  values: PropTypes.object,
};

export default Note;
