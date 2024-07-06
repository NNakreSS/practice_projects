import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo } from "../../Redux/Reducers/todoSlice";
import { addTodosAsync } from "../../Redux/Reducers/services";

const Header = () => {
  const dispatch = useDispatch();
  const { addNewTodoLoading } = useSelector(selectTodo);
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const label = inputRef.current.value;
    dispatch(addTodosAsync({ label }));
    inputRef.current.value = "";
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form
        style={{ display: "flex", alignItems: "center" }}
        onSubmit={onSubmit}
      >
        <input
          disabled={addNewTodoLoading}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          ref={inputRef}
        />
        {addNewTodoLoading && (
          <span style={{ marginRight: "1rem", width: "20%" }}>Loading ...</span>
        )}
      </form>
    </header>
  );
};

export default Header;
