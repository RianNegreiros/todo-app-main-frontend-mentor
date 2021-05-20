import React from "react";
import "./input-styles.scss";

const Input = ({ inputText, setInputText, todos, setTodos }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

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
    setInputText("");
  };

  const handleFocus = (e) => {
    e.target.readOnly = false
  }

  return (
    <div className="input-container">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={handleChange}
          type="text"
          placeholder="Create a new todo..."
          readOnly
          onFocus={handleFocus}
          minLength="4"
          id="todoInput"
          className="input"
        />
      </form>
    </div>
  );
};

export default Input;
