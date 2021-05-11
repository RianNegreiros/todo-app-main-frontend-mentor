import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    handleFilters();
  }, [todos, status]);

  const handleFilters = () => {
    switch (status) {
      case "Active":
        setFiltered(todos.filter((todo) => todo.completed === false));
        document.querySelector(".filterActive").classList.add('activedFilter')
        document.querySelector(".filterAll").classList.remove("activedFilter")
        document.querySelector(".filterCompleted").classList.remove("activedFilter")
        break;
      case "Completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        document.querySelector(".filterCompleted").classList.add('activedFilter')
        document.querySelector(".filterAll").classList.remove('activedFilter')
        document.querySelector(".filterActive").classList.remove('activedFilter')
        break;
      case "All":
        setFiltered(todos);
        document.querySelector(".filterAll").classList.add('activedFilter')
        document.querySelector(".filterActive").classList.remove("activedFilter")
        document.querySelector(".filterCompleted").classList.remove("activedFilter")
        break;
      default:
        setFiltered(todos);
        document.querySelector(".filterAll").classList.add('activedFilter')
        document.querySelector(".filterActive").classList.remove("activedFilter")
        document.querySelector(".filterCompleted").classList.remove("activedFilter")
        break;
    }
  };

  return (
    <>
      <Header />
      <Input
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        filtered={filtered}
        setFiltered={setFiltered}
        status={status}
      />
      <Footer />
    </>
  );
}

export default App;
