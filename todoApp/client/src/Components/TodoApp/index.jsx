import Footer from "../Footer";
import Main from "../Main";
import Header from "../Header";
import "./style.css";

const TodoApp = () => (
  <>
    <div className="todoapp">
      <Header />
      <Main />
      <Footer />
    </div>
    <footer>NakreS Development / Todoyu editlemek için çift tıkla. </footer>
  </>
);

export default TodoApp;
