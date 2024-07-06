import { useTodo } from "../Contexts/TodoContext";

const Footer = () => {
  const { prevTodos, filter, setFilter, deleteComplatedTodos } = useTodo();
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
            onClick={() => setFilter("")}
            className={filter === "" ? "selected" : undefined}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter(false)}
            className={filter === false ? "selected" : undefined}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter(true)}
            className={filter === true ? "selected" : undefined}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={deleteComplatedTodos}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
