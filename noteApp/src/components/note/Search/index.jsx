import { Input } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/reducers/noteReducer";
function Search() {
  const dispatch = useDispatch();
  const changeHandle = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="w-80 m-auto mt-12">
      <Input
        onChange={changeHandle}
        type="text"
        label="Search"
        labelPlacement={"outside"}
      />
    </div>
  );
}

export default Search;
