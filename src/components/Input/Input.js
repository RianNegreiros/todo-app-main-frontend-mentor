import React from "react";
import "./input-styles.scss";

const Input = ({ inputText, setInputText, todos, setTodos }) => {
  const handleChange = e => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText('')
  };

  return (
    <div className="input-container">
      <div className="check"></div>
      <form action="submit" onSubmit={handleSubmit}>
        <input value={inputText} onChange={handleChange} type="text" placeholder="Create a new todo..." id="todoInput" />
      </form>
    </div>
  );
};

export default Input;
