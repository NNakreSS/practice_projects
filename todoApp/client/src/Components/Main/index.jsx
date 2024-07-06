import { useDispatch, useSelector } from "react-redux";
import { selectTodo } from "../../Redux/Reducers/todoSlice";
import { useEffect, useState } from "react";
import {
  deleteTodosAsync,
  fetchTodos,
  toggleTodosAsync,
} from "../../Redux/Reducers/services";

const Main = () => {
  const dispatch = useDispatch();
  const { prevTodos, isLoading, error } = useSelector(selectTodo);
  const [editable, setEditable] = useState({});

  const labelOnBlur = (e, todo) => {
    editable[todo.id] == "true" &&
      setEditable({ ...editable, [todo.id]: "false" });

    updateTodo(todo.id, e.target.innerText);
  };

  const labelOnDubleClick = (todo) =>
    !todo.completed && setEditable({ ...editable, [todo.id]: "true" });

  const handleDeleteTodo = (id, label) => {
    if (confirm(label + " <- Öğesini silmek istediğinize emin misiniz ? "))
      dispatch(deleteTodosAsync(id));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (error)
    return (
      <div style={{ color: "red", margin: "1rem", fontSize: "1.2rem" }}>
        {error}
      </div>
    );

  if (isLoading)
    return (
      <section className="main">
        <div style={{ color: "gray", margin: "1rem", fontSize: "1.2rem" }}>
          Loading ...
        </div>
      </section>
    );

  return (
    <section className="main">
      <div className="toggle-all" type="checkbox"></div>
      <label htmlFor="toggle-all" onClick={() => toggleAllTodo()}></label>
      <ul className="todo-list">
        {prevTodos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : undefined}>
            <div className="view">
              <input
                onClick={() => dispatch(toggleTodosAsync(todo.id))}
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
                onClick={() => handleDeleteTodo(todo.id, todo.label)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
