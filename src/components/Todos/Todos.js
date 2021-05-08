import React from "react";
import "./todos-styles.scss";

const Todos = ({ todos, setTodos, setStatus, filtered, status }) => {
  const handleCheck = (id) => {
    document
      .getElementById(id)
      .children[0].firstElementChild.classList.toggle("checked");
    document
      .getElementById(id)
      .children[0].lastElementChild.classList.toggle("todoSpanChecked");

      setTodos(todos.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          }
        }
        return todo
      }))
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleStatus = (s) => {
    setStatus(s)
    console.log(status)
  }

  return (
    <ul className="todosUl">
      {filtered.map((todo) => {
        return (
          <div key={todo.id} id={todo.id} className="todo-container">
            <div className="check-container">
              <div
                className="check"
                onClick={() => {
                  handleCheck(todo.id);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path fill="none" stroke="#FFF" d="M1 4.304L3.696 7l6-6" />
                </svg>
              </div>
              <span className="todoSpan">{todo.text}</span>
            </div>
            <button
              type="button"
              onClick={() => handleDelete(todo.id)}
            ></button>
          </div>
        );
      })}
      <div className="todosFooter">
        <span className="itemsLeft">{todos.length} items left</span>
        <div className="filters">
          <span onClick={() => handleStatus('All')}>All</span>
          <span onClick={() => handleStatus('Active')}>Active</span>
          <span onClick={() => handleStatus('Completed')}>Completed</span>
        </div>
        <span className="clearCompleted" onClick={() => setTodos([])}>
          Clear Completed
        </span>
      </div>
    </ul>
  );
};

export default Todos;
