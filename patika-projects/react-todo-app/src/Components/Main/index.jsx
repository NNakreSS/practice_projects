import { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

const Main = () => {
  const { toggleTodo, deleteTodo, toggleAllTodo, prevTodos, updateTodo } =
    useTodo();
  const [editable, setEditable] = useState({});

  const labelOnBlur = (e, todo) => {
    editable[todo.id] == "true" &&
      setEditable({ ...editable, [todo.id]: "false" });

    updateTodo(todo.id, e.target.innerText);
    console.log(todo.id, e.target.innerText);
  };

  const labelOnDubleClick = (todo) =>
    !todo.completed && setEditable({ ...editable, [todo.id]: "true" });

  return (
    <section className="main">
      <div className="toggle-all" type="checkbox"></div>
      <label htmlFor="toggle-all" onClick={() => toggleAllTodo()}></label>
      <ul className="todo-list">
        {prevTodos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : undefined}>
            <div className="view">
              <input
                onClick={() => toggleTodo(todo.id)}
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                readOnly
              />
              <label
                className={
                  editable[todo.id] === "true" ? "editable" : undefined
                }
                contentEditable={editable[todo.id]}
                onBlur={(e) => labelOnBlur(e, todo)}
                onDoubleClick={() => labelOnDubleClick(todo)}
              >
                {todo.label}
              </label>
              <button
                className="destroy"
                onClick={() => deleteTodo(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
