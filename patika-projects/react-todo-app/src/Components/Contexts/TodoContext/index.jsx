import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getStorage = localStorage.getItem("todos");
    const sTodos = getStorage ? JSON.parse(getStorage) : [];
    setTodos(sTodos);
  }, []);

  const [prevTodos, setPrevTodos] = useState(todos);
  const [filter, setFilter] = useState("");
  useEffect(
    () =>
      setPrevTodos(
        todos.filter((todo) =>
          filter === "" ? true : todo.completed === filter
        )
      ),
    [filter, todos]
  );

  const addTodo = (todoLabel) => {
    setTodos((_todos) => {
      const newTodos = [
        ..._todos,
        { label: todoLabel, id: _todos.length + 1, completed: false },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const toggleTodo = (id) => {
    setTodos((_todos) => {
      const newTodos = _todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const toggleAllTodo = () => {
    setTodos((_todos) => {
      const allCompleted = _todos.every((todo) => todo.completed);
      const newTodos = _todos.map((todo) => ({
        ...todo,
        completed: !allCompleted,
      }));
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      const prevTodos = [...prev];
      const selectedTodoIndex = prevTodos.findIndex((todo) => todo.id == id);
      prevTodos.splice(selectedTodoIndex, 1);
      localStorage.setItem("todos", JSON.stringify(prevTodos));
      return prevTodos;
    });
  };

  const updateTodo = (id, newLabel) => {
    setTodos((prev) => {
      const prevTodos = [...prev];
      const selectedTodoIndex = prevTodos.findIndex((todo) => todo.id == id);
      const selectedTodo = prevTodos[selectedTodoIndex];
      selectedTodo.label = newLabel;
      localStorage.setItem("todos", JSON.stringify(prevTodos));
      return prevTodos;
    });
  };

  const deleteComplatedTodos = () => {
    setTodos((prev) => {
      const prevTodos = prev.filter((todo) => !todo.completed && todo);
      localStorage.setItem("todos", JSON.stringify(prevTodos));
      return prevTodos;
    });
  };

  const values = {
    todos,
    setTodos,
    addTodo,
    filter,
    setFilter,
    toggleTodo,
    toggleAllTodo,
    deleteTodo,
    prevTodos,
    updateTodo,
    deleteComplatedTodos,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }
  return context;
};

export default TodoProvider;
export { useTodo };
