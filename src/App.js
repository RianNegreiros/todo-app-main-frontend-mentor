import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    handleFilters();
  }, [todos, status])

  const handleFilters = () => {
    switch (status) {
      case "Active":
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      case "Completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
        case "All":
          setFiltered(todos);
          break;
      default:
        setFiltered(todos);
        break;
    }
  };

  console.log(todos)

  return (
    <>
      <Header />
      <Input
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos todos={todos} setTodos={setTodos} setStatus={setStatus} filtered={filtered} status={status} />
      <Footer />
    </>
  );
}

export default App;
