import { useRef } from "react";
import { useTodo } from "../Contexts/TodoContext";

const Header = () => {
  const { addTodo } = useTodo();
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
    console.log(inputRef.current.value);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          ref={inputRef}
        />
      </form>
    </header>
  );
};

export default Header;
