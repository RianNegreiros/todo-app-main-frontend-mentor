import React from "react";
import "./header-styles.scss";

const Header = () => {

  const themeToggle = () => {
    const todoContainer = document.querySelector('.todo-container')
    
    if(todoContainer === null) {
      document.querySelector('body').classList.toggle('bodyLight')
      document.querySelector('header').classList.toggle('headerLight')
      document.querySelector('.themeToggle').classList.toggle('themeToggleLight')
      document.querySelector('.todosUl').classList.toggle('todosUl-light')
      document.querySelector('.filtersMobile').classList.toggle('filtersMobileLight')
      document.querySelector('.input-container').classList.toggle('input-containerLight')
    } else {
      document.querySelector('body').classList.toggle('bodyLight')
      document.querySelector('header').classList.toggle('headerLight')
      document.querySelector('.themeToggle').classList.toggle('themeToggleLight')
      document.querySelector('.todosUl').classList.toggle('todosUl-light')
      document.querySelector('.input-container').classList.toggle('input-containerLight')
      document.querySelector('.todo-container').classList.toggle('todo-containerLight')
      document.querySelector('.todoSpan').classList.toggle('todoSpanLight')
    }
  }

  return (
    <header className="header">
      <div className="title-theme-container">
        <h1>TODO</h1>
        <div className="themeToggle" onClick={themeToggle}></div>
      </div>
    </header>
  );
};

export default Header;
