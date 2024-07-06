import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectTodo } from "../../Redux/Reducers/todoSlice";
import { useEffect } from "react";
import { deleteAllCompletedTodosAsync } from "../../Redux/Reducers/services";

const Footer = () => {
  const { prevTodos, activeFilter, todos } = useSelector(selectTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(activeFilter));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("activeFilter", activeFilter);
  }, [activeFilter]);

  const handleDeleteAllcompleted = () => {
    if (confirm("Tamamlanmış tüm görevleri silmek üzeresiniz."))
      dispatch(deleteAllCompletedTodosAsync());
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {prevTodos.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => dispatch(setFilter("all"))}
            className={activeFilter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => dispatch(setFilter("active"))}
            className={activeFilter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => dispatch(setFilter("completed"))}
            className={activeFilter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={handleDeleteAllcompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
