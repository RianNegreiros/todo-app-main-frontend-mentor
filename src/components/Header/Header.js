import React from "react";
import "./header-styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="title-theme-container">
        <h1>TODO</h1>
        <div className="themeToggle"></div>
      </div>
    </header>
  );
};

export default Header;
