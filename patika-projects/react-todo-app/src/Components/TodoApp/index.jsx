import TodoProvider from "../Contexts/TodoContext";
import Footer from "../Footer";
import Main from "../Main";
import Header from "../header";
import "./style.css";

const TodoApp = () => (
  <TodoProvider>
    <div className="todoapp">
      <Header />
      <Main />
      <Footer />
    </div>
    <footer>NakreS Development / Todoyu editlemek için çift tıkla. </footer>
  </TodoProvider>
);

export default TodoApp;
